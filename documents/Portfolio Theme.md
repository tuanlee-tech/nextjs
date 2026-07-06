# Portfolio Theme

> **Building software to solve real problems I encounter in my career.**

Ba dự án không được tạo ra để học framework.

Chúng được tạo ra để giải quyết ba vấn đề lớn nhất mà mình gặp trong ba vai trò khác nhau:

- **Freelancer**
- **Future Startup Founder**
- **Investor & Product Builder**

Ba dự án cũng đại diện cho ba giai đoạn phát triển trong sự nghiệp của mình.

```text
Freelancer
        │
        ▼
Enterprise Platform

        │
        ▼
Startup Builder

        │
        ▼
Property Platform

        │
        ▼
Product Builder

        │
        ▼
Investment Portfolio
```

---

# Project 1

# Enterprise Admin Platform

## Commerce Module

> **Building a reusable foundation for every business application I develop.**

---

## Câu chuyện

Trong quá trình làm freelance, mình nhận ra rằng khách hàng có thể đến từ rất nhiều lĩnh vực khác nhau.

Có người bán hàng.

Có người kinh doanh bất động sản.

Có người quản lý kho.

Có người cần CRM.

Có người chỉ cần CMS.

Business khác nhau.

Nhưng mỗi lần bắt đầu dự án, mình vẫn luôn phải xây lại gần như toàn bộ hệ thống quản trị.

Ví dụ:

- Authentication
- Authorization
- Dashboard
- Sidebar
- Table
- Form
- Upload
- Search
- Filter
- Notifications
- Settings
- Activity Log
- Export

Sau nhiều dự án, mình nhận ra rằng phần lớn thời gian không nằm ở business logic.

Mà nằm ở việc xây đi xây lại cùng một nền tảng.

Điều này khiến mình đặt câu hỏi:

> **Nếu phần lớn các hệ thống quản trị đều giống nhau, tại sao mình vẫn phải bắt đầu lại từ đầu cho mỗi dự án?**

Đó là lý do mình quyết định xây dựng **Enterprise Admin Platform**.

Đây không phải là một Ecommerce Dashboard.

Cũng không phải ERP.

Đây là một **platform**.

Platform này chỉ cung cấp phần lõi:

- Authentication
- RBAC
- Layout
- Navigation
- Dashboard Framework
- Data Table Engine
- Form Engine
- Upload
- Export
- Notification
- Activity Log
- Shared UI

Business sẽ được phát triển thành các module độc lập.

Module đầu tiên mình chọn là **Commerce Operations**.

Không phải vì mình muốn làm Ecommerce.

Mà vì Commerce là domain có gần như đầy đủ các bài toán enterprise:

- Orders
- Products
- Inventory
- Customers
- Analytics

Nếu platform có thể xử lý tốt Commerce thì sau này hoàn toàn có thể mở rộng sang:

- Property
- CRM
- CMS
- HRM
- ERP

mà không phải thay đổi phần lõi.

---

## Mục tiêu kỹ thuật

Đây là project mình dùng để đào sâu toàn bộ React ecosystem.

Mình muốn hiểu không chỉ cách sử dụng React mà còn hiểu cách xây dựng một Enterprise SPA có khả năng mở rộng.

Project này sẽ là nơi mình nghiên cứu:

- React Architecture
- Redux Toolkit
- Redux Thunk
- Redux Saga
- RTK Query
- React Query
- Zustand
- TanStack Table
- React Hook Form
- Zod
- Performance Optimization
- Virtualization
- Code Splitting
- Error Boundaries

Sau khi hoàn thành, đây sẽ là nền tảng mình sử dụng lại cho hầu hết các dự án freelance trong tương lai.

---

# Project 2

# Property Platform

## Phase 1 — Internal Admin

> **Building the operational backbone before building the customer experience.**

---

## Câu chuyện

Mình luôn muốn xây dựng một startup trong lĩnh vực PropTech.

Nhưng thay vì bắt đầu bằng website tìm kiếm bất động sản, mình chọn bắt đầu từ hệ thống quản trị nội bộ.

Lý do rất đơn giản.

Một nền tảng bất động sản không thể vận hành nếu không có nơi quản lý dữ liệu.

