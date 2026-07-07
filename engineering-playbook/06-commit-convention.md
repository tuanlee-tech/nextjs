# Engineering Playbook — 06: Commit Convention

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Conventional Commits — 3 Projects  
> **Principle:** "Mỗi commit là một câu chuyện hoàn chỉnh. History phải đọc được như changelog."

## 1. PHILOSOPHY

### 1.1 Commit Là Tài Liệu Thứ Hai

> **"Code nói 'cái gì'. Comment nói 'tại sao'. Commit message nói 'ngữ cảnh'."**

```bash
# ❌ KHÔNG — Không ai hiểu
git commit -m "fix"
git commit -m "update"
git commit -m "WIP"
git commit -m "asdf"
git commit -m "fix bug"
git commit -m "add stuff"

# ✅ CÓ — Tự giải thích, searchable, changelog-ready
git commit -m "feat(commerce): add bulk order action with optimistic update"
git commit -m "fix(auth): prevent redirect loop when OAuth token expires"
git commit -m "perf(table): virtualize 10k rows with TanStack Virtual"
```

### 1.2 Lợi Ích Của Conventional Commits

| Benefit                 | How                                                      |
| ----------------------- | -------------------------------------------------------- |
| **Auto changelog**      | `git log --pretty=format:"%s" \| grep "^feat"`           |
| **Semantic versioning** | `feat` → minor, `fix` → patch, `BREAKING CHANGE` → major |
| **Code review**         | Tìm commit theo scope/type nhanh                         |
| **Rollback**            | `git log --grep="fix(auth)"` để tìm lỗi auth             |
| **Interview proof**     | Shows discipline, process, communication                 |

## 2. FORMAT

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 2.1 Line Length

| Section      | Max Length | Rule                        |
| ------------ | ---------- | --------------------------- |
| Subject line | 72 chars   | Không wrap, imperative mood |
| Body lines   | 100 chars  | Wrap at 100                 |
| Footer       | 100 chars  | Per line                    |

### 2.2 Example Đầy Đủ

```bash
git commit -m "feat(commerce): add bulk order status update

Implement bulk action cho order table:
- Select multiple orders via checkbox
- Apply status transition (pending → confirmed → shipped)
- Optimistic update với rollback khi API fail
- Toast notification cho success/error

Redux Saga handle orchestration:
- takeLatest cho user trigger
- all() cho parallel API calls
- race() cho cancellation

Closes EP-045

BREAKING CHANGE: OrderStatus enum đổi từ string sang union type"
```

## 3. TYPE

### 3.1 Type Reference

| Type       | Description                          | Example                                   | SemVer  |
| ---------- | ------------------------------------ | ----------------------------------------- | ------- |
| `feat`     | New feature                          | `feat(auth): add OAuth Google login`      | `minor` |
| `fix`      | Bug fix                              | `fix(table): prevent crash on empty data` | `patch` |
| `docs`     | Documentation only                   | `docs: add ADR-001 Redux Saga scope`      | `none`  |
| `style`    | Formatting, no logic change          | `style: fix indentation in ProductCard`   | `none`  |
| `refactor` | Restructure code, no behavior change | `refactor(order): extract state machine`  | `none`  |
| `perf`     | Performance improvement              | `perf(table): virtualize 10k rows`        | `patch` |
| `test`     | Add/skip tests                       | `test(order): add saga unit tests`        | `none`  |
| `chore`    | Maintenance, deps, config            | `chore: update dependencies`              | `none`  |
| `ci`       | CI/CD changes                        | `ci: add GitHub Actions workflow`         | `none`  |
| `build`    | Build system changes                 | `build: configure Vite for production`    | `none`  |
| `revert`   | Revert previous commit               | `revert: feat(auth) add OAuth login`      | `patch` |

### 3.2 Type Decision Tree

```
Bạn thay đổi code?
├── Có
│   ├── Thêm feature mới? → feat
│   ├── Sửa bug? → fix
│   ├── Restructure code (không đổi behavior)? → refactor
│   ├── Tăng performance? → perf
│   ├── Thêm/sửa test? → test
│   ├── Update dependencies? → chore
│   ├── Sửa build/config? → build/ci
│   └── Revert commit trước? → revert
└── Không
    ├── Sửa documentation? → docs
    ├── Sửa formatting? → style
    └── Không nên commit
```

## 4. SCOPE

### 4.1 Scope Convention

