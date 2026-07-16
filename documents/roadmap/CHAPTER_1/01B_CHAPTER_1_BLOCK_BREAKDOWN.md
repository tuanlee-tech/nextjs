# BREAKDOWN CHI TIẾT TỪNG KHỐI HỌC (Đại diện mỗi phần)

* **File này là phụ trợ cho:** `01_CHAN_1_FRONTEND_MASTER.md` + `01A_CHAN_1_PROJECT_KNOWLEDGE_GAP.md`
* **Mục đích:** Breakdown từng buổi học cụ thể cho khối đầu tiên của mỗi phần (2–7). Áp dụng quy trình 4 bước: Input → Process → Output → Verify.
* **Cách dùng:** Mỗi buổi học 1 khối con. Không học nhiều khối cùng lúc. Hoàn thành artifact trước khi sang buổi tiếp theo.

---

## PHẦN 2: NỀN TẢNG CORE — Đại diện: 2.0 JS CORE ENGINE

> **Tổng thờii gian:** 4 buổi × 90 phút = 6 giờ
> **Output cuối:** 1 CodePen collection + 1 Excalidraw diagram + 1 note Obsidian

### Buổi 1: Execution Context + `this` Binding

**Mục tiêu:** Hiểu tại sao code JS đôi khi chạy không như mong đợi. Giải thích được 4 quy tắc `this` cho ngườii khác.

```
INPUT (20 phút)
├── Đọc file chính 2.0 (Execution Context, this Binding)
├── Đọc "You Don't Know JS" — Scope & Closures, Ch 1–2 (hoisting, scope)
└── Ghi lại 3 điểm chính cần học:
    1. Creation phase vs Execution phase khác gì?
    2. `var` hoisting khác `let`/`const` thế nào?
    3. 4 quy tắc this + 3 pitfall phổ biến

PROCESS (40 phút)
├── Tự viết 10 đoạn code `this` từ đơn giản đến phức tạp:
│   1. Method call: obj.sayHi()
│   2. Function call: sayHi() (strict vs non-strict)
│   3. Constructor: new Person()
│   4. Arrow function: obj.arrow = () => this.name
│   5. setTimeout(obj.method, 0) — mất this
│   6. Event listener — this trỏ vào element
│   7. call/apply/bind — explicit binding
│   8. Nested function trong method — mất this
│   9. Class method pass xuống component — mất this
│   10. Double arrow trong object literal
├── Chạy từng đoạn, dự đoán trước, so sánh kết quả
└── Tạo 1 "puzzle" khó: function return function, gán cho biến, gọi — this là gì?

OUTPUT (20 phút)
├── CodePen: 10 puzzle + giải thích từng dòng (comment chi tiết)
├── Note Obsidian: 
│   - 4 quy tắc this (dạng bảng)
│   - 3 pitfall phổ biến + cách fix
│   - 1 câu tóm tắt: "this trong JS phụ thuộc vào cách gọi function, không phải nơi định nghĩa"
└── Excalidraw: Diagram "this binding decision tree" (4 nhánh)

VERIFY (10 phút)
├── Feynman: Tự nói to trong 2 phút — giải thích `this` cho "junior"
├── Tự hỏi: "Nếu được hỏi phỏng vấn 'this trong JS là gì?', tôi trả lờii trong 30 giây thế nào?"
└── Ghi lại chỗ nào còn lúng túng → đánh dấu ôn lại tuần sau
```

**Artifact mong đợi:**
- [ ] CodePen: [JS Core] this Binding — 10 puzzles
- [ ] Note: this-binding.md (Obsidian)
- [ ] Diagram: this-decision-tree.png (Excalidraw)

---

### Buổi 2: Prototype Chain

**Mục tiêu:** Hiểu `instanceof` logic thật. Giải thích tại sao class là syntactic sugar.

```
INPUT (20 phút)
├── Đọc file chính 2.0 (Prototype Chain)
├── Đọc "JavaScript: The Definitive Guide" — Ch 6 (Objects, Prototypes)
└── 3 điểm chính:
    1. `__proto__` vs `prototype` — khác gì?
    2. `instanceof` kiểm tra gì thật sự?
    3. Tại sao không nên extend built-in?

PROCESS (40 phút)
├── Tạo inheritance chain 3 cấp BẰNG TAY (không dùng class):
│   Animal → Mammal → Dog
│   - Animal: { eats: true }
│   - Mammal: Object.create(Animal) + { hasFur: true }
│   - Dog: Object.create(Mammal) + { bark() {} }
├── Test: dog.eats, dog.hasFur, dog.bark() — đều work
├── So sánh với class syntax:
│   class Animal { constructor() { this.eats = true; } }
│   class Mammal extends Animal { constructor() { super(); this.hasFur = true; } }
│   class Dog extends Mammal { bark() {} }
├── Kiểm tra: instanceof, Object.getPrototypeOf, constructor property
└── Thử extend Array: class MyArray extends Array — xem behavior khác gì

OUTPUT (20 phút)
├── Excalidraw: Diagram prototype chain (3 cấp, có pointer)
├── CodePen: Cả 2 cách (Prototype + Class) — so sánh side-by-side
├── Note: 
│   - Bảng so sánh: Prototype vs Class syntax
│   - Giải thích: "instanceof kiểm tra prototype chain, không phải 'class'"
│   - Cảnh báo: "Không extend built-in vì..."
└── Tạo 1 câu hỏi phỏng vấn tự trả lờii: "Tại sao class là syntactic sugar?"

VERIFY (10 phút)
├── Feynman: Giải thích prototype chain trong 90 giây
├── Tự code lại từ đầu (không nhìn CodePen) — chain 2 cấp
└── Nếu quên → đánh dấu, ôn lại tuần sau
```