Không có ai tạo Project.

Không có ai tạo Property.

Không có ai cập nhật giá.

Không có ai quản lý Agent.

Không có ai xử lý Booking.

Không có ai quản lý Lead.

Website chỉ là lớp hiển thị.

Giá trị thực sự nằm ở hệ thống vận hành phía sau.

Vì vậy mình chia dự án thành hai giai đoạn.

---

## Phase 1

Mình tập trung xây dựng hệ thống dành cho:

- Super Admin
- Sales
- Marketing
- Agent
- Project Manager

Hệ thống này chịu trách nhiệm quản lý toàn bộ vòng đời của dữ liệu.

Ví dụ:

- Projects
- Properties
- Units
- Agents
- Customers
- Leads
- Bookings
- Contracts
- Media
- CMS

Đây chính là "single source of truth" cho toàn bộ nền tảng.

---

## Phase 2

Sau khi nền tảng vận hành ổn định, mình mới phát triển phần dành cho khách hàng.

Đây sẽ là website tìm kiếm bất động sản tương tự Booking hoặc Airbnb.

Khách hàng có thể:

- tìm kiếm
- lọc
- xem bản đồ
- xem chi tiết
- lưu yêu thích
- đặt lịch xem nhà
- booking

Mình muốn tách hai phase vì đây cũng là cách nhiều startup thực tế phát triển sản phẩm.

---

## Mục tiêu kỹ thuật

Project này giúp mình đào sâu toàn bộ Next.js.

Bao gồm:

- App Router
- Server Components
- Server Actions
- Route Handlers
- Middleware
- SEO
- Metadata
- Rendering Strategies
- Caching
- Streaming

Đây cũng chính là MVP đầu tiên cho startup PropTech mà mình muốn phát triển trong tương lai.

---

# Project 3

# Investment Portfolio Tracker

> **Building the investment platform I always wanted to use.**

---

## Câu chuyện

Ngoài lập trình, mình còn đầu tư vào nhiều loại tài sản khác nhau.

Ví dụ:

- Cổ phiếu Việt Nam
- ETF
- Vàng
- Bitcoin

Tuy nhiên mỗi nền tảng chỉ quản lý một phần danh mục.

Ví dụ:

- VNDirect chỉ có cổ phiếu.
- TCBS có sản phẩm riêng.
- Fmarket chỉ có quỹ.
- Binance chỉ có Crypto.

Để theo dõi toàn bộ tài sản, mình vẫn phải dùng Excel.

Mỗi khi muốn biết:

- tổng tài sản,
- lãi lỗ,
- allocation,
- hiệu suất,

mình phải tổng hợp dữ liệu thủ công.

Điều này rất mất thời gian.

Mình cũng chưa tìm thấy sản phẩm tiếng Việt nào hỗ trợ quản lý đa tài sản trong cùng một dashboard.

Đó là lý do mình quyết định xây dựng Investment Portfolio Tracker.

---

## Mục tiêu

Đây không chỉ là dashboard.

Đây là sản phẩm mình muốn sử dụng mỗi ngày.

Ứng dụng sẽ cho phép:

- quản lý nhiều loại tài sản
- import dữ liệu từ nhiều nguồn
- tính P&L thực
- phân tích allocation
- benchmark với VNINDEX hoặc các chỉ số khác
- theo dõi lịch sử hiệu suất
- trực quan hóa dữ liệu
- cảnh báo phân bổ tài sản

Nếu sản phẩm đủ tốt, mình hoàn toàn có thể tiếp tục phát triển thành SaaS hoặc phát hành lên store.

---

## Mục tiêu kỹ thuật

Đây là project giúp mình hoàn thiện tư duy xây dựng một sản phẩm thực tế.

Mình muốn tập trung vào:

- Data Aggregation
- Dashboard Architecture
- Data Visualization
- Offline Support
- Synchronization
- Caching
- Authentication
- Subscription
- Payment
- Performance

Đây là dự án mình kỳ vọng sẽ tiếp tục phát triển lâu dài sau khi hoàn thành portfolio.

---

# Toàn bộ hành trình

Điều mình muốn người xem portfolio nhớ không phải là ba framework mình đã dùng, mà là cách mình giải quyết các vấn đề thực tế trong từng giai đoạn của sự nghiệp.

