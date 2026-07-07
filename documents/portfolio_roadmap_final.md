# PORTFOLIO ROADMAP — Senior Frontend / Software Engineer

## Final Edition (Consolidated + Market 2026 + Critique Resolved)

> **Theme:** Building software to solve real problems I encounter in my career.  
> **Apply:** After P1 deploys, regardless of P2/P3 completion status.  
> **Người thực hiện:** 5 năm kinh nghiệm tự mày mò, muốn nâng cấp lên Senior/Software Engineer

---

## I. SKILL HIỆN TẠI

| Skill                 | Mức độ                    |
| --------------------- | ------------------------- |
| HTML/CSS              | ✅ Biết rõ                |
| JavaScript core       | ✅ Biết rõ                |
| TypeScript            | 🟡 Biết sơ                |
| Git (solo)            | 🟡 Chưa teamwork          |
| React architecture    | ✅ Biết rõ                |
| Hooks cơ bản          | ✅ Biết rõ                |
| Custom hooks          | ✅ Biết rõ (ít code)      |
| Zustand / Redux       | 🟡 Chỉ biết lý thuyết     |
| React Query           | 🟡 Dùng được cơ bản       |
| SSR / SSG / ISR       | ✅ Hiểu rõ                |
| App Router Next.js    | ✅ Biết rõ                |
| SEO / Core Web Vitals | ✅ Biết rõ                |
| Clean code / modular  | 🟡 Biết sơ                |
| Performance FE        | 🟡 Biết sơ                |
| Testing               | 🟡 Đọc hiểu, chưa viết    |
| CI/CD                 | 🟡 Copy mẫu, chưa tự viết |
| REST API integration  | ✅ Biết rõ                |
| Security FE cơ bản    | 🟡 Biết sơ                |

**Vấn đề cốt lõi:** Không thiếu kiến thức React/Next.js. Thiếu **kinh nghiệm delivery một project từ con số 0 đến production** — setup, architecture, documentation, review, monitoring.

---

## II. ENGINEERING PHILOSOPHY

```
Simplicity over cleverness
Composition over inheritance
Prefer explicit over implicit
Measure before optimizing
Build reusable primitives before features
Document every important decision
Production-first mindset
```

**Bloat Filter — áp dụng cho mọi quyết định tech stack:**

```
1. Bài toán CỤ THỂ nào trong project này đòi hỏi công cụ này?
   (không phải "để học" — phải là "vì X sẽ vỡ nếu không có nó")
2. Nếu bỏ công cụ này, interviewer có thể hỏi "sao không dùng cái đơn giản hơn?"
   → Mình có câu trả lời thuyết phục không, hay chỉ là "muốn thử"?
3. Công cụ này có xuất hiện >1 lần trong 3 project không?
   Nếu không, có đáng đánh đổi thời gian học so với đào sâu cái đã có?
```

---

## III. ENGINEERING PLAYBOOK

> **Operating System** cho cả 3 project. Làm một lần, dùng lại mãi.

### 3.1 Cấu trúc Playbook

```
engineering-playbook/
├── 00-vision.md                    → Portfolio Vision, Engineering Principles
├── 01-coding-standards.md          → ESLint, Prettier, TypeScript strict rules
├── 02-folder-structure.md          → Module-based convention
├── 03-naming-convention.md         → Files, functions, variables, types
├── 04-git-workflow.md              → Branch strategy, commit convention
├── 05-branching-strategy.md        → Git Flow / Trunk-based
├── 06-commit-convention.md         → Conventional Commits
├── 07-code-review-checklist.md     → 10 điểm kiểm tra mỗi PR
├── 08-definition-of-done.md        → Task chỉ Done khi pass 10 điều kiện
├── 09-ai-agent-rules.md            → AI = Junior Dev, không được tự quyết định
├── 10-adr-template.md              → Architecture Decision Record template
├── 11-task-template.md             → Task breakdown format
├── 12-bug-report-template.md       → Bug reproduction format
├── 13-feature-template.md          → Feature spec format
├── 14-retrospective-template.md    → Sprint review format
└── 15-ai-workflow-template.md      → AI Collaboration Case Study format
```

### 3.2 Definition of Done (Mọi Task)

```
✅ Build pass
✅ ESLint pass
✅ TypeScript pass
✅ Responsive
✅ Loading state
✅ Error state
✅ Empty state
✅ Test (unit/integration)
✅ Documentation
✅ Self Review
```

### 3.3 Code Review Checklist

```
□ Architecture     □ Naming        □ Reusability
□ Accessibility  □ Performance   □ Security
□ Testing        □ Typing        □ Error Handling
□ Documentation
```

### 3.4 AI Collaboration Rules

AI được phép:

- Implement theo spec đã thiết kế
- Refactor theo yêu cầu
- Generate boilerplate
- Viết test
- Viết document

AI **KHÔNG** được phép:

- Tự thêm library
- Tự đổi architecture / folder / naming
- Optimize khi chưa được yêu cầu
- Generate code ngoài task scope
- Tự quyết định pattern mới

### 3.5 AI Collaboration Case Study Template

Mỗi project viết 1 file `AI-WORKFLOW.md`, không quá 1-2 trang:

```
1. Tool đã dùng (Claude Code / Claude / Copilot...)
2. Một quyết định kiến trúc khó — AI đề xuất gì, bạn chấp nhận/từ chối phần nào và vì sao
   (ví dụ thật, không phải liệt kê chung chung "AI giúp viết boilerplate")
3. Một lần AI sai — bug/pattern AI đề xuất mà bạn phát hiện và sửa lại
   → Đây là bằng chứng judgment mạnh nhất, không phải điều cần giấu
4. Validation method: bạn review bằng cách nào (test viết tay, đọc dòng-by-dòng,
   benchmark performance thật trước/sau)
```

**Nguyên tắc khi viết:** Không viết như quảng cáo ("AI tăng tốc 10x"). Viết như kỹ sư mô tả một code review thật — kể cả phần AI sai. Phần "AI sai, tôi phát hiện thế nào" có giá trị tín hiệu cao hơn phần "AI làm đúng".

