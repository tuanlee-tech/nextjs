# CHẶN 1: MASTER FRONTEND

> **Mục tiêu:** Đạt mức Senior Frontend Developer, có thể xin việc FE Role ngay sau chặn này với mức lương 30–45 triệu (hoặc freelance $30–50/hour).
> **Thời gian dự kiến:** 3–6 tháng (học song song với đi làm nếu đã có việc).
> **Thuộc:** Khối Lõi Chung — bắt buộc cho cả 2 nhánh (Staff/Architect và Solo Founder).
> **Milestone:** Có portfolio 4–6 project production-ready, trả lời được mọi câu hỏi phỏng vấn Senior FE, live code được component từ đầu.

---

## PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN

### 1.1. Mục tiêu đạt được

Sau chặn này, bạn phải:

- [ ] Giải thích được **Event Loop**, **React Fiber**, **Next.js Caching Strategy** cho người khác hiểu
- [ ] Live code được **Modal, Dropdown, Data Table** từ đầu (không copy shadcn) trong 30–45 phút
- [ ] Viết **TypeScript không dùng `any`**, tự viết Utility Types phức tạp (`Paths`, `DeepPartial`)
- [ ] Biết **cả Zustand lẫn Redux** — hiểu trade-offs, có thể maintain codebase legacy
- [ ] Optimize được **Core Web Vitals** (LCP, INP, CLS) và đọc Lighthouse report
- [ ] Viết **Unit test (Vitest)** và **E2E test (Playwright)** cho critical flows
- [ ] Deploy được **PWA** với offline capability, push notification
- [ ] Có **6 project production-ready** trên GitHub với CI/CD, test, monitoring

### 1.2. Thời gian & Lộ trình đề xuất

```
Tháng 1:   Nền tảng Core (JS/TS Engine) + Project 1 (Landing + Blog)
Tháng 2:   React/Next.js Deep Dive + Project 2 (E-commerce Frontend)
Tháng 3:   State Management (Zustand/Redux/TanStack Query) + Project 3 (Dashboard)
Tháng 4:   Advanced (Micro-frontends, Monorepo, PWA) + Project 4 (Social Feed)
Tháng 5:   UI Engineering (Design System, Accessibility, Animation) + Project 5 (Component Library)
Tháng 6:   Legacy Migration + Tổng hợp Portfolio + Apply Job
```

### 1.3. Kiến thức thuộc Lõi Chung

Toàn bộ chặn này thuộc **Khối 1 (Lõi Chung)** — không phân nhánh. Dù bạn chọn đi làm công ty (Nhánh A) hay tự startup (Nhánh B), bạn đều phải vượt qua chặn này.

---

## PHẦN 2: DANH MỤC KIẾN THỨC + QUYẾT ĐỊNH CÔNG NGHỆ

### 2.1. NỀN TẢNG CORE (JavaScript / TypeScript)

#### 2.1.1. JavaScript Engine & Runtime

**Vấn đề:** JS chạy như thế nào bên trong browser? Tại sao code đôi khi chạy không đúng thứ tự? Tại sao memory leak xảy ra?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Hiểu V8 Engine | Luôn — để debug performance, hiểu async | Không bao giờ "không dùng" |
| `queueMicrotask` | Cần chạy task ngay sau current stack, trước macrotask | Thay thế hoàn toàn `setTimeout` (khác use case) |
| `WeakRef` | Cache object lớn, cho phép GC thu dọn khi cần | Thay thế strong reference hoàn toàn (khó debug) |

**Quyết định mặc định:** Hiểu sâu V8 (Ignition → TurboFan), Event Loop (Microtask vs Macrotask), Memory Management (Mark-and-Sweep, Memory leaks pattern).

**Anti-pattern:** Nghĩ rằng "biết `setTimeout` là đủ" — phải hiểu tại sao `Promise.then` chạy trước `setTimeout`.

- [ ] **V8 Engine:**
  - [ ] Ignition (interpreter) vs TurboFan (JIT compiler)
  - [ ] Hidden classes, inline caching — tại sao object shape quan trọng
  - [ ] `eval()` và `with` phá vỡ hidden class optimization
- [ ] **Event Loop chi tiết:**
  - [ ] Call Stack, Heap, Web APIs, Callback Queue, Microtask Queue
  - [ ] Thứ tự: Sync → Microtask (`Promise`, `queueMicrotask`) → Macrotask (`setTimeout`, I/O) → Render
  - [ ] `requestAnimationFrame` và render pipeline (60fps)
  - [ ] `setTimeout(fn, 0)` không thực sự là 0ms
- [ ] **Memory Management:**
  - [ ] Garbage Collection: Mark-and-Sweep, Generational GC (New vs Old space)
  - [ ] Memory leaks: Closure giữ reference, detached DOM nodes, event listeners không remove
  - [ ] `WeakMap` / `WeakSet` — private data không ngăn GC
  - [ ] `WeakRef` + `FinalizationRegistry` — cache có thể bị thu dọn

---

#### 2.1.2. TypeScript Nâng cao (Thực chiến — Không `any`)

**Vấn đề:** TypeScript bảo vệ compile-time nhưng runtime vẫn có thể crash vì data từ API không đúng shape. Làm sao type-safe từ DB → API → FE?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| `unknown` + Type Guard | Runtime data từ API, localStorage, URL params | Không cần khi data đã được validate trước |
| `any` | Không bao giờ — chỉ khi migrate JS legacy tạm thời | Luôn tránh |
| `satisfies` | Giữ inferred type nhưng enforce constraint | Thay thế `as` (type assertion) |
| Zod | Validate runtime + infer TypeScript type từ schema | Đơn giản quá (ví dụ: chỉ 1 string) |

**Quyết định mặc định:** `unknown` cho mọi data external → Type Guard hoặc Zod parse → Type-safe. Không bao giờ `any`.

**Anti-pattern:** Dùng `as` để ép kiểu khi không chắc — dùng `satisfies` hoặc validate trước.

- [ ] **Type Safety tuyệt đối:**
  - [ ] `unknown` vs `any` — sự khác biệt và tại sao `any` là "type system off"
  - [ ] Type Guard: `typeof`, `instanceof`, `in`, user-defined type guards (`is Type`)
  - [ ] `never` type — exhaustive checks trong switch/case
  - [ ] `satisfies` keyword — giữ inferred type, không widen
- [ ] **Generics thành thạo:**
  - [ ] Generic constraints: `T extends { id: string }`
  - [ ] Mapped types: `{ [K in keyof T]: T[K] | null }`
  - [ ] Conditional types: `T extends U ? X : Y`
  - [ ] `infer` keyword: Extract return type, extract array element
- [ ] **Utility Types tự viết:**
  - [ ] `DeepPartial<T>` — nested optional
  - [ ] `DeepReadonly<T>` — nested immutable
  - [ ] `Paths<T>` — type-safe object path strings (`"user.address.city"`)
  - [ ] `PickByValueType<T, V>` — pick keys có value type V
  - [ ] `Flatten<T>` — flatten nested arrays
- [ ] **Runtime Validation:**
  - [ ] Zod: Schema definition, `.parse()` (throw) vs `.safeParse()` (return result)
  - [ ] `.refine()` — custom validation, `.transform()` — transform data
  - [ ] `z.infer<typeof schema>` — infer TypeScript type từ Zod schema
  - [ ] **Đồng bộ FE-BE:** Share Zod schema trong monorepo hoặc package chung

---

#### 2.1.3. Design Patterns trong Frontend

**Vấn đề:** Code FE trở nên spaghetti khi state và logic phân tán khắp nơi. Làm sao tổ chức code scalable?

| Pattern | Khi nào dùng | Khi nào KHÔNG dùng |
|---------|-------------|-------------------|
| Singleton | Global state (Zustand store, Redux store) | Mọi object — gây khó test |
| Observer / Pub-Sub | Event bus giữa unrelated components | Component cha-con đơn giản (dùng props) |
| Factory | Tạo component/validator động theo type | Chỉ 1–2 type cố định (over-engineer) |
| Compound Components | Component phức tạp: Tabs, Accordion, Select | Component đơn giản (Button, Input) |
| State Machine | Workflow nhiều bước: checkout, wizard, form | Toggle đơn giản (dùng `useState`) |

**Quyết định mặc định:** Compound Components cho complex UI, State Machine cho workflow, Observer cho decoupled communication.