| Scope       | Usage                         | Example                                 |
| ----------- | ----------------------------- | --------------------------------------- |
| `auth`      | Authentication, authorization | `feat(auth): add JWT refresh`           |
| `commerce`  | Commerce module (P1)          | `feat(commerce): add product CRUD`      |
| `property`  | Property module (P2)          | `feat(property): add unit management`   |
| `portfolio` | Portfolio module (P3)         | `feat(portfolio): add asset allocation` |
| `table`     | Table component/feature       | `perf(table): virtualize rows`          |
| `ui`        | UI components, design system  | `feat(ui): add ConfirmDialog`           |
| `api`       | API layer, services           | `fix(api): handle 401 redirect`         |
| `types`     | TypeScript types              | `refactor(types): use branded types`    |
| `config`    | Configuration files           | `chore(config): update ESLint rules`    |
| `deps`      | Dependencies                  | `chore(deps): upgrade React to 19`      |
| `ci`        | CI/CD pipeline                | `ci: add preview deployment`            |
| `docs`      | Documentation                 | `docs: add system design diagram`       |

### 4.2 Multi-Scope Changes

```bash
# ❌ KHÔNG — Một commit động chạm nhiều scope
git commit -m "feat: add product table and fix auth and update docs"

# ✅ CÓ — Tách thành nhiều commit
git commit -m "feat(commerce): add product table with sorting"
git commit -m "fix(auth): redirect after login"
git commit -m "docs: update API documentation"
```

### 4.3 No Scope

```bash
# ✅ Khi change ảnh hưởng toàn bộ project
git commit -m "chore: update all dependencies"
git commit -m "docs: add project README"
```

## 5. SUBJECT

### 5.1 Rules

| Rule                | Description                          | Example                             |
| ------------------- | ------------------------------------ | ----------------------------------- |
| **Imperative mood** | "Add" không phải "Added" hoặc "Adds" | `add product table` ✅              |
| **No period**       | Không dấu chấm cuối                  | `add product table` ✅              |
| **No capitalize**   | Không viết hoa đầu câu               | `add product table` ✅              |
| **Max 72 chars**    | Ngắn gọn, đủ ý                       | `add product table with sorting` ✅ |

### 5.2 Good vs Bad Subject

```bash
# ❌ KHÔNG
git commit -m "feat(commerce): added product table"           # "Added" → "Add"
git commit -m "feat(commerce): Adds product table."           # "Adds" + period
git commit -m "feat(commerce): Product table added"           # Passive voice
git commit -m "feat(commerce): add product table with sorting and filtering and pagination and export to CSV" # > 72 chars

# ✅ CÓ
git commit -m "feat(commerce): add product table with sorting"
git commit -m "feat(commerce): add table filtering"
git commit -m "feat(commerce): add table pagination"
git commit -m "feat(commerce): add CSV export for table"
```

## 6. BODY

### 6.1 When to Write Body

Viết body khi:

- [ ] Commit giải thích "tại sao" không rõ từ subject
- [ ] Có trade-off hoặc quyết định kiến trúc
- [ ] Có breaking change
- [ ] Có multiple changes trong 1 commit (nên tách, nhưng nếu không thể)
- [ ] Cần reference issue/ticket

### 6.2 Body Structure

```bash
git commit -m "refactor(order): extract state machine from component

Order lifecycle có 5 status với guard conditions phức tạp.
Trước đây logic nằm trong component, khó test và reuse.

Extract thành orderStateMachine.ts:
- Pure function, dễ unit test
- Reuse cho cả UI và API validation
- Type-safe với discriminated union

Trade-off: Thêm 1 file, nhưng component giảm 40% LOC.
Test coverage tăng từ 0% → 85% cho transition logic.

Closes EP-032"
```

### 6.3 Body Template

```markdown
## What (tóm tắt)

[Mô tả ngắn gọn thay đổi]

## Why (tại sao)

[Lý do thay đổi, problem đang giải quyết]

## How (cách làm)

[Chi tiết implementation, patterns dùng]

## Trade-offs (nếu có)

[Trade-off đã chấp nhận, alternative đã cân nhắc]

## References

[Issue, PR, ADR liên quan]
```

## 7. FOOTER

### 7.1 Footer Keywords

| Keyword           | Usage                        | Example                                        |
| ----------------- | ---------------------------- | ---------------------------------------------- |
| `Closes`          | Đóng issue                   | `Closes EP-045`                                |
| `Fixes`           | Fix bug                      | `Fixes #123`                                   |
| `Refs`            | Reference issue (không đóng) | `Refs EP-032`                                  |
| `BREAKING CHANGE` | Breaking change              | `BREAKING CHANGE: API response format changed` |
| `Co-authored-by`  | AI collaboration             | `Co-authored-by: Claude <anthropic>`           |

### 7.2 Footer Examples

```bash
git commit -m "feat(auth): add OAuth Google login

Implement Google OAuth với NextAuth v5:
- JWT strategy với refresh token rotation
- Route guard middleware cho protected routes
- Fallback to email/password nếu OAuth fail

Closes EP-012

BREAKING CHANGE: User session shape thay đổi —
  thêm `provider` field. Migration: login lại."

git commit -m "refactor(table): extract virtual scroll hook

TanStack Virtual wrapper thành reusable hook:
- useVirtualTable<T> cho mọi table type
- Configurable item height và overscan
- Test coverage 90%

Refs EP-028
Co-authored-by: Claude <anthropic>"
```