---

### ➕ 3 CÔNG NGHỆ ĐƯỢC THÊM (vì thị trường VN 2026 yêu cầu)

| Công nghệ                       | Project | Tại sao thêm                                       |
| ------------------------------- | ------- | -------------------------------------------------- |
| **k6 Load Testing**             | P1      | Tiki/Shopee/Momo đều hỏi "test load thế nào?"      |
| **Bundle Analysis**             | P1      | Bundle analysis = kỹ năng Senior được đánh giá cao |
| **Vercel Speed Insights (RUM)** | P3      | Real User Monitoring là tiêu chí Senior 2026       |

---

## IV. NON-FUNCTIONAL REQUIREMENTS (NFR)

Mỗi project phải định lượng rõ ràng:

| Requirement        | P1 Target | P2 Target | P3 Target     |
| ------------------ | --------- | --------- | ------------- |
| Lighthouse         | >95       | >95       | >95           |
| FPS                | 60        | 60        | 60            |
| Memory             | <100MB    | <100MB    | <100MB        |
| Error rate         | <0.5%     | <0.5%     | <0.5%         |
| TTI                | <3s       | <2.5s     | <2.5s         |
| LCP                | —         | <2.5s     | <2.5s         |
| CLS                | —         | <0.1      | <0.1          |
| TTFB               | —         | <500ms    | <500ms        |
| First Load JS      | <250KB    | —         | —             |
| Table rows         | 10k+      | —         | 50k+          |
| Chart render/frame | —         | —         | <16ms         |
| CSV parse          | —         | —         | 100k rows <3s |
| Worker block time  | 0         | —         | 0             |

---

## V. WORKFLOW TỔNG THỂ

### 5.1 Portfolio Engineering Workflow

```
Career Vision
    ↓
Engineering Playbook
    ↓
Project Planning (2 ngày/project)
    ↓
Sprint Planning
    ↓
Feature Design
    ↓
Architecture Review
    ↓
Implementation
    ↓
Testing
    ↓
Code Review
    ↓
Documentation
    ↓
Sprint Review
    ↓
Retrospective
    ↓
Next Sprint
```

### 5.2 Vai trò luân phiên (5 vai)

| Vai trò                | Công việc                                                      |
| ---------------------- | -------------------------------------------------------------- |
| **Product Owner**      | Xác định mục tiêu, scope, ưu tiên feature, acceptance criteria |
| **Solution Architect** | Thiết kế kiến trúc, ADR, phân tích trade-off                   |
| **Senior Developer**   | Code phần lõi, quyết định kỹ thuật, review chất lượng          |
| **Tech Lead**          | Review code, quản lý Tech Debt, Sprint Review, Retrospective   |
| **Mentor**             | Viết guideline, chuẩn hóa convention, hướng dẫn AI/Junior      |

### 5.3 AI Collaboration Flow

```
Requirement
    ↓
Tôi phân tích (Product Owner)
    ↓
Architecture + Task Breakdown (Solution Architect)
    ↓
Tôi code phần cốt lõi (Senior Dev)
    ↓
AI implement phần còn lại (Junior)
    ↓
AI self-check
    ↓
Tôi review như review PR (Tech Lead)
    ↓
Refactor nếu cần
    ↓
Merge
```

### 5.4 Sprint Structure (Mỗi Project)

```
Sprint 0: Bootstrap + Setup
Sprint 1: Authentication + RBAC
Sprint 2: Layout + Shared UI
Sprint 3: Core Feature A
Sprint 4: Core Feature B
Sprint 5: Polish + Performance + Documentation
```

### 5.5 Issue Board Format

```
EP-001: Bootstrap Project
EP-002: Setup ESLint + Prettier
EP-003: Theme System
EP-004: RBAC
EP-005: Sidebar Layout
EP-006: [Feature Module]
...
```

---

## VI. PROJECT 1 — ENTERPRISE ADMIN PLATFORM

### Commerce Module | React 18 CSR SPA

#### 6.1 Câu Chuyện

Freelancer nhận ra mỗi dự án đều phải xây lại Admin từ đầu: Auth, RBAC, Table, Form, Upload, Export, Activity Log. Thời gian không nằm ở business logic — mà nằm ở việc xây đi xây lại cùng một nền tảng.

**Giải pháp:** Platform cung cấp phần lõi, business logic phát triển thành module độc lập. Module đầu tiên là **Commerce Operations** — domain đầy đủ bài toán enterprise. Nếu xử lý tốt Commerce thì mở rộng sang Property, CRM, HRM, ERP mà không đổi phần lõi.

#### 6.2 Tech Stack

**Core:** React 18 + TypeScript strict + React Router v6 + Vite

**State Management:**

| Library                   | Dùng cho                                       | Lý do                                                                                                                  |
| ------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Redux Toolkit + RTK Query | Server state (orders, products, customers)     | Caching, invalidation, normalized state                                                                                |
| Redux Saga                | Complex async flows (bulk ops, order pipeline) | Orchestrate multi-step workflow. **Giới hạn:** chỉ dùng cho Order pipeline. Các luồng đơn giản dùng RTK Query mutation |
| Zustand + Immer           | UI state (sidebar, modal, filter, theme)       | Lightweight, no boilerplate                                                                                            |

**UI & Components:** Shadcn/UI + Tailwind + Radix UI (platform-level design system) + Framer Motion (giới hạn 2-3 điểm chạm: page transition, modal)

**Data Layer:** TanStack Table + TanStack Virtual (10k+ rows) + React Hook Form + Zod + Recharts + Nivo

**Backend:** Supabase (Auth + PostgreSQL + Realtime + Storage)

**Quality & Monitoring:** Sentry + Web Workers (export Excel) + MSW + Vitest + React Testing Library + GitHub Actions + Vercel

#### 6.3 Features

**Giai đoạn 1 — Platform Core:**

