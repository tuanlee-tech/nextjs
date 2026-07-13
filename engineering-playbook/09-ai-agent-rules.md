# Engineering Playbook — 09: AI Agent Rules

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** AI Collaboration — Claude Code / Claude / Copilot / ChatGPT  
> **Principle:** "AI là Junior Dev. Tôi là Senior Dev review code của junior. Mọi output đều qua review dòng-by-dòng."

## 1. PHILOSOPHY

### 1.1 AI Không Phải Oracle

> **"AI đúng 70%, 20% là chấp nhận được nhưng không tối ưu. 10% là sai hoàn toàn (outright wrong) — và 10% đó có thể phá hỏng production."**

### 1.2 AI Collaboration = Code Review

| AI Role                         | Your Role                           |
| ------------------------------- | ----------------------------------- |
| Implement theo spec đã thiết kế | Thiết kế spec, architecture         |
| Generate boilerplate            | Review, accept/reject               |
| Viết test theo yêu cầu          | Define test strategy, edge cases    |
| Refactor theo instruction       | Quyết định refactor cần thiết không |
| Suggest optimization            | Measure trước khi optimize          |
| Document theo template          | Quyết định cái gì cần document      |

## 2. AI ĐƯỢC PHÉP

### 2.1 Allowed Actions

| Action                    | Example                                               | Condition                                   |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| **Implement theo spec**   | "Implement ProductTable với sorting theo design doc"  | Spec đã review, acceptance criteria rõ ràng |
| **Refactor theo yêu cầu** | "Refactor OrderCard thành compound component"         | Bạn đã quyết định refactor                  |
| **Generate boilerplate**  | "Generate Zod schema cho Product type"                | Type đã define rõ                           |
| **Viết test**             | "Viết unit test cho calculateTotal"                   | Logic đã implement, edge cases đã liệt kê   |
| **Viết document**         | "Viết JSDoc cho public API"                           | API signature đã finalize                   |
| **Explain code**          | "Giải thích cách Redux Saga hoạt động trong code này" | Code đã viết                                |
| **Suggest alternatives**  | "Có cách nào optimize render này không?"              | Bạn đo performance trước                    |

### 2.2 AI Prompt Best Practices

```markdown
## ✅ Good Prompt Structure

### Context

"I đang xây Enterprise Admin Platform (React 18 + TypeScript strict).
Module: Commerce. Feature: Order pipeline."

### Task

"Implement order status transition từ 'pending' → 'confirmed' → 'shipped' → 'delivered'."

### Constraints

- Dùng Redux Saga, giới hạn scope: chỉ order pipeline
- State machine pattern với guard functions
- Optimistic update với rollback
- Error handling: toast + retry + log Sentry"

### Output Format

"Trả về: 1 file orderStateMachine.ts, 1 file order.saga.ts.
Không thêm library. Không đổi folder structure."

## ❌ Bad Prompt

"Viết code quản lý order"
```

## 3. AI KHÔNG ĐƯỢC PHÉP

### 3.1 Forbidden Actions

| Action                                         | Why Forbidden                         | Example                                            |
| ---------------------------------------------- | ------------------------------------- | -------------------------------------------------- |
| **Tự thêm library**                            | Vi phạm Bloat Filter, có thể conflict | AI suggest thêm `lodash` khi native đủ             |
| **Tự đổi architecture**                        | Không hiểu full context               | AI suggest đổi từ Zustand sang Redux               |
| **Tự optimize**                                | Premature optimization, không measure | AI suggest memoize component chưa có vấn đề perf   |
| **Generate code ngoài scope**                  | Scope creep                           | Yêu cầu table, AI thêm cả chart                    |
| **Tự quyết định pattern mới**                  | Không consistent với codebase         | AI suggest pattern chưa có trong project           |
| **Tự đổi naming convention**                   | Break consistency                     | AI đặt tên `handleClick` thay vì `handleAddToCart` |
| **Tự sửa code đã approved**                    | Không trackable                       | AI suggest sửa file khác trong cùng response       |
| **Tự quyết định không dùng TypeScript strict** | Mất type safety                       | AI suggest `any` để "đơn giản hơn"                 |

### 3.2 Response When AI Violates

```
AI: "Tôi suggest thêm react-query-devtools để debug..."
You: "KHÔNG. Bloat Filter: công cụ này không giải quyết bài toán
      cụ thể nào trong project này. DevTools chỉ dùng khi debug
      production issue, không phải development. Từ chối."

AI: "Tôi suggest đổi từ Zustand sang Jotai cho UI state..."
You: "KHÔNG. Architecture đã quyết định Zustand + Immer.
      Jotai không xuất hiện trong 3 project.
      Đổi = thêm learning curve không cần thiết. Từ chối."

AI: "Tôi suggest memoize component này với useMemo..."
You: "KHÔNG. Tôi chưa measure performance.
      React DevTools Profiler chưa show re-render issue.
      Premature optimization. Từ chối."
```

