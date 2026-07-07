# Engineering Playbook — 05: Branching Strategy

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Git Flow vs Trunk-based — Decision & Implementation  
> **Decision:** Git Flow đơn giản hóa cho solo, Trunk-based readiness cho team growth

## 1. CONTEXT & CONSTRAINTS

### 1.1 Current State

- **Team size:** 1 người (solo developer)
- **Project count:** 3 projects song song
- **Deploy target:** Vercel (automatic preview + production)
- **CI/CD:** GitHub Actions

### 1.2 Future State (12-18 tháng)

- **Team size:** 2-5 người
- **Release frequency:** Weekly → Daily
- **Complexity:** Multi-module, potential Module Federation

### 1.3 Decision Drivers

| Driver            | Weight | Rationale                                 |
| ----------------- | ------ | ----------------------------------------- |
| Solo efficiency   | High   | Không cần overhead quá lớn                |
| Team readiness    | High   | Workflow phải scale lên team              |
| Rollback safety   | High   | 1 người = dễ lỗi, cần safety net          |
| Release control   | Medium | Portfolio project = không critical uptime |
| Feature isolation | Medium | Cần context switch giữa 3 projects        |

## 2. STRATEGY COMPARISON

### 2.1 Git Flow (Simplified)

```
main (production — always deployable)
    ↑
develop (integration — features merged, tested)
    ↑
feature/EP-001-*    feature/EP-002-*    fix/EP-042-*
    ↑                   ↑                   ↑
  local              local               local
```

| Aspect                  | Implementation                                             |
| ----------------------- | ---------------------------------------------------------- |
| **Long-lived branches** | `main`, `develop`                                          |
| **Feature branches**    | Từ `develop`, merge về `develop`                           |
| **Release**             | Tag trên `main`, hoặc release branch nếu cần hotfix window |
| **Hotfix**              | Từ `main`, merge về cả `main` + `develop`                  |

### 2.2 Trunk-based Development

```
main (trunk — production + integration)
    ↑
feature/EP-001-*    feature/EP-002-*    fix/EP-042-*
    ↑                   ↑                   ↑
  local              local               local
  (short-lived: < 1 day)
```

| Aspect                       | Implementation                                     |
| ---------------------------- | -------------------------------------------------- |
| **Single long-lived branch** | `main`                                             |
| **Feature branches**         | Rất ngắn (< 1 day), merge về `main`                |
| **Release**                  | Tag trên `main`, feature flags để hide WIP         |
| **Hotfix**                   | Commit trực tiếp lên `main` (hoặc branch cực ngắn) |

### 2.3 Comparison Matrix

| Criteria               | Git Flow               | Trunk-based               | Winner      |
| ---------------------- | ---------------------- | ------------------------- | ----------- |
| Solo overhead          | Thấp (develop buffer)  | Thấp hơn (1 branch)       | Trunk-based |
| Feature isolation      | Tốt (develop buffer)   | Cần feature flags         | Git Flow    |
| Rollback safety        | Tốt (main luôn stable) | Cần CI/CD mạnh            | Git Flow    |
| Team transition        | Dễ (familiar)          | Cần training              | Git Flow    |
| Release frequency      | Weekly/Monthly         | Daily/Hourly              | Trunk-based |
| Feature flags required | Không bắt buộc         | Bắt buộc                  | Git Flow    |
| Code review culture    | PR → develop           | PR → main (nhỏ, liên tục) | Trunk-based |
| Portfolio proof        | Shows process          | Shows velocity            | Tie         |

## 3. DECISION: HYBRID — "Git Flow Lite"

### 3.1 Rationale

> **"Solo developer không cần overhead của Git Flow đầy đủ, nhưng cần proof of process cho team. Hybrid cho cả hai."**

**Chọn Git Flow Lite vì:**

1. **Feature isolation:** 3 projects song song, cần context switch
2. **Rollback safety:** 1 người dễ push lỗi lên production
3. **Team readiness:** Git Flow vẫn phổ biến ở enterprise
4. **No feature flags:** Không cần infrastructure phức tạp cho solo
5. **ADR proof:** Có thể giải thích trade-off trong interview

### 3.2 Hybrid Structure

