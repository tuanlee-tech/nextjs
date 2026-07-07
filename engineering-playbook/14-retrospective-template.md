# Engineering Playbook — 14: Retrospective Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Sprint review format — 3 Projects  
> **Principle:** "Retrospective không phải để blame. Nó là để học. Nếu sprint hoàn hảo, bạn không học được gì."

## 1. PHILOSOPHY

### 1.1 Retrospective = Learning Loop

> **"Không phải 'sprint này tốt không'. Phải là 'sprint này học được gì, áp dụng sprint sau thế nào'."**

### 1.2 Solo Developer Adaptation

| Team Retro           | Solo Retro               |
| -------------------- | ------------------------ |
| Team dynamics        | Self-awareness           |
| Communication issues | Focus/energy management  |
| Process conflicts    | Process efficiency       |
| Shared learning      | Personal growth tracking |

## 2. RETROSPECTIVE TEMPLATE

```markdown
# Sprint Retrospective — [Sprint Number]: [Sprint Goal]

## Metadata

| Field               | Value                                 |
| ------------------- | ------------------------------------- |
| **Sprint**          | [Sprint X]                            |
| **Dates**           | [YYYY-MM-DD] to [YYYY-MM-DD]          |
| **Project**         | [P1/P2/P3]                            |
| **Goal**            | [What was the sprint goal?]           |
| **Velocity**        | [X hours completed / Y hours planned] |
| **Completion Rate** | [X%]                                  |

---

## 1. What Went Well

### Achievements

- [ ] [Achievement 1 — specific, measurable]
- [ ] [Achievement 2 — specific, measurable]

### Why It Went Well

- [Factor 1]: [What contributed to success?]
- [Factor 2]: [What contributed to success?]

### Keep Doing

- [ ] [Practice 1 to maintain]
- [ ] [Practice 2 to maintain]

---

## 2. What Went Wrong

### Problems

- [ ] [Problem 1 — specific, with impact]
- [ ] [Problem 2 — specific, with impact]

### Root Cause

- [Problem 1]: [Why did this happen? 5 Whys if applicable]
- [Problem 2]: [Why did this happen?]

### Stop Doing / Change

- [ ] [Practice 1 to stop or change]
- [ ] [Practice 2 to stop or change]

---

## 3. What I Learned

### Technical Learnings

- [Learning 1]: [What new technical skill/knowledge?]
- [Learning 2]: [What new technical skill/knowledge?]

### Process Learnings

- [Learning 1]: [What about workflow, tools, habits?]
- [Learning 2]: [What about workflow, tools, habits?]

### AI Collaboration Learnings

- [Learning 1]: [What about working with AI?]
- [Learning 2]: [What about working with AI?]

---

## 4. Metrics Review

### Planned vs Actual

| Metric          | Planned | Actual | Variance | Analysis |
| --------------- | ------- | ------ | -------- | -------- |
| Hours completed | [X]     | [Y]    | [Z%]     | [Why?]   |
| Tasks completed | [X]     | [Y]    | [Z%]     | [Why?]   |
| Bugs introduced | [X]     | [Y]    | [Z%]     | [Why?]   |
| Bugs fixed      | [X]     | [Y]    | [Z%]     | [Why?]   |
| Tests written   | [X]     | [Y]    | [Z%]     | [Why?]   |
| Documentation   | [X]     | [Y]    | [Z%]     | [Why?]   |

### Quality Metrics

| Metric            | Target   | Actual | Status |
| ----------------- | -------- | ------ | ------ |
| Build pass rate   | 100%     | [X%]   | ✅/❌  |
| Test pass rate    | 100%     | [X%]   | ✅/❌  |
| TypeScript strict | 0 errors | [X]    | ✅/❌  |
| Lighthouse score  | > 95     | [X]    | ✅/❌  |
| Code coverage     | > 70%    | [X%]   | ✅/❌  |

---

## 5. Action Items

| Action     | Owner  | Due Date | Priority   | Status      |
| ---------- | ------ | -------- | ---------- | ----------- |
| [Action 1] | [Name] | [Date]   | [P0/P1/P2] | [Open/Done] |
| [Action 2] | [Name] | [Date]   | [P0/P1/P2] | [Open/Done] |

---

## 6. Next Sprint Planning

### Carry Over

- [Task ID]: [Description] — [Reason for carry over]

### New Priorities

- [Priority 1]: [Why?]
- [Priority 2]: [Why?]

### Process Changes

- [Change 1]: [What to do differently?]
- [Change 2]: [What to do differently?]

---

## 7. Mood & Energy

| Day | Energy (1-10) | Focus (1-10) | Notes                         |
| --- | ------------- | ------------ | ----------------------------- |
| Mon | [X]           | [Y]          | [What affected energy/focus?] |
| Tue | [X]           | [Y]          |                               |
| Wed | [X]           | [Y]          |                               |
| Thu | [X]           | [Y]          |                               |
| Fri | [X]           | [Y]          |                               |

### Patterns

- [Pattern 1]: [When is energy highest? Lowest?]
- [Pattern 2]: [What affects focus?]

### Adjustments

- [Adjustment 1]: [How to optimize energy/focus?]

---

## 8. Notes

- [Random thought, idea, observation]
```