## 4. REVIEW PROCESS

### 4.1 Line-by-Line Review

```markdown
## Workflow

1. AI generate code
   ↓
2. Bạn đọc TỪNG DÒNG
   ↓
3. Hỏi "tại sao" cho mọi quyết định không rõ ràng
   ↓
4. Chấp nhận / Từ chối / Yêu cầu sửa
   ↓
5. Chạy test trước khi merge
```

### 4.2 Review Questions

```markdown
## Câu hỏi cho mọi dòng code AI viết

□ Tại sao dùng pattern này? Có alternative không?
□ Có vi phạm convention trong playbook không?
□ Có thể đơn giản hơn không? (Simplicity over cleverness)
□ Có handle edge case không? (empty, error, loading)
□ Có type-safe không? (strict TypeScript, không any)
□ Có test được không? (pure function, không side effect ẩn)
□ Có performance issue không? (re-render, blocking)
□ Có security concern không? (XSS, injection, leak)
□ Có document cần update không? (ADR, README)
```

### 4.3 Review Severity

| Level                   | Action                         | Example                                       |
| ----------------------- | ------------------------------ | --------------------------------------------- |
| **Accept**              | Merge as-is                    | Code đúng convention, đúng spec               |
| **Accept with comment** | Merge, thêm comment giải thích | Code đúng nhưng logic phức tạp                |
| **Request change**      | Yêu cầu sửa, review lại        | Vi phạm convention, missing edge case         |
| **Reject**              | Không dùng, viết lại           | Wrong approach, security issue, wrong pattern |

## 5. AI COLLABORATION CASE STUDY

### 5.1 Mỗi Project: 1 file `AI-WORKFLOW.md`

````markdown
# AI-WORKFLOW.md — P1: Enterprise Admin Platform

## 1. Tool đã dùng

- Claude Code (primary — architecture + implementation)
- GitHub Copilot (inline — autocomplete, boilerplate)
- Claude (chat — explain, debug, document)

## 2. Quyết định kiến trúc khó: Redux Saga scope

### Context

Order pipeline cần orchestrate multi-step async flow:

- Pending → Confirmed → Packing → Shipping → Delivered
- Mỗi bước: API call + validation + side effect (email, notification)
- Cần: retry, cancellation, parallel execution

### AI đề xuất

Claude Code suggest dùng Redux Saga cho toàn bộ async flow trong app:

- "Saga rất mạnh cho async, nên dùng cho mọi API call"

### Quyết định của tôi

- ✅ CHẤP NHẬN: Saga cho Order pipeline (complex orchestration)
- ❌ TỪ CHỐI: Saga cho simple CRUD (products, customers)
- Lý do:
  - Simple CRUD = RTK Query đủ (caching, invalidation built-in)
  - Saga = boilerplate nhiều, overkill cho simple flow
  - Chỉ dùng Saga nơi trade-off đáng giá

### ADR

ADR-001: Tại sao Redux Saga giới hạn phạm vi Order pipeline

## 3. Lần AI sai: Optimistic update rollback

### Context

Implement optimistic update cho order status transition.

### AI đề xuất

```typescript
// AI code
onMutate: async (newOrder) => {
  const previous = queryClient.getQueryData(['orders']);
  queryClient.setQueryData(['orders'], (old) =>
    old.map(o => o.id === newOrder.id ? newOrder : o)
  );
  return { previous };
},
onError: (err, newOrder, context) => {
  queryClient.setQueryData(['orders'], context.previous);
}
```


### Bug tôi phát hiện

AI không handle trường hợp `previous` là `undefined` (first fetch chưa xong).
Khi error xảy ra, `context.previous` = undefined → setQueryData(undefined)
→ UI crash vì map undefined.

### Fix của tôi

```typescript
onError: (err, newOrder, context) => {
  if (context?.previous) {
    queryClient.setQueryData(['orders'], context.previous);
  } else {
    // Fallback: invalidate để fetch lại
    queryClient.invalidateQueries({ queryKey: ['orders'] });
  }
};
```

### Validation method

- Unit test: mock error với undefined previous
- Manual test: throttle network, trigger mutation trước khi query resolve
- Result: Test pass, edge case covered

## 4. Validation method tổng quát

| Method                  | Khi dùng                   |
| ----------------------- | -------------------------- |
| Đọc từng dòng           | Mọi AI output              |
| Test viết tay           | Logic business, edge cases |
| React DevTools Profiler | Performance suggestion     |
| Lighthouse              | AI suggest optimization    |
| Sentry test             | Error handling             |
| Manual test             | UI flow, UX                |

