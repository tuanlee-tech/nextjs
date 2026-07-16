# MASTER BACKEND & ECOSYSTEM

## Bối cảnh

Roadmap này gồm **3 khối lõi chung**. Sau khi hoàn thành Khối 1 (Frontend), bạn đã có khả năng xây dựng giao diện production-ready. Khối 2 đưa bạn vào tầng backend — nơi business logic thực sự sống, nơi dữ liệu được bảo vệ, và nơi quyết định kỹ thuật sai lầm có thể khiến công ty mất tiền hoặc mất khách hàng.

**Khối 2 không dạy bạn "viết API".** Bạn đã biết cách viết API/Node đơn giản. Khối này dạy bạn **thiết kế API vững chắc**, **bảo vệ dữ liệu**, **xử lý tiền thật qua Stripe**, **tích hợp AI vào luồng sản phẩm**, và **vận hành hệ thống dưới áp lực** — những năng lực chứng minh được bằng project, không bằng chứng chỉ.

---

* **Mục tiêu:** Đạt **nền tảng kỹ thuật đủ để tự build và vận hành API backend cho SaaS thực tế** — KHÔNG phải "trở thành Backend Senior" theo đúng nghĩa. Senior backend thật đòi hỏi kinh nghiệm on-call, xử lý incident lúc 2 giờ sáng, và trade-off dưới áp lực traffic thật — những thứ chỉ tích lũy được qua thời gian. Chặn này giúp bạn *đủ giỏi để được tin tưởng giao phần backend trong team, hoặc tự ship product fullstack*.
* **Thời gian dự kiến:** 6–12 tháng (học song song với đi làm nếu đã có việc). Thời gian dài hơn K1 vì backend rộng hơn ở phần data/integration.
* **Thuộc:** Khối Lõi Chung — bắt buộc cho cả 2 nhánh (Staff/Architect và Solo Founder).
* **Milestone:** Tự build được API NestJS + Prisma + PostgreSQL hoàn chỉnh, tích hợp Stripe payment + BullMQ queue + LLM API + RAG cơ bản, viết được integration test, xử lý được webhook security, thiết kế được 5 đề System Design backend, và có khả năng debug latency bất thường dưới áp lực.

> **Vì sao ghi chú này quan trọng:** Nhiều dev frontend học backend bằng cách "viết CRUD với Express". Điều đó không đủ để đảm nhận phần backend trong production. Khi API liên quan đến **tiền (Stripe)**, **dữ liệu nhạy cảm (Auth)**, hoặc **AI output ảnh hưởng đến quyết định người dùng**, bạn cần hiểu sâu về transaction, idempotency, rollback, và cost — không chỉ "request đi, response về".

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 2: MASTER BACKEND & ECOSYSTEM                                              │
│  Mục tiêu: Tự build API vững chắc, tích hợp payment, search, email, AI           │
│  Thời gian: 6–12 tháng                                                           │
│  ─────────────────────────────────────────────────────────────────────────       │
│  • NestJS: DI, Guards, Interceptors, Pipes, Clean Architecture / DDD             │
│  • SQL Fundamentals: ACID, Isolation Levels, Indexing (B-Tree, Composite)        │
│  • Prisma ORM: Schema, Migrations (strategy, rollback), Transactions, N+1        │
│  • Database Design: Normalization, ER Modeling, Migration Strategy               │
│  • NoSQL (MongoDB): Khi nào dùng Document thay Relational                        │
│  • RESTful API chuẩn: HTTP Status, Pagination, Filtering, Versioning             │
│  • API Testing: Jest + Supertest (NestJS integration test), contract test        │
│  • GraphQL / tRPC: Type-safe API, Apollo Server, tRPC + Next.js                  │
│  • Auth: JWT (Access/Refresh), OAuth2/OIDC, RBAC/ABAC, Session Management        │
│  • Security: OWASP Top 10, XSS, CSRF, Rate Limiting, Argon2/Bcrypt               │
│  • Webhooks: Verify signature, Retry with backoff, Idempotency keys              │
│  • File Upload: Validation, virus scan, signed URL, CDN upload                   │
│  • Payment: Stripe (Checkout, Webhooks, Subscription, Idempotency)               │
│  • Search: Elasticsearch / Meilisearch (Full-text search, typo-tolerant)         │
│  • Email: Transactional (Resend/Postmark), Templates, Deliverability             │
│  • Background Jobs: BullMQ + Redis (queue, schedule, retry, dead letter)         │
│  • Real-time: WebSockets (Socket.io), Server-Sent Events (SSE)                   │
│  • API Design: Idempotency, Rate Limiting, Throttling, Circuit Breaker           │
│  • OpenAPI / Swagger: Auto-generated docs, client SDK generation                 │
│  • Event-Driven: Outbox Pattern, Saga Pattern (distributed transactions)         │
│  • Tích hợp LLM API (Anthropic/OpenAI SDK), streaming, prompt engineering        │
│  • RAG cơ bản + Vector DB (pgvector trên Postgres, chưa cần Pinecone)            │
│  • AI Evaluation: kiểm thử & đánh giá chất lượng output AI                       │
│  • Multi-tenancy: Schema-based vs Row-based (cơ bản)                             │
│  • Backend/API System Design: rate limiter, webhook idempotency, job             │
│    queue chịu tải, notification system — luyện dạng bị hỏi ngược                 │
│    trade-off (vd: Redis sập thì fail open hay fail closed)                       │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN

### 1.1. Mục tiêu đạt được

Sau chặn này, bạn phải:

- [ ] Thiết kế được **ER diagram** cho SaaS product, phân biệt rõ 1-N, N-M, normalized vs denormalized
- [ ] Viết được **Prisma schema** với relation, index, enum, composite type; chạy migration an toàn và **rollback 2 chiều** khi cần
- [ ] Xây dựng được **NestJS module** với DI, Guards (RBAC), Interceptors (logging/transform), Pipes (validation)
- [ ] Viết được **RESTful API** chuẩn: đúng HTTP status, pagination (cursor + offset), filtering, versioning
- [ ] Tích hợp **Stripe** thành thạo: Checkout Session, Subscription, Webhook signature verify, Idempotency key
- [ ] Xử lý được **Webhook security**: verify signature, retry với exponential backoff, idempotency check
- [ ] Triển khai **BullMQ + Redis**: queue, delayed job, retry, dead letter queue
- [ ] Tích hợp **LLM API** (Anthropic/OpenAI) với streaming, prompt template, và **RAG cơ bản** dùng pgvector
- [ ] Thiết kế và bảo vệ được **5 đề Backend System Design**: Rate Limiter, Webhook Idempotent, Notification System, Job Queue chịu tải, URL Shortener — bao gồm phản biện trade-off khi bị đẩy thêm
- [ ] Hiểu và áp dụng được **Idempotency keys + concurrency control** trong API mutation
- [ ] Viết được **integration test** (Jest + Supertest) cover critical flows: auth, payment, webhook
- [ ] Debug được **p99 latency tăng đột biến**: đọc log, trace, xác định bottleneck (DB query, N+1, Redis, external API)
- [ ] Có **cost awareness**: ước tính Stripe fee, DB connection cost, Elasticsearch vs Meilisearch cost khi scale
- [ ] Xử lý được **incident cơ bản**: phát hiện → chẩn đoán → xử lý (rollback/kill switch) → postmortem viết tay
- [ ] Hiểu **Event-Driven cơ bản**: Outbox Pattern để đảm bảo message không mất, Saga cho distributed transaction

> **Điều roadmap KHÔNG thể cho bạn:** kinh nghiệm on-call thực tế, cảm giác khi production sập lúc nửa đêm và bạn là ngườii duy nhất có thể fix, và khả năng ngửi được mùi "cái gì đó sắp break" trước khi monitoring báo động. Đây là phần bạn chỉ tích lũy được khi hệ thống của bạn có traffic thật và tiền thật chạy qua.

### 1.2. Thời gian & Lộ trình đề xuất

```
Tháng 1:   NestJS Core + SQL/PostgreSQL + Prisma + DB Design
           + Project scaffold (SaaS API)
Tháng 2:   Auth (JWT/OAuth/RBAC) + Security (OWASP, Rate Limiting)
           + RESTful API Design + API Testing
Tháng 3:   Stripe Payment + Webhook Security + File Upload
           + Email (Resend/Postmark) + Search (Meilisearch)
Tháng 4:   Background Jobs (BullMQ) + Real-time (WebSockets/SSE)
           + Event-Driven (Outbox/Saga) + Idempotency
Tháng 5:   LLM API + RAG (pgvector) + AI Evaluation
           + System Design practice (5 đề)
Tháng 6:   Production Ops + Cost Awareness + Debug Under Pressure
           + Tổng hợp project + Apply Job / Ship product
```

> **Điều chỉnh thực tế:** Nếu timeline bị trễ, ưu tiên cắt bớt **tRPC/GraphQL** (dùng REST đủ cho MVP) và **Multi-tenancy nâng cao** trước khi cắt **Stripe**, **Idempotency**, hoặc **System Design** — ba mục này ảnh hưởng trực tiếp đến khả năng ship product và pass phỏng vấn backend.

### 1.3. Kiến thức thuộc Lõi Chung

Toàn bộ chặn này thuộc **Khối 2 (Lõi Chung)** — không phân nhánh. Dù bạn chọn Nhánh A (Staff/Architect) hay Nhánh B (Solo Founder), bạn đều cần khả năng tự build và vận hành API.

---

## PHẦN 2: DANH MỤC KIẾN THỨC + QUYẾT ĐỊNH CÔNG NGHỆ

### 2.0. NestJS Core & Architecture

**Vấn đề thực tế:** Bạn cần framework backend có cấu trúc rõ ràng, hỗ trợ DI, và ecosystem mạnh cho enterprise. Express/Fastify "tự do" quá mức dẫn đến mỗi dev viết 1 kiểu, khó maintain khi team > 2 ngườii.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| NestJS | Project cần structure (module/controller/service), DI, Guards/Interceptors, enterprise pattern | Script nhỏ, prototype 1 ngày, không cần maintain |
| Express/Fastify thuần | Microservice nhỏ, script, hoặc khi cần tối giản control | Team > 2 dev, cần consistency, cần DI |
| AdonisJS | Team quen Laravel-style, cần ORM + Auth built-in | Ecosystem nhỏ hơn NestJS, ít tài liệu tiếng Anh |

**Quyết định mặc định:** NestJS cho mọi project nghiêm túc. Fastify làm underlying engine (NestJS có Fastify adapter).

**Anti-pattern:** Viết toàn bộ logic trong Controller — Controller chỉ nên parse request/trigger service. Business logic nằm trong Service/Domain layer.

- [ ] **Dependency Injection (DI):**
  - [ ] `@Injectable()` — service được inject vào controller/module khác
  - [ ] `@Module()` — providers, controllers, imports, exports
  - [ ] Custom Provider: `useValue`, `useFactory`, `useClass` — khi nào dùng cái nào
  - [ ] Scope: `DEFAULT` (singleton) vs `REQUEST` (1 instance/request) — ảnh hưởng performance
- [ ] **Guards:**
  - [ ] `@CanActivate` — kiểm tra quyền trước khi vào route
  - [ ] JWT Guard: verify token, gán `user` vào `request`
  - [ ] RBAC Guard: check role từ JWT payload — **KHÔNG tin role từ client gửi lên body/header riêng**
- [ ] **Interceptors:**
  - [ ] Transform response (wrap `{ data, meta }`)
  - [ ] Logging interceptor: log request/response time, method, status
  - [ ] Cache interceptor: cache GET response bằng Redis
- [ ] **Pipes:**
  - [ ] ValidationPipe (`class-validator` + `class-transformer`) — auto validate DTO
  - [ ] ParseIntPipe, ParseUUIDPipe — transform param
  - [ ] Custom Pipe: transform dữ liệu đặc thù
- [ ] **Exception Filters:**
  - [ ] Global exception filter: bắt mọi lỗi, trả về response format consistent
  - [ ] Custom exception: `throw new BusinessException('PAYMENT_FAILED')`
- [ ] **Middleware:**
  - [ ] Logger, CORS, Helmet (security headers)
  - [ ] Rate limiting middleware (Redis-backed)
- [ ] **Clean Architecture / DDD cơ bản:**
  - [ ] Tách Domain (entity, business rule) khỏi Infrastructure (Prisma, Redis, Stripe)
  - [ ] Repository Pattern: abstract DB operations, dễ test bằng mock repository
  - [ ] Không import PrismaClient trực tiếp vào Controller

---

### 2.1. SQL Fundamentals & PostgreSQL

**Vấn đề thực tế:** ORM giúp bạn không viết SQL thuần, nhưng khi query chậm hoặc cần optimize, bạn phải hiểu DB đang làm gì. Không hiểu index = không biết tại sao API chậm.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| PostgreSQL | Mặc định — ACID, relational, JSONB linh hoạt, pgvector cho AI | Cần horizontal scale write cực lớn ngay từ đầu (dùng NoSQL) |
| MySQL | Team đã dùng, ecosystem quen | Cần advanced features (JSONB, CTE, window functions tốt hơn PG) |
| SQLite | Prototype local, test, embedded | Production multi-user, cần concurrency cao |

**Quyết định mặc định:** PostgreSQL cho mọi project. Dùng JSONB cho semi-structured data thay vì tách NoSQL riêng.

**Anti-pattern:** Không đánh index cho foreign key hoặc field hay query — table lớn lên là toàn bộ app chậm.

- [ ] **ACID:**
  - [ ] Atomicity: transaction all-or-nothing
  - [ ] Consistency: data valid trước và sau transaction
  - [ ] Isolation: transaction không ảnh hưởng lẫn nhau
  - [ ] Durability: committed data không mất khi crash
- [ ] **Isolation Levels:**
  - [ ] READ UNCOMMITTED — dirty read (ít dùng)
  - [ ] READ COMMITTED — mặc định PG, không dirty read nhưng non-repeatable read
  - [ ] REPEATABLE READ — snapshot, không non-repeatable read
  - [ ] SERIALIZABLE — strict nhất, phantoms blocked
  - [ ] **Hiểu trade-off:** Càng cao → càng chậm (locking nhiều hơn)
- [ ] **Indexing:**
  - [ ] B-Tree index: mặc định, tốt cho equality + range queries
  - [ ] Composite index: `(userId, createdAt)` — thứ tự column quan trọng
  - [ ] Partial index: index subset có điều kiện (`WHERE status = 'ACTIVE'`)
  - [ ] Giải thích `EXPLAIN ANALYZE`: sequential scan vs index scan vs bitmap scan
- [ ] **Query Optimization:**
  - [ ] `SELECT *` anti-pattern — chỉ select cần thiết
  - [ ] `N+1 query` — dùng JOIN hoặc `include` để resolve
  - [ ] `LIMIT` + `OFFSET` chậm ở offset lớn → dùng cursor pagination
  - [ ] CTE (`WITH`) và Window Functions (`ROW_NUMBER()`, `RANK()`)

---

### 2.2. Prisma ORM

**Vấn đề thực tế:** ORM giúp type-safe và nhanh, nhưng migration sai lầm có thể làm mất data hoặc downtime. Làm sao thay đổi schema mà không sập production?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Prisma | Type-safe, migration system tốt, excellent DX, NestJS hỗ trợ tốt | Cần raw SQL phức tạp liên tục, hoặc team đã quen TypeORM |
| TypeORM | Team đã dùng, cần Active Record pattern | Migration kém ổn định hơn Prisma, type inference yếu hơn |
| Drizzle | Lightweight, SQL-like, performance tốt | Ecosystem nhỏ hơn, chưa mature bằng Prisma |

**Quyết định mặc định:** Prisma cho mọi project trong lộ trình này.

**Anti-pattern:** Chạy `prisma migrate dev` trực tiếp trên production database. Luôn dùng `migrate deploy` trong CI/CD.

