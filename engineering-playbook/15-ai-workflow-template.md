# Engineering Playbook — 15: AI Workflow Template

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** AI Collaboration Case Study — 1 per Project  
> **Principle:** "Không viết như quảng cáo AI. Viết như kỹ sư review code của junior — kể cả phần AI sai."

## 1. PHILOSOPHY

### 1.1 AI-WORKFLOW.md Là Bằng Chứng Judgment

> **"Phần 'AI sai, tôi phát hiện thế nào' có giá trị tín hiệu cao hơn phần 'AI làm đúng'."**

### 1.2 Nguyên Tắc Viết

| ❌ Không Viết              | ✅ Viết                                                    |
| -------------------------- | ---------------------------------------------------------- |
| "AI giúp tôi tăng tốc 10x" | "AI đề xuất X, tôi chấp nhận/từ chối phần Y vì Z"          |
| "AI rất chính xác"         | "AI sai ở điểm A, tôi phát hiện bằng method B, fix bằng C" |
| "Tôi dùng AI cho mọi thứ"  | "Tôi dùng AI cho [specific scope], review bằng [method]"   |
| "AI là công cụ tuyệt vời"  | "AI = junior dev, tôi = senior reviewer"                   |

## 2. TEMPLATE

````markdown
# AI-WORKFLOW.md — [Project Name]

> **Project:** [P1/P2/P3]  
> **Duration:** [Start date] — [End date]  
> **Tools Used:** [List]  
> **Last Updated:** [Date]

---

## 1. Tools & Usage Patterns

