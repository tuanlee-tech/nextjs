# Engineering Playbook — 10: ADR Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Architecture Decision Records — 3 Projects  
> **Principle:** "Mỗi quyết định kiến trúc quan trọng phải có paper trail. Không chỉ để nhớ — để defend."

## 1. PHILOSOPHY

### 1.1 ADR Là Bằng Chứng Tư Duy

> **"Interviewer không hỏi 'bạn dùng thư viện gì'. Họ hỏi 'tại sao bạn chọn thư viện này, và tại sao không chọn cái kia'."**

### 1.2 Khi Nào Viết ADR

| Scenario                        | Viết ADR? | Example                                |
| ------------------------------- | --------- | -------------------------------------- |
| Chọn library/framework          | ✅ Yes    | Redux vs Zustand, D3.js vs Chart.js    |
| Chọn pattern                    | ✅ Yes    | Server Components vs Client Components |
| Chọn architecture               | ✅ Yes    | Module Federation vs Monolith          |
| Quyết định KHÔNG dùng công nghệ | ✅ Yes    | Tại sao KHÔNG dùng Kafka               |
| Refactor lớn                    | ✅ Yes    | Extract state machine từ component     |
| Chỉnh sửa nhỏ                   | ❌ No     | Đổi tên biến, extract helper function  |
| Bug fix                         | ❌ No     | Sửa logic, không đổi architecture      |

### 1.3 ADR ≠ Design Doc

| ADR                                      | Design Doc             |
| ---------------------------------------- | ---------------------- |
| Tại sao chọn X thay vì Y                 | Cách implement X       |
| 1-2 trang                                | 5-20 trang             |
| Decision + Context + Consequences        | Implementation detail  |
| Viết trước hoặc trong khi quyết định     | Viết sau khi implement |
| Audience: future self, team, interviewer | Audience: implementer  |

## 2. ADR TEMPLATE

```markdown
# ADR-[XXX]: [Short Title of Decision]

## Status

- Proposed / Accepted / Deprecated / Superseded by ADR-YYY

## Context

[What is the issue that we're seeing that is motivating this decision or change?]

### Problem Statement

[1-2 câu mô tả bài toán]

### Constraints

- [Constraint 1: technical, business, team, timeline]
- [Constraint 2]
- [Constraint 3]

## Decision

[What is the change that we're proposing or have agreed to implement?]

### Chosen Option: [Option Name]

### Rationale

[Tại sao chọn option này — 3-5 bullet points]

## Alternatives Considered

### Option A: [Name]

- **Pros:** [List]
- **Cons:** [List]
- **Verdict:** Rejected — [Why]

### Option B: [Name]

- **Pros:** [List]
- **Cons:** [List]
- **Verdict:** Rejected — [Why]

## Consequences

### Positive

- [Benefit 1]
- [Benefit 2]

### Negative

- [Trade-off 1]
- [Trade-off 2]

### Risks

- [Risk 1] → Mitigation: [How]
- [Risk 2] → Mitigation: [How]

## Implementation Notes

[Link to PR, relevant code, or brief implementation notes]

## References

- [Link to issue, PR, discussion]
- [Link to docs, articles]
- [Link to related ADR]
```

## 3. ADR EXAMPLES

### 3.1 ADR-001: Redux Saga Scope (P1)

