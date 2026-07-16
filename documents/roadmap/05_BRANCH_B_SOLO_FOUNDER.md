# NHÁNH B: SOLO FOUNDER

## Bối cảnh

Sau khi hoàn thành **3 khối lõi chung** (Frontend, Backend, DevOps), bạn đứng ở **điểm rẽ nhánh**. Nếu hoàn cảnh thực tế nghiêng về con đường **tự kinh doanh — xây sản phẩm, tìm user thật, và thu phí** — bạn chọn Nhánh B.

**Nhánh B không dạy bạn "trở thành triệu phú trong 6 tháng".** Founder thành công là sự kết hợp của:
1. **Nền tảng kỹ thuật** đủ để tự vận hành sản phẩm (đã có từ 3 khối lõi).
2. **Kỹ năng kinh doanh** tích lũy qua va chạm thực tế: đàm phán với khách hàng đầu tiên, chịu đựng 3 tháng không doanh thu, biết khi nào pivot và khi nào kiên trì, và hiểu rằng **sales quan trọng hơn code ở giai đoạn đầu**.

Chặn này cung cấp phần **(1)** củng cố + **hướng dẫn phần (2)** — nhưng không thể thay thế việc bạn tự đối mặt với thị trường. Dữ liệu khảo sát solo founder gần đây cho thấy **burnout** (không phải chiến lược sai hay code dở) là yếu tố dự báo thất bại lớn nhất. Nhánh B được thiết kế để giảm thiểu gánh nặng vận hành thủ công, tránh over-engineer, và giữ nhịp bền vững.

---

* **Mục tiêu:** Launch **MVP có user thật**, thu phí sớm, đạt **doanh thu đủ trang trải chi phí** hoặc traction rõ ràng để scale — KHÔNG phải "startup unicorn trong 12 tháng". Founder thật đòi hỏi track record qua thực chiến: bạn đã từng gọi 50 cuộc cold call, đã từng pivot khi ý tưởng A chết, đã từng xử lý refund lúc nửa đêm. Không roadmap nào rút ngắn phần này.
* **Thời gian dự kiến:** B1 (1–2 tháng) → B2/B3 (liên tục, không có điểm dừng cố định). Bạn vừa học vừa làm, vừa launch vừa iterate.
* **Thuộc:** **Nhánh B** — chỉ dành cho người chọn tự kinh doanh. Nếu chọn Nhánh A (Staff/Architect), bỏ qua toàn bộ chặn này.
* **Milestone:** Validate được 1 core problem có người trả tiền thật; launch MVP lên production trong < 1 tháng sau khi validate; có 10 paying customer hoặc $100 MRR (Monthly Recurring Revenue) đầu tiên; viết được 1 bài "Build in Public" thu hút 100+ người quan tâm.

> **Vì sao ghi chú này quan trọng:** Solo founder không thiếu kỹ thuật. Họ thiếu **kỷ luật thu phí sớm** và **khả năng nói chuyện với người dùng** thay vì ngồi optimize database. Kỹ năng đó không tự nhiên có được từ việc đọc sách — nó cần đẩy bản thân ra khỏi vùng an toàn kỹ thuật.

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NHÁNH B: SOLO FOUNDER                                                      │
│  Mục tiêu: Validate nhu cầu → Launch MVP → Thu phí → Iterate theo data     │
│  Thờii gian: B1 (1–2 tháng) → B2/B3 (liên tục)                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  B1: VALIDATE TRƯỚC KHI BUILD                                               │
│  • Lean Startup, MVP Validation                                             │
│  • No-code test nhu cầu trước khi code (landing page, form đăng ký chờ)     │
│  • Customer discovery: user interview thật, không hỏi ý kiến chung chung    │
│  • Xác định 1 "core problem" hẹp thay vì sản phẩm đa năng ngay từ đầu       │
│  ─────────────────────────────────────────────────────────────────────────  │
│  B2: DEPLOY TỐI GIẢN                                                        │
│  • VPS đơn giản + Docker Compose là đủ cho rất lâu (không cần K8s)          │
│  • Feature Flags cơ bản nếu cần (Unleash open-source, không cần             │
│    LaunchDarkly trả phí ở giai đoạn đầu)                                    │
│  • Staging environment đơn giản                                             │
│  • Chỉ học Terraform/Vault/Service Mesh/Kafka khi THẬT SỰ chạm giới hạn    │
│    của Docker Compose + 1 VPS — không học trước "phòng khi cần"             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  B3: PRODUCT, GROWTH & BUSINESS                                             │
│  • Metrics: AARRR, North Star Metric, CAC/LTV, Unit Economics               │
│  • Analytics: PostHog/Amplitude, SQL for product analytics                  │
│  • UX Research: A/B Testing (statistical significance)                      │
│  • Pricing: Freemium, Tiered, Usage-based, Stripe/Paddle integration        │
│  • Growth: SEO, Content marketing, Viral loops, Referral programs           │
│  • Sales trực tiếp: cold outreach, demo, closing — quan trọng hơn           │
│    kỹ thuật ở giai đoạn đầu, trước đây bản v1 chỉ có marketing chứ chưa    │
│    có sales chủ động                                                        │
│  • Đăng ký kinh doanh: hộ kinh doanh cá thể / công ty TNHH tại              │
│    Việt Nam — rào cản pháp lý thực tế đầu tiên khi có doanh thu             │
│  • Cofounder & equity dynamics (nếu có cofounder): vesting,                 │
│    cap table cơ bản, thỏa thuận sáng lập                                    │
│  • Legal: Terms of Service, Privacy Policy, GDPR, Software licenses         │
│  • Financial: Burn rate, Runway, Fundraising basics (Seed, Series A)        │
│  • Customer Support: Intercom/Crisp, SLA, Ticketing system                  │
│  • Hiring & Team Building: khi có traction thật, cần scale team             │
│  • Tech Lead skills: RFC/ADR, Tech Debt — vẫn cần dù đang solo, để chuẩn   │
│    bị scale team sau này                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN

### 1.1. Mục tiêu đạt được

Sau chặn này, bạn phải:

- [ ] **Validate được 1 core problem** bằng 10+ user interview thật — không phải "hỏi ý kiến bạn bè"
- [ ] **Launch MVP trong < 1 tháng** sau khi validate — dùng stack đã có (Next.js + NestJS + PostgreSQL), không học thêm framework mới
- [ ] **Thu phí sớm** — ít nhất 1 người trả tiền thật trong tháng đầu tiên sau launch
- [ ] **Hiểu unit economics cơ bản:** CAC (Cost to Acquire Customer) < LTV (Lifetime Value) × 1/3
- [ ] **Tự vận hành production** ở mức solo: deploy, monitor, backup, rollback — không cần SRE team
- [ ] **Viết được 1 bài "Build in Public"** chia sẻ journey, thu hút 100+ người quan tâm
- [ ] **Biết khi nào pivot:** nếu sau 3 tháng không có traction, có framework để quyết định tiếp tục hay dừng
- [ ] **Hiểu cơ bản pháp lý VN:** hộ kinh doanh cá thể vs TNHH, thuế, hóa đơn điện tử

> **Điều roadmap KHÔNG thể cho bạn:** khả năng chịu đựng 6 tháng không lương, quan hệ với khách hàng đầu tiên để họ giới thiệu thêm 3 người, và "mùi" cảm nhận được thị trường đang thiếu gì. Những thứ này chỉ có qua thờii gian và va chạm thực tế.

### 1.2. Thờii gian & Lộ trình đề xuất

```
Tháng 1 (B1):   VALIDATE
                • Tuần 1: Xác định core problem, tìm 20 người tiềm năng
                • Tuần 2: No-code landing page (Webflow/Carrd/Notion + Stripe)
                • Tuần 3: 10 user interview (30 phút/người, ghi âm, transcribe)
                • Tuần 4: Phân tích data, quyết định "có nên build không"
                ↳ Nếu < 3 người sẵn sàng trả tiền → pivot hoặc dừng

Tháng 2 (B2+B3): LAUNCH MVP
                • Tuần 1: Scope MVP cực hẹp — 1 feature giải quyết core problem
                • Tuần 2: Code MVP (dùng stack K1+K2+K3 đã có)
                • Tuần 3: Deploy (Vercel + Railway/Render, hoặc VPS + Docker Compose)
                • Tuần 4: Thu phí sớm — gọi 10 người đã interview, đóng 1–2 sale

Tháng 3+ (B3):  ITERATE & GROWTH
                • Mỗi tuần: đo 1 metric (activation, retention, revenue)
                • Mỗi tháng: 1 bài Build in Public
                • Song song: setup legal (hộ kinh doanh), banking, support
                • Khi MRR > $500: cân nhắc scale team hoặc tự làm tiếp
```

> **Điều chỉnh thực tế:** Nếu sau B1 không có tín hiệu rõ ràng, **KHÔNG** code tiếp. Pivot hoặc tìm problem khác. Đừng rơi vào "sunk cost fallacy" vì đã học 9 tháng trước đó.

### 1.3. Kiến thức thuộc Nhánh B

Toàn bộ chặn này thuộc **Nhánh B**. Nếu bạn chọn Nhánh A (Staff/Architect), **KHÔNG học** sales, legal kinh doanh, hay growth hacking — chúng là distraction khi bạn cần focus vào system design.

---

## PHẦN 2: B1 — B3 KIẾN THỨC & QUYẾT ĐỊNH CÔNG NGHỆ

### 2.1. Validate trước khi build (B1)

**Vấn đề thực tế:** Bạn code 6 tháng, tốn 500 giờ, launch rồi không ai dùng. Lý do: bạn giả định "mọi người cần" mà không hỏi ai.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| No-code Landing Page | Test nhu cầu trước khi code — đo conversion rate, email sign-up | Đã có product, cần feature phức tạp |
| User Interview (1-on-1) | Hiểu pain point sâu, phát hiện need chưa nghĩ đến | Đếm số đông — dùng survey cho đó |
| Concierge MVP | Làm thủ công cho 5 khách đầu tiên, sau đó automate | Scale > 100 user — không làm nổi thủ công |
| Fake Door (Form đăng ký chờ) | Test demand cho feature chưa build — "Coming soon" | Đã build xong, chỉ cần marketing |