**Artifact mong đợi:**
- [ ] Excalidraw: prototype-chain-diagram.png
- [ ] CodePen: [JS Core] Prototype Chain — 2 approaches
- [ ] Note: prototype-chain.md

---

### Buổi 3: Proxy & Reflect + Class Modern

**Mục tiêu:** Biết dùng Proxy cho validation. Hiểu `#private` thực sự private.

```
INPUT (15 phút)
├── Đọc file chính 2.0 (Proxy & Reflect, Class Modern)
├── Đọc MDN: Proxy, Reflect, Private class features
└── 3 điểm chính:
    1. Proxy trap phổ biến (get, set, has, deleteProperty)
    2. Performance cost của Proxy
    3. `#private` vs closure-based privacy

PROCESS (35 phút)
├── Viết Proxy validate object:
│   const validator = new Proxy({}, {
│     set(target, prop, value) {
│       if (prop === 'age' && value < 0) throw new Error('Invalid age');
│       target[prop] = value;
│       return true;
│     }
│   });
├── Viết Proxy logging: log mọi access (get/set) — dùng cho debug
├── Viết Class modern:
│   class BankAccount {
│     #balance = 0;           // truly private
│     static bankName = 'VCB';  // static
│     get balance() { return this.#balance; }
│     deposit(amount) { this.#balance += amount; }
│   }
├── Thử access #balance từ ngoài → xem lỗi
├── So sánh với closure-based:
│   function createAccount() { let balance = 0; return { deposit... } }
└── Thử dùng Proxy với React state (xem có chậm không)

OUTPUT (20 phút)
├── CodePen: Proxy validation + logging + Class modern
├── Note:
│   - Bảng: Proxy trap phổ biến + use case
│   - Cảnh báo: "Proxy chậm hơn object thường ~10-100x — không dùng hot path"
│   - So sánh: `#private` vs closure vs `_convention`
└── Tạo 1 câu hỏi phỏng vấn: "Khi nào dùng Proxy? Khi nào không?"

VERIFY (10 phút)
├── Feynman: Giải thích Proxy trong 60 giây
├── Tự viết lại Proxy validate từ đầu (không nhìn CodePen)
└── Tự viết lại Class với #private + static
```

**Artifact mong đợi:**
- [ ] CodePen: [JS Core] Proxy & Class Modern
- [ ] Note: proxy-class-modern.md

---

### Buổi 4: Ôn tập + Nhúng vào Project

**Mục tiêu:** Kết nối lý thuyết với thực tế. Dùng kiến thức để refactor code legacy.

```
INPUT (10 phút)
├── Đọc lại 3 note đã viết (this, prototype, proxy)
├── Đọc file 01A: task nhúng P6 Legacy — "JS Core module (Prototype → Class refactor)"
└── Xem lại 3 artifact đã tạo

PROCESS (40 phút)
├── Trong P6 Legacy, tìm/tạo 1 module jQuery cũ dùng Prototype pattern:
│   function OldWidget(options) { this.options = options; }
│   OldWidget.prototype.render = function() { ... };
├── Refactor sang Class modern:
│   class ModernWidget {
│     #options;
│     constructor(options) { this.#options = options; }
│     render() { ... }
│   }
├── Thêm Proxy để validate options:
│   const validatedOptions = new Proxy(options, { set: validate });
├── Commit với message rõ ràng: "refactor: migrate OldWidget to Class + Proxy validation"
└── Viết ADR ngắn (5 dòng): "Tại sao chọn Class modern thay vì giữ Prototype?"

OUTPUT (20 phút)
├── Git commit trên P6 branch
├── ADR: `docs/adr/001-js-core-refactor.md`
├── Note ôn tập:
│   - Tổng hợp 3 khái niệm thành 1 mind map
│   - 5 câu hỏi phỏng vấn tự trả lờii được
└── Flashcard Anki: 10 cards (this, prototype, proxy, class)

VERIFY (20 phút)
├── Feynman tổng hợp: Giải thích cả 3 khái niệm trong 3 phút
├── Tự hỏi: "Nếu junior hỏi 'this là gì?', tôi dùng ví dụ nào?"
├── Review lại CodePen: còn puzzle nào chưa hiểu sâu?
└── Đánh dấu checklist file 01A: Khối 2.0 → HOÀN THÀNH
```

**Artifact mong đợi:**
- [ ] Git commit trên P6
- [ ] ADR: 001-js-core-refactor.md
- [ ] Note: js-core-mindmap.md
- [ ] Anki deck: 10 cards

---

## PHẦN 3: REACT & NEXT.JS — Đại diện: 3.0 FRAMEWORK EVOLUTION

> **Tổng thờii gian:** 3 buổi × 90 phút = 4.5 giờ
> **Output cuối:** 1 timeline diagram + 1 note so sánh + 1 ADR cho P6

### Buổi 1: React Evolution (Class → Hooks → 19)

```
INPUT (20 phút)
├── Đọc file chính 3.0 (React Evolution)
├── Đọc React docs: "Thinking in React" (legacy) + react.dev (new)
└── 3 điểm chính:
    1. Tại sao Hooks ra đờii? (wrapper hell, logic duplication)
    2. Concurrent Features (React 18) giải quyết gì?
    3. React 19 (Actions, useOptimistic, use(), Compiler)

PROCESS (40 phút)
├── Viết 1 component Class đầy đủ lifecycle:
│   componentDidMount, componentDidUpdate, componentWillUnmount
│   shouldComponentUpdate (tối ưu re-render)
├── Chuyển sang Functional + Hooks (tương đương):
│   useEffect (thay 3 lifecycle), useMemo (thay shouldComponentUpdate)
├── So sánh side-by-side: code dài bao nhiêu? Logic share dễ hơn không?
├── Thử React 19 `use()`:
│   const data = use(fetchData()); // unwrap Promise trong render
├── Tìm hiểu React Compiler: tác động đến useMemo/useCallback trong tương lai
└── Tạo 1 component dùng cả 3 cách: Class → Hooks → React 19

OUTPUT (20 phút)
├── CodePen/GitHub: 3 versions cùng 1 component
├── Note:
│   - Timeline: Class (2013) → Hooks 16.8 (2019) → Concurrent 18 (2022) → 19 (2024)
│   - Bảng so sánh: Class vs Hooks (code length, testability, logic sharing)
│   - Cảnh báo: "Class vẫn còn trong codebase legacy — cần biết để maintain"
└── Diagram: Evolution timeline (Excalidraw)

VERIFY (10 phút)
├── Feynman: "Tại sao Hooks ra đờii?" trong 60 giây
├── Tự viết lại component Hooks từ đầu (không nhìn code)
└── Tự hỏi: "React Compiler sẽ thay đổi gì trong cách tôi viết code?"
```

**Artifact:**
- [ ] Code: 3-versions-component
- [ ] Note: react-evolution.md
- [ ] Diagram: react-timeline.png

---

### Buổi 2: Next.js Evolution (Pages → App Router → v16)

```
INPUT (20 phút)
├── Đọc file chính 3.0 (Next.js Evolution)
├── Đọc Next.js docs: App Router, Caching, Server Actions
└── 3 điểm chính:
    1. Pages Router giải quyết gì? Hạn chế gì?
    2. App Router (RSC) giải quyết gì? Breaking changes?
    3. Next.js 15–16: Turbopack, "use cache", Proxy

PROCESS (40 phút)
├── Tạo 1 page đơn giản BẰNG CẢ 2 cách:
│   Pages Router: pages/index.tsx (getServerSideProps/getStaticProps)
│   App Router: app/page.tsx (Server Component, fetch)
├── So sánh:
│   - Bundle size (Pages vs App)
│   - Data fetching pattern
│   - Caching behavior
│   - API route vs Server Actions
├── Thử `fetch` trong Server Component — xem cache tự động
├── Thử Server Actions — mutation không cần API route
└── Tìm hiểu breaking changes: Next.js 15 async Request API (headers(), cookies())

OUTPUT (20 phút)
├── GitHub branch: `feat/nextjs-evolution-demo`
├── Note:
│   - Bảng so sánh: Pages vs App Router (10 tiêu chí)
│   - Timeline: Next.js 12 → 13 → 14 → 15 → 16
│   - Quyết định mặc định: "Dùng App Router cho project mới, maintain Pages nếu legacy"
└── ADR ngắn: "Tại sao P1 dùng App Router thay vì Pages?"

VERIFY (10 phút)
├── Feynman: "App Router khác Pages Router như thế nào?" trong 90 giây
├── Tự setup 1 App Router page từ đầu (không copy)
└── Tự hỏi: "Khi nào KHÔNG nên migrate từ Pages sang App?"
```

**Artifact:**
- [ ] Git branch: nextjs-evolution-demo
- [ ] Note: nextjs-evolution.md
- [ ] ADR: 002-app-router-decision.md

---

### Buổi 3: Rendering Strategy + Node vs Edge + Nhúng P6

```
INPUT (15 phút)
├── Đọc file chính 3.0 (Rendering Strategy, Node vs Edge)
├── Đọc web.dev: Rendering on the Web
└── 3 điểm chính:
    1. CSR vs SSR vs SSG vs ISR vs RSC — khi nào dùng cái nào?
    2. Node runtime vs Edge runtime — API availability, limits
    3. Tại sao Middleware chạy Edge không dùng được Prisma?

PROCESS (40 phút)
├── Vẽ decision tree: "Chọn rendering strategy nào?"
│   SEO cần? → SSR/SSG/RSC
│   Data thay đổi liên tục? → SSR
│   Data ít thay đổi? → SSG/ISR
│   App internal không cần SEO? → CSR
├── Tạo 1 bảng so sánh 5 strategies (10 tiêu chí)
├── Thử Edge runtime: deploy 1 function đơn giản lên Vercel Edge
│   (không dùng fs, không dùng Node-specific modules)
└── Trong P6 Legacy, viết ADR: "Migration strategy từ jQuery → React — dùng Strangler Fig"

OUTPUT (20 phút)
├── Excalidraw: Rendering strategy decision tree
├── Note: rendering-strategy.md (bảng so sánh chi tiết)
├── ADR P6: `docs/adr/003-migration-strategy.md`
└── Flashcard: 5 strategies + use case

VERIFY (15 phút)
├── Feynman: "CSR vs SSR vs RSC" trong 2 phút
├── Tự vẽ lại decision tree (không nhìn diagram)
└── Tự hỏi: "Nếu công ty dùng Pages Router, tôi có nên ép migrate không?"
```

**Artifact:**
- [ ] Diagram: rendering-decision-tree.png
- [ ] Note: rendering-strategy.md
- [ ] ADR: 003-migration-strategy.md
- [ ] Anki: 5 cards

---

## PHẦN 4: UI/UX & STYLING — Đại diện: 4.1 TAILWIND CSS DEEP DIVE

> **Tổng thờii gian:** 3 buổi × 60 phút = 3 giờ
> **Output cuối:** 1 custom config + 1 plugin + 1 project apply

### Buổi 1: Config & Theme Extension

```
INPUT (15 phút)
├── Đọc file chính 4.1
├── Đọc Tailwind docs: Configuration, Theme
└── 3 điểm chính:
    1. tailwind.config.ts structure
    2. theme.extend vs theme override
    3. Custom colors, spacing, fontSize

PROCESS (25 phút)
├── Tạo config từ đầu cho P1:
│   - Colors: primary, secondary, danger, success (semantic)
│   - Spacing: 4px base scale
│   - Font: heading, body
│   - Screens: sm, md, lg, xl
├── Thêm custom plugin đơn giản:
│   plugin(function({ addComponents }) {
│     addComponents({ '.btn-primary': { ... } })
│   })
├── Thử arbitrary values: `w-[123px]` → rồi refactor thành `w-31` (extend spacing)
└── So sánh: arbitrary vs extend — khi nào dùng cái nào?

OUTPUT (15 phút)
├── Code: `tailwind.config.ts` cho P1
├── Note: tailwind-config.md
│   - Rule: "Không dùng arbitrary values — extend theme"
│   - Bảng: tokens đã define
└── Commit trên P1

VERIFY (5 phút)
├── Feynman: "Tại sao không dùng arbitrary values?" trong 30 giây
├── Kiểm tra: toàn bộ P1 có arbitrary value nào không? Refactor nếu có.
```

**Artifact:**
- [ ] Code: tailwind.config.ts
- [ ] Note: tailwind-config.md

---

### Buổi 2: Dark Mode + @apply + v4 Changes

```
INPUT (10 phút)
├── Đọc file chính 4.1 (Dark mode, @apply, v4)
├── Đọc Tailwind docs: Dark Mode
└── 2 điểm chính:
    1. `darkMode: 'class'` vs `'media'`
    2. Khi nào dùng `@apply`?

PROCESS (30 phút)
├── Thêm dark mode vào P1:
│   - `darkMode: 'class'` trong config
│   - Toggle button (React state)
│   - `dark:` prefix cho components
├── Thử `@apply`:
│   - Extract `.card` từ utilities
│   - So sánh: `@apply` vs component riêng (shadcn)
├── Tìm hiểu Tailwind v4 (nếu đã ra):
│   - CSS-first config
│   - `@import "tailwindcss"` thay vì JS config
└── Quyết định: dùng v3 hay v4 cho P1?

OUTPUT (15 phút)
├── Code: Dark mode toggle hoạt động trên P1
├── Note: dark-mode-apply.md
│   - Rule: "@apply chỉ khi cần extract component class"
│   - Không lạm dụng
└── Commit trên P1

VERIFY (5 phút)
├── Test: Toggle dark mode, check all components
├── Feynman: "class vs media dark mode" trong 30 giây
```

**Artifact:**
- [ ] Code: P1 với dark mode
- [ ] Note: dark-mode-apply.md

---

### Buổi 3: Tối ưu Bundle + Nhúng P1

```
INPUT (10 phút)
├── Đọc file chính 4.1 (PurgeCSS, content config)
├── Đọc Tailwind docs: Optimizing for Production
└── 2 điểm chính:
    1. `content` config quan trọng thế nào?
    2. Tại sao bundle Tailwind nhỏ dù có nhiều utility?

PROCESS (30 phút)
├── Kiểm tra `content` trong P1:
│   - Có include đúng file paths không?
│   - Có bị miss file nào không?
├── Thử `tailwindcss` CLI build:
│   - `npx tailwindcss -i input.css -o output.css --minify`
│   - So sánh size: với content đúng vs content sai
├── Thêm `safelist` nếu cần (dynamic classes)
└── Final check: không còn arbitrary values, theme consistent

OUTPUT (15 phút)
├── Bundle size report (before/after optimize)
├── Note: tailwind-optimization.md
├── Commit final trên P1
└── ADR: "Tailwind config decisions for P1"

VERIFY (5 phút)
├── Lighthouse audit P1 — CSS có được purge đúng không?
├── Feynman: "Tại sao Tailwind bundle nhỏ?" trong 30 giây
```

**Artifact:**
- [ ] Bundle report
- [ ] Note: tailwind-optimization.md
- [ ] ADR: 004-tailwind-decisions.md

---

## PHẦN 5: TESTING & PERFORMANCE — Đại diện: 5.1 UNIT/INTEGRATION TEST

> **Tổng thờii gian:** 3 buổi × 90 phút = 4.5 giờ
> **Output cuối:** Test suite chạy được + coverage report

### Buổi 1: Vitest + Testing Library Setup

```
INPUT (20 phút)
├── Đọc file chính 5.1
├── Đọc Vitest docs: Getting Started
├── Đọc Testing Library docs: Queries, userEvent
└── 3 điểm chính:
    1. Vitest vs Jest — khác gì?
    2. Testing Library philosophy: test behavior, not implementation
    3. `userEvent` vs `fireEvent`

PROCESS (40 phút)
├── Setup Vitest trong P1:
│   npm install -D vitest @testing-library/react @testing-library/user-event
│   Thêm script "test": "vitest" trong package.json
├── Viết test cho 1 component đơn giản (Button):
│   - Render
│   - Click → check onClick được gọi
│   - Check text hiển thị đúng
├── Viết test với userEvent (không dùng fireEvent):
│   await user.click(button)
│   await user.type(input, 'hello')
├── Thử async query: `findBy` (element xuất hiện sau async)
└── Thử `within` — scoped query

OUTPUT (20 phút)
├── Code: `src/components/__tests__/Button.test.tsx`
├── Config: `vitest.config.ts`
├── Note: testing-setup.md
│   - Rule: "Dùng userEvent, không dùng fireEvent"
│   - Rule: "Query ưu tiên: getBy → queryBy → findBy"
└── Commit: "test: add Vitest + Testing Library setup"

VERIFY (10 phút)
├── Chạy `npm test` — pass all
├── Feynman: "Tại sao test behavior không test implementation?" trong 60 giây
├── Tự hỏi: "Nếu refactor component (đổi internal state), test có break không?"
```

**Artifact:**
- [ ] Code: Test suite + config
- [ ] Note: testing-setup.md

---

### Buổi 2: Mock + Coverage + Async Testing

```
INPUT (15 phút)
├── Đọc file chính 5.1 (Mock)
├── Đọc Vitest docs: Mocking
└── 3 điểm chính:
    1. `vi.fn()` vs `vi.spyOn()` vs `vi.mock()`
    2. Async testing: `waitFor`, `findBy`
    3. Coverage threshold

PROCESS (40 phút)
├── Mock function:
│   const onClick = vi.fn();
│   render(<Button onClick={onClick} />);
│   expect(onClick).toHaveBeenCalledTimes(1);
├── Mock module:
│   vi.mock('./api', () => ({ fetchUser: vi.fn(() => Promise.resolve({ name: 'John' })) }));
├── Test async component:
│   render(<UserProfile userId="1" />);
│   expect(await screen.findByText('John')).toBeInTheDocument();
├── Dùng `waitFor`:
│   await waitFor(() => expect(screen.getByText('Loaded')).toBeVisible());
└── Setup coverage:
│   thresholds: { branches: 80, functions: 80, lines: 80, statements: 80 }

OUTPUT (20 phút)
├── Code: Test cho async component (UserProfile)
├── Coverage report (`npm run test:coverage`)
├── Note: testing-advanced.md
└── Commit

VERIFY (15 phút)
├── Review coverage report — branch nào chưa cover?
├── Feynman: "Khi nào dùng vi.fn() vs vi.mock()?" trong 60 giây
├── Tự viết test cho 1 component chưa test (trong P1)
```

**Artifact:**
- [ ] Code: Async tests + coverage
- [ ] Note: testing-advanced.md
- [ ] Coverage report

---

### Buổi 3: Integration Test + Nhúng P1

```
INPUT (10 phút)
├── Đọc file chính 5.1
├── Đọc Testing Library docs: Integration testing
└── 2 điểm chính:
    1. Unit test vs Integration test khác gì?
    2. Khi nào test component đơn lẻ, khi nào test flow?

PROCESS (40 phút)
├── Viết integration test cho flow trong P1:
│   - Navigate to blog
│   - Click 1 bài viết
│   - Kiểm tra nội dung hiển thị
│   - (Không cần E2E — dùng Memory Router)
├── Test form submission:
│   - Fill contact form
│   - Submit
│   - Check success message
│   - (Mock API call)
├── Setup CI:
│   GitHub Actions: chạy test trên mỗi PR
└── Thêm test badge vào README

OUTPUT (20 phút)
├── Code: Integration tests
├── GitHub Actions: `.github/workflows/test.yml`
├── README: Test badge
├── Note: integration-testing.md
└── Commit

VERIFY (20 phút)
├── Tạo PR → xem CI chạy test → pass/fail
├── Feynman: "Unit vs Integration test?" trong 60 giây
├── Tự hỏi: "Test của tôi có bị break khi refactor implementation không?"
└── Đánh dấu checklist 01A: Khối 5.1 → HOÀN THÀNH
```

**Artifact:**
- [ ] Code: Integration tests + CI
- [ ] Note: integration-testing.md
- [ ] CI badge

---

## PHẦN 6: ECOSYSTEM — Đại diện: 6.1 MICRO-FRONTENDS

> **Tổng thờii gian:** 2 buổi × 90 phút = 3 giờ
> **Output cuối:** 1 demo Module Federation + 1 decision document

### Buổi 1: Module Federation Theory + Setup

```
INPUT (20 phút)
├── Đọc file chính 6.1
├── Đọc Webpack Module Federation docs
├── Đọc 1 case study: "How We Migrated to Micro-frontends"
└── 3 điểm chính:
    1. Host vs Remote — ai expose, ai consume?
    2. Shared dependencies — version conflict?
    3. Khi nào cần MF, khi nào overkill?

PROCESS (40 phút)
├── Setup 2 apps đơn giản:
│   App Shell (Host): React 18, layout chính
│   App Cart (Remote): React 18, expose Cart component
├── Config Module Federation:
│   Cart: new ModuleFederationPlugin({ name: 'cart', exposes: { './Cart': './src/Cart' } })
│   Shell: new ModuleFederationPlugin({ remotes: { cart: 'cart@http://localhost:3001/remoteEntry.js' } })
├── Thử load Cart trong Shell:
│   const Cart = React.lazy(() => import('cart/Cart'));
│   <Suspense fallback="Loading..."><Cart /></Suspense>
└── Thử shared dependencies: React singleton (chỉ load 1 lần)

OUTPUT (20 phút)
├── Code: 2 apps chạy được (GitHub repo riêng hoặc monorepo)
├── Note: micro-frontends.md
│   - Diagram: Host-Remote relationship
│   - Bảng: Khi nào dùng MF vs Monolith
│   - Quyết định mặc định: "Không dùng MF cho project < 5 devs"
└── ADR: "Tại sao không dùng MF cho P1-P6?"

VERIFY (10 phút)
├── Feynman: "Module Federation là gì?" trong 90 giây
├── Tự hỏi: "Nếu team tôi có 3 dev, có nên dùng MF không?"
```

**Artifact:**
- [ ] Code: MF demo (2 apps)
- [ ] Note: micro-frontends.md
- [ ] ADR: 005-no-mf-for-small-team.md

---

### Buổi 2: Single-SPA + Nhúng P6

```
INPUT (15 phút)
├── Đọc file chính 6.1 (Single-SPA)
├── Đọc Single-SPA docs
└── 2 điểm chính:
    1. Single-SPA vs Module Federation — khác gì?
    2. Multi-framework: React + Vue trong 1 page?

PROCESS (40 phút)
├── Tìm hiểu Single-SPA (không cần code sâu):
│   - Register application
│   - Lifecycle: bootstrap, mount, unmount
│   - Activity function (khi nào mount app nào)
├── So sánh với Module Federation:
│   - Single-SPA: framework-agnostic, routing-based
│   - MF: webpack-based, component-based
├── Trong P6 Legacy, viết ADR:
│   "Tại sao chọn Strangler Fig + iframe thay vì MF?"
│   (Vì: 1 team nhỏ, không cần independent deploy, jQuery không dùng webpack)
└── Nếu có thờii gian: thử register 1 React app trong Single-SPA shell

OUTPUT (20 phút)
├── Note: single-spa-vs-mf.md (bảng so sánh)
├── ADR P6: `docs/adr/006-no-mf-in-migration.md`
├── Diagram: P6 migration architecture (Strangler Fig)
└── Commit ADR

VERIFY (15 phút)
├── Feynman: "Khi nào dùng Single-SPA, khi nào dùng Module Federation?"
├── Tự hỏi: "Nếu công ty tôi có 20 dev, 3 team, dùng gì?"
└── Đánh dấu checklist 01A: Khối 6.1 → HOÀN THÀNH
```

**Artifact:**
- [ ] Note: single-spa-vs-mf.md
- [ ] ADR: 006-no-mf-in-migration.md
- [ ] Diagram: p6-migration-arch.png

---

## PHẦN 7: SYSTEM DESIGN, BẢO MẬT & VẬN HÀNH — Đại diện: 7.1 FRONTEND SYSTEM DESIGN

> **Tổng thờii gian:** 6 buổi × 60 phút = 6 giờ (1 buổi/đề)
> **Output cuối:** 6 video record + 6 diagram + khung RADIO thuộc lòng

### Buổi 1: Học Khung RADIO (Không phải luyện đề)

```
INPUT (20 phút)
├── Đọc file chính 7.1 (RADIO framework)
├── Đọc Frontend Interview Handbook: System Design
├── Xem 1 video mẫu: "Frontend System Design — News Feed" (YouTube)
└── 5 điểm chính:
    1. Requirements: hỏi gì? (functional, non-functional, constraints)
    2. Architecture: component tree, data flow, client/server boundary
    3. Data Model: entities, state ownership
    4. Interface: API shape, real-time?
    5. Optimizations: performance, a11y, security, graceful degradation

PROCESS (25 phút)
├── Tạo template RADIO trên Excalidraw:
│   5 sections, mỗi section có prompt questions
├── Tự trả lờii prompt cho 1 đề đơn giản (Autocomplete):
│   R: Who? Mobile/desktop? Scale? Realtime?
│   A: Component tree? Data flow?
│   D: What entities? Where state lives?
│   I: REST or GraphQL? Request/response shape?
│   O: Virtual scroll? Debounce? Error handling?
└── Không cần vẽ đẹp — cần vẽ nhanh, đúng thứ tự

OUTPUT (10 phút)
├── Excalidraw template: RADIO-framework.excalidraw
├── Note: radio-framework.md
│   - Checklist câu hỏi cho mỗi chữ cái
│   - Common mistakes (nhảy vào giải pháp ngay, không hỏi requirements)
└── Flashcard: 5 chữ cái + ý nghĩa

VERIFY (5 phút)
├── Tự nói to: "RADIO là gì?" trong 60 giây — không nhìn note
├── Tự hỏi: "Nếu interviewer hỏi 'Thiết kế News Feed', câu đầu tiên tôi hỏi là gì?"
```

**Artifact:**
- [ ] Template: RADIO-framework.excalidraw
- [ ] Note: radio-framework.md
- [ ] Anki: 5 cards

---

### Buổi 2–7: Luyện 6 Đề (Mỗi buổi 1 đề)

**Quy trình giống nhau cho cả 6 đề:**

```
CHUẨN BỊ (10 phút trước buổi)
├── Mở Excalidraw template RADIO
├── Đặt timer: 45 phút
├── Ghi âm (voice memo hoặc screen record)
└── Không mở tài liệu, không xem đáp án trước

LUYỆN (45 phút)
├── 0–5': Requirements
│   Hỏi to: "Who is the user? Mobile or desktop? How many users?
│            Real-time needed? SEO important?"
│   Ghi lại assumptions
├── 5–15': Architecture
│   Vẽ component tree
│   Vẽ data flow (arrow: data đi từ đâu đến đâu)
│   Xác định: cái gì chạy server, cái gì chạy client
├── 15–25': Data Model
│   Liệt kê entities
│   Quyết định: state nào local, state nào global, state nào server
├── 25–35': Interface
│   API endpoints (hoặc GraphQL schema)
│   Real-time? (WebSocket, SSE, polling)
├── 35–45': Optimizations
│   Performance: virtualization, lazy loading, code splitting
│   Network: caching, retry, optimistic update
│   Accessibility: keyboard nav, screen reader
│   Security: XSS prevention, auth
│   Graceful degradation: 1 phần fail thì sao?
└── NÓI TO suốt quá trình (talk out loud)

REVIEW (15 phút sau buổi)
├── Nghe lại recording
├── Tự đánh giá:
│   [ ] Có hỏi requirements đầy đủ không?
│   [ ] Có nói trade-off không? ("I choose X because Y, but if Z...")
│   [ ] Có đề cập graceful degradation không?
│   [ ] Có dừng ở "vẽ đẹp" hay đi sâu data flow?
│   [ ] Có nói quá nhanh/quá chậm?
├── So sánh với đáp án mẫu (Frontend Interview Handbook)
├── Ghi lại 3 điểm cần cải thiện cho đề sau
└── Lưu diagram + note vào folder: `system-design/autocomplete/`
```

**6 Đề theo thứ tự:**

| Buổi | Đề | Độ khó | Focus |
|------|-----|--------|-------|
| 2 | **Autocomplete / Search-as-you-type** | Dễ | Debounce, request cancellation, cache |
| 3 | **Image Carousel** | Dễ | Accessibility, keyboard nav, lazy load |
| 4 | **News Feed** | Trung bình | Infinite scroll, real-time, fault-tolerant |
| 5 | **E-commerce Checkout** | Trung bình | Multi-step, state machine, error handling |
| 6 | **Dashboard / Analytics** | Khó | Large data, caching, normalization |
| 7 | **Chat Application** | Khó | Real-time, message ordering, offline |

**Artifact mỗi buổi:**
- [ ] Video/Voice recording (45 phút)
- [ ] Excalidraw diagram
- [ ] Note: `system-design/{topic}/review.md` (3 điểm cần cải thiện)

---

### Buổi 8: Tổng hợp + Pattern Recognition

```
INPUT (15 phút)
├── Đọc lại 6 note review
├── Tìm pattern chung:
│   - Đề nào cũng cần: virtualization, debounce, error boundary
│   - Đề nào cũng hỏi: "What if API fails?"
└── 3 điểm chính:
    1. Pattern lặp lại trong mọi đề
    2. Câu hỏi mở rộng thường gặp
    3. Cách trả lờii trade-off nhanh

PROCESS (30 phút)
├── Tạo "cheat sheet" System Design:
│   - 10 optimizations dùng cho mọi đề
│   - 5 câu hỏi requirements template
│   - 3 cách nói trade-off
├── Thử đề ngẫu nhiên (không trong 6 đề đã luyện):
│   Ví dụ: "Thiết kế trang xem video (YouTube)"
│   Áp dụng RADIO trong 30 phút (ngắn hơn lần đầu)
└── Record lại, so sánh với buổi 2

OUTPUT (10 phút)
├── Note: system-design-cheat-sheet.md
├── Flashcard: 20 cards (pattern, trade-off, optimization)
└── Final self-assessment: "Tôi có tự tin đi phỏng vấn System Design không?"

VERIFY (5 phút)
├── Feynman: "Khung RADIO" trong 90 giây — không nhìn note
├── Tự hỏi: "Nếu được hỏi đề lạ, tôi có bình tĩnh áp dụng RADIO không?"
└── Đánh dấu checklist 01A: Khối 7.1 → HOÀN THÀNH
```

**Artifact:**
- [ ] Note: system-design-cheat-sheet.md
- [ ] Anki: 20 cards
- [ ] Self-assessment score (1–10)

---

## PHỤ LỤC: TEMPLATE BREAKDOWN CHO MỌI KHỐI

Nếu bạn muốn tự breakdown khối còn lại, dùng template này:

```markdown
### Khối: [Tên khối]

**Tổng thờii gian:** [N] buổi × [M] phút = [Tổng] giờ
**Output cuối:** [1 câu tóm tắt]

#### Buổi 1: [Chủ đề con 1]

**Mục tiêu:** [1 câu — học xong biết làm gì?]

```
INPUT ([X] phút)
├── Đọc file chính [mục]
├── Đọc [tài liệu bắt buộc]
└── [N] điểm chính:
    1. [?]
    2. [?]
    3. [?]

PROCESS ([Y] phút)
├── [Hành động cụ thể — code/viết/vẽ]
├── [Hành động cụ thể]
└── [Hành động cụ thể]

OUTPUT ([Z] phút)
├── [Artifact 1]
├── [Artifact 2]
└── [Artifact 3]

VERIFY ([W] phút)
├── Feynman: ["..."] trong [N] giây
├── [Kiểm tra khác]
└── [Ghi lại chỗ chưa hiểu]
```

**Artifact mong đợi:**
- [ ] [Artifact 1]
- [ ] [Artifact 2]
```

---

## CHECKLIST TỔNG HỢP 6 KHỐI ĐẠI DIỆN

- [ ] **2.0 JS Core Engine:** 4 buổi, 6 giờ, 4 artifacts
- [ ] **3.0 Framework Evolution:** 3 buổi, 4.5 giờ, 3 artifacts
- [ ] **4.1 Tailwind Deep Dive:** 3 buổi, 3 giờ, 3 artifacts
- [ ] **5.1 Unit/Integration Test:** 3 buổi, 4.5 giờ, 3 artifacts
- [ ] **6.1 Micro-frontends:** 2 buổi, 3 giờ, 2 artifacts
- [ ] **7.1 Frontend System Design:** 8 buổi, 6 giờ, 8 artifacts

**Tổng thờii gian ước tính:** 23 buổi × ~75 phút = **~29 giờ**

> **Lưu ý:** Đây chỉ là 6 khối đại diện. Còn ~20 khối khác trong file chính. Áp dụng cùng quy trình 4 bước (Input → Process → Output → Verify) cho mỗi khối. Không học nhiều khối cùng lúc — hoàn thành 1 khối trước khi sang khối tiếp theo.