```
main (production — deploy on Vercel)
    ↑ merge — squash & merge
develop (integration — preview deploy)
    ↑ merge — squash & merge
feature/EP-001-*    feature/EP-002-*    fix/EP-042-*
    ↑                   ↑                   ↑
  local              local               local
  (lifespan: 1-3 days)  (lifespan: 1-3 days)  (lifespan: hours)
```

### 3.3 Branch Rules

| Branch       | Purpose                 | Direct Push | Lifespan    |
| ------------ | ----------------------- | ----------- | ----------- |
| `main`       | Production code         | ❌ No       | Permanent   |
| `develop`    | Integration, preview    | ❌ No       | Permanent   |
| `feature/*`  | New feature             | ❌ No       | 1-3 days    |
| `fix/*`      | Bug fix                 | ❌ No       | Hours-1 day |
| `hotfix/*`   | Critical production fix | ❌ No       | Hours       |
| `docs/*`     | Documentation           | ❌ No       | Hours       |
| `refactor/*` | Code restructuring      | ❌ No       | 1-3 days    |

## 4. IMPLEMENTATION DETAILS

### 4.1 Branch Lifecycle: Feature

```bash
# 1. Start — luôn từ develop mới nhất
git checkout develop
git pull origin develop
git checkout -b feature/EP-006-commerce-table

# 2. Work — commit thường xuyên, push daily
git add .
git commit -m "feat(commerce): add TanStack Table setup"
git push -u origin feature/EP-006-commerce-table

# 3. Sync — rebase khi develop thay đổi
git fetch origin
git rebase origin/develop
# Resolve conflicts nếu có

# 4. Pre-merge — đảm bảo clean
git rebase -i origin/develop
# Squash WIP commits, rewrite message theo convention

# 5. PR → develop
gh pr create --base develop --title "feat(commerce): add product table"

# 6. Post-merge — xóa branch
git checkout develop
git pull origin develop
git branch -d feature/EP-006-commerce-table
git push origin --delete feature/EP-006-commerce-table
```

### 4.2 Branch Lifecycle: Hotfix

```bash
# 1. Start — từ main, URGENT
git checkout main
git pull origin main
git checkout -b hotfix/critical-auth-bypass

# 2. Fix — minimal change, test nhanh
git add .
git commit -m "fix(auth): prevent token leak in error message"

# 3. PR → main (fast-track, self-approve nếu solo)
gh pr create --base main --title "hotfix: prevent token leak"

# 4. Merge và tag
git checkout main
git merge --squash hotfix/critical-auth-bypass
git tag -a v1.0.1 -m "Hotfix: auth token leak"

# 5. Backport → develop (KHÔNG QUÊN)
git checkout develop
git merge main  # hoặc cherry-pick commit
git push origin develop

# 6. Cleanup
git branch -d hotfix/critical-auth-bypass
git push origin --delete hotfix/critical-auth-bypass
```

### 4.3 Branch Lifecycle: Release (Optional)

```bash
# Khi cần release window (freeze feature, chỉ bugfix)
git checkout develop
git checkout -b release/v1.1.0

# Bump version, update CHANGELOG.md
# Chỉ fix bug, KHÔNG thêm feature
git commit -m "chore(release): bump version to v1.1.0"

# Merge về main
git checkout main
git merge --no-ff release/v1.1.0
git tag -a v1.1.0 -m "Release v1.1.0"

# Merge về develop
git checkout develop
git merge --no-ff release/v1.1.0

git branch -d release/v1.1.0
```

## 5. WHEN TO SWITCH TO TRUNK-BASED

### 5.1 Triggers

| Trigger                            | Action                  |
| ---------------------------------- | ----------------------- |
| Team > 3 người                     | Evaluate Trunk-based    |
| Release frequency > 1/week         | Switch to Trunk-based   |
| Feature flags infrastructure ready | Switch to Trunk-based   |
| CI/CD < 5 min                      | Trunk-based viable      |
| Main branch deploy daily           | Trunk-based natural fit |

### 5.2 Migration Path

```
Current: Git Flow Lite
    ↓
Step 1: Shorten feature branch lifespan (< 1 day)
    ↓
Step 2: Add feature flags (Unleash/LaunchDarkly)
    ↓
Step 3: Merge feature branches trực tiếp → main
    ↓
Step 4: Remove develop branch
    ↓
Target: Trunk-based + Feature Flags
```

