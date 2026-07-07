# Engineering Playbook — 12: Bug Report Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Bug reproduction format — 3 Projects  
> **Principle:** "Bug report tốt = 50% fix. Nếu không reproduce được, không phải bug — hoặc report chưa đủ."

## 1. PHILOSOPHY

### 1.1 Bug Report Là Investigation

> **"Không phải 'nó lỗi'. Phải là 'làm A, rồi B, rồi C → thấy X thay vì Y'."**

### 1.2 Good vs Bad Bug Report

| Bad                    | Good                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| "Table không chạy"     | "Product table không sort được khi click header 'Price' lần 2 — sort icon không đổi chiều" |
| "Login lỗi"            | "OAuth Google login redirect loop: callback → dashboard → login → callback"                |
| "App chậm"             | "Portfolio calculation block UI 3s với 10k transactions, FPS drop to 15"                   |
| "Chart không hiển thị" | "Candlestick chart hiển thị blank sau khi switch từ '1D' sang '1W' timeframe"              |

## 2. BUG REPORT TEMPLATE

````markdown
# [BUG-ID]: [Short, Specific Title]

## Metadata

| Field             | Value                                               |
| ----------------- | --------------------------------------------------- |
| **ID**            | [PROJECT]-B-[NUMBER] (e.g., EP-B-012)               |
| **Severity**      | [Critical / High / Medium / Low]                    |
| **Priority**      | [P0 / P1 / P2 / P3]                                 |
| **Reporter**      | [Name]                                              |
| **Date Reported** | [YYYY-MM-DD]                                        |
| **Environment**   | [Production / Staging / Local]                      |
| **Found In**      | [Version / Commit / Branch]                         |
| **Module**        | [Auth / Commerce / Property / Portfolio...]         |
| **Assignee**      | [Name or Unassigned]                                |
| **Status**        | [Open / In Progress / Resolved / Closed / Reopened] |

## Description

### Summary

[1 câu mô tả bug — what happened vs what expected]

### Detailed Description

[Mô tả chi tiết hơn, context, frequency]

## Reproduction Steps

### Prerequisites

- [ ] [Condition 1: e.g., "Logged in as Admin"]
- [ ] [Condition 2: e.g., "Have > 100 products in database"]
- [ ] [Condition 3: e.g., "Browser: Chrome 126, 1440x900"]

### Steps to Reproduce

1. [Step 1 — specific action]
2. [Step 2 — specific action]
3. [Step 3 — specific action]
4. [Step 4 — specific action]

### Expected Result

[What should happen]

### Actual Result

[What actually happened]

## Evidence

### Screenshots / Screen Recording

[Attach or link]

### Console Logs

```javascript
// Paste relevant console logs
TypeError: Cannot read properties of undefined (reading 'map')
    at ProductTable (ProductTable.tsx:45)
    at renderWithHooks (react-dom.development.js:16305)
```

### Network Logs

```json
// Paste relevant API response/error
{
  "status": 500,
  "error": "Internal Server Error",
  "message": "column \"category_id\" does not exist"
}
```

### Sentry / Error Tracking

[Link to Sentry issue]

## Environment

| Component   | Version                                |
| ----------- | -------------------------------------- |
| Browser     | [Chrome 126 / Firefox 127 / Safari 17] |
| OS          | [macOS 14 / Windows 11 / Ubuntu 22.04] |
| Node.js     | [20.12.0]                              |
| React       | [18.3.1]                               |
| Next.js     | [16.0.0]                               |
| Screen Size | [1440x900 / 375x812]                   |

## Additional Context

### Frequency

- [ ] Always (100%)
- [ ] Often (> 50%)
- [ ] Sometimes (< 50%)
- [ ] Rare (< 10%)
- [ ] Only once

### Related Issues

- [BUG-ID]: [Brief description]
- [PR-ID]: [Brief description]

### Recent Changes

- [Commit / PR / Deploy that might have caused this]

### Workaround

[If any temporary workaround exists]

## Root Cause Analysis (Filled by Developer)

### Hypothesis

[What might be causing this]

### Investigation

[Steps taken to investigate]

### Root Cause

[Actual root cause — filled after fix]

### Fix

[What was changed — link to PR]

### Prevention

[How to prevent similar bugs in the future]
````

## 3. EXAMPLES

### 3.1 Critical Bug — Production

````markdown
# EP-B-012: OAuth Login Redirect Loop

## Metadata