- Auth: email + OAuth Google
- RBAC: Admin, Manager, Staff, Viewer
- Layout engine: Sidebar, Header, Breadcrumb, Tabs
- Notification center: in-app alerts
- Activity Log: ai làm gì lúc nào
- Settings: profile, theme, preferences
- Shared UI: Button, Modal, Form, Upload, Export (tái sử dụng toàn platform)

**Giai đoạn 2 — Commerce Module:**

- Product management: CRUD, variant, giá, stock
- Order management: list, detail, status flow, bulk action
- Inventory tracking: stock alert, low stock warning
- Customer management: list, segment, order history
- Analytics dashboard: revenue, top products, order funnel

#### 6.4 Senior-level Practices

- **Redux Saga giới hạn phạm vi:** `takeLatest`, `takeEvery`, `race`, `all`, retry — chỉ cho Order pipeline
- **Optimistic update** toàn bộ mutation với rollback khi thất bại
- **TanStack Table + Virtual:** 10k rows không lag
- **Error Boundary per module:** commerce lỗi không crash platform
- **Custom hooks** tách hoàn toàn khỏi UI
- **MSW:** mock API trong test, không phụ thuộc Supabase
- **Zod schema** validate toàn bộ API response
- **State Machine** cho Order lifecycle: Pending → Confirmed → Packing → Shipping → Delivered (kèm guard functions)
- **AI Collaboration Case Study:** document 1 quyết định kiến trúc khó và 1 lần AI sai

#### 6.5 Architecture Evolution

```
Version 1: Local Components trong từng page
    ↓ Pain: Duplication, không nhất quán
Version 2: Shared Components trong shared/
    ↓ Pain: Không có design system, style lệch
Version 3: Design System package riêng
    ↓ Pain: Monolithic, deploy chậm
Version 4: Module Federation — Shell + Remote
    → ADR viết sẵn, implement khi có nhiều team thật
```

#### 6.6 Risks & Mitigations

| Risk                        | Mitigation                                 |
| --------------------------- | ------------------------------------------ |
| Redux Saga complexity       | ADR + strict convention + giới hạn phạm vi |
| Large table (>10k rows)     | TanStack Virtual                           |
| Heavy CSV export block UI   | Web Worker                                 |
| Multi-tab state out of sync | BroadcastChannel (nếu implement)           |

#### 6.7 Performance Budget

- First Load JS < 250KB
- 60 FPS
- Table 10k rows render < 100ms
- Memory < 100MB
- Search/filter < 100ms
- Bundle analysis documented
- k6 load test results documented

#### 6.8 Documentation Checklist

**Viết TRONG lúc build:**

- [ ] ADR-001: Tại sao Redux Saga cho Order pipeline (giới hạn phạm vi)
- [ ] ADR-002: Tại sao KHÔNG dùng Module Federation ở giai đoạn này
- [ ] ADR-003: Tại sao KHÔNG dùng React Query song song với RTK Query
- [ ] ADR-004: Tại sao Shadcn/UI thay vì MUI cho platform
- [ ] Technical Decisions table: mọi lựa chọn thư viện có lý do
- [ ] State Management Philosophy: Redux vs Zustand — khi nào dùng cái nào
- [ ] ER Diagram: schema database trước khi code schema
- [ ] AI-WORKFLOW.md — 1 quyết định kiến trúc khó, 1 lần AI sai

**Viết SAU khi project chạy:**

- [ ] System Design: Overall architecture, Data Flow, Auth Flow, State Flow
- [ ] Error Handling Strategy: API error → retry → fallback → toast → boundary → log
- [ ] Performance Engineering: đo Lighthouse thật, ghi kết quả + cách fix + bundle analysis
- [ ] Security: XSS, CSRF, JWT lifecycle, RBAC enforcement checklist
- [ ] Testing Strategy: testing pyramid, mock strategy, coverage report
- [ ] CI/CD: pipeline thật, branch strategy, preview deployment
- [ ] k6 load testing report

#### 6.9 Tech Debt / Future Architecture

- [ ] **Module Federation:** Shell + Commerce Remote (khi có nhiều team)
- [ ] **Supabase Realtime:** Live order feed, stock alert realtime
- [ ] **BroadcastChannel:** Multi-tab state sync
- [ ] **Thêm Property Remote** vào Shell (tích hợp P2)
- [ ] **Thêm CRM Remote, HRM Remote**
- [ ] **Storybook:** document Platform UI component library
- [ ] **Chromatic:** visual regression testing
- [ ] **Independent deploy pipeline** cho từng remote
- [ ] **Nx Monorepo** thay cấu trúc hiện tại
- [ ] **White-labeling:** custom theme per tenant
- [ ] **i18n:** đa ngôn ngữ
- [ ] **Posthog:** analytics khi có nhiều user thật
- [ ] **OpenTelemetry:** distributed tracing khi có nhiều service boundary

---

## VII. PROJECT 2 — PROPERTY PLATFORM

### Phase 1: Internal Admin | Next.js 16 + React 19

#### 7.1 Câu Chuyện

Muốn xây PropTech startup nhưng nhận ra cần hệ thống vận hành trước khi có website khách hàng. Website chỉ là lớp hiển thị — giá trị thực sự nằm ở hệ thống vận hành phía sau.

**Phase 1:** Internal Admin cho: Super Admin, Company Admin, Project Manager, Sales Agent, Marketing, Legal, Finance.

**Phase 2 (preview):** Public listing website: tìm kiếm, xem map, booking xem nhà.

**Match trực tiếp JD remote Fulltime:** Next.js 16, React 19, Ant Design 6, JWT, RBAC, nhiều table/form/filter.

#### 7.2 Tech Stack

**Core:** Next.js 16 App Router + React 19 + TypeScript strict

**UI:** Ant Design 6 + Tailwind

**State Management:**

| Library        | Dùng cho                                      | Lý do                                            |
| -------------- | --------------------------------------------- | ------------------------------------------------ |
| React Query v5 | Server state (properties, agents, bookings)   | P1 đã cover Redux, P2 tập trung Next.js features |
| Zustand        | UI state (sidebar, modal, filter preferences) | Lightweight, đủ cho UI state                     |

