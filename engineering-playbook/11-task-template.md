# Engineering Playbook — 11: Task Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Task breakdown format — 3 Projects  
> **Principle:** "Task đủ nhỏ để hoàn thành trong 1 ngày. Đủ rõ để không cần hỏi lại. Đủ traceable để biết ai làm gì lúc nào."

## 1. PHILOSOPHY

### 1.1 Task Là Đơn Vị Commitment

> **"Không estimate task > 1 ngày. Nếu > 1 ngày, chưa phân rã đủ."**

### 1.2 INVEST Criteria

| Letter          | Meaning                            | Application                     |
| --------------- | ---------------------------------- | ------------------------------- |
| **I**ndependent | Không phụ thuộc task khác để start | Có thể parallelize              |
| **N**egotiable  | Có thể thảo luận, không rigid      | Scope có thể adjust             |
| **V**aluable    | Deliver value cho user             | Không là "refactor vì refactor" |
| **E**stimable   | Estimate được trong vài giờ        | Đủ rõ để biết effort            |
| **S**mall       | < 1 ngày                           | Phân rã nếu lớn hơn             |
| **T**estable    | Có acceptance criteria rõ ràng     | Pass/fail không ambiguous       |

## 2. TASK ID FORMAT

```
[PROJECT]-[TYPE]-[NUMBER]

Examples:
EP-001    → Enterprise Admin Platform, Epic 001
EP-F-006  → Enterprise Admin Platform, Feature 006
EP-B-012  → Enterprise Admin Platform, Bug 012
EP-T-003  → Enterprise Admin Platform, Task 003

PP-001    → Property Platform
PP-F-006  → Property Platform, Feature 006

IP-001    → Investment Portfolio Tracker
IP-F-006  → Investment Portfolio Tracker, Feature 006
```

### 2.1 Type Prefix

| Prefix             | Type           | Example                        |
| ------------------ | -------------- | ------------------------------ |
| `EP` / `PP` / `IP` | Epic           | EP-001: Bootstrap Project      |
| `F`                | Feature        | EP-F-006: Product Table        |
| `B`                | Bug            | EP-B-012: Login redirect loop  |
| `T`                | Technical Task | EP-T-003: Setup ESLint         |
| `D`                | Documentation  | EP-D-001: Write ADR-001        |
| `R`                | Refactor       | EP-R-004: Extract order module |

## 3. TASK TEMPLATE

```markdown
# [TASK-ID]: [Title]

## Metadata

| Field            | Value                                          |
| ---------------- | ---------------------------------------------- |
| **ID**           | [TASK-ID]                                      |
| **Project**      | [P1/P2/P3]                                     |
| **Type**         | [Feature/Bug/Technical/Documentation/Refactor] |
| **Priority**     | [P0-Critical / P1-High / P2-Medium / P3-Low]   |
| **Estimate**     | [X hours]                                      |
| **Sprint**       | [Sprint X]                                     |
| **Assignee**     | [Name]                                         |
| **Epic**         | [EPIC-ID]                                      |
| **Dependencies** | [TASK-ID, TASK-ID]                             |
| **Blocked by**   | [TASK-ID or None]                              |

## Description

### Problem / Goal

[1-2 câu mô tả bài toán hoặc goal]

### Context

[Background, lý do cần làm task này, link đến ADR nếu có]

## Acceptance Criteria

### Must Have (P0)

- [ ] [Criteria 1 — specific, testable]
- [ ] [Criteria 2 — specific, testable]
- [ ] [Criteria 3 — specific, testable]

### Should Have (P1)

- [ ] [Criteria 4]
- [ ] [Criteria 5]

### Nice to Have (P2)

- [ ] [Criteria 6]

## Technical Notes

### Approach

[Brief technical approach, link to ADR if architectural decision needed]

### Files to Touch

- `[file path]` — [what to do]
- `[file path]` — [what to do]

### Out of Scope

- [What is NOT included in this task]

## Definition of Done

- [ ] Build pass
- [ ] ESLint pass
- [ ] TypeScript pass (strict)
- [ ] Responsive
- [ ] Loading state
- [ ] Error state
- [ ] Empty state
- [ ] Test (unit/integration)
- [ ] Documentation (ADR if needed, inline comments)
- [ ] Self Review

---

## Sub-tasks (if applicable)

- [ ] [SUB-TASK-1]: [Description] — [Estimate]
- [ ] [SUB-TASK-2]: [Description] — [Estimate]

## Notes / Questions

- [Open question 1]
- [Open question 2]

## Time Log

| Date       | Hours | Activity        | Blockers              |
| ---------- | ----- | --------------- | --------------------- |
| YYYY-MM-DD | X     | [What was done] | [None / What blocked] |

## Review

| Reviewer  | Status                     | Comments   |
| --------- | -------------------------- | ---------- |
| Self / AI | [Pass / Changes Requested] | [Comments] |
```

