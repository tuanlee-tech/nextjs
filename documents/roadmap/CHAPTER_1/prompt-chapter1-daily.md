# MEMORY CONTEXT: SOLO FULLSTACK – CHAPTER 1 MASTER FRONTEND
## Phiên bản: Standalone Memory Context


## 1. TỔNG QUAN LỘ TRÌNH

### 1.1. Bối cảnh
Roadmap gồm **3 khối lõi chung** mà mọi Software Engineer cần trước khi chuyên sâu:
1. **Master Frontend** (Chapter 1 — đang làm)
2. Master Backend & Ecosystem (Chapter 2)
3. DevOps Cơ Bản (Chapter 3)

Sau 3 khối, rẽ nhánh:
- **Nhánh A**: Staff/Architect — phát triển sự nghiệp kỹ thuật trong doanh nghiệp.
- **Nhánh B**: Solo Founder — xây dựng và kinh doanh sản phẩm riêng.

### 1.2. Mục tiêu Chapter 1
- **Mục tiêu**: Đạt nền tảng kỹ thuật đủ để pass vòng phỏng vấn Senior FE (30–45 triệu VNĐ, hoặc freelance $30–50/hour).
- **KHÔNG phải** "trở thành Senior" theo đúng nghĩa. Senior thật = kinh nghiệm phán đoán tích lũy qua production.
- **Thời gian**: 3–6 tháng (học song song với đi làm).
- **Milestone**: 4–6 project production-ready, trả lời được Frontend System Design, hiểu bảo mật frontend, biết verify code AI.

### 1.3. Nguyên tắc cốt lõi
- **Học ngang (Project-based)**, không học dọc. Mỗi kiến thức phải gắn vào 1 trong 6 Projects.
- **Senior-ready = judgment dưới ràng buộc mơ hồ**, không phải checklist kiến thức.
- **AI Coding Agent**: Dùng Claude Code / Cursor / Copilot agent mode — nhưng phải VERIFY output, không chỉ dùng.

---

## 1.5. CURRICULUM MAP: 16 FILE .MDX

Bạn phải tuân theo đúng thứ tự này. Mỗi file được chia thành nhiều buổi (1 buổi = 1 ngày học).

| # | File .mdx | Topic | Số buổi | Ghi chú đã sửa |
|---|-----------|-------|---------|----------------|
| 1 | 01-goals-and-info.mdx | Goals & Context | 1 | Tháng 0 – Ngày 0 |
| 2 | 02-js-core-engine.mdx | JS Core (Execution Context, this, Prototype, Proxy, Class) | 4 | Tháng 1, Tuần 1.1 |
| 3 | 03-js-engine-runtime.mdx | JS Engine & Runtime (V8, Event Loop, Memory Management) | 3 | Tháng 1, Tuần 1.1 |
| 4 | 04-typescript-advanced.mdx | TypeScript Advanced (Generics, Utility Types, Zod) | 4 | Tháng 1, Tuần 1.1–1.2 |
| 5 | 05-build-tools.mdx | Build Tool & Bundler (Webpack, Vite, Tree-shaking) | 2 | Tháng 1, Tuần 1.2 |
| 6 | 06-package-managers.mdx | Package Manager (npm/yarn/pnpm, Lockfile, Peer Deps) | 2 | Tháng 1, Tuần 1.2 |
| 7 | 07-design-patterns.mdx | Design Patterns (Singleton, Observer, Compound, XState) | 3 | Tháng 1, Tuần 1.2 |
| 8 | 08-react-nextjs-deep-dive.mdx | React & Next.js Deep Dive (Fiber, Optimization, App Router, Forms, State, Migration) | 12 | Tháng 2–3 |
| 9 | 09-ui-ux-styling.mdx | UI/UX & Styling (Tailwind, Component Library, Design System, a11y, Animation, CSS Modern) | **6** | Đủ 6 mục con, không còn thiếu |
| 10 | 10-testing-performance.mdx | Testing & Performance (Vitest, Playwright, MSW, Lighthouse, CWV, Web thuần) | 5 | Tháng 1–3 (xen kẽ) |
| 11 | 11-ecosystem.mdx | Ecosystem (Micro-frontends, Monorepo, PWA, i18n, Data Viz, Storybook, Web Workers, Web APIs, SEO, AI Coding Agent, BFF, Git Teamwork) | **10** | Đủ 12 mục con PHẦN 6. Có thể gộp nhẹ: Data Viz+Storybook (1 buổi), Web Workers+Web APIs (1 buổi) |
| 12 | 12-system-design-security.mdx | System Design, Security & Ops (RADIO, XSS/CSP, Sentry, Feature Flags, War Stories) | 8 | Tháng 5–6 |
| 13 | 13-projects.mdx | Projects Integration | *Song song* | Xen kẽ vào các buổi khác |
| 14 | 14-weekly-roadmap.mdx | Weekly Roadmap | *Meta* | Dùng để điều phối timeline |
| 15 | 15-job-checklist.mdx | Job Checklist & Interview Prep | 2 | Tháng 6 |
| 16 | 16a-knowledge-gap.mdx + 16b-block-breakdown.mdx | Gap Analysis & Block Breakdown | *Reference* | Luôn mở để đối chiếu |

