# LỘ TRÌNH SOLO FULLSTACK: TỪ REACT ĐẾN STAFF/ARCHITECT HOẶC SOLO FOUNDER
## Chương Tổng Quan — Bản đồ toàn cảnh hành trình

> **Định hướng:** Xây nền tảng fullstack vững chắc, dùng chung cho 2 con đường sự nghiệp khác nhau — **đi làm lên Staff/Architect** hoặc **tự làm Solo Founder** — rồi rẽ nhánh dựa trên hoàn cảnh thực tế thay vì chọn trước bằng cảm tính.
> **Nguyên tắc cốt lõi:** Học theo chiều ngang (Project-based). Ưu tiên điểm chung trước, rẽ nhánh sau khi có đủ dữ kiện để quyết định.
> **Thời gian dự kiến:** Lõi chung 9–12 tháng ở kịch bản lạc quan nhất (lấy cận dưới mỗi khối: 3+6+2 tháng); thực tế cộng dồn 3 khối thường rơi vào 11–21 tháng tùy tốc độ học và mức độ đi làm song song. Sau đó mỗi nhánh tiếp tục 12–24 tháng tùy tốc độ.
> **Ngôn ngữ:** JavaScript/TypeScript ecosystem



## 1. TẠI SAO TÁCH LÕI CHUNG VÀ RẼ NHÁNH

Mục tiêu: "Staff/Architect" (thăng tiến trong công ty) và "Solo Startup Mastery" (tự kinh doanh).

Hai con đường này cần kỹ năng khác nhau ở giai đoạn nâng cao (Kafka/service mesh cho Staff vs. sales/validate ý tưởng cho Founder), và học cả hai cùng lúc kéo bạn về hai ưu tiên đối nghịch.

Giải quyết việc này bằng cách:
1. Học **lõi chung** trước — thứ cả hai con đường đều cần 100%.
2. Dừng lại ở **điểm rẽ nhánh**, đánh giá hoàn cảnh thật lúc đó.
3. Chọn **Nhánh A** hoặc **Nhánh B** (có thể đổi nhánh sau này nếu hoàn cảnh thay đổi).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LÕI CHUNG (bắt buộc cho cả 2 nhánh)                │
│                          Thời gian: 9–12 tháng (kịch bản lạc quan)          │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
                  ═══ ĐIỂM RẼ NHÁNH (checkpoint, đánh giá hoàn cảnh) ═══
                                    ↓
        ┌───────────────────────────────┬───────────────────────────────┐
        │   NHÁNH A: STAFF/ARCHITECT    │   NHÁNH B: SOLO FOUNDER       │
        │   (đi làm công ty)            │   (tự kinh doanh)             │
        │   Thời gian: 12–24 tháng      │   Thời gian: liên tục         │
        └───────────────────────────────┴───────────────────────────────┘