```markdown
# ADR-001: Redux Saga Giới Hạn Phạm Vi Order Pipeline

## Status

Accepted

## Context

### Problem Statement

Enterprise Admin Platform cần handle order lifecycle với 5 status transitions,
mỗi transition có validation, side effects (email, notification), và retry logic.
Cần quyết định state management cho async flows.

### Constraints

- Team: 1 developer (solo)
- Timeline: 3 tháng cho P1
- Stack: React 18, Redux Toolkit, RTK Query đã chọn
- Không cần real-time collaboration

## Decision

### Chosen Option: Redux Saga CHỈ cho Order Pipeline

### Rationale

1. **Order pipeline cần orchestration phức tạp:** multi-step, retry, cancellation, parallel
2. **RTK Query đủ cho simple CRUD:** products, customers, inventory — không cần Saga overhead
3. **Giới hạn scope = giảm complexity:** 1 file saga thay vì saga cho mọi API call
4. **Team size:** 1 người, không cần Saga's testability benefit cho mọi flow

## Alternatives Considered

### Option A: Redux Saga cho toàn bộ async flow

- **Pros:** Consistent pattern, testability, debugging với Redux DevTools
- **Cons:** Boilerplate nhiều cho simple CRUD, overkill cho 1 người, learning curve
- **Verdict:** Rejected — Violates Bloat Filter: không có bài toán cụ thể đòi hỏi

### Option B: RTK Query + thunks cho mọi thứ

- **Pros:** Ít boilerplate, consistent với RTK Query
- **Cons:** Không handle complex orchestration (retry, cancellation, race) tốt
- **Verdict:** Rejected — Order pipeline cần orchestration, thunks không đủ

### Option C: React Query (thay RTK Query)

- **Pros:** Modern, caching tốt, devtools
- **Cons:** Đã chọn Redux ecosystem, mix 2 libraries = confusion
- **Verdict:** Rejected — Đã quyết định RTK Query ở ADR-XXX, không đổi giữa chừng

## Consequences

### Positive

- Order pipeline testable, debuggable
- Simple CRUD vẫn lightweight
- Clear boundary: Saga = complex flow only

### Negative

- 2 patterns trong 1 codebase (Saga + RTK Query)
- New contributor cần học cả 2

### Risks

- Scope creep: Saga dùng cho flow mới → Mitigation: Code review checklist #1 (Architecture)
- Maintainability: 1 file saga lớn → Mitigation: Tách thành watcher + worker per flow

## Implementation Notes

- `modules/commerce/services/order.saga.ts` — Saga cho order pipeline
- `modules/commerce/services/order.api.ts` — RTK Query cho order CRUD
- Code review: bắt buộc check "có cần Saga không?" cho mọi async flow mới

## References

- Issue: EP-012 — Order Pipeline Implementation
- PR: #34 — Add Redux Saga for order transitions
- Related: ADR-003 — Tại sao KHÔNG dùng React Query song song với RTK Query
```

### 3.2 ADR-002: Server Components vs Client Components (P2)

```markdown
# ADR-002: Server Components cho Data-Heavy Pages

## Status

Accepted

## Context

### Problem Statement

Property Platform cần render data-heavy pages (property list, project detail)
với SEO và performance tốt. Cần quyết định Server Component vs Client Component
strategy.

### Constraints

- Next.js 16 App Router
- SEO quan trọng cho public pages (Phase 2)
- Data từ Supabase/Prisma
- Interactive elements cần ở một số phần

## Decision

### Chosen Option: Server Components mặc định, Client Components cho interactivity

### Rationale

1. **Data fetching ở server = zero JS bundle:** Property list không cần hydration
2. **SEO tự nhiên:** HTML đầy đủ từ server, không cần SSR config phức tạp
3. **Database query trực tiếp:** Không cần API layer cho read operations
4. **Progressive enhancement:** Interactive parts (filter, modal) = Client Component

## Alternatives Considered

### Option A: Client Components cho mọi thứ (Pages Router style)

- **Pros:** Familiar pattern, dễ debug, ecosystem mature
- **Cons:** Bundle lớn, hydration cost, SEO cần extra work
- **Verdict:** Rejected — App Router là future Next.js, không dùng legacy pattern

### Option B: Server Components cho mọi thứ

- **Pros:** Minimal JS, tốt nhất cho performance
- **Cons:** Không thể dùng hooks, event listeners, browser APIs
- **Verdict:** Rejected — Cần interactivity ở nhiều phần (forms, filters, maps)

## Consequences

### Positive

- Performance tốt nhất có thể
- SEO out-of-the-box
- Less client-side JavaScript

### Negative

- Mental model mới cần học (Server vs Client boundary)
- Debugging phức tạp hơn (2 environments)
- Third-party components cần check RSC compatibility

### Risks

- Accidentally use browser API in Server Component → Mitigation: ESLint rule, code review
- Data fetching duplication → Mitigation: Shared fetch functions, cache strategy

## Implementation Notes

- `app/(dashboard)/projects/page.tsx` — Server Component, fetch data
- `app/(dashboard)/projects/components/ProjectFilter.tsx` — Client Component ('use client')
- `shared/components/ui/button.tsx` — Client Component (interactivity)

## References

- Next.js Docs: Server Components
- Issue: EP-023 — Project List Page
- PR: #56 — Implement Server Components for dashboard
```

### 3.3 ADR-003: D3.js cho Custom Charts (P3)