**QUY TẮC QUAN TRỌNG**:
- Mỗi lần generate **chỉ 1 buổi**.
- Không tóm tắt buổi sau. Không ôn lại buổi trước (trừ khi là mục VERIFY ngắn hoặc 1 dòng liên kết logic ở cuối buổi — xem mục 4.5.C).
- Nếu buổi hiện tại là lý thuyết nền (JS Core, Engine, TS), phải chỉ rõ nó sẽ được **nhúng vào project nào** (thường là P6 Legacy hoặc P1 Landing).
- Không được dạy kiến thức **ngoài phạm vi Chapter 1 (Khối 1 — Master Frontend)**. Nếu chủ đề chạm ranh giới Backend (vd BFF Pattern), chỉ dạy phần liên quan tới Frontend, ghi rõ phần Backend sẽ học ở Chapter 2.
- Buổi nào thuộc nhóm **System Design (file 12) hoặc Security (file 12, mục XSS/CSP/CORS/Auth)** thì **không được cắt gọn hay gộp buổi** dù học viên báo trễ tiến độ — đây là 2 mục ảnh hưởng trực tiếp tới việc pass phỏng vấn senior, ưu tiên cao hơn Ecosystem phụ (Micro-frontends, PWA, Data Viz...).
- Trước khi xuất buổi học, **bắt buộc chạy qua CHECKLIST CHẤT LƯỢNG ở mục 4.5** — nếu có mục fail, phải tự sửa lại nội dung trước khi trả lời, không xuất bản nháp chưa đạt.

---

## 1.6. NGUỒN THAM KHẢO ĐƯỢC PHÉP TRÍCH DẪN

Phần "Tài liệu đọc" trong mỗi buổi **chỉ được trỏ tới** các nguồn sau (không tự bịa thêm nguồn ngoài danh sách này):

| Loại | Nguồn |
|------|-------|
| Sách bắt buộc | "You Don't Know JS" (Kyle Simpson), "JavaScript: The Definitive Guide" (David Flanagan) |
| Sách nên đọc | "Effective TypeScript" (Dan Vanderkam), "Building Large-Scale Web Apps" (Addy Osmani) |
| Docs chính thức | React Docs (Beta), Next.js Docs (App Router), TypeScript Handbook, Tailwind Docs, Radix UI Docs, TanStack Query Docs, Zustand Docs, Redux Toolkit Docs, XState Docs, WCAG 2.1 Guidelines |
| Web performance/security | web.dev (Core Web Vitals, LoAF, CRP), OWASP Top 10 + Cheat Sheet Series |
| System Design | Frontend Interview Handbook (frontendinterviewhandbook.com) |
| Blog tham khảo | Overreacted (Dan Abramov), Kent C. Dodds Blog, Vercel Engineering Blog, Josh W Comeau Blog, Lee Robinson |
| Repo mẫu | shadcn/ui, TanStack Query, Zustand, Next.js Commerce, Cal.com, Supabase |
| Công cụ | Excalidraw, TypeScript Playground, React DevTools Profiler, Lighthouse, axe DevTools, WebPageTest, Bundlephobia |

Nếu chủ đề buổi học cần nguồn không có trong danh sách trên, phải **ghi rõ "nguồn bổ sung, cần verify"** thay vì trình bày như nguồn chính thống.

---

## 2. 6 PROJECTS PORTFOLIO

| # | Project | Tháng | Kiến thức lồng ghép chính |
|---|---------|-------|---------------------------|
| **P1** | SaaS Landing Page + Blog + Newsletter | 1 | Next.js 14 App Router (RSC, CC, Server Actions), Tailwind + shadcn/ui, MDX blog, SEO Technical (JSON-LD, sitemap, OG), Zod + Server Actions, next-i18n (EN/VI), Lighthouse CI |
| **P2** | E-commerce Checkout Flow | 2 | TanStack Query (server state), Zustand (client state), XState (checkout wizard), react-hook-form + Zod, PWA (Service Worker, offline cart, background sync), Stripe test mode, Playwright E2E |
| **P3** | Admin Dashboard (Enterprise Analytics) | 3 | Redux Toolkit + RTK Query + Redux Saga, Recharts, react-window (virtual scroll 10K+ rows), Turborepo monorepo, Storybook + Chromatic, Web Workers (CSV parse), SSE/Saga polling real-time |
| **P4** | Real-time Social Feed (Twitter/X Clone) | 4 | WebSockets (Socket.io), TanStack Query (infinite scroll, optimistic update), Framer Motion, Web Workers (image compression), PWA push notifications, dynamic SEO meta |
| **P5** | Design System + Component Library | 5 | Radix UI primitives, Design Tokens (primitive→semantic→component), Style Dictionary, Tailwind config, WCAG 2.1 AA, Storybook, Chromatic visual regression, semantic versioning publish |
| **P6** | Legacy Migration (jQuery → React) | 6 | Strangler Fig Pattern, Web Components (custom elements), iframe Bridge (postMessage), jQuery interop, Module Federation, Vite, JS Core refactor (Prototype→Class) |

### 2.1. Nguyên tắc thiết kế project
1. Mỗi project = 1 sản phẩm thật, có business context.
2. Kiến thức phân bổ đều, không chồng chéo.
3. Complexity tăng dần.
4. Mỗi tech phải giải thích tại sao chọn, thay thế đã cân nhắc.
5. Production-ready checklist: CI/CD, Tests, Monitoring, Deploy, Docs, Git flow.

---

## 3. MA TRẬN ĐỘ PHỦ KIẾN THỨC × 6 PROJECTS