```
````

### 5.2 Nguyên tắc viết AI-WORKFLOW.md

```markdown
## KHÔNG viết như quảng cáo
❌ "AI giúp tôi tăng tốc 10x"
❌ "AI suggest rất chính xác"
❌ "Tôi dùng AI cho mọi thứ"

## VIẾT như kỹ sư review code
✅ "AI đề xuất X, tôi chấp nhận/từ chối phần Y vì Z"
✅ "AI sai ở điểm A, tôi phát hiện bằng method B, fix bằng C"
✅ "Validation: tôi test bằng D, kết quả E"

## Phần "AI sai" có giá trị tín hiệu CAO NHẤT
→ Chứng minh bạn có judgment
→ Chứng minh bạn không blindly trust AI
→ Chứng minh bạn có quy trình validation
```

## 6. PROMPT LIBRARY

### 6.1 Architecture Design

```markdown
I need to design [feature] for [project context].

Current stack: [tech stack]
Current architecture: [brief description]
Constraints: [Bloat Filter answers]

Please suggest 2-3 approaches with:

1. Implementation outline
2. Pros/cons
3. Trade-offs
4. Which fits best with current architecture and why

DO NOT write code. Only design.
```

### 6.2 Implementation

```markdown
Implement [feature] according to this spec:
[Detailed spec with acceptance criteria]

Constraints:

- Use [specific library/pattern]
- Follow [naming convention]
- Handle states: loading, error, empty, success
- TypeScript strict, zero any
- Testable (pure functions where possible)

DO NOT:

- Add new libraries
- Change folder structure
- Optimize unless specified
- Write beyond scope

Return: [specific files expected]
```

### 6.3 Code Review

```markdown
Review this code for:

1. Type safety (strict TypeScript, no any)
2. Error handling (loading, error, empty states)
3. Performance (re-renders, memoization needs)
4. Security (XSS, injection, sensitive data)
5. Testability (pure functions, mockable)
6. Convention compliance (naming, structure)

Suggest improvements with code examples.
Flag any blocking issues.
```

### 6.4 Refactor Request

```markdown
Refactor [component/function] to:

- [specific goal]
- Maintain existing behavior
- Improve [readability/testability/performance]

Constraints:

- Do not change public API
- Do not add dependencies
- Keep TypeScript strict

Show before/after diff.
```

### 6.5 Explain/Debug

```markdown
Explain why this code behaves [unexpected behavior]:
[Code snippet]

Current behavior: [what happens]
Expected behavior: [what should happen]
Context: [browser, framework version, related code]

Provide 2-3 hypotheses and how to verify each.
```

## 7. AI TOOL SELECTION

| Tool               | Strength                                                 | Use For                                   | Weakness                 |
| ------------------ | -------------------------------------------------------- | ----------------------------------------- | ------------------------ |
| **Claude Code**    | Architecture, complex implementation, context window lớn | Design spec, implement feature, refactor  | Có thể over-engineer     |
| **GitHub Copilot** | Inline autocomplete, boilerplate                         | Viết nhanh code repetitive, test scaffold | Không hiểu full context  |
| **Claude (Chat)**  | Explain, debug, document                                 | Giải thích concept, debug lỗi, viết ADR   | Không có project context |
| **ChatGPT**        | Quick answer, alternative view                           | So sánh approaches, giải thích pattern    | Hallucination cao hơn    |

### 7.1 Workflow by Task

| Task                | Primary Tool  | Secondary     |
| ------------------- | ------------- | ------------- |
| Design architecture | Claude Code   | Claude (Chat) |
| Implement feature   | Claude Code   | Copilot       |
| Write tests         | Copilot       | Claude Code   |
| Debug error         | Claude (Chat) | Claude Code   |
| Write documentation | Claude (Chat) | Claude Code   |
| Code review         | Claude Code   | Manual        |
| Refactor            | Claude Code   | Copilot       |

## 8. QUALITY GATES FOR AI OUTPUT

### 8.1 Before Accepting Any AI Code

```markdown
□ Đọc từng dòng — không skim (đọc lướt hoặc bỏ qua các chi tiết)
□ So sánh với spec — có implement đúng không?
□ Check convention — naming, structure, pattern
□ Identify magic — có logic không giải thích?
□ Check edge cases — empty, error, loading, boundary
□ Verify types — không any, không implicit
□ Check imports — có thêm library không?
□ Check scope — có code ngoài yêu cầu không?
□ Run tests — pass không?
□ Check security — XSS, injection, leak?
```

### 8.2 Red Flags

| Red Flag                      | Action                                              |
| ----------------------------- | --------------------------------------------------- |
| AI suggest thêm library       | Check Bloat Filter, từ chối nếu không cần           |
| AI đổi architecture           | Từ chối, architecture quyết định bởi bạn            |
| AI optimize không yêu cầu     | Từ chối, measure trước                              |
| AI dùng pattern lạ            | Check có trong codebase không, không thì từ chối    |
| AI bỏ qua error handling      | Yêu cầu thêm loading/error/empty states             |
| AI dùng `any`                 | Yêu cầu sửa, strict mode bắt buộc                   |
| AI viết code quá dài          | Tách thành smaller functions, single responsibility |
| AI không giải thích "tại sao" | Yêu cầu comment hoặc giải thích                     |

## 9. DOCUMENTATION REQUIREMENTS

### 9.1 AI-WORKFLOW.md per Project

```markdown
# AI-WORKFLOW.md — [Project Name]