| Giai đoạn | Vai trò                        | Pain Point                                                             | Dự án                            | Giá trị tạo ra                                                               |
| --------- | ------------------------------ | ---------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| **1**     | **Freelancer**                 | Mỗi dự án đều phải xây lại Admin từ đầu                                | **Enterprise Admin Platform**    | Xây dựng một nền tảng quản trị có thể tái sử dụng cho nhiều domain khác nhau |
| **2**     | **Startup Builder**            | Muốn làm PropTech nhưng cần nền tảng vận hành trước website khách hàng | **Property Platform**            | Xây dựng Admin trước để kiểm chứng nghiệp vụ và chuẩn bị cho MVP startup     |
| **3**     | **Investor & Product Builder** | Không có công cụ quản lý danh mục đầu tư đa tài sản phù hợp            | **Investment Portfolio Tracker** | Tạo sản phẩm phục vụ nhu cầu cá nhân với tiềm năng phát triển thành SaaS     |

---

Ba dự án không tồn tại độc lập mà tạo thành một hành trình rất logic:

> **Đầu tiên mình xây một nền tảng để giải quyết công việc hằng ngày của một freelancer. Sau đó mình dùng kinh nghiệm đó để phát triển MVP cho ý tưởng startup PropTech. Cuối cùng, mình áp dụng toàn bộ kiến thức đã tích lũy để xây dựng một sản phẩm phục vụ chính nhu cầu đầu tư của bản thân và có tiềm năng thương mại hóa.**

Đó không còn là ba dự án "để học React và Next.js", mà là ba bước trưởng thành của một software engineer đang chuyển dần từ **developer → architect → product builder**.

---

## SAU 3 PROJECTS — BẠN TỰ TIN APPLY VỊ TRÍ NÀO?

**Vị trí chính:**

- **Mid-level Frontend Developer** — đây là vị trí chắc chắn nhất, 3 projects đủ để prove
- **Mid-level Fullstack Developer** — được vì có Prisma + Supabase + API design
- **Frontend Developer tại product company** — SaaS, Fintech, Proptech

**Vị trí có thể thử:**

- **Senior Frontend** tại startup nhỏ hoặc outsource — họ thường định nghĩa Senior thấp hơn product company
- **Freelance/Contract Remote** — JD như cái bạn share, làm theo dự án

**Chưa tự tin apply:**

- Senior tại product company lớn (Grab, VNG, Shopee) — họ cần thêm leadership, mentoring, system design thật
- Tech Lead / Architect — cần thêm 1-2 năm thực chiến nhóm

---

## MỨC LƯƠNG THỰC TẾ 2026

### TRƯỜNG HỢP 1 — Không yêu cầu tiếng Anh

_Cty Việt, outsource nội địa, product VN_

| Level apply được                 | Lương NET/tháng |
| -------------------------------- | --------------- |
| Mid Frontend (target chính)      | 22 — 32 triệu   |
| Mid Fullstack                    | 25 — 35 triệu   |
| Senior tại startup/outsource nhỏ | 28 — 40 triệu   |

Senior Frontend tại Việt Nam hiện đang ở mức 20-30 triệu/tháng, nhưng với stack mạnh (Next.js, Redux Saga, Micro Frontend, monitoring) bạn có thể negotiate cao hơn mặt bằng đó.

---

### TRƯỜNG HỢP 2 — Yêu cầu tiếng Anh

_Cty nước ngoài, remote international, outsource cho client ngoài_

| Loại cty                            | Lương NET/tháng |
| ----------------------------------- | --------------- |
| Outsource cho client Nhật/Hàn       | 30 — 50 triệu   |
| Product company Singapore/EU        | 50 — 80 triệu   |
| Remote full cho US/Australia client | 70 — 120 triệu  |

Công ty trả thêm 30-40% cho developer có tiếng Anh tốt và kinh nghiệm remote, và remote positions trả cao hơn local 40-60%.

Mid-senior Frontend tại HCMC làm cho công ty nước ngoài hiện ở mức $1,500-$2,800/tháng, senior lên tới $2,800-$4,500+.

---

## THỰC TẾ VỚI PROFILE CỦA BẠN