- [ ] **Schema Definition:**
  - [ ] Model, relation (`@relation`), enum, composite type (`@@index`, `@@unique`)
  - [ ] `@default`, `@updatedAt`, `@db.VarChar(255)`
  - [ ] `Json?` type cho flexible schema
- [ ] **Migration Strategy:**
  - [ ] `prisma migrate dev` — local development only
  - [ ] `prisma migrate deploy` — production CI/CD
  - [ ] `prisma migrate resolve` — xử lý migration lỗi
  - [ ] **Baseline migration:** khi bắt đầu với DB đã có sẵn
- [ ] **Migration & Rollback An Toàn 2 Chiều:**
  - [ ] **Expand-contract pattern:** Thêm column mới (expand) → Deploy code dùng column mới → Xóa column cũ (contract)
  - [ ] **Rollback forward:** Không `prisma migrate down` trên production — viết migration mới để undo change
  - [ ] **Backup trước migrate:** `pg_dump` bắt buộc trước migration có rủi ro
  - [ ] **Zero-downtime migration:** Không rename column trực tiếp — thêm column mới, sync data, đổi code, xóa cũ
- [ ] **Transactions:**
  - [ ] `$transaction([...])` — interactive transactions
  - [ ] `PrismaClient` transaction timeout config
  - [ ] **Nested writes:** `create` kèm `connect` — 1 transaction tự động
- [ ] **N+1 Problem:**
  - [ ] Dùng `include` để eager load
  - [ ] Dùng `select` để chọn field cần thiết
  - [ ] Bật Prisma query log để phát hiện N+1 trong development

---

### 2.3. Database Design & Migration Strategy

**Vấn đề thực tế:** Schema thiếu normalization dẫn đến data duplication, update anomaly. Schema over-normalized dẫn đến query phức tạp, chậm. Làm sao cân bằng?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| 3NF (Third Normal Form) | Mặc định — giảm duplication, đảm bảo integrity | Read-heavy analytics — cần denormalize để query nhanh |
| Denormalized | Read-heavy, analytics, cache materialized view | Write-heavy transactional — dễ inconsistent |
| JSONB column | Semi-structured data, schema linh hoạt (settings, metadata) | Data cần query/join/index phức tạp |

**Quyết định mặc định:** 3NF cho transactional data. JSONB cho metadata/settings. Denormalize chỉ khi có metrics chứng minh cần.

- [ ] **ER Modeling:**
  - [ ] Entity, Attribute, Relationship (1-1, 1-N, N-M)
  - [ ] Junction table cho N-M
  - [ ] Soft delete (`deletedAt`) thay vì `DELETE` cứng — giữ audit trail
- [ ] **Constraints:**
  - [ ] `NOT NULL`, `UNIQUE`, `CHECK`, `FOREIGN KEY`
  - [ ] `ON DELETE CASCADE` vs `SET NULL` — cân nhắc kỹ, cascade có thể xóa nhầm chuỗi
- [ ] **Audit Trail:**
  - [ ] `createdAt`, `updatedAt` tự động
  - [ ] `createdBy`, `updatedBy` nếu cần trace
  - [ ] Bảng `AuditLog` riêng cho thay đổi quan trọng (payment, auth)

---

### 2.4. RESTful API Design

**Vấn đề thực tế:** Frontend dev complain "API trả data sai shape". Mobile dev cần field khác web. API v1 thay đổi break app cũ. Làm sao thiết kế API sống lâu?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| REST | Mặc định — caching tốt, familiar, tooling mạnh | Real-time phức tạp, cần type-safe end-to-end (dùng tRPC) |
| tRPC | Type-safe tuyệt đối FE-BE, team nhỏ, monorepo | Public API cho third-party, cần caching HTTP standard |
| GraphQL | Client tự chọn field, nhiều client khác nhau | Simple CRUD, cần caching đơn giản, team chưa quen |

**Quyết định mặc định:** REST cho public API và project chuẩn. tRPC cho internal tool/team nhỏ nếu cần type-safe. GraphQL biết để maintain nếu gặp.

- [ ] **HTTP Status đúng chuẩn:**
  - [ ] `200` OK, `201` Created, `204` No Content
  - [ ] `400` Bad Request (validation), `401` Unauthorized, `403` Forbidden
  - [ ] `404` Not Found, `409` Conflict, `422` Unprocessable Entity
  - [ ] `429` Too Many Requests, `500` Internal Server Error
  - [ ] `502` Bad Gateway, `503` Service Unavailable
- [ ] **Pagination:**
  - [ ] Offset: `?page=1&limit=20` — đơn giản, nhưng chậm ở page lớn
  - [ ] Cursor: `?cursor=xxx&limit=20` — nhanh ở scale lớn, không nhảy page ngẫu nhiên
  - [ ] **Quyết định:** Cursor cho infinite scroll (social, feed). Offset cho admin table có page number.
- [ ] **Filtering & Sorting:**
  - [ ] `?status=active&sort=-createdAt` — consistent syntax
  - [ ] Không dùng SQL trực tiếp từ query param (SQL injection risk)
- [ ] **Versioning:**
  - [ ] URL path: `/api/v1/users` — đơn giản, rõ ràng
  - [ ] Header: `Accept: application/vnd.api.v1+json` — clean URL nhưng khó debug
  - [ ] **Quyết định:** URL versioning cho dễ maintain

---

### 2.5. API Testing

**Vấn đề thực tế:** Code chạy được trên máy bạn không có nghĩa nó chạy được trên CI. API test giúp catch regression khi refactor.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Jest + Supertest | Integration test NestJS API — request/response HTTP | Unit test pure function (dùng Vitest) |
| NestJS Testing Module | Test module/controller/service với DI container | E2E test cần browser |
| Contract Test (Pact) | Microservices, FE-BE contract | Monolith nhỏ, team < 3 |

**Quyết định mặc định:** Jest + Supertest cho integration test. NestJS Testing Module cho unit test service.

- [ ] **Integration Test:**
  - [ ] Setup `TestModule`, override provider bằng test DB (SQLite in-memory hoặc test Postgres)
  - [ ] Test happy path: `POST /auth/register` → `201`, body có `id`
  - [ ] Test error path: `POST /auth/register` với email trùng → `409`
  - [ ] Test auth flow: login → lấy token → call protected route
- [ ] **Test DB Isolation:**
  - [ ] Mỗi test chạy trong transaction, rollback sau test
  - [ ] Hoặc seed/cleanup database trước/sau mỗi test suite
- [ ] **Coverage:**
  - [ ] Target: > 80% cho service layer, > 60% cho controller (vì controller thường chỉ delegate)

---

### 2.6. Authentication & Authorization

**Vấn đề thực tế:** User bị hack tài khoản. Token bị đánh cắp. User A xem được data của User B. Làm sao bảo vệ?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| JWT Access + Refresh | SPA, mobile app — stateless, scale tốt | Cần revoke token ngay lập tức (dùng session + Redis) |
| OAuth2/OIDC | Login Google/GitHub, SSO enterprise | Chỉ có hệ thống nội bộ, không cần social login |
| Session + Redis | Cần revoke ngay, server-side control | Serverless/edge, không muốn quản lý session store |
| RBAC | Phân quyền theo role (admin, user, moderator) | Phân quyền cực kỳ granular (dùng ABAC) |

**Quyết định mặc định:** JWT Access (short-lived, 15 phút) + Refresh Token (long-lived, lưu httpOnly cookie) + RBAC.

**Anti-pattern:** Lưu JWT access token vào `localStorage` — dễ bị XSS đánh cắp. Dùng `httpOnly`, `Secure`, `SameSite=Strict` cookie.

- [ ] **JWT:**
  - [ ] Access token: short-lived (15m), chứa `userId`, `role`
  - [ ] Refresh token: long-lived (7d), lưu trong DB để revoke
  - [ ] Rotate refresh token: mỗi lần refresh, cấp token mới, vô hiệu token cũ
  - [ ] `jsonwebtoken` library — verify signature với secret/public key
- [ ] **OAuth2/OIDC:**
  - [ ] Flow: Authorization Code + PKCE (cho SPA/mobile)
  - [ ] ID Token (JWT) chứa user info, Access Token để gọi resource server
  - [ ] NestJS Passport: `passport-google-oauth20`, `passport-jwt`
- [ ] **RBAC:**
  - [ ] Decorator `@Roles('ADMIN', 'MODERATOR')`
  - [ ] Guard check `user.role` từ JWT payload
  - [ ] **Bảo mật:** Luôn re-check quyền ở service layer, không tin client
- [ ] **Session Management:**
  - [ ] Redis lưu session: `sess:abc123 → { userId, role }`
  - [ ] TTL tự động expire
  - [ ] Logout = xóa session khỏi Redis

---

### 2.7. Security (OWASP, XSS, CSRF, Rate Limiting)

**Vấn đề thực tế:** API bị brute force. SQL injection qua query param. CSRF attack khiến user vô tình xóa tài khoản. Làm sao phòng thủ lớp backend?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Helmet.js | Mọi production app — security headers | Không bao giờ "không cần" |
| Rate Limiting (Redis) | Mọi public API — chống brute force, DDoS | Internal API behind VPN (ít cần) |
| Argon2 | Hash password — mặc định 2026 | Không bao giờ dùng MD5/SHA1 cho password |
| CORS strict | API public, FE khác domain | API cùng domain (nhưng vẫn nên config rõ ràng) |

**Quyết định mặc định:** Helmet + Rate Limiting Redis + Argon2 + Strict CORS + Input Validation (Zod/class-validator).

- [ ] **OWASP Top 10 Backend:**
  - [ ] **A01 Broken Access Control:** Không expose ID tự tăng có thể đoán (`/orders/1`, `/orders/2`). Dùng UUID. Re-check ownership trong mọi query.
  - [ ] **A02 Cryptographic Failures:** HTTPS only. Không log sensitive data (password, token). Encrypt PII at rest nếu cần compliance.
  - [ ] **A03 Injection:** Không nối string SQL. Dùng ORM parameterized query. Validate input Zod trước khi vào service.
  - [ ] **A04 Insecure Design:** Thiết kế với "không tin client" — mọi input đều độc hại cho đến khi chứng minh ngược lại.
  - [ ] **A05 Security Misconfiguration:** Tắt debug mode production. Xóa default account. Giới hạn error detail trả về client.
  - [ ] **A07 Auth Failures:** Implement brute force protection. Lock account sau N lần sai. Không cho phép weak password.
- [ ] **Rate Limiting:**
  - [ ] `nestjs-rate-limiter` hoặc custom Redis counter
  - [ ] Per-IP: 100 req/phút cho public
  - [ ] Per-user: 1000 req/phút cho authenticated
  - [ ] **Bảo mật:** Rate limit login endpoint riêng biệt (5 lần/phút) — chống brute force
- [ ] **CSRF Protection:**
  - [ ] `SameSite=Strict` cookie
  - [ ] CSRF token cho form mutation nếu dùng session-based auth
  - [ ] Double-submit cookie pattern

---

### 2.8. Webhooks & Signature Verification

**Vấn đề thực tế:** Stripe gửi webhook báo "payment thành công". Kẻ tấn công gửi request giả mạo webhook đến endpoint của bạn, kích hoạt giao hàng mà không trả tiền. Làm sao xác minh webhook thật?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Verify Signature (HMAC) | Mọi webhook từ third-party (Stripe, GitHub) | Không bao giờ tin webhook không verify |
| Idempotency Key | Xử lý webhook duplicate — third-party gửi lại khi timeout | One-time event không quan trọng |
| Retry with Backoff | Webhook của bạn gọi đi — đảm bảo delivery | Real-time không cần guarantee |

**Quyết định mặc định:** Luôn verify webhook signature bằng HMAC. Lưu webhook event ID để deduplicate. Trả về `200` ngay để tránh retry flood.

**Anti-pattern:** Xử lý business logic đồng bộ trong webhook handler — timeout 10 giây có thể khiến Stripe retry, gây duplicate processing.

- [ ] **Stripe Webhook Security:**
  - [ ] Lấy `Stripe-Signature` header
  - [ ] Verify bằng `stripe.webhooks.constructEvent(payload, signature, endpointSecret)`
  - [ ] **KHÔNG** dùng `JSON.parse(body)` trước khi verify — dùng raw body
- [ ] **Webhook Handler Pattern:**
  - [ ] Nhận webhook → Verify signature → Lưu event vào DB (idempotency) → Trả 200 → Xử lý async (queue)
  - [ ] Không process đồng bộ trong HTTP handler
- [ ] **Retry & Backoff (khi bạn gửi webhook đi):**
  - [ ] Exponential backoff: 1s, 2s, 4s, 8s, 16s
  - [ ] Max retry: 5 lần → dead letter queue
  - [ ] Jitter: thêm random để tránh thundering herd

---

### 2.9. File Upload & Validation

**Vấn đề thực tế:** User upload file "ảnh đại diện" nhưng thực chất là script PHP. File 100MB làm sập server. Làm sao upload an toàn?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Direct Upload to S3/R2 | File lớn, giảm tải server | File nhỏ, không cần CDN |
| Signed URL | Cho phép client upload trực tiếp S3 mà không lộ credentials | Internal system, server xử lý hết |
| Server-side Validation | Mọi upload — check MIME type, magic bytes, size | Không bao giờ tin extension file |

**Quyết định mặc định:** Client request signed URL từ server → Upload trực tiếp lên S3/R2 → Server nhận callback/key. Không để file chạy qua server.

- [ ] **Validation:**
  - [ ] Check MIME type (whitelist: `image/jpeg`, `image/png`, `application/pdf`)
  - [ ] Check magic bytes (file signature) — không tin extension
  - [ ] Giới hạn size (5MB cho ảnh, 50MB cho video)
  - [ ] Scan virus (ClamAV hoặc Cloudflare scan) nếu cho phép upload executable-adjacent
- [ ] **Bảo mật:**
  - [ ] Không lưu file trong server filesystem — dùng object storage (S3, R2)
  - [ ] Không expose S3 bucket trực tiếp — dùng CloudFront/Cloudflare proxy
  - [ ] Filename: random UUID, không giữ tên gốc (tránh path traversal)

---

### 2.10. Payment Integration (Stripe)

**Vấn đề thực tế:** Bạn cần thu tiền. Nhưng payment là nơi nhạy cảm nhất — 1 bug có thể mất tiền hoặc charge nhầm. Làm sao tích hợp Stripe an toàn?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Stripe Checkout | Nhanh, bảo mật tốt, ít maintenance | Cần UI payment fully custom (dùng Elements) |
| Stripe Payment Elements | Custom UI nhưng vẫn dùng Stripe infrastructure | Cần control hoàn toàn (PCI DSS scope lớn) |
| Stripe Subscription | SaaS recurring billing | One-time payment không cần |

**Quyết định mặc định:** Stripe Checkout cho bắt đầu. Stripe Elements khi cần custom. Subscription cho SaaS.

- [ ] **Checkout Session:**
  - [ ] Tạo session server-side: `stripe.checkout.sessions.create({...})`
  - [ ] Trả `session.url` cho client redirect
  - [ ] Không tạo session ở client — lộ secret key
- [ ] **Webhook Handling:**
  - [ ] Lắng nghe `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`
  - [ ] Verify signature (xem 2.8)
  - [ ] Idempotency: lưu `stripe_event_id` để không xử lý duplicate
- [ ] **Idempotency Key:**
  - [ ] Tạo `Idempotency-Key` (UUID) cho mỗi request tạo payment
  - [ ] Stripe tự động deduplicate nếu key trùng trong 24h
- [ ] **Subscription Logic:**
  - [ ] Tạo Customer → Tạo Subscription → Lắng nghe webhook cập nhật trạng thái
  - [ ] Grace period: cho phép dùng 3 ngày sau khi payment failed trước khi khóa
- [ ] **Cost Awareness:**
  - [ ] Stripe fee: ~2.9% + 30¢ per transaction (US) — tính vào unit economics
  - [ ] Stripe Tax: tự động tính VAT nếu bán quốc tế (thêm 0.5% fee)