## 8. SPECIAL COMMIT SCENARIOS

### 8.1 Work-in-Progress (WIP)

```bash
# ❌ KHÔNG — Commit WIP lên remote
git commit -m "WIP: table stuff"

# ✅ CÓ — Commit local với WIP prefix, squash trước push
git commit -m "WIP: implement table sorting"

# Làm việc tiếp...

# Khi xong, squash WIP commits
git rebase -i HEAD~3
# Sửa "pick" thành "squash" cho WIP commits
# Viết lại message theo convention

# Hoặc dùng git commit --amend
git commit --amend -m "feat(commerce): add product table with sorting"
```

### 8.2 Fixup Commit

```bash
# Commit bổ sung cho PR đang mở
git commit -m "fixup: address review comment on error handling"

# Khi PR approved, autosquash
git rebase -i --autosquash origin/develop
# Hoặc squash tất cả thành 1 commit clean
```

### 8.3 Revert Commit

```bash
# Revert 1 commit
git revert a1b2c3d
# Message tự động: "revert: feat(commerce) add product table"

# Revert merge commit
git revert -m 1 a1b2c3d
# -m 1 = giữ branch chính (thường là main/develop)
```

### 8.4 Merge Commit

```bash
# ❌ KHÔNG — Merge commit message mặc định
git merge feature/EP-006
# "Merge branch 'feature/EP-006' into develop"

# ✅ CÓ — Squash merge với message clean
git merge --squash feature/EP-006
git commit -m "feat(commerce): add product table with sorting and pagination"
```

## 9. COMMIT FREQUENCY

### 9.1 Rules

| Scenario                | Frequency          | Example                                                              |
| ----------------------- | ------------------ | -------------------------------------------------------------------- |
| **Feature development** | Mỗi logical unit   | "Add table component" → "Add sorting logic" → "Add pagination"       |
| **Bug fix**             | 1 commit = 1 fix   | "fix(auth): redirect after login"                                    |
| **Refactor**            | Mỗi extracted unit | "Extract useVirtualTable hook" → "Refactor ProductTable to use hook" |
| **Documentation**       | Mỗi doc file/topic | "docs: add ADR-001" → "docs: update API docs"                        |

### 9.2 Commit Size Guidelines

| Metric        | Target   | Max       |
| ------------- | -------- | --------- |
| Files changed | < 10     | 20        |
| Lines changed | < 200    | 400       |
| Scope         | 1 module | 2 modules |

> **"Commit nhỏ = dễ review, dễ revert, dễ cherry-pick. Commit lớn = khó hiểu, khó debug."**

## 10. TOOLS & AUTOMATION

### 10.1 Commitlint

```bash
# Install
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor',
      'perf', 'test', 'chore', 'ci', 'build', 'revert'
    ]],
    'scope-enum': [2, 'always', [
      'auth', 'commerce', 'property', 'portfolio',
      'table', 'ui', 'api', 'types', 'config', 'deps', 'ci', 'docs'
    ]],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
};

# package.json
{
  "scripts": {
    "commitlint": "commitlint --edit"
  }
}
```

### 10.2 Husky Pre-Commit Hook

```bash
# .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"

# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run type-check
```

### 10.3 Git Alias

```bash
# ~/.gitconfig
[alias]
    # Commit với type
    feat = "!f() { git commit -m \"feat($1): $2\"; }; f"
    fix = "!f() { git commit -m \"fix($1): $2\"; }; f"
    docs = "!f() { git commit -m \"docs: $1\"; }; f"
    chore = "!f() { git commit -m \"chore: $1\"; }; f"

    # Log đẹp
    lg = "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

    # Tìm commit theo type
    feat-log = "log --grep='^feat' --pretty=format:'%h %s'"
    fix-log = "log --grep='^fix' --pretty=format:'%h %s'"

# Usage
git feat commerce "add product table"
git fix auth "redirect after login"
git lg
```

### 10.4 Changelog Generation

```bash
# Generate changelog từ commits
git log --pretty=format:"- %s" --grep="^feat" v1.0.0..v1.1.0 > FEATURES.md
git log --pretty=format:"- %s" --grep="^fix" v1.0.0..v1.1.0 > FIXES.md

# Hoặc dùng standard-version
npx standard-version --dry-run
```

## 11. COMMIT MESSAGE EXAMPLES BY PROJECT

### 11.1 P1 — Enterprise Admin Platform

