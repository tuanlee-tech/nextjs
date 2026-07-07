# Engineering Playbook — 04: Git Workflow

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Branch strategy, PR workflow, code review, merge — 3 Projects  
> **Principle:** "Mỗi commit là một câu chuyện. Mỗi PR là một chương. History phải đọc được."

## 1. PHILOSOPHY

### 1.1 Git History Là Tài Liệu

> **"Git history không chỉ để rollback. Nó là timeline của quyết định kỹ thuật. Ai đọc cũng phải hiểu tại sao code thay đổi, không chỉ cái gì thay đổi."**

### 1.2 Quy Tắc Vàng

```
1. Một branch = một logical change (không mix feature + refactor + bugfix)
2. Một commit = một unit of work (không commit "WIP", "fix", "update")
3. Một PR = một feature/fix có thể review độc lập
4. Không force push lên branch đã push (trừ rebase trên branch cá nhân)
5. Không merge khi CI đỏ — không exception
```

---

## 2. BRANCH STRATEGY

### 2.1 Tổng Quan: Git Flow Đơn Giản Hóa

```
main (production)
    ↑
develop (integration)
    ↑
feature/EP-001-bootstrap    ← Từ develop, merge về develop
    ↑
fix/EP-042-login-redirect   ← Từ develop, merge về develop
    ↑
hotfix/auth-bypass          ← Từ main, merge về main + develop
```

### 2.2 Branch Types

| Type         | Prefix      | Base Branch | Merge Target       | Lifespan   |
| ------------ | ----------- | ----------- | ------------------ | ---------- |
| **Feature**  | `feature/`  | `develop`   | `develop`          | Days       |
| **Bugfix**   | `fix/`      | `develop`   | `develop`          | Hours-Days |
| **Hotfix**   | `hotfix/`   | `main`      | `main` + `develop` | Hours      |
| **Release**  | `release/`  | `develop`   | `main`             | Days       |
| **Docs**     | `docs/`     | `develop`   | `develop`          | Hours      |
| **Refactor** | `refactor/` | `develop`   | `develop`          | Days       |

### 2.3 Branch Naming Convention

```bash
# Pattern: [type]/[ticket-id]-[short-description]
# Tối đa 50 ký tự cho phần sau prefix

feature/EP-001-bootstrap-project
feature/EP-003-theme-system
fix/EP-042-login-redirect-loop
hotfix/critical-auth-bypass
docs/adr-001-redux-saga-scope
refactor/extract-order-pipeline

# ❌ KHÔNG
feature/new-stuff          # Không rõ là gì
fix/bug                  # Không rõ bug gì
feature/EP-001-and-EP-002 # Một branch 2 ticket
```

### 2.4 Branch Lifecycle

```bash
# 1. Tạo branch từ develop
git checkout develop
git pull origin develop
git checkout -b feature/EP-006-commerce-table

# 2. Làm việc, commit theo convention (xem phần 6)

# 3. Push lên remote
git push -u origin feature/EP-006-commerce-table

# 4. Tạo PR về develop

# 5. Sau merge, xóa branch
git branch -d feature/EP-006-commerce-table
git push origin --delete feature/EP-006-commerce-table
```

## 3. COMMIT CONVENTION (Tóm Tắt — Chi Tiết ở 06-commit-convention.md)

### 3.1 Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 3.2 Type Reference

| Type       | Khi Nào Dùng                         | Example                                  |
| ---------- | ------------------------------------ | ---------------------------------------- |
| `feat`     | Thêm feature mới                     | `feat(commerce): add bulk order action`  |
| `fix`      | Sửa bug                              | `fix(auth): redirect after OAuth login`  |
| `refactor` | Restructure code, không đổi behavior | `refactor(order): extract pipeline hook` |
| `perf`     | Performance improvement              | `perf(table): virtualize 10k rows`       |
| `test`     | Thêm/sửa test                        | `test(order): add saga unit tests`       |
| `docs`     | Documentation                        | `docs: add ADR-001 Redux Saga`           |
| `style`    | Formatting, không đổi logic          | `style: fix eslint warnings`             |
| `chore`    | Maintenance, dependencies            | `chore: update dependencies`             |
| `ci`       | CI/CD changes                        | `ci: add GitHub Actions workflow`        |
| `revert`   | Revert commit trước                  | `revert: feat(commerce) add bulk order`  |

### 3.3 Commit Rules

```bash
# ✅ Một commit = một logical change
git commit -m "feat(commerce): add product table with sorting"

# ❌ KHÔNG — Mix nhiều thứ
git commit -m "update"                    # Không rõ gì
git commit -m "fix bug and add feature"   # 2 logical changes
git commit -m "WIP"                       # Không ai hiểu
git commit -m "asdf"                      # Không bao giờ

# ✅ Body giải thích "tại sao" nếu cần
git commit -m "refactor(order): extract state machine

Order lifecycle có 5 status với guard conditions.
Extract ra state machine để:
- Centralize transition logic
- Dễ test độc lập
- Reuse cho cả UI và API validation"
```