## 4. EXAMPLES

### 4.1 Feature Task

```markdown
# EP-F-006: Product Table with Sorting and Pagination

## Metadata

| Field            | Value                           |
| ---------------- | ------------------------------- |
| **ID**           | EP-F-006                        |
| **Project**      | P1 — Enterprise Admin Platform  |
| **Type**         | Feature                         |
| **Priority**     | P1-High                         |
| **Estimate**     | 6 hours                         |
| **Sprint**       | Sprint 3                        |
| **Assignee**     | [Your Name]                     |
| **Epic**         | EP-003: Commerce Module         |
| **Dependencies** | EP-T-003 (Setup TanStack Table) |
| **Blocked by**   | None                            |

## Description

### Problem / Goal

Commerce module cần hiển thị danh sách products với sorting, pagination,
và filtering để admin quản lý inventory.

### Context

- Sản phẩm có thể > 10k records
- Cần sort theo name, price, stock, createdAt
- Cần filter theo category, status, price range
- Link to ADR: ADR-001 (Redux Saga scope — không dùng Saga cho table)

## Acceptance Criteria

### Must Have (P0)

- [ ] Hiển thị table với columns: name, SKU, price, stock, status, actions
- [ ] Sortable: click header để sort asc/desc
- [ ] Pagination: 20 items/page, show total count
- [ ] Responsive: horizontal scroll trên mobile, card view optional
- [ ] Loading skeleton khi fetch data
- [ ] Empty state khi không có products
- [ ] Error state với retry button khi API fail

### Should Have (P1)

- [ ] Filter by category dropdown
- [ ] Filter by status toggle
- [ ] Search by name/SKU (debounced 300ms)

### Nice to Have (P2)

- [ ] Export to CSV
- [ ] Bulk select + bulk actions

## Technical Notes

### Approach

- TanStack Table v8 cho headless table logic
- TanStack Virtual cho > 10k rows (future-proof)
- RTK Query cho data fetching (không Saga — ADR-001)
- Zustand cho UI state (sort, filter, pagination)

### Files to Touch

- `src/modules/commerce/components/ProductTable/index.tsx` — new
- `src/modules/commerce/components/ProductTable/ProductTable.test.tsx` — new
- `src/modules/commerce/hooks/useProducts.ts` — modify (add pagination params)
- `src/modules/commerce/services/product.api.ts` — modify (add pagination endpoint)
- `src/shared/components/ui/table.tsx` — modify (add sort indicator)

### Out of Scope

- Inline edit (separate task EP-F-007)
- Image upload trong table
- Real-time updates (WebSocket)

## Definition of Done

- [ ] Build pass
- [ ] ESLint pass
- [ ] TypeScript pass (strict)
- [ ] Responsive
- [ ] Loading state
- [ ] Error state
- [ ] Empty state
- [ ] Test (unit/integration)
- [ ] Documentation (inline comments cho complex logic)
- [ ] Self Review

## Sub-tasks

- [ ] EP-F-006-1: Setup TanStack Table với basic columns (2h)
- [ ] EP-F-006-2: Implement sorting logic (1.5h)
- [ ] EP-F-006-3: Implement pagination (1.5h)
- [ ] EP-F-006-4: Add loading/error/empty states (1h)

## Notes / Questions

- Q: Có cần server-side pagination ngay từ đầu không?
  A: Yes — vì > 10k records, client-side pagination không scale.
- Q: Sorting là client-side hay server-side?
  A: Server-side — consistent với pagination.

## Time Log

| Date       | Hours | Activity                            | Blockers |
| ---------- | ----- | ----------------------------------- | -------- |
| 2026-07-10 | 2     | Setup TanStack Table, basic columns | None     |
| 2026-07-11 | 2     | Sorting + pagination                | None     |
| 2026-07-12 | 1.5   | States + responsive                 | None     |
| 2026-07-12 | 0.5   | Test + review                       | None     |

## Review

| Reviewer | Status | Comments                     |
| -------- | ------ | ---------------------------- |
| Self     | Pass   | All criteria met, tests pass |
```

