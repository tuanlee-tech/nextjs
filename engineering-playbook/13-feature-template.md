# Engineering Playbook — 13: Feature Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Feature spec format — 3 Projects  
> **Principle:** "Feature spec không phải để bureaucracy. Nó là contract giữa Product Owner và Developer — để không phải hỏi lại 'cái này làm gì?'"

## 1. PHILOSOPHY

### 1.1 Spec Là Contract

> **"Nếu developer implement đúng spec mà user không hài lòng — spec sai, không phải developer sai."**

### 1.2 Good vs Bad Spec

| Bad Spec                    | Good Spec                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| "Làm table quản lý product" | "Product table: sort by 4 columns, filter by category/status, paginate 20/page, bulk select + delete, export CSV" |
| "Thêm auth"                 | "Auth: email/password + Google OAuth, JWT with refresh rotation, RBAC 4 roles, route guards"                      |
| "Làm chart đẹp"             | "3 D3.js custom charts: candlestick (OHLC), allocation heatmap, waterfall. Render < 16ms/frame, 50k data points"  |

## 2. FEATURE TEMPLATE

````markdown
# [FEATURE-ID]: [Feature Name]

## Metadata

| Field         | Value                                        |
| ------------- | -------------------------------------------- |
| **ID**        | [PROJECT]-F-[NUMBER] (e.g., EP-F-006)        |
| **Project**   | [P1/P2/P3]                                   |
| **Epic**      | [EPIC-ID]                                    |
| **Priority**  | [P0-Critical / P1-High / P2-Medium / P3-Low] |
| **Estimate**  | [X hours / X story points]                   |
| **Sprint**    | [Sprint X]                                   |
| **Owner**     | [Product Owner — you]                        |
| **Developer** | [Developer — you / AI-assisted]              |
| **Status**    | [Backlog / Ready / In Progress / Done]       |

---

## 1. Problem Statement

### User Story

As a [user type], I want [goal], so that [benefit].

### Context

[Why this feature? What problem does it solve? Business value?]

### Current State