- [ ] **Singleton:** Zustand/Redux store — single instance, global access
- [ ] **Observer / Pub-Sub:** Event emitter, RxJS basics (subscribe, unsubscribe tránh memory leak)
- [ ] **Factory / Strategy:** Tạo validator theo field type, tạo renderer theo block type (CMS)
- [ ] **HOC vs Render Props vs Hooks:**
  - [ ] HOC: Cross-cutting concern (auth, tracking) — ít dùng 2024+
  - [ ] Render Props: Share logic giữa components — thay thế bởi Hooks
  - [ ] Custom Hooks: **Cách hiện đại** — share logic, dễ compose, dễ test
- [ ] **Compound Components:** `Tabs`, `Accordion` — parent quản lý state, children render theo context
- [ ] **State Machine Pattern (XState cơ bản):** Form wizard, checkout flow — rõ ràng states, transitions, guards

---

### 2.2. REACT & NEXT.JS DEEP DIVE

#### 2.2.1. React Under the Hood

**Vấn đề:** Tại sao React re-render? Tại sao `useMemo` đôi khi không giúp? Tại sao Strict Mode chạy effect 2 lần?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Hiểu Fiber | Luôn — để debug re-render, optimize | Không bao giờ "không cần" |
| Profiler DevTools | Tìm component re-render vô ích | Không cần khi app nhỏ |
| `React.memo` | Component nhận object/function props | Component nhận primitive props (vô dụng) |

**Quyết định mặc định:** Hiểu Fiber tree, reconciliation, diffing. Dùng Profiler để tìm re-render vô ích trước khi optimize.

- [ ] **React Fiber Architecture:**
  - [ ] Fiber tree structure — linked list traversal (child, sibling, return)
  - [ ] Reconciliation algorithm — diffing strategy (O(n) heuristic)
  - [ ] Phân biệt: Re-render phase (can be interrupted) vs Commit phase (synchronous DOM update)
  - [ ] Priority updates — lanes, concurrent features (React 18+)
- [ ] **Strict Mode & Double Mount:**
  - [ ] Tại sao `useEffect` chạy 2 lần trong development
  - [ ] Cách viết effect idempotent (cleanup function đúng chuẩn)
- [ ] **React DevTools Profiler:**
  - [ ] Đọc flame graph, tìm component render lâu
  - [ ] "Why did this render?" — identify unnecessary renders

---

#### 2.2.2. Re-render Optimization

**Vấn đề:** Component re-render quá nhiều gây lag. Nhưng wrap mọi thứ bằng `useMemo` cũng có cost.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| `useMemo` | Tính toán nặng (filter/sort 1000+ items) | Tính toán nhẹ (tạo array 5 phần tử) |
| `useCallback` | Pass function xuống component con đã `React.memo` | Function không pass xuống con |
| `React.memo` | Component nhận object/function props | Component nhận primitive props |
| `useRef` | Giữ giá trị không trigger re-render | Thay thế state (không render UI) |

**Quyết định mặc định:** Không dùng `useMemo`/`useCallback` trừ khi Profiler chứng minh cần. `useRef` cho DOM reference, previous value, interval ID.

**Anti-pattern:** Wrap mọi component bằng `React.memo` — tốn cost so sánh, không có lợi nếu props thay đổi thường xuyên.

- [ ] `useMemo` — chỉ khi tính toán cực nặng hoặc pass xuống `React.memo` child
- [ ] `useCallback` — chỉ khi pass xuống `React.memo` child hoặc dependency array
- [ ] `React.memo` — shallow comparison, custom `areEqual` function
- [ ] `useRef` — DOM reference, previous value, interval/timeout ID
- [ ] `useImperativeHandle` — expose methods từ child (cẩn thận, anti-pattern nếu lạm dụng)
- [ ] ESLint `react-hooks/exhaustive-deps` — không tắt, không thêm fake deps

---

#### 2.2.3. Next.js App Router (RSC)

**Vấn đề:** Next.js App Router khác Pages Router rất nhiều. Làm sao biết khi nào dùng Server Component, khi nào dùng Client Component?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Server Component | Data fetching, SEO, không cần interactivity | Cần state, event handlers, browser APIs |
| Client Component | Cần state, event handlers, `useEffect`, browser APIs | Data fetching chính (làm chậm TTFB) |
| Server Action | Form submission, mutation không cần API route | Complex business logic (dùng API route) |

**Quyết định mặc định:** Mặc định Server Component. Chỉ thêm `'use client'` khi cần interactivity. Data fetching trong Server Component, không `useEffect` fetch.

**Anti-pattern:** Thêm `'use client'` ở root layout — làm toàn bộ app client-side, mất lợi ích RSC.

- [ ] **Phân biệt SC vs CC:**
  - [ ] SC: Không state, không event handlers, không browser APIs, bundle size = 0 JS
  - [ ] CC: Phải thêm `'use client'`, có full React features
  - [ ] **Interleaving:** Lồng SC trong CC (SC render trên server, pass kết quả xuống CC)
- [ ] **Next.js Caching Strategy (Cực kỳ quan trọng):**
  - [ ] Request Memoization: `fetch()` trong cùng request được cache tự động
  - [ ] Data Cache: Cache kết quả `fetch()` cross-request
  - [ ] Full Route Cache: Cache HTML tĩnh của route
  - [ ] Router Cache: Client-side cache cho navigation
  - [ ] Cách invalidate: `revalidatePath()`, `revalidateTag()`, `unstable_cache()`
- [ ] **Server Actions:**
  - [ ] `'use server'` directive
  - [ ] Gọi function từ client nhưng chạy trên server
  - [ ] Progressive Enhancement: form submit không cần JS
  - [ ] `revalidate` trong Server Action để cập nhật cache

---

#### 2.2.4. State Management Hiện đại

**Vấn đề:** Có quá nhiều thư viện state management. Làm sao chọn đúng? Khi nào dùng cái nào?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| **TanStack Query** | Server state: fetch, cache, refetch, pagination, optimistic update | Client state: theme, UI toggle, form draft |
| **Zustand** | Client state đơn giản, small team, startup | Enterprise cần strict pattern, DevOps, time-travel |
| **Redux Toolkit** | Enterprise, team lớn, legacy codebase, cần DevTools | Project nhỏ, 1–2 dev, muốn ít boilerplate |
| **Redux Saga** | Complex async: polling, retry, cancellation, race | Simple API call (dùng Thunk hoặc TanStack Query) |
| **RTK Query** | Đã dùng Redux, muốn server state trong cùng store | Chưa dùng Redux, hoặc muốn framework-agnostic |
| **XState** | Workflow phức tạp: checkout, wizard, multi-step form | Simple toggle, simple form (overkill) |

**Quyết định mặc định cho Solo Startup:**
- Server state → **TanStack Query**
- Client state → **Zustand**
- Complex workflow → **XState**

**Quyết định cho Enterprise Job:**
- Biết cả **Zustand** (modern) + **Redux ecosystem** (legacy maintain)

**Anti-pattern:** Đưa mọi state vào global store — form local state giữ trong component.

---

##### 2.2.4.1. TanStack Query (React Query)

- [ ] `useQuery`: `queryKey`, `queryFn`, `staleTime`, `gcTime`
- [ ] `keepPreviousData` / `placeholderData` — smooth transition khi refetch
- [ ] `optimistic updates`: Update UI trước khi API trả về, rollback nếu fail
- [ ] `mutation`: `onMutate`, `onError`, `onSettled`, rollback logic
- [ ] **Pagination:** `useInfiniteQuery`, `getNextPageParam`
- [ ] **Prefetching:** `queryClient.prefetchQuery`, `router.prefetch`
- [ ] **Devtools:** Debug cache state, invalidate manually

##### 2.2.4.2. Zustand

- [ ] `create()` store với TypeScript generics
- [ ] Slice pattern: tách store thành authSlice, cartSlice, themeSlice
- [ ] Middleware: `persist` (localStorage), `devtools` (Redux DevTools compat)
- [ ] `subscribe` pattern cho external events
- [ ] So sánh với Redux: khi nào dùng cái nào

##### 2.2.4.3. Redux Ecosystem (Enterprise — vẫn tuyển dụng nhiều)

> **Tại sao cần học:** Redux xuất hiện nhiều trong codebase enterprise, fintech, banking. Nhiều JD yêu cầu Redux Toolkit, Redux Saga.

- [ ] **Redux Core:** Store, Actions, Reducers, Three Principles, DevTools
- [ ] **Redux Toolkit (RTK):**
  - [ ] `configureStore` — thay thế `createStore` + middleware setup
  - [ ] `createSlice` — auto-generate action types, action creators, reducers
  - [ ] `createAsyncThunk` — async logic với 3 states tự động
  - [ ] `createEntityAdapter` — CRUD operations, sorting, normalization
  - [ ] `createSelector` (Reselect) — memoized selectors