---

### 2.11. Search (Meilisearch → Elasticsearch)

**Vấn đề thực tế:** User tìm kiếm sản phẩm nhưng PostgreSQL `LIKE '%query%'` chậm kinh khủng với 100K+ rows. Cần full-text search thực thụ.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Meilisearch | Dễ setup, typo-tolerant, đủ cho 90% SaaS | Scale cực lớn, cần aggregation phức tạp |
| Elasticsearch | Scale lớn, query phức tạp, aggregation mạnh | Setup nặng, cần DevOps, chi phí cao hơn |
| PostgreSQL Full-text | Đủ cho < 100K rows, không cần infra thêm | Cần typo tolerance, faceted search |

**Quyết định mặc định:** Meilisearch cho startup/SaaS nhỏ. Elasticsearch khi scale lớn hoặc vào Nhánh A.

- [ ] **Meilisearch:**
  - [ ] Index documents từ Prisma (sync khi create/update/delete)
  - [ ] Typo tolerance, ranking, filterable attributes
  - [ ] **Cost:** Meilisearch Cloud ~ $30/tháng starter. Self-host trên VPS nếu tiết kiệm.
- [ ] **Elasticsearch (biết để migrate):**
  - [ ] Index mapping, analyzers (Vietnamese analyzer nếu cần)
  - [ ] Query DSL: `match`, `term`, `bool`, `range`
  - [ ] **Cost:** Tốn RAM nhiều. Không dùng cho project < 10K documents.

---

### 2.12. Email (Resend/Postmark)

**Vấn đề thực tế:** Email vào spam. User không nhận được verification. Template xấu. Làm sao email đến inbox?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Resend | Gửi transactional email, dễ setup, giá tốt | Cần marketing automation phức tạp |
| Postmark | Deliverability cao, tracking tốt | Giá cao hơn Resend ở volume lớn |
| AWS SES | Volume cực lớn, giá rẻ nhất | Setup phức tạp, deliverability kém hơn nếu không warm up |

**Quyết định mặc định:** Resend cho startup. Postmark nếu deliverability là critical (SaaS B2B).

- [ ] **Transactional Email:**
  - [ ] Welcome, password reset, invoice, notification
  - [ ] Template HTML + plain text fallback
  - [ ] DKIM, SPF, DMARC config để tránh spam box
- [ ] **Queue & Retry:**
  - [ ] Đừng gửi email đồng bộ trong API — dùng BullMQ queue
  - [ ] Retry 3 lần nếu provider timeout
  - [ ] Dead letter nếu bounce permanent

---

### 2.13. Background Jobs (BullMQ + Redis)

**Vấn đề thực tế:** Gửi email đồng bộ khiến API chậm 3 giây. Xử lý ảnh trong request làm timeout. Cần chạy task nền.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| BullMQ | Redis-based, robust, scheduling, retry, dead letter | Không có Redis, hoặc cần distributed job chuẩn enterprise |
| node-cron | Đơn giản, schedule task định kỳ | Cần queue, retry, concurrency control |
| Inngest | TypeScript-native, reliable, good DX | Thêm dependency, chi phí khi scale |

**Quyết định mặc định:** BullMQ cho mọi background job trong lộ trình này.

- [ ] **Queue Patterns:**
  - [ ] **Job Queue:** `email-queue`, `image-processing-queue`, `stripe-webhook-queue`
  - [ ] **Delayed Job:** `queue.add(data, { delay: 60000 })` — gửi reminder sau 1 giờ
  - [ ] **Repeatable Job:** `queue.add(data, { repeat: { cron: '0 9 * * *' } })` — daily report
- [ ] **Retry & Dead Letter:**
  - [ ] `attempts: 3`, `backoff: { type: 'exponential', delay: 2000 }`
  - [ ] Dead Letter Queue: job fail 3 lần → chuyển sang DLQ để manual review
- [ ] **Concurrency:**
  - [ ] `concurrency: 5` — không xử lý quá 5 job cùng lúc để tránh overwhelm DB
  - [ ] Rate limiter: `max: 10`, `duration: 1000` — 10 job/giây
- [ ] **Worker Process:**
  - [ ] Tách worker riêng process (không chạy trong API server)
  - [ ] Graceful shutdown: đợi job hiện tại xong trước khi kill process

---

### 2.14. Real-time (WebSockets, SSE)

**Vấn đề thực tế:** User cần thấy notification ngay. Chat message phải real-time. Polling 5 giây/lần tốn battery và bandwidth.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| WebSockets (Socket.io) | 2-way real-time: chat, collaborative editing | Chỉ cần server push 1-way (dùng SSE) |
| SSE | Server push 1-way: notification, live feed, progress | Cần 2-way communication |
| Polling | Fallback khi WS/SSE không support | Mọi case khác (tốn resource) |

**Quyết định mặc định:** SSE cho notification/feed (đơn giản, qua HTTP, auto reconnect). Socket.io cho chat/2-way.

- [ ] **Socket.io:**
  - [ ] Namespace + Room để phân chia channel
  - [ ] Auth: verify JWT trong `io.use()` middleware
  - [ ] **Bảo mật:** Không gửi sensitive data qua WS nếu không cần thiết
  - [ ] Scale: Redis Adapter để nhiều server instance share socket state
- [ ] **SSE:**
  - [ ] `Content-Type: text/event-stream`
  - [ ] Connection keep-alive, auto reconnect ở client
  - [ ] Dễ hơn WS: qua HTTP standard, không cần thư viện đặc biệt

---

### 2.15. API Design Patterns (Rate Limiting, Throttling, Circuit Breaker)

**Vấn đề thực tế:** API bên thứ 3 (Stripe, OpenAI) sập hoặc chậm. Gọi liên tục làm sập cả hệ thống bạn. Làm sao tự bảo vệ?

| Pattern | Khi nào dùng | Khi nào KHÔNG dùng |
|---------|-------------|-------------------|
| Rate Limiting | Bảo vệ API của bạn khỏi client abuse | Internal API trusted |
| Throttling | Giảm tốc độ xử lý khi hệ thống quá tải | Không cần adaptive load |
| Circuit Breaker | Gọi external API không ổn định — fail fast | External API luôn ổn định |

**Quyết định mặc định:** Rate limiting cho mọi public API. Circuit breaker cho external API calls (Stripe, LLM).

- [ ] **Rate Limiting:**
  - [ ] Token bucket hoặc Sliding window (Redis)
  - [ ] `429 Too Many Requests` + `Retry-After` header
  - [ ] Phân biệt: anonymous vs authenticated user
- [ ] **Circuit Breaker:**
  - [ ] 3 trạng thái: CLOSED (normal), OPEN (fail fast), HALF-OPEN (test)
  - [ ] Sau 5 lỗi liên tiếp → OPEN trong 30 giây
  - [ ] Library: `opossum` hoặc tự implement đơn giản
- [ ] **Throttling:**
  - [ ] Giảm concurrency worker khi queue depth > threshold
  - [ ] Shed load: trả `503` + `Retry-After` khi quá tải

---

### 2.16. OpenAPI / Swagger

**Vấn đề thực tế:** Frontend dev không biết endpoint nào trả gì. Tester không biết test case. API docs lỗi thờii.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Swagger UI tự động | Mọi project có API — docs luôn sync với code | Không có API (chỉ SSR web) |
| OpenAPI Generator | Tạo client SDK cho FE/mobile từ spec | FE dùng fetch đơn giản, không cần SDK |

**Quyết định mặc định:** `@nestjs/swagger` auto-generate từ DTO + decorators. Swagger UI ở `/api/docs`.

- [ ] **Setup:**
  - [ ] `@ApiTags`, `@ApiOperation`, `@ApiResponse`, `@ApiProperty`
  - [ ] DTO với `class-validator` → auto-generate schema
- [ ] **Client Generation:**
  - [ ] `openapi-generator-cli` tạo TypeScript client
  - [ ] Share types FE-BE không cần viết tay

---

### 2.17. Idempotency & Concurrency Control (MỤC RIÊNG)

**Vấn đề thực tế:** User bấm "Pay" 2 lần vì nút không disable. Stripe webhook gửi lại event. 2 request cùng lúc trừ kho hàng dẫn đến oversell. Làm sao đảm bảo "làm 1 lần hoặc không làm"?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Idempotency Key | Mọi mutation quan trọng (payment, inventory, booking) | Read-only GET request |
| Optimistic Locking | Resource ít contention, read nhiều write ít | Write contention cực cao |
| Pessimistic Locking | Write contention cao, cần chắc chắn consistency | Read-heavy, dễ deadlock |

**Quyết định mặc định:** Idempotency Key cho mọi API mutation. Optimistic locking (`version` column) cho update resource. Pessimistic locking (`SELECT FOR UPDATE`) chỉ khi cần chắc chắn và transaction ngắn.

**Anti-pattern:** Dựa vào "unique constraint" để ngăn duplicate mà không có idempotency key rõ ràng — constraint chỉ chặn ở DB layer, không giải quyết vấn đề semantic duplicate ở business layer.

- [ ] **Idempotency Key:**
  - [ ] Client tạo `Idempotency-Key: <UUID>` cho mỗi mutation
  - [ ] Server lưu mapping `key → response` trong Redis/DB với TTL (24h)
  - [ ] Nếu key trùng → trả lại response cũ (không re-process)
  - [ ] TTL xóa sau 24h để không tồn đọng
- [ ] **Concurrency Control:**
  - [ ] **Optimistic:** `version` column trong DB. Update kèm `WHERE version = X`. Nếu version đổi → throw conflict (409).
  - [ ] **Pessimistic:** `SELECT FOR UPDATE` trong transaction. Giữ lock ngắn nhất có thể.
  - [ ] **Distributed Lock:** Redis Redlock cho operation cross-instance (ví dụ: scheduled job chỉ chạy 1 instance)
- [ ] **Audit Trail:**
  - [ ] Log mọi request với idempotency key, timestamp, userId
  - [ ] Bảng `IdempotencyLog`: `key`, `request_body`, `response`, `createdAt`
  - [ ] Dùng để debug khi có dispute (ví dụ: "tại sao tôi bị charge 2 lần?")

---

### 2.18. Event-Driven Architecture (Outbox, Saga)

**Vấn đề thực tế:** Bạn cần gửi email sau khi user đăng ký. Nhưng nếu gửi email fail, có nên rollback user creation không? Nếu DB commit xong mà app crash trước khi gửi email, email mất tiêu?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Outbox Pattern | Cần đảm bảo message không mất khi DB commit | Simple app, có thể bỏ qua event, dùng queue trực tiếp |
| Saga Pattern | Distributed transaction qua nhiều service | Monolith đơn giản, transaction 1 DB đủ |
| Direct Queue | Đơn giản, nhanh, không cần guarantee mạnh | Cần exactly-once processing |

**Quyết định mặc định:** Outbox Pattern cho mọi event quan trọng trong monolith. Saga khi có nhiều service (biết để phỏng vấn).

- [ ] **Outbox Pattern:**
  - [ ] Bảng `Outbox`: `id`, `type`, `payload`, `createdAt`, `processedAt`
  - [ ] Trong 1 DB transaction: INSERT business row + INSERT outbox row
  - [ ] Worker poll bảng Outbox → publish message → mark processed
  - [ ] Đảm bảo: nếu DB commit → message chắc chắn có trong Outbox
- [ ] **Saga Pattern:**
  - [ ] **Orchestration:** 1 coordinator điều phối các service
  - [ ] **Choreography:** Mỗi service tự publish event, các service khác subscribe
  - [ ] **Compensating Transaction:** Nếu bước 3 fail → chạy rollback bước 2 và 1
- [ ] **Eventual Consistency:**
  - [ ] Chấp nhận data không nhất quán tức thì giữa các service
  - [ ] UI pattern: Optimistic update + reconcile khi event đến

---

### 2.19. LLM API Integration + RAG

**Vấn đề thực tế:** Bạn muốn thêm AI vào product. Nhưng LLM hallucinate, đắt, chậm. Làm sao tích hợp an toàn và hiệu quả?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Anthropic Claude | Reasoning tốt, context window lớn, ít hallucinate hơn | Cần ecosystem OpenAI cụ thể |
| OpenAI GPT-4 | Ecosystem lớn, function calling tốt | Chi phí cao, cần evaluate alternative |
| pgvector (Postgres) | RAG cơ bản, không thêm infra mới | Scale vector search cực lớn (dùng Pinecone/Qdrant) |

**Quyết định mặc định:** Anthropic API cho reasoning/chat. OpenAI backup nếu cần function calling. pgvector cho RAG (không thêm DB mới).

- [ ] **LLM Integration:**
  - [ ] Streaming response: `ReadableStream` từ NestJS đến FE
  - [ ] Prompt template: version control prompt, A/B test prompt
  - [ ] Temperature/Top-p config: thấp cho factual task, cao cho creative
  - [ ] Timeout & fallback: nếu Anthropic timeout sau 10s → fallback OpenAI hoặc cached response
- [ ] **RAG (Retrieval-Augmented Generation):**
  - [ ] Chunk documents → Embedding (OpenAI/Anthropic embedding API) → Lưu vào pgvector
  - [ ] Query: embedding câu hỏi → similarity search (`<=>` operator trong pgvector) → top 5 chunks → đưa vào prompt context
  - [ ] **Cost awareness:** Embedding API tính theo token. Vector search tính theo dimension. Đo lường cost per query.
- [ ] **AI Evaluation:**
  - [ ] Không tin LLM output 100% — luôn có human-in-the-loop cho quyết định quan trọng
  - [ ] Evaluation metric: accuracy, relevance, hallucination rate
  - [ ] Guardrails: Không cho LLM truy cập DB trực tiếp. Dùng RAG thay vì fine-tune cho factual data.

---

### 2.20. Multi-tenancy

**Vấn đề thực tế:** Bạn xây SaaS, mỗi khách hàng (tenant) là 1 công ty. Làm sao tách biệt data? Khi nào dùng schema riêng, khi nào dùng row-level?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Row-based (tenantId column) | Mặc định — đơn giản, scale tốt, dễ backup | Cần isolation tuyệt đối (enterprise compliance) |
| Schema-based (schema per tenant) | Isolation mạnh hơn, dễ migrate từng tenant | Số tenant lớn (>1000 schema nặng PG) |
| DB per tenant | Enterprise, compliance khắt khe | Chi phí cao, quản lý phức tạp |

**Quyết định mặc định:** Row-based (`tenantId` column) cho startup. Schema-based nếu enterprise yêu cầu.

- [ ] **Row-based Implementation:**
  - [ ] Mọi query kèm `WHERE tenantId = ?` — dùng Prisma middleware tự động inject
  - [ ] Index trên `tenantId` cho mọi table
  - [ ] RLS (Row Level Security) PostgreSQL nếu cần DB-level enforce

---

### 2.21. Cost Awareness

**Vấn đề thực tế:** Bạn tích hợp 10 API external, dùng DB lớn nhất, gửi email không giới hạn. Cuối tháng bill $5000 trong khi doanh thu $100. Làm sao kiểm soát?

| Chi phí | Cách tính | Cách kiểm soát |
|---------|-----------|----------------|
| Stripe Fee | 2.9% + 30¢/transaction | Tính vào giá bán. Dùng Stripe Tax nếu cần. |
| DB Connection | PostgreSQL/RDS tính theo instance + storage | Connection pooling (PgBouncer). Không mở connection mỗi request. |
| LLM API | Per 1K tokens (input + output) | Cache response. Dùng model nhỏ hơn cho task đơn giản. Giới hạn max_tokens. |
| Elasticsearch | RAM + storage + query | Meilisearch cho < 1M docs. Chỉ ES khi thật cần. |
| Email | Per 1K emails | Queue + batch. Không gửi real-time nếu không cần. |