## 4. PULL REQUEST WORKFLOW

### 4.1 PR Template

```markdown
<!-- .github/pull_request_template.md -->

## Description

<!-- Mô tả ngắn gọn PR làm gì -->

## Related Issue

<!-- Link đến issue/ticket -->

Closes EP-006

## Type of Change

- [ ] feat: New feature
- [ ] fix: Bug fix
- [ ] refactor: Code restructuring
- [ ] perf: Performance improvement
- [ ] test: Testing
- [ ] docs: Documentation
- [ ] chore: Maintenance

## Checklist

- [ ] Build pass
- [ ] ESLint pass
- [ ] TypeScript pass (strict)
- [ ] Test pass (unit/integration)
- [ ] Self-review completed
- [ ] ADR updated (nếu có quyết định kiến trúc)
- [ ] No `console.log` còn sót
- [ ] No `any` type

## Screenshots (nếu UI change)

<!-- Before/After -->

## Testing Notes

<!-- Cách test thủ công -->

## Breaking Changes

<!-- Có breaking change không? -->
```

### 4.2 PR Size Guidelines

| Metric        | Target   | Maximum | Action Nếu Vượt  |
| ------------- | -------- | ------- | ---------------- |
| Files changed | < 15     | 25      | Tách PR          |
| Lines changed | < 400    | 800     | Tách PR          |
| Commits       | 3-10     | 20      | Squash hoặc tách |
| Review time   | < 30 min | 1 hour  | Tách PR          |

> **"PR > 800 lines = reviewer sẽ skim, không review kỹ."**

### 4.3 PR Description Rules

```markdown
# ✅ Tốt

## What

Thêm Product Table với sorting, filtering, pagination.

## Why

Commerce module cần quản lý >10k products. Table hiện tại
không handle được large dataset.

## How

- TanStack Table v8 cho headless table logic
- TanStack Virtual cho 10k+ rows
- Server-side pagination với cursor-based

## Testing

- Unit test: sorting logic, pagination math
- Integration: MSW mock API + React Testing Library
- Manual: test với 15k rows mock data

# ❌ Kém

update table
```

## 5. CODE REVIEW PROCESS

### 5.1 Review Checklist (07-code-review-checklist.md — Tóm Tắt)

```
□ Architecture     → Có phù hợp với hiện tại không?
□ Naming         → Rõ ràng, consistent?
□ Reusability    → Có thể tách primitive không?
□ Accessibility  → ARIA, keyboard nav?
□ Performance    → Re-render? Lazy load?
□ Security       → XSS, CSRF, input validation?
□ Testing        → Có test cho logic quan trọng?
□ Typing         → Strict TypeScript, không any?
□ Error Handling → Fallback, log, boundary?
□ Documentation  → ADR cần update không?
```

### 5.2 Review Comments Convention

```markdown
<!-- ✅ Constructive, specific, actionable -->

❌ "Code này không tốt"
✅ "Function `processData` có 3 responsibility khác nhau.
Tách thành `validateInput`, `transformPayload`, `sendRequest`
để dễ test và reuse."

❌ "Sửa lại đi"
✅ "Nit: Dùng `const` thay vì `let` vì `count` không reassign.
[Link đến coding standards 01]"

❌ "Không hiểu"
✅ "Tại sao dùng `useEffect` ở đây thay vì `useQuery`?
`useQuery` đã handle caching và retry.
Nếu có lý do đặc biệt, thêm comment giải thích."

<!-- Severity Labels -->

🔴 **Blocking** — Must fix before merge
🟡 **Suggestion** — Consider, but not blocking
🟢 **Nitpick** — Style preference, optional
💡 **Question** — Cần clarify, không nhất thiết phải sửa
```

### 5.3 Reviewer Responsibilities

| Role                  | Responsibility                                                |
| --------------------- | ------------------------------------------------------------- |
| **Author**            | Self-review trước khi request review. Đảm bảo checklist pass. |
| **Reviewer**          | Review trong 24h. Focus: correctness > style > nitpick.       |
| **Author (response)** | Reply mọi comment, resolve hoặc explain. Không ignore.        |
| **Maintainer**        | Final approval, merge khi CI xanh + 1 approval.               |

### 5.4 AI-Assisted Review

```markdown
# Workflow: AI = Pre-reviewer, Human = Final reviewer

1. Author tự review (self-review checklist)
2. AI review (Claude Code / Copilot):
   - "Review this PR for: type safety, error handling, performance"
   - AI gợi ý issues
3. Author fix issues hợp lý, bỏ qua nếu không đúng (ghi lý do)
4. Human reviewer review:
   - Focus vào architecture, business logic, edge cases
   - Không review style (ESLint/Prettier đã handle)
5. Merge khi cả AI + human pass

# Lưu ý: AI suggestion không phải lệnh — vẫn cần human judgment
```

