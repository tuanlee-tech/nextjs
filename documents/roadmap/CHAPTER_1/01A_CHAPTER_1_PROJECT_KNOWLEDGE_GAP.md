# PHÂN TÍCH ĐỘ PHỦ KIẾN THỨC QUA 6 PROJECTS + HƯỚNG DẪN XỬ LÝ KIẾN THỨC THIẾU

* **File này là phụ trợ cho:** `01_CHAN_1_FRONTEND_MASTER.md`
* **Mục đích:** Xác định chính xác kiến thức nào đã được 6 projects cover, kiến thức nào thiếu, và chiến lược xử lý từng loại thiếu — để bạn không bỏ sót mảng nào khi breakdown học.
* **Cách dùng:** Đọc song song với file chính. Mỗi tuần làm project, kiểm tra checklist trong file này để đảm bảo không bỏ qua kiến thức thiếu.

---

## PHẦN 1: MA TRẬN ĐỘ PHỦ KIẾN THỨC × 6 PROJECTS

### Chú thích

| Ký hiệu | Ý nghĩa |
|---------|---------|
| ✅ | Cover tốt — kiến thức này được thực hành trực tiếp trong project |
| ⚠️ | Cover nông hoặc gián tiếp — dùng đến nhưng không đi sâu, hoặc chỉ "nhắc qua" |
| ❌ | Không cover — project không đụng đến mảng này |
| 🔧 | Có thể nhúng thêm vào project này mà không cần tạo project mới |

---

### 1.1. PHẦN 2: NỀN TẢNG CORE (JS/TS/Build/Package)

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **2.0 JS Core Engine** |
| Execution Context & Call Stack | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| `this` Binding (4 quy tắc) | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu — có thể nhúng P6 |
| Prototype Chain | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu — có thể nhúng P6 |
| Proxy & Reflect | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Class Modern (`#private`, `static`) | ❌ | ❌ | ❌ | ❌ | ⚠️ Dùng class component | 🔧 | 🟡 Thiếu — nhúng P6 |
| **2.1 JS Engine & Runtime** |
| V8 Engine (Ignition → TurboFan) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Event Loop (Microtask vs Macrotask) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Memory Management (GC, leaks) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **2.2 TypeScript Nâng cao** |
| Type Safety (`unknown`, Guard, `never`) | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | 🟡 Dùng nhưng không tự viết deep types |
| Generics (constraints, mapped, conditional) | ❌ | ❌ | ❌ | ❌ | ⚠️ Generic component | ❌ | 🟡 Thiếu — nhúng P5 |
| Utility Types tự viết (`DeepPartial`, `Paths`) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Zod Runtime Validation | ✅ | ✅ | ⚠️ RTK Query | ⚠️ Form | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| **2.3 Build Tool & Bundler** |
| Webpack vs Vite vs Turbopack | ❌ | ❌ | ⚠️ Turborepo dùng | ❌ | ⚠️ Publish config | 🔧 Vite setup | 🟡 Thiếu — nhúng P3, P6 |
| Tree-shaking (`sideEffects`, ESM) | ❌ | ❌ | ⚠️ Bundle analyze | ❌ | ⚠️ Package size | ❌ | 🟡 Thiếu — nhúng P3, P5 |
| Code Splitting (route, dynamic import) | ⚠️ `next/dynamic` | ⚠️ `next/dynamic` | ⚠️ Route split | ⚠️ Route split | ❌ | ❌ | 🟡 Dùng nhưng không hiểu sâu |
| Bundle Analysis | ❌ | ❌ | 🔧 | ❌ | 🔧 | ❌ | 🟡 Thiếu — nhúng P3, P5 |
| **2.4 Package Manager** |
| pnpm / Lockfile / Workspace | ❌ | ⚠️ Lockfile conflict | ✅ Workspace | ❌ | ⚠️ Publish | ❌ | 🟡 Chỉ P3 cover tốt |
| Peer Dependencies Hell | ❌ | ❌ | ⚠️ Monorepo | ❌ | ⚠️ Package deps | ❌ | 🟡 Thiếu — nhúng P3, P5 |
| Security (audit, poisoning) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **2.5 Design Patterns** |
| Singleton (Zustand/Redux store) | ❌ | ✅ Zustand | ✅ Redux | ✅ Zustand | ❌ | ❌ | 🟢 Cover tốt P2-P4 |
| Observer / Pub-Sub | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Factory / Strategy | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Compound Components | ❌ | ❌ | ❌ | ❌ | ✅ Tabs, Select | ❌ | 🟢 Cover tốt P5 |
| HOC vs Render Props vs Hooks | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu — nhúng P6 |
| State Machine (XState) | ❌ | ✅ Checkout | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |

---

