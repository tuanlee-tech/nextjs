# Next.js 9 → 10 (Pages Router era)

---

# 🧠 1. Tư duy gốc: “Data quyết định rendering, không phải page”

Sai lầm phổ biến của người mới:

> “Page này dùng SSG hay SSR?”

Cách nghĩ đúng trong production:

> “Dữ liệu của page này có đặc tính gì?”

---

## 3 câu hỏi bắt buộc trước khi chọn chiến lược:

### 1. Dữ liệu có thay đổi theo user không?

* Có → SSR hoặc middleware
* Không → SSG/ISR

---

### 2. Dữ liệu có thay đổi theo thời gian không?

* Không đổi → SSG
* Có đổi nhưng không cần realtime → ISR
* Realtime → SSR

---

### 3. SEO có quan trọng không?

* Có → ưu tiên SSG / ISR
* Không → SSR hoặc client fetch

---

# ⚙️ 2. Bản chất 3 chế độ (hiểu đúng để không sai production)

## 🟢 SSG (getStaticProps không fallback)

> “Build một lần, dùng mãi mãi”

✔ dùng khi:

* landing page
* docs
* marketing page
* content gần như không đổi

❌ sai lầm production:

* dùng cho data động (giá, inventory)

---

## 🟡 ISR (revalidate)

> “Static nhưng có vòng đời”

✔ dùng khi:

* product page
* blog
* listing page
* dashboard public data

💡 tư duy senior:

> ISR = cache layer built into framework

---

## 🔴 SSR (getServerSideProps)

> “Request nào cũng tính lại”

✔ dùng khi:

* auth-based content
* personalized data
* permission-sensitive page

❌ sai lầm lớn:

* dùng SSR vì “data động”
  → làm chết cache strategy

---

# 🔁 3. Fallback là nơi nhiều production bug nhất

## fallback: false

> “Everything must be prebuilt”

✔ safe nhất
❌ không scale được large catalog

---

## fallback: true

> “UX-first, client sẽ thấy loading”

✔ tốt cho app-style UX
❌ SEO edgecase:

* crawler thấy loading state
* hydration mismatch risk

---

## fallback: 'blocking' (quan trọng nhất production)

> “SEO-first + UX-clean”

✔ best choice cho:

* ecommerce
* blog lớn
* marketplace

💡 senior rule:

> Nếu không chắc → chọn `'blocking'`

---

# ⚠️ 4. Edge cases production (rất quan trọng)

## ❗ Case 1: Data tồn tại lúc build nhưng bị xóa sau đó

SSG sẽ:

* vẫn serve page cũ ❌ stale

👉 fix:

```js
revalidate: 60
```

---

## ❗ Case 2: Page không tồn tại trong DB

Sai:

```js
return { props: { post: null } }
```

Đúng:

```js
return { notFound: true }
```

💡 vì:

* SEO đúng HTTP 404
* tránh index garbage pages

---

## ❗ Case 3: Slug đổi (SEO migration)

Sai:

* render 404
* hoặc client redirect

Đúng:

```js
return {
  redirect: {
    destination: '/new-slug',
    permanent: true
  }
}
```

---

## ❗ Case 4: SSR lạm dụng vì “data dynamic”

Sai pattern:

> dùng SSR cho mọi thứ “vì data thay đổi”

Hậu quả:

* mất cache CDN
* tăng TTFB
* scale kém

---

## ❗ Case 5: ISR + fallback mismatch

Sai:

* fallback: true + UX phụ thuộc data

👉 user thấy loading UI không ổn định

Đúng:

* fallback: 'blocking' + ISR

---

# 🧭 5. Decision Matrix (senior cheat sheet)

## Dùng SSG khi:

* content static
* marketing / docs
* SEO + performance là ưu tiên tuyệt đối

---

## Dùng ISR khi:

* data public
* có update theo thời gian
* cần scale lớn (10k–1M pages)

👉 default choice cho production hiện đại

---

## Dùng SSR khi:

* user-specific
* auth required
* permission-based content
* real-time personalization

---

# 🔥 6. “Golden rule” production Next.js 9–10

> ❌ Đừng chọn rendering method theo kỹ thuật
> ✅ Hãy chọn theo “data lifecycle”