[What exists now? What's broken or missing?]

### Desired State

[What should exist after this feature?]

---

## 2. Acceptance Criteria

### Must Have (P0) — Feature không Done nếu thiếu

- [ ] [Criteria 1 — specific, testable, measurable]
- [ ] [Criteria 2 — specific, testable, measurable]
- [ ] [Criteria 3 — specific, testable, measurable]

### Should Have (P1) — Làm nếu có thời gian

- [ ] [Criteria 4]
- [ ] [Criteria 5]

### Nice to Have (P2) — Future iteration

- [ ] [Criteria 6]
- [ ] [Criteria 7]

---

## 3. User Flow

### Happy Path

1. [Step 1 — user action]
2. [Step 2 — system response]
3. [Step 3 — user action]
4. [Step 4 — expected result]

### Alternative Flows

- **Flow A:** [Alternative scenario]
  1. [Step 1]
  2. [Step 2]

### Edge Cases

- [Edge case 1]: [Expected behavior]
- [Edge case 2]: [Expected behavior]

---

## 4. UI/UX

### Mockups / Wireframes

[Link to Figma, screenshot, hoặc ASCII sketch]

### Key Screens

| Screen     | Description      | States                           |
| ---------- | ---------------- | -------------------------------- |
| [Screen 1] | [What user sees] | [Loading, Empty, Error, Success] |
| [Screen 2] | [What user sees] | [Loading, Empty, Error, Success] |

### Interactions

- [Interaction 1]: [Trigger → Action → Feedback]
- [Interaction 2]: [Trigger → Action → Feedback]

### Responsive Behavior

| Breakpoint          | Layout        |
| ------------------- | ------------- |
| Mobile (< 640px)    | [Description] |
| Tablet (640-1024px) | [Description] |
| Desktop (> 1024px)  | [Description] |

---

## 5. Technical Specification

### Architecture

[High-level approach, link to ADR if needed]

### Data Model

```typescript
// Types, interfaces, Zod schemas
interface FeatureModel {
  id: string;
  // ...
}
```

### API Specification

| Endpoint   | Method | Request   | Response  | Auth     |
| ---------- | ------ | --------- | --------- | -------- |
| `/api/...` | GET    | `{ ... }` | `{ ... }` | Required |

### State Management

| State Type   | Tool                      | Location                  |
| ------------ | ------------------------- | ------------------------- |
| Server state | [RTK Query / React Query] | `modules/.../services/`   |
| UI state     | [Zustand / useState]      | `modules/.../components/` |

### Components

| Component     | Type            | Props     | Description    |
| ------------- | --------------- | --------- | -------------- |
| [Component 1] | Server / Client | `{ ... }` | [What it does] |
| [Component 2] | Server / Client | `{ ... }` | [What it does] |

### Performance Requirements

| Metric     | Target   | Measurement      |
| ---------- | -------- | ---------------- |
| [Metric 1] | [Target] | [How to measure] |

---

## 6. Security & Permissions

### RBAC

| Role    | Create | Read | Update | Delete |
| ------- | ------ | ---- | ------ | ------ |
| Admin   | ✅     | ✅   | ✅     | ✅     |
| Manager | ❌     | ✅   | ✅     | ❌     |
| Staff   | ❌     | ✅   | ❌     | ❌     |

### Data Validation

- [Validation rule 1]
- [Validation rule 2]

---

## 7. Testing Strategy

### Unit Tests

- [ ] [What to test — pure functions, reducers, validators]

### Integration Tests

- [ ] [What to test — component interaction, API mocking]

### E2E Tests

- [ ] [What to test — full user flow]

### Manual Tests

- [ ] [What to test — visual, responsive, edge cases]

---

## 8. Out of Scope

- [ ] [What is NOT included — prevents scope creep]
- [ ] [What is NOT included]

---

## 9. Dependencies

### Blocked By

- [TASK-ID]: [Description]

### Blocks

- [TASK-ID]: [Description]

---

## 10. Risks & Mitigations

| Risk     | Impact       | Likelihood   | Mitigation        |
| -------- | ------------ | ------------ | ----------------- |
| [Risk 1] | High/Med/Low | High/Med/Low | [How to mitigate] |
| [Risk 2] | High/Med/Low | High/Med/Low | [How to mitigate] |

---

## 11. Success Metrics

| Metric     | Target   | Measurement |
| ---------- | -------- | ----------- |
| [Metric 1] | [Target] | [How]       |
| [Metric 2] | [Target] | [How]       |

---

## 12. Tasks Breakdown

| Task ID  | Description   | Estimate | Dependencies |
| -------- | ------------- | -------- | ------------ |
| [TASK-1] | [Description] | [Xh]     | None         |
| [TASK-2] | [Description] | [Xh]     | [TASK-1]     |
| [TASK-3] | [Description] | [Xh]     | [TASK-1]     |

---

## 13. Notes

- [Open question 1]
- [Open question 2]
- [Decision log]
````

## 3. EXAMPLES

### 3.1 P1 — Product Table Feature

````markdown
# EP-F-006: Product Table with Sorting, Filtering, Pagination

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| **ID**        | EP-F-006                       |
| **Project**   | P1 — Enterprise Admin Platform |
| **Epic**      | EP-003: Commerce Module        |
| **Priority**  | P1-High                        |
| **Estimate**  | 16 hours (4 sub-tasks × 4h)    |
| **Sprint**    | Sprint 3                       |
| **Owner**     | [Your Name]                    |
| **Developer** | [Your Name] + AI (Claude Code) |
| **Status**    | Done                           |

---

## 1. Problem Statement

### User Story

As an Admin, I want to view and manage products in a sortable, filterable table,
so that I can quickly find and update inventory.

### Context

- Current: No product management UI
- Products: > 10k SKUs, multiple categories
- Need: Sort, filter, paginate, bulk actions

### Current State

No product table exists. Admin cannot view product list.

### Desired State

Full-featured product table with sorting, filtering, pagination, bulk actions.

---

## 2. Acceptance Criteria

### Must Have (P0)

- [x] Display table with columns: name, SKU, price, stock, status, category, actions
- [x] Sort by any column (asc/desc)
- [x] Filter by category dropdown, status toggle, price range
- [x] Search by name/SKU (debounced 300ms)
- [x] Pagination: 20 items/page, show total count + page numbers
- [x] Bulk select with checkbox + bulk delete
- [x] Responsive: horizontal scroll mobile, full desktop
- [x] Loading skeleton state
- [x] Empty state when no products
- [x] Error state with retry button

### Should Have (P1)

- [x] Export selected rows to CSV (Web Worker)
- [x] Inline edit for price/stock
- [ ] Column resize/reorder

### Nice to Have (P2)

- [ ] Advanced filter: saved filters
- [ ] Column visibility toggle

---

## 3. User Flow

### Happy Path

1. Admin navigates to Commerce → Products
2. System shows loading skeleton
3. System displays product table (20 items, page 1)
4. Admin clicks "Price" header → sorts ascending
5. Admin clicks "Price" header again → sorts descending
6. Admin selects "Electronics" from category filter → table updates
7. Admin types "iPhone" in search → debounced 300ms → table filters
8. Admin checks 3 products → clicks "Delete Selected" → confirm dialog → deleted

### Alternative Flows

- **No products:** Show empty state with "Add Product" CTA
- **API error:** Show error banner with retry button
- **No search results:** Show "No products match your search" with clear filters

### Edge Cases

- 10k+ products: Virtual scroll, server-side pagination
- All products deleted: Empty state
- Network offline: Cached data + offline indicator

---

## 4. UI/UX

### Mockups

[Link: Figma — Product Table Design]

### Key Screens

| Screen          | Description          | States                        |
| --------------- | -------------------- | ----------------------------- |
| Product Table   | Main view            | Loading, Empty, Error, Data   |
| Filter Bar      | Above table          | Active filters, clear all     |
| Bulk Action Bar | Appears on selection | Delete, export, status update |

### Interactions

- Sort: Click header → immediate sort (client-side) or loading (server-side)
- Filter: Select dropdown → debounced 300ms → table updates
- Search: Type → debounced 300ms → API call → table updates
- Bulk: Checkbox → action bar appears → action → confirm → toast

### Responsive Behavior

| Breakpoint          | Layout                                        |
| ------------------- | --------------------------------------------- |
| Mobile (< 640px)    | Card list, horizontal scroll, stacked filters |
| Tablet (640-1024px) | Table with horizontal scroll, sidebar filters |
| Desktop (> 1024px)  | Full table, inline filters, sticky header     |

---

## 5. Technical Specification

### Architecture

- TanStack Table v8: Headless table logic (sorting, filtering, pagination)
- TanStack Virtual: Handle > 10k rows without lag
- RTK Query: Server state with caching
- Zustand: UI state (filters, selection)

### Data Model

```typescript
interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductFilters {
  categoryId?: string;
  status?: Product['status'];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  sku: z.string(),
  price: z.number().positive(),
  stock: z.number().int().min(0),
  status: z.enum(['active', 'inactive', 'discontinued']),
  categoryId: z.string(),
});
```

### API Specification

| Endpoint                    | Method | Request                                 | Response           | Auth          |
| --------------------------- | ------ | --------------------------------------- | ------------------ | ------------- |
| `/api/products`             | GET    | `{ page, limit, sort, filter, search }` | `{ data, meta }`   | Admin/Manager |
| `/api/products/bulk-delete` | POST   | `{ ids: string[] }`                     | `{ deletedCount }` | Admin         |
| `/api/products/export`      | POST   | `{ ids?: string[] }`                    | CSV blob           | Admin         |

### State Management

| State Type        | Tool      | Location                                            |
| ----------------- | --------- | --------------------------------------------------- |
| Products (server) | RTK Query | `modules/commerce/services/product.api.ts`          |
| Filters (UI)      | Zustand   | `modules/commerce/stores/productFilter.store.ts`    |
| Selection (UI)    | Zustand   | `modules/commerce/stores/productSelection.store.ts` |

### Components

| Component          | Type   | Props                   | Description             |
| ------------------ | ------ | ----------------------- | ----------------------- |
| ProductTable       | Server | `{ initialData? }`      | Main table container    |
| ProductTableClient | Client | `{ data, meta }`        | Interactive table logic |
| ProductFilterBar   | Client | `{ filters, onChange }` | Filter inputs           |
| ProductBulkActions | Client | `{ selectedIds }`       | Bulk action buttons     |
| ProductSkeleton    | Server | `{ count }`             | Loading state           |

### Performance Requirements

| Metric          | Target  | Measurement             |
| --------------- | ------- | ----------------------- |
| Initial render  | < 100ms | Lighthouse              |
| Sort response   | < 50ms  | React DevTools Profiler |
| Filter response | < 100ms | Network + render        |
| 10k rows scroll | 60 FPS  | Chrome DevTools FPS     |
| Memory          | < 100MB | Chrome DevTools Memory  |

---

## 6. Security & Permissions

### RBAC

| Role    | Create | Read | Update | Delete | Export |
| ------- | ------ | ---- | ------ | ------ | ------ |
| Admin   | ✅     | ✅   | ✅     | ✅     | ✅     |
| Manager | ❌     | ✅   | ✅     | ❌     | ✅     |
| Staff   | ❌     | ✅   | ❌     | ❌     | ❌     |
| Viewer  | ❌     | ✅   | ❌     | ❌     | ❌     |

### Data Validation

- Price: positive number, max 999,999,999
- Stock: non-negative integer
- SKU: unique, alphanumeric, 3-50 chars

---

## 7. Testing Strategy

### Unit Tests

- [x] Sorting logic (asc/desc, multi-column)
- [x] Filtering logic (AND/OR, edge cases)
- [x] Pagination math (page count, boundary)
- [x] Selection logic (all, none, partial)

### Integration Tests

- [x] Table render with mock data
- [x] Filter interaction (select → table update)
- [x] Sort interaction (click → order change)
- [x] Bulk action (select → delete → confirmation)

### E2E Tests

- [ ] Full flow: login → navigate → filter → sort → bulk delete (Playwright — P2 only)

### Manual Tests

- [x] Responsive: mobile, tablet, desktop
- [x] 10k rows: performance, scroll
- [x] Accessibility: keyboard nav, screen reader

---

## 8. Out of Scope

- [ ] Product creation (EP-F-007)
- [ ] Product detail page (EP-F-008)
- [ ] Image upload in table
- [ ] Real-time updates (WebSocket)
- [ ] Advanced analytics on table

---

## 9. Dependencies

### Blocked By

- EP-T-003: Setup TanStack Table (done)
- EP-F-005: Category management (done)

### Blocks

- EP-F-007: Product creation (needs table to navigate)
- EP-F-008: Product detail (needs table to navigate)

---

## 10. Risks & Mitigations

| Risk                            | Impact | Likelihood | Mitigation                                         |
| ------------------------------- | ------ | ---------- | -------------------------------------------------- |
| TanStack Virtual learning curve | Medium | Medium     | Allocate buffer time, docs + examples              |
| 10k rows performance            | High   | Medium     | Virtual scroll, server pagination, benchmark early |
| Filter API slow                 | High   | Low        | Debounce, optimize query, add DB indexes           |

---

## 11. Success Metrics

| Metric                  | Target  | Actual |
| ----------------------- | ------- | ------ |
| Lighthouse Performance  | > 95    | 97     |
| Table render (10k rows) | < 100ms | 85ms   |
| User task completion    | > 90%   | TBD    |
| Bug reports (1 month)   | < 2     | TBD    |

---

## 12. Tasks Breakdown

| Task ID    | Description                          | Estimate | Dependencies |
| ---------- | ------------------------------------ | -------- | ------------ |
| EP-F-006-1 | Setup TanStack Table + basic columns | 4h       | EP-T-003     |
| EP-F-006-2 | Implement sorting + pagination       | 4h       | EP-F-006-1   |
| EP-F-006-3 | Implement filtering + search         | 4h       | EP-F-006-1   |
| EP-F-006-4 | Add bulk actions + export            | 4h       | EP-F-006-2   |

---

## 13. Notes

- **Decision:** Dùng server-side pagination từ đầu (không client-side) vì > 10k records
- **Decision:** Export CSV dùng Web Worker để không block UI
- **Open:** Có cần saved filters không? → P2 (Nice to Have)
````

### 3.2 P3 — Candlestick Chart Feature

````markdown
# IP-F-012: D3.js Candlestick Chart

## Metadata

| Field         | Value                             |
| ------------- | --------------------------------- |
| **ID**        | IP-F-012                          |
| **Project**   | P3 — Investment Portfolio Tracker |
| **Epic**      | IP-004: Analytics & Visualization |
| **Priority**  | P1-High                           |
| **Estimate**  | 12 hours                          |
| **Sprint**    | Sprint 11                         |
| **Owner**     | [Your Name]                       |
| **Developer** | [Your Name] + AI (Claude Code)    |
| **Status**    | Done                              |

---

## 1. Problem Statement

### User Story

As an investor, I want to view OHLC price history in candlestick format,
so that I can analyze price patterns and make trading decisions.

### Context

- Current: Only line chart available
- Need: Candlestick for technical analysis (open, high, low, close)
- Data: Daily OHLC from broker API or CSV import

---

## 2. Acceptance Criteria

### Must Have (P0)

- [x] Display candlestick chart with OHLC data
- [x] Green candle = close > open, Red candle = close < open
- [x] Hover tooltip: show date, O, H, L, C, volume
- [x] Timeframe selection: 1D, 1W, 1M, 3M, 1Y, All
- [x] Zoom and pan
- [x] Responsive SVG
- [x] Loading state
- [x] Error state (data unavailable)

### Should Have (P1)

- [x] Volume bars below candlesticks
- [x] Crosshair with price axis label
- [x] SMA/EMA overlay toggle

### Nice to Have (P2)

- [ ] Drawing tools (trendline, support/resistance)
- [ ] Pattern recognition

---

## 3. User Flow

### Happy Path

1. User navigates to Portfolio → Asset Detail
2. Selects "Candlestick" tab
3. Chart loads with default timeframe (1M)
4. User hovers over candle → tooltip appears
5. User selects "1Y" timeframe → chart updates
6. User zooms in with mouse wheel → detail increases

---

## 4. UI/UX

### Mockups

[Link: Figma — Candlestick Chart]

### Responsive Behavior

| Breakpoint | Behavior                             |
| ---------- | ------------------------------------ |
| Mobile     | Simplified: no zoom, tap for tooltip |
| Desktop    | Full: zoom, pan, crosshair, volume   |

---

## 5. Technical Specification

### Architecture

- D3.js v7 from scratch (ADR-001)
- SVG rendering (not Canvas — simpler for this chart)
- Custom scales, axes, candle rendering

### Data Model

```typescript
interface OHLCData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Branded types
type Price = Branded<number, 'Price'>;
type Volume = Branded<number, 'Volume'>;
```

### Performance Requirements

| Metric                | Target                | Measurement         |
| --------------------- | --------------------- | ------------------- |
| Render time           | < 16ms/frame          | Chrome DevTools     |
| 1Y data (252 candles) | < 50ms initial render | Manual              |
| Zoom/pan              | 60 FPS                | Chrome DevTools FPS |

---

## 6. Security & Permissions

- Data: User's own portfolio data only
- No sensitive data in chart (public prices)

---

## 7. Testing Strategy

### Unit Tests

- [x] Candle color logic (green/red)
- [x] Scale domain calculation
- [x] Tooltip position calculation

### Integration Tests

- [x] Chart render with mock data
- [x] Timeframe change → data update

### Manual Tests

- [x] Responsive: resize window
- [x] Performance: 5Y data (1260 candles)
- [x] Accessibility: keyboard navigation

---

## 8. Out of Scope

- Real-time WebSocket updates
- Drawing tools
- Pattern recognition
- Multiple assets overlay

---

## 9. Dependencies

### Blocked By

- IP-T-005: Setup D3.js (done)
- IP-F-011: Asset detail page (done)

---

## 10. Risks & Mitigations

| Risk                     | Impact | Likelihood | Mitigation                           |
| ------------------------ | ------ | ---------- | ------------------------------------ |
| D3.js learning curve     | Medium | High       | Buffer time, docs, examples          |
| Performance with 5Y data | High   | Medium     | Data decimation, Canvas fallback     |
| Mobile touch interaction | Medium | Medium     | Simplify interaction, test on device |

---

## 11. Success Metrics

| Metric                 | Target | Actual |
| ---------------------- | ------ | ------ |
| Render time            | < 16ms | 12ms   |
| Lighthouse Performance | > 95   | 96     |
| User satisfaction      | > 4/5  | TBD    |

---

## 12. Tasks Breakdown

| Task ID    | Description                        | Estimate |
| ---------- | ---------------------------------- | -------- |
| IP-F-012-1 | Setup D3.js scales and axes        | 3h       |
| IP-F-012-2 | Render candlesticks (rect + wicks) | 3h       |
| IP-F-012-3 | Add tooltip + crosshair            | 3h       |
| IP-F-012-4 | Add zoom, pan, timeframe           | 3h       |

---

## 13. Notes

- **Decision:** SVG thay vì Canvas — đủ performance cho < 1000 candles, dễ tooltip
- **AI Collaboration:** Claude Code suggest Canvas cho performance, tôi chọn SVG vì simpler API và đủ cho use case. Validation: test với 5Y data, SVG vẫn < 16ms.
````

## 4. FEATURE VS TASK

| Feature              | Task                  |
| -------------------- | --------------------- |
| "What" và "Why"      | "How"                 |
| User-focused         | Developer-focused     |
| Acceptance criteria  | Implementation steps  |
| Multiple tasks       | Single unit of work   |
| Epic-level           | Sprint-level          |
| Product Owner writes | Developer breaks down |

## 5. SPEC WRITING WORKFLOW

```
Identify Need → Write Draft → Self-Review → Technical Review → Implement
     ↑              ↑              ↑              ↑              ↑
  User story    Acceptance    Check INVEST   ADR if arch    Break into
  Problem       criteria      criteria       decision       tasks
```

### Time Box

| Phase            | Time      | Rule                                |
| ---------------- | --------- | ----------------------------------- |
| Draft spec       | 30-60 min | Capture must-haves, don't overthink |
| Self-review      | 15 min    | Check against INVEST                |
| Technical review | 15 min    | Identify risks, dependencies        |
| Total            | < 2 hours | Spec doesn't need to be perfect     |

## 6. REVISION HISTORY

| Version | Date       | Changes                                                  |
| ------- | ---------- | -------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Feature template, 2 examples, workflow |

---

> **"Feature spec không phải để ràng buộc creativity. Nó là để bạn không phải quyết định 'cái này có nên làm không?' trong lúc code. Quyết định trước, code sau."**

---

Tóm tắt:

1. **Philosophy** — Spec là contract, good vs bad spec examples
2. **Feature Template** — Complete template với 13 sections: Metadata, Problem Statement, Acceptance Criteria (Must/Should/Nice), User Flow, UI/UX, Technical Specification, Security & Permissions, Testing Strategy, Out of Scope, Dependencies, Risks & Mitigations, Success Metrics, Tasks Breakdown, Notes
3. **2 Examples** — P1 Product Table (16h, full enterprise feature) và P3 Candlestick Chart (12h, D3.js visualization)
4. **Feature vs Task** — Comparison table
5. **Spec Writing Workflow** — 5 phases với time box