### 1.2. PHẦN 3: REACT & NEXT.JS

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **3.0 Framework Evolution** |
| React Class Lifecycle | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 jQuery→Class→Hooks | 🟡 Thiếu — nhúng P6 |
| Pages → App Router Timeline | ⚠️ Dùng App Router | ⚠️ Dùng App Router | ❌ | ⚠️ Dùng App Router | ❌ | 🔧 Migration | 🟡 Lý thuyết, không thực hành |
| CSR→SSR→SSG→ISR→RSC | ⚠️ SSG blog | ⚠️ SSR/SSG | ❌ | ⚠️ Dynamic meta | ❌ | ❌ | 🟡 Không so sánh chủ động |
| Node vs Edge Runtime | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **3.1 React Under the Hood** |
| Fiber Architecture | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Reconciliation & Diffing | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Strict Mode & Double Mount | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | 🟡 Dùng nhưng không debug |
| Profiler DevTools | ❌ | ❌ | 🔧 Chart perf | 🔧 Feed perf | ❌ | ❌ | 🟡 Thiếu — nhúng P3, P4 |
| React Compiler (auto-memo) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **3.2 Re-render Optimization** |
| `useMemo` / `useCallback` | ❌ | ❌ | 🔧 Chart memo | 🔧 Virtual scroll | ❌ | ❌ | 🟡 Thiếu — nhúng P3, P4 |
| `React.memo` | ❌ | ❌ | 🔧 Table row | 🔧 Post item | ❌ | ❌ | 🟡 Thiếu — nhúng P3, P4 |
| `useRef` (DOM, prev value) | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | ⚠️ Dùng | 🟡 Dùng nhưng không hiểu sâu |
| **3.3 Next.js App Router** |
| RSC vs CC phân biệt | ✅ | ✅ | ❌ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| RSC Serialization Limits | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| React 19 `use()` API | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Caching Strategy (4 loại) | ⚠️ Dùng | ⚠️ Dùng | ❌ | ❌ | ❌ | ❌ | 🟡 Dùng nhưng không chủ động |
| Server Actions | ✅ Form | ✅ Checkout | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| **3.4 Error Handling & Resilience** |
| Error Boundary | ❌ | ⚠️ Form error | ⚠️ Partial fail | ⚠️ Optimistic fail | ❌ | ❌ | 🟡 Thiếu — nhúng P2-P4 |
| Graceful Degradation | ❌ | ⚠️ Cart offline | ⚠️ Chart fail | ⚠️ Feed partial | ❌ | ❌ | 🟡 Thiếu — nhúng P2-P4 |
| Retry Pattern (exponential) | ❌ | ⚠️ TanStack retry | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| Hydration Mismatch | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **3.5 State Management** |
| TanStack Query | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| Zustand | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| Redux Toolkit | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| Redux Saga (polling, cancel) | ❌ | ❌ | ✅ Real-time | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| RTK Query | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P3 |
| XState | ❌ | ✅ Checkout | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| **3.6 Form Engineering** |
| react-hook-form + Zod | ⚠️ Server Action | ✅ Checkout | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| Field Arrays (dynamic form) | ❌ | ✅ Cart items | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| Optimistic Form | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| Auto-save Draft | ❌ | 🔧 | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu — nhúng P2 |
| **3.7 Migration Legacy** |
| Strangler Fig Pattern | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| Web Components | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| iframe Bridge | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| jQuery Interop | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |

---

### 1.3. PHẦN 4: UI/UX & STYLING

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **4.1 Tailwind Deep Dive** | ✅ | ✅ | ⚠️ Dùng | ⚠️ Dùng | ✅ | ❌ | 🟢 Cover tốt P1, P2, P5 |
| **4.2 Component Library** (Radix/shadcn) | ✅ shadcn | ⚠️ shadcn | ❌ | ❌ | ✅ Radix | ❌ | 🟢 Cover tốt P1, P5 |
| **4.3 Design System** (Tokens) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | 🟢 Cover tốt P5 |
| **4.4 Accessibility** (WCAG) | ⚠️ Cơ bản | ⚠️ Cơ bản | ⚠️ Table a11y | ⚠️ Cơ bản | ✅ | ❌ | 🟡 Nông ở P1-P4, tốt P5 |
| **4.5 Animation** (Framer Motion) | ❌ | ❌ | ❌ | ✅ | ⚠️ Micro | ❌ | 🟢 Cover tốt P4 |
| **4.6 CSS Modern** (`@layer`, `:has()`, container queries) | ❌ | ❌ | ❌ | ❌ | 🔧 | ❌ | 🔴 Thiếu — nhúng P5 |

---