| Field             | Value                          |
| ----------------- | ------------------------------ |
| **ID**            | EP-B-012                       |
| **Severity**      | Critical                       |
| **Priority**      | P0                             |
| **Reporter**      | [Your Name] (via Sentry alert) |
| **Date Reported** | 2026-07-15                     |
| **Environment**   | Production                     |
| **Found In**      | v1.0.0, commit a1b2c3d         |
| **Module**        | Auth                           |
| **Assignee**      | [Your Name]                    |
| **Status**        | Resolved                       |

## Description

### Summary

User bị redirect loop sau khi login bằng Google OAuth:
callback → dashboard → login → callback.

### Detailed Description

- Xảy ra 100% với OAuth login
- Email/password login không bị ảnh hưởng
- Bắt đầu từ commit a1b2c3d (refactor auth guard)
- 47 users affected trong 2 giờ

## Reproduction Steps

### Prerequisites

- [ ] Chưa login
- [ ] Có Google account đã link

### Steps to Reproduce

1. Click "Login with Google"
2. Chọn account và authorize
3. Redirect về `/auth/callback?code=...`
4. Redirect tự động sang `/dashboard`
5. Bị redirect ngược về `/login`
6. Loop lại từ bước 1

### Expected Result

User vào `/dashboard` và thấy admin interface.

### Actual Result

User bị redirect loop, không vào được app.

## Evidence

### Console Logs

```javascript
[AuthGuard] Checking authentication...
[AuthGuard] Token not found, redirecting to /login
[OAuthCallback] Processing callback...
[OAuthCallback] Token set successfully
[AuthGuard] Checking authentication...
[AuthGuard] Token not found, redirecting to /login  // BUG: Token chưa persist
```

### Network Logs

```json
// POST /api/auth/callback
{
  "status": 200,
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

// GET /api/me
{
  "status": 401,
  "error": "Unauthorized"
}
```

### Sentry