```markdown
# ADR-003: D3.js cho 3 Custom Charts

## Status

Accepted

## Context

### Problem Statement

Investment Portfolio Tracker cần 3 custom visualization:

1. Candlestick chart — OHLC price history
2. Allocation heatmap — asset performance by weight
3. Waterfall chart — contribution to total return

Cần quyết định: D3.js từ đầu, hay wrapper library (Recharts, Nivo)?

### Constraints

- Proof of deep visualization skill (portfolio goal)
- Performance: render < 16ms/frame cho 50k data points
- Customization: charts không có trong thư viện có sẵn
- Timeline: 3 tháng cho P3

## Decision

### Chosen Option: D3.js v7 từ đầu cho 3 custom charts, Recharts cho standard charts

### Rationale

1. **Custom charts không có trong wrapper libraries:** Candlestick, waterfall cần custom SVG
2. **Performance control:** Canvas rendering cho 50k points, không bị abstraction overhead
3. **Portfolio goal:** "Proof of deep visualization skill" — D3.js from scratch = strongest signal
4. **Recharts cho standard:** Line, bar, donut = không cần reinvent

## Alternatives Considered

### Option A: Recharts cho tất cả

- **Pros:** Nhanh, familiar, good enough cho 80% use cases
- **Cons:** Không customizable đủ cho candlestick/waterfall, performance không optimal
- **Verdict:** Rejected — Không đạt portfolio goal (proof of deep skill)

### Option B: Nivo

- **Pros:** Beautiful, built on D3, nhiều chart types
- **Cons:** Không có candlestick, waterfall. Bundle lớn (~200KB)
- **Verdict:** Rejected — Không có chart types cần thiết, bundle penalty

### Option C: Chart.js

- **Pros:** Simple API, good performance
- **Cons:** Canvas-based, khó customize deeply. Không có candlestick built-in
- **Verdict:** Rejected — Không đủ customizable, không phải D3.js (portfolio goal)

### Option D: D3.js cho tất cả (cả standard charts)

- **Pros:** Consistent, full control
- **Cons:** Time cost cao, reinvent wheel cho line/bar charts
- **Verdict:** Rejected — Không cần thiết, Recharts đủ tốt cho standard

## Consequences

### Positive

- 3 custom charts = strong portfolio signal
- Full performance control
- Deep D3.js knowledge

### Negative

- Learning curve cao (D3.js v7 API)
- Code nhiều hơn wrapper libraries
- Maintenance cost cao hơn

### Risks

- Time overrun → Mitigation: Start với 1 chart, iterate. Recharts fallback nếu delay
- Performance không đạt < 16ms → Mitigation: Canvas rendering, data decimation
- Mobile rendering → Mitigation: Responsive SVG viewBox, touch event handling

## Implementation Notes

- `modules/analytics/components/CandlestickChart/` — D3.js + SVG
- `modules/analytics/components/AllocationHeatmap/` — D3.js + Canvas
- `modules/analytics/components/WaterfallChart/` — D3.js + SVG
- `shared/lib/d3/` — Shared scales, axes utilities
- `shared/components/charts/ChartContainer/` — Responsive wrapper, loading, error

## References

- D3.js v7 Documentation
- Issue: EP-089 — Custom Charts Implementation
- PR: #112 — Add D3.js candlestick chart
- Related: ADR-004 — Canvas vs SVG Rendering
```

## 4. ADR CATALOG (3 Projects)

### 4.1 P1 — Enterprise Admin Platform

| ADR     | Title                                                  | Status   |
| ------- | ------------------------------------------------------ | -------- |
| ADR-001 | Redux Saga giới hạn phạm vi Order Pipeline             | Accepted |
| ADR-002 | Tại sao KHÔNG dùng Module Federation ở giai đoạn này   | Accepted |
| ADR-003 | Tại sao KHÔNG dùng React Query song song với RTK Query | Accepted |
| ADR-004 | Tại sao Shadcn/UI thay vì MUI cho platform             | Accepted |
| ADR-005 | Branching Strategy — Git Flow Lite                     | Accepted |

### 4.2 P2 — Property Platform

| ADR     | Title                                               | Status   |
| ------- | --------------------------------------------------- | -------- |
| ADR-001 | Tại sao Server Components thay vì Client Components | Accepted |
| ADR-002 | Tại sao Server Actions thay vì Route Handlers       | Accepted |
| ADR-003 | Tại sao RLS thay vì kiểm tra permission ở API layer | Accepted |
| ADR-004 | Tại sao React Query thay vì Redux ở P2              | Accepted |
| ADR-005 | Tại sao NextAuth thay vì Auth0                      | Accepted |