### 5.3 ADR Template (Khi Switch)

```markdown
# ADR-XXX: Switch from Git Flow to Trunk-based Development

## Status

Proposed → Accepted

## Context

- Team grew from 1 to 5 developers
- Release frequency increased from monthly to daily
- Feature flags infrastructure deployed (Unleash)

## Decision

Switch to Trunk-based with feature flags

## Consequences

- Positive: Faster iteration, smaller PRs, less merge conflict
- Negative: Requires feature flags discipline, CI/CD must be < 5 min
- Risks: WIP code on main → mitigated by feature flags
```

## 6. SOLO DEVELOPER ADAPTATIONS

### 6.1 Self-Approval Process

```bash
# Vì là solo, không có reviewer thật
# Nhưng vẫn phải qua "review gate":

# 1. Tạo PR
gh pr create --base develop

# 2. Self-review checklist (04-git-workflow.md)
# - [ ] Build pass
# - [ ] Test pass
# - [ ] No console.log
# - [ ] No any type
# - [ ] ADR updated nếu cần

# 3. AI review (Claude Code / Copilot)
# Prompt: "Review this PR for type safety, error handling, performance"

# 4. Fix issues hợp lý

# 5. Self-approve (document trong PR: "Self-approved after AI review + checklist")
gh pr review --approve --body "Self-approved: AI review passed, checklist complete"

# 6. Merge (chỉ khi CI xanh)
gh pr merge --squash
```

### 6.2 Context Switching (3 Projects)

```bash
# Mỗi project = 1 repo riêng
# Không mix project trong 1 repo

project-1-enterprise-admin/
  ├── main
  ├── develop
  └── feature/EP-001-*

project-2-property-platform/
  ├── main
  ├── develop
  └── feature/EP-001-*

project-3-investment-tracker/
  ├── main
  ├── develop
  └── feature/EP-001-*

# Workflow: Focus 1 project per sprint
# Sprint 1-5: P1
# Sprint 6-10: P2
# Sprint 11-15: P3
# Không nhảy qua lại giữa project trong 1 ngày
```

### 6.3 Emergency Fix Protocol

```bash
# Scenario: P1 production lỗi khi đang làm P2

# 1. Stash hoặc commit WIP ở P2
cd project-2-property-platform
git stash push -m "WIP: property form validation"

# 2. Chuyển sang P1
cd project-1-enterprise-admin
git checkout main
git pull origin main
git checkout -b hotfix/critical-table-crash

# 3. Fix, test, deploy
# ... code ...
git commit -m "fix(table): prevent crash on empty filter result"
gh pr create --base main
# Self-review, merge, deploy

# 4. Quay lại P2
cd project-2-property-platform
git stash pop
```

## 7. BRANCH PROTECTION (GitHub Settings)

### 7.1 main Branch

```
☑ Require a pull request before merging
  ☑ Require approvals: 1 (self-approve for solo)
☑ Require status checks to pass
  ☑ Require branches to be up to date
  Status checks: CI / lint-and-type, CI / test, CI / build
☑ Restrict pushes that create files larger than 100MB
☑ Allow force pushes: No
☑ Allow deletions: No
```

### 7.2 develop Branch

```
☑ Require a pull request before merging
  ☑ Require approvals: 1 (self-approve for solo)
☑ Require status checks to pass
  Status checks: CI / lint-and-type, CI / test
☑ Allow force pushes: No
```

### 7.3 Automation

```yaml
# .github/workflows/branch-protection.yml
name: Enforce Branch Protection

on:
  pull_request:
    branches: [main, develop]

jobs:
  enforce:
    runs-on: ubuntu-latest
    steps:
      - name: Check PR size
        run: |
          CHANGED_FILES=$(git diff --name-only origin/${{ github.base_ref }} | wc -l)
          if [ $CHANGED_FILES -gt 25 ]; then
            echo "::error::PR too large: $CHANGED_FILES files (max 25)"
            exit 1
          fi
```

## 8. VISUAL WORKFLOW

### 8.1 Normal Feature Development