## 6. MERGE STRATEGY

### 6.1 Merge Methods

| Method             | When to Use                          | Command              |
| ------------------ | ------------------------------------ | -------------------- |
| **Squash & Merge** | Feature branch, nhiều commit "WIP"   | `git merge --squash` |
| **Rebase & Merge** | Clean history, mỗi commit đã perfect | `git rebase develop` |
| **Merge Commit**   | Release branch, cần preserve history | `git merge --no-ff`  |

### 6.2 Default: Squash & Merge

```bash
# Feature branch có nhiều commit "WIP"
git log --oneline feature/EP-006
a1b2c3d feat(commerce): add product table
e4f5g6h WIP: fix sorting bug
i7j8k9l fix: pagination edge case
m0n1o2p refactor: extract table hook

# Squash thành 1 commit clean trên develop
git checkout develop
git merge --squash feature/EP-006
git commit -m "feat(commerce): add product table with sorting and pagination

- TanStack Table v8 for headless logic
- TanStack Virtual for 10k+ rows
- Server-side pagination with cursor
- Extract useProductTable hook for reuse"
```

### 6.3 Không Merge Khi

- [ ] CI đỏ (build, lint, test, type-check)
- [ ] Chưa có ít nhất 1 approval
- [ ] Còn unresolved review comments
- [ ] PR description chưa điền đầy đủ
- [ ] Có merge conflict chưa resolve
- [ ] Branch chưa rebase với target mới nhất

## 7. CONFLICT RESOLUTION

### 7.1 Prevention

```bash
# 1. Pull thường xuyên
git pull origin develop --rebase

# 2. Rebase branch trước khi tạo PR
git checkout feature/EP-006
git rebase develop

# 3. Không làm việc trên file quá lớn cùng lúc với người khác
# → Tách file, modularize
```

### 7.2 Resolution Steps

```bash
# 1. Khi conflict xảy ra
git rebase develop
# Auto-merging src/modules/commerce/components/ProductTable/index.tsx
# CONFLICT (content): Merge conflict in src/modules/commerce/components/ProductTable/index.tsx

# 2. Mở file conflict, resolve
<<<<<<< HEAD
import { useProducts } from '@/modules/commerce/hooks/useProducts';
=======
import { useProducts } from './hooks/useProducts';
>>>>>>> develop

# 3. Chọn đúng version (thường là develop nếu đã rebase)
import { useProducts } from '@/modules/commerce/hooks/useProducts';

# 4. Mark resolved
git add src/modules/commerce/components/ProductTable/index.tsx
git rebase --continue

# 5. Nếu quá phức tạp, abort và merge thay vì rebase
git rebase --abort
git merge develop
```

## 8. ROLLBACK & REVERT

### 8.1 Revert Commit (Đã Push)

```bash
# Revert 1 commit, tạo commit mới undo changes
git revert a1b2c3d
git push origin develop

# Revert merge commit
git revert -m 1 a1b2c3d  # -m 1 = giữ branch chính
```

### 8.2 Reset (Chỉ Local, Chưa Push)

```bash
# Undo commit cuối, giữ changes
git reset --soft HEAD~1

# Undo commit cuối, xóa changes
git reset --hard HEAD~1

# ❌ KHÔNG hard reset trên branch đã push
```

### 8.3 Hotfix Rollback

```bash
# 1. Tạo hotfix branch từ main
git checkout main
git checkout -b hotfix/revert-broken-feature

# 2. Revert commit gây lỗi
git revert a1b2c3d

# 3. Push và tạo PR về main
git push -u origin hotfix/revert-broken-feature
# PR → main (fast-track review)
# PR → develop (để develop cũng có revert)
```

---

## 9. TAG & RELEASE

### 9.1 Semantic Versioning

```bash
# Format: v[major].[minor].[patch]
# P1: v1.0.0, v1.1.0, v1.1.1

git tag -a v1.0.0 -m "Release v1.0.0 - Enterprise Admin Platform MVP"
git push origin v1.0.0
```

| Version | Meaning         | When                                 |
| ------- | --------------- | ------------------------------------ |
| `major` | Breaking change | API incompatible, migration required |
| `minor` | New feature     | Backward compatible                  |
| `patch` | Bug fix         | Backward compatible                  |

### 9.2 Release Branch

```bash
# 1. Tạo release branch từ develop
git checkout develop
git checkout -b release/v1.1.0

# 2. Bump version, update changelog
# 3. Test, fix bugs nhỏ (không thêm feature)
# 4. Merge về main + develop
git checkout main
git merge --no-ff release/v1.1.0
git tag -a v1.1.0

git checkout develop
git merge --no-ff release/v1.1.0
```