### 4.2 Bug Task

```markdown
# EP-B-012: Login Redirect Loop After OAuth

## Metadata

| Field            | Value                          |
| ---------------- | ------------------------------ |
| **ID**           | EP-B-012                       |
| **Project**      | P1 — Enterprise Admin Platform |
| **Type**         | Bug                            |
| **Priority**     | P0-Critical                    |
| **Estimate**     | 2 hours                        |
| **Sprint**       | Sprint 3                       |
| **Assignee**     | [Your Name]                    |
| **Epic**         | EP-002: Authentication         |
| **Dependencies** | None                           |
| **Blocked by**   | None                           |

## Description

### Problem / Goal

User bị redirect loop sau khi login bằng Google OAuth.
URL: `/auth/callback?code=...` → redirect to `/dashboard` → redirect back to `/login`

### Context

- Xảy ra trên production (Vercel)
- Chỉ xảy ra với OAuth, email/password OK
- Bắt đầu từ commit `a1b2c3d` (refactor auth guard)

## Acceptance Criteria

### Must Have (P0)

- [ ] Fix redirect loop sau OAuth login
- [ ] Email/password login vẫn hoạt động
- [ ] Logout → login flow hoạt động
- [ ] Session persistence sau refresh

### Should Have (P1)

- [ ] Add E2E test cho OAuth flow (nếu có thể mock)

## Technical Notes

### Root Cause Analysis

- Auth guard check `isAuthenticated` trước khi OAuth callback xử lý token
- Token chưa được set → redirect to login → loop

### Fix Approach

- Reorder: process OAuth callback first → set token → then check auth

### Files to Touch

- `src/modules/auth/hooks/useAuth.ts` — fix guard logic
- `src/app/route-guards.tsx` — fix redirect condition
- `src/modules/auth/services/auth.api.ts` — add token set before redirect

## Definition of Done

- [ ] Build pass
- [ ] ESLint pass
- [ ] TypeScript pass
- [ ] Bug không reproduce
- [ ] Test cho fix (unit hoặc manual)
- [ ] Regression test: email/password flow
- [ ] Self Review

## Time Log

| Date       | Hours | Activity                           | Blockers |
| ---------- | ----- | ---------------------------------- | -------- |
| 2026-07-15 | 0.5   | Reproduce bug, identify root cause | None     |
| 2026-07-15 | 1     | Implement fix                      | None     |
| 2026-07-15 | 0.5   | Test + review                      | None     |

## Review

| Reviewer | Status | Comments                    |
| -------- | ------ | --------------------------- |
| Self     | Pass   | Fix verified, no regression |
```

### 4.3 Technical Task