[Link: https://sentry.io/...]

## Environment

| Component | Version    |
| --------- | ---------- |
| Browser   | Chrome 126 |
| OS        | macOS 14   |
| Node.js   | 20.12.0    |
| React     | 18.3.1     |

## Additional Context

### Frequency

- [x] Always (100%)

### Related Issues

- EP-F-002: OAuth Google Login (original feature)

### Recent Changes

- Commit a1b2c3d: "refactor(auth): extract auth guard to hook"
  - Auth guard check `isAuthenticated` trước khi OAuth callback xử lý token

### Workaround

User có thể login bằng email/password.

## Root Cause Analysis

### Hypothesis

Auth guard check authentication trước khi OAuth callback set token.

### Investigation

1. Check commit a1b2c3d diff — auth guard moved to hook
2. Check execution order: AuthGuard render → OAuthCallback useEffect
3. AuthGuard check `isAuthenticated` → false → redirect
4. OAuthCallback chưa kịp set token

### Root Cause

Race condition: AuthGuard check auth state trước khi OAuthCallback persist token.
Refactor extract hook không preserve execution order.

### Fix

PR #45: Reorder auth check — process callback first, then guard.

```typescript
// Before (bug)
useAuthGuard(); // Check first → redirect
useOAuthCallback(); // Set token after

// After (fix)
useOAuthCallback(); // Set token first
useAuthGuard(); // Then check
```

### Prevention

- [ ] E2E test cho OAuth flow
- [ ] Code review: check execution order khi refactor hooks
- [ ] ADR update: auth flow sequence diagram
````

### 3.2 Medium Bug — Development

````markdown
# EP-B-023: Product Table Sort Icon Not Updating

## Metadata

| Field             | Value                                   |
| ----------------- | --------------------------------------- |
| **ID**            | EP-B-023                                |
| **Severity**      | Medium                                  |
| **Priority**      | P1                                      |
| **Reporter**      | [Your Name] (self-found during testing) |
| **Date Reported** | 2026-07-20                              |
| **Environment**   | Local                                   |
| **Found In**      | feature/EP-F-006 branch                 |
| **Module**        | Commerce                                |
| **Assignee**      | [Your Name]                             |
| **Status**        | Resolved                                |

## Description

### Summary

Click header "Price" lần 2 để sort desc — sort icon vẫn hiển thị asc.

### Detailed Description

- Sorting logic hoạt động đúng (data sorted desc)
- Chỉ icon không update
- Xảy ra với mọi column

## Reproduction Steps

### Prerequisites

- [ ] Product table có data
- [ ] Đang ở page 1

### Steps to Reproduce

1. Vào `/commerce/products`
2. Click header "Price" — data sort asc, icon ↑
3. Click header "Price" lần 2 — data sort desc, icon vẫn ↑ (should be ↓)

### Expected Result

Icon đổi chiều: asc = ↑, desc = ↓

### Actual Result

Icon luôn ↑, không đổi khi toggle sort direction

## Evidence

### Screenshots

[Attached: sort-icon-bug.png]

### Console Logs

No errors.

### Code Snippet

```tsx
// ProductTable.tsx
<TableHeader>
  {headerGroup.headers.map((header) => (
    <TableHead
      key={header.id}
      onClick={header.column.getToggleSortingHandler()}
    >
      {header.column.columnDef.header}
      {
        {
          asc: '↑',
          desc: '↓',
        }[header.column.getIsSorted()]
      }
    </TableHead>
  ))}
</TableHeader>
```

## Environment

| Component | Version    |
| --------- | ---------- |
| Browser   | Chrome 126 |
| OS        | macOS 14   |

## Additional Context

### Frequency

- [x] Always (100%)

### Related Issues

- EP-F-006: Product Table (original feature)

## Root Cause Analysis

### Hypothesis

`getIsSorted()` return `false` khi không sort, nhưng code chỉ handle `'asc'` và `'desc'`.

### Investigation

1. Log `header.column.getIsSorted()` — return `'asc'`, `'desc'`, hoặc `false`
2. Code: `{asc: '↑', desc: '↓'}[false]` → `undefined`
3. React không render `undefined` → icon biến mất, không phải không đổi

### Root Cause

Type mismatch: `getIsSorted()` return `boolean | 'asc' | 'desc'`, nhưng code chỉ handle string.
Khi toggle từ `'asc'` → `'desc'`, giá trị là `'desc'` nhưng render logic sai.

Actually: `false` khi chưa sort. Sau click lần 1: `'asc'`. Click lần 2: `'desc'`.
Nhưng code render:

```tsx
{{
  asc: '↑',
  desc: '↓',
}[header.column.getIsSorted()]} // 'desc' → '↓', should work?

// Wait, let me re-check...
```

Ah: `getIsSorted()` return `'asc' | 'desc' | false`.
When `'desc'`, lookup returns `'↓'`. But icon still ↑?

Let me check actual render...

### Actual Root Cause

`getToggleSortingHandler()` toggle: `false` → `'asc'` → `'desc'` → `false` (3-state).
But UI expected 2-state toggle: `'asc'` ↔ `'desc'`.
First click: `false` → `'asc'` (icon ↑, correct)
Second click: `'asc'` → `'desc'` (icon should be ↓, but showing ↑)

Wait, code shows `desc: '↓'`. Why showing ↑?

Oh: CSS! Icon is rotated 180deg with CSS transition, but `↓` is already pointing down.
CSS: `.sort-icon { transition: transform 0.2s } .sort-icon.asc { transform: rotate(0) } .sort-icon.desc { transform: rotate(180deg) }`
But `↓` rotated 180deg = `↑`! That's the bug.

### Fix

Use neutral icon (↕️) + CSS rotation, OR use correct directional icons without rotation.

```tsx
// Option 1: Remove CSS rotation
{{
  asc: '↑',
  desc: '↓',
  false: '↕️',
}[header.column.getIsSorted() as string] ?? '↕️'}

// Option 2: Use arrow icon + rotation
<ArrowUpIcon className={cn(
  "transition-transform",
  header.column.getIsSorted() === 'desc' && "rotate-180"
)} />
```

Chose Option 2 — cleaner, no 3-state confusion.

### Prevention

- [ ] Visual testing: check icon states manually
- [ ] Component test: verify icon direction per sort state
- [ ] CSS review: check transform effects on text/icons
````

## 4. BUG SEVERITY MATRIX

| Severity     | Definition                                 | Response Time               | Example                            |
| ------------ | ------------------------------------------ | --------------------------- | ---------------------------------- |
| **Critical** | App unusable, data loss, security breach   | Immediate (drop everything) | Login broken, payment failing, XSS |
| **High**     | Major feature broken, workaround difficult | < 4 hours                   | Table crash, export failing        |
| **Medium**   | Feature degraded, workaround exists        | < 24 hours                  | Sort icon wrong, filter slow       |
| **Low**      | Cosmetic, minor inconvenience              | Next sprint                 | Typo, spacing, color off           |

## 5. BUG LIFECYCLE

```
Reported → Triaged → In Progress → Resolved → Verified → Closed
              ↑          ↑           ↑          ↑
         Severity?    Assigned    PR merged   Tester/Reporter
         Reproducible? Estimate   Deploy      confirms fix
```

### Status Definitions

| Status          | Meaning                        | Who Changes     |
| --------------- | ------------------------------ | --------------- |
| **Open**        | Bug reported, chưa investigate | Reporter        |
| **Triaged**     | Severity confirmed, assigned   | Tech Lead       |
| **In Progress** | Developer đang fix             | Developer       |
| **Resolved**    | Fix merged, chưa deploy        | Developer       |
| **Verified**    | Fix confirmed trên staging     | Tester/Reporter |
| **Closed**      | Fix confirmed trên production  | Tech Lead       |
| **Reopened**    | Fix không work hoặc regression | Tester/Reporter |

## 6. ROOT CAUSE ANALYSIS (RCA) DEPTH

### 6.1 Levels of Analysis

| Level               | Question              | Example                                    |
| ------------------- | --------------------- | ------------------------------------------ |
| **Symptom**         | What happened?        | "Login loop"                               |
| **Immediate Cause** | Why happened?         | "Auth guard check before token set"        |
| **System Cause**    | Why system allowed?   | "Refactor didn't preserve execution order" |
| **Process Cause**   | Why process missed?   | "No E2E test for OAuth flow"               |
| **Cultural Cause**  | Why culture accepted? | "No code review checklist for hook order"  |

### 6.2 5 Whys Example

```
Problem: OAuth login redirect loop

1. Why? Auth guard redirect to login before token set.
2. Why? Auth guard check runs before OAuth callback.
3. Why? Refactor extracted hook without preserving order.
4. Why? Code review didn't catch execution order issue.
5. Why? No checklist item for hook execution order in auth flow.

Fix: Reorder + add E2E test + update checklist.
```

## 7. PREVENTION CHECKLIST

### 7.1 After Every Bug

```markdown
□ Fix root cause (not just symptom)
□ Add test case cho bug scenario
□ Update code review checklist nếu cần
□ Update ADR nếu architecture issue
□ Document trong retro nếu pattern lặp lại
□ Monitor Sentry cho regression
```

### 7.2 Bug-Driven Development

| Bug Pattern             | Prevention                          |
| ----------------------- | ----------------------------------- |
| Race condition          | Add sequence diagram, E2E test      |
| Null/undefined          | Strict TypeScript, Zod validation   |
| CSS transform on icons  | Visual regression test              |
| API schema mismatch     | Zod parse, contract test            |
| Memory leak             | Cleanup in useEffect, D3.js destroy |
| Performance degradation | Performance budget, monitoring      |

## 8. SELF-REPORTING (Solo Developer)

### 8.1 Finding Your Own Bugs

```markdown
## Methods

1. Dogfooding: Dùng app mỗi ngày như user thật
2. Exploratory testing: Click lung tung, break assumptions
3. Edge cases: Empty, null, 0, max length, special chars
4. Cross-browser: Chrome, Firefox, Safari
5. Mobile: DevTools responsive, real device
6. Performance: Lighthouse, DevTools Performance
7. Error monitoring: Sentry alerts

## When to Report

- Không fix ngay — viết bug report trước
- Giúp practice bug reporting skill
- Tạo paper trail cho retro
- Interview story: "Tôi tự tìm và fix bug X"
```

## 9. REVISION HISTORY

| Version | Date       | Changes                                                |
| ------- | ---------- | ------------------------------------------------------ |
| 1.0.0   | 2026-07-07 | Initial version — Bug report template, RCA, prevention |

---

> **"Bug report tốt không chỉ giúp fix nhanh. Nó là proof bạn có thể investigate, communicate, và prevent — skills mà senior engineer phải có."**

---

Tóm tắt:

1. **Philosophy** — Bug report là investigation, good vs bad examples
2. **Bug Report Template** — Complete template với 7 sections: Metadata, Description, Reproduction Steps, Evidence, Environment, Additional Context, Root Cause Analysis
3. **2 Examples** — Critical bug (OAuth redirect loop) với full RCA, Medium bug (Sort icon) với actual debugging thought process
4. **Bug Severity Matrix** — 4 levels (Critical/High/Medium/Low) với definition, response time, example
5. **Bug Lifecycle** — 6 statuses với definitions
6. **Root Cause Analysis Depth** — 5 levels (Symptom → Cultural Cause), 5 Whys example
7. **Prevention Checklist** — After every bug + bug-driven development patterns
8. **Self-Reporting** — Methods for solo developer to find own bugs