## 10. CI/CD INTEGRATION

### 10.1 GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-type:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run format:check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run test:ci

  build:
    runs-on: ubuntu-latest
    needs: [lint-and-type, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build

  preview:
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 10.2 Branch Protection Rules

```
main:
  - Require pull request review: 1 approval
  - Require status checks: CI pass
  - Require branches up to date
  - Restrict pushes: no direct push
  - Require signed commits (optional)

develop:
  - Require pull request review: 1 approval
  - Require status checks: CI pass
  - Allow force push: no
```

## 11. SOLO DEVELOPER ADAPTATION

> **"Bạn là 1 người, nhưng workflow phải chuẩn như team 10 người. Đây là proof of process."**

### 11.1 Self-Review Checklist (Before Creating PR)

```markdown
## Self-Review Checklist

### Code Quality

- [ ] Tôi đã đọc từng dòng code vừa viết
- [ ] Không còn `console.log`, `debugger`, `TODO` tạm
- [ ] Không còn `any` type
- [ ] Error handling đầy đủ (loading, error, empty states)
- [ ] Không còn dead code (comment out, unused imports)

### Testing

- [ ] Tôi đã chạy test local: `npm test`
- [ ] Tôi đã test thủ công trên UI (nếu có)
- [ ] Edge cases đã handle (empty, error, loading)

### Documentation

- [ ] ADR cập nhật nếu có quyết định kiến trúc
- [ ] Complex logic có comment giải thích "tại sao"
- [ ] Public API có JSDoc (nếu dùng)

### Git

- [ ] Commit message theo convention
- [ ] Branch đã rebase với develop mới nhất
- [ ] Không còn merge conflict
```

### 11.2 AI as Reviewer

```bash
# 1. Tạo PR description tự động
gh pr create --title "feat(commerce): add product table" \
             --body "$(cat .github/pull_request_template.md)"

# 2. Yêu cầu AI review
# Prompt: "Review this PR diff for: type safety, error handling,
#          performance issues, security concerns.
#          Suggest improvements with code examples."

# 3. Fix AI suggestions hợp lý, document lý do nếu từ chối

# 4. Self-approve và merge (vì là solo)
# Nhưng vẫn phải: CI xanh + checklist pass
```

## 12. TROUBLESHOOTING

### 12.1 Common Issues

| Issue               | Cause                           | Fix                                                    |
| ------------------- | ------------------------------- | ------------------------------------------------------ |
| `git push rejected` | Remote có commit mới            | `git pull --rebase` rồi push                           |
| Conflict liên tục   | File quá lớn, nhiều người sửa   | Tách file, modularize                                  |
| Commit message sai  | Quên convention                 | `git commit --amend`                                   |
| Push nhầm branch    | Không check branch trước commit | `git reset --soft HEAD~1`, stash, checkout đúng branch |
| Quên add file       | `git commit` thiếu              | `git commit --amend`                                   |

### 12.2 Recovery Commands

```bash
# Undo last commit, giữ changes
git reset --soft HEAD~1

# Undo last commit, xóa changes (CẨN THẬN)
git reset --hard HEAD~1

# Recover deleted branch
git reflog
# Tìm commit hash của branch đã xóa
git checkout -b branch-name commit-hash

# Amend commit message
git commit --amend -m "feat(commerce): add product table"

# Amend commit, thêm file quên
git add forgotten-file.ts
git commit --amend --no-edit
```

## 13. REVISION HISTORY

| Version | Date       | Changes                                                               |
| ------- | ---------- | --------------------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Git Flow đơn giản hóa, PR workflow, solo adaptation |

---

> **"Git workflow không phải để ràng buộc 1 người. Nó là bằng chứng bạn có thể làm việc trong team 10 người mà không làm hỏng production."**

---

Tóm tắt:

1. **Philosophy** — Git history là tài liệu, 5 quy tắc vàng
2. **Branch Strategy** — Git Flow đơn giản hóa, 6 loại branch, naming convention, lifecycle
3. **Commit Convention** — Tóm tắt (chi tiết ở 06), type reference, commit rules
4. **PR Workflow** — PR template, size guidelines, description rules
5. **Code Review Process** — Checklist, comment convention (🔴🟡🟢💡), reviewer responsibilities, AI-assisted review
6. **Merge Strategy** — 3 methods, default squash & merge, không merge khi...
7. **Conflict Resolution** — Prevention + resolution steps
8. **Rollback & Revert** — Revert commit, reset, hotfix rollback
9. **Tag & Release** — Semantic versioning, release branch workflow
10. **CI/CD Integration** — GitHub Actions workflow, branch protection rules
11. **Solo Developer Adaptation** — Self-review checklist, AI as reviewer
12. **Troubleshooting** — Common issues + recovery commands