```markdown
# EP-T-003: Setup ESLint + Prettier + Husky

## Metadata

| Field            | Value                          |
| ---------------- | ------------------------------ |
| **ID**           | EP-T-003                       |
| **Project**      | P1 — Enterprise Admin Platform |
| **Type**         | Technical                      |
| **Priority**     | P0-Critical                    |
| **Estimate**     | 3 hours                        |
| **Sprint**       | Sprint 0                       |
| **Assignee**     | [Your Name]                    |
| **Epic**         | EP-001: Bootstrap Project      |
| **Dependencies** | EP-T-001 (Setup Vite + React)  |
| **Blocked by**   | None                           |

## Description

### Problem / Goal

Setup linting và formatting để enforce coding standards từ ngày đầu.

### Context

- Coding standards đã define ở 01-coding-standards.md
- Cần pre-commit hook để không commit code lỗi
- CI cần check lint trước merge

## Acceptance Criteria

### Must Have (P0)

- [ ] ESLint config với TypeScript strict rules
- [ ] Prettier config consistent
- [ ] Husky pre-commit hook: lint + type-check
- [ ] CI workflow: lint + type-check + test
- [ ] `npm run lint` pass với 0 errors
- [ ] `npm run format:check` pass

### Should Have (P1)

- [ ] Commitlint cho conventional commits
- [ ] Lint-staged để chỉ check changed files

## Technical Notes

### Files to Create

- `.eslintrc.cjs` — ESLint config
- `.prettierrc` — Prettier config
- `.husky/pre-commit` — Pre-commit hook
- `.github/workflows/ci.yml` — CI workflow

### Config Source

- 01-coding-standards.md — rules reference

## Definition of Done

- [ ] Build pass
- [ ] ESLint pass
- [ ] TypeScript pass
- [ ] Pre-commit hook hoạt động
- [ ] CI hoạt động trên PR
- [ ] Documentation: update README setup instructions
- [ ] Self Review

## Time Log

| Date       | Hours | Activity                  | Blockers |
| ---------- | ----- | ------------------------- | -------- |
| 2026-07-01 | 1     | Setup ESLint + Prettier   | None     |
| 2026-07-01 | 1     | Setup Husky + lint-staged | None     |
| 2026-07-01 | 1     | Setup CI + test           | None     |

## Review

| Reviewer | Status | Comments        |
| -------- | ------ | --------------- |
| Self     | Pass   | All checks pass |
```

## 5. TASK BREAKDOWN RULES

### 5.1 When to Break Down

| Condition                    | Action               | Example                             |
| ---------------------------- | -------------------- | ----------------------------------- |
| Estimate > 1 day             | Break into sub-tasks | "Build Commerce Module" → 5 tasks   |
| Multiple acceptance criteria | Group by criteria    | Table + Form + Filter = 3 tasks     |
| Cross-module change          | Split by module      | Auth + Commerce = 2 tasks           |
| Unknown technical approach   | Spike task first     | "Research D3.js canvas rendering"   |
| Dependencies unclear         | Discovery task first | "Investigate Supabase RLS policies" |

### 5.2 Task Size Guidelines

| Size          | Estimate  | Rule                                            |
| ------------- | --------- | ----------------------------------------------- |
| **Tiny**      | < 1 hour  | Không cần task riêng, gom vào task lớn          |
| **Small**     | 1-3 hours | 1 task, có thể hoàn thành trong buổi sáng/chiều |
| **Medium**    | 3-6 hours | 1 task, có thể cần 1-2 sub-tasks                |
| **Large**     | 6-8 hours | Break down — không làm trong 1 ngày             |
| **Too Large** | > 8 hours | MUST break down — không estimate được chính xác |

### 5.3 Sprint Planning

```
Sprint 0: Bootstrap + Setup (2 tuần)
├── EP-T-001: Setup Vite + React (4h)
├── EP-T-002: Setup TypeScript strict (2h)
├── EP-T-003: Setup ESLint + Prettier (3h)
├── EP-T-004: Setup Tailwind + Shadcn/UI (3h)
├── EP-T-005: Setup Redux Toolkit + RTK Query (4h)
├── EP-T-006: Setup Supabase + Auth (4h)
└── EP-T-007: Setup CI/CD (3h)

Sprint 1: Authentication + RBAC (2 tuần)
├── EP-F-001: Email/Password Login (6h)
├── EP-F-002: OAuth Google Login (4h)
├── EP-F-003: RBAC System (8h)
│   ├── EP-F-003-1: Role definitions
│   ├── EP-F-003-2: Permission hook
│   └── EP-F-003-3: Route guards
└── EP-F-004: User Profile (4h)

Sprint 2: Layout + Shared UI (2 tuần)
├── EP-F-005: Sidebar Layout (4h)
├── EP-F-006: Header + Breadcrumb (3h)
├── EP-F-007: Notification Center (4h)
└── EP-F-008: Activity Log (4h)
```