- [ ] **Redux Thunk:** Simple async, dispatch 3 actions (pending/fulfilled/rejected)
  - [ ] So sánh Thunk vs Saga: Thunk cho đơn giản, Saga cho complex
- [ ] **Redux Saga:**
  - [ ] Generator effects: `call`, `put`, `take`, `fork`, `spawn`
  - [ ] Watchers: `takeEvery`, `takeLatest`, `throttle`, `debounce`
  - [ ] Advanced: polling, retry, cancellation, `race` (timeout pattern)
  - [ ] Testing: step-by-step vs integration
- [ ] **RTK Query:**
  - [ ] `createApi`, `builder.query/mutation`
  - [ ] `providesTags` / `invalidatesTags` — cache management
  - [ ] So sánh RTK Query vs TanStack Query
- [ ] **State Normalization:** Normalizr, RTK Entity Adapter, selectors
- [ ] **Middleware:** Thunk, Logger, Persist
- [ ] **Migration:** `connect` HOC → `useSelector`/`useDispatch` hooks

##### 2.2.4.4. XState

- [ ] State machine: states, transitions, events, guards
- [ ] `useMachine` hook trong React
- [ ] Visualizer: xem state machine dưới dạng graph
- [ ] Dùng cho: checkout flow, form wizard, complex UI workflow

---

#### 2.2.5. Migration Legacy

**Vấn đề:** Công ty có app jQuery 5 năm tuổi, cần migrate sang React mà không downtime.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Strangler Fig Pattern | Migrate từng phần, app cũ vẫn chạy | Rewrite toàn bộ (quá rủi ro, tốn thời gian) |
| iframe Bridge | Isolate React app, communicate qua `postMessage` | Cần seamless UX (iframe có boundary) |
| Web Components | Wrap React component → custom element cho app cũ | App cũ không hỗ trợ Web Components |
| Module Federation | Load React app như remote module trong shell cũ | Không dùng Webpack |

**Quyết định mặc định:** Strangler Fig Pattern — từng feature, từng trang, không rewrite toàn bộ.

- [ ] **Strangler Fig Pattern:** Nhúng React vào app jQuery/DOM cũ dần dần
- [ ] **iframe Bridge:** Communication giữa legacy app và React app
- [ ] **Web Components:** Wrap React component thành custom element
- [ ] **Incremental Migration:** Từng trang, từng feature, không phá vỡ hệ thống

---

### 2.3. UI/UX ENGINEERING & STYLING

#### 2.3.1. Tailwind CSS Deep Dive

**Vấn đề:** Làm sao viết CSS nhanh, consistent, không bị "class soup"?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Tailwind | Utility-first, rapid dev, design system consistent | Designer cung cấp design hoàn chỉnh không theo system |
| `@apply` | Extract component class từ utilities | Lạm dụng (mất lợi ích utility-first) |
| CSS Modules | Scoped styles, component-specific | Cần nhanh, cần design system |

**Quyết định mặc định:** Tailwind với custom config, ít dùng `@apply`, extend theme thay vì arbitrary values.

- [ ] **Cấu hình `tailwind.config.ts`:**
  - [ ] `theme.extend`: Colors, spacing, fontSize, screens
  - [ ] Custom plugins: `plugin(function({ addComponents, addUtilities, theme }) {...})`
  - [ ] `presets`: Share config giữa nhiều project
- [ ] **@apply hợp lý:** Khi nào nên dùng (component class), khi nào không (lạm dụng)
- [ ] **Tối ưu bundle:** PurgeCSS (tự động trong Tailwind v3+), `content` config
- [ ] **Dark mode:** `darkMode: 'class'` vs `media`, `dark:` prefix
- [ ] **Tailwind v4 changes:** CSS-first config (nếu đã ra)

---

#### 2.3.2. Component Library Development

**Vấn đề:** Cần component dùng lại, accessible, customizable. Làm sao không phụ thuộc vào library bên ngoài?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Radix UI | Build từ đầu, cần accessibility, headless | Cần styled sẵn, không có design team |
| shadcn/ui | Cần nhanh, có thể customize hoàn toàn | Cần "it just works" không đụng code |
| Tự build | Hiểu sâu, cần full control | Thời gian hạn chế, không cần custom sâu |

**Quyết định mặc định:** shadcn/ui cho nhanh, Radix cho build từ đầu, tự build khi cần hiểu sâu.

- [ ] **Radix UI primitives:** Headless, accessible, unstyled
- [ ] **shadcn/ui:** Copy-paste code, không phải package — hiểu từng component
- [ ] **Tự build components từ đầu:**
  - [ ] Modal/Dialog: Focus trap, `Escape` to close, `aria-modal`, scroll lock
  - [ ] Dropdown/Select: Keyboard navigation (↑↓, Enter, Escape), `aria-expanded`
  - [ ] Tabs: `role="tablist"`, `aria-selected`, roving `tabindex`
  - [ ] Toast/Notification: Animation enter/exit, auto-dismiss, pause on hover
  - [ ] Data Table: Sort, filter, pagination, row selection, virtual scroll

---

#### 2.3.3. Design System

**Vấn đề:** Màu sắc, spacing, typography không consistent giữa các page. Designer đổi primary color, phải sửa 100 chỗ.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Design Tokens | Mọi project > 1 dev, cần consistency | Project 1 dev, nhỏ, nhanh |
| Style Dictionary | Multi-platform (web, mobile, desktop) | Chỉ web |
| CSS Variables | Runtime theme switching (dark mode) | Không cần runtime switch |

**Quyết định mặc định:** Design Tokens (Primitive → Semantic → Component) + CSS Variables + Tailwind config.

- [ ] **Design Tokens:**
  - [ ] Color: Primitive (`#fff`) → Semantic (`background-primary`) → Component (`button-background`)
  - [ ] Spacing: Scale system (4px base: 1, 2, 3, 4... → 4px, 8px, 12px, 16px)
  - [ ] Typography: Font family, size scale, line height, weight, letter spacing
- [ ] **Semantic tokens:** `bg-primary`, `text-muted`, `border-danger` (context-aware)
- [ ] **Token delivery:** Style Dictionary, CSS variables, Tailwind config

---

#### 2.3.4. Accessibility (a11y) — WCAG 2.1 Level AA

**Vấn đề:** 15% người dùng có disability. App không accessible = mất khách hàng + bị kiện (ADA, EAA).

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Semantic HTML | Luôn — foundation của a11y | Không bao giờ dùng `div` cho button |
| ARIA | Khi semantic HTML không đủ | Thay thế semantic HTML (ARIA chỉ bổ sung) |
| Keyboard Navigation | Luôn — nhiều user không dùng chuột | Không bao giờ bỏ qua |

**Quyết định mặc định:** Semantic HTML trước, ARIA bổ sung sau, keyboard navigation bắt buộc.

- [ ] **Semantic HTML:** `<main>`, `<nav>`, `<article>`, `<aside>`, `<header>`, `<footer>`
- [ ] **ARIA attributes:** `aria-label`, `aria-describedby`, `aria-expanded`, `aria-hidden`, `role`
- [ ] **Keyboard Navigation:**
  - [ ] Focus management: `tabIndex`, `focus()` programmatically
  - [ ] Focus trap cho modal (không tab ra ngoài)
  - [ ] Skip links (`href="#main-content"`)
- [ ] **Screen Reader:**
  - [ ] `sr-only` class (visually hidden but screen reader accessible)
  - [ ] Live regions (`aria-live="polite"`, `aria-live="assertive"`)
- [ ] **Color & Contrast:** WCAG AA ratio (4.5:1 normal text, 3:1 large text/UI components)
- [ ] **Testing:** axe DevTools, Lighthouse a11y audit, screen reader test (NVDA/VoiceOver)

---

#### 2.3.5. Animation & Micro-interactions

**Vấn đề:** Animation làm app cảm giác "sống", nhưng animation kém gây lag (jank).

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| CSS Transitions | Simple hover, toggle, opacity | Complex sequences, orchestration |
| Framer Motion | React component animation, gestures, layout | Chỉ cần simple CSS (overkill) |
| CSS Houdini | Custom paint, advanced effects | Chưa supported rộng, experimental |

**Quyết định mặc định:** CSS Transitions cho simple, Framer Motion cho complex React animation.