## 1. Tool đã dùng

- [Tool 1]: [Use case]
- [Tool 2]: [Use case]

## 2. Quyết định kiến trúc khó

### Context

### AI đề xuất

### Quyết định của tôi (chấp nhận/từ chối phần nào)

### Lý do

## 3. Lần AI sai

### Context

### AI đề xuất

### Bug tôi phát hiện

### Fix của tôi

### Validation method

## 4. Validation method tổng quát
```

### 9.2 Commit Co-Authorship

```bash
# Khi AI contribute significantly vào 1 feature
git commit -m "feat(commerce): add order pipeline state machine

Implement finite state machine for order lifecycle:
- 5 states with guard conditions
- Redux Saga orchestration
- Optimistic update with rollback

Co-authored-by: Claude <anthropic>"

# Không dùng cho mọi commit — chỉ khi AI thực sự tham gia design
```

## 10. INTERVIEW STORY

### 10.1 How to Talk About AI Collaboration

```markdown
❌ KHÔNG nói:

- "Tôi dùng AI để code nhanh hơn"
- "AI giúp tôi viết 10x code"
- "Tôi tin AI vì AI giỏi hơn tôi"

✅ NÊN nói:

- "Tôi dùng AI như junior dev — implement theo spec tôi thiết kế"
- "Tôi review mọi output dòng-by-dòng, có lúc từ chối vì không phù hợp"
- "Tôi phát hiện AI sai ở [specific case], validate bằng [method]"
- "Quan trọng nhất là judgment: biết khi nào tin, khi nào không"
```

### 10.2 Example Interview Answer

> "Tôi làm việc với AI assistant trong suốt project. Nhưng tôi không để AI tự quyết định architecture hay thêm library.
>
> Ví dụ cụ thể: Khi implement order pipeline, AI suggest dùng Redux Saga cho toàn bộ async flow. Tôi từ chối — vì simple CRUD không cần Saga overhead. Tôi chỉ dùng Saga cho order pipeline vì nó cần orchestrate multi-step workflow với retry và cancellation.
>
> Một lần AI viết optimistic update nhưng không handle trường hợp previous data undefined. Tôi phát hiện khi viết unit test cho edge case. Fix: thêm fallback invalidate query. Đây là lý do tôi luôn viết test — AI có thể sai, test là safety net."

## 11. REVISION HISTORY

| Version | Date       | Changes                                                                 |
| ------- | ---------- | ----------------------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — AI as Junior Dev, review process, case study template |

---

> **"AI không làm bạn thành senior engineer nhanh hơn. Nhưng cách bạn quản lý AI — review, challenge, validate — chứng minh bạn đã có tư duy senior."**

---

Tóm tắt:

1. **Philosophy** — AI là Junior Dev, bạn là Senior reviewer, AI không phải Oracle
2. **AI Được Phép** — 7 allowed actions với conditions, prompt best practices
3. **AI Không Được Phép** — 8 forbidden actions với why forbidden + response templates
4. **Review Process** — Line-by-line workflow, 9 review questions, 4 severity levels
5. **AI Collaboration Case Study** — Complete `AI-WORKFLOW.md` template với 4 sections, writing principles (không quảng cáo, phần "AI sai" có giá trị cao nhất)
6. **Prompt Library** — 5 prompt templates: Architecture Design, Implementation, Code Review, Refactor, Explain/Debug
7. **AI Tool Selection** — 4 tools với strengths/weaknesses, workflow by task
8. **Quality Gates** — 10 checkpoints before accepting AI code, 8 red flags
9. **Documentation Requirements** — `AI-WORKFLOW.md` format, commit co-authorship
10. **Interview Story** — How to talk about AI collaboration, example answer