**Quyết định mặc định:** No-code landing page + Fake Door cho đo demand. 10 user interview trước khi viết dòng code đầu tiên. Concierge MVP cho 5 khách đầu tiên nếu có thể.

**Anti-pattern:** "Tôi không cần validate, tôi từng là dev 5 năm, tôi biết user cần gì" — 90% founder kỹ thuật thất bại vì câu này.

- [ ] **Lean Startup:**
  - [ ] Build → Measure → Learn loop < 2 tuần/lần
  - [ ] Hypothesis: "Tôi tin [nhóm user] cần [giải pháp] vì [problem]"
  - [ ] Validated learning: chỉ count data từ hành động thật (trả tiền, dùng 3 ngày liên tiếp), không phải "nghe hay đó"
- [ ] **Customer Discovery:**
  - [ ] Hỏi về **lịch sử** (kể lần cuối gặp vấn đề này), không hỏi ý kiến (anh có dùng không?)
  - [ ] Hỏi 5 lý do "tại sao" để đào sâu root cause
  - [ ] Tìm "hair on fire" problem — user đang tự giải quyết bằng cách cồng kềnh/đắt đỏ
- [ ] **No-code Stack:**
  - [ ] Landing: Carrd / Webflow / Framer (1 buổi xong)
  - [ ] Form: Tally / Typeform (thu thập email)
  - [ ] Payment: Stripe Payment Link (chưa cần tích hợp API)
  - [ ] Waitlist: Notion / Airtable quản lý
- [ ] **Core Problem Hẹp:**
  - [ ] Không làm "platform all-in-one" — làm 1 feature giải quyết 1 pain điểm
  - [ ] Ví dụ: Không "app quản lý doanh nghiệp" → "tool tự động gửi invoice nhắc nợ"
  - [ ] Nếu không giải thích được trong 1 câu → quá rộng

---

### 2.2. Deploy tối giản (B2)

**Vấn đề thực tế:** Bạn có 10 user đầu tiên. Bạn mất 2 tuần setup K8s cluster, Terraform module, và GitOps pipeline. User chán chờ, bạn hết tiền VPS.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| VPS + Docker Compose | < 10K user, 1 dev, cần kiểm soát cost | > 50K user, team > 3 người |
| Railway / Render | Cần deploy nhanh, không quản lý server, cost không quan trọng | Cost-sensitive long-term, cần custom network |
| Vercel (FE) + Railway (BE) | MVP nhanh, Next.js fullstack | Cần BE tách riêng phức tạp |
| Feature Flags (Unleash) | Cần tắt/bật feature không deploy lại | Chỉ 1 feature, chưa cần toggle |

**Quyết định mặc định:** VPS ($5–20/tháng) + Docker Compose (Next.js + NestJS + PostgreSQL + Redis) cho đến khi thật sự chạm giới hạn. Vercel cho FE nếu muốn nhanh hơn. Unleash open-source nếu cần feature flag.

**Anti-pattern:** Học Terraform và K8s vì "chuẩn chỉnh" — bạn đang đốt tiền và thờii gian cho infrastructure khi chưa có product-market fit.

- [ ] **VPS Setup:**
  - [ ] Ubuntu LTS, Docker + Docker Compose
  - [ ] `docker-compose.yml`: app, db, redis, nginx trên 1 file
  - [ ] Health check đơn giản: `curl -f http://localhost:3000/health || exit 1`
  - [ ] Log rotation: `logrotate` hoặc Docker `max-size` để không đầy disk
- [ ] **CI/CD Đơn giản:**
  - [ ] GitHub Actions: push `main` → build image → SSH vào VPS → `docker-compose pull && up -d`
  - [ ] Không cần blue/green — downtime 30 giây chấp nhận được cho MVP
  - [ ] Backup trước mỗi deploy: `pg_dump` tự động
- [ ] **Staging:**
  - [ ] 1 VPS riêng hoặc chạy local với `docker-compose` + test data
  - [ ] Không cần "production-like" hoàn hảo — chỉ cần test flow chính trước khi lên prod
- [ ] **Feature Flags:**
  - [ ] Unleash self-hosted (Docker) hoặc đơn giản: env var `FEATURE_X=true`
  - [ ] Dùng để tắt feature mới nếu lỗi, không cần rollback deploy
- [ ] **Scale khi nào:**
  - [ ] Vertical scale (nâng RAM/CPU VPS) trước khi horizontal
  - [ ] Chỉ tách service khi 1 component thật sự là bottleneck (thường là DB)
  - [ ] **Không học trước:** K8s, Terraform, Kafka, Service Mesh — học khi VPS + Docker Compose thật sự không đủ

---

### 2.3. Product, Growth & Business (B3)

**Vấn đề thực tế:** Bạn có 100 user đăng ký miễn phí. 2 tháng sau, 3 người trả tiền. Bạn không biết tại sao 97 người kia không convert, và bạn sắp hết tiền.

