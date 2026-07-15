# LỘ TRÌNH SOLO FULLSTACK: TỪ REACT ĐẾN STAFF/ARCHITECT HOẶC SOLO FOUNDER
## Chương Tổng Quan — Bản đồ toàn cảnh hành trình

> **Định hướng:** Xây nền tảng fullstack vững chắc, dùng chung cho 2 con đường sự nghiệp khác nhau — **đi làm lên Staff/Architect** hoặc **tự làm Solo Founder** — rồi rẽ nhánh dựa trên hoàn cảnh thực tế thay vì chọn trước bằng cảm tính.
> **Nguyên tắc cốt lõi:** Học theo chiều ngang (Project-based). Ưu tiên điểm chung trước, rẽ nhánh sau khi có đủ dữ kiện để quyết định.
> **Thời gian dự kiến:** Lõi chung 9–12 tháng ở kịch bản lạc quan nhất (lấy cận dưới mỗi khối: 3+6+2 tháng); thực tế cộng dồn 3 khối thường rơi vào 11–21 tháng tùy tốc độ học và mức độ đi làm song song. Sau đó mỗi nhánh tiếp tục 12–24 tháng tùy tốc độ.
> **Ngôn ngữ:** JavaScript/TypeScript ecosystem

---

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

---

## 2. LÕI CHUNG — 3 KHỐI BẮT BUỘC

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 1: MASTER FRONTEND                                                    │
│  Mục tiêu: Sẵn sàng phỏng vấn Senior FE (30–45 triệu) | Nền tảng bắt buộc   │
│  cho cả 2 nhánh — LƯU Ý: đây là "sẵn sàng phỏng vấn", không phải "là senior"│
│  Thời gian: 3–6 tháng                                                       │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • JS/TS Engine & Runtime (V8, Event Loop, Memory Management)               │
│  • TypeScript Nâng cao (Generics, Utility Types, Zod Runtime Validation)    │
│  • React Fiber, Re-render Optimization, Next.js App Router (RSC)            │
│  • TanStack Query, Zustand, Redux Ecosystem, State Machines (XState)        │
│  • Tailwind Deep Dive, shadcn/ui, Component Library từ đầu                  │
│  • Accessibility (WCAG 2.1 AA), Design System, Design Tokens                │
│  • Vitest + Testing Library, Playwright E2E, MSW                            │
│  • Lighthouse CI, Core Web Vitals (LCP/INP/CLS), Bundle Optimization        │
│  • Micro-frontends, Monorepo, PWA, i18n, Data Viz, Storybook                │
│  • SEO Technical: JSON-LD, GEO (AI Search Optimization), Dynamic Meta       │
│  • Frontend System Design: RADIO framework, News Feed/Autocomplete/Editor   │
│  • Bảo mật Frontend: XSS, CSP, CORS, Auth (OAuth/JWT), Server Actions       │
│  • Production Ops: Error tracking, Feature Flags, Rollback, Incident       │
│  • AI Coding Agent hằng ngày: Claude Code / Cursor / Copilot agent          │
│    mode — VERIFY output AI (không chỉ dùng nó), giao task đa bước           │
│  • Judgment & Ownership: trade-off dưới ambiguity, code review, mentoring   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 2: MASTER BACKEND & ECOSYSTEM                                         │
│  Mục tiêu: Tự build API vững chắc, tích hợp payment, search, email, AI      │
│  Thời gian: 6–12 tháng                                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • NestJS: DI, Guards, Interceptors, Pipes, Clean Architecture / DDD        │
│  • SQL Fundamentals: ACID, Isolation Levels, Indexing (B-Tree, Composite)   │
│  • Prisma ORM: Schema, Migrations, N+1 Query, Transactions                  │
│  • Database Design: Normalization, ER Modeling, Migration Strategy          │
│  • NoSQL (MongoDB): Khi nào dùng Document thay Relational                   │
│  • RESTful API chuẩn: HTTP Status, Pagination, Filtering, Versioning        │
│  • GraphQL / tRPC: Type-safe API, Apollo Server, tRPC + Next.js             │
│  • Auth: JWT (Access/Refresh), OAuth2/OIDC, RBAC/ABAC                       │
│  • Security: OWASP Top 10, XSS, CSRF, Rate Limiting, Argon2/Bcrypt          │
│  • Webhooks (verify signature, retry, idempotency), File Upload             │
│  • Payment: Stripe (Checkout, Webhooks, Subscription)                       │
│  • Search: Elasticsearch / Meilisearch (Full-text search)                   │
│  • Email: Transactional (Resend/Postmark), Templates, Deliverability        │
│  • Background Jobs: BullMQ + Redis (queue, schedule, retry)                 │
│  • Real-time: WebSockets (Socket.io), Server-Sent Events (SSE)              │
│  • Tích hợp LLM API vào sản phẩm (Anthropic/OpenAI SDK), streaming          │
│  • RAG cơ bản + Vector DB (pgvector trên Postgres sẵn có, chưa              │
│    cần Pinecone)                                                            │
│  • AI Evaluation: kiểm thử & đánh giá chất lượng output AI                  │
│  • Backend/API System Design: rate limiter, webhook idempotency, job        │
│    queue chịu tải, notification system — luyện dạng bị hỏi ngược            │
│    trade-off (vd: Redis sập thì fail open hay fail closed)                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  KHỐI 3: DEVOPS CƠ BẢN (rút gọn — chỉ phần ai cũng cần)                     │
│  Mục tiêu: Solo deploy được 1 dự án hoàn chỉnh lên production               │
│  Thời gian: 2–3 tháng                                                       │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Docker: Multi-stage build, docker-compose (Next + Nest + PG + Redis)     │
│  • Linux VPS cơ bản: Ubuntu/Debian, permissions, systemd                    │
│  • CI/CD: GitHub Actions (Lint → Test → Build → Push → Deploy)              │
│  • Git Flow / Trunk Based cơ bản                                            │
│  • Domain & DNS: Cloudflare (Proxy, DNS, Free SSL, DDoS protection)         │
│  • Reverse Proxy: Nginx routing multi-service                               │
│  • Deploy: Vercel (FE) + Railway/Render (BE) — chưa cần AWS phức tạp        │
│  • Backup cơ bản: Automated DB backup, test restore                         │
│  • Observability cơ bản: Sentry + structured logging +                      │
│    OpenTelemetry basics (trước đây chỉ có Sentry/UptimeRobot, chưa đủ khi   │
│    hệ thống có nhiều service)                                               │
│  • AI-assisted security scanning trong CI/CD (đang trở thành                │
│    chuẩn thay vì optional)                                                  │
│  • Khung Production Readiness: bảo mật nền (secrets, SSH key-only) +        │
│    observability nối thẳng runbook + rollback tập luyện thật + backup       │
│    test restore thật (không chỉ setup rồi để đó)                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Lưu ý: Terraform, Vault, K8s, Service Mesh, IaC nâng cao KHÔNG nằm ở đây   │
│  nữa — chuyển sang Nhánh A vì chỉ có giá trị khi hệ thống đã có traffic     │
│  lớn thật. Nhánh B gần như không bao giờ cần tới mức này.                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Redux Ecosystem (Enterprise State Management — vẫn tuyển dụng nhiều)