### 1.4. PHẦN 5: TESTING & PERFORMANCE

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **5.1 Unit/Integration Test** (Vitest) | ⚠️ Có nhắc | ⚠️ Có nhắc | ✅ | ⚠️ Có nhắc | ✅ | ❌ | 🟡 Nhẹ ở P1, P2, P4 |
| **5.2 E2E Test** (Playwright) | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | 🟢 Cover tốt 5/6 |
| **5.3 Mock API** (MSW) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **5.4 Performance Measurement** |
| Lighthouse CI | ✅ | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| Core Web Vitals (LCP/INP/CLS) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Không optimize chủ động |
| LoAF API | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Performance Budget | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **5.5 Tối ưu Web Thuần** |
| Critical Rendering Path (CRP) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| CSS Critical / Inline | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Font Subsetting + Preload | ⚠️ Preload | ❌ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P1 |
| Image `srcset`/AVIF | ⚠️ Next Image | ⚠️ Next Image | ❌ | ⚠️ Next Image | ❌ | ❌ | 🟡 Dùng Next.js, không thuần |
| Video Optimization | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| HTTP Caching (headers, CDN) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| DevTools (Waterfall, Flame, Heap) | ❌ | ❌ | 🔧 | 🔧 | ❌ | ❌ | 🔴 Thiếu — nhúng P3, P4 |

---

### 1.5. PHẦN 6: ECOSYSTEM

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **6.1 Micro-frontends** (Module Federation) | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | 🟡 Thiếu — nhúng P6 |
| **6.2 Monorepo** (Turborepo) | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | 🟢 Cover tốt P3, P5 |
| **6.3 PWA** (Service Worker, Push) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| **6.4 i18n** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| **6.5 Data Visualization** (Recharts) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| **6.6 Storybook** | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | 🟢 Cover tốt P3, P5 |
| **6.7 Web Workers** | ❌ | ❌ | ✅ CSV parse | ✅ Image compress | ❌ | ❌ | 🟢 Cover tốt P3, P4 |
| **6.8 Web APIs & Storage** |
| IndexedDB / Dexie.js | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| IntersectionObserver | ⚠️ Lazy load | ⚠️ Lazy load | ❌ | ✅ Infinite scroll | ❌ | ❌ | 🟡 Thiếu — nhúng P1, P2 |
| ResizeObserver | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Broadcast Channel | ❌ | ❌ | ❌ | ⚠️ Cross-tab | ❌ | ❌ | 🟡 Thiếu — nhúng P4 |
| Page Visibility API | ❌ | ❌ | ❌ | 🔧 Pause video | ❌ | ❌ | 🔴 Thiếu — nhúng P4 |
| Clipboard API | ❌ | ❌ | ❌ | 🔧 Copy link | ❌ | ❌ | 🔴 Thiếu — nhúng P4 |
| **6.9 SEO Technical** | ✅ | ❌ | ❌ | ⚠️ Dynamic meta | ❌ | ❌ | 🟢 Cover tốt P1 |
| **6.10 AI Coding Agent** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **6.11 BFF Pattern** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **6.12 Git Teamwork** |
| Rebase vs Merge | ⚠️ Flow | ⚠️ Cherry-pick | ⚠️ Monorepo scope | ⚠️ Rebase | ⚠️ Versioning | ⚠️ Advanced | 🟡 Nhẹ ở tất cả |
| Conflict Resolution | ⚠️ | ⚠️ Lockfile | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Nhẹ |
| Interactive Rebase / Squash | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Cherry-pick Hotfix | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| `reflog` / `bisect` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |

---

### 1.6. PHẦN 7: SYSTEM DESIGN, BẢO MẬT & VẬN HÀNH

| Kiến thức | P1 Landing | P2 E-com | P3 Dashboard | P4 Social | P5 Design System | P6 Legacy | Đánh giá |
|-----------|:----------:|:--------:|:------------:|:---------:|:----------------:|:---------:|----------|
| **7.1 Frontend System Design** (RADIO) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **7.2 Bảo mật** |
| XSS / `dangerouslySetInnerHTML` | ⚠️ Cơ bản | ⚠️ Cơ bản | ⚠️ Cơ bản | ⚠️ Cơ bản | ❌ | ❌ | 🟡 Nông |
| CSRF / SameSite Cookie | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| CSP (Content Security Policy) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| CORS | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Auth (OAuth/JWT, httpOnly) | ❌ | ⚠️ Stripe auth | ⚠️ Role-based | ⚠️ | ❌ | ❌ | 🟡 Thiếu — nhúng P2-P4 |
| Server Action Authorization | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| Supply Chain Security | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **7.3 Production Ops** |
| Error Tracking (Sentry) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Nhẹ |
| RUM (Real User Monitoring) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Feature Flags | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Rollback Strategy | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| **7.4 Judgment & War Stories** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |

---

## PHẦN 2: THỐNG KÊ TỔNG HỢP

### 2.1. Tỷ lệ cover theo từng phần

| Phần | Tổng kiến thức | Cover tốt (✅) | Cover nông (⚠️) | Thiếu (❌) | Tỷ lệ thiếu |
|------|---------------|----------------|-----------------|------------|-------------|
| 2. Nền tảng Core | 20 | 2 | 8 | 10 | **50%** |
| 3. React & Next.js | 32 | 10 | 12 | 10 | **31%** |
| 4. UI/UX & Styling | 6 | 3 | 2 | 1 | **17%** |
| 5. Testing & Performance | 14 | 4 | 4 | 6 | **43%** |
| 6. Ecosystem | 22 | 7 | 7 | 8 | **36%** |
| 7. System Design & Security | 16 | 0 | 5 | 11 | **69%** |
| **TỔNG** | **110** | **26** | **38** | **46** | **42%** |