#### 2.3.1. Metrics & Analytics

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| PostHog | Open-source, product analytics, funnel, session replay | Không muốn self-host, dùng Plausible |
| Plausible | Privacy-focused, đơn giản, không cookie banner | Cần funnel phức tạp, cohort analysis |
| Google Analytics 4 | Free, SEO data tích hợp | Phức tạp, sampling, privacy concern |
| SQL trực tiếp | Cohort analysis, churn prediction tùy chỉnh | Không biết SQL, dùng GUI trước |

**Quyết định mặc định:** PostHog (self-host hoặc cloud free tier) cho product analytics. SQL trực tiếp trên PostgreSQL cho cohort cơ bản.

**Anti-pattern:** Đo 20 metric mỗi ngày, không biết metric nào quan trọng — "paralysis by analysis".

- [ ] **AARRR Framework:**
  - [ ] Acquisition: user đến từ đâu? (SEO, referral, content)
  - [ ] Activation: user làm gì lần đầu để thấy value? (aha moment)
  - [ ] Retention: quay lại sau 1 ngày, 7 ngày, 30 ngày?
  - [ ] Revenue: % free → paid, ARPU (Average Revenue Per User)
  - [ ] Referral: user giới thiệu được bao nhiêu người? (NPS, viral coefficient)
- [ ] **North Star Metric:**
  - [ ] 1 metric duy nhất phản ánh value core (vd: số invoice tự động gửi thành công)
  - [ ] Tất cả feature mới phải hỏi: "có làm tăng North Star không?"
- [ ] **Unit Economics:**
  - [ ] CAC: chi phí để có 1 paying customer (ads, thờii gian sales)
  - [ ] LTV: tổng doanh thu từ 1 customer trong vòng đời
  - [ ] **Quy tắc:** CAC < LTV / 3. Nếu không, business model không bền vững.

#### 2.3.2. UX Research & Pricing

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| A/B Test | Có > 1000 user, cần statistical significance | < 100 user — hỏi trực tiếp nhanh hơn |
| Freemium | Network effect, cần nhiều user để tạo giá trị (Notion, Figma) | B2B tool đơn giản, user trả tiền ngay |
| Tiered Pricing | Phân khúc user rõ (solo, team, enterprise) | Chỉ 1 loại user, 1 mức giá đủ |
| Usage-based | Cost tỷ lệ với giá trị (Stripe, AWS) | Khó dự đoán bill cho user, gây anxiety |

**Quyết định mặc định:** Tiered Pricing (Free/Pro/Business) cho SaaS. Freemium chỉ nếu có network effect. Usage-based khi cost infrastructure tỷ lệ với usage.

**Anti-pattern:** Miễn phí mãi vì "sợ user bỏ đi" — bạn không có business, bạn có charity.

- [ ] **Pricing Strategy:**
  - [ ] Thu phí sớm — ngay từ ngày launch nếu có thể
  - [ ] Giá đầu tiên: đoán → test → điều chỉnh. Không cần perfect.
  - [ ] Annual discount: 2 tháng miễn phí để improve cash flow
  - [ ] Không giảm giá vĩnh viễn cho early user — giảm 50% 3 tháng đầu thôi
- [ ] **A/B Testing cơ bản:**
  - [ ] Chỉ test 1 biến số mỗi lần (giá, headline, CTA button)
  - [ ] Sample size calculator: cần bao nhiêu user để kết luận?
  - [ ] Nếu < 100 user/tuần → hỏi trực tiếp, không cần A/B

#### 2.3.3. Growth & Sales

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| SEO / Content | Long-term, organic, rẻ — nhưng chậm 3–6 tháng | Cần user ngay tuần sau |
| Cold Outreach | B2B, deal size cao, cần 10–20 khách đầu tiên | B2C mass market, không scale |
| Paid Ads (Google/Facebook) | Có budget, đã optimize funnel, CAC rõ ràng | Chưa biết funnel, đốt tiền không ra data |
| Viral Loop | Product có tính chia sẻ tự nhiên (Calendly, Dropbox) | Tool nội bộ, không có social component |

**Quyết định mặc định:** Content marketing + SEO song song với Cold outreach (B2B) hoặc Product Hunt launch (B2C). Paid ads chỉ khi LTV/CAC rõ ràng.

**Anti-pattern:** Đăng lên Product Hunt, lên #1, có 1000 sign-up, 0 trả tiền — rồi nghĩ "thị trường không cần". Thực ra bạn chưa bán.

- [ ] **Sales cho Founder Kỹ thuật:**
  - [ ] Cold email: 50 email/ngày, follow-up 3 lần, không spam
  - [ ] Demo: 15 phút, không 45 phút. Focus vào pain point, không feature.
  - [ ] Closing: hỏi "anh chị muốn bắt đầu tuần này hay tuần sau?" — assumptive close
  - [ ] Xử lý objection: "đắt" → so sánh với cost thờii gian hiện tại
  - [ ] **Sales quan trọng hơn code ở giai đoạn đầu.** Nếu bạn không bán được, không có tiền để code tiếp.
- [ ] **Content Marketing:**
  - [ ] Viết về problem, không viết về product (ví dụ: "Cách tôi giảm 10 giờ làm invoice" thay vì "Giới thiệu InvoicePro")
  - [ ] Build in Public: chia sẻ revenue, struggle, decision — tạo accountability và audience
  - [ ] SEO: long-tail keywords, technical blog giải quyết problem cụ thể