> **Tại sao cần học:** Redux vẫn xuất hiện nhiều trong codebase enterprise, fintech, banking. Nhiều JD yêu cầu Redux Toolkit, Redux Saga. Biết Redux mở rộng phạm vi cơ hội việc làm, đặc biệt khi maintain hoặc migrate legacy codebase.

- [ ] **Redux Core Concepts:**
  - [ ] Store: Single source of truth, `getState()`, `subscribe()`, `dispatch()`
  - [ ] Actions: Plain object `{ type, payload }`, action creators
  - [ ] Reducers: Pure function `(state, action) => newState`, immutability
  - [ ] Three Principles: Single source of truth, State is read-only, Changes made with pure functions
  - [ ] Redux DevTools: Time-travel debugging, action replay, state diff

- [ ] **Redux Toolkit (RTK) — Cách viết Redux hiện đại:**
  - [ ] `configureStore`: Auto-setup DevTools, middleware, enhancers (thay thế `createStore` thủ công)
  - [ ] `createSlice`: Auto-generate action types, action creators, reducers từ 1 object
  - [ ] `createAsyncThunk`: Xử lý async logic với 3 states tự động (`pending`, `fulfilled`, `rejected`)
  - [ ] `createEntityAdapter`: CRUD operations, sorting, normalization cho collection data
  - [ ] `createSelector` (Reselect): Memoized selectors, derived state computation
  - [ ] RTK DevTools integration: Action trace, state inspection