### 3.1. Ký hiệu độ phủ
| Ký hiệu | Ý nghĩa |
|---------|---------|
| ✅ | Cover tốt — thực hành trực tiếp trong project |
| ⚠️ | Cover nông/gián tiếp — dùng đến nhưng không đi sâu |
| ❌ | Không cover — project không đụng đến |
| 🔧 | Có thể nhúng thêm vào project hiện có |

### 3.2. Tổng hợp 110 kiến thức x 6 projects

#### PHẦN 2: NỀN TẢNG CORE (20 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| Execution Context & Call Stack | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| `this` Binding (4 quy tắc) | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu |
| Prototype Chain | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu |
| Proxy & Reflect | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Class Modern (`#private`, `static`) | ❌ | ❌ | ❌ | ❌ | ⚠️ | 🔧 | 🟡 Thiếu |
| V8 Engine (Ignition→TurboFan) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Event Loop (Microtask vs Macrotask) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Memory Management (GC, leaks) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Type Safety (`unknown`, Guard, `never`) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Dùng nhưng không tự viết deep types |
| Generics (constraints, mapped, conditional) | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | 🟡 Thiếu |
| Utility Types tự viết (`DeepPartial`, `Paths`) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Zod Runtime Validation | ✅ | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| Webpack vs Vite vs Turbopack | ❌ | ❌ | ⚠️ | ❌ | ⚠️ | 🔧 | 🟡 Thiếu |
| Tree-shaking (`sideEffects`, ESM) | ❌ | ❌ | ⚠️ | ❌ | ⚠️ | ❌ | 🟡 Thiếu |
| Code Splitting (route, dynamic import) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Dùng nhưng không hiểu sâu |
| Bundle Analysis | ❌ | ❌ | 🔧 | ❌ | 🔧 | ❌ | 🟡 Thiếu |
| pnpm / Lockfile / Workspace | ❌ | ⚠️ | ✅ | ❌ | ⚠️ | ❌ | 🟡 Chỉ P3 cover tốt |
| Peer Dependencies Hell | ❌ | ❌ | ⚠️ | ❌ | ⚠️ | ❌ | 🟡 Thiếu |
| Security (audit, poisoning) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Singleton (Zustand/Redux store) | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2-P4 |
| Observer / Pub-Sub | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Factory / Strategy | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Compound Components | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | 🟢 Cover tốt P5 |
| HOC vs Render Props vs Hooks | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🔴 Thiếu |
| State Machine (XState) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |

**Tỷ lệ thiếu Phần 2: 50% (10/20)**

#### PHẦN 3: REACT & NEXT.JS (32 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| React Class Lifecycle | ❌ | ❌ | ❌ | ❌ | ❌ | 🔧 | 🟡 Thiếu |
| Pages→App Router Timeline | ⚠️ | ⚠️ | ❌ | ⚠️ | ❌ | 🔧 | 🟡 Lý thuyết |
| CSR→SSR→SSG→ISR→RSC | ⚠️ | ⚠️ | ❌ | ⚠️ | ❌ | ❌ | 🟡 Không so sánh chủ động |
| Node vs Edge Runtime | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Fiber Architecture | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Reconciliation & Diffing | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Strict Mode & Double Mount | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Dùng nhưng không debug |
| Profiler DevTools | ❌ | ❌ | 🔧 | 🔧 | ❌ | ❌ | 🟡 Thiếu |
| React Compiler (auto-memo) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| `useMemo` / `useCallback` | ❌ | ❌ | 🔧 | 🔧 | ❌ | ❌ | 🟡 Thiếu |
| `React.memo` | ❌ | ❌ | 🔧 | 🔧 | ❌ | ❌ | 🟡 Thiếu |
| `useRef` (DOM, prev value) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Dùng nhưng không hiểu sâu |
| RSC vs CC phân biệt | ✅ | ✅ | ❌ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| RSC Serialization Limits | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| React 19 `use()` API | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Caching Strategy (4 loại) | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Dùng nhưng không chủ động |
| Server Actions | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| Error Boundary | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Thiếu |
| Graceful Degradation | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Thiếu |
| Retry Pattern (exponential) | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu |
| Hydration Mismatch | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| TanStack Query | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| Zustand | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| Redux Toolkit | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| Redux Saga (polling, cancel) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| RTK Query | ❌ | ❌ | ⚠️ | ❌ | ❌ | ❌ | 🟡 Thiếu |
| XState | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| react-hook-form + Zod | ⚠️ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| Field Arrays (dynamic form) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P2 |
| Optimistic Form | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu |
| Auto-save Draft | ❌ | 🔧 | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu |
| Strangler Fig Pattern | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| Web Components | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| iframe Bridge | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |
| jQuery Interop | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟢 Cover tốt P6 |

**Tỷ lệ thiếu Phần 3: 31% (10/32)**

#### PHẦN 4: UI/UX & STYLING (6 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| Tailwind Deep Dive | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | ❌ | 🟢 Cover tốt P1, P2, P5 |
| Component Library (Radix/shadcn) | ✅ shadcn | ⚠️ shadcn | ❌ | ❌ | ✅ Radix | ❌ | 🟢 Cover tốt P1, P5 |
| Design System (Tokens) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | 🟢 Cover tốt P5 |
| Accessibility (WCAG) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ | ❌ | 🟡 Nông P1-P4, tốt P5 |
| Animation (Framer Motion) | ❌ | ❌ | ❌ | ✅ | ⚠️ | ❌ | 🟢 Cover tốt P4 |
| CSS Modern (`@layer`, `:has()`, container queries) | ❌ | ❌ | ❌ | ❌ | 🔧 | ❌ | 🔴 Thiếu — nhúng P5 |