```
Day 1: git checkout -b feature/EP-006-commerce-table
        ↓
        Code → Commit → Push
        ↓
Day 2: Code → Commit → Push
        ↓
        Rebase develop
        ↓
Day 3: Final commit → PR → develop
        ↓
        CI pass → Self-review → Merge
        ↓
        Delete branch
```

### 8.2 Hotfix Scenario

```
10:00  Bug reported in production
       ↓
10:05  git checkout -b hotfix/auth-token-leak
       ↓
10:15  Fix + test local
       ↓
10:20  PR → main
       ↓
10:25  CI pass → Merge → Tag v1.0.1
       ↓
10:30  Deploy to production
       ↓
10:35  Backport → develop
       ↓
10:40  Delete branch
```

---

## 9. METRICS & MONITORING

### 9.1 Branch Health

| Metric                  | Target       | Measurement                          |
| ----------------------- | ------------ | ------------------------------------ |
| Feature branch lifespan | < 3 days     | `git log --format="%ar" feature/...` |
| PR review time          | < 24h (self) | GitHub PR timestamp                  |
| Merge conflict rate     | < 10%        | Manual tracking                      |
| Hotfix frequency        | < 1/month    | Tag count                            |
| CI pass rate            | > 95%        | GitHub Actions stats                 |

### 9.2 Monthly Review

```markdown
## Branch Strategy Review — [Month]

### Metrics

- Feature branches created: X
- Average branch lifespan: X days
- Hotfixes: X
- CI failure rate: X%

### Issues

- [ ] Issue 1: Branches lasting > 3 days → Cause? Fix?
- [ ] Issue 2: Frequent conflicts → Modularize more?

### Decisions

- [ ] Keep Git Flow Lite / Switch to Trunk-based?
- [ ] Adjust branch protection rules?
```

## 10. ADR: BRANCHING STRATEGY CHOICE

```markdown
# ADR-005: Branching Strategy — Git Flow Lite

## Status

Accepted

## Context

- Solo developer, 3 projects song song
- Need proof of process for team transition
- Vercel deploy with preview + production
- No feature flags infrastructure yet

## Decision

Use Git Flow Lite (simplified Git Flow):

- main + develop long-lived branches
- Short-lived feature/fix branches
- Squash & merge default
- Tag releases on main

## Alternatives Considered

### Trunk-based

- Pros: Faster iteration, smaller PRs, modern practice
- Cons: Requires feature flags (not implemented),
  higher risk for solo developer without reviewer
- Verdict: Rejected for now, evaluate at team > 3

### Full Git Flow

- Pros: Mature, well-documented, enterprise-friendly
- Cons: Release branch overhead unnecessary for solo,
  too ceremony for portfolio projects
- Verdict: Rejected, too heavy

## Consequences

- Positive: Clear isolation, rollback safety, team-ready
- Negative: Slightly slower than Trunk-based, develop branch overhead
- Migration: Evaluate Trunk-based when team grows or feature flags ready
```

## 11. REVISION HISTORY

| Version | Date       | Changes                                                         |
| ------- | ---------- | --------------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Git Flow Lite for solo, Trunk-based readiness |

---

> **"Branch strategy không phải để chọn cái 'tốt nhất'. Nó là trade-off giữa safety và speed — và bạn phải biết tại sao mình chọn cái này, và khi nào đổi sang cái khác."**

---

Tóm tắt:

1. **Context & Constraints** — Current state (solo) vs Future state (team 2-5), decision drivers
2. **Strategy Comparison** — Git Flow vs Trunk-based, comparison matrix 9 criteria
3. **Decision: Hybrid "Git Flow Lite"** — Rationale, structure, branch rules
4. **Implementation Details** — Branch lifecycle cho Feature, Hotfix, Release với commands đầy đủ
5. **When to Switch to Trunk-based** — Triggers, migration path, ADR template
6. **Solo Developer Adaptations** — Self-approval process, context switching 3 projects, emergency fix protocol
7. **Branch Protection** — GitHub settings cho main và develop, automation
8. **Visual Workflow** — Normal feature và hotfix scenario với timeline
9. **Metrics & Monitoring** — 5 metrics + monthly review template
10. **ADR: Branching Strategy Choice** — Complete ADR với alternatives considered