- [ ] **Redux Thunk — Side effects đơn giản:**
  - [ ] Thunk function: `(dispatch, getState) => { ... }`
  - [ ] Async thunk pattern: Dispatch loading → API call → dispatch success/error
  - [ ] Access `getState()` trong thunk để lấy state hiện tại
  - [ ] **So sánh Thunk vs Saga:** Thunk cho async đơn giản (API call), Saga cho complex flows (polling, cancellation, race conditions)

- [ ] **Redux Saga — Complex async flows:**
  - [ ] Generator function (`function*`): `yield`, `next()`, iteration protocol
  - [ ] Core effects: `call` (call function), `put` (dispatch action), `take` (listen action), `fork` (non-blocking), `spawn` (detached)
  - [ ] Watchers vs Workers pattern: `takeEvery` (run all), `takeLatest` (cancel previous), `throttle`, `debounce`
  - [ ] Advanced patterns:
    - [ ] Polling: `delay` + loop để poll API định kỳ
    - [ ] Retry: `retry` effect hoặc tự viết retry logic với exponential backoff
    - [ ] Cancellation: `takeLatest` cancel task cũ, `race` effect (timeout pattern)
    - [ ] Parallel execution: `all([call(task1), call(task2)])`
    - [ ] Error boundaries: Try-catch trong saga, global error handler
  - [ ] Testing sagas:
    - [ ] Step-by-step testing: `gen.next().value` assert từng effect
    - [ ] Integration testing: Run saga với mock store
    - [ ] `cloneableGenerator` cho testing branches

- [ ] **RTK Query — Server state management trong Redux ecosystem:**
  - [ ] `createApi`: Define API slice với `reducerPath`, `baseQuery`, `endpoints`
  - [ ] `builder.query`: GET requests, auto-caching, refetch
  - [ ] `builder.mutation`: POST/PUT/DELETE, optimistic updates
  - [ ] Cache management: `providesTags` (cache key), `invalidatesTags` (auto-refetch)
  - [ ] Pagination: `merge` function cho infinite scroll
  - [ ] Transform response: `transformResponse` để normalize data trước khi vào store
  - [ ] **So sánh RTK Query vs TanStack Query:**
    - [ ] RTK Query: Gắn chặt với Redux store, phù hợp khi đã dùng Redux
    - [ ] TanStack Query: Framework-agnostic, ecosystem lớn hơn, dev tools tốt hơn
    - [ ] Khi nào chọn cái nào: Dựa trên existing stack và team preference

- [ ] **State Normalization:**
  - [ ] Tại sao normalize: Tránh nested state, O(1) lookup, dễ update
  - [ ] Normalizr library: Define schema, normalize API response
  - [ ] RTK Entity Adapter: `getInitialState`, `addOne`, `upsertOne`, `removeOne`, `updateOne`, `setAll`
  - [ ] Selectors cho normalized state: `selectAll`, `selectById`, `selectIds`, `selectEntities`