**Tỷ lệ thiếu Phần 4: 17% (1/6)**

#### PHẦN 5: TESTING & PERFORMANCE (14 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| Unit/Integration Test (Vitest) | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ | ❌ | 🟡 Nhẹ P1, P2, P4 |
| E2E Test (Playwright) | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | 🟢 Cover tốt 5/6 |
| Mock API (MSW) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Lighthouse CI | ✅ | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| Core Web Vitals (LCP/INP/CLS) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Không optimize chủ động |
| LoAF API | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Performance Budget | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Critical Rendering Path (CRP) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| CSS Critical / Inline | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Font Subsetting + Preload | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P1 |
| Image `srcset`/AVIF | ⚠️ Next Image | ⚠️ Next Image | ❌ | ⚠️ Next Image | ❌ | ❌ | 🟡 Dùng Next.js, không thuần |
| Video Optimization | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| HTTP Caching (headers, CDN) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| DevTools (Waterfall, Flame, Heap) | ❌ | ❌ | 🔧 | 🔧 | ❌ | ❌ | 🔴 Thiếu — nhúng P3, P4 |

**Tỷ lệ thiếu Phần 5: 43% (6/14)**

#### PHẦN 6: ECOSYSTEM (22 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| Micro-frontends (Module Federation) | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | 🟡 Thiếu — nhúng P6 |
| Monorepo (Turborepo) | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | 🟢 Cover tốt P3, P5 |
| PWA (Service Worker, Push) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟢 Cover tốt P2, P4 |
| i18n | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟢 Cover tốt P1, P2 |
| Data Visualization (Recharts) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 🟢 Cover tốt P3 |
| Storybook | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | 🟢 Cover tốt P3, P5 |
| Web Workers | ❌ | ❌ | ✅ CSV | ✅ Image | ❌ | ❌ | 🟢 Cover tốt P3, P4 |
| IndexedDB / Dexie.js | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| IntersectionObserver | ⚠️ Lazy | ⚠️ Lazy | ❌ | ✅ Infinite | ❌ | ❌ | 🟡 Thiếu — nhúng P1, P2 |
| ResizeObserver | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Broadcast Channel | ❌ | ❌ | ❌ | ⚠️ | ❌ | ❌ | 🟡 Thiếu — nhúng P4 |
| Page Visibility API | ❌ | ❌ | ❌ | 🔧 | ❌ | ❌ | 🔴 Thiếu — nhúng P4 |
| Clipboard API | ❌ | ❌ | ❌ | 🔧 | ❌ | ❌ | 🔴 Thiếu — nhúng P4 |
| SEO Technical | ✅ | ❌ | ❌ | ⚠️ | ❌ | ❌ | 🟢 Cover tốt P1 |
| AI Coding Agent | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| BFF Pattern | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Git Rebase vs Merge | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Nhẹ ở tất cả |
| Conflict Resolution | ⚠️ | ⚠️ Lockfile | ⚠️ | ⚠️ | ⚠️ | ⚠️ | 🟡 Nhẹ |
| Interactive Rebase / Squash | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Cherry-pick Hotfix | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| `reflog` / `bisect` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |

**Tỷ lệ thiếu Phần 6: 36% (8/22)**

#### PHẦN 7: SYSTEM DESIGN, BẢO MẬT & VẬN HÀNH (16 kiến thức)
| Kiến thức | P1 | P2 | P3 | P4 | P5 | P6 | Đánh giá |
|-----------|:--:|:--:|:--:|:--:|:--:|:--:|----------|
| Frontend System Design (RADIO) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| XSS / `dangerouslySetInnerHTML` | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Nông |
| CSRF / SameSite Cookie | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| CSP (Content Security Policy) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| CORS | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Auth (OAuth/JWT, httpOnly) | ❌ | ⚠️ Stripe | ⚠️ Role | ⚠️ | ❌ | ❌ | 🟡 Thiếu — nhúng P2-P4 |
| Server Action Authorization | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 🟡 Thiếu — nhúng P2 |
| Supply Chain Security | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Error Tracking (Sentry) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | 🟡 Nhẹ |
| RUM (Real User Monitoring) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Feature Flags | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Rollback Strategy | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |
| Judgment & War Stories | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 Thiếu hoàn toàn |

**Tỷ lệ thiếu Phần 7: 69% (11/16)**

### 3.3. Tổng kết độ phủ toàn Chapter 1
| Phần | Tổng | ✅ | ⚠️ | ❌ | Tỷ lệ thiếu |
|------|------|----|----|----|-------------|
| 2. Nền tảng Core | 20 | 2 | 8 | 10 | **50%** |
| 3. React & Next.js | 32 | 10 | 12 | 10 | **31%** |
| 4. UI/UX & Styling | 6 | 3 | 2 | 1 | **17%** |
| 5. Testing & Performance | 14 | 4 | 4 | 6 | **43%** |
| 6. Ecosystem | 22 | 7 | 7 | 8 | **36%** |
| 7. System Design & Security | 16 | 0 | 5 | 11 | **69%** |
| **TỔNG** | **110** | **26** | **38** | **46** | **42%** |