### 2.2. Phân loại kiến thức thiếu theo cách xử lý

| Loại | Số lượng | Đặc điểm | Cách xử lý |
|------|---------|----------|-----------|
| **A. Có thể nhúng vào project hiện có** | 18 | Kiến thức kỹ thuật, có thể thêm feature nhỏ vào project đang làm | Nhúng trực tiếp, không tạo project mới |
| **B. Cần Mini-Exercise / Code Kata** | 15 | Lý thuyết nền tảng, không thể "làm" trong project | 15–30 phút/ngày, tự chấm điểm |
| **C. Cần Mock Interview / Behavioral** | 8 | Kỹ năng phỏng vấn, judgment, war stories | Luyện nói, record, review |
| **D. Cần đọc + hiểu (không cần code)** | 5 | Concept, mindset, best practices | Đọc tài liệu, viết note |

---

## PHẦN 3: HƯỚNG DẪN XỬ LÝ TỪNG LOẠI KIẾN THỨC THIẾU

### LOẠI A: NHÚNG VÀO PROJECT HIỆN CÓ (18 kiến thức)

> **Nguyên tắc:** Không tạo project mới. Thêm 1–2 task nhỏ vào project đang làm. Mỗi task 2–4 giờ.

#### A1. Nhúng vào P1 Landing + Blog

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| Font Subsetting + Preload | Thêm font Google Fonts với `display=swap`, preload `woff2`, subset cho Latin + Vietnamese | 1 giờ |
| IntersectionObserver | Thêm lazy load cho ảnh blog, analytics tracking (track khi user scroll đến section) | 2 giờ |
| CSS Modern (`@layer`, container queries) | Thêm `@layer` vào Tailwind config, dùng container query cho blog card grid | 2 giờ |
| Cherry-pick Hotfix | Tạo 1 bug nhỏ trên `main`, fix trên `main`, cherry-pick sang `release/v1.0` | 1 giờ |
| MSW Mock API | Mock API cho newsletter form (không cần backend thật để dev) | 2 giờ |

#### A2. Nhúng vào P2 E-commerce

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| Optimistic Form | Checkout form: update UI ngay khi submit, rollback nếu Stripe fail | 2 giờ |
| Auto-save Draft | Lưu form draft vào `sessionStorage`, restore khi user quay lại | 1 giờ |
| CSRF / SameSite Cookie | Thêm CSRF token cho checkout form, config SameSite cookie | 2 giờ |
| Server Action Authorization | Thêm check user có quyền checkout không (trong Server Action) | 1 giờ |
| BFF Pattern | Tạo Route Handler aggregate Stripe API + inventory API thành 1 endpoint | 3 giờ |
| Retry Pattern (exponential) | Config TanStack Query retry với exponential backoff cho cart API | 30 phút |
| Lockfile Conflict Resolution | Giả lập conflict `pnpm-lock.yaml`, practice resolve đúng cách | 30 phút |

#### A3. Nhúng vào P3 Dashboard

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| React Profiler | Dùng Profiler DevTools tìm unnecessary render ở chart/table, viết ADR | 2 giờ |
| `useMemo` / `React.memo` | Memoize chart component và table row, đo trước/sau bằng Profiler | 1 giờ |
| Bundle Analysis | Chạy `@next/bundle-analyzer`, tìm chunk lớn nhất, viết report | 1 giờ |
| DevTools (Waterfall, Flame) | Dùng DevTools đo CWV thật, chụp waterfall, flame chart | 1 giờ |
| RTK Query | Thay 1–2 API call bằng RTK Query, so sánh với TanStack Query | 2 giờ |
| Peer Dependencies | Thêm React như peer dependency trong shared package | 1 giờ |

#### A4. Nhúng vào P4 Social Feed

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| Broadcast Channel | Sync "new notification" giữa các tab | 1 giờ |
| Page Visibility API | Pause video khi tab ẩn, resume khi tab hiện | 30 phút |
| Clipboard API | "Copy link to post" button | 30 phút |
| DevTools (Heap snapshot) | Tìm memory leak khi scroll infinite (detached DOM nodes) | 1 giờ |
| `React.memo` cho post item | Memoize post component, đo performance | 30 phút |
| Auth (OAuth/JWT) | Thêm login bằng Google OAuth, lưu session httpOnly cookie | 3 giờ |