- [ ] **Middleware & Enhancers:**
  - [ ] Redux Thunk middleware: Default trong RTK, xử lý async
  - [ ] Redux Logger: Log actions trong development
  - [ ] Redux Persist: Persist state vào localStorage/sessionStorage (whitelist/blacklist)
  - [ ] Custom middleware: Intercept actions, side effects

- [ ] **Migration từ Redux legacy:**
  - [ ] Class component + `connect` HOC → Function component + `useSelector`/`useDispatch` hooks
  - [ ] `mapStateToProps` → `useSelector` (memoized, có thể dùng `shallowEqual`)
  - [ ] `mapDispatchToProps` → `useDispatch` hoặc `bindActionCreators`
  - [ ] `combineReducers` → `configureStore` auto-combine
  - [ ] Plain Redux → Redux Toolkit (từng bước, không rewrite toàn bộ)

- [ ] **So sánh tổng quan & Khi nào dùng cái nào:**
  - [ ] **Redux (RTK):** Complex global state, nhiều dev cùng làm, cần time-travel debugging, enterprise codebase
  - [ ] **Zustand:** Đơn giản, ít boilerplate, modern, phù hợp startup/small team
  - [ ] **TanStack Query:** Server state, caching, pagination, background refetch — không thay thế Redux/Zustand mà bổ sung
  - [ ] **Context API + useReducer:** Local state, không cần external library, anti-pattern khi state phức tạp
  - [ ] **Kết hợp trong 1 project:** Redux/Zustand cho global UI state + TanStack Query/RTK Query cho server state

- [ ] **Anti-patterns & Pitfalls:**
  - [ ] Không đưa mọi state vào Redux (form local state giữ trong component)
  - [ ] Không mutate state trực tiếp (dùng Immer trong RTK)
  - [ ] Tránh deeply nested state (normalize ngay từ đầu)
  - [ ] Không dispatch action trong reducer (side effect chỉ trong middleware/thunk/saga)
  - [ ] Cẩn thận với `useSelector` không memoized (gây re-render không cần thiết)

---

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

---

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
│  • Đàm phán lương & đánh giá offer (base, equity, benefit, level)           │
│  • Technical Writing: RFC/ADR, tài liệu kiến trúc                           │
│  • Tech Lead: Tech Debt Management, Code Review Culture, mentoring          │
│  • Cross-team influence, xây ảnh hưởng kỹ thuật không cần chức danh         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

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

---

## 6. NGUYÊN TẮC HỌC THEO CHIỀU NGANG (PROJECT-BASED)

> **Không học:** HTML form → CSS → JS → React → Node → DB (học xong mới làm).

> **Học đúng:** HTML form → Zod validate FE → NestJS nhận data → Prisma lưu DB → Playwright test flow.
>
> **Kết quả:** 1 Project nhỏ hoàn chỉnh, có thể demo, có thể đưa vào portfolio.

### Project đề xuất theo giai đoạn:

| Giai đoạn | Project | Kiến thức lồng ghép |
|------|---------|---------------------|
| Lõi chung | **Portfolio + Blog** | Next.js App Router, Tailwind, shadcn/ui, MDX, SEO, Zod + Server Action, Lighthouse CI |
| Lõi chung | **E-commerce Frontend** | TanStack Query, Zustand cart, Multi-step checkout (Zod + XState), PWA, Playwright E2E |
| Lõi chung | **SaaS API Backend + AI feature** | NestJS + Prisma + PostgreSQL, JWT Auth, Stripe payment, BullMQ email queue, tích hợp LLM API + RAG cơ bản |
| Lõi chung | **Solo Deploy** | Docker compose, GitHub Actions CI/CD, Nginx reverse proxy, Cloudflare, Sentry |
| Nhánh A | **URL Shortener** | Caching (Redis), Rate limiting, Horizontal scaling, Load balancing |
| Nhánh A | **Twitter/X Clone** | News feed (fan-out write vs read), Notification system, Search, Microservices |
| Nhánh B | **MVP thật có user** | Xuất phát từ B1 (đã validate), launch nhanh, đo AARRR, thu phí sớm |
| Nhánh B | **Real-time Chat / feature theo nhu cầu thị trường** | WebSockets, Redis pub/sub — chỉ làm nếu MVP thật sự cần, không làm vì "học cho biết" |