```



## 2. LÕI CHUNG — 3 KHỐI BẮT BUỘC

> **Nguyên tắc:** Mỗi khối không chỉ là checklist kiến thức, mà là **năng lực chứng minh được**. Khối 1 đã được mở rộng để phản ánh độ sâu thực tế của Senior FE 2026 — bao gồm cả kiến thức nền tảng (JS Core), kỹ năng transferrable (Web thuần, Git), và judgment (War Stories, System Design).

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 1: MASTER FRONTEND                                                         │
│  Mục tiêu: Sẵn sàng phỏng vấn Senior FE (30–45 triệu) | Nền tảng bắt buộc        │
│  cho cả 2 nhánh — LƯU Ý: đây là "sẵn sàng phỏng vấn", không phải "là senior"     │
│  Thời gian: 3–6 tháng                                                            │
│  ─────────────────────────────────────────────────────────────────────────       │
│  • JS Core Engine (V8, Event Loop, Memory Management)                            │
│  • JS Core Deep Dive (Prototype, this, Execution Context, Proxy, Class)          │
│  • TypeScript Nâng cao (Generics, Utility Types, Zod Runtime Validation)         │
│  • Build Tool & Bundler (Webpack, Vite, Rspack, Tree-shaking)                    │
│  • Package Manager (npm, yarn, pnpm, Lockfile, Peer Dependencies)                │
│  • Design Patterns (Singleton, Observer, Factory, Compound, State Machine)       │
│  • React Fiber, Re-render Optimization, React Compiler (auto-memoization)        │
│  • Framework Evolution (Class → Hooks → 19, Pages → App Router → v16)            │
│  • Next.js App Router (RSC, Serialization Limits, use(), Caching, Actions)       │
│  • Error Handling & Resilience (Boundary, Graceful Degradation, Retry)           │
│  • Form Engineering (react-hook-form, Field Arrays, Optimistic, Auto-save)       │
│  • TanStack Query, Zustand, Redux Ecosystem (RTK, Saga, RTK Query), XState       │
│  • Tailwind Deep Dive, shadcn/ui, Component Library từ đầu                       │
│  • CSS Modern (@layer, Container Queries, :has(), Native Nesting)                │
│  • Accessibility (WCAG 2.1 AA), Design System, Design Tokens                     │
│  • Vitest + Testing Library, Playwright E2E, MSW                                 │
│  • Lighthouse CI, Core Web Vitals (LCP/INP/CLS), LoAF API, Performance Budget    │
│  • Tối ưu Web Thuần (CRP, Font, Image, Video, HTTP Caching, DevTools)            │
│  • Micro-frontends, Monorepo (Turborepo), PWA, i18n, Data Viz, Storybook         │
│  • Web APIs & Storage (IndexedDB, Observers, Broadcast Channel, Page Vis)        │
│  • SEO Technical: JSON-LD, GEO (AI Search Optimization), Dynamic Meta            │
│  • BFF Pattern (Backend-for-Frontend, Next.js as BFF, Standalone BFF)            │
│  • Frontend System Design: RADIO framework, News Feed/Autocomplete/Editor        │
│  • Bảo mật Frontend: XSS, CSP, CORS, Auth (OAuth/JWT), Server Actions            │
│  • Supply Chain Security (lockfile, Provenance, dependency confusion)            │
│  • Production Ops: Error tracking, RUM, Feature Flags, Rollback, Incident        │
│  • Git Teamwork (Rebase, Merge, Conflict, Cherry-pick, Reflog, Bisect)           │
│  • AI Coding Agent hằng ngày: Claude Code / Cursor — VERIFY output AI            │
│  • Judgment & Ownership: trade-off dưới ambiguity, code review, mentoring        │
│  • War Stories: Deadline, API Dispute, Code Review, AI Output, Incident          │
└──────────────────────────────────────────────────────────────────────────────────┘
                                    ↓
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
                                    ↓
┌──────────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 3: DEVOPS CƠ BẢN (rút gọn — chỉ phần ai cũng cần)                          │
│  Mục tiêu: Solo deploy được 1 dự án hoàn chỉnh lên production                    │
│  Thời gian: 2–3 tháng                                                            │
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



## 3. ĐIỂM RẼ NHÁNH — TIÊU CHÍ QUYẾT ĐỊNH

Không quyết định trước bằng cảm tính. Khi tới checkpoint (~tháng 9–12), đánh giá theo bảng này:

| Tiêu chí | Nghiêng về Nhánh A (Staff/Architect) | Nghiêng về Nhánh B (Solo Founder) |
|---|---|---|
| Tài chính | Chưa có runway 6–12 tháng chi phí sống | Đã có tiết kiệm đủ sống 6–12 tháng không lương |
| Ý tưởng sản phẩm | Chưa có ý tưởng đã kiểm chứng nhu cầu thật | Đã có ý tưởng + tín hiệu người dùng thật (dù nhỏ) |
| Kết quả tìm việc | Nhận được offer Senior/Fullstack tốt | Thị trường tuyển dụng khó, hoặc offer không hấp dẫn |
| Ràng buộc cá nhân | Có gia đình cần thu nhập ổn định | Ít ràng buộc, chấp nhận rủi ro thu nhập bấp bênh |
| Năng lượng sau 9–12 tháng | Đã khá kiệt sức, cần nhịp ổn định hơn | Vẫn còn động lực cao để tự chủ hoàn toàn |

> Đây không phải quyết định một chiều và vĩnh viễn. Có thể đi Nhánh A vài năm để tích lũy vốn/kinh nghiệm/quan hệ rồi mới rẽ sang B — hoặc ngược lại, thử Nhánh B một thời gian rồi quay lại đi làm nếu hoàn cảnh đổi.



## 4. NHÁNH A: STAFF/ARCHITECT (Đi làm công ty)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  A1: HIGH TRAFFIC SYSTEM DESIGN                                             │
│  Mục tiêu: Staff/Principal level — thiết kế hệ thống chịu tải cao           │
│  Thời gian: 6–12 tháng                                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Scalability: Horizontal vs Vertical, Load Balancing (L7/L4), Auto-scale  │
│  • Caching Strategies: Cache Aside, Read-Through, Write-Behind, Invalidation│
│  • Database Advanced: Sharding, Partitioning, Read Replicas, Connection     │
│    Pooling, CAP/PACELC theorem                                              │
│  • Async & Event-Driven: Kafka/RabbitMQ, Event Sourcing, CQRS               │
│  • Microservices: Khi nào tách, khi nào không, API Gateway (Kong/AWS)       │
│  • Service Mesh: Istio/Linkerd (m2m communication, observability)           │
│  • Distributed Transactions: Saga Pattern, 2PC, Outbox Pattern              │
│  • CDN & Edge: Cloudflare Workers, Edge computing, Global load balancing    │
│  • Chaos Engineering: Circuit breakers (Resilience4j), Fault injection      │
│  • Security Advanced: mTLS, WAF, DDOS mitigation, Zero Trust                │
│  • Compliance: GDPR/CCPA, Data retention, Right to be forgotten             │
│  • Infrastructure as Code: Terraform / Pulumi, K8s (Pods, Services,         │
│    Deployments), HashiCorp Vault / Secrets Manager                          │
│  • AI System Design: kiến trúc có AI là thành phần cốt lõi,                 │
│    multi-model routing (chi phí/độ trễ/năng lực), real-time inference,      │
│    vector DB như một lớp dữ liệu ngang hàng relational/document             │
│  • Bài tập thực hành: URL Shortener, Twitter/X News Feed, Chat System,      │
│    E-commerce Checkout (Saga), Video Streaming                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  A2: CAREER & INTERVIEW                                                     │
│  Mục tiêu: Vượt qua vòng phỏng vấn Senior/Staff và tối ưu thu nhập          │
│  Thời gian: song song với A1                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Data Structures & Algorithms (pattern thường gặp, không cần thi đấu)     │
│  • System Design Interview format: trình bày trong 45 phút — khác với       │
│    "học" system design ở A1, đây là kỹ năng giao tiếp/framing riêng         │
│  • Frontend System Design: RADIO framework, UI Component + Application      │
│  • Behavioral Interview: War Stories, STAR format, trade-off reasoning      │
│  • Đàm phán lương & đánh giá offer (base, equity, benefit, level)           │
│  • Technical Writing: RFC/ADR, tài liệu kiến trúc                           │
│  • Tech Lead: Tech Debt Management, Code Review Culture, mentoring          │
│  • Cross-team influence, xây ảnh hưởng kỹ thuật không cần chức danh         │
└─────────────────────────────────────────────────────────────────────────────┘
```