- [ ] **CSS Transitions & Animations:** `transition`, `animation`, `keyframes`
- [ ] **Framer Motion:**
  - [ ] `motion` components, `animate`, `initial`, `exit`
  - [ ] `AnimatePresence` cho mount/unmount animation
  - [ ] Layout animation (`layout` prop)
  - [ ] Gestures: `drag`, `whileHover`, `whileTap`
- [ ] **CSS Houdini / View Transitions API:** Next.js `useViewTransition` (nếu có)
- [ ] **Performance:** `will-change`, `transform` vs `top/left`, `requestAnimationFrame`

---

### 2.4. TESTING & PERFORMANCE

#### 2.4.1. Unit / Integration Test

**Vấn đề:** Code thay đổi, regression xảy ra. Làm sao tự tin refactor?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Vitest | Vite project, cần nhanh | Project Webpack, team quen Jest |
| Jest | Ecosystem lớn, team quen | Project Vite, muốn nhanh hơn |
| Testing Library | Test behavior (nhập gì → xuất gì) | Test implementation details |

**Quyết định mặc định:** Vitest + Testing Library.

- [ ] **Vitest:** Fast runner, Vite-native, Jest-compatible API
- [ ] **Testing Library:**
  - [ ] Nguyên tắc vàng: Test behavior (nhập gì, xuất gì trên UI), KHÔNG test implementation details
  - [ ] `render`, `screen`, `fireEvent`, `userEvent` (prefer `userEvent`)
  - [ ] `waitFor`, `findBy` (async queries)
  - [ ] `within` (scoped queries)
- [ ] **Mock:** `vi.fn()`, `vi.spyOn()`, `vi.mock()` (module mock)
- [ ] **Coverage:** Branch coverage, statement coverage threshold (CI gate)

---

#### 2.4.2. E2E Test

**Vấn đề:** Unit test pass nhưng user vẫn không thể checkout. Cần test toàn bộ flow.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Playwright | Cross-browser, nhanh, CI-friendly, visual regression | Team quen Cypress, cần time-travel debug |
| Cypress | E2E, team quen, dễ debug | Cần Safari, cần nhanh hơn |

**Quyết định mặc định:** Playwright (cross-browser, parallel, CI-friendly).

- [ ] **Playwright:**
  - [ ] `test`, `expect`, `page`, `locator`
  - [ ] Flow quan trọng nhất: Login → Add to cart → Checkout → Payment
  - [ ] Visual regression: `page.screenshot()` compare
  - [ ] Parallel execution: Sharding tests
  - [ ] Cross-browser: Chromium, Firefox, WebKit
  - [ ] API mocking: `page.route()` intercept network

---

#### 2.4.3. Mock API

**Vấn đề:** FE cần chạy khi BE chưa xong, hoặc cần test edge case (500 error, timeout).

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| MSW | Mock API cho dev + test, intercept network | BE luôn available, mock trong test đủ |
| JSON Server | Prototype nhanh, fake REST API | Production, cần logic phức tạp |

**Quyết định mặc định:** MSW — intercept network request, dùng cho cả development và testing.

- [ ] **MSW (Mock Service Worker):**
  - [ ] Intercept network request (REST/GraphQL), không mock bên trong component
  - [ ] Dùng cho development (không cần BE chạy) và testing
  - [ ] `http.get()`, `http.post()`, response resolver

---

#### 2.4.4. Performance Measurement

**Vấn đề:** Page load chậm, user bỏ đi. Google dùng Core Web Vitals để xếp hạng SEO.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Lighthouse CI | Enforce performance gate trong PR | Không cần enforce, manual check đủ |
| `@next/bundle-analyzer` | Tìm chunk to, duplicate dependencies | Bundle nhỏ, không cần optimize |
| Web Vitals API | Theo dõi CWV trong production | Chỉ cần lab data (Lighthouse đủ) |

**Quyết định mặc định:** Lighthouse CI trong GitHub Actions + `@next/bundle-analyzer` cho audit.

- [ ] **Lighthouse CI:** Chạy trong GitHub Actions, fail PR nếu score < threshold
- [ ] **Core Web Vitals:**
  - [ ] **LCP (Largest Contentful Paint):** Preload font/image, optimize hero image, remove render-blocking resources
  - [ ] **INP (Interaction to Next Paint):** Debounce event, web workers, avoid main thread block, `scheduler.yield()`
  - [ ] **CLS (Cumulative Layout Shift):** Set `aspect-ratio` cho image/video, reserve space cho dynamic content, `font-display: swap`
- [ ] **Bundle Analysis:**
  - [ ] `@next/bundle-analyzer`: Tìm chunk to, duplicate dependencies
  - [ ] Dynamic import: `next/dynamic`, `React.lazy()` + `Suspense`
  - [ ] Tree shaking: Side-effect free imports, `/*#__PURE__*/` annotation
- [ ] **Resource Hints:** `preload`, `prefetch`, `preconnect`, `dns-prefetch`

---

### 2.5. ECOSYSTEM XUNG QUANH (Bổ sung từ JD thực tế)

#### 2.5.1. Micro-frontends

**Vấn đề:** Team lớn, cần deploy từng phần độc lập, không block nhau.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Module Federation | Team lớn, cần share dependencies runtime | Team nhỏ, không cần independent deploy |
| Single-SPA | Multiple frameworks trong 1 app | Chỉ dùng React (overkill) |

**Quyết định mặc định:** Module Federation nếu cần — Single-SPA nếu multi-framework.

- [ ] **Webpack Module Federation:**
  - [ ] `ModuleFederationPlugin` config (host + remote)
  - [ ] Shared dependencies (React version conflict resolution)
  - [ ] Dynamic remote loading
- [ ] **Single-SPA:** Register application, lifecycle methods
- [ ] **State sharing giữa MFE:** Shared storage, event bus, URL state

---

#### 2.5.2. Monorepo

**Vấn đề:** Nhiều package/app trong 1 repo, làm sao quản lý dependencies, build, test hiệu quả?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Turborepo | Monorepo JS/TS, remote caching, task pipeline | Monorepo nhỏ (1–2 packages) |
| Nx | Monorepo lớn, computation caching, plugin ecosystem | Monorepo nhỏ, không cần advanced |

**Quyết định mặc định:** Turborepo + pnpm workspaces.

- [ ] **Turborepo:**
  - [ ] `turbo.json` pipeline: `build`, `test`, `lint` dependencies
  - [ ] Remote caching (Vercel Remote Cache)
  - [ ] Task filtering: `turbo run build --filter=web`
- [ ] **Nx (biết qua):** Computation caching, affected commands
- [ ] **Package management:** pnpm workspaces, `workspace:` protocol

---

#### 2.5.3. PWA (Progressive Web App)

**Vấn đề:** User không cài app native, nhưng vẫn muốn experience giống app (offline, push, install).

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Service Worker | PWA, offline-first, background sync | Không cần offline, không cần install |
| Workbox | Quản lý SW phức tạp, caching strategies | SW đơn giản, tự viết được |

**Quyết định mặc định:** `next-pwa` hoặc Workbox cho caching strategies.

- [ ] **Service Worker:** `next-pwa` hoặc custom Workbox
- [ ] **Offline-first:** Cache strategies (Cache First, Network First, Stale While Revalidate)
- [ ] **Background sync:** Queue requests khi offline
- [ ] **Web App Manifest:** `manifest.json`, install prompt
- [ ] **Push Notifications:** Firebase Cloud Messaging (hoặc OneSignal)

---

#### 2.5.4. Internationalization (i18n)

**Vấn đề:** Sản phẩm cần hỗ trợ nhiều ngôn ngữ, RTL, multi-currency.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| next-i18n | Next.js project, routing theo locale | Không dùng Next.js |
| react-i18next | React SPA, không cần SSR | Next.js App Router (dùng next-i18n) |
| FormatJS | ICU message format, pluralization phức tạp | Đơn giản, không cần ICU |

**Quyết định mặc định:** next-i18n cho Next.js, react-i18next cho React SPA.

- [ ] **next-i18n / react-i18next:**
  - [ ] `useTranslation`, `Trans` component
  - [ ] Namespace, interpolation, pluralization
  - [ ] RTL languages support
  - [ ] Locale detection, routing (`/en`, `/vi`)
- [ ] **FormatJS:** `FormattedMessage`, `useIntl`

---

#### 2.5.5. Data Visualization