#### 2.3.4. Legal, Financial & Operations

- [ ] **Đăng ký kinh doanh VN:**
  - [ ] Hộ kinh doanh cá thể: đơn giản, thuế khoán, phù hợp doanh thu < 100 triệu/quý
  - [ ] Công ty TNHH: phức tạp hơn, nhưng cần khi có cofounder, gọi vốn, hoặc doanh thu lớn
  - [ ] Thuế GTGT: đăng ký khi doanh thu đến ngưỡng (theo quy định hiện hành)
  - [ ] Hóa đơn điện tử: bắt buộc khi có doanh thu — dùng Mekong, Misa, hoặc tương đương
- [ ] **Cofounder (nếu có):**
  - [ ] Vesting: 4 năm, cliff 1 năm — không chia đều 50/50 ngay từ đầu
  - [ ] Cap table: giữ > 60% nếu bạn là founder chính + technical
  - [ ] Thỏa thuận sáng lập: viết ra, ký, scan — không tin "tin nhau là đủ"
- [ ] **Financial:**
  - [ ] Burn rate: tổng chi phí/tháng (server, tool, ăn ở, marketing)
  - [ ] Runway: số tiền còn lại / burn rate = số tháng còn sống
  - [ ] **Quy tắc:** Runway > 12 tháng luôn. Nếu < 6 tháng → tìm cách giảm burn hoặc tăng revenue ngay.
- [ ] **Customer Support:**
  - [ ] Crisp / Intercom (free tier đầu) — chat real-time
  - [ ] Notion / GitHub Issues làm internal ticketing
  - [ ] SLA: trả lời trong 2 giờ làm việc (không cần 24/7 khi mới bắt đầu)
  - [ ] Tự làm support 3 tháng đầu — hiểu user hơn bất kỳ AI nào
- [ ] **Hiring khi có traction:**
  - [ ] Thuê người đầu tiên: không cần "senior", cần "hungry + học nhanh"
  - [ ] Outsourcing: design, content, accounting — không outsource core product
  - [ ] RFC/ADR vẫn cần dù solo — để chuẩn bị scale team sau này

---

### 2.4. System Design cho Solo Founder — Kiến trúc tối giản

**Vấn đề thực tế:** Bạn là 1 người. Bạn không có 10 engineer để vận hành microservices. Làm sao thiết kế hệ thống vừa đủ chạy, vừa dễ sửa, vừa rẻ?

**Khung thiết kế Solo Founder (khác Nhánh A):**