#### A5. Nhúng vào P5 Design System

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| CSS Modern (`@layer`, container queries, `:has()`) | Thêm vào token system, dùng container query cho responsive card | 2 giờ |
| Generics (component generic) | Viết `DataTable<T>` generic component | 1 giờ |
| Bundle Analysis | Phân tích package size, tree-shaking test | 1 giờ |
| Accessibility sâu | Audit toàn bộ component bằng axe DevTools, fix violations | 2 giờ |
| Tree-shaking | Verify `sideEffects: false`, test import 1 component không bundle cả lib | 1 giờ |

#### A6. Nhúng vào P6 Legacy Migration

| Kiến thức thiếu | Cách nhúng | Thờii gian |
|-----------------|------------|-----------|
| JS Core (`this`, Prototype, Class) | Viết 1 module jQuery cũ dùng Prototype + `this`, refactor sang Class modern | 2 giờ |
| HOC vs Render Props vs Hooks | Migrate 1 HOC jQuery sang custom Hook | 1 giờ |
| Module Federation | Load React app như remote module trong jQuery shell | 3 giờ |
| Framework Evolution | Viết ADR giải thích tại sao chọn React thay vì Vue/Svelte | 1 giờ |

---

### LOẠI B: MINI-EXERCISE / CODE KATA (15 kiến thức)

> **Nguyên tắc:** 15–30 phút/ngày, không cần project. Tự chấm điểm. Làm trên CodePen, TypeScript Playground, hoặc file `.ts` riêng.

#### B1. JavaScript Core (5 bài)

| # | Bài tập | Thờii gian | Tự chấm điểm |
|---|---------|-----------|-------------|
| B1.1 | Viết 10 đoạn code với `this` khác nhau (method, function, constructor, arrow, explicit binding). Dự đoán kết quả, chạy thử, giải thích sai chỗ nào. | 30 phút | Pass nếu đúng 9/10 |
| B1.2 | Tạo inheritance chain 3 cấp bằng cả Prototype (`Object.create`) và Class (`extends`). So sánh output của `instanceof` và `Object.getPrototypeOf`. | 30 phút | Pass nếu vẽ đúng chain |
| B1.3 | Viết Proxy để validate object: `set` trap reject nếu age < 0, `get` trap log access. | 20 phút | Pass nếu chạy đúng |
| B1.4 | Viết Class với `#private` field, `static` method, getter/setter. Thử access `#private` từ ngoài để chứng minh nó thực sự private. | 20 phút | Pass nếu throw error |
| B1.5 | Debug 1 đoạn code closure leak (event listener không remove). Dùng DevTools Memory tab chụp heap snapshot trước/sau để chứng minh leak. | 30 phút | Pass nếu tìm được detached DOM |

#### B2. JS Engine & Event Loop (3 bài)

| # | Bài tập | Thờii gian | Tự chấm điểm |
|---|---------|-----------|-------------|
| B2.1 | Dùng `console.log` + `setTimeout` + `Promise` + `requestAnimationFrame` tạo 1 puzzle 8 dòng. Dự đoán thứ tự output, chạy thử, giải thích từng bước trong Event Loop. | 20 phút | Pass nếu giải thích đúng 100% |
| B2.2 | Giải thích V8 compile pipeline (Ignition → TurboFan) trong 2 phút (record video tự review). | 15 phút | Pass nếu nói đủ 4 stage |
| B2.3 | Liệt kê 3 loại memory leak phổ biến trong React app. Viết code demo 1 loại, fix bằng `useEffect` cleanup. | 20 phút | Pass nếu fix đúng |

#### B3. TypeScript Deep (3 bài)

| # | Bài tập | Thờii gian | Tự chấm điểm |
|---|---------|-----------|-------------|
| B3.1 | Tự viết `DeepPartial<T>` không nhìn tài liệu. Test với nested object 3 cấp. | 15 phút | Pass nếu compile |
| B3.2 | Tự viết `Paths<T>` — type-safe object path strings (`"user.address.city"`). | 20 phút | Pass nếu autocomplete đúng |
| B3.3 | Viết generic function `pickByValueType<T, V>` — pick keys có value type V. | 15 phút | Pass nếu compile |

#### B4. React Internals (2 bài)

| # | Bài tập | Thờii gian | Tự chấm điểm |
|---|---------|-----------|-------------|
| B4.1 | Vẽ diagram Re-render phase vs Commit phase trên giấy/Excalidraw. Giải thích tại sao effect chạy sau commit. | 20 phút | Pass nếu vẽ đúng thứ tự |
| B4.2 | Tạo 1 component có unnecessary render. Dùng Profiler DevTools chứng minh. Apply `React.memo` + `useCallback` đúng cách. Chụp before/after. | 30 phút | Pass nếu render giảm >50% |

#### B5. Web Thuần & Performance (2 bài)

| # | Bài tập | Thờii gian | Tự chấm điểm |
|---|---------|-----------|-------------|
| B5.1 | Tạo 1 HTML page thuần (không framework) với: inline critical CSS, preload font, `srcset` image, `loading="lazy"`. Đo Lighthouse score. | 1 giờ | Pass nếu LCP < 2.5s |
| B5.2 | Setup HTTP caching headers cho static assets (`Cache-Control`, `ETag`). Test bằng DevTools Network tab. | 30 phút | Pass nếu 304 Not Modified |