**Auth + RBAC:** NextAuth v5 (JWT strategy) + Middleware-based route protection + Custom permission hook `usePermission('property:create')`

**Next.js 16 Features — học sâu qua thực tế:**

- Server Components: load data heavy không cần API call
- Server Actions: form submit không cần Route Handler
- `"use cache"`: cache property listing, unit availability
- `after()`: gửi email sau response
- `proxy.ts`: edge middleware, auth redirect
- Streaming + Suspense: progressive loading

**Data Layer:** React Hook Form + Zod + Swagger UI (tự document API)

**Backend:** Prisma + Supabase (PostgreSQL + RLS) + Resend (email) + Uploadthing (ảnh, document)

**Quality & Monitoring:** Pino structured logging + Sentry + Playwright E2E (5-8 cases core flow) + GitHub Actions CI/CD + Docker multi-stage + Vercel

#### 7.3 RBAC — Phân Cấp PropTech

```
Super Admin (platform owner)
└── Company Admin (chủ công ty BĐS)
    ├── Project Manager (quản lý dự án)
    │   ├── Sales Agent (môi giới)
    │   └── Marketing (content, media)
    ├── Operations Manager
    │   ├── Legal (hợp đồng, pháp lý)
    │   └── Finance (thanh toán, hoa hồng)
    └── Customer (khách mua/thuê — Phase 2)
```

**Permission Matrix:**

| Action             | Super Admin | Company Admin | Project Mgr | Sales Agent | Legal | Finance |
| ------------------ | :---------: | :-----------: | :---------: | :---------: | :---: | :-----: |
| Quản lý company    |     ✅      |      ❌       |     ❌      |     ❌      |  ❌   |   ❌    |
| Tạo/sửa project    |     ✅      |      ✅       |     ✅      |     ❌      |  ❌   |   ❌    |
| Tạo/sửa property   |     ✅      |      ✅       |     ✅      |     ❌      |  ❌   |   ❌    |
| Quản lý agent      |     ✅      |      ✅       |     ✅      |     ❌      |  ❌   |   ❌    |
| Xem & assign lead  |     ✅      |      ✅       |     ✅      |  Lead mình  |  ❌   |   ❌    |
| Tạo booking        |     ✅      |      ✅       |     ✅      |     ✅      |  ❌   |   ❌    |
| Tạo hợp đồng       |     ✅      |      ✅       |     ❌      |     ❌      |  ✅   |   ❌    |
| Quản lý thanh toán |     ✅      |      ✅       |     ❌      |     ❌      |  ❌   |   ✅    |

#### 7.4 Module Organization

```
src/
├── modules/
│   ├── project/      → components/, hooks/, services/, types/
│   ├── property/
│   ├── unit/
│   ├── agent/
│   ├── lead/
│   ├── booking/
│   ├── contract/
│   └── report/
├── shared/           → components/, hooks/, utils/
└── app/              → Next.js App Router
```

#### 7.5 Features

**Giai đoạn 1 — Core Setup:**

- Auth: đăng nhập JWT, route guard theo role
- Project management: tạo dự án BĐS (căn hộ, nhà phố, đất nền)
- Property management: thông tin, hình ảnh, pháp lý, trạng thái
- Unit management: căn hộ, block, tầng (available/hold/sold)
- Agent management: danh sách, phân công, hiệu suất

**Giai đoạn 2 — Sales Operations:**

- Lead management: tiếp nhận, phân loại, assign agent
- Booking/Giữ chỗ: đặt cọc, thời hạn giữ, trạng thái
- Contract management: tạo hợp đồng, upload ký, theo dõi
- Payment tracking: lịch thanh toán, nhắc hạn, trạng thái

**Giai đoạn 3 — Reporting + Docs:**

- Dashboard: tổng quan dự án, tỷ lệ bán, doanh thu
- Sales report: hiệu suất agent, conversion rate
- Media management: upload ảnh/video property
- Swagger API docs: document toàn bộ endpoint
- Playwright E2E cho luồng booking → contract → payment (5-8 cases)

#### 7.6 Senior-level Practices

- **Server Components** cho tất cả data-heavy pages
- **Server Actions** cho form mutations
- **Supabase RLS:** Agent chỉ thấy lead được assign cho mình
- **`"use cache"`**: cache unit availability
- **`after()`**: send email sau khi booking confirmed
- **Pino structured logging:** mọi booking/contract transition có log
- **Playwright E2E:** test flow từ tạo project → unit → booking → contract (giới hạn 5-8 cases)
- **Swagger auto-generate** từ Zod schema
- **Docker multi-stage** build
- **Multi-tenant nâng cao:** RLS → Subdomain per company (`company.app.com`)
- **AI Collaboration Case Study**

#### 7.7 Architecture Evolution

```
Version 1: Monolithic Next.js app, tất cả trong app/
    ↓ Pain: Không phân tách rõ module, khó maintain
Version 2: Module-based với src/modules/
    ↓ Pain: Chưa có data isolation giữa company
Version 3: RLS policies cho row-level isolation
    ↓ Pain: Chưa có subdomain per tenant
Version 4: Multi-tenant với subdomain + white-labeling
```

#### 7.8 Risks & Mitigations

| Risk                   | Mitigation                      |
| ---------------------- | ------------------------------- |
| RLS policy complexity  | ADR + test policies riêng       |
| JWT token leak         | Short expiry + refresh rotation |
| File upload abuse      | Uploadthing limits + virus scan |
| Email delivery fail    | Resend retry + fallback queue   |
| Multi-tenant data leak | RLS strict + audit log          |

#### 7.9 Performance Budget

- LCP < 2.5s
- CLS < 0.1
- TTFB < 500ms
- Server Component render < 200ms
- Server Action response < 500ms

#### 7.10 JD Alignment