## 5. NHÁNH B: SOLO FOUNDER (Tự kinh doanh)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  B1: VALIDATE TRƯỚC KHI BUILD                                               │
│  Mục tiêu: Biết chắc có người cần sản phẩm trước khi code nhiều             │
│  Thời gian: 1–2 tháng, làm TRƯỚC B2/B3                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Lean Startup, MVP Validation                                             │
│  • No-code test nhu cầu trước khi code (landing page, form đăng ký chờ)     │
│  • Customer discovery: user interview thật, không hỏi ý kiến chung chung    │
│  • Xác định 1 "core problem" hẹp thay vì sản phẩm đa năng ngay từ đầu       │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  B2: DEPLOY TỐI GIẢN                                                        │
│  Mục tiêu: Lên production nhanh, không over-engineer                        │
│  Thời gian: song song B3, mở rộng dần theo traffic thật                     │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • VPS đơn giản + Docker Compose là đủ cho rất lâu (không cần K8s)          │
│  • Feature Flags cơ bản nếu cần (Unleash open-source, không cần             │
│    LaunchDarkly trả phí ở giai đoạn đầu)                                    │
│  • Staging environment đơn giản                                             │
│  • Chỉ học Terraform/Vault/Service Mesh/Kafka khi THẬT SỰ chạm giới hạn     │
│    của Docker Compose + 1 VPS — không học trước "phòng khi cần"             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  B3: PRODUCT, GROWTH & BUSINESS                                             │
│  Mục tiêu: Có doanh thu thật, vận hành như một business                     │
│  Thời gian: liên tục                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Metrics: AARRR, North Star Metric, CAC/LTV, Unit Economics               │
│  • Analytics: PostHog/Amplitude, SQL for product analytics                  │
│  • UX Research: A/B Testing (statistical significance)                      │
│  • Pricing: Freemium, Tiered, Usage-based, Stripe/Paddle integration        │
│  • Growth: SEO, Content marketing, Viral loops, Referral programs           │
│  • Sales trực tiếp: cold outreach, demo, closing — quan trọng hơn           │
│    kỹ thuật ở giai đoạn đầu, trước đây bản v1 chỉ có marketing chứ chưa     │
│    có sales chủ động                                                        │
│  • Đăng ký kinh doanh: hộ kinh doanh cá thể / công ty TNHH tại              │
│    Việt Nam — rào cản pháp lý thực tế đầu tiên khi có doanh thu             │
│  • Cofounder & equity dynamics (nếu có cofounder): vesting,                 │
│    cap table cơ bản, thỏa thuận sáng lập                                    │
│  • Legal: Terms of Service, Privacy Policy, GDPR, Software licenses         │
│  • Financial: Burn rate, Runway, Fundraising basics (Seed, Series A)        │
│  • Customer Support: Intercom/Crisp, SLA, Ticketing system                  │
│  • Hiring & Team Building: khi có traction thật, cần scale team             │
│  • Tech Lead skills: RFC/ADR, Tech Debt — vẫn cần dù đang solo, để chuẩn    │
│    bị scale team sau này                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```


## 6. NGUYÊN TẮC HỌC THEO CHIỀU NGANG (PROJECT-BASED)

> **Không học:** HTML form → CSS → JS → React → Node → DB (học xong mới làm).

> **Học đúng:** HTML form → Zod validate FE → NestJS nhận data → Prisma lưu DB → Playwright test flow.
>
> **Kết quả:** 1 Project nhỏ hoàn chỉnh, có thể demo, có thể đưa vào portfolio.

### Project đề xuất theo giai đoạn:

| Giai đoạn | Project | Kiến thức lồng ghép |
|------|---------|---------------------|
| Lõi chung | **Portfolio + Blog** | Next.js App Router, Tailwind, shadcn/ui, MDX, SEO, Zod + Server Action, Lighthouse CI, Git flow |
| Lõi chung | **E-commerce Frontend** | TanStack Query, Zustand cart, Multi-step checkout (Zod + XState), PWA, Playwright E2E, Git cherry-pick |
| Lõi chung | **SaaS API Backend + AI feature** | NestJS + Prisma + PostgreSQL, JWT Auth, Stripe payment, BullMQ email queue, tích hợp LLM API + RAG cơ bản, API testing, Webhook security |
| Lõi chung | **Solo Deploy** | Docker compose, GitHub Actions CI/CD, Nginx reverse proxy, Cloudflare, Sentry, Backup automation, Graceful shutdown |
| Nhánh A | **URL Shortener** | Caching (Redis), Rate limiting, Horizontal scaling, Load balancing, API versioning |
| Nhánh A | **Twitter/X Clone** | News feed (fan-out write vs read), Notification system, Search, Microservices, Event-driven (Outbox, Saga) |
| Nhánh B | **MVP thật có user** | Xuất phát từ B1 (đã validate), launch nhanh, đo AARRR, thu phí sớm |
| Nhánh B | **Real-time Chat / feature theo nhu cầu thị trường** | WebSockets, Redis pub/sub — chỉ làm nếu MVP thật sự cần, không làm vì "học cho biết" |



## 7. STACK ĐỀ XUẤT (2026)

> **Nguyên tắc:** Dùng SaaS cho non-core, tự build cho core business. Không reinvent the wheel.

| Layer | Công nghệ | Ghi chú |
|-------|-----------|---------|
| **Frontend** | Next.js 14+ (App Router) + Tailwind + shadcn/ui | RSC, SEO built-in, Vercel deploy |
| **State FE** | TanStack Query + Zustand | Server state + Client state separation |
| **Backend** | Next.js API Routes (bắt đầu) → NestJS (scale) | Cùng JS/TS ecosystem, chuyển dễ dàng |
| **Database** | PostgreSQL (Neon / Supabase / RDS) | Relational, ACID, Prisma hỗ trợ tốt |
| **AI / LLM** | Anthropic/OpenAI API + pgvector | RAG cơ bản trên chính Postgres, chưa cần Pinecone |
| **AI Coding Tool** | Claude Code / Cursor / Copilot agent mode | Công cụ hằng ngày, VERIFY output, không chỉ dùng |
| **Cache** | Redis (Upstash / Railway / self-host) | Session, rate limit, BullMQ, cache layer |
| **Auth** | Clerk / NextAuth.js / Supabase Auth | Không tự build auth cho startup sớm |
| **Payment** | Stripe | Checkout, Subscription, Webhooks, Idempotency |
| **Search** | Meilisearch (dễ setup) → Elasticsearch (scale, Nhánh A) | Full-text search, typo-tolerant |
| **File Storage** | AWS S3 / Cloudflare R2 | Ảnh, video, documents |
| **Email** | Resend / Postmark | Transactional email, templates |
| **Monitoring** | Sentry + OpenTelemetry basics | FE + BE errors, structured logging, tracing |
| **Analytics** | PostHog / Plausible | Product analytics, funnel, retention |
| **Deploy** | Vercel (FE) → Railway/Render (BE) → AWS/K8s (Nhánh A khi scale) | Tiến hóa theo traffic |
| **CI/CD** | GitHub Actions | Lint, Test, Build, Deploy tự động, AI security scan |
| **Domain** | Cloudflare | DNS, SSL, CDN, DDoS protection |
| **Git** | pnpm + GitHub | Workspace, lockfile, branch protection, semantic release |



## 8. LỘ TRÌNH THỰC TẾ — KẾT HỢP ĐI LÀM & HỌC

```
Tháng 1–3:   KHỐI 1 (Master FE) — Học sâu, làm 2 project portfolio, dùng AI
             coding agent hằng ngày ngay từ đầu
             ↳ Bao gồm: JS Core, Build Tool, Package Manager, Git Teamwork,
               Framework Evolution, Error Handling, Form Engineering, CSS Modern,
               Web Thuần, Web APIs, BFF, War Stories, System Design practice
             ↳ Đủ nền tảng để BẮT ĐẦU phỏng vấn Senior FE (30–45 triệu) —
             không phải "là senior", mà là đủ điều kiện để được nhận và
             tích lũy kinh nghiệm senior thật qua công việc