---

### LOẠI C: MOCK INTERVIEW / BEHAVIORAL (8 kiến thức)

> **Nguyên tắc:** Không code. Luyện nói, record, review. 30 phút–1 giờ/lần. Bắt đầu từ Tháng 3.

| # | Kỹ năng | Cách luyện | Tần suất |
|---|---------|-----------|----------|
| C1 | **Frontend System Design (RADIO)** | 1 đề/tuần. Dùng Excalidraw vẽ architecture. Nói to suy nghĩ (talk out loud). Record 45 phút. Xem lại, đánh giá: có hỏi requirements không? Có nói trade-off không? | 1 lần/tuần từ Tháng 3 |
| C2 | **War Story: PM Ép Deadline** | Viết script 2 phút theo format Bối cảnh → Quyết định → Trade-off → Bài học. Kể trước gương. Record. Xem lại. | 1 lần/tuần |
| C3 | **War Story: BE API Sai Shape** | Tương tự C2. Tập trung vào cách đưa giải pháp hệ thống thay vì đấu tranh cá nhân. | 1 lần/tuần |
| C4 | **War Story: Main Thread Block** | Tương tự C2. Tập trung vào cách kết hợp nhiều kỹ thuật (Worker + yield + virtual scroll). | 1 lần/tuần |
| C5 | **War Story: Code Review Bất Đồng** | Tương tự C2. Tập trung vào tone mentoring, không judging. | 1 lần/tuần |
| C6 | **War Story: AI Output Sai** | Tương tự C2. Tập trung vào checklist verify và ownership. | 1 lần/tuần |
| C7 | **War Story: Incident 2AM** | Tương tự C2. Tập trung vào calm under pressure, feature flag, không panic fix. | 1 lần/tuần |
| C8 | **Code Review Practice** | Tìm 1 PR open source trên GitHub. Viết 3 comment chi tiết: 1 bug, 1 improvement, 1 khen ngợi. | 1 lần/2 tuần |

**Đề System Design nên luyện (theo thứ tự):**
1. Autocomplete / Search-as-you-type (tuần 1)
2. Image Carousel (tuần 2)
3. News Feed (tuần 3)
4. E-commerce Checkout (tuần 4)
5. Dashboard/Analytics (tuần 5)
6. Chat Application (tuần 6)

---

### LOẠI D: ĐỌC + HIỂU (5 kiến thức)

> **Nguyên tắc:** Không cần code. Đọc tài liệu, viết note ngắn (1 trang A4). Kiểm tra bằng cách giải thích cho ngườii khác (hoặc record video 3 phút).

| # | Kiến thức | Tài liệu | Thờii gian | Kiểm tra |
|---|-----------|----------|-----------|----------|
| D1 | **RSC Serialization Limits** | Next.js Docs (React Server Components), React 19 RFC | 1 giờ | Giải thích: function, Date, Map, Set không serialize được |
| D2 | **React Compiler** | React Dev Blog, React 19 release notes | 45 phút | Giải thích: auto-memoization, tác động đến `useMemo`/`useCallback` |
| D3 | **LoAF API** | web.dev (Long Animation Frames), Chrome DevTools docs | 45 phút | Giải thích: khác gì Long Tasks API, cách dùng `PerformanceObserver` |
| D4 | **Supply Chain Security** | OWASP Cheat Sheet, npm security blog, SLSA framework | 1 giờ | Giải thích: lockfile poisoning, dependency confusion, Provenance |
| D5 | **Feature Flags & Rollback** | LaunchDarkly docs (miễn phí), Martin Fowler blog | 45 phút | Giải thích: kill-switch, gradual rollout, canary |

---

## PHẦN 4: LỘ TRÌNH HỌC BỔ SUNG SONG SONG VỚI 6 PROJECTS

### Nguyên tắc phân bổ thờii gian

```
Mỗi tuần (kể cả tuần làm project):

Thứ 2: 30 phút → Loại B (Mini-Exercise / Code Kata)
Thứ 4: 30 phút → Loại A (Nhúng vào project hiện tại)
Thứ 6: 30 phút → Loại D (Đọc + hiểu)
Chủ nhật: 1 giờ → Loại C (Mock Interview / War Stories / System Design)

Tổng: 2.5 giờ/tuần ngoài thờii gian làm project chính.
```

### Lộ trình theo tháng