| JD yêu cầu                      | Project cover                                     |
| ------------------------------- | ------------------------------------------------- |
| Next.js 16 + React 19           | Tech stack chính                                  |
| TypeScript                      | Strict mode toàn bộ                               |
| Ant Design 6                    | UI library chính                                  |
| REST API / Swagger              | Tự document với Swagger UI                        |
| JWT Authentication              | NextAuth v5 + JWT strategy                        |
| Role-based Permission           | 6 roles với permission granular                   |
| Tổ chức source theo module      | services/, hooks/, types/, components/ per module |
| Clean code, dễ bảo trì          | ESLint strict, PR template                        |
| SaaS platform / Admin dashboard | Đúng domain                                       |
| Nhiều bảng, form, filter        | Property, unit, lead, contract table              |

#### 7.11 Documentation Checklist

**Viết TRONG lúc build:**

- [ ] ADR-001: Tại sao Server Components thay vì Client Components
- [ ] ADR-002: Tại sao Server Actions thay vì Route Handlers
- [ ] ADR-003: Tại sao RLS thay vì kiểm tra permission ở API layer
- [ ] ADR-004: Tại sao React Query thay vì Redux ở P2
- [ ] ADR-005: Tại sao NextAuth thay vì Auth0
- [ ] ER Diagram: Projects, Properties, Units, Agents, Leads, Bookings, Contracts
- [ ] Technical Decisions table
- [ ] AI-WORKFLOW.md

**Viết SAU khi project chạy:**

- [ ] System Design: Request lifecycle, Auth flow, Deployment diagram
- [ ] Error Handling: Server Action errors, API errors, form validation errors
- [ ] Security: RLS policies, JWT lifecycle, RBAC enforcement, audit log
- [ ] Database Design: Index strategy, transactions, soft delete, audit tables
- [ ] API Design: REST conventions, pagination, filtering, versioning
- [ ] Testing Strategy: E2E flow, mock strategy, contract testing
- [ ] CI/CD: Branch strategy, preview deployment, Docker build

#### 7.12 Tech Debt / Future Architecture

- [ ] **Phase 2:** Customer portal hoàn chỉnh
- [ ] **Tích hợp payment** (VNPay, MoMo)
- [ ] **Hợp đồng điện tử** — chữ ký số
- [ ] **Zalo OA integration** — nhắc lịch thanh toán
- [ ] **Map integration** — Google Maps
- [ ] **Virtual tour** — 360° view
- [ ] **Multi-currency** (USD, SGD)
- [ ] **Tích hợp vào Shell P1** như Property Remote
- [ ] **GraphQL:** Apollo Client cho data layer phức tạp hơn
- [ ] **Feature flags:** Unleash/LaunchDarkly cho tính năng mới
- [ ] **A/B testing:** GrowthBook/Optimizely cho conversion optimization
- [ ] **i18n:** đa ngôn ngữ cho thị trường quốc tế
- [ ] **Accessibility WCAG 2.1 AA:** audit và fix cho gov/fintech compliance
- [ ] **React Native / Expo:** mobile app cho agent

---

## VIII. PROJECT 3 — INVESTMENT PORTFOLIO TRACKER

### Next.js 16 + Data Visualization + Monitoring

#### 8.1 Câu Chuyện

Đầu tư vào nhiều loại tài sản: cổ phiếu VN, ETF, vàng, Bitcoin. Mỗi nền tảng chỉ quản lý một phần — VNDirect chỉ có cổ phiếu, TCBS có sản phẩm riêng, Fmarket chỉ có quỹ, Binance chỉ có Crypto. Để biết tổng tài sản, lãi lỗ, allocation — vẫn phải dùng Excel và tổng hợp thủ công.

Chưa tìm thấy sản phẩm tiếng Việt nào hỗ trợ quản lý đa tài sản trong cùng một dashboard.

**Giải pháp:** Investment Portfolio Tracker — sản phẩm dùng mỗi ngày, có tiềm năng phát triển thành SaaS.

#### 8.2 Tech Stack

**Core:** Next.js 16 App Router + TypeScript strict (**branded types**)

**UI:** MUI v6 + Tailwind

**State Management:**

| Library        | Dùng cho                                     |
| -------------- | -------------------------------------------- |
| Zustand        | Portfolio state, watchlist, user preferences |
| React Query v5 | API calls — transactions, market data        |

**Data Visualization:**

- **D3.js v7:** 3 custom charts tự vẽ hoàn toàn (0 wrapper library)
- **Recharts:** standard charts (line, bar, donut)

**Data Layer:**

- TanStack Table v8 + TanStack Virtual: transaction table server-side
- React Hook Form + Zod strict schema
- **Web Workers:** tính toán portfolio, parse CSV
- **TypeScript branded types:** `AssetId`, `Price`, `Quantity`, `ReturnRate`

**Auth:** NextAuth v5

**Backend:** Prisma + Supabase PostgreSQL + Next.js Route Handlers + Resend (scheduled email report)

**Monitoring:**

- **Sentry:** error tracking + performance tracing
- **Pino:** structured logging, audit log mọi transaction
- **Vercel Speed Insights:** Core Web Vitals thật (RUM)

**Quality:** Vitest + React Testing Library + GitHub Actions CI/CD + Docker + Vercel

#### 8.3 D3.js Custom Charts (Tự vẽ hoàn toàn — 0 wrapper library)

1. **Candlestick chart** — lịch sử giá OHLC từng tài sản
2. **Allocation heatmap** — tỷ trọng từng tài sản, màu theo performance
3. **Waterfall chart** — đóng góp lãi/lỗ từng mã vào tổng danh mục

#### 8.4 Data Pipeline

```
WebSocket (market data feed)
    ↓
Ring Buffer (đệm dữ liệu realtime)
    ↓
Deduplicate (loại bỏ duplicate ticks)
    ↓
Worker (heavy calculation off main thread)
    ↓
Virtual Table (TanStack Virtual — 50k+ rows)
    ↓
Chart (D3.js render <16ms/frame)
```

#### 8.5 Features

**Giai đoạn 1 — Core Portfolio:**

- Auth
- Quản lý tài sản: cổ phiếu VN, ETF, vàng, crypto, tiền mặt
- Nhập giao dịch: mua, bán, giá bình quân
- Portfolio overview: tổng tài sản, allocation, P&L
- Import CSV từ broker: Web Worker parse không block UI