Tiếng Anh của bạn hiện tại chưa đủ để apply thẳng vào remote international. Nhưng roadmap của bạn đang chạy song song — 45 phút tiếng Anh mỗi ngày trong 4-5 tháng làm project.

Thực tế khả thi nhất sau khi xong 3 projects:

**Tháng 4-5 tới — apply trước:**
Nhảy vào cty Việt hoặc outsource không yêu cầu English. Target 28-38 triệu. Dùng môi trường mới để tiếp tục học tiếng Anh và va chạm thực chiến.

**6-12 tháng sau khi có việc mới:**
Tiếng Anh đã khá hơn + có thêm kinh nghiệm thực chiến → apply remote hoặc cty nước ngoài. Lúc đó bracket 50-80 triệu là realistic.

---

## PROJECT 1 — Enterprise Admin Platform

_Commerce Module — React CSR SPA_

### Tại sao tech stack này

Project này là nơi bạn **nghiên cứu toàn bộ React state management ecosystem** trong một codebase thực tế. Không phải dùng 1 cái — mà dùng đúng cái đúng chỗ, như một platform thật sự cần.

Ngoài ra, một **Admin Platform** tái sử dụng được cho nhiều domain là bài toán kiến trúc — không phải bài toán feature. Interviewer nhìn vào sẽ thấy bạn tư duy như một architect, không phải một coder.

---

### Tech Stack

**Core**

- React 18 + TypeScript strict
- React Router v6
- Vite

**State Management — Cả 3 approach, dùng đúng context**

| Library                   | Dùng cho                                                                         |
| ------------------------- | -------------------------------------------------------------------------------- |
| Redux Toolkit + RTK Query | Server state — orders, products, customers, inventory                            |
| Redux Saga                | Complex async flows — bulk operations, order processing pipeline, inventory sync |
| Zustand + Immer           | UI state — sidebar, theme, modal, active filters, user preferences               |
| React Query v5            | Lightweight queries — notifications, activity log, user profile                  |

_Đây là điểm mạnh nhất của P1: bạn hiểu khi nào dùng RTK Query, khi nào React Query, khi nào Saga — và giải thích được tại sao trong interview._

**UI & Components**

- Shadcn/UI + Tailwind + Radix UI — platform-level component library
- Framer Motion — page transition, table row animation, notification slide

**Data Layer**

- TanStack Table + TanStack Virtual — Data Table Engine, 10k+ rows
- React Hook Form + Zod — Form Engine, tái sử dụng toàn platform
- Recharts + Nivo — Analytics charts

**Backend**

- Supabase (Auth + PostgreSQL + Realtime + Storage)

**Micro Frontend (Phase cuối — tuần 4-5)**

- Module Federation (Webpack 5)
- Shell App = Platform Core (host)
- Commerce Remote = Commerce Module (remote)
- Shared Package = Design System + Types + Utils

_Đây là kiến trúc đúng cho một "platform" — module sau này (Property, CRM, HRM) chỉ cần tạo remote mới, không đụng shell._

**Quality**

- Sentry + Posthog
- MSW + Vitest + React Testing Library
- Web Workers (export Excel không block UI)
- GitHub Actions + Vercel

---

### Features — Theo Giai Đoạn

**Giai đoạn 1 — Platform Core (tuần 1-2)**

- Auth (email + OAuth Google)
- RBAC — Admin, Manager, Staff, Viewer
- Layout engine — Sidebar, Header, Breadcrumb
- Notification center
- Activity Log — ai làm gì lúc nào
- Settings — profile, theme, preferences
- Shared UI — Button, Modal, Form, Upload, Export

**Giai đoạn 2 — Commerce Module (tuần 3-4)**

- Product management — CRUD, variant, giá, stock
- Order management — list, detail, status flow, bulk action
- Inventory tracking — stock alert, low stock warning
- Customer management — list, segment, order history
- Analytics dashboard — revenue, top products, order funnel

**Giai đoạn 3 — Realtime + Module Federation (tuần 5)**

- Live order feed — Supabase Realtime
- Stock alert realtime
- Tách Shell + Commerce Remote bằng Module Federation
- Export heavy data qua Web Worker

---

### Senior-level Practices