- [ ] **Monitoring Cost:**
  - [ ] Theo dõi bill hàng tuần, không chờ cuối tháng
  - [ ] Alert nếu LLM API cost vượt ngưỡ
User: Tiếp tục
Kimi: - [ ] **Monitoring Cost:**
  - [ ] Theo dõi bill hàng tuần, không chờ cuối tháng
  - [ ] Alert nếu LLM API cost vượt ngưỡng $X/ngày
  - [ ] Log cost per request: `llm_tokens_input`, `llm_tokens_output`, `stripe_fee`
  - [ ] Unit economics: `CAC < LTV`, `gross_margin > 70%` cho SaaS software

---

## PHẦN 3: BACKEND/API SYSTEM DESIGN

> Mỗi khối phải có mục System Design riêng, ngang hàng với các mục kỹ thuật khác. K2: Khung thiết kế BE/API + luyện tối thiểu 5 đề.

**Vấn đề thực tế:** Phỏng vấn backend senior không chỉ hỏi "JWT là gì". Họ đưa 1 đề mở: "Thiết kế rate limiter cho 10K req/s". Bạn phải vẽ architecture, chọn DB, tính capacity, và bảo vệ trade-off khi bị đẩy thêm.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Khung ADAPT (Assumptions → Design → API → Performance → Trade-offs) | Mọi buổi phỏng vấn BE System Design | Không có lý do để bỏ qua |
| Bắt đầu từ capacity estimation | Mọi đề cần scale | Đề chỉ yêu cầu "thiết kế API cho 100 user" |
| Bị đẩy thêm (follow-up) | Interviewer hỏi ngược trade-off | Chưa vững cơ bản thì đừng nhảy vào edge case |

**Quyết định mặc định:** Học khung ADAPT. Luyện 5 đề bắt buộc. Mỗi đề phải có phần "bị đẩy thêm" — interviewer hỏi ngược trade-off.

**Anti-pattern:** Nhảy vào giải pháp ngay khi vừa nghe đề — không hỏi requirements, không tính capacity, không nói trade-off.

### 3.1. Khung ADAPT

- [ ] **A**ssumptions & Requirements:
  - [ ] Functional: API làm gì? Input/output?
  - [ ] Non-functional: Scale (QPS, data size), latency (p99 < 200ms?), availability (99.9%?)
  - [ ] Constraints: Budget? Team size? Regulatory?
- [ ] **D**esign High-Level:
  - [ ] Vẽ architecture diagram: Load Balancer → API Gateway → Service → Cache → DB
  - [ ] Chọn DB: SQL vs NoSQL, why?
  - [ ] Chọn Cache: Redis, why?
- [ ] **A**PI Design:
  - [ ] Endpoints, HTTP methods, request/response shape
  - [ ] Error handling, pagination, versioning
- [ ] **P**erformance & Deep Dive:
  - [ ] Bottleneck ở đâu? DB? Network? CPU?
  - [ ] Caching strategy: Cache Aside, Write-Through, Write-Behind?
  - [ ] Rate limiting algorithm: Token Bucket vs Sliding Window?
- [ ] **T**rade-offs & Failure:
  - [ ] "Nếu Redis sập thì sao?" → Fail open (cho phép pass) hay fail closed (chặn hết)?
  - [ ] "Nếu DB primary sập?" → Read replica promote, downtime bao lâu?
  - [ ] "Nếu Stripe webhook delay 5 phút?" → Idempotency + queue + retry

### 3.2. 5 Đề Bắt Buộc (mỗi đề phải có phần "bị đẩy thêm")

#### Đề 1: Rate Limiter
- [ ] Thiết kế API rate limiter 10K req/s, phân biệt user authenticated vs anonymous
- [ ] **Bị đẩy thêm:** Redis backing counter sập thì fail open hay fail closed? Tại sao? (Hint: payment API → fail closed; public read API → fail open với local cache fallback)
- [ ] **Bị đẩy thêm:** Distributed rate limiting cross-region làm sao? (Hint: Redis Cluster, local cache + async sync)

#### Đề 2: Webhook Idempotent Processor
- [ ] Thiết kế hệ thống nhận webhook từ Stripe, đảm bảo không miss, không duplicate
- [ ] **Bị đẩy thêm:** Webhook đến out-of-order (event B trước event A) thì xử lý thế nào? (Hint: event versioning, state machine, queue theo customerId để serialize)
- [ ] **Bị đẩy thêm:** Webhook endpoint bị DDoS giả mạo thì phòng thủ ra sao? (Hint: signature verify + rate limit + IP whitelist + challenge)

#### Đề 3: Job Queue Chịu Tải (BullMQ)
- [ ] Thiết kế queue xử lý 1M jobs/ngày, ưu tiên job payment trước email
- [ ] **Bị đẩy thêm:** Job chạy 10 phút, worker crash giữa chừng thì sao? (Hint: ack sau khi xong, visibility timeout, idempotency key trong job data)
- [ ] **Bị đẩy thêm:** Queue backlog 100K jobs, làm sao scale worker mà không kill DB? (Hint: batch size, connection pooling, read replica cho worker)

#### Đề 4: Notification System
- [ ] Thiết kế gửi notification đa kênh (email, push, SMS) cho 1M user
- [ ] **Bị đẩy thêm:** User A tắt email nhưng bật push, preference thay đổi giữa lúc queue đang xử lý? (Hint: check preference ngay trước gửi, không tin cache cũ)
- [ ] **Bị đẩy thêm:** 50% user dùng Gmail, Gmail rate limit 100 email/giây. Làm sao không bị blacklist? (Hint: per-provider rate limiter, exponential backoff, dedicated IP warm-up)

#### Đề 5: URL Shortener
- [ ] Thiết kế tạo short URL, redirect nhanh, analytics cơ bản
- [ ] **Bị đẩy thêm:** Short URL bị dùng để phát tán malware, làm sao detect? (Hint: async scan qua VirusTotal API, blacklist, user report)
- [ ] **Bị đẩy thêm:** Làm sao đảm bảo 2 user không tạo cùng short code? (Hint: hash-based deterministic + collision check, hoặc pre-generate unique codes)

---

## PHẦN 4: JUDGMENT & WAR STORIES

> Phải có mục Judgment & War Stories với ví dụ cụ thể. Mỗi ví dụ có format: Bối cảnh → Áp lực/Ràng buộc → Lựa chọn đã cân nhắc → Quyết định + Lý do → Đánh đổi phải chấp nhận → Bài học.

### Tình huống 1: Stripe Webhook Duplicate Gây Double-Charge

**Bối cảnh:** Production SaaS. User báo bị charge 2 lần cho cùng 1 tháng. Check log thấy 2 webhook `invoice.paid` với cùng `invoice_id` đến cách nhau 30 giây.
**Áp lực / Ràng buộc:** User đòi refund. Stripe dashboard hiển thị 2 payment thành công. Cần fix ngay để không có case thứ 3.
**Lựa chọn đã cân nhắc:**
- A: Refund tay cho user rồi tìm root cause sau → user hài lòng nhưng lặp lại với user khác
- B: Tắt webhook handler tạm thờii → không nhận event mới, subscription bị miss
- C: Thêm idempotency check ngay lập tức (Redis `SET invoice:xxx processed NX EX 86400`) + manual refund user bị ảnh hưởng + audit toàn bộ 30 ngày qua
**Quyết định + Lý do:** Chọn C. Idempotency key (`invoice_id`) là root cause. Code cũ chỉ check DB `WHERE invoiceId = ?` nhưng 2 webhook đến gần như đồng thờii, cả 2 đều read trước khi write (race condition). Dùng Redis `NX` (set nếu chưa tồn tại) để atomic check.
**Đánh đổi phải chấp nhận:** Mất 2 giờ audit + refund 5 user. Nhưng ngăn được vĩnh viễn.
**Bài học:** Webhook handler không chỉ cần idempotency — cần **distributed lock** hoặc **unique constraint với UPSERT** để chặn race condition ở DB layer. Đừng tin "SELECT rồi mới INSERT" trong concurrent environment.

### Tình huống 2: Migration Schema Làm Sập Production

**Bối cảnh:** Thêm column `subscriptionStatus` vào bảng `User`. Prisma migration chạy `ALTER TABLE "User" ADD COLUMN`. Table có 2M rows. Migration lock table 30 giây → API timeout hàng loạt → monitoring báo động.
**Áp lực / Ràng buộc:** App đang sập. Rollback migration? Nhưng migration đã chạy xong, data mới chưa có gì. Team junior hoảng.
**Lựa chọn đã cân nhắc:**
- A: Rollback schema (`prisma migrate resolve --rolled-back`) → mất column, code mới crash vì reference column không tồn tại
- B: Không làm gì, chờ lock release → user vẫn bị timeout
- C: Expand-contract pattern từ đầu (thêm column nullable, deploy code, backfill, add constraint sau) — nhưng đã quá muộn cho lần này. Giải pháp ngay: scale API instance lên gấp đôi để handle timeout retry, đồng thờii viết ADR bắt buộc expand-contract cho mọi migration sau này
**Quyết định + Lý do:** Chọn C (phần immediate fix + long-term). Lần này: scale instance + add connection pool tạm. Lâu dài: `pt-online-schema-change` (Percona) hoặc `pg_repack` cho large table; hoặc thêm column nullable trước, constraint sau.
**Đánh đổi phải chấp nhận:** Bill VPS tăng 1 ngày. Nhưng app sống sót.
**Bài học:** Không bao giờ `ALTER TABLE` trên production table lớn mà không test trên staging với data volume tương đương. Expand-contract là bắt buộc, không phải "best practice".

### Tình huống 3: p99 Latency Tăng Gấp 3 Qua Đêm

**Bối cảnh:** Dashboard monitoring báo p99 latency API từ 150ms lên 450ms. Không có deploy mới 24 giờ qua. Traffic bình thường.
**Áp lực / Ràng buộc:** 3 giờ sáng. Không có on-call rotation chính thức (solo founder). Cần chẩn đoán nhanh.
**Lựa chọn đã cân nhắc:**
- A: Restart server → có thể fix nếu memory leak, nhưng mất root cause
- B: Scale server lên → che giấu vấn đề, tốn tiền
- C: Debug có hệ thống: check log slow query → phát hiện 1 cron job chạy `VACUUM ANALYZE` lúc 2AM làm lock table; đồng thờii check Redis memory usage → không bất thường; check external API latency → Stripe API chậm ở 1 region
**Quyết định + Lý do:** Chọn C. Root cause: cron job `VACUUM` trên table lớn (chưa từng chạy trước đó, được thêm bởi 1 script maintenance). Tạm dừng cron. Điều chỉnh chạy `VACUUM` trên read replica hoặc giờ thấp điểm hơn với `pg_repack`.
**Đánh đổi phải chấp nhận:** Mất 45 phút thức đêm. Nhưng không tốn tiền scale vô ích.
**Bài học:** Monitoring không chỉ cần "có" — cần có **runbook** cho từng alert. "p99 tăng" → checklist: (1) slow query log, (2) cron job schedule, (3) external API latency, (4) connection pool saturation. Không restart bừa.

### Tình huống 4: LLM Output Sai Trong Production Flow

**Bối cảnh:** Feature AI summary cho support ticket. LLM tóm tắt ticket rồi gán priority. 1 ticket urgent bị gán "low" vì LLM hiểu sai context. Khách hàng enterprise complain.
**Áp lực / Ràng buộc:** Không thể tắt feature vì đã promise khách. Không thể tin LLM 100%.
**Lựa chọn đã cân nhắc:**
- A: Tắt auto-priority, gán manual → mất value của feature
- B: Fine-tune model → tốn thờii gian, data không đủ
- C: Thêm "human-in-the-loop" guardrail: LLM suggest priority + confidence score. Nếu confidence < 0.8 hoặc ticket từ enterprise tier → đưa vào review queue. Đồng thờii log mọi prediction để audit.
**Quyết định + Lý do:** Chọn C. AI là assistant, không phải decision maker cho business-critical workflow. Confidence threshold + fallback queue giảm rủi ro mà vẫn giữ automation cho case rõ ràng.
**Đánh đổi phải chấp nhận:** Team support phải review thêm 20% ticket. Nhưng không có sai sót nghiêm trọng nào nữa.
**Bài học:** Không để LLM tự động quyết định có hậu quả tài chính/pháp lý mà không có guardrail. Luôn có escape hatch.

---

## PHẦN 5: PRODUCTION OPERATIONS

> Production Ops là bắt buộc, không phải "nâng cao". K2: Thêm "Cost-awareness", "Debug dưới áp lực", "Migration & rollback an toàn 2 chiều".

### 5.1. Monitoring & Observability

**Vấn đề thực tế:** Bạn không biết API chậm ở đâu cho đến khi khách hàng complain. Lúc đó đã muộn.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Sentry | Error tracking, performance monitoring, release health | Không bao giờ "không cần" cho production |
| Structured Logging (Pino/Winston) | Debug, audit, trace request qua nhiều service | Development console.log đủ |
| OpenTelemetry (basics) | Distributed tracing, tìm bottleneck cross-service | Monolith đơn giản, chưa cần trace phức tạp |

**Quyết định mặc định:** Sentry cho errors. Pino cho structured logging. OpenTelemetry khi cần trace.

- [ ] **Sentry Setup:**
  - [ ] Source maps cho NestJS (build config)
  - [ ] Breadcrumbs: log request path, userId, correlationId
  - [ ] Alert: Slack/Discord webhook khi error rate > 1%
- [ ] **Structured Logging:**
  - [ ] JSON format: `{ timestamp, level, message, traceId, userId, duration, endpoint }`
  - [ ] Correlation ID: gán `x-request-id` từ gateway, truyền xuống mọi service
  - [ ] Không log sensitive data (password, token, credit card)
- [ ] **Health Checks:**
  - [ ] `GET /health`: check DB connection, Redis connection
  - [ ] `GET /health/live`: Kubernetes liveness probe
  - [ ] `GET /health/ready`: readiness probe — fail nếu chưa sẵn sàng nhận traffic

### 5.2. Debug Dưới Áp Lực

**Vấn đề thực tế:** 2 giờ sáng, app sập, bạn một mình. Não không tỉnh táo. Làm sao không làm tệ hơn?

- [ ] **Checklist Debug (in ra dán bên cạnh màn hình):**
  - [ ] 1. **Không panic.** Hít thở. Không sửa code trực tiếp trên production.
  - [ ] 2. **Tìm scope:** 1 endpoint? Toàn bộ app? 1 region?
  - [ ] 3. **Log gần nhất:** Sentry, server log, DB slow query log — tìm exception mới nhất
  - [ ] 4. **Recent changes:** Có deploy gần đây không? Config thay đổi? Cron job mới?
  - [ ] 5. **Rollback nếu deploy mới:** `git revert` + redeploy nhanh hơn debug lúc nửa đêm
  - [ ] 6. **Kill switch:** Feature flag tắt tính năng lỗi mà không cần deploy
  - [ ] 7. **Communication:** Thông báo team/user nếu downtime > 5 phút — im lặng là poison
- [ ] **Runbook:**
  - [ ] Viết runbook cho 5 scenario phổ biến: DB connection fail, Redis fail, 500 spike, latency spike, external API timeout
  - [ ] Mỗi runbook: symptom → diagnosis steps → fix → rollback procedure

### 5.3. Rollback & Incident Response

- [ ] **Rollback Strategy:**
  - [ ] **Code rollback:** Revert commit → CI/CD deploy lại (target < 10 phút)
  - [ ] **DB rollback:** Không rollback schema trừ khi critical — thường rollback code để tương thích schema mới hơn
  - [ ] **Feature flag kill switch:** Tắt tính năng lỗi trong 30 giây (LaunchDarkly hoặc env var đơn giản)