**Giai đoạn 2 — Analytics:**

- Performance chart: giá trị portfolio theo thời gian
- Allocation donut: theo loại tài sản, theo ngành
- Transaction history: TanStack Table server-side, filter, sort, search
- Watchlist: theo dõi mã chưa mua, price alert
- Benchmark: so sánh với VN-Index

**Giai đoạn 3 — D3.js + Advanced:**

- 3 D3.js custom charts tự vẽ
- Monthly performance summary
- Export PDF report — gửi email tự động qua Resend
- Recurring investment tracking (DCA)

**Giai đoạn 4 — Monitoring + Polish:**

- Sentry performance tracing: track slow calculation
- Vercel Speed Insights: Core Web Vitals thật
- Pino audit log: mọi transaction có log đầy đủ
- AI Collaboration Case Study
- Polish, README, bundle analysis

#### 8.6 Senior-level Practices

- **D3.js 3 custom charts:** 0 wrapper library — proof of deep visualization skill
- **TanStack Table server-side:** 50k rows, không lag
- **TypeScript branded types:** toàn bộ financial domain (`AssetId`, `Price`, `Quantity`, `ReturnRate`)
- **Web Workers:** mọi heavy calculation off main thread
- **Sentry performance tracing:** track slow DB query, slow render
- **`"use cache"` Next.js 16:** cache market data
- **Optimistic UI** toàn bộ mutation

#### 8.7 Architecture Evolution

```
Version 1: Client-side calculation, render đồng bộ
    ↓ Pain: UI block khi tính toán portfolio lớn
Version 2: Web Worker cho calculation
    ↓ Pain: Dữ liệu lớn vẫn lag table
Version 3: TanStack Virtual + server-side pagination
    ↓ Pain: Chart render chậm với nhiều data point
Version 4: D3.js Canvas rendering + data pipeline
```

#### 8.8 Risks & Mitigations

| Risk                            | Mitigation                        |
| ------------------------------- | --------------------------------- |
| CSV parse 100MB block UI        | Web Worker + chunked parsing      |
| D3.js chart render chậm         | Canvas rendering, data decimation |
| Market data API timeout         | Retry + fallback cached data      |
| Financial calculation precision | Decimal.js hoặc integer cents     |
| User data privacy               | Encryption at rest + audit log    |

#### 8.9 Performance Budget

- Chart render < 16ms/frame
- CSV 100k rows parse < 3s
- Worker block time = 0
- Table 50k rows scroll 60 FPS
- Portfolio calculation < 500ms
- Initial load < 2.5s

#### 8.10 Documentation Checklist

**Viết TRONG lúc build:**

- [ ] ADR-001: Tại sao D3.js thay vì Chart.js / Recharts cho custom charts
- [ ] ADR-002: Tại sao TanStack Table thay vì AG Grid
- [ ] ADR-003: Tại sao Web Workers cho financial calculation
- [ ] ADR-004: Tại sao branded types cho financial domain
- [ ] ADR-005: Tại sao KHÔNG dùng OpenTelemetry ở giai đoạn này
- [ ] ER Diagram: Assets, Transactions, Portfolios, Watchlist, Alerts
- [ ] Technical Decisions table
- [ ] AI-WORKFLOW.md

**Viết SAU khi project chạy:**

- [ ] System Design: Overall architecture, Data aggregation flow
- [ ] Performance Engineering: đo thật — bundle size, TTI, CLS, FPS khi render chart
- [ ] Error Handling: calculation errors, API timeout, CSV parse errors
- [ ] Security: JWT lifecycle, data isolation per user, audit log
- [ ] Testing Strategy: unit test calculations, integration test API, mock strategy
- [ ] Sentry performance tracing report, Vercel Speed Insights results

**Viết SAU khi xong cả 3 project:**

- [ ] Interview Guide: 20 câu hỏi React, 20 câu Next.js, 20 câu System Design, 20 câu Performance
- [ ] API Design document: tổng hợp từ Swagger P2 + Route Handlers P3
- [ ] State Management Philosophy: so sánh thực tế Redux (P1) vs React Query (P2, P3) vs Zustand
- [ ] AI Collaboration Philosophy: tổng hợp 3 AI-WORKFLOW.md

#### 8.11 Tech Debt / Future Architecture

- [ ] **Auto sync giá realtime** từ SSI/DNSE API
- [ ] **Thuế TNCN** — tính tự động khi bán CK
- [ ] **Dividend tracking** — cổ tức tiền mặt + cổ phiếu
- [ ] **Monte Carlo simulation** — dự báo danh mục
- [ ] **Risk metrics** — Sharpe ratio, VaR, max drawdown
- [ ] **Goal-based investing** — đặt mục tiêu tài chính
- [ ] **Family portfolio** — quản lý nhiều thành viên
- [ ] **Mobile app** — React Native / Expo
- [ ] **Stripe subscription** — launch SaaS chính thức (khi có multi-tenant thật)
- [ ] **OpenTelemetry** — distributed tracing khi có nhiều service boundary
- [ ] **Posthog** — product analytics khi có nhiều user thật
- [ ] **GraphQL** — Apollo Client cho data layer phức tạp
- [ ] **Feature flags** — Unleash/LaunchDarkly
- [ ] **A/B testing** — GrowthBook/Optimizely
- [ ] **Service Worker + PWA** — offline-first, background sync
- [ ] **k6 load testing** — stress test cho 50k+ rows
- [ ] **Visual regression** — Chromatic/Applitools
- [ ] **Storybook** — component library documentation
- [ ] **Design tokens** — theming system

---

## IX. SKILL MAPPING TỔNG THỂ