- Module Federation — Shell host + Commerce remote, shared dependencies
- Redux Saga full patterns — `takeLatest`, `takeEvery`, `race`, `all`, retry
- Optimistic update toàn bộ mutation
- TanStack Table + Virtual — 10k rows không lag
- Custom hooks tách hoàn toàn khỏi UI
- Error Boundary per module — commerce lỗi không crash platform
- MSW — mock API trong test
- Zod schema validate toàn bộ API response

---

### Tech Debt — Checklist Upgrade Sau

- [ ] Thêm Property Remote vào Shell (tích hợp P2)
- [ ] Thêm CRM Remote, HRM Remote
- [ ] Storybook — document Platform UI component library
- [ ] Chromatic — visual regression testing
- [ ] Independent deploy pipeline cho từng remote
- [ ] Nx Monorepo thay cấu trúc hiện tại
- [ ] Unit test coverage > 80%
- [ ] White-labeling — custom theme per tenant
- [ ] i18n — đa ngôn ngữ

---

### Biết Để Tìm Đọc Sau

**Module Federation nâng cao**

- Single-SPA, Qiankun — alternative frameworks
- Import Maps — native browser module sharing
- Turborepo / Nx — monorepo management
- Independent CI/CD per remote
- Contract testing giữa host và remote

**Redux nâng cao**

- `createEntityAdapter` — normalized state
- Redux Observable — RxJS-based alternative cho Saga
- Redux DevTools — time-travel, custom enhancers
- Undo/redo pattern
- Redux + WebSocket sync

**React 18/19 nâng cao**

- React Compiler — tự động memoization
- `useOptimistic` — built-in optimistic UI
- `useActionState` — form action state
- `use()` hook — đọc Promise trong render
- Streaming SSR với Suspense

---

## PROJECT 2 — Property Platform

_Phase 1: Internal Admin — Next.js 16 + React 19_

### Tại sao tech stack này

Phase 1 là **Internal Admin** — hệ thống vận hành nội bộ. Tech stack cần thiên về:

- **Server-side rendering** — data load nhanh, không cần chờ JS
- **Form + Table heavy** — quản lý Projects, Properties, Units, Agents
- **RBAC phức tạp** — nhiều role, nhiều permission
- **Swagger API docs** — chuẩn làm việc với Backend team

Stack này cũng **match trực tiếp JD remote** bạn đã share — Next.js 16, React 19, Ant Design 6, JWT, RBAC.

---

### Tech Stack

**Core**

- Next.js 16 App Router + React 19 + TypeScript strict
- Ant Design 6 + Tailwind

**State Management**

- Zustand (UI state — sidebar, modal, filter preferences)
- React Query v5 (server state — properties, agents, bookings)

_Lý do không dùng Redux ở đây: bạn đã cover Redux đầy đủ ở P1. P2 tập trung vào Next.js features. React Query đủ mạnh cho data fetching, Zustand đủ cho UI state._

**Auth + RBAC**

- NextAuth v5 (JWT strategy)
- Middleware-based route protection
- Custom permission hook — `usePermission('property:create')`

**API Layer**

- Next.js Route Handlers — REST API
- Swagger UI — tự document API (matches JD requirement)
- Zod schema — validate input/output
- React Hook Form + Zod — form engine

**Next.js 16 Features (học sâu qua thực tế)**

- Server Components — load data heavy không cần API call
- Server Actions — form submit không cần Route Handler
- `"use cache"` — cache property listing
- `after()` — gửi email notification sau response
- `proxy.ts` — edge middleware, auth redirect
- Streaming + Suspense — progressive loading

**Backend**

- Prisma + Supabase (PostgreSQL)
- Row Level Security (RLS) — data isolation theo role
- Resend — email notification (hợp đồng, invoice)
- Uploadthing — upload ảnh property, document

**Quality**

- Pino structured logging
- Sentry
- Playwright E2E — test full flow
- GitHub Actions CI/CD + Docker multi-stage
- Vercel

---

### RBAC — Phân Cấp Cho PropTech