---

## 7. STACK ĐỀ XUẤT (2026)

> **Nguyên tắc:** Dùng SaaS cho non-core, tự build cho core business. Không reinvent the wheel.

| Layer | Công nghệ | Ghi chú |
|-------|-----------|---------|
| **Frontend** | Next.js 14+ (App Router) + Tailwind + shadcn/ui | RSC, SEO built-in, Vercel deploy |
| **State FE** | TanStack Query + Zustand | Server state + Client state separation |
| **Backend** | Next.js API Routes (bắt đầu) → NestJS (scale) | Cùng JS/TS ecosystem, chuyển dễ dàng |
| **Database** | PostgreSQL (Neon / Supabase / RDS) | Relational, ACID, Prisma hỗ trợ tốt |
| **AI / LLM** | Anthropic/OpenAI API + pgvector | RAG cơ bản trên chính Postgres, chưa cần Pinecone |
| **AI Coding Tool** | Claude Code / Cursor / Copilot agent mode | Công cụ hằng ngày, không phải "nice to have" |
| **Cache** | Redis (Upstash / Railway / self-host) | Session, rate limit, BullMQ, cache layer |
| **Auth** | Clerk / NextAuth.js / Supabase Auth | Không tự build auth cho startup sớm |
| **Payment** | Stripe | Checkout, Subscription, Webhooks |
| **Search** | Meilisearch (dễ setup) → Elasticsearch (scale, Nhánh A) | Full-text search, typo-tolerant |
| **File Storage** | AWS S3 / Cloudflare R2 | Ảnh, video, documents |
| **Email** | Resend / Postmark | Transactional email, templates |
| **Monitoring** | Sentry + OpenTelemetry basics | FE + BE errors, structured logging, tracing |
| **Analytics** | PostHog / Plausible | Product analytics, funnel, retention |
| **Deploy** | Vercel (FE) → Railway/Render (BE) → AWS/K8s (Nhánh A khi scale) | Tiến hóa theo traffic |
| **CI/CD** | GitHub Actions | Lint, Test, Build, Deploy tự động, kèm AI security scan |
| **Domain** | Cloudflare | DNS, SSL, CDN, DDoS protection |

---

## 8. LỘ TRÌNH THỰC TẾ — KẾT HỢP ĐI LÀM & HỌC

```
Tháng 1–3:   KHỐI 1 (Master FE) — Học sâu, làm 2 project portfolio, dùng AI
             coding agent hằng ngày ngay từ đầu
             ↳ Đủ nền tảng để BẮT ĐẦU phỏng vấn Senior FE (30–45 triệu) —
             không phải "là senior", mà là đủ điều kiện để được nhận và
             tích lũy kinh nghiệm senior thật qua công việc

Tháng 4–9:   KHỐI 2 (Master BE + AI integration) — NestJS, DB, Payment,
             Search, tích hợp LLM API vào 1 project thật
             ↳ Đi làm FE Senior, học BE song song

Tháng 9–12:  KHỐI 3 (DevOps cơ bản) — Docker, CI/CD, deploy 1 sản phẩm
             hoàn chỉnh lên production
             ↳ Đủ nền tảng kỹ thuật để tự vận hành 1 sản phẩm fullstack —
             kinh nghiệm "fullstack thật" (xử lý sự cố, scale, trade-off
             dưới áp lực) vẫn cần tích lũy tiếp qua thực chiến, không tự
             động có được chỉ vì hoàn thành 3 khối

        ═══ ĐIỂM RẼ NHÁNH — đánh giá theo bảng tiêu chí ở mục 3 ═══

Nếu chọn Nhánh A (tháng 13+):
             A1 (System Design nâng cao, 6–12 tháng) + A2 (Interview &
             Career, song song) → apply Senior/Staff tại công ty mục tiêu

Nếu chọn Nhánh B (tháng 13+):
             B1 (Validate ý tưởng, 1–2 tháng) → B2 (Deploy tối giản,
             song song) → B3 (Product/Growth/Business, liên tục)
             ↳ Launch MVP có user thật, thu phí sớm, iterate theo data

Có thể đổi nhánh: đi Nhánh A vài năm tích lũy vốn rồi rẽ sang B, hoặc
ngược lại — checkpoint không phải quyết định một lần vĩnh viễn.
```