---

# 🧠 7. Mental model của senior Next.js

Bạn nên luôn map như sau:

```text
Data type
  ↓
Change frequency
  ↓
User dependency
  ↓
SEO requirement
  ↓
Pick: SSG / ISR / SSR
```

---

# 🚀 8. Tư duy nâng cao (điểm phân biệt senior)

## Next.js không phải SSR framework

Nó là:

> “Cache orchestration system giữa build-time và request-time rendering”

---

## ISR thực chất là:

```text
CDN cache + background regeneration
```

---

## fallback:'blocking' thực chất là:

```text
SSR lần đầu + SSG cho các lần sau
```

---

# 🧩 9. Điều quan trọng nhất (ít người nói)

> Performance không đến từ việc chọn đúng API
> mà đến từ việc “giữ cho request không phải render lại”

---

# 📌 Summary cực ngắn (senior mental snapshot)

* SSG → cố định
* ISR → cache có vòng đời
* SSR → cá nhân hóa
* fallback:

  * false → prebuild
  * true → UX streaming
  * blocking → production-safe default


---

Dưới đây là bản “production architecture”  cho ecommerce lớn (CMS + DB + Next.js + CDN) mở rộng lên **scale 10M products + Redis + ISR invalidation + read replica + CDN + edge SSR hybrid**.


---

# Bối cảnh hệ thống ecommerce thật

Một hệ thống production thường có:

```text id="cms01"
CMS (Contentful / Strapi / Sanity / custom CMS)
        ↓
Database (Postgres / MySQL / MongoDB)
        ↓
API Layer (BFF / GraphQL / REST)
        ↓
Next.js (SSG / ISR / SSR)
        ↓
CDN cache (Vercel / Cloudflare)
```



---

# 🧠 1. Tổng quan hệ thống ecommerce scale lớn

```text id="arch00"
                CMS (Contentful / Strapi)
                         ↓ webhook
                  Event / Queue Layer
                         ↓
                 Backend API (BFF)
                         ↓
        ┌────────────────────────────────┐
        │   Database (Read Replica)     │
        │   Primary (Write)             │
        └────────────────────────────────┘
                         ↓
                 Redis Cache Layer
                         ↓
                    Next.js
     (SSG / ISR / SSR / Edge Rendering)
                         ↓
                     CDN
```

---

# ⚙️ 2. WEBHOOK hoạt động như thế nào (rất quan trọng)

## ❗ Hiểu sai phổ biến:

> “CMS tự update Next.js”

❌ Sai

---

## ✅ Đúng bản chất:

Webhook là **HTTP callback từ CMS → hệ thống của bạn**

---

## 📌 Flow thực tế:

### Bước 1: Editor publish content

Ví dụ:

* update product
* update blog
* update price

---

### Bước 2: CMS gửi webhook

CMS sẽ gọi API của bạn:

```http id="wh01"
POST https://api.yourapp.com/webhook/revalidate
```

Payload:

```json id="wh02"
{
  "type": "product",
  "slug": "iphone-15",
  "action": "update"
}
```

---

### Bước 3: Backend xử lý webhook

```js id="wh03"
export default async function handler(req, res) {
  const { slug } = req.body;

  // 1. invalidate Redis cache
  await redis.del(`product:${slug}`);

  // 2. trigger Next.js ISR revalidation
  await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/revalidate?secret=xxx&slug=${slug}`
  );

  res.json({ revalidated: true });
}
```

---

### Bước 4: Next.js ISR revalidate

```js id="wh04"
export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const { slug } = req.query;

  await res.revalidate(`/product/${slug}`);

  return res.json({ revalidated: true });
}
```

---

## 💡 Kết quả:

```text id="wh05"
CMS publish
 → webhook
 → backend
 → Redis invalidation
 → Next.js ISR revalidate
 → CDN cache updated