### REPO MẪU & OPEN SOURCE
| Repo | Tại sao đọc |
|------|------------|
| shadcn/ui | Tổ chức component, Radix, Tailwind, TypeScript |
| TanStack Query | Caching mechanism |
| Zustand | Source code ~100 lines — hiểu pattern |
| Next.js Commerce | E-commerce best practices |
| Cal.com | Next.js App Router, Prisma, tRPC |
| Supabase | Architecture |

### CÔNG CỤ HỌC TẬP
| Công cụ | Dùng để |
|---------|---------|
| Excalidraw | Vẽ diagram (Event Loop, Fiber, architecture) |
| TypeScript Playground | Test type, experiment generics |
| React DevTools Profiler | Profile app thực tế |
| Lighthouse | Audit performance, a11y |
| axe DevTools | Test accessibility |
| WebPageTest | Deep performance analysis |
| Bundlephobia | Check bundle size dependencies |
| Git Visualization (git-school.github.io) | Học Git interactive |

---

## 4. TEMPLATE BUỔI HỌC (BẮT BUỘC)

Mỗi buổi học phải theo đúng cấu trúc Markdown sau.

```markdown
# BUỔI [Số tổng thể trong Chapter 1]: [Tên buổi ngắn gọn]
**File:** `[tên file .mdx đang học]` | **Buổi trong file:** `[X/Y]` | **Thời gian:** 90–130 phút
**Project liên quan:** [P1–P6 / N/A] | **Loại bổ sung:** [A/B/C/D / N/A]

---

## 0. VẤN ĐỀ THỰC TẾ (2–4 câu)
[Tình huống production CỤ THỂ, có ít nhất 1 con số định lượng (latency, tỉ lệ lỗi, số user ảnh hưởng, thời gian debug mất) — vd không phải "this hoạt động thế nào" mà "callback trong `setTimeout` mất đúng context, khiến 12% request bị gán sai user_id trong 3 tuần trước khi phát hiện". CẤM mở bài bằng câu hỏi lý thuyết kiểu textbook.]

**Vì sao cái này khó, kể cả với người có kinh nghiệm:** [1 câu — lý do bug/lựa chọn sai này không hiển nhiên ngay cả với người đã biết định nghĩa]

---

## 1. MỤC TIÊU (1 câu duy nhất)
[Dùng động từ hành vi quan sát được: "giải thích được", "debug được", "phản biện được lựa chọn X trước Y trong tình huống Z" — KHÔNG dùng "hiểu được/nắm được"]

---

## 2. INPUT (15–20 phút)
### Tài liệu đọc
- [Tên tài liệu + chương/section cụ thể — CHỈ lấy từ danh sách mục 1.6, không bịa nguồn ngoài danh sách]

### 3 điểm chính cần nắm (câu hỏi kiểu senior đọc tài liệu, không phải recall)
1. [Không phải "X là gì" mà "Tại sao tài liệu thiết kế X theo cách này thay vì cách hiển nhiên hơn Y — đánh đổi gì?"]
2. [Câu hỏi 2]
3. [Câu hỏi 3]

---

## 3. PROCESS (45–60 phút)

### 3.0. CƠ CHẾ VẬN HÀNH BÊN TRONG (bắt buộc, trước khi code) **(MỚI — bắt buộc)**
[Giải thích internals/nguyên lý TRƯỚC khi thực hành, kèm 1 mental model/phép ẩn dụ cụ thể để nhớ lâu. Đây là phần junior thường bỏ qua vì "chạy được là xong" — senior luôn cần hiểu trước khi viết.]

### 3.1. [Bước thực hành 1]
[Mô tả + code/terminal. Comment trong code phải giải thích LÝ DO (why), không chỉ mô tả cái gì (what).]

#### 🥊 GÓC NHÌN JUNIOR vs SENIOR
| | Junior thường làm | Senior thực sự làm | Vì sao khác nhau |
|-|--------------------|----------------------|--------------------|
| Cách tiếp cận | [...] | [...] | [Senior thấy trước hệ quả gì mà junior chưa thấy?] |
| Điểm mù thường gặp | [Lỗi/giả định sai phổ biến] | [Câu hỏi senior tự hỏi để tránh lỗi đó] | [...] |

#### ⚠️ Anti-pattern
[1 anti-pattern phổ biến + hậu quả CỤ THỂ đo lường được (không phải "gây bug" chung chung mà "khiến bundle tăng 300KB" / "leak 40MB sau 10 phút")]

#### 📊 Decision Table (nếu có lựa chọn)
| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng | Chi phí ẩn / rủi ro dài hạn |
|----------|-------------|---------------------|-------------------------------|
| [A] | ... | ... | [Cái gì sẽ đau về sau, không thấy ngay lúc chọn] |
| [B] | ... | ... | ... |

### 3.2. [Bước thực hành 2]
...

### 3.X. 🎯 SENIOR JUDGMENT CALL **(bắt buộc nếu chủ đề có ≥2 lựa chọn hợp lý hoặc rủi ro cao)**
**Bối cảnh ràng buộc mơ hồ:** [vd: "Deadline 3 ngày, team 2 người mid-level, hệ thống cũ không thể refactor toàn bộ, PM yêu cầu ship trước, không có thời gian viết test đầy đủ"]

**Câu hỏi:** Bạn chọn phương án nào? Không có đáp án đúng tuyệt đối — chỉ có lý do đủ thuyết phục.

**Tư duy senior (học viên tự trả lời trước khi xem gợi ý):**
1. Câu hỏi đầu tiên senior sẽ hỏi lại trước khi quyết định: [...]
2. Yếu tố thực sự quyết định (không phải yếu tố "nghe có vẻ quan trọng"): [...]
3. Phương án khả dĩ + lý do chọn: [...]
4. Cái giá phải trả khi chọn phương án này (trade-off chấp nhận, không né tránh): [...]

---

## 4. OUTPUT (20–30 phút)
### Artifact phải hoàn thành
- [ ] [Artifact 1 cụ thể — gắn vào Project]
- [ ] [Artifact 2]

### 🔍 Mock Code Review (senior lens)
[10–20 dòng code mẫu — cố ý chứa 1–2 vấn đề tinh vi về judgment, KHÔNG phải lỗi cú pháp]
**Review comment mẫu (giọng senior reviewer thật, không phải liệt kê lỗi):**
- 🔴 [Vấn đề nghiêm trọng — vì sao nó nguy hiểm hơn vẻ ngoài]
- 🟡 [Vấn đề không phải bug nhưng ảnh hưởng khả năng scale/maintain]
- 🟢 [Điểm làm đúng — chỉ ra CHÍNH XÁC tại sao pattern này tốt, không khen chung chung]

---

## 5. VERIFY (15–20 phút)
### Feynman Technique
- Tự giải thích trong 2 phút: "[Câu hỏi ngắn]"

### Self-check — câu hỏi phỏng vấn Senior/Staff có follow-up đào sâu **(nâng cấp)**
1. [Câu hỏi chính] → Follow-up: "Nếu [điều kiện thay đổi — scale 10x / team đổi / deadline gấp], câu trả lời có đổi không? Tại sao?"
2. [Câu hỏi chính] → Follow-up: [...]
3. [Câu hỏi chính] → Follow-up: [...]

### 🧭 Mental Model / Heuristic rút gọn
> [1 câu "quy tắc ngón tay cái" senior thực sự dùng để quyết định nhanh trong tình huống tương tự tương lai — không phải định nghĩa lại kiến thức, mà là thứ có thể áp dụng cho case KHÁC chưa gặp]

### Integration Check
- Kiến thức này nhúng vào [Project nào, task cụ thể] theo Loại A?

---

## 6. HOMEWORK / MINI-EXERCISE (nếu là Loại B)
- [Bài tập 15–30 phút, tự chấm điểm]

---

## 7. WAR STORY — postmortem thực chiến **(cấu trúc lại)**
> **[Tên tình huống — nên chứa số liệu, vd "App crash sau 40 phút dùng vì memory leak trong closure"]**
>
> **Bối cảnh (số liệu cụ thể):** [Quy mô hệ thống, bao nhiêu user/traffic bị ảnh hưởng, thời điểm]
> **Triệu chứng ban đầu:** [Dấu hiệu đầu tiên — thường MƠ HỒ, đây là chỗ senior giỏi hơn junior: nhận diện sớm khi chưa rõ ràng]
> **Phương án đã cân nhắc:** [Ít nhất 2 phương án, lý do loại từng phương án — không chỉ kể phương án thắng]
> **Quyết định cuối & lý do:** [...]
> **Trade-off phải chấp nhận:** [Cái gì bị hy sinh để đổi lấy giải pháp]
> **Kết quả đo lường được:** [Before/after cụ thể]
> **Bài học tổng quát hoá:** [Heuristic áp dụng cho case KHÁC, không chỉ riêng case này]

---

## 8. AI VERIFY CHECKLIST — gắn cụ thể vào chủ đề, không dùng placeholder chung chung **(nâng cấp)**
Nếu học viên dùng Claude Code / Cursor / Copilot cho buổi này, phải check:
- [ ] [Lỗi cụ thể AI THƯỜNG mắc với ĐÚNG chủ đề này — vd "AI hay quên cleanup subscription trong useEffect khi generate code có WebSocket"]
- [ ] [Edge case cụ thể theo domain buổi học — không phải "kiểm tra null/undefined" chung chung]
- [ ] [Câu hỏi phản biện AI — vd "Tại sao bạn chọn pattern X thay vì Y? Nếu scale 10x thì code này còn đúng không?"]

---

## 9. LIÊN KẾT & TIẾP THEO
- **Nối từ buổi trước:** [1 dòng duy nhất — KHÔNG giảng lại nội dung cũ]
- **Ngày mai học gì:** [1 dòng — lấy từ Next_Topic]

---

Quy tắc mỗi file cần có phần SEO của Astro, ví dụ:
---
title: 08 React Nextjs Deep Dive
description: Đang cập nhật nội dung cho phần này.
sidebar:
  order: 17
---
```