**Vấn đề:** Dashboard cần chart, nhưng chart kém performance với large dataset.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Recharts | React-friendly, dễ customize, đủ cho 90% case | Cần performance cực cao, custom rendering |
| D3.js | Custom chart, full control | Đơn giản (overkill), không cần custom |
| Chart.js | Canvas-based, performance tốt large dataset | Cần React integration (dùng wrapper) |

**Quyết định mặc định:** Recharts cho đa số, D3.js khi cần custom sâu.

- [ ] **Recharts:** Line, Bar, Area, Pie charts (dễ dùng, React-friendly)
- [ ] **D3.js (biết cơ bản):** Scale, axis, data join (enter/update/exit) — khi cần custom chart
- [ ] **Chart.js:** Canvas-based, performance tốt với large dataset
- [ ] **Dashboard patterns:** Real-time updates, date range filter, export CSV/PDF

---

#### 2.5.6. Storybook

**Vấn đề:** Component phát triển trong isolation, khó test, khó document cho team khác.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Storybook | Component library, design system, visual testing | Không có reusable components |
| Chromatic | Visual regression, UI review | Không cần visual testing |

**Quyết định mặc định:** Storybook cho development, Chromatic cho visual regression.

- [ ] **Setup:** `.storybook/main.ts`, `preview.ts`
- [ ] **Writing stories:** Component story, args, controls
- [ ] **Addons:** Actions, Viewport, Accessibility
- [ ] **Chromatic:** Visual testing, UI review workflow
- [ ] **Design system documentation:** MDX docs, DocBlock

---

#### 2.5.7. Web Workers & Performance

**Vấn đề:** Main thread bị block bởi heavy computation (parse CSV, image processing).

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Web Workers | Offload heavy computation khỏi main thread | Tính toán nhẹ (overhead không đáng) |
| SharedArrayBuffer | Multi-threading, share memory | Cần COOP/COEP headers, complex |

**Quyết định mặc định:** Web Workers cho heavy computation, SharedArrayBuffer khi cần share memory.

- [ ] **Web Workers:** Offload heavy computation (image processing, data parsing)
- [ ] **SharedArrayBuffer:** Multi-threading (cần COOP/COEP headers)
- [ ] **OffscreenCanvas:** Render canvas trong worker

---

#### 2.5.8. SEO Technical Deep Dive

**Vấn đề:** Google không index nội dung, traffic không vào. AI search engine (ChatGPT, Perplexity) không trích dẫn sản phẩm.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| SSR/SSG | Content cần index, SEO quan trọng | App internal, không cần SEO |
| JSON-LD | Structured data cho rich snippets | Không cần rich snippets |
| GEO | Tối ưu cho AI search engine | Không quan tâm AI search |

**Quyết định mặc định:** SSR/SSG (Next.js) + JSON-LD + GEO cho mọi public-facing site.

- [ ] **Structured Data (JSON-LD):** `Product`, `Organization`, `BreadcrumbList`, `FAQPage` schema
- [ ] **Meta tags động:** `next/head`, `metadata` API (App Router)
- [ ] **Sitemap:** `next-sitemap`, dynamic sitemap for large sites
- [ ] **Robots.txt:** Dynamic generation, disallow rules
- [ ] **Canonical URLs:** Tránh duplicate content
- [ ] **Open Graph / Twitter Cards:** `og:title`, `og:image`, `twitter:card`
- [ ] **GEO (Generative Engine Optimization):** Tối ưu cấu trúc data để AI search engine (ChatGPT, Perplexity) trích dẫn

---

#### 2.5.9. AI Coding Agent (Bổ sung 2026)

**Vấn đề:** AI có thể code nhanh hơn, nhưng cần biết cách dùng đúng để không tạo technical debt.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Claude Code | Multi-file refactor, complex task | Task đơn giản (dùng Copilot inline đủ) |
| Cursor | IDE tích hợp AI, context-aware | Không thích AI trong IDE |
| Copilot Agent | GitHub workflow, PR review | Không dùng GitHub |

**Quyết định mặc định:** Cursor hoặc Claude Code cho task phức tạp, Copilot cho inline suggestion.

- [ ] **Claude Code / Cursor / Copilot agent mode:** Giao task đa bước, review output AI thay vì tự gõ từng dòng
- [ ] **Prompt & context engineering cơ bản cho dev:** Cách viết prompt hiệu quả, cách review code AI

---
## PHẦN 3: HỆ THỐNG PROJECT THỰC CHIẾN + LỘ TRÌNH THỰC HIỆN

### Nguyên tắc thiết kế project:
1. **Mỗi project = 1 sản phẩm thật** có thể đưa vào portfolio, demo cho nhà tuyển dụng
2. **Kiến thức phân bổ đều** — mỗi project cover một nhóm kiến thức khác nhau, không chồng chéo
3. **Complexity tăng dần** — từ đơn giản đến enterprise-level
4. **Có business context** — không code "vì học", code "vì giải quyết vấn đề thật"
5. **Tech stack có lý do chọn** — mỗi tech phải giải thích tại sao chọn, thay thế đã cân nhắc và tại sao không chọn
6. **Production-ready checklist** — mỗi project phải có: CI/CD, Tests, Monitoring, Deploy, Docs

---

### PROJECT 1: SAAS LANDING PAGE + BLOG + NEWSLETTER

**Business context:** Bạn đang xây dựng một SaaS product (ví dụ: công cụ quản lý task cho team nhỏ). Cần landing page để convert visitors thành users, blog để SEO và content marketing, newsletter để capture leads chưa sẵn sàng mua ngay.

**Vấn đề giải quyết:**
- Làm sao Google index nội dung blog mà không cần SSR phức tạp?
- Làm sao visitor đăng ký newsletter mà không cần backend chạy 24/7?
- Làm sao page load < 3s trên mobile (Core Web Vitals)?
- Làm sao hỗ trợ cả tiếng Anh và tiếng Việt cho global reach?

**Người dùng/target:**
- Primary: Startup founders, freelancers tìm công cụ quản lý công việc
- Secondary: Developers đọc blog về productivity

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| Next.js 14 App Router | SSR/SSG cho SEO, RSC giảm JS bundle, Server Actions cho form không cần BE | Remix: ecosystem nhỏ hơn, ít tài liệu tiếng Việt; Gatsby: static-only, không linh hoạt |
| Tailwind CSS | Utility-first, rapid development, design system consistent | CSS Modules: chậm hơn khi prototype; Styled Components: không work với RSC |
| shadcn/ui | Copy-paste code, customize hoàn toàn, không phụ thuộc package version | MUI: khó customize sâu, bundle lớn; Radix: chỉ primitives, cần style thêm |
| MDX | Blog viết bằng Markdown + embed React components (interactive demo) | Plain Markdown: không embed component; CMS headless: overkill cho giai đoạn đầu |
| Zod + Server Actions | Validate form server-side, không cần API route riêng, type-safe từ đầu đến cuối | React Hook Form + Yup: cần API route, nhiều boilerplate hơn |
| next-i18n | Routing tự động `/en/blog`, `/vi/blog`, SEO-friendly | react-i18next: không tích hợp routing; tự viết: bug-prone |
| Lighthouse CI | Enforce performance, không để score tụt theo thời gian | Manual Lighthouse: quên, không consistent |

**Kiến thức tự nhiên cover:**
- Next.js App Router (RSC, dynamic routes, `generateStaticParams`)
- Tailwind + shadcn/ui (theme system, dark mode, custom components)
- SEO Technical (JSON-LD, sitemap, robots, OG tags, canonical)
- MDX blog (syntax highlighting, table of contents, reading time)
- Zod + Server Actions (contact form, newsletter subscription)
- i18n (EN/VI routing, RTL test)
- Lighthouse CI (GitHub Actions, score gate > 90)

**Deliverable:**
- Landing page sống trên custom domain
- Blog với 5+ bài viết (có thể là bài về journey học fullstack)
- Newsletter signup form hoạt động (lưu vào Google Sheets hoặc ConvertKit API)
- Dark mode toggle
- Lighthouse score > 90 (mobile + desktop)

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict mode, no `any`, ESLint + Prettier
- [ ] **Tests:** Vitest (component test), Playwright (E2E: navigate blog, submit form)
- [ ] **CI/CD:** GitHub Actions — Lint → Test → Build → Deploy
- [ ] **Performance:** Lighthouse CI, score gate > 90
- [ ] **Accessibility:** axe DevTools pass, keyboard navigation works
- [ ] **SEO:** Structured data valid, sitemap submitted, meta tags dynamic
- [ ] **Deploy:** Vercel, custom domain, HTTPS
- [ ] **Monitoring:** Sentry (error tracking), Plausible/PostHog (analytics)
- [ ] **Docs:** README chi tiết (setup, architecture, decisions)
- [ ] **Demo:** Video walkthrough 2-3 phút