## 3. EXAMPLES

### 3.1 Sprint 3 — P1 Commerce Module

```markdown
# Sprint Retrospective — Sprint 3: Commerce Table + Order Pipeline

## Metadata

| Field               | Value                                         |
| ------------------- | --------------------------------------------- |
| **Sprint**          | Sprint 3                                      |
| **Dates**           | 2026-07-08 to 2026-07-21                      |
| **Project**         | P1 — Enterprise Admin Platform                |
| **Goal**            | Complete product table + start order pipeline |
| **Velocity**        | 32 hours completed / 40 hours planned         |
| **Completion Rate** | 80%                                           |

---

## 1. What Went Well

### Achievements

- [x] Product table với sorting, filtering, pagination — hoàn thành đúng spec
- [x] TanStack Virtual integrate thành công, 10k rows scroll 60 FPS
- [x] ADR-001 viết xong — Redux Saga scope decision documented

### Why It Went Well

- **Pre-sprint planning tốt:** Task breakdown chi tiết, estimate chính xác
- **AI collaboration hiệu quả:** Claude Code implement table logic nhanh, tôi focus vào review + edge cases
- **Early testing:** Viết test song song với code, không để cuối sprint

### Keep Doing

- [ ] Task breakdown trước sprint
- [ ] Test song song với implementation
- [ ] ADR viết trong lúc quyết định, không để cuối

---

## 2. What Went Wrong

### Problems

- [ ] Order pipeline chưa xong — chỉ xong 50%
- [ ] 2 bugs phát hiện cuối sprint — fix mất 4 giờ

### Root Cause

- **Order pipeline delay:** Underestimate complexity của state machine.
  - Estimate: 8 giờ. Actual: 16 giờ cần.
  - Why? Chưa research đủ về finite state machine pattern trước sprint.
  - Why? Không có spike task cho unknown technical approach.
- **Bugs cuối sprint:**
  - Bug 1: Sort icon không đổi chiều (EP-B-023) — thiếu visual testing
  - Bug 2: Pagination reset khi filter — thiếu integration test cho filter + pagination combo

### Stop Doing / Change

- [ ] Không estimate task > 8 giờ không có spike/research trước
- [ ] Không skip integration test cho feature interaction (filter + pagination)
- [ ] Thêm "visual check" vào self-review checklist

---

## 3. What I Learned

### Technical Learnings

- **TanStack Virtual:** `overscan` config quan trọng — default 5 không đủ cho smooth scroll, cần 10-15
- **Redux Saga `race`:** Pattern này powerful cho cancellation, nhưng dễ leak nếu không cleanup đúng
- **Zod `.transform()`:** Có thể transform input trong schema, không cần separate mapper

### Process Learnings

- **Morning = best coding time:** Energy cao nhất 8-12am. Afternoon nên dùng cho review, docs, test.
- **AI prompt specificity:** Càng specific càng tốt. "Implement table" = 2 giờ review. "Implement table với columns A,B,C, sort by click header, 20/page" = 30 phút review.

### AI Collaboration Learnings

- **AI giỏi generate boilerplate, dở ở edge cases:** AI viết table logic OK, nhưng không handle empty state + error state. Cần explicit yêu cầu.
- **AI suggest optimization không cần:** Claude Code suggest `useMemo` cho sort function — nhưng sort là O(n log n) với < 1000 items, không cần. Từ chối = đúng quyết định.

## 4. Metrics Review

### Planned vs Actual

| Metric          | Planned | Actual | Variance | Analysis                        |
| --------------- | ------- | ------ | -------- | ------------------------------- |
| Hours completed | 40      | 32     | -20%     | Order pipeline underestimate    |
| Tasks completed | 5       | 4      | -20%     | Order pipeline carry over       |
| Bugs introduced | 0       | 2      | +2       | Thiếu visual + integration test |
| Bugs fixed      | 2       | 2      | 0        | Fixed trong sprint              |
| Tests written   | 10      | 8      | -20%     | Rush cuối sprint                |
| Documentation   | 2 ADRs  | 1 ADR  | -50%     | Order ADR chưa viết             |

### Quality Metrics

| Metric            | Target   | Actual   | Status |
| ----------------- | -------- | -------- | ------ |
| Build pass rate   | 100%     | 100%     | ✅     |
| Test pass rate    | 100%     | 100%     | ✅     |
| TypeScript strict | 0 errors | 0 errors | ✅     |
| Lighthouse score  | > 95     | 97       | ✅     |
| Code coverage     | > 70%    | 68%      | ❌     |

## 5. Action Items

| Action                                     | Owner | Due Date   | Priority | Status |
| ------------------------------------------ | ----- | ---------- | -------- | ------ |
| Add spike task template cho unknown tech   | Me    | 2026-07-22 | P0       | Open   |
| Update self-review checklist: visual check | Me    | 2026-07-22 | P1       | Open   |
| Write ADR-001 (Redux Saga) nếu chưa xong   | Me    | 2026-07-23 | P1       | Open   |
| Add integration test: filter + pagination  | Me    | 2026-07-24 | P1       | Open   |
| Schedule coding block 8-12am               | Me    | Ongoing    | P2       | Open   |

## 6. Next Sprint Planning

### Carry Over

- EP-F-007: Order pipeline state machine — 8 giờ còn lại
- EP-D-001: ADR-001 Redux Saga — 1 giờ

### New Priorities

- P1: Complete order pipeline (P0 — blocker cho Sprint 4)
- P1: Order bulk actions (P1 — depends on pipeline)
- P1: Activity log (P2 — nếu có thời gian)

### Process Changes

- [ ] Thêm 2 giờ buffer cho mỗi sprint (unplanned work)
- [ ] Spike task cho technical unknown (> 4 giờ research)
- [ ] No new task sau Wednesday — Friday dành cho polish + test

## 7. Mood & Energy

| Day | Energy (1-10) | Focus (1-10) | Notes                                    |
| --- | ------------- | ------------ | ---------------------------------------- |
| Mon | 8             | 9            | Fresh start, plan rõ ràng                |
| Tue | 8             | 8            | Product table coding                     |
| Wed | 7             | 7            | Table testing, AI review                 |
| Thu | 6             | 5            | Order pipeline — stuck với state machine |
| Fri | 5             | 4            | Bug fix cuối sprint, mệt                 |

### Patterns

- **Energy drop Thursday-Friday:** Cần lighter task cuối tuần (docs, review, không coding nặng)
- **Focus best 8-10am:** Schedule complex task sáng sớm

### Adjustments

- [ ] Complex coding: Monday-Wednesday morning
- [ ] Thursday-Friday: docs, review, test, planning
- [ ] Take 15-min walk khi energy < 6

## 8. Notes

- **Idea:** Tạo "AI prompt library" — lưu prompt hiệu quả để reuse
- **Observation:** Solo development dễ lose context sau 2 ngày không touch code. Cần daily notes.
- **Question:** Có nên dùng time-tracking tool (Toggl) thay vì manual log?
```