```
┌─────────────────────────────────────────────────────────────┐
│  Cloudflare (DNS + CDN + SSL + DDoS)                        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  VPS (1 node, $10–40/tháng)                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Nginx      │  │  Next.js    │  │  NestJS     │        │
│  │  Reverse    │→ │  (Frontend) │  │  (Backend)  │        │
│  │  Proxy      │  │             │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│  ┌─────────────┐  ┌─────────────┐                          │
│  │  PostgreSQL │  │  Redis      │  Docker Compose           │
│  │  (DB +      │  │  (Cache +   │  trên 1 VPS              │
│  │   pgvector) │  │  Session)   │                          │
│  └─────────────┘  └─────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

**Nguyên tắc:**
- **Monolith trước, tách sau.** NestJS modular là đủ cho 99% solo SaaS đầu tiên.
- **PostgreSQL làm tất:** relational data + vector search (pgvector) + JSONB linh hoạt. Không cần thêm MongoDB, Elasticsearch, Pinecone.
- **Redis làm tất:** cache + session + queue (BullMQ) + rate limit.
- **Scale vertical trước:** nâng RAM/CPU VPS lên 4GB/2core trước khi nghĩ đến multi-server.

**Anti-pattern:** "Tôi thiết kế microservices để dễ scale sau này" — bạn không có "sau này" nếu tốn 6 tháng setup thay vì 2 tuần launch.

- [ ] **Khi nào tách:**
  - [ ] BE API response time > 2 giây do 1 tính năng nặng (AI inference, report) → tách worker
  - [ ] DB CPU > 80% liên tục → read replica hoặc optimize query trước
  - [ ] Cần deploy FE nhiều lần/ngày mà không muốn risk BE → tách deploy, không tách codebase
- [ ] **Khi nào KHÔNG tách:**
  - [ ] < 1000 paying user
  - [ ] < 5 API endpoints có traffic đáng kể
  - [ ] Bạn là 1 người — cognitive load của microservices giết chết velocity

---

### 2.5. Bảo mật & Compliance (rải trong từng mục)

> Không dồn thành 1 checklist cuối. Bảo mật ở Nhánh B là "đủ để không bị hack cơ bản và không bị phạt".

- [ ] **Auth:** Không tự build auth — dùng Clerk/Supabase Auth. JWT rotate, httpOnly cookie.
- [ ] **Payment:** Stripe webhook verify signature. Không lưu thẻ trên server.
- [ ] **Input:** Zod validate mọi input. SQL injection không thể nếu dùng Prisma ORM đúng cách.
- [ ] **Secrets:** `.env` không commit. GitHub Secrets cho CI/CD. Không hardcode API key.
- [ ] **Legal:** Terms of Service, Privacy Policy — dùng generator (iubenda, termsfeed) rồi customize. GDPR nếu có user EU (cookie consent, right to erasure).
- [ ] **Backup:** `pg_dump` cron hàng ngày lên S3/R2. Test restore 1 lần/tháng.

---

### 2.6. Production Operations — Solo Founder Edition

**Vấn đề thực tế:** Bạn ngủ dậy thấy site down. Không có SRE team. Bạn phải tự chẩn đoán và fix trong 15 phút, hoặc mất doanh thu cả ngày.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Sentry | Error tracking FE + BE, release tracking, source map | Chỉ console.log — không biết lỗi gì |
| UptimeRobot / Healthchecks.io | Monitor uptime, free tier đủ | Không monitor — biết down khi user chửi |
| Logtail / Grafana Cloud | Log tập trung, search nhanh | `docker logs` trên VPS — mất khi restart |
| PagerDuty (free) | Alert qua điện thoại khi site down | Chỉ check email — miss alert lúc đi chợ |

**Quyết định mặc định:** Sentry (free tier) + UptimeRobot (free) + `docker logs` với log rotation. Grafana Cloud nếu cần metric đẹp.

**Anti-pattern:** Setup ELK stack (Elasticsearch + Logstash + Kibana) cho 1 VPS — bạn đốt 2GB RAM chỉ để xem log, không còn RAM cho app.

- [ ] **Observability tối thiểu:**
  - [ ] Sentry: bắt exception FE + BE, alert Slack/email
  - [ ] UptimeRobot: ping mỗi 5 phút, alert nếu HTTP ≠ 200
  - [ ] Health endpoint: `/health` trả DB connection status, không chỉ `200 OK`
- [ ] **Incident Response (solo):**
  - [ ] Phát hiện: UptimeRobot SMS → mở laptop
  - [ ] Chẩn đoán: Sentry → xem exception mới nhất? `docker logs` → lỗi gì?
  - [ ] Xử lý: Rollback (`git revert` + redeploy) hoặc restart container
  - [ ] Postmortem: ghi 1 dòng Notion "Ngày X: lỗi Y, fix Z, tránh lại bằng W"
- [ ] **Rollback thực hành:**
  - [ ] Mỗi tháng 1 lần: deploy tính năng mới → verify → `git revert` → redeploy cũ → verify
  - [ ] DB migration phải backward compatible: thêm column mới, không xóa cũ ngay
  - [ ] Feature flag: tắt tính năng trong 30 giây thay vì deploy lại
- [ ] **Tự động hóa để tránh burnout:**
  - [ ] Cron backup: `pg_dump` + upload S3, không làm tay
  - [ ] Auto-renew SSL: Let's Encrypt + certbot cron
  - [ ] Dependabot: auto PR update dependency, bạn chỉ review
  - [ ] **Nguyên tắc:** Nếu 1 việc lặp lại > 2 lần/tuần → tự động hóa hoặc bỏ qua
- [ ] **Cost Awareness:**
  - [ ] VPS: $10–20 đủ cho < 1000 user. Không lên $80 vì "cho chắc".
  - [ ] Stripe fee: 2.9% + 30¢ — tính vào giá, không để "sau này tính"
  - [ ] Tool stack: dùng free tier tối đa (GitHub, Vercel, Sentry, PostHog). Trả tiền khi thật sự chạm giới hạn.

---

### 2.7. Judgment & War Stories

**Vấn đề thực tế:** Bạn không thành công vì code giỏi. Bạn thành công (hoặc thất bại có học phí) vì quyết định đúng khi không có đủ data, tiền, và thờii gian.

**War Story 1: Thu phí sớm bị user chửi**

- **Bối cảnh:** MVP launch tuần 2. 1 user đăng ký Pro, dùng 3 ngày, email đòi hoàn tiền vì "không như mong đợi".
- **Áp lực:** Sợ bad review, sợ mất reputation, tự hỏi "có nên miễn phí thêm 6 tháng?"
- **Lựa chọn đã cân nhắc:** (a) Hoàn tiền ngay + xin lỗi. (b) Refuse + argue. (c) Hoàn tiền + hỏi 15 phút xem thiếu gì.
- **Quyết định:** Chọn (c). Hoàn tiền trong 24 giờ (no question), nhưng đề nghị 1 call 15 phút để hiểu tại sao.
- **Đánh đổi:** Mất $20. Nhưng nhận được insight: user cần export PDF, feature chưa có. Và user đó giới thiệu 1 người bạn sau khi thấy mình được lắng nghe.
- **Bài học:** Hoàn tiền nhanh không phải yếu đuối. Là cách mua data rẻ nhất. Founder nào sợ hoàn tiền thì sợ học hỏi.

**War Story 2: Làm feature user không cần**

- **Bối cảnh:** 2 tháng sau launch. 50 user đăng ký free. 0 trả tiền. Data cho thấy user dùng 1 lần rồi bỏ.
- **Áp lực:** Tự nghĩ "họ cần thêm tính năng X" (dark mode, mobile app, integration với Notion).
- **Lựa chọn:** (a) Code thêm 3 tính năng trong 1 tháng. (b) Gọi 10 user đã bỏ, hỏi tại sao.
- **Quyết định:** Chọn (b). 7/10 user nói: "tôi không hiểu cách setup ban đầu, quá phức tạp". Không ai nhắc dark mode.
- **Đánh đổi:** Mất 1 tuần gọi điện thay vì 1 tháng code. Nhưng biết đúng vấn đề: onboarding, không phải feature.
- **Bài học:** User "bỏ đi" thường không vì thiếu feature. Họ bỏ vì không thấy value trong 5 phút đầu. Đừng đoán, hỏi.

**War Story 3: Pivot hay kiên trì**

- **Bối cảnh:** 4 tháng sau launch. MRR $200. Burn rate $800. Runway còn 3 tháng.
- **Áp lực:** Có nên kiên trì (học thêm growth, đổi marketing) hay pivot (ý tưởng khác)?
- **Lựa chọn:** (a) Kiên trì — "startup cần 2 năm". (b) Pivot hoàn toàn — "ý tưởng này chết". (c) Hẹp hóa — từ "quản lý công việc" thành "quản lý invoice cho freelancer".
- **Quyết định:** Chọn (c). Giữ codebase, giữ 20 user trung thành, chuyển messaging. Tăng giá 50% vì niche hơn.
- **Đánh đổi:** Mất 2 tuần rebrand. Nhưng MRR tăng lên $600 trong tháng tiếp vì niche dễ bán hơn.
- **Bài học:** Pivot không phải bỏ hết. Là hẹp hóa đến mức không thể hẹp hơn. Nếu vẫn không ai trả tiền → mới bỏ.

---

## PHẦN 3: PROJECTS THỰC CHIẾN + LỘ TRÌNH TUẦN

### 3.1. Project B1: MVP thật có user

**Business Context:** Xuất phát từ B1 (đã validate). Launch nhanh, đo AARRR, thu phí sớm.

**Tech Stack + Lý do chọn:**
- **Next.js App Router:** đã có từ K1, SEO built-in, deploy Vercel nhanh
- **NestJS + Prisma + PostgreSQL:** đã có từ K2, không học thêm
- **Stripe:** thanh toán, subscription, webhook — đã tích hợp ở K2
- **Resend:** email transactional — đã tích hợp ở K2
- **PostHog:** product analytics — free tier đủ
- **Vercel (FE) + Railway/Render (BE) + PostgreSQL:** deploy nhanh, không quản lý server

**Thay thế đã cân nhắc & tại sao không chọn:**
- **VPS tự quản lý:** Rẻ hơn nhưng tốn thờii gian setup. Dùng Railway/Render để launch nhanh, chuyển VPS khi MRR > $1000.
- **MongoDB:** Không cần schema linh hoạt. PostgreSQL đã có, Prisma migration an toàn.
- **Elasticsearch:** Overkill cho < 10K document. PostgreSQL full-text search đủ.

**Production-Ready Checklist:**
- [ ] **CI/CD:** GitHub Actions — Lint → Test → Build → Deploy (Vercel + Railway)
- [ ] **Tests:** Unit (Jest), Integration (Supertest), E2E (Playwright) cho flow thanh toán
- [ ] **Monitoring:** Sentry (error), UptimeRobot (uptime)
- [ ] **Deploy:** Vercel (FE) + Railway (BE), auto-deploy từ `main`
- [ ] **Docs:** README setup, OpenAPI/Swagger, Privacy Policy + Terms of Service
- [ ] **Git flow:** Conventional commits, branch protection, semantic release
- [ ] **Thu phí:** Stripe checkout live mode, không test mode

### 3.2. Project B2: Real-time Chat / Feature theo nhu cầu thị trường

**Business Context:** Chỉ làm nếu MVP thật sự cần real-time (ví dụ: support chat, collaboration). Không làm vì "học cho biết".

**Tech Stack:**
- **Socket.io (NestJS):** real-time 2 chiều, room-based
- **Redis Adapter:** scale Socket.io trên nhiều instance (nếu cần)
- **PostgreSQL:** lưu message history
- **BullMQ:** queue cho notification email khi user offline

**Key Implementation:**
- [ ] Room per conversation, join/leave auth
- [ ] Message persistence: lưu DB trước emit, không emit trước lưu
- [ ] Typing indicator: throttle 500ms, không emit mỗi keystroke
- [ ] Offline fallback: email notification qua BullMQ nếu user không online

**Lộ trình tuần (gợi ý cho cả B1 + B2):**

```
Tuần 1 (B1):   Validate
               • Xác định core problem, tìm 20 người tiềm năng trên Twitter/LinkedIn/Reddit
               • Làm landing page Carrd với form đăng ký chờ
               • Gửi 20 cold email/DM, đặt 10 cuộc interview