---

## 4.5. CHECKLIST CHẤT LƯỢNG BẮT BUỘC (SELF-CHECK TRƯỚC KHI XUẤT BUỔI HỌC)

> AI phải tự chạy qua toàn bộ checklist này **trước khi trả lời**. Nếu bất kỳ mục nào chưa đạt, phải tự sửa nội dung buổi học rồi mới xuất ra — không xuất bản nháp chưa đạt.

### A. Input context — đã xác định đủ chưa?
- [ ] Đã xác định đúng vị trí buổi trong Curriculum Map (mục 1.5): file .mdx, buổi X/Y
- [ ] Đã trỏ đúng phần kiến thức nguồn tương ứng (PHẦN 2–7 của Chapter 1 gốc), không tự chế nội dung ngoài phạm vi
- [ ] Đã xác định Project liên quan (P1–P6) và Loại bổ sung (A/B/C/D) theo Ma trận độ phủ (mục 3)
- [ ] Đã biết buổi liền trước đã học gì (để không lặp) — dựa vào Session State

### B. Độ sâu nội dung — đạt mức senior-ready chưa?
- [ ] Có mục **0. VẤN ĐỀ THỰC TẾ** mở đầu bằng tình huống/câu hỏi, không mở bằng định nghĩa suông
- [ ] Có giải thích cơ chế bên trong (internals/nguyên lý), không chỉ dạy cú pháp dùng
- [ ] Có ít nhất 1 đoạn code minh hoạ chạy được, ưu tiên edge case gây nhầm lẫn
- [ ] Có Decision Table so sánh trade-off nếu chủ đề có nhiều lựa chọn công nghệ
- [ ] Có Anti-pattern thực tế, không phải anti-pattern chung chung
- [ ] Nếu buổi thuộc PHẦN 7 (System Design/Security/Ops) → có liên hệ War Story cụ thể, không bỏ qua mục 7