Tháng 4–9:   KHỐI 2 (Master BE + AI integration) — NestJS, DB, Payment,
             Search, tích hợp LLM API vào 1 project thật
             ↳ Bao gồm: API Testing, Migration Strategy, Webhook Security,
               Idempotency, Rate Limiting, OpenAPI, Event-driven patterns
             ↳ Đi làm FE Senior, học BE song song

Tháng 9–12:  KHỐI 3 (DevOps cơ bản) — Docker, CI/CD, deploy 1 sản phẩm
             hoàn chỉnh lên production
             ↳ Bao gồm: Docker networking, Health checks, Graceful shutdown,
               Log rotation, Backup automation, SSL auto-renewal, Environment mgmt
             ↳ Đủ nền tảng kỹ thuật để tự vận hành 1 sản phẩm fullstack —
             kinh nghiệm "fullstack thật" (xử lý sự cố, scale, trade-off
             dưới áp lực) vẫn cần tích lũy tiếp qua thực chiến, không tự
             động có được chỉ vì hoàn thành 3 khối

        ═══ ĐIỂM RẼ NHÁNH — đánh giá theo bảng tiêu chí ở mục 3 ═══

Nếu chọn Nhánh A (tháng 13+):
             A1 (System Design nâng cao, 6–12 tháng) + A2 (Interview &
             Career, song song) → apply Senior/Staff tại công ty mục tiêu
             ↳ Frontend System Design (RADIO) + Backend System Design +
             DSA pattern + Behavioral (War Stories)