- [ ] **Incident 4 Bước:**
  - [ ] **Phát hiện:** Monitoring alert, user report, hoặc tự phát hiện
  - [ ] **Chẩn đoán:** Dùng checklist debug, xác định root cause
  - [ ] **Xử lý:** Rollback, kill switch, hotfix (chỉ hotfix nếu chắc chắn, không thì rollback)
  - [ ] **Postmortem:** Viết trong 24h. Không đổ lỗi. Focus: what happened, why, how to prevent.
- [ ] **Postmortem Template:**
  - [ ] Timeline: mốc thờii gian từ phát hiện đến resolve
  - [ ] Root cause: 5 Whys
  - [ ] Impact: Số user ảnh hưởng, data loss (nếu có), thờii gian downtime
  - [ ] Action items: Concrete tasks với owner và deadline

---

## PHẦN 6: PROJECT THỰC CHIẾN — SAAS API BACKEND + AI FEATURE

> K2: Project "SaaS API Backend + AI feature" — NestJS + Prisma + PostgreSQL, JWT Auth, Stripe payment, BullMQ email queue, tích hợp LLM API + RAG cơ bản, API testing, Webhook security.

### Business Context

Bạn xây dựng backend cho SaaS quản lý tài liệu có AI (ví dụ: "Notion + AI assistant"). User đăng ký, upload tài liệu, hỏi AI về nội dung tài liệu. Cần thu tiền qua Stripe, gửi email qua queue, bảo mật webhook.

### Vấn đề giải quyết
- User đăng ký → xác thực email → đăng nhập JWT
- Upload tài liệu → lưu metadata PostgreSQL, file lên S3/R2
- Hỏi AI → RAG: embedding tài liệu → pgvector → LLM answer
- Thanh toán → Stripe Checkout → Webhook cập nhật subscription
- Email → BullMQ queue → Resend
- API cần idempotent, rate limited, tested

### Tech Stack + Lý do chọn

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| NestJS | DI, Guards, Interceptors, module structure | Express/Fastify thuần: thiếu structure cho project lớn hơn prototype |
| Prisma + PostgreSQL | Type-safe, migration tốt, pgvector cho RAG | TypeORM: migration kém ổn định hơn; Drizzle: ecosystem nhỏ hơn |
| Redis + BullMQ | Queue, rate limit cache, session store | RabbitMQ: nặng hơn cần; Inngest: thêm dependency trả phí khi scale |
| Stripe | Checkout, Subscription, Webhook chuẩn | PayPal: UX kém hơn; tự build: PCI scope, không bao giờ |
| Anthropic API | Reasoning tốt, ít hallucinate | OpenAI: backup nếu cần function calling, nhưng Anthropic là default |
| pgvector | RAG cơ bản trên chính Postgres | Pinecone: thêm $20-50/tháng, chưa cần ở giai đoạn này |
| Meilisearch | Full-text search tài liệu | Elasticsearch: nặng, tốn RAM, chuyển sang khi > 1M docs |
| Resend | Transactional email dễ setup, giá tốt | Postmark: deliverability cao hơn nhưng đắt hơn ở volume lớn |
| Jest + Supertest | Integration test NestJS API | Vitest: FE-focused, Jest ecosystem BE mạnh hơn |

### Kiến thức tự nhiên cover
- NestJS module, DI, Guards, Pipes, Interceptors
- Prisma schema, migration, transaction, N+1 prevention
- JWT Auth (access/refresh), RBAC
- Stripe Checkout + Webhook + Idempotency
- BullMQ queue (email, AI processing)
- File upload validation + signed URL
- RAG cơ bản (embedding + pgvector similarity search)
- Rate limiting + Idempotency keys
- Integration test (auth, payment, webhook flows)
- OpenAPI/Swagger docs

### Lộ trình tuần (tham khảo)

```
Tuần 1-2: NestJS scaffold + Prisma + PostgreSQL + Auth (JWT/RBAC)
Tuần 3-4: Stripe integration + Webhook security + Idempotency
Tuần 5-6: File upload + Meilisearch + Email queue (BullMQ)
Tuần 7-8: LLM API + RAG (pgvector) + AI evaluation guardrails
Tuần 9-10: Rate limiting + API testing + OpenAPI docs
Tuần 11-12: Production ops + monitoring + cost tracking + System Design practice
```

### Production-ready Checklist
- [ ] **Code:** TypeScript strict, ESLint + Prettier, no `any`
- [ ] **Tests:** Jest integration test cover auth, payment, webhook, AI flow
- [ ] **CI/CD:** GitHub Actions — Lint → Test → Build → Deploy
- [ ] **Security:** Helmet, CORS, Rate limit, Input validation, OWASP checklist
- [ ] **DB:** Migration an toàn, index đúng, connection pooling
- [ ] **Monitoring:** Sentry error tracking, structured logging, health checks
- [ ] **Deploy:** Docker multi-stage, docker-compose (Nest + PG + Redis + Meilisearch)
- [ ] **Docs:** OpenAPI/Swagger, README setup, ADR cho Stripe vs PayPal, Prisma vs TypeORM
- [ ] **Git:** Conventional commits, branch protection, PR review
- [ ] **Cost:** Theo dõi Stripe fee, LLM token usage, DB connection cost

---

## PHẦN 7: CHECKLIST XIN VIỆC + TÀI LIỆU THAM KHẢO

### 7.1. Checklist Trước Khi Apply / Ship

#### Kiến thức phải giải thích được
- [ ] **NestJS:** Giải thích DI container, lifecycle module, Guards vs Interceptors vs Pipes
- [ ] **Prisma:** Migration strategy, transaction, N+1 fix, expand-contract pattern
- [ ] **SQL:** ACID, 4 isolation levels, B-Tree vs Composite index, `EXPLAIN ANALYZE`
- [ ] **Auth:** JWT access/refresh flow, OAuth2 PKCE, RBAC implementation, httpOnly cookie
- [ ] **Security:** OWASP Top 10 backend, Rate limiting algorithm, CSRF, Argon2
- [ ] **Stripe:** Checkout Session flow, Webhook signature verify, Idempotency key, Subscription lifecycle
- [ ] **Queue:** BullMQ job pattern, retry + dead letter, concurrency control
- [ ] **LLM + RAG:** Streaming API, embedding flow, pgvector similarity search, guardrails
- [ ] **Idempotency:** Key generation, storage, race condition prevention
- [ ] **Event-Driven:** Outbox Pattern, why not direct queue call

#### System Design phải trình bày được
- [ ] Rate Limiter (Redis token bucket, fail open/closed trade-off)
- [ ] Webhook Processor (idempotency, out-of-order, signature verify)
- [ ] Job Queue (BullMQ, worker scale, DB connection pool)
- [ ] Notification System (multi-channel, per-provider rate limit)
- [ ] URL Shortener (unique code generation, malware detect)

#### Code / Debug có thể làm
- [ ] Viết NestJS module từ đầu: Controller → Service → Repository → DTO
- [ ] Viết Prisma schema với relation, index, enum
- [ ] Xử lý Stripe webhook với signature verify + idempotency
- [ ] Debug slow query bằng `EXPLAIN ANALYZE` và fix N+1
- [ ] Viết integration test cho auth flow + payment flow
- [ ] Tính capacity estimation cho 1 đề System Design

### 7.2. Câu hỏi phỏng vấn thường gặp & cách trả lờii

**Q: Tại sao dùng NestJS thay vì Express thuần?**
> A: Express cho phép tự do nhưng thiếu structure. NestJS cung cấp DI, module system, Guards/Interceptors/Pipes — giúp codebase consistent khi scale team. Tuy nhiên, Express vẫn phù hợp prototype 1 ngày. Trade-off: learning curve vs maintainability.

**Q: Làm sao đảm bảo webhook Stripe không bị xử lý 2 lần?**
> A: 3 lớp: (1) Verify signature HMAC để đảm bảo từ Stripe, (2) Lưu `stripe_event_id` vào DB với unique constraint — INSERT bị lỗi nếu đã xử lý, (3) Dùng Redis `SET event_id processed NX` để chặn race condition nếu 2 webhook đến đồng thờii. Trả 200 ngay sau khi lưu event, xử lý async qua queue.

**Q: Rate limiter dùng Redis, nếu Redis sập thì sao?**
> A: Phụ thuộc API. Payment API → **fail closed** (chặn hết, không cho pass) vì rủi ro security cao hơn downtime. Public read API → **fail open** (cho phép pass) với local in-memory counter tạm thờii, vì availability quan trọng hơn. Trade-off: security vs availability.

**Q: Tại sao dùng pgvector thay vì Pinecone cho RAG?**
> A: pgvector chạy trên chính Postgres, không thêm infra, không thêm cost. Đủ cho < 100K documents. Pinecone tốt hơn ở scale lớn và latency thấp hơn, nhưng thêm $20-50/tháng. Với MVP và solo founder, pgvector là quyết định cost-effective. Khi scale lên 1M+ vectors, evaluate Pinecone/Qdrant.

**Q: Làm sao rollback migration an toàn?**
> A: Không rollback schema trên production bằng `prisma migrate down`. Dùng **expand-contract**: thêm column mới (nullable) → deploy code dùng column mới → backfill data → thêm constraint → xóa column cũ ở migration sau. Nếu lỗi, rollback = deploy code cũ (vẫn tương thích schema mới vì column mới nullable).

### 7.3. Tài liệu tham khảo

#### BẮT BUỘC
| Tài liệu | Tại sao | Thờii gian |
|----------|---------|-----------|
| **NestJS Documentation** | Official, đầy đủ nhất | 1-2 tuần |
| **Prisma Docs (Schema, Migrate, Optimize)** | ORM chính thức trong lộ trình | 1 tuần |
| **"Designing Data-Intensive Applications" — Martin Kleppmann** | Nền tảng DB, distributed systems | 3-4 tuần |
| **Stripe Docs (Checkout, Webhooks, Subscriptions)** | Integration tiền thật — phải đọc official | 3-4 ngày |
| **OWASP Top 10 + Cheat Sheet** | Bảo mật backend chuẩn ngành | 2-3 ngày |
| **PostgreSQL Docs (Indexing, Transaction, VACUUM)** | Hiểu DB đang chạy | Liên tục |

#### NÊN ĐỌC
| Tài liệu | Tại sao | Khi nào |
|----------|---------|---------|
| **"Node.js Design Patterns" — Mario Casciaro** | Patterns NestJS dựa trên | Tháng 1-2 |
| **BullMQ Docs** | Queue chính thức | Khi học queue |
| **Anthropic/OpenAI API Docs** | Integration LLM | Tháng 4-5 |
| **pgvector README** | RAG cơ bản | Tháng 4-5 |
| **Redis Docs (Data types, Persistence)** | Cache + queue backbone | Liên tục |

---

## SELF-CHECK TRƯỚC KHI XUẤT

- [x] Có mục System Design riêng cho khối này chưa? → **Có (PHẦN 3: Backend/API System Design, 5 đề + khung ADAPT)**
- [x] Bảo mật có nằm rải trong từng mục liên quan hay bị dồn 1 chỗ? → **Có (rải trong Auth 2.6, Security 2.7, Webhook 2.8, File Upload 2.9, Payment 2.10, Server Action auth trong 2.6)**
- [x] Có mục Production Operations / vận hành thật không? → **Có (PHẦN 5: Monitoring, Debug dưới áp lực, Rollback, Incident 4 bước, Postmortem)**
- [x] Có War Stories / Judgment với ví dụ cụ thể + bị đẩy thêm không? → **Có (PHẦN 4: 4 tình huống với format đầy đủ)**
- [x] Có ngầm hứa hẹn "học xong khối này = senior/production-grade" không? → **Không. Đã phân biệt "nền tảng kỹ thuật" vs "kinh nghiệm vận hành thật" ở PHẦN 1.1**
- [x] Stack có bị đề xuất lại ngoài phạm vi cho phép không? → **Không. Giữ đúng NestJS, Prisma, PG, Redis, BullMQ, Stripe, Meilisearch→ES, Resend, pgvector, tRPC/GraphQL (biết để maintain), JWT/OAuth/RBAC, OWASP, Idempotency (mục riêng), Event-Driven (Outbox/Saga), LLM API + RAG.**
- [x] (K2) Idempotency có là mục riêng không? → **Có (2.17)**
- [x] (K2) Có Cost-awareness không? → **Có (2.21)**
- [x] (K2) Có case debug dưới áp lực không? → **Có (PHẦN 5.2 + War Story 3)**
- [x] (K2) Project có khớp yêu cầu không? → **Có (PHẦN 6: SaaS API Backend + AI feature, NestJS + Prisma + PG + Redis + BullMQ)**

---