| Skill                       | P1 Enterprise Admin        | P2 Property Platform | P3 Investment Tracker  |
| --------------------------- | -------------------------- | -------------------- | ---------------------- |
| TypeScript strict           | ✅                         | ✅                   | ✅ branded types       |
| Redux Toolkit               | ✅ full                    | —                    | —                      |
| RTK Query                   | ✅                         | —                    | —                      |
| Redux Saga                  | ✅ giới hạn Order pipeline | —                    | —                      |
| Zustand + Immer             | ✅                         | ✅                   | ✅                     |
| React Query v5              | —                          | ✅ deep              | ✅                     |
| React Router v6             | ✅                         | —                    | —                      |
| Custom hooks                | ✅ platform-level          | ✅ per module        | ✅                     |
| Module Federation           | ⚠️ ADR only (Future)       | —                    | —                      |
| Framer Motion               | ✅ giới hạn                | —                    | —                      |
| React Hook Form + Zod       | ✅                         | ✅                   | ✅ strict              |
| Shadcn/UI + Radix           | ✅                         | —                    | —                      |
| Ant Design 6                | —                          | ✅                   | —                      |
| MUI v6                      | —                          | —                    | ✅                     |
| TanStack Table              | ✅ client-side             | —                    | ✅ server-side         |
| TanStack Virtual            | ✅                         | —                    | ✅                     |
| Recharts + Nivo             | ✅                         | —                    | ✅                     |
| D3.js custom charts         | —                          | —                    | ✅ 3 charts            |
| Supabase Realtime           | ⚠️ Future                  | —                    | —                      |
| Supabase RLS                | —                          | ✅                   | —                      |
| Prisma + Supabase           | ✅                         | ✅                   | ✅                     |
| NextAuth v5                 | —                          | ✅ JWT+RBAC          | ✅                     |
| Next.js 16 deep             | —                          | ✅ full              | ✅                     |
| React 19                    | —                          | ✅                   | —                      |
| Server Components           | —                          | ✅                   | ✅                     |
| Server Actions              | —                          | ✅                   | —                      |
| Swagger API docs            | —                          | ✅                   | —                      |
| Resend email                | —                          | ✅                   | ✅                     |
| Web Workers                 | ✅ export                  | —                    | ✅ calculation         |
| Sentry                      | ✅                         | ✅                   | ✅ performance tracing |
| Pino logging                | —                          | ✅                   | ✅                     |
| Vercel Speed Insights       | —                          | —                    | ✅ RUM                 |
| Testing + MSW               | ✅                         | ✅                   | ✅                     |
| Playwright E2E              | —                          | ✅ 5-8 cases         | —                      |
| CI/CD + Docker              | ✅                         | ✅                   | ✅                     |
| Module Organization         | ✅                         | ✅ per module        | —                      |
| ADR                         | ✅                         | ✅                   | ✅                     |
| System Design docs          | ✅                         | ✅                   | ✅                     |
| Performance Engineering     | ✅ + k6 + bundle           | —                    | ✅                     |
| Security checklist          | ✅                         | ✅                   | ✅                     |
| State Machine (Order)       | ✅                         | —                    | —                      |
| BroadcastChannel            | ⚠️ Future                  | —                    | —                      |
| Data Pipeline               | —                          | —                    | ✅                     |
| Multi-tenant                | —                          | ✅                   | —                      |
| Branded Types               | —                          | —                    | ✅                     |
| AI Collaboration Case Study | ✅                         | ✅                   | ✅                     |

---

## X. WORKFLOW TỔNG HỢP

```
Engineering Playbook
    ↓
P1 — Enterprise Admin Platform
    ↓
P2 — Property Platform
    ↓
P3 — Investment Portfolio Tracker
    ↓
Documentation Synthesis + AI-WORKFLOW.md cho cả 3
    ↓
Polish, README, Portfolio Site, CV Update
    ↓
🚀 APPLY CHÍNH THỨC
```

---

## XI. DOCUMENTATION PHILOSOPHY

> **"Documentation viết từ trải nghiệm thật còn mạnh hơn 15 chương lý thuyết đẹp."**

### 11.1 Nhóm 1 — Viết TRONG lúc build

- **ADR** — viết khi đang chọn tech stack
- **Technical Decisions table** — ghi lý do chọn/không chọn từng thư viện
- **State Management Philosophy** — viết 1 lần, áp dụng cả 3 project
- **Database Design (ER Diagram)** — vẽ trước khi code schema
- **AI-WORKFLOW.md** — viết song song với implementation

### 11.2 Nhóm 2 — Viết SAU khi project chạy được

- **System Design diagrams** — vẽ khi đã biết hệ thống thật chạy thế nào
- **Error Handling Strategy** — document flow thật, không lý thuyết
- **Performance Engineering** — đo thật bằng Lighthouse, Sentry, Web Vitals rồi mới viết
- **Security** — checklist dựa trên những gì đã implement
- **Testing Strategy** — describe testing pyramid của chính project
- **CI/CD** — document pipeline thật
- **k6 load testing report** — nếu đã chạy
- **Bundle analysis report** — nếu đã chạy

### 11.3 Nhóm 3 — Viết SAU khi xong cả 3 project

- **Observability** — tổng hợp từ Sentry + Vercel Speed Insights
- **Production Readiness checklist** — check lại những gì đã làm
- **API Design** — document từ Swagger đã có ở P2
- **Interview Guide** — 20 câu hỏi mỗi chủ đề, trả lời bằng kinh nghiệm thật
- **AI Collaboration Philosophy** — tổng hợp 3 AI-WORKFLOW.md

---

## XII. CÂU CHUYỆN PHỎNG VẤN