Tuần 2 (B1):   Interview
               • 10 cuộc gọi 30 phút, ghi âm, transcribe
               • Tìm pattern: 7/10 người có cùng pain point?
               • Quyết định: GO (có người trả tiền) hay NO-GO (pivot)

Tuần 3 (B2):   Scope MVP
               • 1 feature duy nhất giải quyết core problem
               • Không dark mode, không mobile app, không multi-language
               • Wireframe bằng pen & paper hoặc Excalidraw

Tuần 4 (B2):   Code MVP
               • Dùng stack K1+K2 đã có, không học thêm
               • Auth: Clerk hoặc NextAuth (không tự build)
               • Payment: Stripe Checkout (đã có từ K2)

Tuần 5 (B2):   Deploy & Launch
               • Vercel + Railway, domain $10/năm
               • PostHog tracking, Sentry error monitoring
               • Gửi email đến 10 người đã interview: "Sản phẩm sẵn sàng, giới thiệu giảm 20%"

Tuần 6+ (B3):  Iterate & Growth
               • Mỗi tuần: đo activation rate, churn rate, revenue
               • 1 bài Build in Public / tuần trên Twitter/LinkedIn
               • Cold outreach 50 người/tuần nếu B2B
               • SEO content 2 bài/tháng nếu B2C
               • Support: trả lời trong 2 giờ, ghi lại feature request vào Notion