Nếu chọn Nhánh B (tháng 13+):
             B1 (Validate ý tưởng, 1–2 tháng) → B2 (Deploy tối giản,
             song song) → B3 (Product/Growth/Business, liên tục)
             ↳ Launch MVP có user thật, thu phí sớm, iterate theo data
```



## 9. CÁC ĐIỂM CỐT LÕI TỪ JD THỰC TẾ (ĐÃ TỔNG HỢP)

| Yêu cầu JD | Thuộc khối/nhánh | Mức độ |
|------------|---------------|--------|
| jQuery → React migration | Khối 1 (Lõi chung) | Critical |
| JS Core (Prototype, this, Execution Context) | Khối 1 (Lõi chung) | Critical |
| Build Tool (Webpack/Vite) | Khối 1 (Lõi chung) | High |
| Package Manager (pnpm, lockfile) | Khối 1 (Lõi chung) | High |
| Git Teamwork (rebase, conflict, cherry-pick) | Khối 1 (Lõi chung) | High |
| CSS Modern (@layer, container queries) | Khối 1 (Lõi chung) | Medium |
| Error Handling & Resilience | Khối 1 (Lõi chung) | High |
| Form Engineering (complex forms) | Khối 1 (Lõi chung) | High |
| BFF Pattern | Khối 1 (Lõi chung) | Medium |
| Web APIs (IndexedDB, Observers) | Khối 1 (Lõi chung) | Medium |
| Tối ưu Web Thuần (CRP, HTTP caching) | Khối 1 (Lõi chung) | High |
| Micro-frontends (Module Federation) | Khối 1 (Lõi chung) | High |
| Monorepo (Nx, Turborepo) | Khối 1 (Lõi chung) | High |
| PWA / Tablet-optimized | Khối 1 (Lõi chung) | Medium |
| i18n (react-i18next) | Khối 1 (Lõi chung) | High |
| WCAG / Accessibility | Khối 1 (Lõi chung) | High |
| Storybook + Chromatic | Khối 1 (Lõi chung) | Medium |
| Frontend System Design (RADIO) | Khối 1 → A2 (Nhánh A) | Critical |
| War Stories / Behavioral | Khối 1 → A2 (Nhánh A) | Critical |
| API Testing (Jest/Supertest) | Khối 2 (Lõi chung) | High |
| API Versioning | Khối 2 (Lõi chung) | Medium |
| Rate Limiting / Idempotency | Khối 2 (Lõi chung) | High |
| Webhook Security (signature) | Khối 2 (Lõi chung) | High |
| OpenAPI / Swagger | Khối 2 (Lõi chung) | Medium |
| Event-driven (Outbox, Saga) | Khối 2 → A1 (Nhánh A) | High |
| Multi-tenancy | Khối 2 (Lõi chung) | Medium |
| AI integration / LLM API | Khối 2 (Lõi chung) | High |
| eCommerce + SEO/GEO | Khối 1 (Lõi chung) | High |
| GraphQL | Khối 2 (Lõi chung) | Medium |
| Elasticsearch | Khối 2 → A1 (Nhánh A) | Medium |
| Design Patterns + OOP | Khối 1–2 (Lõi chung) | High |
| System Design + Performance | A1 (Nhánh A) | High |
| DSA / Coding Interview | A2 (Nhánh A) | High |
| MVP Validation / Customer Discovery | B1 (Nhánh B) | Critical |



## 10. CAM KẾT & KỶ LUẬT

- [ ] **Học mỗi ngày ít nhất 2 giờ** (sáng 1h trước khi đi làm, tối 1h sau khi về)
- [ ] **Cuối tuần làm project** (4–8 giờ, đóng gói kiến thức tuần đó thành code)
- [ ] **Không xem tutorial passive** — Pause, code theo, sau đó tự làm lại không nhìn
- [ ] **Mỗi tháng 1 project nhỏ** — Hoàn chỉnh, deploy, share lên GitHub
- [ ] **Tham gia cộng đồng** — Discord/Reddit dev communities, contribute open source
- [ ] **Checkpoint 3 tháng/lần** — Đánh giá lại tiến độ và hoàn cảnh, điều chỉnh kế hoạch thay vì cứng nhắc theo lịch 36 tháng
- [ ] **Giữ nhịp bền vững, không burnout** — dữ liệu khảo sát solo founder gần đây cho thấy burnout (không phải chiến lược sai) là yếu tố dự báo thất bại lớn nhất. "2 giờ/ngày đều đặn trong 12 tháng" tốt hơn "6 giờ/ngày trong 2 tháng rồi bỏ cuộc". Nếu cảm thấy kiệt sức liên tục, đó là tín hiệu để giảm nhịp, không phải để cố ép thêm
- [ ] Nhánh A: **Technical blog post định kỳ** — củng cố kiến thức + xây thương hiệu cá nhân hướng tới nhà tuyển dụng
- [ ] Nhánh B: **"Build in Public"** — chia sẻ journey, nhận feedback, tạo accountability, hướng tới người dùng tiềm năng



## 11. CÁC TÀI LIỆU THAM KHẢO CHÍNH

**Chung:**
- **JavaScript:** "You Don't Know JS" (Kyle Simpson), "JavaScript: The Definitive Guide"
- **TypeScript:** "Effective TypeScript" (Dan Vanderkam), TypeScript Handbook
- **React:** React Docs (Beta), "Building Large-Scale Web Apps" (Addy Osmani)
- **Next.js:** Next.js Documentation (App Router), Vercel Engineering Blog
- **Backend:** NestJS Docs, "Node.js Design Patterns" (Mario Casciaro)
- **DevOps:** "The Docker Book", GitHub Actions docs, Nginx docs
- **AI Engineering:** Anthropic Docs (docs.claude.com), tài liệu chính thức về Claude Code / MCP để hiểu agentic coding workflow
- **Frontend System Design:** Frontend Interview Handbook (frontendinterviewhandbook.com)
- **Web Performance:** web.dev (Core Web Vitals, LoAF, CRP)
- **Security:** OWASP Top 10, OWASP Cheat Sheet Series

**Nhánh A (Staff/Architect):**
- **System Design:** "Designing Data-Intensive Applications" (Martin Kleppmann) — **BIBLE**
- **Interview:** tài liệu luyện DSA theo pattern (không cần thi đấu), tài liệu luyện trình bày system design dạng phỏng vấn
- **DevOps:** "Kubernetes in Action" (khi cần)

**Nhánh B (Solo Founder):**
- **Product:** "The Lean Startup" (Eric Ries), "Hooked" (Nir Eyal)
- **Sales:** tài liệu về cold outreach và sales cho founder kỹ thuật (bổ sung khi vào B3, vì bản v1 chưa có mảng này)
- **Pháp lý VN:** tài liệu về đăng ký hộ kinh doanh / công ty TNHH khi bắt đầu có doanh thu

---

> **"Không hời hợt, nghiên cứu sâu."**
> Mỗi checkbox trong checklist là một kiến thức bạn PHẢI giải thích được cho người khác. Nếu không giải thích được, chưa hiểu sâu — quay lại học.