### C. Cấu trúc & liên kết — đúng khung 9 mục chưa?
- [ ] Đủ 9 mục: Vấn đề thực tế → Mục tiêu → Input → Process → Output → Verify → Homework (nếu Loại B) → War Story → Liên kết & Tiếp theo
- [ ] Mục 9 có đúng 1 dòng nối buổi trước (không giảng lại) và 1 dòng "ngày mai học gì"
- [ ] Câu hỏi tự kiểm tra (Self-check) trong mục VERIFY trả lời được mà không cần mở lại bài
- [ ] Artifact ở mục OUTPUT gắn cụ thể vào Project đang học, không phải bài tập lơ lửng

### D. Ràng buộc lộ trình — có phá vỡ tính nhất quán không?
- [ ] Không dạy kiến thức thuộc Khối 2 (Backend)/Khối 3 (DevOps) trừ khi là điểm chạm được phép (BFF Pattern)
- [ ] Không tự nhận học viên "đã là senior" sau buổi học — giữ đúng tinh thần "senior-ready", không phải "senior"
- [ ] Nếu buổi thuộc System Design/Security → không bị cắt gọn dù học viên báo trễ tiến độ
- [ ] Giữ đúng thuật ngữ gốc song ngữ Việt–Anh (không dịch "Event Loop", "Fiber"...)

### E. Output format — đúng chuẩn xuất bản chưa?
- [ ] Có SEO frontmatter Astro ở đầu file (title, description, sidebar.order)
- [ ] Heading đúng cấp bậc `# BUỔI...` → `## 1...`, code block gắn đúng ngôn ngữ (```ts, ```js...)
- [ ] Checklist con dùng `- [ ]` nhất quán với văn phong gốc
- [ ] Độ dài phù hợp 90–120 phút học (không dài như 1 chương sách, không sơ sài như slide)
- [ ] Nguồn trích dẫn chỉ lấy từ danh sách mục 1.6, không bịa nguồn

### F. Self-check cuối cùng (trả lời Có/Không trước khi xuất)
- [ ] Nội dung có bám sát đúng mục tương ứng trong Chapter 1 gốc, không lan man ngoài phạm vi?
- [ ] Học viên đọc xong có tự trả lời được câu hỏi VERIFY mà không mở lại bài không?
- [ ] Buổi học có tạo ra artefact cụ thể đóng góp vào Project/Deliverable không?
- [ ] Buổi học có trùng lặp nội dung với buổi liền trước không? (Nếu có → sửa lại)

---


## 13. MILESTONE KIỂM TRA

| Tháng | Milestone | Kiểm tra |
|-------|-----------|----------|
| 1 | P1 hoàn chỉnh + B1.1–B1.2 + B2.1 | Giải thích `this` và Event Loop cho người khác |
| 2 | P2 hoàn chỉnh + B1.3–B1.4 + B3.1 + System Design đề 1 | Vẽ RADIO cho Autocomplete |
| 3 | P3 hoàn chỉnh + B2.2–B2.3 + B3.2 + System Design đề 2–3 | Giải thích V8 pipeline, viết `Paths<T>` |
| 4 | P4 hoàn chỉnh + B3.3 + B4.1–B4.2 + System Design đề 4–5 | Dùng Profiler tìm unnecessary render |
| 5 | P5 hoàn chỉnh + B5.1–B5.2 + System Design đề 6 | Tạo web thuần page LCP < 2.5s |
| 6 | P6 hoàn chỉnh + Ôn tập + 6 War Stories + 3 PR reviews | Mock interview tổng hợp, record xem lại |

---

## 14. CÔNG THỨC THÀNH CÔNG

```
Thành công = 6 Projects (60%) + Loại A Nhúng (15%) + Loại B Exercise (10%) + Loại C Mock Interview (10%) + Loại D Đọc (5%)
```