```
Super Admin (platform owner)
└── Company Admin (chủ công ty BĐS)
    ├── Project Manager (quản lý dự án)
    │   ├── Sales Agent (môi giới)
    │   └── Marketing (tạo content, media)
    ├── Operations Manager
    │   ├── Legal (hợp đồng, pháp lý)
    │   └── Finance (thanh toán, hoa hồng)
    └── Customer (khách mua/thuê — Phase 2)
```

---

### Features — Theo Giai Đoạn

**Giai đoạn 1 — Core Setup (tuần 6-7)**

- Auth — đăng nhập JWT, route guard theo role
- Project management — tạo dự án BĐS (căn hộ, nhà phố, đất nền)
- Property management — thông tin, hình ảnh, pháp lý
- Unit management — căn hộ, block, tầng, trạng thái (available/hold/sold)
- Agent management — danh sách, hiệu suất, phân công

**Giai đoạn 2 — Sales Operations (tuần 8-9)**

- Lead management — tiếp nhận, phân loại, assign agent
- Booking/Giữ chỗ — đặt cọc, thời hạn giữ, trạng thái
- Contract management — tạo hợp đồng, upload ký, theo dõi tiến độ
- Payment tracking — lịch thanh toán, nhắc hạn, trạng thái

**Giai đoạn 3 — Reporting + Docs (tuần 10-11)**

- Dashboard — tổng quan dự án, tỷ lệ bán, doanh thu
- Sales report — hiệu suất agent, conversion rate, thời gian bán
- Media management — upload ảnh/video property, thư viện media
- Swagger API docs — document toàn bộ endpoint

**Giai đoạn 4 — Phase 2 Preview (tuần 12)**

- Public property listing page (SSG + ISR) — SEO-ready
- Property search + filter (SSR) — server-side cho SEO
- Property detail page — đầy đủ thông tin, gallery, map

---

### Module Organization (theo JD yêu cầu)

```
src/
├── modules/
│   ├── project/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── property/
│   ├── unit/
│   ├── agent/
│   ├── lead/
│   ├── booking/
│   ├── contract/
│   └── report/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── app/ (Next.js App Router)
```

---

### Senior-level Practices

- Server Components cho tất cả data-heavy pages
- Server Actions cho form mutations — không cần Route Handler
- Supabase RLS — Agent chỉ thấy lead được assign cho mình
- `"use cache"` — cache unit availability
- `after()` — send email sau khi booking confirmed
- Pino structured logging — mọi booking/contract transition có log
- Playwright E2E — test flow: tạo project → thêm unit → booking → contract
- Swagger auto-generate từ Zod schema
- Docker multi-stage build

---

### Tech Debt — Checklist Upgrade Sau

- [ ] Phase 2: Customer portal (search, filter, booking online)
- [ ] Tích hợp payment (VNPay, MoMo)
- [ ] Hợp đồng điện tử — chữ ký số
- [ ] Zalo OA integration — nhắc lịch thanh toán
- [ ] Map integration — Google Maps, vị trí dự án
- [ ] Virtual tour — 360° view
- [ ] CRM nâng cao — email sequence, nurturing
- [ ] Multi-currency (USD, SGD cho khách nước ngoài)
- [ ] Tích hợp vào Shell (P1) như Property Remote

---

### Biết Để Tìm Đọc Sau

**Next.js 16 nâng cao**

- PPR (Partial Prerendering) — static shell + dynamic content
- Turbopack — build optimization
- Next.js with Turborepo — monorepo
- Advanced caching strategies — `revalidateTag`, `revalidatePath`
- Edge Runtime vs Node.js Runtime

**Auth nâng cao**

- Multi-tenant auth — subdomain per company
- OAuth PKCE flow
- Refresh token rotation
- SSO với Google Workspace

**Database nâng cao**

- Prisma `$transaction` — atomic booking creation
- Full-text search — tìm kiếm property
- Database indexing strategy
- Supabase Edge Functions — serverless backend

---

## PROJECT 3 — Investment Portfolio Tracker

_Next.js 16 + Data Visualization + Monitoring Production-grade_

### Tại sao tech stack này

Đây là project bạn **build cho chính mình, có thể thương mại hóa**. Tech stack cần thiên về:

- **Data visualization phức tạp** — D3.js cho charts không library nào có sẵn
- **Performance với large dataset** — 50k+ transactions
- **Monitoring production-grade** — nếu deploy thật, phải monitor thật
- **Extensibility** — có thể add subscription/payment sau này