```

---

## PHẦN 4: CHECKLIST LAUNCH + TÀI LIỆU THAM KHẢO

### 4.1. Checklist trước khi launch

- [ ] **Validate:** 10 interview xong, ít nhất 3 người nói "tôi sẽ trả tiền nếu có"
- [ ] **MVP:** 1 feature, chạy được trên production, không có bug chặn flow chính
- [ ] **Legal:** Privacy Policy, Terms of Service (dùng generator + customize)
- [ ] **Payment:** Stripe live mode, webhook verify signature, checkout flow test thật
- [ ] **Analytics:** PostHog tracking sự kiện core (sign-up, activation, payment)
- [ ] **Monitoring:** Sentry + UptimeRobot, alert đến email/SMS
- [ ] **Backup:** `pg_dump` cron, test restore 1 lần
- [ ] **Support:** Crisp/Intercom chat widget, auto-message "trả lời trong 2 giờ"
- [ ] **Pricing:** public trên landing page, không "liên hệ để biết giá"
- [ ] **Launch:** Post Product Hunt, Twitter, LinkedIn, các group liên quan

### 4.2. Checklist sau khi launch (hàng tuần)

- [ ] **Metric:** activation rate (bao nhiêu % sign-up dùng được aha moment?)
- [ ] **Revenue:** MRR, churn rate, refund rate
- [ ] **Support:** bao nhiêu ticket? vấn đề nào lặp lại? → viết FAQ
- [ ] **Growth:** bao nhiêu user mới? đến từ đâu? (acquisition channel)
- [ ] **Build in Public:** 1 bài/tuần chia sẻ số liệu, struggle, hoặc feature mới
- [ ] **Burn rate:** chi phí tuần này? còn runway bao lâu?

### 4.3. Tài liệu tham khảo bắt buộc

- **"The Lean Startup"** (Eric Ries) — Framework validate, build-measure-learn, pivot.
- **"The Mom Test"** (Rob Fitzpatrick) — Cách phỏng vấn khách hàng mà không bị nói dối.
- **"Hooked"** (Nir Eyal) — Thiết kế product có retention cao (habit-forming).
- **"Zero to Sold"** (Arvid Kahl) — Bootstrap từ 0 đến exit, thực tế cho solo founder.
- **"The Minimalist Entrepreneur"** (Sahil Lavingia) — Làm ít, thu phí sớm, tự bootstrap.
- **"Building a Second Brain"** (Tiago Forte) — Quản lý kiến thức, productivity cho solo.
- **Pháp lý VN:** Tài liệu về đăng ký hộ kinh doanh cá thể / công ty TNHH — tham khảo cục thuế địa phương hoặc dịch vụ luật sư online (LuatVietnam, etc.).
- **Stripe Atlas / Indie Hackers:** Cộng đồng solo founder, case study thật.

---

> **SELF-CHECK trước khi xuất:**
> - [x] Có mục System Design riêng cho khối này chưa? **Có — Kiến trúc tối giản Solo Founder**
> - [x] Bảo mật có nằm rải trong từng mục liên quan hay bị dồn 1 chỗ? **Có — rải trong Auth, Payment, Legal**
> - [x] Có mục Production Operations / vận hành thật không? **Có — Solo Founder Edition**
> - [x] Có War Stories / Judgment với ví dụ cụ thể + bị đẩy thêm không? **Có — 3 war stories đầy đủ format**
> - [x] Có ngầm hứa hẹn "học xong khối này = founder thành công" không? **Đã phân biệt nền tảng vs kinh nghiệm thật**
> - [x] Stack có bị đề xuất lại ngoài phạm vi cho phép không? **Không K8s/Terraform/Service Mesh**
> - [x] Có ghi chú về burnout và tự động hóa? **Có — trong Production Ops**
> - [x] Project khớp kiến trúc K2/K3 không? **Có — dùng NestJS + Prisma + PG + Redis + Vercel/Railway**

---

> **"Không hời hợt, nghiên cứu sâu."**
> Nhưng ở Nhánh B, "sâu" không phải là optimize database query. "Sâu" là hiểu người dùng đủ để họ trả tiền. Nếu bạn không bán được 1 gói đầu tiên, quay lại B1 và hỏi tại sao.