> **Kết thúc Khối 2.** Mỗi checkbox là một năng lực bạn phải giải thích được cho ngườii khác. Nếu không giải thích được — chưa hiểu sâu. Quay lại project. Debug thật. Đọc log thật. Xử lý webhook duplicate thật. Đó là cách duy nhất để nền tảng này chuyển thành khả năng vận hành được.
User: viết 03_CHAPTER_3_DEVOPS_BASIC.md
Kimi: ```markdown
# DEVOPS CƠ BẢN — SOLO DEPLOY & PRODUCTION READINESS

## Bối cảnh

Sau Khối 1 (Frontend) và Khối 2 (Backend), bạn đã có một ứng dụng fullstack chạy được trên máy local: Next.js phía trước, NestJS + Prisma + PostgreSQL + Redis + BullMQ phía sau, tích hợp Stripe và AI. Nhưng **chạy được trên máy bạn chưa có nghĩa là sống sót được trên Internet**.

Khối 3 không biến bạn thành DevOps Engineer. Mục tiêu là **đủ nền tảng để tự deploy và giữ một sản phẩm solo/small team sống sót trên production** — không bị hack cơ bản, không mất data vì quên backup, không sập vì deploy bừa, và không burnout vì ôm đồm vận hành thủ công.

> **Tinh thần rút gọn:** Chỉ học phần ai cũng cần. Không đụng vào Terraform, Kubernetes, Vault, hay Service Mesh ở đây — chúng chỉ có giá trị khi hệ thống đã có traffic lớn thật hoặc team đủ lớn. Solo founder cần **tự động hóa để giảm gánh nặng vận hành thủ công** — dữ liệu khảo sát cho thấy burnout (không phải chiến lược sai) là yếu tố dự báo thất bại lớn nhất của solo founder.

---

* **Mục tiêu:** Tự deploy được stack NestJS + Prisma + PostgreSQL + Redis từ Khối 2 lên production, bảo vệ bằng Cloudflare + Nginx, tự động hóa CI/CD, backup tự động, và xử lý được incident cơ bản — KHÔNG phải "trở thành DevOps Engineer". DevOps thật đòi hỏi kinh nghiệm vận hành hệ thống phức tạp dưới traffic thật, on-call rotation, và infrastructure-as-code ở scale lớn — những thứ nằm ở Nhánh A (Staff/Architect) khi bạn đã có lý do thực sự.
* **Thờii gian dự kiến:** 2–3 tháng (học song song với đi làm).
* **Thuộc:** Khối Lõi Chung — bắt buộc cho cả 2 nhánh. Solo Founder cần để tự vận hành sản phẩm. Staff/Architect cần để hiểu production lifecycle và đối thoại được với platform team.
* **Milestone:** Có 1 sản phẩm fullstack deploy thật trên domain riêng, với CI/CD tự động, SSL, monitoring, backup tự động, và đã trải qua ít nhất 1 lần rollback tập luyện thật + 1 lần restore backup thật.

> **Điều roadmap KHÔNG thể cho bạn:** kinh nghiệm xử lý incident lúc 3 giờ sáng khi hệ thống có hàng nghìn user đang active, khả năng đọc được "mùi" infrastructure sắp gãy trước khi monitoring kêu, và sự tự tin để thay đổi production giữa cao điểm traffic. Đây là phần chỉ có qua thực chiến.

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 3: DEVOPS CƠ BẢN (rút gọn — chỉ phần ai cũng cần)                          │
│  Mục tiêu: Solo deploy được 1 dự án hoàn chỉnh lên production                    │
│  Thờii gian: 2–3 tháng                                                           │
│  ─────────────────────────────────────────────────────────────────────────       │
│  • Docker: Multi-stage build, docker-compose (Next + Nest + PG + Redis),         │
│    networking giữa containers, volumes, health checks                            │
│  • Linux VPS cơ bản: Ubuntu/Debian, permissions, systemd, log rotation           │
│  • CI/CD: GitHub Actions (Lint → Test → Build → Push → Deploy),                  │
│    AI-assisted security scanning trong pipeline                                  │
│  • Git Flow / Trunk Based cơ bản, Conventional Commits, Semantic Versioning      │
│  • Domain & DNS: Cloudflare (Proxy, DNS, Free SSL, DDoS protection)              │
│  • Reverse Proxy: Nginx routing multi-service, caching, load balancing (upstream)│
│  • SSL/TLS: Let's Encrypt auto-renewal, Cloudflare Origin CA                     │
│  • Environment Management: Staging/Prod parity, .env best practices,             │
│    Secrets management (GitHub Secrets, không commit secrets)                     │
│  • Deploy: Vercel (FE) + Railway/Render (BE) — chưa cần AWS phức tạp             │
│  • Graceful Shutdown: SIGTERM handling, connection draining                      │
│  • Backup cơ bản: Automated DB backup (pg_dump cron), test restore thật          │
│  • Observability cơ bản: Sentry + structured logging + OpenTelemetry basics      │
│  • Khung Production Readiness: bảo mật nền (secrets, SSH key-only) +             │
│    observability nối thẳng runbook + rollback tập luyện thật + backup            │
│    test restore thật (không chỉ setup rồi để đó)                                 │
│  ─────────────────────────────────────────────────────────────────────────       │
│  Lưu ý: Terraform, Vault, K8s, Service Mesh, IaC nâng cao KHÔNG nằm ở đây        │
│  nữa — chuyển sang Nhánh A vì chỉ có giá trị khi hệ thống đã có traffic          │
│  lớn thật. Nhánh B gần như không bao giờ cần tới mức này.                        │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN

### 1.1. Mục tiêu đạt được

Sau chặn này, bạn phải:

- [ ] Viết được **Dockerfile multi-stage** cho NestJS/Next.js, build ra image < 200MB
- [ ] Viết được **docker-compose** chạy local giống hệt production: Nest + Next + PostgreSQL + Redis + Nginx, với health check và networking riêng
- [ ] Setup được **GitHub Actions CI/CD**: lint → test → build → push Docker Hub → deploy lên VPS tự động qua SSH
- [ ] Cấu hình được **Nginx reverse proxy**: routing multi-service, gzip, rate limit cơ bản, serve static
- [ ] Setup **Cloudflare**: DNS, Proxy (orange cloud), DDoS protection, Origin CA certificate
- [ ] Cấu hình **Let's Encrypt auto-renewal** hoặc Cloudflare Origin CA (valid 15 năm) cho SSL/TLS
- [ ] Quản lý **secrets đúng cách**: GitHub Secrets cho CI, `.env` không commit, phân biệt Staging/Prod
- [ ] Implement **graceful shutdown**: NestJS bắt `SIGTERM`, đợi request hiện tại xong, đóng DB/Redis connection trước khi kill container
- [ ] Setup **backup tự động**: `pg_dump` chạy bằng cron hàng ngày, lưu lên S3/R2, giữ 7 ngày
- [ ] **Test restore thật**: Tạo DB mới, restore từ backup, verify data đúng — không chỉ "tin là backup chạy được"
- [ ] Có **monitoring cơ bản**: Sentry cho lỗi, structured logging (JSON), health check endpoint
- [ ] Viết được **runbook** cho 3 scenario: DB connection fail, disk full, 502 Bad Gateway
- [ ] Thực hiện được **rollback tập luyện thật**: cố tình deploy code lỗi, sau đó revert commit và deploy lại trong < 10 phút
- [ ] Hiểu **5 trụ cột Production Readiness** và áp dụng cho project của mình

> **Điều roadmap KHÔNG thể cho bạn:** cảm giác bình tĩnh khi production đang cháy lúc nửa đêm, khả năng đánh hơi được vấn đề infrastructure trước khi nó thành incident, và kinh nghiệm trade-off giữa uptime và cost khi traffic tăng đột biến. Những thứ này chỉ đến từ việc hệ thống của bạn có user thật, traffic thật, và tiền thật chạy qua.

### 1.2. Thờii gian & Lộ trình đề xuất

```
Tháng 1:   Docker + Linux VPS + Nginx + Cloudflare + SSL
           + Project scaffold (Solo Deploy)
           Tuần 1: Docker multi-stage + docker-compose (Nest + Next + PG + Redis)
           Tuần 2: Linux VPS setup (Ubuntu, UFW, fail2ban, SSH key-only)
           Tuần 3: Nginx reverse proxy + Cloudflare DNS + SSL
           Tuần 4: Environment parity + Secrets + GitHub Actions CI/CD cơ bản

Tháng 2:   Production Readiness + Observability + Backup + Graceful Shutdown
           Tuần 5: Sentry + structured logging + health checks + OpenTelemetry basics
           Tuần 6: Backup automation (pg_dump cron) + test restore thật
           Tuần 7: Graceful shutdown + connection draining + zero-downtime deploy
           Tuần 8: Rollback tập luyện thật + incident response drill + runbook

Tháng 3:   Polish + Cost monitoring + Tổng hợp
           Tuần 9: Cost tracking (VPS, bandwidth, storage) + optimize
           Tuần 10: Security hardening (OWASP deploy, dependency scan, AI-assisted)
           Tuần 11: Git flow + semantic release + docs
           Tuần 12: Tổng hợp, postmortem practice, apply/ship
```

> **Điều chỉnh thực tế:** Nếu timeline bị trễ, ưu tiên cắt **OpenTelemetry nâng cao** và **Git flow phức tạp** trước khi cắt **Backup**, **Graceful Shutdown**, hoặc **Rollback drill** — ba mục này ảnh hưởng trực tiếp đến việc "không mất data" và "không sập khi deploy".

### 1.3. Kiến thức thuộc Lõi Chung

Toàn bộ chặn này thuộc **Khối 3 (Lõi Chung)** — bắt buộc cho cả 2 nhánh. Solo Founder cần để tự vận hành. Staff/Architect cần để hiểu vòng đời production và đối thoại với platform/SRE team.

---

## PHẦN 2: DANH MỤC KIẾN THỨC + QUYẾT ĐỊNH CÔNG NGHỆ

### 2.1. Docker & Containerization

**Vấn đề thực tế:** "Chạy được trên máy tôi" không có nghĩa gì cả. Bạn cần đóng gói ứng dụng để chạy giống hệt nhau trên local, staging, và production. Nhưng image Docker to nặng, build chậm, và container crash không rõ lý do.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Docker Multi-stage | Mọi production build — giảm image size, tách build deps vs runtime | Không bao giờ dùng single-stage cho production |
| Docker Compose | Local dev, staging, solo deploy multi-service | Production scale lớn cần orchestrator (nhưng K3 không cần) |
| Alpine Linux base | Giảm image size, giảm attack surface | Cần glibc-specific binary (dùng Debian slim thay) |
| Health Check | Mọi container — để orchestrator biết khi nào restart | Không bao giờ "không cần" |

**Quyết định mặc định:** Multi-stage Dockerfile với `node:20-alpine` hoặc `node:20-slim`. Docker Compose cho local và solo VPS. Health check mỗi container.

**Anti-pattern:** Copy cả `node_modules` devDependencies vào production image. Hoặc chạy container bằng `root` user.

- [ ] **Multi-stage Dockerfile:**
  - [ ] Stage 1 `builder`: `npm ci`, build TypeScript
  - [ ] Stage 2 `production`: chỉ copy `dist` + `node_modules` (prod only) + `package.json`
  - [ ] Target image < 200MB cho NestJS, < 150MB cho Next.js
  - [ ] `.dockerignore`: loại `node_modules`, `.git`, `.env`, `dist`
- [ ] **Docker Compose:**
  - [ ] Services: `app` (NestJS), `web` (Next.js), `db` (Postgres), `redis` (Redis), `nginx` (Nginx)
  - [ ] Networks: `frontend`, `backend` — isolate DB khỏi public
  - [ ] Volumes: `postgres_data`, `redis_data` — persist data khi container restart
  - [ ] `depends_on` + `condition: service_healthy` — đợi DB sẵn sàng trước khi start app
- [ ] **Health Checks:**
  - [ ] NestJS: `GET /health` trả về DB + Redis connection status
  - [ ] Docker: `HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/health || exit 1`
  - [ ] Docker Compose: `healthcheck` config cho mỗi service
- [ ] **Security:**
  - [ ] Chạy container với non-root user: `USER node`
  - [ ] Không mount Docker socket vào container không cần thiết

---

### 2.2. Linux VPS & Server Management

**Vấn đề thực tế:** Bạn thuê 1 VPS $5-20/tháng. Nếu để mặc định, nó bị brute force SSH trong vòng 1 giờ. Log đầy ổ cứng. Process crash không tự restart.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Ubuntu LTS | Mặc định — community lớn, docs nhiều | Bạn đã quen Debian/CentOS |
| SSH Key-only | Mọi production server — chống brute force | Không bao giờ để password SSH |
| UFW (Uncomplicated Firewall) | VPS solo — dễ cấu hình, đủ mạnh | Cần firewall phức tạp (dùng iptables/raw) |
| fail2ban | Mọi server public — auto-ban IP brute force | Server behind VPN/private only |
| systemd | Quản lý process, auto-restart, log | Dùng Docker Swarm/K8s thì ít cần trực tiếp |

**Quyết định mặc định:** Ubuntu 22.04/24.04 LTS. SSH key-only, port 22 hoặc đổi port. UFW chỉ mở 80, 443, 22. fail2ban bật sẵn.

**Anti-pattern:** Để password root yếu. Mở port không cần thiết. Không update security patch.

- [ ] **SSH Hardening:**
  - [ ] Tắt password auth: `PasswordAuthentication no` trong `/etc/ssh/sshd_config`
  - [ ] Tắt root login: `PermitRootLogin no`
  - [ ] Dùng SSH key 4096-bit, passphrase
  - [ ] Đổi port SSH (tùy chọn, obfuscation nhẹ) hoặc dùng Cloudflare Tunnel
- [ ] **User & Permissions:**
  - [ ] Tạo user deploy riêng, thêm vào `docker` group
  - [ ] `sudo` chỉ cho lệnh cần thiết (visudo)
  - [ ] File permission: `.env` 600, script 700
- [ ] **System Maintenance:**
  - [ ] `unattended-upgrades` cho security patches
  - [ ] Log rotation: `logrotate` config cho app logs (không để log đầy disk)
  - [ ] Disk monitoring: `df -h` alert khi > 80%
  - [ ] `htop`, `iotop` để debug resource usage
- [ ] **Process Management:**
  - [ ] `systemd` service cho app nếu không dùng Docker Compose daemon
  - [ ] `Restart=always` cho critical service

---

### 2.3. CI/CD Pipeline (GitHub Actions)

**Vấn đề thực tế:** Bạn sửa bug, commit, push — rồi quên deploy. Hoặc deploy tay bằng cách copy file qua SCP, thiếu bước test, production sập vì lỗi syntax.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| GitHub Actions | Mặc định — free tier đủ cho solo/small team, tích hợp repo | Self-hosted runner cần bảo trì máy riêng |
| Docker Hub / GHCR | Lưu image build sẵn, deploy nhanh | Build trực tiếp trên server (chậm, không consistent) |
| AI Security Scan (CodeQL/trivy) | Mọi pipeline — phát hiện vulnerability sớm | Không bao giờ "không cần" |

**Quyết định mặc định:** GitHub Actions workflow: Lint → Test → Build → Push Docker image → Deploy VPS qua SSH. Dùng GitHub Container Registry (GHCR) hoặc Docker Hub.

**Anti-pattern:** Commit trực tiếp lên `main` không qua CI. Hoặc lưu SSH private key trong code/repo.

- [ ] **Workflow Pipeline:**
  - [ ] **Lint:** `eslint`, `prettier` — fail nếu không pass
  - [ ] **Test:** `jest` (backend), `vitest` (frontend) — coverage threshold
  - [ ] **Security Scan:** `trivy` scan Docker image, `npm audit`, CodeQL
  - [ ] **Build:** Docker multi-stage build, tag với commit SHA + `latest`
  - [ ] **Push:** Push image lên GHCR/Docker Hub
  - [ ] **Deploy:** SSH vào VPS, `docker-compose pull && docker-compose up -d`
- [ ] **Secrets Management:**
  - [ ] GitHub Secrets: `VPS_HOST`, `VPS_USER`, `SSH_PRIVATE_KEY`, `ENV_PROD`
  - [ ] Không bao giờ commit `.env` — dùng `.env.example` với giá trị giả
  - [ ] `ENV_PROD` được scp lên server trong bước deploy, không nằm trong image
- [ ] **Deploy Strategy:**
  - [ ] Blue-green đơn giản: dùng Docker Compose, `docker-compose up -d` tự recreate container
  - [ ] Zero-downtime: Nginx giữ connection, container mới start xong mới kill cũ (nếu dùng `docker-compose` đơn giản thì có downtime nhỏ ~5-10s — chấp nhận được ở solo scale)

---

### 2.4. Reverse Proxy (Nginx)

**Vấn đề thực tế:** Bạn chạy NestJS port 3000, Next.js port 3001, Meilisearch port 7700. Làm sao user chỉ cần truy cập `https://yourdomain.com` mà không nhớ port? Làm sao cache static file?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Nginx | Mặc định — reverse proxy, static serve, gzip, rate limit | Dùng Cloudflare Tunnel hoặc Traefik nếu cần dynamic config |
| Caddy | Auto HTTPS, config đơn giản hơn Nginx | Cần control sâu (rate limit phức tạp, custom header) |
| Cloudflare Tunnel | Không cần mở port server, bảo mật tốt | Cần direct IP access, hoặc không dùng Cloudflare |

**Quyết định mặc định:** Nginx trên VPS. Cloudflare DNS proxy phía trước.

**Anti-pattern:** Expose port app trực tiếp ra public. Không gzip response. Không cache static asset.

- [ ] **Nginx Config:**
  - [ ] Reverse proxy: `/api/*` → NestJS `localhost:3000`, `/` → Next.js `localhost:3001`
  - [ ] Static file: `location /_next/static` cache 1 năm; `location /assets` cache 1 tháng
  - [ ] Gzip: `gzip on`, `gzip_types application/json text/css`
  - [ ] Rate limit cơ bản: `limit_req_zone` cho API — 10 req/giây per IP
  - [ ] Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`
  - [ ] Client IP real: `set_real_ip_from` Cloudflare IP ranges để log đúng IP user
- [ ] **Upstream & Load Balancing:**
  - [ ] `upstream backend { server localhost:3000; }` — dễ dàng thêm instance sau này
  - [ ] `proxy_pass http://backend`
- [ ] **WebSocket Support:**
  - [ ] `proxy_http_version 1.1`, `proxy_set_header Upgrade $http_upgrade`, `proxy_set_header Connection "upgrade"`

---

### 2.5. Domain, DNS & Security Perimeter

**Vấn đề thực tế:** Bạn mua domain. DNS trỏ thẳng về IP VPS. Kẻ tấn công DDoS, hoặc scan thấy IP gốc, bypass Cloudflare tấn công trực tiếp.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Cloudflare Proxy (orange cloud) | Mọi production — DDoS, WAF cơ bản, CDN, hide origin IP | Cần direct IP cho 1 số service đặc biệt |
| Cloudflare Origin CA | Valid 15 năm, miễn phí, tin cậy giữa Cloudflare ↔ Origin | Không dùng Cloudflare proxy |
| Let's Encrypt | Auto-renewal 90 ngày, chuẩn mực, dùng nếu không dùng Cloudflare Origin CA | Đã dùng Origin CA (không cần cả hai) |