> "Tôi có 5–6 năm kinh nghiệm, phần lớn tự mày mò với stack cũ. Để nâng cấp lên senior-level, tôi tự xây 3 production-grade projects — mỗi project giải quyết một vấn đề thật trong career của mình.
>
> **Project 1** là Enterprise Admin Platform — tôi nhận ra mình đang xây đi xây lại cùng một nền tảng cho mỗi freelance project, nên tôi xây một platform tái sử dụng được. Tôi dùng Redux ecosystem (Toolkit + Saga) cho bài toán state phức tạp, nhưng tôi cũng viết ADR giải thích tại sao KHÔNG dùng Module Federation ở giai đoạn này — vì 1 người 1 remote không tạo ra bài toán thật để giải.
>
> **Project 2** là Property Platform — tôi muốn làm PropTech startup nhưng nhận ra cần hệ thống vận hành trước khi có website khách hàng. Đây là MVP đầu tiên cho startup đó, dùng Next.js 16 với Server Components và RBAC phức tạp.
>
> **Project 3** là Investment Portfolio Tracker — tôi đang đầu tư nhưng không có tool nào quản lý đa tài sản trong một chỗ, nên tôi build cho chính mình với D3.js custom charts và monitoring production-grade.
>
> Tôi cũng làm việc có chủ đích với AI coding assistant trong suốt quá trình — nhưng theo cách một senior review code của junior: mọi output đều qua review dòng-by-dòng, có lúc tôi từ chối hướng AI đề xuất vì không phù hợp với bài toán. Tôi tài liệu hoá điều này không phải để khoe tốc độ, mà vì đó chính là kỹ năng mà công việc kỹ sư hiện nay đòi hỏi — biết khi nào tin, khi nào không.
>
> Điều tôi muốn bạn thấy không phải là framework tôi dùng — mà là cách tôi thiết kế hệ thống, chọn trade-off, định lượng performance budget, quản lý risk, và document lý do đằng sau mỗi quyết định kỹ thuật — kể cả quyết định KHÔNG dùng một công nghệ nào đó."

---

## XIII. VỊ TRÍ CÓ THỂ APPLY

| Vị trí                     | Mức độ tự tin | Lý do                                                   |
| -------------------------- | :-----------: | ------------------------------------------------------- |
| Mid Frontend               |  ⭐⭐⭐⭐⭐   | Vượt trội hoàn toàn                                     |
| Senior Frontend            |   ⭐⭐⭐⭐☆   | Đủ technical + architecture + process                   |
| Frontend Software Engineer |  ⭐⭐⭐⭐⭐   | Architecture + performance + quality                    |
| Fullstack (JS)             |   ⭐⭐⭐⭐☆   | Prisma, Supabase, API design đủ mạnh                    |
| Product Engineer           |  ⭐⭐⭐⭐⭐   | Business context + technical depth                      |
| Tech Lead (startup nhỏ)    |   ⭐⭐⭐☆☆    | Có process nhưng thiếu kinh nghiệm dẫn người thật       |
| Solution Architect         |    ⭐⭐☆☆☆    | Tư duy tốt nhưng thiếu distributed systems ở quy mô lớn |

| Tiêu chí                    | Điểm       |
| --------------------------- | ---------- |
| Technical depth             | ⭐⭐⭐⭐⭐ |
| Architecture judgment       | ⭐⭐⭐⭐⭐ |
| Production readiness        | ⭐⭐⭐⭐⭐ |
| Market fit VN 2026          | ⭐⭐⭐⭐⭐ |
| AI collaboration story      | ⭐⭐⭐⭐⭐ |
| Honesty / no resume-padding | ⭐⭐⭐⭐⭐ |

### 🎯 KHUYẾN NGHỊ APPLY

| Rank | Phân khúc                   | Match |
| ---- | --------------------------- | ----- |
| 🥇   | Remote/Global (US/EU/SG)    | 95%   |
| 🥇   | Outsourcing (KMS, NashTech) | 95%   |
| 🥇   | Tech Giant VN (VNG, Zalo)   | 95%   |
| 🥈   | Product Startup (SaaS)      | 90%   |
| 🥈   | E-commerce (Tiki, Shopee)   | 85%   |
| 🥉   | Fintech (Momo, VNPay)       | 80%   |
| ⚠️   | Super App (Grab, Be)        | 70%   |
| ❌   | Enterprise Bank             | 65%   |

---

## XIV. WHAT NOT TO ADD

❌ Kubernetes — không cần cho scope này  
❌ Kafka — overkill  
❌ Elasticsearch — không cần search phức tạp  
❌ RabbitMQ — không cần message queue  
❌ gRPC — REST đủ  
❌ Redis Cluster — không cần cache phân tán  
❌ Full Microservices — Module Federation ADR đủ  
❌ Event Sourcing — không cần audit toàn bộ event  
❌ CQRS — không cần tách read/write  
❌ **React Query song song với RTK Query trong cùng 1 app** — 2 lib cùng làm 1 việc  
❌ **OpenTelemetry cho 1 app monolithic** — không đủ distributed để chứng minh  
❌ **Posthog cho 1 user** — không có gì để phân tích  
❌ **Stripe cho app chưa multi-tenant** — resume padding  
❌ **Module Federation implementation cho 1 người 1 remote** — chi phí không tương xứng payoff

> Những công nghệ này kéo dài timeline đáng kể và khó chứng minh chiều sâu nếu chỉ đưa vào portfolio. **Áp dụng cùng kỷ luật "Simplicity over cleverness" cho cả tầng frontend/tooling, không chỉ tầng infra.**

---

## XV. KẾT LUẬN

> **Giá trị lớn nhất không phải là danh sách công nghệ. Nó giúp bạn chuyển từ tư duy "Tôi biết React và Next.js" sang "Tôi có thể nhận một bài toán, thiết kế kiến trúc, triển khai, kiểm thử, đưa vào production, quan sát hệ thống khi chạy và giải thích vì sao mình chọn từng quyết định kỹ thuật — kể cả quyết định KHÔNG dùng một công nghệ nào đó."**

Đó là điều khiến một buổi phỏng vấn chuyển từ hỏi **"bạn dùng thư viện gì?"** sang **"hãy kể về quyết định kiến trúc khó nhất bạn từng đưa ra, và tại sao bạn từ chối một phương án khác?"**

Khi bạn có thể trả lời những câu hỏi đó bằng chính ba dự án của mình — với ADR, performance budget, risk mitigation, architecture evolution, AI collaboration judgment, và production monitoring — portfolio sẽ có sức thuyết phục hơn rất nhiều so với việc chỉ liệt kê công nghệ đã học.

**Đánh giá cuối cùng: 9.5/10** cho mục tiêu Senior Frontend / Software Engineer.