```
THÁNG 1 (P1 Landing + Blog):
├── Loại A: Nhúng font preload, IntersectionObserver, MSW vào P1
├── Loại B: B1.1 (this binding), B1.2 (Prototype), B2.1 (Event Loop puzzle)
├── Loại D: D1 (RSC Serialization Limits)
└── Loại C: Chưa bắt đầu (tập trung project)

THÁNG 2 (P2 E-commerce):
├── Loại A: Nhúng optimistic form, auto-save, CSRF, BFF, retry vào P2
├── Loại B: B1.3 (Proxy), B1.4 (Class modern), B3.1 (DeepPartial)
├── Loại D: D2 (React Compiler)
└── Loại C: Bắt đầu System Design tuần 1 (Autocomplete)

THÁNG 3 (P3 Dashboard):
├── Loại A: Nhúng Profiler, useMemo, bundle analysis, RTK Query, DevTools vào P3
├── Loại B: B2.2 (V8 pipeline), B2.3 (Memory leak), B3.2 (Paths)
├── Loại D: D3 (LoAF API)
└── Loại C: System Design tuần 2–3 (Image Carousel, News Feed)

THÁNG 4 (P4 Social Feed):
├── Loại A: Nhúng Broadcast Channel, Page Visibility, Clipboard, Auth, React.memo vào P4
├── Loại B: B3.3 (pickByValueType), B4.1 (Fiber diagram), B4.2 (Profiler optimize)
├── Loại D: D4 (Supply Chain Security)
└── Loại C: System Design tuần 4–5 (Checkout, Dashboard), War Stories tuần 1–2

THÁNG 5 (P5 Design System):
├── Loại A: Nhúng CSS Modern, Generics, bundle analysis, a11y audit, tree-shaking vào P5
├── Loại B: B5.1 (Web thuần page), B5.2 (HTTP caching)
├── Loại D: D5 (Feature Flags)
└── Loại C: System Design tuần 6 (Chat), War Stories tuần 3–4

THÁNG 6 (P6 Legacy + Tổng hợp):
├── Loại A: Nhúng JS Core, HOC→Hooks, Module Federation vào P6
├── Loại B: Ôn tập lại bài chưa pass
├── Loại D: Ôn tập note đã viết
└── Loại C: War Stories tuần 5–6, mock interview tổng hợp, review System Design recordings
```

---

## PHẦN 5: CHECKLIST BỔ SUNG CẦN HOÀN THÀNH NGOÀI 6 PROJECTS

### Loại A: Nhúng vào project (18 task)

- [ ] **P1:** Font subsetting + preload
- [ ] **P1:** IntersectionObserver (lazy load + analytics)
- [ ] **P1:** CSS Modern (`@layer`, container queries)
- [ ] **P1:** MSW mock API cho newsletter
- [ ] **P1:** Cherry-pick hotfix practice
- [ ] **P2:** Optimistic form (checkout)
- [ ] **P2:** Auto-save draft (sessionStorage)
- [ ] **P2:** CSRF token + SameSite cookie
- [ ] **P2:** Server Action authorization check
- [ ] **P2:** BFF Route Handler aggregate API
- [ ] **P2:** Exponential retry (TanStack Query)
- [ ] **P2:** Lockfile conflict resolution practice
- [ ] **P3:** React Profiler + ADR
- [ ] **P3:** `useMemo`/`React.memo` + measurement
- [ ] **P3:** Bundle analysis report
- [ ] **P3:** DevTools waterfall + flame chart
- [ ] **P3:** RTK Query integration
- [ ] **P3:** Peer dependency setup
- [ ] **P4:** Broadcast Channel (cross-tab sync)
- [ ] **P4:** Page Visibility API (pause video)
- [ ] **P4:** Clipboard API (copy link)
- [ ] **P4:** DevTools heap snapshot (memory leak)
- [ ] **P4:** `React.memo` post item
- [ ] **P4:** Google OAuth + httpOnly cookie
- [ ] **P5:** CSS Modern trong token system
- [ ] **P5:** Generic component (`DataTable<T>`)
- [ ] **P5:** Bundle size analysis
- [ ] **P5:** axe DevTools audit + fix
- [ ] **P5:** Tree-shaking verification
- [ ] **P6:** JS Core module (Prototype → Class refactor)
- [ ] **P6:** HOC → Custom Hook migration
- [ ] **P6:** Module Federation setup
- [ ] **P6:** ADR cho migration decision

### Loại B: Mini-Exercise (15 bài)

- [ ] **B1.1:** `this` binding — 10 puzzle, đúng 9/10
- [ ] **B1.2:** Prototype chain — vẽ diagram 3 cấp
- [ ] **B1.3:** Proxy validation trap
- [ ] **B1.4:** Class `#private` + `static` + getter/setter
- [ ] **B1.5:** Memory leak debug — heap snapshot
- [ ] **B2.1:** Event Loop puzzle — giải thích đúng 100%
- [ ] **B2.2:** V8 pipeline — record video 2 phút
- [ ] **B2.3:** React memory leak + fix
- [ ] **B3.1:** `DeepPartial<T>` tự viết
- [ ] **B3.2:** `Paths<T>` tự viết
- [ ] **B3.3:** `pickByValueType<T, V>` tự viết
- [ ] **B4.1:** Fiber diagram — vẽ + giải thích
- [ ] **B4.2:** Profiler optimize — render giảm >50%
- [ ] **B5.1:** Web thuần page — LCP < 2.5s
- [ ] **B5.2:** HTTP caching headers — 304 Not Modified