**Quyết định mặc định:** Cloudflare Proxy bật. Cloudflare Origin CA cho SSL giữa Cloudflare và VPS. DNS-only record cho `ssh.yourdomain.com` (grey cloud) nếu cần SSH qua domain.

**Anti-pattern:** DNS A record trỏ thẳng IP VPS mà không qua proxy. IP VPS lộ ra ngoài.

- [ ] **DNS Config:**
  - [ ] A record: `yourdomain.com` → VPS IP (orange cloud — proxied)
  - [ ] CNAME: `www` → `yourdomain.com`
  - [ ] Grey cloud cho subdomain cần direct IP (nếu có)
- [ ] **SSL/TLS:**
  - [ ] Cloudflare: SSL/TLS mode "Full (strict)" — encrypt giữa user ↔ Cloudflare ↔ Origin
  - [ ] Origin CA: generate certificate trên Cloudflare, cài lên Nginx
  - [ ] Auto-renewal: Origin CA 15 năm, không cần renew. Nếu dùng Let's Encrypt: `certbot` + cron renew
- [ ] **Security:**
  - [ ] Firewall Rules: challenge/block country nếu cần, block threat score > 10
  - [ ] Always Use HTTPS: redirect 301
  - [ ] Security Level: Medium/High
  - [ ] **Bảo mật nền:** IP VPS chỉ accept traffic từ Cloudflare IP ranges (UFW) — ngăn bypass

---

### 2.6. Environment & Secrets Management

**Vấn đề thực tế:** Bạn commit `DATABASE_URL=postgres://admin:secret@localhost/db` lên GitHub. Secret bị lộ vĩnh viễn. Staging dùng API key production. Lỗi chỉ xảy ra trên prod vì config khác local.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| `.env` + GitHub Secrets | Mọi project solo/small team | Enterprise cần Vault/Secret Manager |
| Docker Compose `env_file` | Local + staging + prod — consistent | Không bao giờ hardcode trong Dockerfile |
| Staging/Prod Parity | Mọi project — giảm "lỗi chỉ ở prod" | Prototype 1 ngày |

**Quyết định mặc định:** `.env` file cho mỗi environment. GitHub Secrets cho CI/CD. Không bao giờ commit secret. Staging giống prod 100% về DB version, OS, environment variables.

**Anti-pattern:** Hardcode secret trong source code. Dùng `NODE_ENV=production` để phân biệt logic (chỉ dùng để load config, không dùng `if (env === 'production')` trong business logic).

- [ ] **Environment Parity:**
  - [ ] Cùng Docker Compose file cho local và prod (chỉ khác `.env`)
  - [ ] Cùng PostgreSQL version, cùng Redis version
  - [ ] Cùng Node.js version (`.nvmrc` + Dockerfile `FROM node:20-alpine`)
- [ ] **Secrets Best Practices:**
  - [ ] `.env.example` committed — liệt kê key cần thiết, giá trị giả
  - [ ] `.env` trong `.gitignore` tuyệt đối
  - [ ] Rotate secret định kỳ: Stripe keys, DB password, JWT secret
  - [ ] JWT secret: dùng `openssl rand -base64 32`, không dùng "my-secret-key"
- [ ] **Config Validation:**
  - [ ] Dùng `joi` hoặc `zod` validate env variables khi app start
  - [ ] Fail fast nếu thiếu required env — không chạy với default nguy hiểm

---

### 2.7. Graceful Shutdown & Connection Draining

**Vấn đề thực tế:** Bạn deploy phiên bản mới. Docker kill container cũ ngay lập tức. Request đang xử lý bị cắt ngang. DB connection không đóng, leak connection.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| SIGTERM Handler | Mọi production app — đóng gói resource trước khi exit | Script 1 lần chạy xong thoát ngay |
| Connection Draining | API server, queue worker — đợi request/job xong | Không cần nếu dùng serverless (nhưng K3 dùng VPS) |
| Docker Stop Grace Period | `docker-compose stop -t 30` — đợi app shutdown | Mặc định 10s thường không đủ |

**Quyết định mặc định:** NestJS bắt `SIGTERM`, đợi 15 giây cho request hiện tại, đóng Prisma connection, đóng Redis connection, sau đó `process.exit(0)`. Docker Compose `stop_grace_period: 30s`.

**Anti-pattern:** Không handle `SIGTERM`, để Docker kill -9 sau 10 giây. Hoặc shutdown ngay lập tức không đợi request xong.

- [ ] **NestJS Graceful Shutdown:**
  - [ ] `app.enableShutdownHooks()` — bắt `SIGTERM`, `SIGINT`
  - [ ] `onModuleDestroy()`: đóng Prisma `$disconnect()`, đóng Redis, dừng BullMQ worker
  - [ ] `httpAdapter.close()` — không nhận request mới
  - [ ] Timeout: đợi tối đa 15 giây, sau đó force exit
- [ ] **Docker Config:**
  - [ ] `stop_signal: SIGTERM` trong docker-compose
  - [ ] `stop_grace_period: 30s`
- [ ] **Zero-downtime Deploy:**
  - [ ] Nginx giữ connection — không route đến container đang shutdown
  - [ ] Docker Compose `up -d` tự recreate — có downtime ~5-10s, chấp nhận được ở solo scale
  - [ ] Nếu cần zero thật sự: dùng 2 instance + Nginx upstream reload (nâng cao hơn K3)

---

### 2.8. Backup & Disaster Recovery

**Vấn đề thực tế:** Bạn không backup. Ổ cứng VPS die. Hoặc xóa nhầm bảng. Hoặc backup có trong script nhưng chưa bao giờ test restore — đến lúc cần thì file corrupt.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| pg_dump hàng ngày | Mọi PostgreSQL production | DB < 1GB và chấp nhận mất data |
| S3/R2 lưu backup | Off-site, durable, cheap | Lưu trên cùng VPS (die cùng VPS) |
| Test Restore Thật | Mọi tháng — chứng minh backup dùng được | Không bao giờ "tin là backup chạy được" |

**Quyết định mặc định:** `pg_dump` hàng ngày lúc 3AM (giờ thấp điểm), nén `.sql.gz`, upload lên Cloudflare R2 (hoặc AWS S3). Giữ 7 bản daily + 4 bản weekly. Test restore vào DB test mỗi tháng.

**Anti-pattern:** Backup lên cùng server. Backup không encrypt. Không bao giờ test restore.

- [ ] **Backup Automation:**
  - [ ] Script shell: `pg_dump -Fc $DATABASE_URL | gzip > backup_$(date +%F).sql.gz`
  - [ ] Cron: `0 3 * * * /path/to/backup.sh` (3AM daily)
  - [ ] Upload: `rclone` hoặc `aws s3 cp` lên object storage
  - [ ] Retention: xóa backup cũ hơn 7 ngày (tiết kiệm cost)
  - [ ] Encrypt: `gpg` encrypt trước khi upload nếu chứa PII
- [ ] **Test Restore:**
  - [ ] Tạo DB test: `createdb restore_test`
  - [ ] `gunzip < backup.sql.gz | psql restore_test`
  - [ ] Chạy 1-2 query kiểm tra: `SELECT COUNT(*) FROM users`, `SELECT * FROM orders LIMIT 1`
  - [ ] Ghi log: "Restore test ngày X: PASS/FAIL"
- [ ] **Point-in-time Recovery (biết để sau này):**
  - [ ] WAL archiving cho PostgreSQL — phục hồi đến từng phút
  - [ ] K3 không cần setup WAL ngay, nhưng biết tồn tại

---

### 2.9. Observability & Monitoring

**Vấn đề thực tế:** App sập. Bạn không biết tại sao. Log nằm rải rác console. Không biết request nào gây lỗi. Không biết DB có còn sống không.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Sentry | Mọi production app — error tracking, performance | Không bao giờ "không cần" |
| Structured Logging (Pino) | Debug, audit, trace request | Console.log thuần (khó parse, không consistent) |
| Health Check Endpoint | Mọi service — load balancer, monitoring, uptime check | Không bao giờ "không cần" |
| OpenTelemetry (basics) | Trace request qua nhiều service, tìm bottleneck | Monolith đơn giản — biết để sau này |

**Quyết định mặc định:** Sentry cho lỗi. Pino cho structured logging JSON. `GET /health` cho uptime. OpenTelemetry biết cơ bản, không cần setup phức tạp ở K3.

**Anti-pattern:** `console.log` trong production. Không log correlation ID. Log sensitive data.

- [ ] **Sentry Setup:**
  - [ ] NestJS Sentry module: bắt exception, log request context
  - [ ] Source maps: upload trong CI để stack trace readable
  - [ ] Alert: Slack/Discord nếu error rate > 1% hoặc có new error type
- [ ] **Structured Logging:**
  - [ ] Format JSON: `{ "timestamp": "...", "level": "info", "message": "...", "traceId": "...", "userId": "...", "durationMs": 123, "endpoint": "POST /api/orders" }`
  - [ ] Correlation ID: gán `x-request-id` từ Nginx, truyền xuống NestJS
  - [ ] Không log: password, token, credit card, PII không cần thiết
- [ ] **Health Checks:**
  - [ ] `GET /health`: trả `200` nếu DB + Redis connect được
  - [ ] `GET /health/live`: liveness probe — container còn sống
  - [ ] `GET /health/ready`: readiness probe — sẵn sàng nhận traffic
- [ ] **Uptime Monitoring (biết để sau):**
  - [ ] UptimeRobot hoặc Pingdom: ping `https://yourdomain.com/health` mỗi 5 phút
  - [ ] Alert nếu downtime > 2 phút

---

### 2.10. Production Readiness Framework (5 Trụ Cột)

**Vấn đề thực tế:** Bạn tưởng mình đã "deploy xong". Nhưng khi sự cố xảy ra, không biết phải làm gì. Không có runbook. Không biết rollback. Backup chưa từng test. Đây là khung để bạn tự đánh giá "đã sẵn sàng chưa".

| Trụ cột | Ý nghĩa | Khi nào KHÔNG cần |
|---------|---------|-------------------|
| (a) Bảo mật nền | SSH key-only, UFW, Cloudflare proxy, secrets không lộ | Không bao giờ "không cần" |
| (b) Observability nối runbook | Sentry + log + health check → mỗi alert có runbook | Không bao giờ "không cần" |
| (c) Rollback tập luyện thật | Đã thực hành revert deploy lỗi trong < 10 phút | Chưa deploy lần nào |
| (d) Backup/restore test thật | Đã restore backup vào DB test, verify data | Chưa có data quan trọng |
| (e) Environment parity | Local = Staging = Prod về OS, DB version, env | Prototype 1 ngày |

**Quyết định mặc định:** Áp dụng cả 5 trụ cột trước khi coi là "production-ready". Không cần hoàn hảo, nhưng cần đủ để không mất ngủ mỗi lần deploy.

- [ ] **(a) Bảo mật nền:**
  - [ ] SSH key-only, port 22 UFW, fail2ban
  - [ ] Cloudflare proxy bật, origin IP ẩn
  - [ ] Secrets trong GitHub Secrets + `.env` 600 permission
  - [ ] Không chạy container root
- [ ] **(b) Observability nối runbook:**
  - [ ] Mỗi alert/error type có runbook 1 trang A4
  - [ ] Runbook gồm: symptom → diagnosis (3 lệnh check) → fix → rollback → who to call
  - [ ] Ví dụ: "502 Bad Gateway" → check `docker-compose ps`, check Nginx error log, check `docker logs app`
- [ ] **(c) Rollback tập luyện thật:**
  - [ ] Cố tình deploy code lỗi (throw error ở endpoint `/health`)
  - [ ] Verify monitoring báo động
  - [ ] Thực hiện revert commit + redeploy
  - [ ] Đo thờii gian: target < 10 phút từ phát hiện đến fix
  - [ ] Ghi lại: điểm nào chậm? Cần cải thiện gì?
- [ ] **(d) Backup/restore test thật:**
  - [ ] Không chỉ "setup backup rồi". Thực sự restore và verify.
  - [ ] Lên lịch: test restore mỗi tháng
- [ ] **(e) Environment parity:**
  - [ ] Cùng `docker-compose.yml` cho local và prod
  - [ ] Cùng PostgreSQL major version
  - [ ] Staging environment nếu có thể (dùng VPS nhỏ hơn hoặc Railway staging)

---

## PHẦN 3: JUDGMENT & WAR STORIES

### Tình huống 1: Deploy Lỗi Làm Sập Production — Rollback Drill

**Bối cảnh:** Bạn deploy feature mới lúc 10 tối. 10 phút sau, Sentry báo `TypeError: Cannot read property 'id' of undefined` hàng loạt. `/health` vẫn trả 200 nhưng API `/api/orders` crash.
**Áp lực / Ràng buộc:** Đang một mình. Không có on-call buddy. User ở timezone khác đang dùng.
**Lựa chọn đã cân nhắc:**
- A: SSH vào server, sửa code trực tiếp → rủi ro thêm lỗi, không có CI test
- B: Tắt container, để app sập hoàn toàn → downtime 100%
- C: Revert commit trên GitHub → GitHub Actions tự động build + deploy bản cũ → verify `/api/orders` hoạt động lại
**Quyết định + Lý do:** Chọn C. CI/CD pipeline tồn tại để không phải sửa tay lúc nửa đêm. Revert commit là an toàn nhất vì đã qua test ở bản cũ.
**Đánh đổi phải chấp nhận:** Mất feature mới tạm thờii. Nhưng app sống.
**Bài học:** Không deploy lúc 10 tối nếu không có rollback tự động. Luôn giữ `main` ở trạng thái deployable. Feature flag giúp tắt feature lỗi mà không cần revert.

### Tình huống 2: Backup "Tưởng" Chạy — Khi Cần Thì File Trống

**Bối cảnh:** VPS provider thông báo hardware failure, buộc rebuild server. Bạn tự tin vì có cron backup hàng ngày lên S3. Tải file backup mới nhất về: 0 bytes. Cron chạy nhưng `pg_dump` fail vì biến môi trường `DATABASE_URL` không có trong cron environment. File 0 bytes vẫn được upload.
**Áp lực / Ràng buộc:** Mất toàn bộ data production. Không có bản backup nào valid. User không thể đăng nhập.
**Lựa chọn đã cân nhắc:**
- A: Blame VPS provider → không lấy lại được data
- B: Tắt app để không ghi thêm data, liên hệ VPS support xem có snapshot không
- C: (Sau khi giải quyết immediate): Thêm `set -euo pipefail` vào backup script, redirect stderr vào log, verify file size > 1KB sau backup, test restore tự động hàng tuần
**Quyết định + Lý do:** Chọn B immediate + C long-term. `set -e` làm script exit nếu `pg_dump` fail. `2>> /var/log/backup.log` để biết lỗi. Kiểm tra file size trước khi upload.
**Đánh đổi phải chấp nhận:** Mất data từ lần backup cuối cùng valid (có thể 2-3 ngày). Nhưng không lặp lại.
**Bài học:** Backup không có nghĩa gì nếu chưa test restore. "Tin" là kẻ thù của vận hành. Chỉ có "verify" mới đáng tin.

### Tình huống 3: Solo Founder Burnout Vì Vận Hành Thủ Công