### 4.3 P3 — Investment Portfolio Tracker

| ADR     | Title                                                       | Status   |
| ------- | ----------------------------------------------------------- | -------- |
| ADR-001 | Tại sao D3.js thay vì Chart.js / Recharts cho custom charts | Accepted |
| ADR-002 | Tại sao TanStack Table thay vì AG Grid                      | Accepted |
| ADR-003 | Tại sao Web Workers cho financial calculation               | Accepted |
| ADR-004 | Tại sao branded types cho financial domain                  | Accepted |
| ADR-005 | Tại sao KHÔNG dùng OpenTelemetry ở giai đoạn này            | Accepted |

## 5. ADR WORKFLOW

### 5.1 Lifecycle

```
Identify Decision Need
    ↓
Research (1-2 hours)
    ↓
Draft ADR (30 min)
    ↓
Self-Review (15 min)
    ↓
Implement
    ↓
Update ADR nếu reality khác dự kiến
    ↓
Review trong Sprint Retrospective
```

### 5.2 Time Box

| Phase     | Time      | Rule                                         |
| --------- | --------- | -------------------------------------------- |
| Research  | 1-2 hours | Đọc docs, so sánh options, benchmark nếu cần |
| Draft ADR | 30 min    | Không perfectionism — capture decision       |
| Decision  | 15 min    | Bloat Filter: 3 câu hỏi                      |
| Total     | < 3 hours | Không spend quá lâu — decision > perfect doc |

### 5.3 When to Update ADR

| Scenario                    | Action                                   |
| --------------------------- | ---------------------------------------- |
| Decision thay đổi           | Update status → Deprecated, link new ADR |
| Implementation khác dự kiến | Update Implementation Notes              |
| New alternative discovered  | Add vào Alternatives Considered          |
| Risk xảy ra                 | Update Risks + Mitigation                |

## 6. INTERVIEW USAGE

### 6.1 Answering "Tell Me About a Hard Technical Decision"

> "Ở Project 1, tôi phải quyết định có nên dùng Redux Saga cho toàn bộ async flow hay không. Tôi viết ADR-001 để capture quyết định.
>
> Context: Order pipeline cần orchestrate 5 status transitions với retry và cancellation. Nhưng simple CRUD (products, customers) không cần complexity đó.
>
> Tôi cân nhắc 3 options: Saga cho mọi thứ, thunks cho mọi thứ, hoặc hybrid. Tôi chọn hybrid — Saga chỉ cho Order Pipeline, RTK Query cho simple CRUD.
>
> Trade-off: 2 patterns trong codebase, nhưng giảm boilerplate 70% so với Saga everywhere. Risk là scope creep — nên tôi thêm code review checklist item 'có cần Saga không?'
>
> Kết quả: Order pipeline testable, simple CRUD lightweight. ADR giúp tôi defend quyết định và giữ team consistent."

### 6.2 Answering "Why NOT X?"

> "Tôi viết ADR-002: Tại sao KHÔNG dùng Module Federation ở giai đoạn này.
>
> Module Federation rất hot, nhưng Bloat Filter hỏi: 'Bài toán cụ thể nào đòi hỏi?' — 1 người, 1 remote không tạo ra bài toán thật. Chi phí setup > payoff.
>
> Tôi vẫn viết ADR để show tôi hiểu công nghệ, nhưng cũng biết khi nào KHÔNG dùng. Đó là judgment."

## 7. REVISION HISTORY

| Version | Date       | Changes                                                       |
| ------- | ---------- | ------------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — ADR template, 3 examples, catalog, workflow |

---

> **"ADR không phải để khoe bạn biết nhiều công nghệ. Nó là proof bạn có thể đưa ra quyết định có lý do, chấp nhận trade-off, và defend khi bị challenge."**

---

Tóm tắt:

1. **Philosophy** — ADR là bằng chứng tư duy, khi nào viết, ADR vs Design Doc
2. **ADR Template** — Complete template với 8 sections: Status, Context, Decision, Alternatives Considered, Consequences, Implementation Notes, References
3. **3 Examples** — ADR-001 Redux Saga (P1), ADR-002 Server Components (P2), ADR-003 D3.js (P3) — mỗi cái với đầy đủ context, 3-4 alternatives, trade-offs
4. **ADR Catalog** — 15 ADRs cho cả 3 project
5. **ADR Workflow** — Lifecycle, time box (< 3 hours), when to update
6. **Interview Usage** — 2 example answers: hard technical decision + why NOT X