---

### Tech Stack

**Core**

- Next.js 16 App Router + TypeScript strict (branded types)
- MUI v6 + Tailwind

**State Management**

- Zustand (portfolio state, watchlist, user preferences)
- React Query v5 (API calls — transactions, prices)

**Data Visualization**

- D3.js v7 — 3 custom charts tự vẽ hoàn toàn
- Recharts — standard charts (line, bar, donut)
- TanStack Table v8 + TanStack Virtual — transaction table server-side

**Data Processing**

- Web Workers — tính toán portfolio, parse CSV, không block UI
- Zod strict schema — validate mọi financial data

**Auth + Payments (SaaS-ready)**

- NextAuth v5
- Stripe (free tier tracking, có thể add subscription sau)

**Backend**

- Prisma + Supabase PostgreSQL
- Next.js Route Handlers
- Resend — scheduled email report

**Monitoring Production-grade**

- Sentry — error tracking + performance tracing
- Posthog — analytics + session recording
- Pino — structured logging, mọi transaction có audit log
- OpenTelemetry cơ bản — trace FE → API → DB
- Vercel Analytics + Speed Insights

**Quality**

- TypeScript branded types — `AssetId`, `Price`, `Quantity`, `ReturnRate`
- Vitest + React Testing Library
- GitHub Actions CI/CD + Docker
- Vercel

---

### D3.js Custom Charts (tự vẽ hoàn toàn)

- **Candlestick chart** — lịch sử giá OHLC từng tài sản
- **Allocation heatmap** — tỷ trọng từng tài sản, màu theo performance
- **Waterfall chart** — đóng góp lãi/lỗ từng mã vào tổng danh mục

---

### Features — Theo Giai Đoạn

**Giai đoạn 1 — Core Portfolio (tuần 12-13)**

- Auth
- Quản lý tài sản — cổ phiếu VN, ETF, vàng, crypto, tiền mặt
- Nhập giao dịch — mua, bán, giá bình quân
- Portfolio overview — tổng tài sản, allocation, P&L
- Import CSV từ broker — Web Worker parse không block UI

**Giai đoạn 2 — Analytics (tuần 14)**

- Performance chart — giá trị portfolio theo thời gian
- Allocation donut — theo loại tài sản, theo ngành
- Transaction history — TanStack Table, server-side sort/filter/search
- Watchlist — theo dõi mã chưa mua, price alert
- Benchmark — so sánh với VN-Index

**Giai đoạn 3 — D3.js + Advanced (tuần 15)**

- 3 D3.js custom charts tự vẽ
- Monthly performance summary
- Export PDF report — gửi email tự động qua Resend
- Recurring investment tracking (DCA)

**Giai đoạn 4 — Monitoring + SaaS-ready (tuần 16)**

- Sentry performance tracing — track slow calculation
- Posthog session recording
- OpenTelemetry — trace request chain
- Vercel Speed Insights — Core Web Vitals thật
- Stripe integration cơ bản — chuẩn bị cho subscription

---

### Senior-level Practices

- D3.js 3 custom charts — 0 wrapper library
- TanStack Table server-side — 50k rows, không lag
- TypeScript branded types toàn bộ financial domain
- Web Workers — tất cả heavy calculation offline main thread
- Sentry performance tracing — track slow DB query
- Posthog session recording — xem user phân tích portfolio
- OpenTelemetry — trace FE → API → DB
- Optimistic UI toàn bộ mutation
- `"use cache"` — cache market data

---

### Tech Debt — Checklist Upgrade Sau

- [ ] Auto sync giá realtime từ SSI/DNSE API
- [ ] Thuế TNCN — tính tự động khi bán CK
- [ ] Dividend tracking — cổ tức tiền mặt + cổ phiếu
- [ ] Monte Carlo simulation — dự báo danh mục
- [ ] Risk metrics — Sharpe ratio, VaR, max drawdown
- [ ] Goal-based investing — đặt mục tiêu tài chính
- [ ] Family portfolio — quản lý nhiều thành viên
- [ ] Mobile app — React Native
- [ ] Stripe subscription — launch SaaS chính thức