```

---

# 🚀 3. Scale 10M products architecture

## ❗ Vấn đề:

* không thể build hết SSG
* DB không chịu nổi SSR full load
* search + product pages cực lớn

---

# 🧱 4. Kiến trúc tối ưu production

## 🔵 Layer 1: Database (scale lớn)

### Primary DB:

* write operations
* inventory updates

### Read Replica:

* product queries
* category listing
* search API

```text id="db01"
Write → Primary DB
Read  → Replica DB
```

---

💡 Rule:

> SSR/ISR không bao giờ query write DB

---

# 🟡 Layer 2: Redis cache (critical layer)

## Cache keys:

```text id="redis01"
product:iphone-15
category:shoes
search:iphone
```

---

## Flow:

```text id="redis02"
Next.js → Redis
    ↓ hit
  return instantly

    ↓ miss
  DB query → cache result
```

---

💡 Senior rule:

> Redis = primary performance layer, ISR = secondary cache layer

---

# 🟠 Layer 3: Next.js ISR layer

## Product page:

```js id="isr02"
fallback: 'blocking'
revalidate: 60
```

---

## Behavior:

```text id="isr03"
CDN miss
  ↓
ISR generate page
  ↓
cache CDN + Next.js
```

---

# 🔴 Layer 4: CDN (Vercel / Cloudflare)

## Responsibilities:

* serve HTML instantly
* cache ISR output
* reduce origin load 90–99%

---

💡 Rule:

> CDN is first line of response, not Next.js

---

# 🧠 5. Hybrid rendering strategy (real production)

## 🟢 Static (SSG)

* marketing pages
* homepage

---

## 🟡 ISR

* products
* categories
* blogs

---

## 🔴 SSR

* cart
* checkout
* account

---

## ⚡ Edge rendering (Next.js Edge Runtime)

Dùng khi:

* personalization nhẹ
* geo-based content
* A/B testing
* low-latency routing

---

```js id="edge01"
export const runtime = 'edge'
```

---

# ⚡ 6. Khi ISR KHÔNG ĐỦ (critical production cases)

## ❗ Case 1: stock thay đổi theo giây

ISR 60s → sai dữ liệu

👉 Solution:

* SSR hoặc Edge SSR

---

## ❗ Case 2: pricing dynamic (flash sale)

👉 ISR không đủ realtime

👉 dùng:

* Redis real-time cache
* SSR fallback

---

## ❗ Case 3: personalization (user-based pricing / region)

👉 ISR không phù hợp

👉 dùng:

* Edge SSR
* Middleware + headers

---

# 🧠 7. Evolution decision matrix (senior level)

## Nếu data:

### 🟢 Static

→ SSG

---

### 🟡 Public + large scale

→ ISR + blocking

---

### 🔴 Real-time / user-specific

→ SSR

---

### ⚡ Geo / personalization nhẹ

→ Edge SSR

---

# 🔥 8. Production-grade ecommerce architecture

```text id="arch10"
                        CMS
                         ↓ webhook
                    Event Queue
                         ↓
                     Backend API
                         ↓
        ┌────────────────────────────────┐
        │         Redis Cache           │
        └────────────────────────────────┘
                         ↓
        ┌────────────────────────────────┐
        │      Read Replica DB          │
        └────────────────────────────────┘
                         ↓
                Next.js ISR / SSR
                         ↓
                      CDN
```

---

# ⚠️ 9. Edge cases cực quan trọng

## ❗ Cache inconsistency

CMS update ≠ Redis update ≠ ISR update

👉 fix:

* webhook sync + queue retry

---

## ❗ Hot product traffic spike

👉 fix:

* CDN cache warmup
* ISR pre-generation
* Redis fallback

---

## ❗ Search explosion (10M products)

👉 fix:

* Elasticsearch / Meilisearch
* không dùng ISR cho search query keyspace

---

# 💡 10. Senior mindset chốt lại

> Next.js không phải nơi xử lý dữ liệu
> mà là nơi quyết định “khi nào dữ liệu được serve từ cache nào”

---

# 🚀 11. Một câu chốt kiểu senior architect

> Ecommerce scale lớn không phải vấn đề rendering, mà là vấn đề orchestration giữa CMS → DB → cache layers → CDN.

---

Level cao hơn nữa:

👉 “Thiết kế hệ thống giống Amazon: event-driven cache invalidation + multi-region ISR + edge caching strategy”
👉 hoặc “khi nào phải bỏ Next.js SSR/ISR và chuyển sang full backend-driven rendering architecture”