**Bối cảnh:** 3 tháng sau launch, bạn dành 2 giờ mỗi ngày để: deploy tay, check log tay, backup tay, restart service tay. Không còn thờii gian code feature mới. Stress tăng. Suy nghĩ bỏ cuộc.
**Áp lực / Ràng buộc:** Không có team. Không có budget thuê DevOps. Cần giảm gánh nặng vận hành ngay.
**Lựa chọn đã cân nhắc:**
- A: Thuê freelancer DevOps → tốn $500-1000/tháng, chưa có doanh thu
- B: Bỏ cuộc, shutdown product → thua
- C: Dành 1 tuần "halt feature dev", tự động hóa toàn bộ: CI/CD auto deploy, backup cron, Sentry auto alert, health check auto restart. Sau đó chỉ can thiệp khi alert kêu.
**Quyết định + Lý do:** Chọn C. Tự động hóa là đầu tư, không phải cost. 1 tuần mất thờii gian nhưng giải phóng 2 giờ/ngày vĩnh viễn. Dữ liệu khảo sát solo founder cho thấy burnout từ vận hành thủ công là yếu tố dự báo thất bại lớn nhất.
**Đánh đổi phải chấp nhận:** Chậm 1 tuần không có feature mới. Nhưng sản phẩm sống sót và founder không kiệt sức.
**Bài học:** DevOps cho solo founder không phải "làm nhiều hơn" — làm **tự động hóa** để làm **ít hơn**. Nếu bạn đang làm thủ công việc lặp lại > 2 lần/tuần, đó là ứng viên cho automation.

---

## PHẦN 4: PROJECT THỰC CHIẾN — SOLO DEPLOY

> K3: Project "Solo Deploy" — Docker compose, GitHub Actions CI/CD, Nginx, Cloudflare, Sentry, Backup automation, Graceful shutdown. PHẢI khớp kiến trúc đã dựng ở K2 (NestJS + Prisma + PG + Redis + BullMQ).

### Business Context

Bạn đã có backend SaaS từ Khối 2 (NestJS + Prisma + PostgreSQL + Redis + BullMQ + Stripe + AI). Bây giờ cần đưa nó lên Internet để user thật dùng được, với chi phí hợp lý cho solo founder.

### Vấn đề giải quyết
- Deploy fullstack (Next.js + NestJS + PostgreSQL + Redis) lên 1 VPS với Docker Compose
- CI/CD tự động: push code → test → build image → deploy
- Bảo mật cơ bản: Cloudflare proxy, SSL, SSH key-only, secrets không lộ
- Backup tự động hàng ngày, test restore thật
- Monitoring: Sentry + log + health check
- Graceful shutdown: deploy không cắt request giữa chừng
- Rollback drill: thực hành revert lỗi

### Tech Stack + Lý do chọn

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| VPS (Hetzner/DigitalOcean/Linode) | Giá tốt, control cao, học được Linux thực tế | AWS EC2: phức tạp hơn cần, billing khó đoán; Heroku: đắt, lock-in, ít control |
| Docker Compose | Multi-service trên 1 VPS, dễ quản lý, consistent | K8s: overkill cho 1 VPS, học curve cao; systemd service: không isolate bằng container |
| Nginx | Reverse proxy, static serve, gzip, rate limit | Caddy: dễ hơn nhưng Nginx docs nhiều hơn, control sâu hơn; Traefik: tốt nhưng phức tạp hơn cần |
| Cloudflare | Free CDN, DDoS, SSL, hide origin IP | Không dùng: lộ IP, tự lo DDoS; AWS CloudFront: thêm cost |
| GitHub Actions | Free tier đủ, tích hợp repo, marketplace lớn | GitLab CI: tốt nhưng nếu đã dùng GitHub thì không cần chuyển; Jenkins: nặng, cần host |
| Sentry | Error tracking, performance, free tier đủ solo | LogRocket: nặng về session replay hơn error; tự host Sentry: tốn resource |
| Cloudflare R2 / AWS S3 | Backup off-site, cheap storage | Lưu trên VPS: die cùng server; Google Drive API: không automate tốt |

### Kiến thức tự nhiên cover
- Docker multi-stage + compose + health check
- Linux VPS hardening + systemd + cron
- Nginx reverse proxy + SSL + gzip + rate limit
- Cloudflare DNS + Proxy + Origin CA
- GitHub Actions CI/CD + secrets
- Graceful shutdown SIGTERM
- Backup pg_dump + R2 + test restore
- Sentry error tracking + structured logging
- Production Readiness 5 trụ cột
- Rollback drill thực tế

### Lộ trình tuần

```
Tuần 1: Docker & Local Parity
├── Ngày 1-2: Viết Dockerfile multi-stage cho NestJS và Next.js
├── Ngày 3-4: Docker Compose: Nest + Next + PG + Redis + Nginx, health checks
├── Ngày 5-6: Environment parity: .env, staging config giống prod
├── Ngày 7: Test toàn bộ stack local: `docker-compose up`, verify API + FE
└── Deliverable: `docker-compose.yml` chạy được local

Tuần 2: VPS & Nginx & Cloudflare
├── Ngày 8-9: Thuê VPS Ubuntu, setup SSH key-only, UFW, fail2ban
├── Ngày 10-11: Cài Docker, clone repo, chạy docker-compose trên VPS
├── Ngày 12-13: Nginx config: reverse proxy, static cache, gzip, rate limit
├── Ngày 14: Cloudflare: DNS, Proxy bật, Origin CA, SSL Full (strict)
└── Deliverable: App truy cập được qua `https://yourdomain.com`

Tuần 3: CI/CD & Secrets & Graceful Shutdown
├── Ngày 15-16: GitHub Actions workflow: lint → test → build → push GHCR
├── Ngày 17-18: Deploy step: SSH vào VPS, pull image, up compose
├── Ngày 19-20: Secrets: GitHub Secrets, .env không commit, validate env
├── Ngày 21: Graceful shutdown: NestJS SIGTERM handler, docker stop grace period
└── Deliverable: Push code lên `main` → tự động deploy sau 3-5 phút

Tuần 4: Backup & Monitoring & Rollback Drill
├── Ngày 22-23: Backup script + cron daily + upload R2
├── Ngày 24: Test restore thật: tạo DB mới, restore, verify
├── Ngày 25-26: Sentry setup, structured logging Pino, health check endpoint
├── Ngày 27: Runbook: viết 3 runbook (502, DB fail, disk full)
├── Ngày 28: Rollback drill: deploy code lỗi → revert → redeploy → đo thờii gian
└── Deliverable: Production-ready app với backup + monitoring + runbook
```

### Production-ready Checklist
- [ ] **Code:** Dockerfile multi-stage, .dockerignore, docker-compose
- [ ] **CI/CD:** GitHub Actions pass, auto deploy từ `main`
- [ ] **Security:** SSH key-only, UFW, Cloudflare proxy, secrets không lộ
- [ ] **SSL:** Cloudflare Origin CA hoặc Let's Encrypt auto-renew
- [ ] **Nginx:** Reverse proxy, static cache, gzip, rate limit, WS support
- [ ] **Graceful Shutdown:** SIGTERM handler, connection drain, 30s grace period
- [ ] **Backup:** pg_dump daily, upload R2/S3, encrypt, retention 7 ngày
- [ ] **Restore:** Đã test restore thật và verify
- [ ] **Monitoring:** Sentry, structured log, health check, uptime alert
- [ ] **Runbook:** 3 scenario có sẵn
- [ ] **Rollback:** Đã thực hành revert lỗi trong < 10 phút
- [ ] **Cost:** Theo dõi VPS + R2 + bandwidth, target < $30-50/tháng cho solo
- [ ] **Docs:** README deploy, ADR cho VPS vs Heroku vs Railway

---

## PHẦN 5: CHECKLIST XIN VIỆC / SHIP + TÀI LIỆU THAM KHẢO

### 5.1. Checklist Trước Khi Apply / Ship Solo

#### Kiến thức phải giải thích được
- [ ] **Docker:** Multi-stage build giảm size như thế nào? Layer caching? `.dockerignore` quan trọng ra sao?
- [ ] **Docker Compose:** Networks, volumes, depends_on, health check. Tại sao không nên chạy DB container mà không có volume?
- [ ] **Linux:** SSH key vs password. UFW. `systemctl`. `journalctl`. `fail2ban` hoạt động thế nào?
- [ ] **Nginx:** Reverse proxy vs forward proxy. `proxy_pass`. `upstream`. Tại sao cần `client_max_body_size`?
- [ ] **Cloudflare:** Proxy vs DNS-only. Origin CA vs Let's Encrypt. DDoS protection hoạt động ở layer nào?
- [ ] **CI/CD:** GitHub Actions workflow syntax. Secrets. Tại sao cần test trước deploy?
- [ ] **Graceful Shutdown:** SIGTERM vs SIGKILL. Tại sao cần đợi request xong? NestJS `enableShutdownHooks`.
- [ ] **Backup:** `pg_dump` vs `pg_basebackup`. Tại sao phải test restore? Retention policy.
- [ ] **Security:** Không commit secret. Non-root container. Cloudflare IP whitelist.

#### Câu hỏi phỏng vấn / Trade-off thường gặp

**Q: Tại sao không dùng Kubernetes cho solo deploy?**
> A: K8s giải quyết bài toán orchestrate hàng trăm container trên hàng chục node. Với 1 VPS 1-2 container, Docker Compose + systemd đủ sức. K8s thêm complexity: cần học Pod, Service, Ingress, Helm — thờii gian đó nên đầu tư vào product. Khi nào có 3+ service cần scale độc lập, K8s mới đáng.

**Q: Tại sao dùng VPS thay vì Heroku/Railway?**
> A: Heroku/Railway nhanh, không cần quản lý server. Nhưng VPS cho control cao hơn (Nginx config, firewall, log rotation), cost thấp hơn ở scale vừa ($5-20/tháng), và học được Linux thực tế — kỹ năng transferrable. Trade-off: time investment vs convenience.

**Q: Cloudflare Proxy bật, làm sao lấy real IP user?**
> A: Cloudflare gửi IP thật trong header `CF-Connecting-IP`. Nginx cần `set_real_ip_from` Cloudflare IP ranges và `real_ip_header CF-Connecting-IP`. Nếu không config, log sẽ toàn IP Cloudflare.

**Q: Làm sao zero-downtime deploy với Docker Compose?**
> A: Docker Compose đơn giản có downtime nhỏ (~5-10s) khi recreate container. Chấp nhận được ở solo scale. Nếu cần zero thật: dùng 2 instance + Nginx upstream reload, hoặc dùng Docker Swarm rolling update. Nhưng đừng over-engineer trước khi có user đòi hỏi.

**Q: Backup hàng ngày, nhưng DB 100GB thì sao?**
> A: `pg_dump` chậm và to với DB lớn. Ở scale đó chuyển sang `pg_basebackup` (physical backup) + WAL archiving để point-in-time recovery. K3 không cần ngay, nhưng biết giới hạn của `pg_dump`.

### 5.2. Tài liệu tham khảo

#### BẮT BUỘC
| Tài liệu | Tại sao | Thờii gian |
|----------|---------|-----------|
| **Docker Docs (Get Started, Dockerfile reference, Compose)** | Official, cần cho mọi lệnh | 3-4 ngày |
| **Nginx Docs (Beginner's Guide, Reverse Proxy)** | Config Nginx đúng | 2-3 ngày |
| **Cloudflare Docs (DNS, SSL/TLS, Origin CA)** | Bảo mật nền | 2 ngày |
| **GitHub Actions Docs** | CI/CD | 2 ngày |
| **"The Docker Book" — James Turnbull** | Thực hành từ đầu đến cuối | 1 tuần |

#### NÊN ĐỌC
| Tài liệu | Tại sao | Khi nào |
|----------|---------|---------|
| **"The Linux Command Line" — William Shotts** | Linux cơ bản, permissions, shell scripting | Tháng 1 |
| **"How Linux Works" — Brian Ward** | Hiểu sâu OS, systemd, networking, storage | Tháng 1-2 |
| **PostgreSQL Docs (Backup, WAL, pg_dump)** | Backup/restore đúng chuẩn | Khi setup backup |
| **Certbot Docs** | Nếu dùng Let's Encrypt thay vì Origin CA | Khi cần |
| **Sentry Docs (NestJS integration)** | Error tracking setup | Tháng 2 |

#### CÔNG CỤ HỌC TẬP
| Công cụ | Dùng để |
|---------|---------|
| **Excalidraw** | Vẽ architecture: Docker network, Nginx flow, Cloudflare → Origin |
| **htop / btop** | Theo dõi resource VPS real-time |
| **ncdu** | Phân tích disk usage — tìm file log/cache chiếm chỗ |
| **ngrok / Cloudflare Tunnel** | Expose local để test webhook nếu chưa có VPS |
| **trivy** | Scan Docker image vulnerability locally trước khi push |

---

## SELF-CHECK TRƯỚC KHI XUẤT

- [x] Có mục System Design riêng cho khối này chưa? → **Không cần System Design riêng cho K3 theo prompt, thay vào đó có Khung Production Readiness 5 trụ cột (2.10) làm xương sống**
- [x] Bảo mật có nằm rải trong từng mục liên quan hay bị dồn 1 chỗ? → **Có (SSH 2.2, UFW/fail2ban 2.2, Cloudflare 2.5, non-root container 2.1, secrets 2.6, Nginx headers 2.4)**
- [x] Có mục Production Operations / vận hành thật không? → **Có (PHẦN 2.10 Production Readiness 5 trụ cột, 2.9 Observability, 2.8 Backup, 2.7 Graceful Shutdown, PHẦN 3 War Stories)**
- [x] Có War Stories / Judgment với ví dụ cụ thể + bị đẩy thêm không? → **Có (PHẦN 3: 3 tình huống — Rollback drill, Backup fail, Burnout automation)**
- [x] Có ngầm hứa hẹn "học xong khối này = senior/production-grade" không? → **Không. Đã phân biệt "đủ nền tảng để tự deploy" vs "kinh nghiệm vận hành thật" ở PHẦN 1.1**
- [x] Stack có bị đề xuất lại ngoài phạm vi cho phép không? → **Không. Giữ đúng Docker, Linux VPS, GitHub Actions, Nginx, Cloudflare, Let's Encrypt, Vercel/Railway/Render, Sentry, OpenTelemetry basics. Không có K8s/Terraform/Service Mesh/Vault.**
- [x] (K3) Project Solo Deploy có khớp kiến trúc K2 không? → **Có (PHẦN 4: NestJS + Prisma + PG + Redis + BullMQ)**
- [x] (K3) Có case study incident thật không? → **Có (War Story 1: Deploy lỗi, War Story 2: Backup 0 bytes — cả 2 đi đủ 4 bước)**
- [x] (K3) Có rollback tập luyện thật không? → **Có (Project Tuần 4: Rollback drill + War Story 1)**
- [x] (K3) Có K8s/Terraform/Service Mesh không? → **Không.**

---

> **Kết thúc Khối 3.** Đây là chặn ngắn nhất trong 3 khối lõi, nhưng không vì thế mà kém quan trọng. Một sản phẩm không deploy được thì dù code hay đến đâu cũng chỉ là file nằm trên máy tính. Một sản phẩm deploy rồi nhưng không backup, không monitor, không rollback được thì là trái bom nổ chậm.
>
> Solo founder cần nhớ: **Mục tiêu không phải trở thành DevOps Engineer — mục tiêu là tự động hóa để giảm gánh nặng vận hành thủ công, tránh burnout.** Nếu bạn đang dành > 30 phút/ngày cho việc deploy tay, restart service, hoặc dọn log, thì đó là tín hiệu cần đầu tư thêm vào automation.
>
> Sau 3 khối lõi, bạn có **nền tảng kỹ thuật đủ để xây dựng, deploy, và giữ một sản phẩm fullstack sống sót trên Internet.** Phần còn lại — kinh nghiệm vận hành dưới traffic thật, khả năng đánh hơi sự cố trước khi nó nổ, và sự tự tin để thay đổi production giữa cao điểm — chỉ đến từ việc ship product và để user thật dùng.
>
> Tại điểm rẽ nhánh, hãy đánh giá hoàn cảnh thực tế. Nếu đi Nhánh A: K8s, Terraform, Vault sẽ chờ bạn ở đó — nhưng chỉ khi bạn đã có lý do thực sự. Nếu đi Nhánh B: VPS + Docker Compose có thể đủ cho bạn đến doanh thu $10K/tháng đầu tiên.