---

### PROJECT 2: E-COMMERCE CHECKOUT FLOW

**Business context:** Bạn xây nền tảng bán hàng online (ví dụ: bán digital products, templates, courses). Checkout flow là nơi mất khách nhiều nhất — 70% cart abandonment. Cần optimize từng bước để tăng conversion.

**Vấn đề giải quyết:**
- Cart mất khi refresh page? (khách bực mình, bỏ đi)
- Checkout bị abandon vì form phức tạp, không rõ đang ở bước nào?
- Thanh toán fail nhưng không biết ở bước nào để fix?
- Cần hỗ trợ VN và US (currency, language) nhưng không muốn duplicate code?
- Làm sao cho phép add to cart khi offline (trên tàu điện, máy bay)?

**Người dùng/target:**
- Primary: Người mua digital products (designers, developers, freelancers)
- Secondary: Người bán hàng qua platform (sellers)

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| TanStack Query | Server state: sản phẩm, giỏ hàng, đơn hàng — auto cache, refetch, background update | SWR: ecosystem nhỏ hơn, ít feature; Redux Thunk: không tối ưu cho server state |
| Zustand | Client state: UI theme, checkout step, form draft — đơn giản, persist localStorage | Redux Toolkit: quá nhiều boilerplate cho state đơn giản; Context API: re-render không kiểm soát |
| XState | Checkout workflow: Cart → Shipping → Payment → Confirmation — rõ ràng, không miss step, dễ test | useReducer: không đủ cho complex workflow; tự viết state machine: bug-prone |
| Zod | Validate từng form step, type-safe từ FE đến BE, share schema giữa FE-BE | Yup: không infer TypeScript type tốt bằng Zod; Joi: không TypeScript-native |
| next-i18n | Multi-language product catalog, currency formatting | react-intl: không tích hợp Next.js routing; tự viết: không maintainable |
| PWA (Service Worker) | Offline cart, add to home screen, background sync | Native app: quá expensive cho startup; không PWA: mất khách mobile |
| Stripe (test mode) | Payment processing chuẩn, webhook support, subscription-ready | PayPal: UX kém hơn; VNPay: chỉ VN, không global | 

**Kiến thức tự nhiên cover:**
- State management phân tách: TanStack Query (server) + Zustand (client)
- XState cho complex workflow (checkout wizard)
- Zod validation multi-step form
- i18n + multi-currency
- PWA: Service Worker, offline cart, background sync, install prompt
- Stripe integration (test mode)
- Performance: image optimization, lazy loading, dynamic import

**Deliverable:**
- E-commerce site hoàn chỉnh với product catalog
- Cart với persist (localStorage) + sync với server
- Multi-step checkout: Cart → Shipping → Payment → Confirmation (XState)
- Stripe payment (test mode)
- PWA: offline cart, add to home screen
- Playwright E2E: Browse → Add cart → Checkout → Order confirmation

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict, no `any`, ESLint + Prettier
- [ ] **Tests:** Vitest (cart logic, XState machine), Playwright (full checkout flow)
- [ ] **CI/CD:** GitHub Actions — Lint → Test → Build → Deploy
- [ ] **Performance:** Lighthouse score > 90, image optimization (Next.js Image)
- [ ] **Accessibility:** WCAG AA, keyboard navigation cart, screen reader test
- [ ] **PWA:** Service Worker, Web App Manifest, offline cart works
- [ ] **Deploy:** Vercel, custom domain
- [ ] **Monitoring:** Sentry, analytics
- [ ] **Docs:** README, ADR cho state management decision (Zustand vs Redux)

---

### PROJECT 3: ADMIN DASHBOARD (ENTERPRISE ANALYTICS)

**Business context:** Bạn được thuê xây dashboard quản lý cho công ty SaaS (ví dụ: quản lý subscriptions, users, revenue). Họ cần theo dõi metrics real-time, quản lý 10K+ users, xuất báo cáo. Đây là skill "enterprise" được tuyển dụng nhiều nhất.

**Vấn đề giải quyết:**
- 10K+ rows data, table chậm, lag khi scroll?
- Chart cần real-time update (revenue theo giây) nhưng không muốn polling liên tục?
- Admin và User thấy UI khác nhau, nhưng không muốn duplicate code?
- Component dùng lại ở nhiều nơi, nhưng mỗi nơi style khác nhau?
- Team khác (mobile app) cũng cần dùng component này?

**Người dùng/target:**
- Primary: Internal admin team (quản lý users, subscriptions, revenue)
- Secondary: External users (view their own analytics)

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| Redux Toolkit | Enterprise yêu cầu, normalized state cho large dataset, DevTools, time-travel | Zustand: không đủ ecosystem cho large team, không có DevTools mạnh |
| RTK Query | API integration trong cùng Redux ecosystem, cache management tự động | TanStack Query: phải học thêm library, không tích hợp Redux store |
| Redux Saga | Polling metrics định kỳ, retry khi API fail, cancel khi user rời trang | Redux Thunk: không hỗ trợ cancellation, complex flow khó đọc |
| Recharts | React-friendly, dễ customize, đủ cho 90% dashboard case | D3.js: overkill cho standard charts; Chart.js: React integration kém |
| react-window | Virtual scroll cho 10K+ rows, chỉ render visible items | Tự viết virtual scroll: bug-prone; không virtual: lag, crash |
| Turborepo | Dashboard + shared UI package + types package — build cache, parallel | Nx: quá nặng cho 3 packages; không monorepo: duplicate code, version mismatch |
| Storybook | Document components cho team khác dùng, test isolation | Không Storybook: team không biết component tồn tại, duplicate |
| Chromatic | Visual regression — catch unintended UI changes khi update design tokens | Manual visual test: quên, không scalable |

**Kiến thức tự nhiên cover:**
- Redux ecosystem (RTK, RTK Query, Saga) — enterprise pattern
- Data visualization (Recharts)
- Data table virtualization (react-window)
- Role-based UI (admin vs user view)
- Real-time updates (SSE hoặc polling với Saga)
- Monorepo (Turborepo)
- Storybook + Chromatic (visual testing)
- Web Workers (parse large CSV upload)

**Deliverable:**
- Dashboard với 5+ chart types (line, bar, pie, area, composed)
- Data table 10K+ rows với sort, filter, pagination, row selection, virtual scroll
- Role-based UI: Admin thấy tất cả, User chỉ thấy data của mình
- Real-time revenue chart (SSE hoặc Saga polling)
- Export CSV/PDF báo cáo
- Storybook với tất cả components documented
- Chromatic visual regression test pass

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict, Redux best practices, normalized state
- [ ] **Tests:** Vitest (Redux reducers, selectors, sagas), Playwright (dashboard flows)
- [ ] **CI/CD:** GitHub Actions + Turborepo pipeline (build affected packages only)
- [ ] **Performance:** Virtual scroll, chart memoization, bundle split by route
- [ ] **Accessibility:** Data table keyboard navigation, chart screen reader (aria-label)
- [ ] **Deploy:** Vercel (dashboard), Chromatic (Storybook)
- [ ] **Monitoring:** Sentry, analytics
- [ ] **Docs:** README, Storybook docs, ADR cho Redux architecture

---

### PROJECT 4: REAL-TIME SOCIAL FEED (Twitter/X Clone)

**Business context:** Bạn xây nền tảng nội dung giống Twitter/X cho một niche (ví dụ: dev community). Feed cần real-time, tương tác nhanh, scale được. Đây là project demo khả năng xử lý state phức tạp và real-time.

**Vấn đề giải quyết:**
- Feed cần update real-time khi có post mới — làm sao không reload toàn bộ page?
- Like/comment cần phản hồi ngay (không chờ API) — nhưng rollback nếu fail?
- Upload ảnh/video cần progress bar, cancel được nếu đổi ý?
- Infinite scroll không lag khi 1000+ posts?
- Animation làm app "sống" nhưng không gây jank (60fps)?