```bash
# Feature
feat(commerce): add product table with TanStack Table v8
feat(commerce): implement order pipeline with Redux Saga
feat(auth): add OAuth Google login
feat(ui): add ConfirmDialog component

# Fix
fix(table): prevent crash when data is null
fix(auth): redirect loop after token refresh
fix(commerce): optimistic update rollback on API fail

# Refactor
refactor(order): extract state machine from component
refactor(table): extract useVirtualTable hook

# Performance
perf(table): virtualize 10k rows with TanStack Virtual
perf(commerce): debounce search input 300ms

# Test
test(order): add saga unit tests for bulk operations
test(table): add integration tests for sorting

# Documentation
docs: add ADR-001 Redux Saga scope decision
docs: add system design diagram

# Chore
chore(deps): upgrade React to 18.3
chore(config): add bundle analyzer
```

### 11.2 P2 — Property Platform

```bash
# Feature
feat(property): add project management CRUD
feat(unit): implement unit availability with "use cache"
feat(auth): add RBAC middleware for route protection
feat(booking): add booking creation with Server Action

# Fix
fix(property): Server Component fetch error handling
fix(auth): JWT token expiration edge case

# Refactor
refactor(property): extract usePropertyForm hook
refactor(api): migrate Route Handlers to Server Actions

# Performance
perf(property): cache unit availability with "use cache"
perf(booking): optimize Prisma query with select

# Test
test(booking): add Playwright E2E for booking flow
test(property): add unit tests for RLS policies

# Documentation
docs: add ADR-002 Server Components vs Client Components
docs: update API documentation with Swagger

# CI
ci: add Docker multi-stage build
ci: add Vercel preview deployment
```

### 11.3 P3 — Investment Portfolio Tracker

```bash
# Feature
feat(portfolio): add asset allocation chart with D3.js
feat(analytics): implement candlestick chart
feat(import): add CSV import with Web Worker

# Fix
fix(portfolio): branded type validation edge case
fix(chart): D3.js memory leak on unmount

# Refactor
refactor(portfolio): extract portfolio calculator to Worker
refactor(chart): extract D3.js scales to shared lib

# Performance
perf(portfolio): move calculation to Web Worker
perf(chart): Canvas rendering for 50k data points
perf(import): chunked CSV parsing

# Test
test(portfolio): add unit tests for return calculation
test(worker): add integration tests for CSV parser

# Documentation
docs: add ADR-003 D3.js vs Chart.js decision
docs: add performance budget report

# Chore
chore(deps): upgrade D3.js to v7
chore(config): add Sentry performance tracing
```

## 12. COMMON MISTAKES

| Mistake                            | Why Bad                | Fix                                                              |
| ---------------------------------- | ---------------------- | ---------------------------------------------------------------- |
| `git commit -m "update"`           | Không rõ gì update     | `git commit -m "feat(ui): add loading spinner to Button"`        |
| `git commit -m "fix bug"`          | Không rõ bug gì        | `git commit -m "fix(auth): prevent token leak in error message"` |
| `git commit -m "WIP"`              | Không production-ready | Squash khi xong, viết lại message                                |
| `git commit -m "feat: everything"` | Scope quá lớn          | Tách thành nhiều commit nhỏ                                      |
| `git commit -m "fix and feat"`     | Mix types              | Tách thành 2 commits                                             |
| Subject > 72 chars                 | Khó đọc, wrap xấu      | Ngắn gọn, dùng body cho detail                                   |
| `git commit -m "Added..."`         | Passive voice          | `git commit -m "feat: add..."`                                   |
| No body for complex change         | Không rõ context       | Thêm body giải thích "tại sao"                                   |
| `git commit -m "fix: typo"`        | Dùng `fix` cho typo    | `git commit -m "docs: fix typo"` hoặc `style: fix typo`          |

## 13. REVISION HISTORY

| Version | Date       | Changes                                               |
| ------- | ---------- | ----------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Conventional Commits với automation |

---

> **"Commit message là email bạn gửi cho chính mình 6 tháng sau. Viết sao cho future self không chửi present self."**

---

Tóm tắt:

1. **Philosophy** — Commit là tài liệu thứ hai, 5 lợi ích của Conventional Commits
2. **Format** — type(scope): subject + body + footer, line length rules
3. **Type** — 12 types với description, example, SemVer impact + decision tree
4. **Scope** — 13 scopes theo project + multi-scope handling
5. **Subject** — 4 rules (imperative, no period, no capitalize, max 72)
6. **Body** — When to write + template (What/Why/How/Trade-offs/References)
7. **Footer** — Keywords (Closes/Fixes/Refs/BREAKING CHANGE/Co-authored-by)
8. **Special Scenarios** — WIP, fixup, revert, merge commit
9. **Commit Frequency** — Rules + size guidelines
10. **Tools & Automation** — Commitlint, Husky, Git alias, changelog generation
11. **Examples by Project** — P1, P2, P3 với real-world commit messages
12. **Common Mistakes** — 10 mistakes với why bad + fix