## 6. BOARD FORMAT

### 6.1 Columns

```
Backlog → Ready → In Progress → Code Review → Testing → Done
              ↑         ↑            ↑            ↑
         Groomed   Assigned    PR created    All 10 DoD
         Estimated  Started     Self-review   pass
```

### 6.2 Labels

| Label           | Color       | Usage                    |
| --------------- | ----------- | ------------------------ |
| `P0-Critical`   | 🔴 Red      | Blocker, fix immediately |
| `P1-High`       | 🟠 Orange   | Important, next sprint   |
| `P2-Medium`     | 🟡 Yellow   | Normal priority          |
| `P3-Low`        | 🟢 Green    | Nice to have             |
| `bug`           | 🐛 Purple   | Bug fix                  |
| `technical`     | ⚙️ Gray     | Infrastructure, setup    |
| `documentation` | 📄 Blue     | Docs, ADR                |
| `blocked`       | ⛔ Dark red | Waiting for dependency   |

## 7. TIME TRACKING

### 7.1 Why Track Time

| Purpose              | How                                  |
| -------------------- | ------------------------------------ |
| Improve estimates    | Compare estimate vs actual           |
| Identify bottlenecks | Where does time actually go?         |
| Velocity tracking    | Points/hours per sprint              |
| Interview story      | "Tôi estimate 6h, actual 5h — vì..." |

### 7.2 Time Log Format

```markdown
| Date       | Hours | Activity                | Blockers                      |
| ---------- | ----- | ----------------------- | ----------------------------- |
| 2026-07-10 | 2     | Setup TanStack Table    | None                          |
| 2026-07-10 | 1     | Implement sorting       | None                          |
| 2026-07-11 | 2     | Implement pagination    | TanStack Virtual docs unclear |
| 2026-07-11 | 1     | Add states + responsive | None                          |

Total: 6h | Estimate: 6h | Variance: 0%
```

### 7.3 Variance Analysis

| Variance            | Meaning             | Action                                   |
| ------------------- | ------------------- | ---------------------------------------- |
| Actual < Estimate   | Overestimate        | Adjust future estimates down             |
| Actual > Estimate   | Underestimate       | Break down more, add buffer              |
| Actual = Estimate   | Accurate            | Good — maintain approach                 |
| Blockers > 30% time | External dependency | Reduce dependencies, add discovery tasks |

## 8. REVISION HISTORY

| Version | Date       | Changes                                                    |
| ------- | ---------- | ---------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Task template, examples, breakdown rules |

---

> **"Task template không phải để bureaucracy. Nó là để bạn không phải nghĩ 'hôm nay làm gì' — mỗi sáng mở task, làm theo acceptance criteria, check Done. Focus vào code, không phải planning."**

---

Tóm tắt:

1. **Philosophy** — Task là đơn vị commitment, INVEST criteria
2. **Task ID Format** — `[PROJECT]-[TYPE]-[NUMBER]` với type prefixes
3. **Task Template** — Complete template với 8 sections: Metadata, Description, Acceptance Criteria (Must/Should/Nice), Technical Notes, Definition of Done, Sub-tasks, Notes/Questions, Time Log, Review
4. **3 Examples** — Feature task (Product Table), Bug task (Login Redirect Loop), Technical task (Setup ESLint)
5. **Task Breakdown Rules** — When to break down, size guidelines (Tiny to Too Large), sprint planning example
6. **Board Format** — 6 columns + label system
7. **Time Tracking** — Why track, format, variance analysis