---

### Biết Để Tìm Đọc Sau

**D3.js nâng cao**

- D3 transitions + brush + zoom — interactive time-series
- D3 force simulation — relationship graph
- Canvas rendering — million data points
- Observable Plot — modern D3 wrapper

**Financial domain nâng cao**

- Monte Carlo simulation
- Kelly Criterion — position sizing
- Modern Portfolio Theory — efficient frontier
- Black-Scholes — option pricing cơ bản

**Monitoring nâng cao**

- OpenTelemetry full — Jaeger/Zipkin visualization
- Grafana + Prometheus — self-hosted metrics
- SLO/SLI/SLA — define và monitor
- Error budget — burn rate alerting

**SaaS architecture**

- Stripe metered billing
- Usage-based pricing
- Feature flags — LaunchDarkly / Posthog
- Multi-tenant với schema isolation

---

## SKILL MAPPING TỔNG THỂ

| Skill                 | P1 Enterprise Admin | P2 Property Platform | P3 Investment Tracker |
| --------------------- | ------------------- | -------------------- | --------------------- |
| TypeScript strict     | ✅                  | ✅                   | ✅ branded types      |
| Redux Toolkit         | ✅ full             | —                    | —                     |
| RTK Query             | ✅                  | —                    | —                     |
| Redux Saga            | ✅ full patterns    | —                    | —                     |
| Zustand + Immer       | ✅                  | ✅                   | ✅                    |
| React Query v5        | ✅                  | ✅ deep              | ✅                    |
| React Router v6       | ✅                  | —                    | —                     |
| Custom hooks          | ✅ platform-level   | ✅ per module        | ✅                    |
| Module Federation     | ✅ Shell + Remote   | —                    | —                     |
| Framer Motion         | ✅                  | —                    | —                     |
| React Hook Form + Zod | ✅                  | ✅                   | ✅ strict             |
| Shadcn/UI + Radix     | ✅                  | —                    | —                     |
| Ant Design 6          | —                   | ✅                   | —                     |
| MUI v6                | —                   | —                    | ✅                    |
| TanStack Table        | ✅ client-side      | —                    | ✅ server-side        |
| TanStack Virtual      | ✅                  | —                    | ✅                    |
| Recharts + Nivo       | ✅                  | —                    | ✅                    |
| D3.js custom          | —                   | —                    | ✅ 3 charts           |
| Supabase Realtime     | ✅                  | —                    | —                     |
| Supabase RLS          | —                   | ✅                   | —                     |
| Prisma + Supabase     | ✅                  | ✅                   | ✅                    |
| NextAuth v5           | —                   | ✅ JWT+RBAC          | ✅                    |
| Next.js 16 deep       | —                   | ✅ full              | ✅                    |
| React 19              | —                   | ✅                   | —                     |
| Server Components     | —                   | ✅                   | ✅                    |
| Server Actions        | —                   | ✅                   | —                     |
| Swagger API docs      | —                   | ✅                   | —                     |
| Resend email          | —                   | ✅                   | ✅                    |
| Stripe                | —                   | —                    | ✅ cơ bản             |
| Web Workers           | ✅ export           | —                    | ✅ calculation        |
| Sentry                | ✅                  | ✅                   | ✅ tracing            |
| Posthog               | ✅                  | —                    | ✅ recording          |
| Pino logging          | —                   | ✅                   | ✅                    |
| OpenTelemetry         | —                   | —                    | ✅                    |
| Vercel Speed Insights | —                   | —                    | ✅                    |
| Testing + MSW         | ✅                  | ✅                   | ✅                    |
| Playwright E2E        | —                   | ✅                   | —                     |
| CI/CD + Docker        | ✅                  | ✅                   | ✅                    |
| Module Organization   | ✅                  | ✅ per module        | —                     |

---

## TIMELINE

| Tuần  | Việc                                       |
| ----- | ------------------------------------------ |
| 1–5   | P1 — Enterprise Admin Platform             |
| 6–12  | P2 — Property Platform Phase 1 + 2 preview |
| 13–17 | P3 — Investment Portfolio Tracker          |
| 18    | Polish cả 3, README, case study, CV        |
| 19–20 | Apply 🚀                                   |

---