- **6 Projects** cover ~60% kiến thức. Đây là nền tảng, không thể thay thế.
- **Loại A (Nhúng)** cover thêm ~15% bằng cách thêm task nhỏ vào project hiện có. Không tạo project mới.
- **Loại B (Exercise)** cover ~10% kiến thức nền tảng không thể "làm" trong project. 15–30 phút/ngày.
- **Loại C (Mock Interview)** cover ~10% kỹ năng phỏng vấn — phân biệt senior rõ nhất. Bắt đầu từ Tháng 3.
- **Loại D (Đọc)** cover ~5% concept mới. Đọc + viết note 1 trang.

---

## 15. SAI LẦM CẦN TRÁNH

| Sai lầm | Tại sao sai | Cách đúng |
|---------|------------|-----------|
| Chỉ làm 6 project rồi nghĩ đã đủ | Thiếu 42% kiến thức, đặc biệt JS Core, System Design, War Stories | Dùng file này để track và cover phần thiếu |
| Tạo thêm project cho kiến thức thiếu | Burn out, không finish, technical debt không giải quyết được | Nhúng vào project hiện có (Loại A) |
| Bỏ qua Mock Interview vì "không cần code" | Đây là vòng phỏng vấn riêng biệt, quyết định senior hay không | Luyện 1 giờ/tuần từ Tháng 3 |
| Đọc tài liệu mà không viết note | Quên 90% sau 1 tuần | Viết note 1 trang A4, giải thích lại cho người khác |
| Học JS Core bằng cách đọc sách 500 trang | Không có phản hồi, không biết mình hiểu đúng hay sai | Làm exercise, tự chấm điểm, debug thật |

---

## 16. QUY TẮC TỔNG HỢP CHO AI

Khi user paste file memory context này và nói một trong các lệnh sau, AI phải hiểu và xử lý đúng:
OUTPUT CHỈ CẦN TUÂN THỦ **Curriculum Map (Section 1.5)** và  **Template Buổi Học (Section 4)** với đầy đủ 9 mục.
Các MA TRẬN KIẾN THỨC, ĐỘ CHE PHỦ chỉ là context để AI hiểu bối cảnh. Người đọc không cần biết những thứ này.
OUTPUT cần clean như documents chuyên nghiệp không phải nội bộ.

### 16.1. "Soạn file [tên file .mdx], buổi [X]/[Y]"
→ Kiểm tra file trong **Curriculum Map (Section 1.5)**. Kiểm tra X hợp lệ (1 ≤ X ≤ Y). Sinh buổi học theo **Template Buổi Học (Section 4)** với đầy đủ 9 mục: Vấn đề thực tế, Mục tiêu, Input (chỉ trích dẫn nguồn ở mục 1.6), Process (có Decision Table + Anti-pattern), Output, Verify, Homework (nếu Loại B), War Story, Liên kết & Tiếp theo — kèm AI Verify Checklist và Session State. Mỗi lần generate **chỉ 1 buổi**. Không tóm tắt buổi sau. Không ôn lại buổi trước (trừ 1 dòng liên kết ở mục 9). Nếu buổi hiện tại là lý thuyết nền (JS Core, Engine, TS), phải chỉ rõ nó sẽ được **nhúng vào project nào** (thường là P6 Legacy hoặc P1 Landing). Mỗi file .mdx cần có phần SEO của Astro ở đầu file. **Trước khi trả lời, bắt buộc tự chạy qua CHECKLIST CHẤT LƯỢNG (Section 4.5) A→F; nếu có mục fail, tự sửa nội dung rồi mới xuất, không xuất bản nháp chưa đạt.**

### 16.2. "Tiếp tục buổi tiếp theo" / "Next lesson"
→ Đọc SESSION STATE ở cuối output trước đó. Tăng Day_In_Current_File lên 1. Nếu vượt quá tổng số buổi của file hiện tại → chuyển sang file tiếp theo trong **Curriculum Map (Section 1.5)**.

### 16.3. "Nhảy sang file [tên file .mdx]"
→ Cập nhật Completed_Files nếu file cũ đã xong. Chuyển Current_File sang file mới. Reset Day_In_Current_File = 1. Sinh buổi 1 của file mới theo **Template Buổi Học (Section 4)**.

### 16.4. "Soạn project [P1–P6]"
→ Project không phải file .mdx riêng lẻ mà được xen kẽ vào các buổi học. Hỏi user muốn focus vào kiến thức nào của project đó, hoặc đề xuất task Loại A cần nhúng vào project đó.

### 16.5. "Ôn tập" / "Review"
→ Dựa vào Session State, tổng hợp các kiến thức đã học và đề xuất ôn tập theo Feynman Technique hoặc Mini-Exercise chưa pass.

### 16.6. "Viết thêm vào prompt" / "Update memory context"
→ User muốn bổ sung hoặc sửa đổi nội dung trong file memory context này. Đọc nội dung user cung cấp, merge vào đúng section tương ứng, giữ nguyên cấu trúc và numbering. Output file mới đã merge.

---

## 17. SESSION STATE 

Nếu user chưa có state, đây là mẫu khởi tạo:

```
---SESSION STATE---
Current_File: 01-goals-and-info.mdx
Day_In_Current_File: 0/1
Total_Days_Completed: 0
Completed_Files: []
Active_Projects_Status:
  P1: not started
  P2: not started
  P3: not started
  P4: not started
  P5: not started
  P6: not started
Next_Topic: Buổi 1: Goals & Context
Notes: Bắt đầu Chapter 1 — Master Frontend
---END STATE---
```

---

**END OF MEMORY CONTEXT**