## 4. RETROSPECTIVE FREQUENCY

| Context        | Frequency                 | Duration    |
| -------------- | ------------------------- | ----------- |
| Solo developer | Weekly (Friday afternoon) | 30-45 min   |
| Team 3-5       | Bi-weekly (end of sprint) | 1 hour      |
| Team 5+        | Bi-weekly, facilitated    | 1-1.5 hours |

## 5. RETROSPECTIVE FORMATS

### 5.1 Standard (Solo)

```
1. What went well (5 min)
2. What went wrong + root cause (10 min)
3. What I learned (5 min)
4. Metrics review (5 min)
5. Action items (5 min)
6. Next sprint planning (5 min)
```

### 5.2 Starfish (Team)

| Category        | Question                        | Action     |
| --------------- | ------------------------------- | ---------- |
| **Keep Doing**  | What's working?                 | Maintain   |
| **Less Of**     | What's consuming too much time? | Reduce     |
| **More Of**     | What's helping but not enough?  | Increase   |
| **Stop Doing**  | What's not adding value?        | Eliminate  |
| **Start Doing** | What new practice to try?       | Experiment |

### 5.3 Sailboat (Visual)

```
        🌬️ Wind (what's pushing us forward)
           |
    ⛵  Boat (team/project)
           |
        🪨 Rocks (risks ahead)
           |
        ⚓ Anchor (what's holding us back)
```