| Tool     | Use Case   | Frequency      | Strengths           | Weaknesses               |
| -------- | ---------- | -------------- | ------------------- | ------------------------ |
| [Tool 1] | [What for] | [Daily/Weekly] | [What it's good at] | [What it struggles with] |
| [Tool 2] | [What for] | [Daily/Weekly] | [What it's good at] | [What it struggles with] |

### Workflow

[Visual workflow: how tools interact]
Example:
Requirement (me) → Architecture design (Claude Code) → Review (me) →
Implementation (Claude Code) → Line-by-line review (me) →
Test generation (Copilot) → Review (me) → Merge

---

## 2. Quyết Định Kiến Trúc Khó

### Context

[What was the hard architectural decision? Why was it hard?]

### AI Đề Xuất

[What did AI suggest? Full context, not summary]

```typescript
// AI's suggested code/approach (if applicable)
```

### Phân Tích Của Tôi

[Your analysis: pros, cons, trade-offs]

| Factor     | AI Proposal | My Assessment |
| ---------- | ----------- | ------------- |
| [Factor 1] | [AI view]   | [Your view]   |
| [Factor 2] | [AI view]   | [Your view]   |

### Quyết Định Cuối Cùng

[What did you decide? Accept fully / Accept partially / Reject]

### Lý Do

[Why? Reference Bloat Filter, ADR, or engineering principles]

### Kết Quả

[How did it turn out? Validate your decision]

---

## 3. Lần AI Sai

### Context

[What was being implemented?]

### AI Đề Xuất

[The incorrect code/approach AI suggested]

```typescript
// AI's buggy/incorrect code
```

### Bug/Pattern Sai

[What was wrong? Be specific]

### Cách Tôi Phát Hiện

[How did you catch it? Test, review, runtime error?]

```typescript
// Your test that caught it, or your review comment
```

### Fix Của Tôi

[Your corrected code]

```typescript
// Corrected code
```

### Validation

[How did you verify the fix?]

| Method                   | Result                |
| ------------------------ | --------------------- |
| [Test/manual/perf check] | [Pass/Fail + details] |

### Bài Học

[What did you learn about AI's limitations?]

---

## 4. Validation Methods

### Methods Used

| Method                   | When Used                | Effectiveness                         |
| ------------------------ | ------------------------ | ------------------------------------- |
| Line-by-line review      | Every AI output          | High — catches logic errors           |
| Unit test (hand-written) | Business logic           | High — catches edge cases             |
| Integration test         | Component interaction    | Medium — catches API mismatch         |
| Manual testing           | UI flow                  | High — catches UX issues              |
| Performance benchmark    | Optimization suggestions | High — catches premature optimization |
| Security audit           | Auth/data handling       | High — catches vulnerability          |

### Red Flags AI Output

| Red Flag                     | How I Handle                |
| ---------------------------- | --------------------------- |
| Suggest new library          | Bloat Filter check          |
| Optimize without measurement | Request benchmark proof     |
| Use `any` type               | Reject, enforce strict      |
| Skip error handling          | Request full state handling |
| Complex one-liner            | Request readable version    |
| No comments on complex logic | Request explanation         |

---

## 5. Metrics

| Metric                        | Value      |
| ----------------------------- | ---------- |
| Total AI-generated commits    | [X]        |
| AI suggestions accepted as-is | [X] ([X%]) |
| AI suggestions modified       | [X] ([X%]) |
| AI suggestions rejected       | [X] ([X%]) |
| Bugs introduced by AI         | [X]        |
| Bugs caught by review         | [X]        |
| Bugs caught by test           | [X]        |
| Time saved (estimate)         | [X hours]  |
| Time spent reviewing          | [X hours]  |
| Net time benefit              | [X hours]  |

---

## 6. Interview Talking Points

### "How do you work with AI?"

> "I treat AI as a junior developer. I define the architecture, write the spec,
> and review every line of output.
>
> For example, in [Project], AI suggested [approach] for [problem].
> I accepted [part] because [reason], but rejected [part] because [Bloat Filter/ADR].
> The result was [outcome].
>
> I also document when AI is wrong. In [case], AI generated [buggy code].
> I caught it during [review/test] because [reason].
> This proves I don't blindly trust AI — I validate."

### "What's your biggest lesson working with AI?"

> "AI is confident even when wrong. It suggested [wrong thing] with [confident tone].
> I learned to always verify, especially for [edge cases/security/performance].
> My validation method is [method]."

---

## 7. Appendix: Example Prompts

### Prompt 1: Architecture Design

```
[Include actual prompt used]
```

### Prompt 2: Implementation

```
[Include actual prompt used]
```

### Prompt 3: Code Review

```
[Include actual prompt used]
```
````

## 3. EXAMPLE — P1: Enterprise Admin Platform

````markdown
# AI-WORKFLOW.md — P1: Enterprise Admin Platform

> **Project:** P1 — Enterprise Admin Platform
> **Duration:** 2026-07-01 — 2026-08-15
> **Tools Used:** Claude Code (primary), GitHub Copilot (inline), Claude (chat)
> **Last Updated:** 2026-08-15

---

## 1. Tools & Usage Patterns

| Tool           | Use Case                                       | Frequency  | Strengths                                           | Weaknesses                          |
| -------------- | ---------------------------------------------- | ---------- | --------------------------------------------------- | ----------------------------------- |
| Claude Code    | Architecture, complex implementation, refactor | Daily      | Context window lớn, hiểu codebase, suggest patterns | Over-engineer, suggest thêm library |
| GitHub Copilot | Inline autocomplete, boilerplate, tests        | Continuous | Nhanh, context-aware                                | Không hiểu full architecture        |
| Claude (Chat)  | Explain concept, debug, write docs             | Weekly     | Giải thích rõ, không cần context project            | Không có project context            |

### Workflow

```

Requirement (me as Product Owner)
↓
Architecture + Task Breakdown (me as Solution Architect)
↓
Spec + Constraints (me → Claude Code)
↓
Implementation (Claude Code)
↓
Line-by-line Review (me as Tech Lead)
↓
[Accept / Request Change / Reject]
↓
Test Generation (Copilot → me review)
↓
Documentation (me + Claude Chat)
↓
Merge

```

---

## 2. Quyết Định Kiến Trúc Khó: Redux Saga Scope

### Context

Order pipeline cần orchestrate multi-step async flow:

- 5 status transitions: Pending → Confirmed → Packing → Shipping → Delivered
- Mỗi transition: API call + validation + side effects (email, notification)
- Cần: retry, cancellation, parallel execution
- Stack đã có: Redux Toolkit + RTK Query

### AI Đề Xuất

Claude Code suggest:

> "Dùng Redux Saga cho toàn bộ async flow trong app. Saga rất mạnh cho async,
> và consistent pattern giúp codebase dễ maintain. Tôi sẽ refactor tất cả
> RTK Query thành Saga cho consistency."

```typescript
// AI's suggested approach (paraphrased)
// ALL async flows use Redux Saga
// - Product CRUD: saga with takeLatest
// - Customer CRUD: saga with takeLatest
// - Order pipeline: saga with complex orchestration
// - Inventory: saga with polling
```

### Phân Tích Của Tôi

| Factor              | AI Proposal                         | My Assessment                              |
| ------------------- | ----------------------------------- | ------------------------------------------ |
| **Consistency**     | One pattern everywhere              | Overrated — consistency ≠ simplicity       |
| **Complexity**      | Saga everywhere = boilerplate nhiều | RTK Query đủ cho 80% use cases             |
| **Learning curve**  | Team chỉ cần học 1 pattern          | Team = 1 người, learning curve = time cost |
| **Testability**     | Saga dễ test                        | True, nhưng RTK Query cũng testable        |
| **Bloat Filter Q1** | "Để consistent"                     | ❌ Không phải bài toán cụ thể              |
| **Bloat Filter Q2** | "Sao không dùng RTK Query?"         | AI không có câu trả lời thuyết phục        |
| **Bloat Filter Q3** | Saga xuất hiện ở mọi project?       | Chỉ P1 cần — không reusable                |

### Quyết Định Cuối Cùng

- ✅ **CHẤP NHẬN:** Redux Saga cho Order Pipeline (complex orchestration)
- ❌ **TỪ CHỐI:** Saga cho simple CRUD (products, customers, inventory)

### Lý Do

1. **Bloat Filter:** "Bài toán cụ thể nào đòi hỏi Saga?" — Chỉ Order Pipeline
2. **Simplicity:** RTK Query = caching, invalidation, retry built-in. Không reinvent.
3. **Scope giới hạn:** 1 file saga thay vì 10 files. Maintainable hơn.
4. **Interview defense:** "Tại sao không dùng Saga cho mọi thứ?" → Có câu trả lời rõ ràng.

### Kết Quả

- Order pipeline: 1 saga file, 200 lines, test coverage 85%
- Simple CRUD: RTK Query, 0 saga boilerplate
- Code review nhanh hơn (không cần hiểu saga cho mọi API call)
- ADR-001 documented quyết định

---

## 3. Lần AI Sai: Optimistic Update Rollback

### Context

Implement optimistic update cho order status transition.

### AI Đề Xuất

Claude Code generate:

```typescript
// AI's code
const updateOrderMutation = useMutation({
  mutationFn: updateOrderApi,

  onMutate: async (newOrder) => {
    await queryClient.cancelQueries({ queryKey: ['orders'] });
    const previousOrders = queryClient.getQueryData<Order[]>(['orders']);

    queryClient.setQueryData(['orders'], (old: Order[] | undefined) =>
      old?.map((o) => (o.id === newOrder.id ? { ...o, ...newOrder } : o)),
    );

    return { previousOrders };
  },

  onError: (err, newOrder, context) => {
    // AI's rollback
    queryClient.setQueryData(['orders'], context.previousOrders);
  },

  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['orders'] });
  },
});
```

### Bug/Pattern Sai

AI không handle trường hợp `previousOrders` là `undefined`:

- First visit page → chưa fetch orders → `previousOrders = undefined`
- User trigger mutation → error → `context.previousOrders = undefined`
- `queryClient.setQueryData(['orders'], undefined)` → UI crash vì `map` undefined

### Cách Tôi Phát Hiện

1. **Line-by-line review:** Đọc `onError` → thấy `context.previousOrders` không có null check
2. **Edge case test:** Viết test cho scenario "mutation error khi chưa có cached data"

```typescript
// Test I wrote
it('should invalidate query when previous data is undefined', async () => {
  // Arrange: No cached data
  queryClient.clear();

  // Act: Trigger mutation that fails
  server.use(
    http.put('/api/orders/1', () => {
      return new HttpResponse(null, { status: 500 });
    }),
  );

  // Assert: Should not crash, should invalidate
  await waitFor(() => {
    expect(queryClient.isFetching({ queryKey: ['orders'] })).toBe(true);
  });
});
```

Test fail: `TypeError: Cannot read properties of undefined (reading 'map')`

### Fix Của Tôi

```typescript
onError: (err, newOrder, context) => {
  if (context?.previousOrders) {
    // Rollback nếu có cached data
    queryClient.setQueryData(['orders'], context.previousOrders);
  } else {
    // Fallback: invalidate để fetch lại
    queryClient.invalidateQueries({ queryKey: ['orders'] });
  }

  // Log error
  console.error('Order update failed:', err);
  toast.error(`Failed to update order: ${err.message}`);
},
```

### Validation

| Method                         | Result                                     |
| ------------------------------ | ------------------------------------------ |
| Unit test (hand-written)       | ✅ Pass — undefined previous handled       |
| Unit test — normal rollback    | ✅ Pass — rollback works when has previous |
| Manual test — throttle network | ✅ Pass — no crash, shows error state      |
| Integration test — full flow   | ✅ Pass — error → invalidate → refetch     |

### Bài Học

- **AI confident với "standard pattern"** nhưng không nghĩ đến edge case
- **"Standard" không có nghĩa "complete"** — luôn check undefined, null, empty
- **Test edge case là cách tốt nhất bắt AI bug** — AI viết test thường chỉ cover happy path

## 4. Validation Methods

### Methods Used

| Method                   | When Used                  | Effectiveness                                   |
| ------------------------ | -------------------------- | ----------------------------------------------- |
| Line-by-line review      | Mọi AI output              | **High** — catches logic errors, wrong patterns |
| Unit test (hand-written) | Business logic, edge cases | **High** — AI không nghĩ đến undefined          |
| Integration test         | Component interaction      | **Medium** — catches API mismatch               |
| Manual testing           | UI flow, responsive        | **High** — catches UX issues AI miss            |
| Performance benchmark    | Optimization suggestions   | **High** — AI suggest memoize không cần         |
| Security audit           | Auth, data handling        | **High** — AI không check XSS                   |

### Red Flags AI Output

| Red Flag                     | Example                         | How I Handle                           |
| ---------------------------- | ------------------------------- | -------------------------------------- |
| Suggest new library          | "Thêm react-query-devtools"     | Bloat Filter — từ chối nếu không cần   |
| Optimize without measurement | "Dùng useMemo ở đây"            | Yêu cầu benchmark proof, measure trước |
| Use `any` type               | `const data: any = response`    | Từ chối, enforce strict TypeScript     |
| Skip error handling          | Không có catch, onError         | Yêu cầu full error state               |
| Complex one-liner            | Nested ternary 3 levels         | Yêu cầu readable version               |
| No comments                  | Logic phức tạp không giải thích | Yêu cầu comment "tại sao"              |

## 5. Metrics

| Metric                        | Value     |
| ----------------------------- | --------- |
| Total AI-generated commits    | 47        |
| AI suggestions accepted as-is | 12 (26%)  |
| AI suggestions modified       | 28 (60%)  |
| AI suggestions rejected       | 7 (15%)   |
| Bugs introduced by AI         | 3         |
| Bugs caught by review         | 2         |
| Bugs caught by test           | 1         |
| Time saved (estimate)         | ~60 hours |
| Time spent reviewing          | ~20 hours |
| Net time benefit              | ~40 hours |

## 6. Interview Talking Points

### "How do you work with AI?"

> "I treat AI as a junior developer with infinite stamina but limited judgment.
> I define architecture, write specs, and review every line.
>
> In P1, AI suggested using Redux Saga for ALL async flows. I accepted it for
> the Order Pipeline because it needs complex orchestration — but rejected it
> for simple CRUD because RTK Query handles caching and invalidation natively.
> This saved ~200 lines of boilerplate per module.
>
> I also document when AI is wrong. AI generated an optimistic update pattern
> that crashed on undefined cached data. I caught it during line-by-line review,
> wrote a test for the edge case, and fixed the rollback logic.
> This is why I don't blindly trust AI — I validate."

### "What's your biggest lesson working with AI?"

> "AI is confident even when wrong. It suggested a 'standard' optimistic update
> pattern that missed the undefined edge case — and presented it as best practice.
>
> My biggest lesson: always verify edge cases. AI writes happy path well,
> but edge cases — empty states, errors, race conditions — are where bugs hide.
> I now write tests for edge cases before accepting any AI-generated async code."

## 7. Appendix: Example Prompts

### Prompt 1: Architecture Design

```

I need to design order status transition for an e-commerce admin platform.

Current stack: React 18, Redux Toolkit, RTK Query, TypeScript strict
Constraints:

- 5 statuses: pending → confirmed → packing → shipping → delivered
- Each transition needs API call + validation + side effects
- Need retry and cancellation
- Only 1 developer (me)

Suggest 2-3 approaches. For each:

1. Implementation outline
2. Pros/cons
3. When to use which

DO NOT write code. Only design.

```

### Prompt 2: Implementation

```

Implement order state machine following this spec:

- States: 'pending' | 'confirmed' | 'packing' | 'shipping' | 'delivered'
- Transitions with guard functions
- Pure functions, no side effects
- TypeScript strict, no any
- Export: transition(state, action) → newState | error

DO NOT:

- Add libraries
- Change folder structure
- Write beyond this file

Return: orderStateMachine.ts with full types and tests.

```

### Prompt 3: Code Review

```

Review this code for:

1. Type safety — any `any`? Proper generics?
2. Error handling — all states covered?
3. Testability — pure functions? Mockable?
4. Edge cases — empty, null, invalid transitions?

Flag blocking issues. Suggest improvements with code examples.
```
````

## 4. EXAMPLE — P3: Investment Portfolio Tracker

````markdown
# AI-WORKFLOW.md — P3: Investment Portfolio Tracker

> **Project:** P3 — Investment Portfolio Tracker
> **Duration:** 2026-10-01 — 2026-11-30
> **Tools Used:** Claude Code, GitHub Copilot
> **Last Updated:** 2026-11-30

---

## 2. Quyết Định Kiến Trúc Khó: D3.js vs Recharts cho Candlestick

### Context

Cần vẽ candlestick chart (OHLC) cho lịch sử giá.
Recharts không có candlestick built-in. D3.js từ đầu = nhiều code.

### AI Đề Xuất

Claude Code suggest:

> "Dùng Recharts với custom shape. Nhanh hơn, ít code hơn, đủ cho use case.
> D3.js từ đầu là over-engineering."

### Phân Tích Của Tôi

| Factor             | AI Proposal                 | My Assessment                                        |
| ------------------ | --------------------------- | ---------------------------------------------------- |
| **Time**           | Recharts nhanh hơn          | True — nhưng P3 timeline 3 tháng, đủ cho D3.js       |
| **Portfolio goal** | "Đủ cho use case"           | ❌ Không đạt — cần proof of deep visualization skill |
| **Customization**  | Custom shape trong Recharts | Limited — không control full rendering pipeline      |
| **Performance**    | Recharts OK                 | D3.js Canvas = tốt hơn cho 50k points                |
| **Learning**       | Recharts familiar           | D3.js = new skill, valuable cho career               |

### Quyết Định Cuối Cùng

- ❌ **TỪ CHỐI:** Recharts cho candlestick
- ✅ **CHẤP NHẬN:** D3.js từ đầu cho 3 custom charts

### Lý Do

1. **Portfolio goal:** "Proof of deep visualization skill" — D3.js = strongest signal
2. **Performance:** Canvas rendering cho 50k data points, Recharts không đủ
3. **Interview:** "Tại sao không dùng Recharts?" → Có câu trả lời về trade-off
4. **Bloat Filter Q3:** D3.js xuất hiện ở P3, nhưng là skill reusable

### Kết Quả

- 3 custom charts: candlestick, heatmap, waterfall
- Render time: 12ms (< 16ms target)
- Interview talking point: "Tôi tự vẽ D3.js từ đầu vì..."

---

## 3. Lần AI Sai: D3.js Memory Leak

### Context

Implement candlestick chart với zoom/pan interaction.

### AI Đề Xuất

Claude Code generate D3.js code:

```typescript
// AI's code (simplified)
useEffect(() => {
  const svg = d3.select(svgRef.current);

  // Setup scales, axes, candles
  const xScale = d3.scaleTime().domain([...]).range([...]);
  const yScale = d3.scaleLinear().domain([...]).range([...]);

  // Render candles
  svg.selectAll('.candle')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'candle')
    // ... more attrs

  // Zoom behavior
  const zoom = d3.zoom()
    .on('zoom', (event) => {
      // Update scales
      xScale.domain(event.transform.rescaleX(xScale).domain());
      // Re-render
      svg.selectAll('.candle')
        .attr('x', d => xScale(d.date))
        // ... update attrs
    });

  svg.call(zoom);

  // ❌ KHÔNG cleanup zoom listener
}, [data]);
```

### Bug/Pattern Sai

AI không cleanup D3.js zoom listener khi component unmount.
Mỗi lần data update → new zoom listener → memory leak.
Sau 10 lần update → 10 zoom listeners → UI lag, eventual crash.

### Cách Tôi Phát Hiện

1. **React DevTools Profiler:** Component re-render nhiều lần không cần thiết
2. **Chrome DevTools Memory:** Heap size tăng mỗi lần switch timeframe
3. **Performance tab:** Long task xuất hiện sau nhiều lần zoom

```typescript
// Memory snapshot analysis
// Before: 15MB
// After 10 timeframe switches: 45MB
// Detached DOM nodes: increasing
```

### Fix Của Tôi

```typescript
useEffect(() => {
  const svg = d3.select(svgRef.current);

  // Setup...
  const zoom = d3.zoom().on('zoom', handleZoom);
  svg.call(zoom);

  // ✅ Cleanup
  return () => {
    svg.on('.zoom', null); // Remove all zoom listeners
    svg.selectAll('*').remove(); // Clean DOM
  };
}, [data]);

// Better: Use useRef for D3 instance to avoid recreation
const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown>>();
```

### Validation

| Method                              | Result                       |
| ----------------------------------- | ---------------------------- |
| Memory profiling (Chrome DevTools)  | ✅ Heap stable sau fix       |
| React DevTools Profiler             | ✅ No unnecessary re-renders |
| Manual test — 50 timeframe switches | ✅ No lag, no crash          |
| Lighthouse Performance              | ✅ 96 (was 78 before fix)    |

### Bài Học

- **AI không hiểu React lifecycle + D3.js imperative API** = conflict zone
- **useEffect cleanup là nơi AI thường miss** — luôn check
- **Memory profiling là cách tốt nhất bắt D3.js leak** — AI không suggest

---

## 5. Metrics

| Metric                | P1  | P2  | P3  | Total    |
| --------------------- | --- | --- | --- | -------- |
| AI-generated commits  | 47  | 52  | 38  | 137      |
| Accepted as-is        | 12  | 15  | 8   | 35 (26%) |
| Modified              | 28  | 30  | 25  | 83 (61%) |
| Rejected              | 7   | 7   | 5   | 19 (14%) |
| Bugs introduced       | 3   | 2   | 4   | 9        |
| Bugs caught pre-merge | 9   | 8   | 7   | 24       |
| Net time benefit      | 40h | 45h | 30h | 115h     |
````

## 5. COMPLETION CHECKLIST

Mỗi project cần:

- [ ] `AI-WORKFLOW.md` file trong repo
- [ ] ≥ 1 quyết định kiến trúc khó với AI proposal + your decision
- [ ] ≥ 1 lần AI sai với specific bug + detection method + fix
- [ ] Validation methods documented
- [ ] Metrics (accept/modify/reject rates)
- [ ] Interview talking points

## 6. REVISION HISTORY

| Version | Date       | Changes                                                     |
| ------- | ---------- | ----------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — AI Workflow template, 2 examples, metrics |

---

> **"AI-WORKFLOW.md không phải để khoe bạn dùng AI giỏi. Nó là proof bạn có judgment — biết khi nào tin, khi nào không, và có quy trình để validate. Đó là điều khiến interviewer chuyển từ 'bạn dùng AI à?' sang 'bạn quản lý AI như một senior'."**

---

Tóm tắt:

1. **Philosophy** — AI-WORKFLOW.md là bằng chứng judgment, nguyên tắc viết (không quảng cáo)
2. **Template** — 7 sections: Tools & Usage, Quyết định kiến trúc khó, Lần AI sai, Validation Methods, Metrics, Interview Talking Points, Appendix Prompts
3. **2 Examples đầy đủ** — P1 (Redux Saga scope + optimistic update bug) và P3 (D3.js vs Recharts + memory leak)
4. **Metrics** — Accept/modify/reject rates, bugs caught, time benefit
5. **Completion Checklist** — 6 items mỗi project cần có
6. **Interview Talking Points** — 2 câu trả lời sẵn sàng