### Loại C: Mock Interview (8 kỹ năng)

- [ ] **C1:** System Design — 6 đề (Autocomplete, Carousel, News Feed, Checkout, Dashboard, Chat)
- [ ] **C2:** War Story — PM Ép Deadline (record 2 phút)
- [ ] **C3:** War Story — BE API Sai Shape (record 2 phút)
- [ ] **C4:** War Story — Main Thread Block (record 2 phút)
- [ ] **C5:** War Story — Code Review Bất Đồng (record 2 phút)
- [ ] **C6:** War Story — AI Output Sai (record 2 phút)
- [ ] **C7:** War Story — Incident 2AM (record 2 phút)
- [ ] **C8:** Code Review Practice — 3 PR open source

### Loại D: Đọc + Hiểu (5 chủ đề)

- [ ] **D1:** RSC Serialization Limits — note 1 trang
- [ ] **D2:** React Compiler — note 1 trang
- [ ] **D3:** LoAF API — note 1 trang
- [ ] **D4:** Supply Chain Security — note 1 trang
- [ ] **D5:** Feature Flags & Rollback — note 1 trang

---

## PHẦN 6: TỔNG KẾT

### 6.1. Công thức thành công

```
Thành công = 6 Projects (60%) + Loại A Nhúng (15%) + Loại B Exercise (10%) + Loại C Mock Interview (10%) + Loại D Đọc (5%)
```

- **6 Projects** cover ~60% kiến thức. Đây là nền tảng, không thể thay thế.
- **Loại A (Nhúng)** cover thêm ~15% bằng cách thêm task nhỏ vào project hiện có. **Không tạo project mới.**
- **Loại B (Exercise)** cover ~10% kiến thức nền tảng không thể "làm" trong project. **15–30 phút/ngày.**
- **Loại C (Mock Interview)** cover ~10% kỹ năng phỏng vấn — **phân biệt senior rõ nhất.** Bắt đầu từ Tháng 3.
- **Loại D (Đọc)** cover ~5% concept mới. **Đọc + viết note 1 trang.**

### 6.2. Sai lầm cần tránh

| Sai lầm | Tại sao sai | Cách đúng |
|---------|------------|-----------|
| Chỉ làm 6 project rồi nghĩ đã đủ | Thiếu 42% kiến thức, đặc biệt JS Core, System Design, War Stories | Dùng file này để track và cover phần thiếu |
| Tạo thêm project cho kiến thức thiếu | Burn out, không finish, technical debt không giải quyết được | Nhúng vào project hiện có (Loại A) |
| Bỏ qua Mock Interview vì "không cần code" | Đây là vòng phỏng vấn riêng biệt, quyết định senior hay không | Luyện 1 giờ/tuần từ Tháng 3 |
| Đọc tài liệu mà không viết note | Quên 90% sau 1 tuần | Viết note 1 trang A4, giải thích lại cho ngườii khác |
| Học JS Core bằng cách đọc sách 500 trang | Không có phản hồi, không biết mình hiểu đúng hay sai | Làm exercise, tự chấm điểm, debug thật |

### 6.3. Milestone kiểm tra

| Tháng | Milestone | Kiểm tra |
|-------|-----------|----------|
| 1 | P1 hoàn chỉnh + B1.1–B1.2 + B2.1 | Giải thích `this` và Event Loop cho ngườii khác |
| 2 | P2 hoàn chỉnh + B1.3–B1.4 + B3.1 + System Design đề 1 | Vẽ RADIO cho Autocomplete |
| 3 | P3 hoàn chỉnh + B2.2–B2.3 + B3.2 + System Design đề 2–3 | Giải thích V8 pipeline, viết `Paths<T>` |
| 4 | P4 hoàn chỉnh + B3.3 + B4.1–B4.2 + System Design đề 4–5 | Dùng Profiler tìm unnecessary render |
| 5 | P5 hoàn chỉnh + B5.1–B5.2 + System Design đề 6 | Tạo web thuần page LCP < 2.5s |
| 6 | P6 hoàn chỉnh + Ôn tập + 6 War Stories + 3 PR reviews | Mock interview tổng hợp, record xem lại |

---

> **Lưu ý cuối cùng:** File này không thay thế `01_CHAN_1_FRONTEND_MASTER.md`. Nó là bản đồ để bạn biết "kiến thức nào đã cover, kiến thức nào cần bổ sung, và bổ sung bằng cách nào". Mỗi tuần, mở file này ra, check xem tuần đó bạn đã làm được gì trong Loại A/B/C/D, và đánh dấu vào checklist. Nếu 1 mục bị bỏ qua 2 tuần liên tiếp — đó là dấu hiệu cần điều chỉnh lộ trình.