**Người dùng/target:**
- Primary: Developers chia sẻ knowledge, snippets, câu hỏi
- Secondary: Recruiters tìm talent

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| TanStack Query | Infinite scroll, optimistic update like/comment, background refetch | SWR: không hỗ trợ optimistic update tốt; Redux: quá nhiều boilerplate cho feed |
| Zustand | Client state: draft post, UI preferences, notification count | Redux: không cần cho state đơn giản; Context API: re-render không kiểm soát |
| WebSockets (Socket.io) | Real-time 2-way: new post, live comment, typing indicator | SSE: chỉ 1-way, không chat; Polling: tốn bandwidth, không real-time |
| Framer Motion | Animation: post enter, like burst, modal transitions — 60fps | CSS transitions: không đủ cho complex sequences; GSAP: nặng, không React-native |
| Web Workers | Parse large CSV upload, image compression trước khi gửi — không block UI | Main thread: UI freeze khi process large file; Server-side: tốn bandwidth |
| PWA | Push notifications cho new mention, background sync cho draft post | Native app: quá expensive; không PWA: mất engagement |

**Kiến thức tự nhiên cover:**
- Real-time (WebSockets)
- Optimistic update (TanStack Query)
- Animation (Framer Motion)
- Web Workers (file processing)
- Infinite scroll
- PWA (push notifications)
- SEO cho từng post (dynamic meta)

**Deliverable:**
- Social feed với real-time updates
- Post creation (text, image, video) với upload progress
- Like, comment, share với optimistic update
- Infinite scroll feed
- Push notifications (PWA)
- Real-time chat (Socket.io)
- SEO: dynamic meta tags cho từng post

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict, WebSocket connection management
- [ ] **Tests:** Vitest (optimistic update logic), Playwright (feed interaction)
- [ ] **CI/CD:** GitHub Actions
- [ ] **Performance:** Virtual scroll, image lazy loading, animation 60fps
- [ ] **Accessibility:** Keyboard navigation feed, screen reader for notifications
- [ ] **PWA:** Service Worker, push notifications, background sync
- [ ] **Deploy:** Vercel, WebSocket server (Railway/Render)
- [ ] **Monitoring:** Sentry, analytics
- [ ] **Docs:** README, WebSocket protocol docs

---

### PROJECT 5: DESIGN SYSTEM + COMPONENT LIBRARY

**Business context:** Bạn là tech lead trong team 10+ dev, cần xây design system để mọi người dùng chung. Mỗi dev không được tự ý sửa component — chỉ maintainers được merge. Designer đổi màu primary, tất cả app phải update cùng lúc.

**Vấn đề giải quyết:**
- Component không consistent giữa các page — button ở trang A khác trang B?
- Accessibility bị bỏ quên — dev không biết cần focus trap?
- Designer thay đổi màu primary, phải sửa 100 chỗ?
- Không biết component này đã test chưa — dùng có an toàn không?
- Team mobile app (React Native) cũng cần dùng design tokens?

**Người dùng/target:**
- Primary: Internal dev team (10+ developers)
- Secondary: External contributors (open source)

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| Radix UI | Headless, accessible, unstyled — team tự style theo brand | MUI: khó customize sâu, bundle lớn; tự viết accessibility: bug-prone, tốn thời gian |
| Tailwind | Utility tokens map với design tokens, consistent | CSS Modules: không có utility system; Styled Components: runtime cost, không RSC |
| Storybook | Isolated development, docs, controls testing — dev không cần chạy cả app | Không Storybook: dev phải chạy cả app để test 1 component, chậm |
| Chromatic | Visual regression — catch unintended UI changes khi update tokens | Manual visual test: quên, không scalable |
| Turborepo | Package riêng, version independently, publishable | Không monorepo: copy-paste component, version mismatch |
| Style Dictionary | Export tokens sang nhiều platform (web, mobile, Figma) | Tự viết: không maintainable; không có: mobile app không consistent |

**Kiến thức tự nhiên cover:**
- Component engineering (Radix primitives)
- Accessibility (WCAG 2.1 AA, ARIA patterns)
- Design tokens (primitive → semantic → component)
- Animation (micro-interactions)
- Storybook + Chromatic (visual testing)
- Monorepo publishing (semantic versioning)

**Deliverable:**
- Design system package publishable (npm/GitHub Packages)
- 15+ components: Button, Input, Select, Dialog, Dropdown, Tabs, Toast, Data Grid, etc.
- Design tokens: color, spacing, typography (CSS variables + Tailwind config)
- Dark mode support
- Storybook với full documentation
- Chromatic visual regression test pass
- Semantic versioning + changelog

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict, component API consistent
- [ ] **Tests:** Vitest (component behavior), Playwright (visual regression via Chromatic)
- [ ] **CI/CD:** GitHub Actions — build package → test → publish
- [ ] **Accessibility:** WCAG AA, axe DevTools, keyboard navigation, screen reader
- [ ] **Deploy:** Storybook (Vercel), Package (npm/GitHub Packages)
- [ ] **Docs:** Component API docs, migration guide, contribution guide
- [ ] **Versioning:** Semantic versioning, changelog

---

### PROJECT 6: LEGACY MIGRATION (jQuery → React)

**Business context:** Bạn được thuê migrate app jQuery 5 năm tuổi sang React. App vẫn chạy, có 10K+ users, không được downtime. Team khác vẫn maintain jQuery, không thể stop development.

**Vấn đề giải quyết:**
- Làm sao migrate từng phần mà không phá app cũ?
- jQuery plugin cũ (ví dụ: datepicker, chart) vẫn cần dùng — viết lại tốn thời gian?
- Team khác vẫn code jQuery, làm sao họ dùng component React mới?
- URL cũ (`/old-page`) vẫn phải work, nhưng dần redirect sang `/new-page`?

**Người dùng/target:**
- Primary: Existing users (10K+) — không được disrupt workflow
- Secondary: Internal dev team (cần maintain cả 2 codebase trong transition)

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| Strangler Fig Pattern | Từng phần thay thế, không rewrite toàn bộ — rủi ro thấp | Rewrite toàn bộ: quá rủi ro, tốn thời gian, có thể fail |
| Web Components | Wrap React component → custom element, dùng trong jQuery app | iframe: slow, communication phức tạp; không wrap: không dùng được trong jQuery |
| iframe Bridge | Isolate React app, communicate qua `postMessage` — an toàn | Không isolate: jQuery global state có thể break React |
| Vite | Build tool mới, nhanh hơn Webpack cũ, HMR tốt | Giữ Webpack cũ: chậm, config phức tạp, không maintainable |
| Module Federation | Load React app như remote module trong jQuery shell | iframe: không seamless; không module federation: không share dependencies |

**Kiến thức tự nhiên cover:**
- Migration strategy (Strangler Fig)
- Web Components (custom elements)
- iframe communication (`postMessage`)
- jQuery interop (gọi jQuery plugin từ React, cleanup)
- State migration (jQuery global state → React state)
- Build tool (Vite)
- Module Federation

**Deliverable:**
- Demo app chạy song song jQuery + React trên cùng 1 domain
- 1–2 page đã migrate sang React (ví dụ: user profile, settings)
- jQuery page có thể embed React component (via Web Components)
- React page có thể dùng jQuery plugin cũ (via ref + cleanup)
- Routing: `/old/*` → jQuery, `/new/*` → React, dần redirect
- Documentation: migration plan, rollback strategy

**Production-ready checklist:**
- [ ] **Code:** TypeScript strict, jQuery type definitions
- [ ] **Tests:** Playwright (test cả legacy và new flow vẫn pass)
- [ ] **CI/CD:** GitHub Actions — build cả jQuery và React
- [ ] **Deploy:** Vercel hoặc VPS (cần serve cả 2 app)
- [ ] **Monitoring:** Sentry (cả jQuery và React errors)
- [ ] **Docs:** Migration plan, rollback strategy, ADR cho từng decision

---

## PHẦN 3: LỘ TRÌNH THỰC HIỆN CHI TIẾT (THEO TUẦN)

### THÁNG 1: NỀN TẢNG CORE + PROJECT 1 (LANDING + BLOG)