## 6. ACTION ITEM TRACKING

### 6.1 From Retro to Action

```markdown
## Sprint 3 Actions → Sprint 4 Review

| Action                             | From Sprint | Due      | Status      | Evidence                            |
| ---------------------------------- | ----------- | -------- | ----------- | ----------------------------------- |
| Add spike task template            | 3           | S4 start | Done        | 11-task-template.md updated         |
| Update self-review checklist       | 3           | S4 start | Done        | 07-code-review-checklist.md updated |
| Write ADR-001                      | 3           | S4 start | Done        | docs/adr/ADR-001.md                 |
| Integration test filter+pagination | 3           | S4 mid   | Done        | ProductTable.integration.test.ts    |
| Schedule coding block 8-12am       | 3           | Ongoing  | In Progress | Calendar blocked                    |

### Completion Rate: 80% → Target: > 90%
```

## 7. LONG-TERM TRENDS

### 7.1 Velocity Chart

```
Sprint 0 (Bootstrap): 20h planned, 18h actual (90%)
Sprint 1 (Auth): 40h planned, 35h actual (88%)
Sprint 2 (Layout): 40h planned, 38h actual (95%)
Sprint 3 (Commerce): 40h planned, 32h actual (80%) ← Learning: underestimate
Sprint 4 (Order): 36h planned, 34h actual (94%) ← Fixed: added buffer
```

### 7.2 Quality Trends

```
Bug count per sprint:
Sprint 0: 0
Sprint 1: 1
Sprint 2: 0
Sprint 3: 2 ← Spike: visual testing missing
Sprint 4: 0 ← Fixed: added visual check
```

## 8. INTERVIEW USAGE

### 8.1 Answering "How Do You Handle Setbacks?"

> "Sprint 3 tôi underestimate order pipeline — plan 8 giờ nhưng cần 16.
> Retrospective giúp tôi identify root cause: không có spike task cho unknown tech.
> Action item: Thêm spike task cho mọi technical approach mới.
> Sprint 4: Estimate chính xác hơn, completion rate 94%.
> Tôi không xem setback là failure — là data để improve process."

### 8.2 Answering "How Do You Improve?"

> "Tôi làm retrospective hàng tuần — solo nhưng vẫn formal.
> Track metrics: velocity, bug count, code coverage, energy levels.
> Tôi nhận ra pattern: energy cao nhất 8-12am, nên schedule complex task sáng.
> AI collaboration: AI giỏi boilerplate, dở edge cases — nên tôi explicit yêu cầu states.
> Mỗi sprint có 2-3 action items, review ở sprint sau.
> Đây là cách tôi continuous improve — không chỉ code, mà cả process."

## 9. REVISION HISTORY

| Version | Date       | Changes                                                     |
| ------- | ---------- | ----------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Retrospective template, formats, tracking |

---

> **"Retrospective không phải để nhớ quá khứ. Nó là để thay đổi tương lai. Nếu bạn viết xong mà không có action item, bạn chỉ đang viết nhật ký."**

---

Tóm tắt:

1. **Philosophy** — Retrospective = learning loop, solo vs team adaptation
2. **Retrospective Template** — Complete template với 8 sections: Metadata, What Went Well, What Went Wrong, What I Learned, Metrics Review, Action Items, Next Sprint Planning, Mood & Energy, Notes
3. **Example** — Sprint 3 P1 Commerce Module với full metrics, root cause (5 Whys), AI learnings, energy tracking
4. **Retrospective Frequency** — Weekly 30-45 min cho solo
5. **Formats** — Standard, Starfish, Sailboat
6. **Action Item Tracking** — From retro to action với completion rate
7. **Long-Term Trends** — Velocity chart, quality trends
8. **Interview Usage** — 2 example answers: setbacks và continuous improvement