---

## 9. CÁC ĐIỂM CỐT LÕI TỪ JD THỰC TẾ (ĐÃ TỔNG HỢP)

| Yêu cầu JD | Thuộc khối/nhánh | Mức độ |
|------------|---------------|--------|
| jQuery → React migration | Khối 1 (Lõi chung) | Critical |
| Micro-frontends (Module Federation) | Khối 1 (Lõi chung) | High |
| Monorepo (Nx, Turborepo) | Khối 1 (Lõi chung) | High |
| PWA / Tablet-optimized | Khối 1 (Lõi chung) | Medium |
| i18n (react-i18next) | Khối 1 (Lõi chung) | High |
| WCAG / Accessibility | Khối 1 (Lõi chung) | High |
| Storybook + Chromatic | Khối 1 (Lõi chung) | Medium |
| AI integration / LLM API | Khối 2 (Lõi chung) | High |
| eCommerce + SEO/GEO | Khối 1 (Lõi chung) | High |
| GraphQL | Khối 2 (Lõi chung) | Medium |
| Elasticsearch | Khối 2 → A1 (Nhánh A khi scale) | Medium |
| Design Patterns + OOP | Khối 1–2 (Lõi chung) | High |
| System Design + Performance | A1 (Nhánh A) | High |
| DSA / Coding Interview | A2 (Nhánh A) | High  |
| MVP Validation / Customer Discovery | B1 (Nhánh B) | Critical |

---

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

---

## 11. CÁC TÀI LIỆU THAM KHẢO CHÍNH

**Chung:**
- **JavaScript:** "You Don't Know JS" (Kyle Simpson), "JavaScript: The Definitive Guide"
- **TypeScript:** "Effective TypeScript" (Dan Vanderkam), TypeScript Handbook
- **React:** React Docs (Beta), "Building Large-Scale Web Apps" (Addy Osmani)
- **Next.js:** Next.js Documentation (App Router), Vercel Engineering Blog
- **Backend:** NestJS Docs, "Node.js Design Patterns" (Mario Casciaro)
- **AI Engineering :** Anthropic Docs (docs.claude.com), tài liệu chính thức về Claude Code / MCP để hiểu agentic coding workflow

**Nhánh A (Staff/Architect):**
- **System Design:** "Designing Data-Intensive Applications" (Martin Kleppmann) — **BIBLE**
- **Interview:** tài liệu luyện DSA theo pattern (không cần thi đấu), tài liệu luyện trình bày system design dạng phỏng vấn
- **DevOps:** "The Docker Book", "Kubernetes in Action" (khi cần)

**Nhánh B (Solo Founder):**
- **Product:** "The Lean Startup" (Eric Ries), "Hooked" (Nir Eyal)
- **Sales:** tài liệu về cold outreach và sales cho founder kỹ thuật (bổ sung khi vào B3, vì bản v1 chưa có mảng này)
- **Pháp lý VN:** tài liệu về đăng ký hộ kinh doanh / công ty TNHH khi bắt đầu có doanh thu

---

> **"Không hời hợt, nghiên cứu sâu."**
> Mỗi checkbox trong checklist là một kiến thức bạn PHẢI giải thích được cho người khác. Nếu không giải thích được, chưa hiểu sâu — quay lại học.

---