```
Tuần 1.1: JavaScript Engine & TypeScript Fundamentals
├── Ngày 1–2: V8 Engine (Ignition → TurboFan), Event Loop (Microtask vs Macrotask)
├── Ngày 3–4: Memory Management (GC, leaks, WeakRef)
├── Ngày 5–7: TypeScript strict mode, Type Guard, Generics basics
└── Deliverable: Codepen/CodeSandbox demo Event Loop + TypeScript utility types

Tuần 1.2: Next.js App Router + Tailwind + shadcn/ui
├── Ngày 8–9: Next.js 14 App Router (RSC, CC, Server Actions)
├── Ngày 10–11: Tailwind config, dark mode, custom theme
├── Ngày 12–14: shadcn/ui setup, customize components
└── Deliverable: Next.js project scaffold với Tailwind + shadcn/ui

Tuần 1.3: SEO + MDX Blog + i18n
├── Ngày 15–16: SEO Technical (JSON-LD, sitemap, meta tags)
├── Ngày 17–18: MDX blog setup (syntax highlighting, TOC)
├── Ngày 19–21: next-i18n setup (EN/VI routing)
└── Deliverable: Blog page hoạt động với 2 bài viết

Tuần 1.4: Form + Server Actions + Deploy
├── Ngày 22–23: Zod + Server Actions (contact form, newsletter)
├── Ngày 24–25: Lighthouse CI setup (GitHub Actions)
├── Ngày 26–27: Deploy Vercel, custom domain, Sentry
├── Ngày 28: Review, polish, viết README
└── Deliverable: PROJECT 1 hoàn chỉnh — live, tested, monitored
```

### THÁNG 2: REACT/Next.js DEEP DIVE + PROJECT 2 (E-COMMERCE)

```
Tuần 2.1: React Fiber & Optimization
├── Ngày 1–2: React Fiber (reconciliation, diffing, lanes)
├── Ngày 3–4: Profiler DevTools, tìm unnecessary renders
├── Ngày 5–7: useMemo/useCallback đúng cách, React.memo, useRef
└── Deliverable: Optimized component với Profiler report

Tuần 2.2: State Management (TanStack Query + Zustand)
├── Ngày 8–9: TanStack Query (useQuery, useMutation, cache)
├── Ngày 10–11: Zustand (store, slices, persist middleware)
├── Ngày 12–14: Tích hợp cả 2 trong project
└── Deliverable: Product catalog + cart với TanStack Query + Zustand

Tuần 2.3: XState + Zod + i18n + Stripe
├── Ngày 15–16: XState (checkout wizard: Cart → Shipping → Payment → Confirmation)
├── Ngày 17–18: Zod validation multi-step form
├── Ngày 19–20: i18n + multi-currency
├── Ngày 21: Stripe integration (test mode)
└── Deliverable: Checkout flow hoàn chỉnh

Tuần 2.4: PWA + E2E + Deploy
├── Ngày 22–23: PWA (Service Worker, offline cart, manifest)
├── Ngày 24–25: Playwright E2E (full checkout flow)
├── Ngày 26–27: Lighthouse audit, optimize CWV
├── Ngày 28: Review, polish, viết README + ADR
└── Deliverable: PROJECT 2 hoàn chỉnh — PWA, E2E tested, deployed
```

### THÁNG 3: STATE MANAGEMENT NÂNG CAO + PROJECT 3 (DASHBOARD)

```
Tuần 3.1: Redux Ecosystem
├── Ngày 1–2: Redux Core (Store, Actions, Reducers)
├── Ngày 3–4: Redux Toolkit (configureStore, createSlice, createAsyncThunk)
├── Ngày 5–6: RTK Query (createApi, cache tags)
├── Ngày 7: Redux Saga (effects, watchers, polling)
└── Deliverable: Redux store với RTK + Saga demo

Tuần 3.2: Dashboard UI (Data Viz + Virtual Scroll)
├── Ngày 8–9: Recharts (line, bar, pie, area charts)
├── Ngày 10–11: Data table (sort, filter, pagination)
├── Ngày 12–14: react-window (virtual scroll 10K+ rows)
└── Deliverable: Dashboard UI với chart + virtual table

Tuần 3.3: Monorepo + Storybook + Chromatic
├── Ngày 15–16: Turborepo setup (dashboard + shared-ui + types)
├── Ngày 17–18: Storybook (document components)
├── Ngày 19–21: Chromatic (visual regression testing)
└── Deliverable: Monorepo với Storybook + Chromatic

Tuần 3.4: Role-based UI + Real-time + Deploy
├── Ngày 22–23: Role-based rendering (admin vs user)
├── Ngày 24–25: SSE hoặc Saga polling (real-time metrics)
├── Ngày 26–27: Web Workers (CSV parse)
├── Ngày 28: Review, polish, viết docs
└── Deliverable: PROJECT 3 hoàn chỉnh — enterprise-ready
```

### THÁNG 4: REAL-TIME + ANIMATION + PROJECT 4 (SOCIAL FEED)

```
Tuần 4.1: WebSockets + Real-time
├── Ngày 1–2: Socket.io client (connection, events, rooms)
├── Ngày 3–4: Real-time feed (new post, live comment)
├── Ngày 5–6: Optimistic update (TanStack Query)
├── Ngày 7: Push notifications (PWA)
└── Deliverable: Real-time chat + feed demo

Tuần 4.2: Animation + Performance
├── Ngày 8–9: Framer Motion (enter/exit, layout, gestures)
├── Ngày 10–11: Animation 60fps (will-change, transform)
├── Ngày 12–14: Infinite scroll + image lazy loading
└── Deliverable: Animated feed với infinite scroll

Tuần 4.3: File Upload + Web Workers
├── Ngày 15–16: Drag-drop upload, image preview
├── Ngày 17–18: Upload progress, cancel upload
├── Ngày 19–21: Web Workers (image compression, CSV parse)
└── Deliverable: Upload feature với progress + compression

Tuần 4.4: SEO + Deploy
├── Ngày 22–23: Dynamic meta tags cho từng post
├── Ngày 24–25: OG image generation
├── Ngày 26–27: Deploy (Vercel + Railway cho WebSocket)
├── Ngày 28: Review, polish
└── Deliverable: PROJECT 4 hoàn chỉnh — real-time, animated, deployed
```

### THÁNG 5: UI ENGINEERING + PROJECT 5 (DESIGN SYSTEM)

```
Tuần 5.1: Design Tokens + Component Primitives
├── Ngày 1–2: Design tokens (primitive → semantic → component)
├── Ngày 3–4: Style Dictionary export (CSS, JS, iOS, Android)
├── Ngày 5–6: Radix UI primitives (Dialog, Select, Tabs)
├── Ngày 7: Accessibility patterns (focus trap, roving tabindex)
└── Deliverable: Design tokens + 3 Radix-based components

Tuần 5.2: Custom Components
├── Ngày 8–9: Combobox (autocomplete, keyboard nav)
├── Ngày 10–11: Date Picker (accessible, i18n)
├── Ngày 12–14: Data Grid (sort, filter, virtual scroll)
└── Deliverable: 3 custom complex components

Tuần 5.3: Storybook + Chromatic + Monorepo Publish
├── Ngày 15–16: Storybook setup (MDX docs, controls, actions)
├── Ngày 17–18: Chromatic visual regression
├── Ngày 19–21: Package publish (npm/GitHub Packages, semantic versioning)
└── Deliverable: Published design system package

Tuần 5.4: Polish + Documentation
├── Ngày 22–23: Dark mode tokens
├── Ngày 24–25: Animation tokens (micro-interactions)
├── Ngày 26–27: Contribution guide, migration guide
├── Ngày 28: Review, polish
└── Deliverable: PROJECT 5 hoàn chỉnh — published, documented
```

### THÁNG 6: LEGACY MIGRATION + TỔNG HỢP PORTFOLIO

```
Tuần 6.1: Migration Strategy
├── Ngày 1–2: Strangler Fig Pattern (từng feature migrate)
├── Ngày 3–4: Web Components (wrap React → custom element)
├── Ngày 5–6: iframe Bridge (postMessage communication)
├── Ngày 7: jQuery interop (gọi plugin từ React, cleanup)
└── Deliverable: Migration plan document + demo setup

Tuần 6.2: Implement Migration
├── Ngày 8–9: Setup jQuery app + React app chạy song song
├── Ngày 10–11: Migrate 1 page (ví dụ: user profile)
├── Ngày 12–14: Web Components embed React trong jQuery
└── Deliverable: Demo app chạy song song jQuery + React

Tuần 6.3: Tổng hợp Portfolio
├── Ngày 15–16: Viết README chi tiết cho tất cả project
├── Ngày 17–18: Tạo portfolio site tổng hợp 6 project
├── Ngày 19–21: Quay video demo từng project (2-3 phút)
└── Deliverable: Portfolio site + video demos

Tuần 6.4: Apply Job
├── Ngày 22–23: Chuẩn bị câu trả lời phỏng vấn (Event Loop, Fiber, Caching)
├── Ngày 24–25: Live code practice (Modal, Dropdown, Data Table)
├── Ngày 26–27: Apply 10+ job Senior FE
├── Ngày 28: Review, iterate
└── Deliverable: 10+ applications, 1+ interview scheduled
```

---

