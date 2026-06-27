# UNIVERSAL ENGINEER MASTERY PROGRAM — Next.js Edition
## MASTER CURRICULUM BIBLE v2.0 (Merged)
### Target: Next.js 16.2.9 | Compiled: June 2026
### Scope: Fresher → Staff/Architect | 14 Modules + Capstone

---

## PHẦN 1: FULL EVOLUTION TIMELINE ANALYSIS

### 1.1. Toàn bộ phiên bản Next.js

| Version | Year | Đặc trưng kiến trúc chính | Problem giải quyết | Classification |
|---|---|---|---|---|
| **1.x** | 2016 | File-system routing, SSR-only, custom server | React apps thiếu SSR, SEO thảm hại | [HISTORY_ONLY] |
| **2.x** | 2017 | CSS-in-JS built-in, prefetching `<Link>`, plugin API | Hydration không nhất quán, bundle lớn | [HISTORY_ONLY] |
| **3.x** | 2017 | Dynamic import, `next/dynamic` lazy loading | Code splitting thủ công phức tạp | [HISTORY_ONLY] |
| **4.x** | 2018 | React 16, Babel 7, `getInitialProps` là API data-fetch duy nhất | React 16 Fiber adoption | [HISTORY_ONLY] |
| **5.x** | 2018 | Multi-zones, `next/dynamic` cải tiến | Micro-frontend primitive đầu tiên | [HISTORY_ONLY] |
| **6.x** | 2018 | Static export (`next export`), AMP support | Không có SSG — chỉ SSR hoặc client | [HISTORY_ONLY] |
| **7.x** | 2018 | Styled JSX, error overlay, webpack 4 | DX kém, debug khó | [HISTORY_ONLY] |
| **8.x** | 2019 | Serverless mode (`target: 'serverless'`), API Routes | Monolith deployment, không scale | [HISTORY_ONLY] |
| **9.x** | 2019 | File-system API Routes, dynamic routes `[param]`, built-in TypeScript | API nằm ngoài framework, TS phải tự cấu hình | [HISTORY_ONLY] `target:'serverless'` → [DEPRECATED] |
| **9.3** | 2020 | `getStaticProps`, `getStaticPaths`, `getServerSideProps` | `getInitialProps` chạy cả server lẫn client, không kiểm soát được | **[MAJOR SHIFT]** [LEGACY_CORE] |
| **9.5** | 2020 | Stable ISR (`revalidate`), `fallback: true/blocking` | Không có cách nào build static + live data | [LEGACY_CORE] |
| **10.x** | 2020 | `next/image` v1, Internationalization routing, Analytics | Image optimization thủ công, i18n rối | [LEGACY_CORE] |
| **11.x** | 2021 | `next/script`, Conformance, webpack 5 | Script loading không có chiến lược priority | [REFERENCE_ONLY] |
| **12.x** | 2021 | Middleware (Edge Runtime), React 18 beta, SWC compiler, `next/future/image` | webpack chậm, middleware không có | **[MAJOR SHIFT]** [REFERENCE_ONLY] |
| **12.2** | 2022 | Edge API Routes, Edge Middleware stable, On-demand ISR | Middleware vẫn còn hạn chế | [REFERENCE_ONLY] |
| **13.0** | 2022 | App Router beta, React Server Components, `app/` directory, Layouts, Streaming | Pages Router thiếu layout nesting, waterfall data fetching | **[MAJOR SHIFT]** [TRANSITIONAL] |
| **13.2** | 2023 | Metadata API, Route Handlers (thay API Routes trong app/), Next.js Cache | App Router chưa có SEO API chuẩn | [TRANSITIONAL] |
| **13.4** | 2023 | App Router **stable**, Server Actions beta | Cộng đồng chờ App Router stable | [TRANSITIONAL] |
| **14.0** | 2023 | Server Actions stable, Partial Prerendering (PPR) experimental, Turbopack dev beta | Form mutation phức tạp, không có hybrid static/dynamic | **[MAJOR SHIFT]** [TRANSITIONAL] |
| **14.1** | 2024 | `next/image` improvements, `useFormStatus`, Parallel & Intercepting Routes cải tiến | Image layout shift, optimistic UI phức tạp | [TRANSITIONAL] |
| **14.2** | 2024 | Turbopack dev 99% tests pass, Memory improvements, caching improvements | Turbopack vẫn còn bug nhiều | [TRANSITIONAL] |
| **15.0** | 2024 | Async Request APIs (`cookies()`, `headers()`, `params` async), `fetch` cache mặc định đổi sang `no-store`, React 19 RC | Caching implicit gây confusion, sync APIs block | **[MAJOR SHIFT]** [LEGACY_CORE] |
| **15.1** | 2024 | `after()` API, TypeScript config support, `forbidden()`/`unauthorized()` | Cleanup logic sau response khó làm | [LEGACY_CORE] |
| **15.3** | 2025 | Turbopack dev stable, `next/form` component | Turbopack vẫn experimental trong dev | [LEGACY_CORE] |
| **15.4** | 2025 | Turbopack builds beta, Node.js Middleware stable | Production Turbopack còn bị hỏng | [LEGACY_CORE] |
| **15.5** | 2025 | Turbopack builds beta nâng cao, deprecation warnings cho Next.js 16 | Chuẩn bị migration path | [LEGACY_CORE] |
| **16.0** | 2025 | Turbopack default (dev + build), Cache Components (`'use cache'`), `proxy.ts` thay `middleware.ts`, async params bắt buộc, Node.js 20.9+ required, React 19.2, React Compiler stable | Webpack legacy, caching implicit confusing, middleware ambiguous | **[MAJOR SHIFT]** [MODERN] |
| **16.1** | 2025 | Turbopack FS Cache stable, Bundle Analyzer, `next dev --inspect` | Dev restart chậm với project lớn | [MODERN] |
| **16.2** | 2026 | Build Adapters API stable, ~400% faster `next dev`, AI agent improvements | Deploy ngoài Vercel gặp khó, dev speed | [MODERN] |
| **16.2.9** | 2026 | Security patch (13 CVEs), latest stable | CVE-2026-23870 RCE RSC | **[MODERN] ← TARGET** |

### 1.2. [STILL_ALIVE] Features in Production

| Feature | Status | Notes |
|---|---|---|
| **Pages Router** | [STILL_ALIVE] | Still exists in hybrid mode, many enterprises still use v12-v14 |
| **ISR (Incremental Static Regeneration)** | [STILL_ALIVE] | Evolved into Cache Components (`'use cache'`) in v16 |
| **Middleware → proxy.ts** | [STILL_ALIVE] | Renamed but same network boundary concept |
| **next/image** | [STILL_ALIVE] | Evolved through versions, still core |
| **API Routes** | [STILL_ALIVE] | Still valid, though Route Handlers preferred in App Router |

### 1.3. [DEPRECATED] Features

| Feature | Deprecated In | Replacement | Reason |
|---|---|---|---|
| `getServerSideProps` | v13 (App Router) | Async Server Components | Tightly coupled data fetching to page, not streaming-friendly |
| `getStaticProps` | v13 (App Router) | `fetch()` with cache + `generateStaticParams` | Static generation became automatic with cache semantics |
| `getInitialProps` | v12 | `getServerSideProps` / `getStaticProps` | Unpredictable behavior, hydration issues |
| `pages/_app.js` | v13 (App Router) | `app/layout.tsx` | Root layout pattern more flexible |
| `pages/_document.js` | v13 (App Router) | `app/layout.tsx` | Document customization via metadata API |
| `next/head` | v13 (App Router) | Metadata API | Declarative, streaming-compatible |
| `middleware.ts` | v16 | `proxy.ts` | Confusion with Express middleware, clarify network boundary |
| `next lint` | v15.5 | ESLint directly | Simplification, less abstraction |
| `target: 'serverless'` | v12 | Edge Runtime / Node.js runtime | Deprecated entirely |

### 1.4. Phân loại Version

| Classification | Versions | Giải thích |
|---|---|---|
| **[HISTORY_ONLY]** | 1.x – 9.2 | Chỉ biết từng tồn tại. Dùng trong M0 timeline và Terminology Evolution. |
| **[REFERENCE_ONLY]** | 9.3 – 12.2 (Pages Router era, pre-App Router) | Gặp trong codebase cũ nhưng ít. Nhận diện pattern là đủ. |
| **[LEGACY_CORE]** | 12.x – 14.x (Pages Router) | Vẫn sống nhiều trong production enterprise. Cần dạy chuyên sâu để maintain và migrate. ~25-30% JD yêu cầu. |
| **[TRANSITIONAL]** | 13.0 – 14.2 (App Router beta → stable) | Pages Router + App Router song song. Codebase hybrid. ~35-40% JD. |
| **[LEGACY_BRIDGE]** | 15.x | Đỉnh cao App Router era. Mọi dự án upgrade từ 14/15 lên 16 đều phải đi qua breaking changes này trước. ~40% JD ở vùng App Router. |
| **[MODERN]** | 16.x | Target chính của khóa học. ~20-25% JD (đang tăng). |

### 1.5. Lý do thay thế [HISTORY_ONLY] và [REFERENCE_ONLY]

**Era 1.x–9.2 (History Only):**
- `getInitialProps` (9.x) bị thay thế bởi `getStaticProps`/`getServerSideProps` ở 9.3 vì nó chạy cả client lẫn server — không thể tree-shake, bundle dày.
- `target: 'serverless'` bị deprecated hoàn toàn ở v12. Thay thế bởi Edge Runtime.
- **Terminology vẫn bị dùng sai**: "SSR in Next.js" — nhiều engineer vẫn nói "SSR" để chỉ `getServerSideProps`, nhưng trong App Router era, mọi Server Component đều là "SSR" theo nghĩa khác. Hai khái niệm này không tương đương.

**Era 11.x–12.2 (Reference Only):**
- SWC compiler (12.x) thay Babel — nhanh hơn 17x. Babel config cũ vẫn hoạt động nhưng được deprecated dần.
- Edge Middleware (12.x) bị **refactor thành** `proxy.ts` ở 16.x. Pattern `NextRequest`/`NextResponse` trong middleware.ts vẫn tồn tại ở 15.x nhưng deprecated trong 16.x.
- **Terminology bị dùng sai**: "middleware" — trong 15.x là `middleware.ts`, trong 16.x là `proxy.ts`. Đây là nguồn confusion lớn nhất năm 2026.

---

## PHẦN 2: JOB MARKET & JD ANALYSIS

### 2.1. Phân tích JD Next.js (Thị trường mid-2026)

| Category | Ước tính % | Notes |
|---|---|---|
| JD yêu cầu Pages Router / Next.js 12-14 ([LEGACY_CORE]) | ~25-30% | Maintain legacy, migration projects |
| JD yêu cầu App Router Next.js 13-15 ([TRANSITIONAL]/[LEGACY_BRIDGE]) | ~35-40% | Most common — "App Router experience" |
| JD yêu cầu Next.js 16+ ([MODERN]) | ~20-25% | New projects, startups |
| JD yêu cầu "có kinh nghiệm migrate" | ~40-50% | **HIGH DEMAND, LOW SUPPLY** |

> **Ghi chú merge**: Dữ liệu blend từ GLM-5 (real-time search) + Claude (analysis). GLM-5 cho thấy ~60% JD yêu cầu migrate experience (cao hơn Claude's ~20%) — đã điều chỉnh lên ~40-50% vì GLM-5 có data thị trường mới nhất. Next.js 15 là version đang được dùng nhiều nhất trong production (released Oct 2024, trưởng thành nhất). Next.js 16 mới stable Oct 2025, adoption ~20-25% là hợp lý.

### 2.2. Công ty Archetype

| Archetype | Version đang dùng | Đang migrate từ đâu | What They Need |
|---|---|---|---|
| **Startup mới (2024-2026)** | Next.js 16.x ngay từ đầu | Không cần migrate | Turbopack, Server Actions, modern patterns |
| **Scale-up (grow nhanh)** | Next.js 15.x, bắt đầu plan lên 16 | Từ 14.x App Router | Migration expertise, dual-router architecture |
| **Enterprise lớn (bank, telecom)** | Next.js 12-14, Pages Router là core | Chưa migrate — sợ risk | Legacy maintain, security, incremental adoption |
| **Agency / Outsourcing** | Tùy client — từ 12 đến 16 | Phải maintain tất cả | Broad version knowledge, quick context switching |

### 2.3. Khoảng trống kiến thức thị trường đang thiếu

| Skill bị thiếu | Lý do đắt giá | JD Demand | Engineer Supply |
|---|---|---|---|
| **Pages → App Router migration** | Không thể migrate nếu không hiểu cả 2 bên | Very High | Very Low | **#1 differentiator** |
| **Caching strategy trong App Router** | implicit caching ở 13-14, explicit `'use cache'` ở 16 — engineer hiểu nhầm cả hai | Medium-High | Very Low |
| **Server Actions + mutation pattern** | Nhiều engineer vẫn dùng API Routes cho mutation vì không biết SA | High | Medium |
| **Streaming + Suspense boundary design** | Biết cú pháp nhưng không biết khi nào đặt boundary đúng chỗ | Medium-High | Low |
| **proxy.ts vs middleware.ts** | Migration 15→16, auth bypass security CVEs đòi hỏi hiểu sâu | High | Low |
| **Turbopack config migration** | Custom webpack plugins không chạy với Turbopack — blocker upgrade | High | Low |
| **React Compiler + memoization** | Engineer tắt vì không hiểu cách nó ảnh hưởng existing code | Medium | Low |
| **ISR → Cache Components migration** | ISR pattern 9.5-14 hoàn toàn khác với `'use cache'` ở 16 | Medium | Very Low |
| **Hybrid architecture (both routers)** | Real-world enterprise pattern | High | Low |

### 2.4. Quyết định LEGACY_CORE

**[MERGE DECISION] Chọn Next.js 12-14 (Pages Router) làm LEGACY_CORE chính** — lý do:

- **Market size**: ~25-30% JD vẫn yêu cầu Pages Router maintain (GLM-5 data). ~40-50% JD yêu cầu "migration experience" — cần hiểu cả 2 bên.
- **Enterprise codebase**: Next 12 là đỉnh cao của Pages Router paradigm. Hiểu Next 12 giúp đọc được 70% codebase enterprise hiện tại (GLM-5).
- **Không chọn v11 trở xuống**: Quá cũ, không còn production footprint đáng kể.
- **Xử lý v15.x**: V15.x là [LEGACY_BRIDGE] — không phải LEGACY_CORE chính nhưng có sub-section "Transition Bridge" trong M12 (Migration) để cover breaking changes (async params, fetch no-store default, async APIs).

**Xử lý khi 2 versions cùng "sống"**: Dạy **Modern (App Router) từ đầu** (M1-M9), sau đó dạy **Pages Router như Legacy Bridge** trong module riêng (M11). Không trộn lẫn. Học viên học App Router từ đầu, sau đó học Pages Router trong context "đây là thứ bạn sẽ gặp trong codebase cũ".

---

## PHẦN 3: LEVEL ASSESSMENT & PATH DESIGN

### 3.1. Đánh giá độ sâu

Next.js là **"thick platform"** — không phải thin tool. Lý do:
- Bao gồm bundler (Turbopack), runtime (Node.js + Edge), caching layer, routing, image optimization, font optimization, i18n, authentication patterns, deployment adapters.
- Có **3 era kiến thức** phải cover: Pages Router era (12-), App Router era (13-15), Modern era (16+).
- Có **paradigm shift** tại mỗi major shift — engineer từ React thuần cần re-learn rendering model.

**Số era cần cover**: 3 era × độ sâu từ Fresher đến Staff = **14 modules** là đủ.

### 3.2. Level Progression

| Level | Modules | Focus |
|---|---|---|
| **Fresher** | M0, M1 | Orientation, timeline, setup, App Router foundations, first real page |
| **Junior** | M2, M3 | Data fetching patterns, styling, assets |
| **Mid** | M4, M5, M6, M7 | RSC deep dive, caching architecture, Server Actions, auth, advanced routing |
| **Senior** | M8, M9, M10 | Performance engineering, testing, proxy/Edge/security |
| **Staff/Architect** | M11, M12, M13, M14 | Pages Router legacy, migration engineering, deployment, system design, capstone |

### 3.3. Skip/Rút Gọn cho Level Cao

| Học viên ở level | Có thể skip/rút gọn | BẮT BUỘC vẫn học vì "Senior đều hiểu sai" |
|---|---|---|
| Junior có React kinh nghiệm | M0.1 (setup), M1.1 (routing basics) | M0.2 (Timeline) — cần hiểu evolution |
| Mid có App Router cơ bản | M1.1-M1.3 (App Router basics) | M4.1 (RSC boundary) — **#1 hiểu sai** |
| Senior có kinh nghiệm production | M1-M3 (rút gọn thành 2 bài) | M5.2 (Cache invalidation), M12.2 (Migration strategy) |

---

## PHẦN 4: MODULE LIST & DEPENDENCY GRAPH

### 4.1. Full Module List (M0 → M14)

| # | Module Name | Level | Lessons | Prerequisite | Unlocks | Parallel-safe |
|---|---|---|---|---|---|---|
| **M0** | Orientation & Evolution Map | Fresher | 5 | React basics (ngoài luồng) | M1, M11 | — |
| **M1** | App Router Foundations | Fresher | 5 | M0 | M2, M3, M4, M7 | — |
| **M2** | Data Fetching Patterns | Junior | 5 | M1 | M3, M5, M6 | M3 |
| **M3** | Styling & Assets | Junior | 4 | M1 | M8 | M2 |
| **M4** | React Server Components Deep Dive | Mid | 4 | M1, M2 | M5, M6 | — |
| **M5** | Caching Architecture | Mid | 5 | M2, M4 | M6, M8, M9 | — |
| **M6** | Server Actions & Mutations | Mid | 4 | M2, M4, M5 | M7, M10 | — |
| **M7** | Authentication & Authorization | Mid | 4 | M1, M6 | M8, M10, M12 | — |
| **M8** | Advanced Routing & Patterns | Senior | 5 | M1, M3, M5, M6 | M9, M13 | — |
| **M9** | Performance Engineering | Senior | 5 | M3, M5, M8 | M10, M13 | — |
| **M10** | Testing Strategy | Senior | 4 | M6, M7 | M13 | M9 |
| **M11** | Pages Router & Legacy Codebase | Senior | 5 | M0, M2 | M12 | — |
| **M12** | Migration Engineering | Staff | 4 | M7, M9, M10, M11 | M13 | — |
| **M13** | Deployment & Infrastructure | Staff | 4 | M8, M9, M10, M12 | M14 | — |
| **M14** | System Design & Capstone | Staff | 3 | M0–M13 | — | — |

**Total: 15 modules (M0-M14), 67 lessons**

### 4.2. Dependency Graph

```
M0 → M1 → M2 ──┬──→ M3 ───────────────────────────→ M8 ──┐
                │                                         │
                ├──→ M4 ──┬──→ M5 ──┬──→ M6 ──→ M7 ──┤  │
                │         │         │         │         │  │
                │         │         │         └──→ M10 ─┤  │
                │         │         │                   │  │
                │         │         └──→ M8 (partial) ──┘  │
                │         │                                │
                │         └──→ M9 ←───────────────────────┘
                │                                          │
                └──→ M11 ──→ M12 ──→ M13 ──→ M14 ◄────────┘
```

### 4.3. Module Ordering Rationale

**[MERGE NOTE]** Thứ tự này blend từ:
- **Claude** (dependency graph chi tiết, App Router trước): App Router first (M1-M9), Legacy sau (M11)
- **GLM-5** (market-driven, Modern first): Xác nhận App Router và Modern patterns phải học trước
- **Kimi** (RSC thành module riêng M4): Tách RSC thành module riêng vì "#1 hiểu sai"

**Quyết định**: Modern-first (App Router từ M1), Legacy-last (Pages Router ở M11). RSC tách riêng ở M4 (theo Kimi + GLM-5). Migration ở M12 (sau khi đã học cả Modern lẫn Legacy).

---

## PHẦN 5: CHI TIẾT TỪNG BÀI HỌC — CURRICULUM BIBLE

---

### M0.1: Next.js trong bức tranh lớn — Why Exists?

**Level:** Fresher
**Module:** M0
**Prerequisite:** React Components, Props, State, useEffect (ngoài luồng)
**Unlocks:** M0.2
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Giải thích được tại sao React thuần không đủ để build production web app (thiếu gì?)
2. Phân biệt SSR / SSG / CSR / ISR ở mức conceptual — không cần code
3. Đặt Next.js vào đúng vị trí trong tech ecosystem (không phải replace React, mà là orchestrator)

---
**Topics:**
- **The React Gap**: React chỉ là UI library — không có routing, không có SSR, không có image optimization, không có font loading strategy.
- **SSR vs SSG vs CSR vs ISR**: Concept-only, dùng diagram. Không code.
- **Next.js là gì**: Meta-framework — orchestrates React + runtime + bundler + routing + caching.
- **Vercel relationship**: Hiểu Next.js ≠ Vercel — Next.js là open source, Vercel là managed platform.
- **Evolution in 30 seconds**: 2016 SSR-only → 2020 ISR → 2022 App Router beta → 2025 Next.js 16 (Turbopack default, Cache Components).

---
**Depth Level:** 2

---
**Anti-Patterns CẦN cover (2):**
- **"Next.js là backend framework"**: Nhiều Fresher nhầm Next.js = Express. → Staff sẽ nói: Next.js là React orchestrator với server capabilities, không phải backend replacement.
- **"Dùng Next.js là tự động fast"**: Performance không auto-magic — phải biết trade-off từng rendering strategy. → Staff sẽ nói: next.js gives you the tools, you make the choices.

---
**Terminology CẦN dạy:**
- `SSR` (Server-Side Rendering): Era Pages Router dùng chỉ `getServerSideProps`. Era App Router dùng để chỉ Server Components. Nghĩa **đã đổi** — gây confusion.
- `hydration`: Process React "takes over" DOM từ HTML server đã render. Still alive — nghĩa không đổi.
- `meta-framework`: Framework xây trên top của framework khác. Next.js builds on React.

---
**Overlap Lock:**
- Routing mechanics: Thuộc về M1.1 — bài này chỉ nói "có file-based routing" không giải thích.
- `getStaticProps` / `getServerSideProps`: Thuộc về M11.x — KHÔNG ĐỀ CẬP.
- Turbopack / Bundler: Thuộc về M0.3 — chỉ nhắc "Next.js 16 dùng Turbopack by default".

---
**Production Scenarios:**
- Scenario: Team React thuần muốn add SEO → Next.js migration decision.
- Scenario: Tech lead hỏi "tại sao chọn Next.js thay vì Vite + React Router?" → học viên phải trả lởi được.

---
**Interview Questions:**
- "Next.js khác React ở điểm gì? Tại sao cần meta-framework?" (Junior hỏi)
- "Khi nào bạn KHÔNG chọn Next.js?" (Mid hỏi)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Fresher dễ overwhelm với quá nhiều acronyms (SSR/SSG/ISR/CSR) ngay bài đầu. Cần diagram rõ ràng và bài tập matching: "Loại app nào phù hợp với rendering strategy nào?"

---

### M0.2: Next.js Version Timeline & Era Classification

**Level:** Fresher
**Module:** M0
**Prerequisite:** M0.1
**Unlocks:** M0.3
**Parallel-safe:** M0.3, M0.4, M0.5

---
**Learning Objectives:**
1. Kể lại đúng thứ tự 5 major shifts trong Next.js history
2. Giải thích tại sao mỗi shift xảy ra (problem → solution)
3. Nhận diện feature nào thuộc version nào khi đọc codebase cũ
4. Phân biệt [HISTORY_ONLY], [REFERENCE_ONLY], [LEGACY_CORE], [TRANSITIONAL], [LEGACY_BRIDGE], [MODERN]

---
**Topics:**
- **3 Era snapshot**: Pages Router era (9.3–12.x), Transition era (13.0–15.x), Modern era (16.x+)
- **5 Major Shifts**: 9.3 (getStaticProps), 13.0 (App Router + RSC), 15.0 (async APIs + fetch no-store), 16.0 (Turbopack default + Cache Components)
- **Key paradigm shifts**: 9.3 (getStaticProps), 13.0 (App Router + RSC), 16.0 (Turbopack default + Cache Components)
- **Deprecated features**: `target: 'serverless'`, `getInitialProps` (kế thừa), AMP support (removed 16.x)
- **Version fingerprinting**: Nhìn codebase → nhận ra "đây là Next.js 13 hay 15?" bằng file structure

---
**Depth Level:** 2

---
**Anti-Patterns CẦN cover (2):**
- **"Cứ dùng latest là đúng"**: Enterprise codebase đang chạy 13.x có lý do riêng (dependencies, team size). → Staff đánh giá migration cost trước khi upgrade.
- **"Pages Router là xấu, App Router là tốt"**: Pages Router vẫn perfectly valid cho nhiều use case. → Staff chọn tool dựa trên team, codebase, và requirements.
- **"Version mới = tốt hơn"**: Không phải lúc nào cũng đúng → Staff đánh giá theo use case và team capacity

---
**Terminology CẦN dạy:**
- `Pages Router`: Routing system dựa trên `pages/` directory. Vẫn supported trong Next.js 16 nhưng không nhận features mới.
- `App Router`: Routing system dựa trên `app/` directory. Stable từ 13.4. Default từ 13.x.
- `RSC` (React Server Components): Component chạy exclusively trên server. Introduced ở React 18, enabled bởi Next.js 13 App Router.
- `getServerSideProps`: v9-v12, [DEPRECATED] in App Router, meaning đổi: từ "data fetching pattern" thành "legacy pattern"
- `getStaticProps`: v9-v12, [DEPRECATED] in App Router, meaning đổi: từ "build-time data" thành "replaced by cache"
- `ISR`: v9.5, [STILL_ALIVE] nhưng evolved, meaning: từ "revalidation API" thành "cache invalidation concept"

---
**Overlap Lock:**
- RSC internals: Thuộc về M4.1 — bài này chỉ nói "RSC là component chạy trên server" không giải thích mechanism.
- Migration steps cụ thể: Thuộc về M12 — KHÔNG ĐỀ CẬP.
- Cách dùng getServerSideProps/getStaticProps: Thuộc về M11 — bài này chỉ nhắc tên.

---
**Production Scenarios:**
- Scenario: "Đọc codebase thấy `getServerSideProps`" → Root cause: Legacy codebase, cần identify version
- Scenario: "JD yêu cầu 'experience with v13+'" → Root cause: Cần App Router, không phải Pages

---
**Interview Questions:**
- "Next.js đã có những paradigm shift nào? Tại sao?" (Mid hỏi)
- "App Router ra đờii để giải quyết vấn đề gì của Pages Router?" (Junior hỏi)
- "Nếu bạn join team đang dùng Next.js 14, bạn sẽ làm gì trước tiên?" (Mid hỏi)
- "Khi nào nên dùng Pages Router thay vì App Router?" (Senior hỏi)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Timeline quá nhiều dates dễ thành "lịch sử buồn ngủ". Cần framing: "Đây là bản đồ để bạn không bị lạc trong production codebase" — mỗi era có 1 code fingerprint ví dụ cụ thể.
- Học viên dễ stuck ở: Quá nhiều version, timeline rối → Cần exercise: "Match feature to version" flashcards
- Momentum: Dùng infographic timeline tương tác, không text wall

---

### M0.3: Toolchain & Project Anatomy

**Level:** Fresher
**Module:** M0
**Prerequisite:** M0.2
**Unlocks:** M1.1
**Parallel-safe:** M0.2, M0.4, M0.5

---
**Learning Objectives:**
1. Scaffold project với `create-next-app` và giải thích được từng file được tạo ra
2. Giải thích role của Turbopack vs webpack — không cần config, chỉ cần biết "tại sao Turbopack"
3. Đọc `next.config.ts` và hiểu các field cơ bản

---
**Topics:**
- **`create-next-app` scaffold**: Cấu trúc thư mục `app/`, `public/`, `next.config.ts`, `tsconfig.json`.
- **Turbopack là gì**: Rust-based bundler, thay webpack làm default từ Next.js 16. Cold start nhanh hơn. Không cần config cho 80% use case.
- **`next.config.ts` basics**: `reactStrictMode`, `images.remotePatterns`, `turbopack` (top-level, không phải `experimental.turbopack` như 15.x).
- **Scripts**: `dev`, `build`, `start` — sự khác biệt.
- **Node.js version requirement**: Next.js 16 yêu cầu Node.js ≥ 20.9.0.
- **`next/font`**: Font optimization auto-hosting — không cần CDN.
- **pnpm preference**: npm hoạt động kém với workspaces → Staff dùng pnpm với hoisting control

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (4):**
- **Config `experimental.turbopack` từ Next.js 15 vào Next.js 16**: Breaking — turbopack config đã move lên top level. → Staff luôn check upgrade guide trước khi copy config cũ.
- **Bỏ TypeScript vì "setup phức tạp"**: Next.js 16 có built-in TypeScript zero-config. → Staff dùng TypeScript từ ngày 1.
- **Commit `.next/` folder**: `.next/` là build output, không commit. → Staff setup `.gitignore` đúng từ đầu.
- **"Install globally"**: `npm install -g next` → Staff dùng `npx` hoặc local binaries qua `package.json`

---
**Terminology CẦN dạy:**
- `Turbopack`: Bundler mới (Rust). Default từ Next.js 16. Không phải Turborepo (monorepo tool khác của Vercel — khác hoàn toàn).
- `next.config.ts`: TypeScript config file (Next.js 16+). Trước đây là `next.config.js`. Không phải `tsconfig.json`.
- `HMR` (Hot Module Replacement): Reload chỉ module thay đổi, không reload cả page. Turbopack fast refresh nhanh hơn webpack HMR.
- `create-next-app`: Tool, không đổi nghĩa
- `eslint-config-next`: v10+, meaning: ESLint rules for Next.js

---
**Overlap Lock:**
- Webpack migration: Thuộc về M12 — bài này chỉ nói "webpack vẫn dùng được với `--webpack` flag" không dạy migrate.
- `turbopack.resolveAlias`: Thuộc về M9.x — KHÔNG ĐỀ CẬP.
- `pages/` directory: Thuộc về M11 — bài này KHÔNG ĐƯỢC đề cập
- `middleware.ts/proxy.ts`: Thuộc về M7 — KHÔNG ĐƯỢC đề cập

---
**Production Scenarios:**
- Scenario: "Build thất bại vì Node version" → Root cause: `engines` field trong package.json hoặc CI environment mismatch
- Scenario: "Dev chậm bất thường" → Root cause: Webpack fallback (check terminal output for Turbopack status)

---
**Interview Questions:**
- "Tại sao pnpm được khuyến khích hơn npm trong Next.js project?" (Junior)
- "Sự khác biệt giữa `next dev` và `next build && next start` là gì?" (Fresher)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Học viên dễ bị cuốn vào "đọc hiểu toàn bộ file scaffold" và mất focus. Cần guide: "Chỉ cần hiểu 4 file này hôm nay, còn lại học khi dùng đến."
- Học viên dễ stuck ở: TypeScript compile errors khi mới setup → Cần exercise: "Fix 3 lỗi TS cơ bản trong Next.js project"
- Momentum: Cho học viên deploy lên Vercel trong 15 phút để có quick win

---

### M0.4: File Conventions & Routing Mental Model

**Level:** Fresher
**Module:** M0
**Prerequisite:** M0.1
**Unlocks:** M1.1
**Parallel-safe:** M0.2, M0.3, M0.5

---
**Learning Objectives:**
1. Giải thích App Router file conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
2. So sánh với Pages Router conventions: `_app.tsx`, `_document.tsx`, `_error.tsx`
3. Vẽ routing tree từ folder structure
4. Giải thích tại sao `page.tsx` không phải `index.tsx`

---
**Topics:**
- App Router special files: `page`, `layout`, `loading`, `error`, `not-found`, `template`, `default` — giới hạn 6 file phổ biến nhất
- File conventions vs configuration: Next.js dùng convention-over-configuration
- Nested layouts: Layout lồng nhau theo route segment
- Parallel routes: `@folder` convention — giới hạn nhận diện, không đào sâu
- Route Groups: `(groupName)/` — organize routes mà không ảnh hưởng URL.
- Private folders: `_components/` — exclude khỏi routing.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **"Đặt tên file tùy ý trong app/"**: Next.js chỉ nhận special files → Staff tuân thủ convention, không hack
- **"Layout quá nhiều logic"**: Layout nên lightweight → Staff để data fetching ở page hoặc component con
- **"Quên not-found.tsx"**: 404 handling không đúng → Staff luôn có not-found ở root và segment levels

---
**Terminology CẦN dạy:**
- `page.tsx`: v13+, meaning: UI unique to route segment
- `layout.tsx`: v13+, meaning: Shared UI across routes in segment
- `loading.tsx`: v13+, meaning: Suspense boundary cho segment
- `error.tsx`: v13+, meaning: Error boundary cho segment
- `template.tsx`: v13+, meaning: Re-mount on navigation (khác layout)
- `Segment`: Một phần của URL path, tương ứng với một folder trong `app/`. VD: `/dashboard/settings` = 2 segments.

---
**Overlap Lock:**
- Data fetching trong page: Thuộc về M2 — bài này chỉ nhắc qua
- Error handling chi tiết: Thuộc về M1.3 — KHÔNG ĐƯỢC đề cập
- Parallel routes implementation: Thuộc về M8.1 — bài này chỉ nhận diện

---
**Production Scenarios:**
- Scenario: "Route không render đúng" → Root cause: Sai file convention, đặt `index.tsx` thay vì `page.tsx`
- Scenario: "Layout không share giữa routes" → Root cause: Layout đặt sai segment level

---
**Interview Questions:**
- "Sự khác biệt giữa layout.tsx và template.tsx?" (Junior)
- "Tại sao App Router dùng convention thay vì configuration?" (Mid)

---
**Legacy Bridge:**
- Legacy: `pages/index.tsx` → Modern: `app/page.tsx`
- Legacy: `pages/_app.tsx` → Modern: `app/layout.tsx`
- Migration strategy: M12.1

---
**Risk Flag:**
- Học viên dễ stuck ở: Nhiều special files, nhớ nhầm → Cần exercise: "Từ routing tree, viết folder structure"

---

### M0.5: Next.js Ecosystem & Tooling

**Level:** Fresher
**Module:** M0
**Prerequisite:** M0.1
**Unlocks:** M6.1, M9.1
**Parallel-safe:** M0.2, M0.3, M0.4

---
**Learning Objectives:**
1. Liệt kê 5 tools thường dùng với Next.js và vai trò của mỗi tool
2. Cấu hình ESLint, Prettier, TypeScript cho Next.js project
3. Giải thích Turbopack vs Webpack trong context tooling
4. Chọn đúng runtime (Node.js vs Edge) cho use case đơn giản

---
**Topics:**
- TypeScript configuration: `tsconfig.json`, `next.config.ts`, path aliases — giới hạn config cơ bản
- ESLint + Prettier: `eslint-config-next`, không dùng `next lint` (deprecated v15.5)
- Tailwind CSS: Integration với Next.js, PostCSS config
- Runtime selection: Node.js vs Edge, khi nào chọn cái nào

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **"Dùng next lint"**: Deprecated v15.5 → Staff dùng ESLint trực tiếp với `eslint-config-next`
- **"Config quá phức tạp trong next.config.ts"**: Nên đơn giản → Staff tách config ra các file riêng
- **"Edge runtime cho mọi thứ"**: Không phải lúc nào cũng tốt → Staff chọn Edge cho lightweight, Node cho heavy computation

---
**Terminology CẦN dạy:**
- `next.config.ts`: v12+ config file, v16 khuyến khích .ts thay vì .js
- `eslint-config-next`: v10+, meaning: ESLint rules for Next.js
- `Edge Runtime`: v12+, meaning: V8 isolate, lightweight, regional

---
**Overlap Lock:**
- Turbopack internals: Thuộc về M9 — bài này chỉ nhắc tooling
- Performance tuning: Thuộc về M9 — KHÔNG ĐƯỢC đề cập
- Security config: Thuộc về M10 — KHÔNG ĐƯỢC đề cập

---
**Production Scenarios:**
- Scenario: "ESLint conflict với Prettier" → Root cause: Config không đúng, cần `eslint-config-prettier`
- Scenario: "Edge runtime lỗi với Node.js API" → Root cause: Dùng fs/path trong Edge, không supported

---
**Interview Questions:**
- "Khi nào nên dùng Edge runtime thay vì Node.js?" (Junior)
- "next lint deprecated, thay thế bằng gì?" (Mid)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Học viên dễ stuck ở: Config files quá nhiều → Cần exercise: "Setup hoàn chỉnh project từ zero"

---

### M1.1: App Router & File-System Routing

**Level:** Fresher
**Module:** M1
**Prerequisite:** M0.3, M0.4
**Unlocks:** M1.2, M1.3, M1.4, M1.5
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Tạo routes với file-based routing (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`)
2. Phân biệt `page.tsx` vs `layout.tsx` — re-render behavior khác nhau ra sao
3. Implement dynamic segments `[slug]`, catch-all `[...slug]`, optional catch-all `[[...slug]]`
4. Giải thích tại sao App Router không cần `_app.tsx`

---
**Topics:**
- **Reserved filenames**: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `template.tsx`, `default.tsx` — mỗi file có role khác nhau.
- **Nested layouts**: `app/layout.tsx` → `app/dashboard/layout.tsx` — layout không re-render khi navigate giữa children.
- **Dynamic routes**: `[param]`, `[...slug]`, `[[...slug]]`. `params` là async object trong Next.js 16.
- **Route Groups**: `(groupName)/` — organize routes mà không ảnh hưởng URL.
- **Private folders**: `_components/` — exclude khỏi routing.
- **Parallel Routes** và **Intercepting Routes**: Chỉ giới thiệu khái niệm, không đi sâu (thuộc M8).
- **Root layout requirements**: `html` và `body` tags bắt buộc trong root layout.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (5):**
- **Đặt component vào `page.tsx` trực tiếp thay vì tách file**: `page.tsx` nên là thin — import component từ thư mục riêng. → Staff tổ chức: `app/dashboard/page.tsx` import từ `components/dashboard/`.
- **Quên `'use client'` rồi dùng `useState` trong Server Component**: Lỗi build thường gặp nhất. → Staff luôn check component tree khi gặp lỗi hydration.
- **Dùng `template.tsx` khi chỉ cần `layout.tsx`**: `template.tsx` re-render mỗi navigation — layout thì không. → Staff chỉ dùng template khi cần re-mount effects.
- **`params` sync access trong Next.js 16**: `const { slug } = params` → sẽ throw error. Phải `const { slug } = await params`. → Staff chạy codemod trước upgrade.
- **"Thêm 'use client' ở layout"**: Layout nên Server Component → Staff để client logic ở component con
- **"Dùng pages/ và app/ cho cùng route"**: Conflicts → Staff plan migration, không duplicate

---
**Terminology CẦN dạy:**
- `Segment`: Một phần của URL path, tương ứng với một folder trong `app/`. VD: `/dashboard/settings` = 2 segments.
- `layout.tsx`: Persistent UI wrapper. Không re-render khi navigate giữa children.
- `template.tsx`: Tương tự layout nhưng re-mount mỗi navigation. Era: App Router từ 13.x.
- `params` (async): Next.js 16 bắt buộc `await params`. Trước đây (15.x trở về) có thể access sync.
- `app/`: v13+, meaning: App Router directory
- `page.tsx`: v13+, meaning: route-specific UI

---
**Overlap Lock:**
- Route Handlers (`route.ts` chi tiết): Thuộc về M2.3 — bài này chỉ nhắc `route.ts` tồn tại.
- Parallel Routes / Intercepting Routes chi tiết: Thuộc về M8.1 — KHÔNG ĐỀ CẬP.
- `error.tsx` Error Boundary mechanics: Thuộc về M1.3.
- Data fetching: Thuộc về M2 — bài này chỉ nhắc qua

---
**Production Scenarios:**
- Scenario: Navigate giữa `/dashboard/orders` và `/dashboard/profile` — layout không re-mount, data cũ vẫn còn trong layout state.
- Scenario: `params` sync access breaking khi upgrade 15→16 — codemod fix và khi nào codemod fail.
- Scenario: "Layout không apply" → Root cause: Sai segment level hoặc không export default
- Scenario: "Route conflict pages/ và app/" → Root cause: App Router takes precedence, nhưng không nên duplicate

---
**Interview Questions:**
- "Sự khác biệt giữa `layout.tsx` và `template.tsx`?" (Junior hỏi)
- "Giải thích tại sao `params` phải là async trong Next.js 16?" (Mid hỏi — liên quan đến Edge runtime streaming)
- "Tại sao App Router không cần _app.tsx?" (Junior)
- "Layout và page khác nhau như thế nào?" (Fresher)

---
**Legacy Bridge:**
- Legacy: `pages/index.tsx` → Modern: `app/page.tsx`
- Legacy: `pages/_app.tsx` → Modern: `app/layout.tsx`
- Migration strategy: M12.1

---
**Risk Flag:**
- Số lượng reserved filenames nhiều → học viên cần cheatsheet ngay bài này. Bài tập: "Build 1 dashboard layout với 3 nested routes" để consolidate.
- Học viên dễ stuck ở: Quen Pages Router, App Router feels different → Cần exercise: "Convert 1 Pages route sang App Router"

---

### M1.2: Server Components vs Client Components

**Level:** Fresher
**Module:** M1
**Prerequisite:** M1.1
**Unlocks:** M1.3, M2.1, M4.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Phân biệt Server Component và Client Component — không chỉ về cú pháp mà về execution model
2. Xác định đúng chỗ đặt `'use client'` trong component tree — tránh over-client-ification
3. Giải thích "Client Component có thể import Server Component không?" — và tại sao
4. Nhận diện "use client" directive là React feature, không phải Next.js

---
**Topics:**
- **Server Component (SC)**: Chạy trên server, không có lifecycle hooks, không có `useState`/`useEffect`, có thể `async`, direct DB/filesystem access.
- **Client Component (CC)**: Chạy trên browser (và pre-render trên server), có `useState`/`useEffect`, nhận props từ server.
- **`'use client'` directive**: Đây là boundary marker, không phải "biến component thành client-only". Mọi import trong CC tree đều trở thành CC.
- **Composition pattern**: SC có thể pass CC làm children. CC **không thể** import SC (sẽ trở thành CC). Đây là rule quan trọng nhất.
- **"Server Component First" mental model**: Mặc định mọi component là SC, chỉ add `'use client'` khi thực sự cần interactivity.
- **Serialization constraint**: Props từ SC → CC phải serializable (không pass function, không pass Class instance).
- **React Server Components (RSC) concept**: Tại sao React team tạo ra, không phải Next.js invention

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (5):**
- **Đặt `'use client'` ở root layout**: Toàn bộ app thành CC, mất hết benefit của RSC. → Staff giữ layout là SC, chỉ đặt `'use client'` ở leaf nodes cần interactivity.
- **Pass non-serializable props từ SC sang CC**: Pass Date object, Error instance, function → runtime error. → Staff serialize trước khi pass (`.toISOString()`, `.message`).
- **Fetching data trong CC với `useEffect`**: Tạo waterfall, mất SSR benefit. → Staff fetch trong SC parent, pass data xuống CC.
- **Nhầm "Client Component không chạy trên server"**: CC vẫn được pre-render trên server (hydration model). → Staff phân biệt "pre-render" vs "client-only execution".
- **"Server Component = SSR"**: Khác nhau hoàn toàn → Staff hiểu RSC render trên server, không hydrate

---
**Terminology CẦN dạy:**
- `RSC` (React Server Components): Component model, không phải Next.js feature — là React 18+ feature. Next.js là framework đầu tiên adopt RSC stable.
- `'use client'` directive: Boundary marker, không phải decorator. Introduced React 18 / Next.js 13. Still alive và unchanged.
- `hydration`: SC không hydrate. CC hydrates. Đây là key difference.
- `serialization boundary`: Ranh giới giữa server và client data. Props qua boundary phải serializable.
- `Server Component`: React 18+ concept, meaning: render server-side, không gửi JS bundle
- `Client Component`: React 18+ concept, meaning: hydrate trên client, gửi JS bundle

---
**Overlap Lock:**
- RSC streaming internals: Thuộc về M4.1 — bài này không giải thích `Suspense` + streaming mechanism.
- `Suspense` và `loading.tsx`: Thuộc về M1.3.
- Server Actions: Thuộc về M6 — KHÔNG ĐỀ CẬP.
- Data Fetching (`fetch`): Thuộc về M2.1 — KHÔNG ĐỀ CẬP chi tiết.

---
**Production Scenarios:**
- Scenario: "Component không có state nhưng vẫn thêm 'use client'" → Root cause: Không hiểu RSC, tăng bundle size không cần thiết
- Scenario: "Hydration mismatch error" → Root cause: Server và client render khác nhau
- Scenario: Cart icon mất UI khi click. Root cause: Wrap toàn bộ layout bằng `'use client'`, làm mất hydration matching.
- Scenario: Lỗi `Error: Functions cannot be passed directly to Client Components`. Root cause: Pass event handler từ Server sang Client component.

---
**Interview Questions:**
- "Client Component có thể wrap Server Component không?" (Junior hỏi — câu trả lởi: có, thông qua `children` prop)
- "Tại sao `'use client'` lại gọi là 'boundary' chứ không phải 'directive'?" (Mid hỏi)
- "React Server Components khác SSR như thế nào?" (Mid)
- "Tại sao useEffect không chạy trong Server Component?" (Junior)
- Nếu tôi có 1 Server Component chứa dữ liệu user, và 1 Client Component là nút "Follow", làm sao kết nối 2 cái mà không leak sensitive data? (Junior/Mid)

---
**Legacy Bridge:**
- Legacy: `_app.tsx` wrapping toàn bộ app bằng JS function.
- Modern: Layout.tsx (Server) + Client leaf components.
- Migration strategy: Nằm ở M12.2

---
**Risk Flag:**
- Đây là bài khó nhất với Fresher vì counter-intuitive. Nhiều học viên hiểu nhầm "Server Component" = chỉ chạy khi request. Cần visual diagram: "Component Tree với màu sắc SC/CC" để visualize.
- Học viên dễ bị "thần thánh hóa" RSC và cố gắng ép mọi thứ lên Server. Cần bài tập: Biến 1 form phức tạp (toàn Client) thành kiến trúc Server + Client leaf hợp lý.

---

### M1.3: Loading, Error, và Streaming UI

**Level:** Fresher
**Module:** M1
**Prerequisite:** M1.2
**Unlocks:** M2.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement `loading.tsx` để hiển thị skeleton trong khi async Server Component fetch data
2. Implement `error.tsx` với `reset()` function để handle lỗi runtime
3. Giải thích `Suspense` boundary và khi nào Next.js auto-wrap vs khi nào phải manual wrap

---
**Topics:**
- **`loading.tsx`**: Auto-wrapped trong `<Suspense>` bởi Next.js. Trigger khi route segment đang load.
- **`error.tsx`**: Error Boundary cho route segment. Phải là CC (`'use client'`). Nhận `error` và `reset` props.
- **`global-error.tsx`**: Catch errors trong root layout. Không thể override với `error.tsx`.
- **Manual `<Suspense>` wrapping**: Khi muốn granular loading state trong page — không phải chờ cả route.
- **Streaming**: Server gửi HTML chunks từng phần. `<Suspense>` là trigger để stream. Relationship với HTTP chunked transfer.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **`error.tsx` là Server Component**: Error boundary phải là `'use client'` — Next.js sẽ báo lỗi nhưng message không rõ ràng. → Staff add `'use client'` ngay khi tạo error.tsx.
- **Không có `Suspense` boundary cho slow components**: Toàn bộ page block khi 1 component fetch chậm. → Staff wrap từng slow component trong `<Suspense fallback={<Skeleton/>}>`.
- **Log lỗi production trong `error.tsx` với `console.error`**: Logs xuất hiện trên client side, leak stack trace. → Staff dùng monitoring service (Sentry) và sanitize error message.

---
**Terminology CẦN dạy:**
- `Suspense`: React primitive để declare loading state. Không phải Next.js feature. Still alive.
- `Streaming SSR`: Server render HTML theo từng chunk, không chờ toàn bộ component tree ready. Enabled bởi Suspense.
- `Error Boundary`: React pattern để catch render errors. `error.tsx` là Next.js convention cho Error Boundary.

---
**Overlap Lock:**
- Detailed streaming + waterfall optimization: Thuộc về M9.x — bài này giới thiệu concept.
- `after()` API (run code sau response): Thuộc về M6.x — KHÔNG ĐỀ CẬP.

---
**Production Scenarios:**
- (No additional scenarios beyond standard usage)

---
**Interview Questions:**
- (Standard — covered in topics)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Streaming concept khó visualize. Cần demo trực quan: build 1 page với 2 Suspense boundaries, dùng DevTools Network để thấy chunked response.

---

### M1.4: Navigation & Linking

**Level:** Fresher
**Module:** M1
**Prerequisite:** M1.1, M1.2
**Unlocks:** M2.3, M8.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Sử dụng `next/link` trong App Router với prefetch understanding
2. Programmatic navigation với `useRouter` từ `next/navigation`
3. Handle search params và hash với `useSearchParams`
4. Phân biệt `next/navigation` vs `next/router` (Pages Router)

---
**Topics:**
- **`next/link`**: Prefetch mặc định khi link trong viewport. Next.js 16 incremental prefetch — chỉ prefetch phần chưa có trong router cache.
- **`useRouter` từ `next/navigation`**: Programmatic navigation trong App Router. Khác với `next/router` (Pages Router).
- **`useSearchParams`**: Đọc query string. Phải trong Suspense boundary (Next.js 16).
- **`usePathname`**: Lấy current path.
- **`<a>` vs `<Link>`**: `<Link>` dùng client-side navigation. `<a>` full page reload.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **Dùng `<a>` thay vì `<Link>`**: Mất prefetch, performance kém → Staff luôn dùng `next/link`
- **`useSearchParams()` không trong Suspense**: Next.js 16 enforce điều này — app crash. → Staff wrap component dùng `useSearchParams` trong `<Suspense>`.
- **Nhầm `next/router` với `next/navigation`**: App Router dùng `next/navigation`. Pages Router dùng `next/router`. → Staff import đúng package.

---
**Terminology CẦN dạy:**
- `next/navigation`: App Router navigation hooks. Khác với `next/router`.
- `Incremental prefetch` (Next.js 16): Chỉ prefetch phần chưa có trong router cache, không prefetch toàn bộ route. Ít data transfer hơn.

---
**Overlap Lock:**
- App Router Link component: Thuộc về M2.3 — bài này chỉ dùng App Router version
- Image optimization internals: Thuộc về M9.2 — KHÔNG ĐƯỢC đề cập
- Middleware redirects: Thuộc về M7 — bài này chỉ nhắc qua

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "`next/navigation` khác `next/router` thế nào?" (Junior)
- "Tại sao `useSearchParams` cần Suspense boundary?" (Mid)

---
**Legacy Bridge:**
- Legacy: `next/router` (Pages Router) → Modern: `next/navigation` (App Router)
- Migration strategy: M12.1

---
**Risk Flag:**
- Học viên từ Pages Router dễ nhầm `next/router` → Cần explicit reminder ở đầu bài.

---

### M1.5: Metadata API & SEO Foundations

**Level:** Fresher
**Module:** M1
**Prerequisite:** M1.1, M1.2
**Unlocks:** M6.3, M8.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement `generateMetadata` cho static và dynamic routes
2. Phân biệt `metadata` object vs `generateMetadata` function
3. Giải thích tại sao Metadata API thay thế `next/head`

---
**Topics:**
- **`metadata` object**: Static metadata export từ `page.tsx` hoặc `layout.tsx`.
- **`generateMetadata` function**: Async metadata từ dynamic data (params, fetch).
- **`metadataBase`**: Base URL cho Open Graph images.
- **`openGraph`, `twitter`**: Social card metadata.
- **`robots`**, **`alternates`**: SEO-specific metadata.
- **Metadata API vs `next/head`**: Streaming-compatible, deduplicated, type-safe.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (2):**
- **Dùng `next/head` trong App Router**: Không supported. → Staff dùng Metadata API.
- **Hardcode metadata trong layout**: Không dynamic theo route. → Staff dùng `generateMetadata` cho route-specific SEO.

---
**Terminology CẦN dạy:**
- `Metadata API`: v13.2+, App Router only. Replacement for `next/head`.
- `generateMetadata`: Async function để tạo metadata từ dynamic data.

---
**Overlap Lock:**
- Advanced SEO / structured data: Thuộc về M8.3 — bài này chỉ foundations.
- Open Graph image generation: Thuộc về M8.3 — KHÔNG ĐỀ CẬP.

---
**Interview Questions:**
- "Metadata API khác `next/head` thế nào?" (Junior)
- "Làm sao generate OG image động?" (Mid)

---
**Legacy Bridge:**
- Legacy: `next/head` (Pages Router) → Modern: Metadata API (App Router)
- Migration strategy: M12.1

---
**Risk Flag:**
- OG image generation là topic phức tạp — không đào sâu ở Fresher level.

---

### M2.1: Server Components Data Fetching

**Level:** Junior
**Module:** M2
**Prerequisite:** M1.2, M1.3
**Unlocks:** M2.2, M2.3, M5.1
**Parallel-safe:** M3

---
**Learning Objectives:**
1. Fetch data trực tiếp trong Server Component với `async/await` — không cần useEffect, không cần SWR
2. Implement parallel data fetching với `Promise.all` để tránh waterfall
3. Phân biệt fetch trong `layout.tsx` vs `page.tsx` và implications về re-fetch

---
**Topics:**
- **Direct `async` Server Component**: `async function Page() { const data = await fetch(...) }` — đây là pattern chuẩn.
- **Parallel fetching**: `const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()])` — tránh sequential waterfall.
- **Sequential vs Parallel**: Khi nào sequential là đúng (data B phụ thuộc data A), khi nào parallel.
- **`fetch` trong Next.js 16**: Default là `no-store` (dynamic, không cache). Phải opt-in cache qua `'use cache'` (M5).
- **Database access trực tiếp**: SC có thể query DB trực tiếp (Prisma, Drizzle). Không cần API layer.
- **Deduplication**: Next.js tự deduplicate cùng 1 fetch URL trong 1 request. Không cần manual memoize.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (4):**
- **Data fetching waterfall trong layout → page → component**: Mỗi level await tuần tự. → Staff dùng `Promise.all` hoặc fetch sớm ở parent và pass xuống.
- **`useEffect` để fetch trong SC**: SC không có `useEffect`. Nếu cần `useEffect`, component phải là CC và cần reconsider architecture. → Staff giải thích "RSC ≠ old SSR component".
- **Fetch trong Client Component với `useEffect` khi data đã có ở SC level**: Network waterfall + no SSR benefit. → Staff lift data fetching lên SC parent.
- **Không handle fetch errors**: `fetch()` không throw on 4xx/5xx — chỉ throw on network failure. → Staff check `response.ok` hoặc dùng wrapper.

---
**Terminology CẦN dạy:**
- `async Server Component`: Server Component là async function. Đây là feature của React 18 + RSC.
- `waterfall` (data fetching): Fetch A xong mới fetch B — tổng thờii gian = A + B. Parallel: max(A, B).
- `deduplication` (Next.js fetch): Cùng URL + options trong 1 request render → chỉ gọi 1 lần. Khác với caching.
- `no-store` default (Next.js 16): Mọi fetch mặc định dynamic, không cache. Đây là thay đổi từ Next.js 14 (trước đây default là cache).

---
**Overlap Lock:**
- Caching (`'use cache'`, `cacheTag`, `revalidateTag`): Thuộc về M5 — KHÔNG ĐỀ CẬP. Bài này chỉ nói "fetch default là no-cache trong Next.js 16".
- Server Actions (POST mutations): Thuộc về M6 — bài này chỉ cover GET/read data.
- `unstable_cache` / legacy ISR: Thuộc về M5 legacy section.

---
**Production Scenarios:**
- Scenario: "TTFB cao 3s trên mọi page" → Root cause: `getInitialProps` chạy ở mọi route download data không cần thiết (legacy). Modern: waterfall trong SC.

---
**Interview Questions:**
- "Tại sao không dùng `useEffect` để fetch data trong Next.js nữa?" (Junior hỏi)
- "Giải thích Next.js fetch deduplication — nó khác với caching thế nào?" (Mid hỏi)

---
**Legacy Bridge:**
- Legacy: `getServerSideProps` → Modern: async Server Component
- Legacy: `getStaticProps` → Modern: `fetch()` with cache + `generateStaticParams`
- Migration strategy: M12.1

---
**Risk Flag:**
- Junior quen React + SWR sẽ có muscle memory gọi `useEffect` + fetch. Cần bài tập: "Convert SWR component này thành RSC pattern" để break habit.

---

### M2.2: Client-Side Data Fetching & State

**Level:** Junior
**Module:** M2
**Prerequisite:** M2.1
**Unlocks:** M5.1, M6.1
**Parallel-safe:** M3

---
**Learning Objectives:**
1. Xác định khi nào cần fetch trên client (user-specific real-time data, after interaction)
2. Implement client-side fetching với TanStack Query v5 trong Next.js App Router context
3. Combine SC pre-fetch + CC hydration cho initial data optimization

---
**Topics:**
- **Khi nào dùng client fetch**: Personalized data (user dashboard real-time), infinite scroll, mutation feedback.
- **TanStack Query v5 setup trong App Router**: `QueryClientProvider` phải là CC (`'use client'`), tổ chức ở `app/providers.tsx`.
- **Hydration pattern**: SC fetch initial data → pass as `initialData` prop → CC dùng TanStack Query với initialData. Tránh double-fetch.
- **SWR alternative**: SWR vẫn viable, TanStack Query có API rõ ràng hơn cho App Router.
- **`useRouter`, `usePathname`, `useSearchParams`**: Client-side navigation hooks. `useSearchParams()` phải trong Suspense boundary (Next.js 16).

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **Dùng TanStack Query cho tất cả data fetching**: Including data đã có ở SC level — unnecessary client JS, double fetch. → Staff phân tích: SC cho initial static/semi-static data, TanStack Query cho real-time/interactive.
- **`QueryClientProvider` là Server Component**: Crash ngay vì context API không available trong SC. → Staff: tất cả React Context providers phải là CC.
- **`useSearchParams()` không trong Suspense**: Next.js 16 enforce điều này — app crash. → Staff wrap component dùng `useSearchParams` trong `<Suspense>`.

---
**Terminology CẦN dạy:**
- `Hydration` (TanStack Query): Serialize query state từ server → truyền xuống client → client "nhận" state mà không cần refetch.
- `staleTime`: Thờii gian TanStack Query giữ data "tươi". Liên quan nhưng khác với Next.js cache.
- `initialData` vs `placeholderData`: initialData được cache; placeholderData chỉ display, không cache.

---
**Overlap Lock:**
- Cache Components (`'use cache'`): Thuộc về M5 — KHÔNG ĐỀ CẬP.
- Optimistic updates: Thuộc về M6.2 — bài này mention concept nhưng không implement.

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "Khi nào dùng client fetch thay vì server fetch?" (Junior)
- "Làm sao tránh double-fetch giữa SC và TanStack Query?" (Mid)

---
**Legacy Bridge:**
- Legacy: SWR trong Pages Router → Modern: TanStack Query v5 trong App Router
- Migration strategy: M12.1

---
**Risk Flag:**
- Confusion giữa "TanStack Query cache" và "Next.js cache" — đây là 2 cache layers khác nhau. Cần diagram: "Luồng data từ DB → Next.js cache → TanStack Query cache → UI".

---

### M2.3: Route Handlers (API Layer)

**Level:** Junior
**Module:** M2
**Prerequisite:** M2.1
**Unlocks:** M6.1, M7.1
**Parallel-safe:** M3

---
**Learning Objectives:**
1. Tạo Route Handler với `GET`, `POST`, `PUT`, `DELETE` methods trong `app/api/`
2. Phân biệt Route Handler vs Server Actions — khi nào dùng cái nào
3. Implement proper request parsing, validation, và response với `NextResponse`

---
**Topics:**
- **`route.ts` convention**: File phải export named HTTP methods. `GET`, `POST`, etc.
- **`NextRequest` / `NextResponse`**: Type-safe request/response trong Route Handlers.
- **Reading request**: `request.json()`, `request.formData()`, `request.searchParams`.
- **Route Handler vs Server Action**: Route Handler = REST endpoint (external clients, webhooks). Server Action = form mutation từ React component. **Không thay thế nhau.**
- **CORS trong Route Handlers**: Manual setup — không auto-handled.
- **Streaming response**: `new Response(readable stream)` — dùng cho AI streaming use case.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **Tạo Route Handler cho mọi mutation thay vì Server Actions**: Boilerplate nhiều hơn không cần thiết cho form mutations nội bộ. → Staff dùng Server Actions cho UI mutations, Route Handlers cho external API.
- **Không validate request body**: Trust user input → security hole. → Staff dùng Zod để validate trước khi process.
- **Return plain object từ GET handler**: `return { data }` — Next.js sẽ serialize nhưng không set Content-Type. → Staff `return NextResponse.json(data)` luôn.

---
**Terminology CẦN dạy:**
- `Route Handler`: App Router term cho API endpoint. Trước đây (Pages Router) gọi là `API Routes` (`pages/api/`). Khác API path: `pages/api/users.ts` → `app/api/users/route.ts`.
- `API Routes` (legacy): Pages Router convention. Vẫn hoạt động trong Next.js 16 nếu dùng Pages Router.
- `edge runtime` trong Route Handler: `export const runtime = 'edge'` — chạy ở CDN edge. Hạn chế Node.js APIs.

---
**Overlap Lock:**
- Server Actions mechanics: Thuộc về M6 — bài này chỉ distinguish Route Handler vs SA.
- Authentication trong Route Handlers: Thuộc về M7 — bài này không implement auth.

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "Route Handler khác Server Action thế nào? Khi nào dùng cái nào?" (Junior)
- "Làm sao handle CORS trong Route Handler?" (Mid)

---
**Legacy Bridge:**
- Legacy: `pages/api/users.ts` → Modern: `app/api/users/route.ts`
- Migration strategy: M12.3

---
**Risk Flag:**
- Học viên từ Express background sẽ muốn build mọi thứ như REST API. Cần framing: "Route Handler là cho external clients. Internal mutations → Server Actions."

---

### M2.4: Form Handling & Validation Patterns

**Level:** Junior
**Module:** M2
**Prerequisite:** M2.1, M2.3
**Unlocks:** M6.1
**Parallel-safe:** M3

---
**Learning Objectives:**
1. Build form trong Next.js App Router với proper validation
2. Phân biệt controlled vs uncontrolled form components
3. Setup form validation với Zod + React Hook Form

---
**Topics:**
- **Form trong App Router**: Server Component form với Server Actions (preview — chi tiết ở M6).
- **React Hook Form**: Client-side form management. Performance-optimized.
- **Zod validation**: Schema validation cho form input. Type-safe.
- **Controlled vs Uncontrolled**: Khi nào dùng cái nào trong Next.js context.
- **`useFormStatus`**: Pending state cho form submission (React 19 / Next.js 16).

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (2):**
- **Validate bằng tay thay vì Zod**: Code dài, không type-safe. → Staff dùng Zod cho mọi form.
- **Không handle form submission pending state**: UX kém. → Staff dùng `useFormStatus`.

---
**Terminology CẦN dạy:**
- `useFormStatus`: React 19 hook cho form pending state.
- `Zod`: TypeScript-first schema validation.

---
**Overlap Lock:**
- Server Actions form: Thuộc về M6.1 — bài này chỉ preview.
- Complex form patterns: Thuộc về M6.2 — KHÔNG ĐỀ CẬP.

---
**Interview Questions:**
- "Làm sao validate form trong Next.js?" (Junior)
- "Controlled vs uncontrolled form trong App Router?" (Mid)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Form là topic quen thuộc nhưng patterns trong App Router khác biệt — cần explicit comparison.

---

### M2.5: Error Handling & Resilience Patterns

**Level:** Junior
**Module:** M2
**Prerequisite:** M2.1, M2.3
**Unlocks:** M5.1, M6.1
**Parallel-safe:** M3

---
**Learning Objectives:**
1. Implement error handling toàn diện trong App Router
2. Phân biệt `error.tsx`, `global-error.tsx`, `not-found.tsx`
3. Handle errors trong Server Actions và Route Handlers

---
**Topics:**
- **`error.tsx` recap**: Error Boundary cho route segment. Phải là CC.
- **`global-error.tsx`**: Catch errors trong root layout.
- **`not-found.tsx`**: Handle 404 cho route segment.
- **Error trong Server Actions**: Return error object từ SA, handle ở client.
- **Error trong Route Handlers**: Proper HTTP status codes, error response format.
- **`useRouter` refresh**: Programmatic refresh sau mutation.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (2):**
- **Swallow errors**: Không log, không handle. → Staff luôn log và show user-friendly message.
- **Return stack trace trong production API response**: Security leak. → Staff sanitize error responses.

---
**Terminology CẦN dạy:**
- `global-error.tsx`: Root-level error boundary.
- Error serialization qua server-client boundary.

---
**Overlap Lock:**
- Advanced error tracking (Sentry): Thuộc về M10 — KHÔNG ĐỀ CẬP.

---
**Interview Questions:**
- "Sự khác biệt giữa error.tsx và global-error.tsx?" (Junior)
- "Làm sao handle error trong Server Action?" (Mid)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Error handling patterns khác nhau giữa SC, CC, SA, và Route Handlers — dễ confuse.

---

### M3.1: Styling trong Next.js — CSS Modules, Tailwind, CSS-in-JS

**Level:** Junior
**Module:** M3
**Prerequisite:** M1.1
**Unlocks:** M3.2
**Parallel-safe:** M2

---
**Learning Objectives:**
1. Implement CSS Modules với scoped class names — không naming collision
2. Setup Tailwind CSS v4 với Turbopack (không cần PostCSS config thủ công)
3. Phân biệt CSS-in-JS compatibility với Server Components — cái nào hoạt động, cái nào không

---
**Topics:**
- **CSS Modules**: `Component.module.css`. Auto-scoped. Works trong cả SC và CC.
- **Global CSS**: Import trong `app/layout.tsx`. Chỉ import ở đây — không import trong SC khác.
- **Tailwind CSS v4**: JIT default. Vite/Turbopack native. Không cần `tailwind.config.js` cho basic setup.
- **`next/font`**: `Inter` và custom fonts. Zero layout shift. Tự host — không ping Google Fonts.
- **CSS-in-JS compatibility**: styled-components v6+, Emotion v11+ có RSC support nhưng cần setup phức tạp. Styled-components v5- không work với Turbopack.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **Import global CSS trong individual components**: Chỉ import được ở root layout hoặc `_app.tsx` (Pages Router). → Staff tập trung global styles ở layout.
- **Styled-components v5 với Turbopack**: Build fail. → Staff upgrade lên v6 hoặc migrate sang CSS Modules / Tailwind.
- **`@import` CSS files trong Sass với tilde prefix**: Turbopack không hỗ trợ `~` prefix (`~node_modules/...`). → Staff dùng relative imports hoặc alias.

---
**Terminology CẦN dạy:**
- `CSS Modules`: File-scoped CSS. `styles.container` → thực ra là `Component_container__xyz`. Not Next.js-specific.
- `Tailwind v4`: Không cần `@tailwind base/components/utilities` directives nữa. Dùng `@import "tailwindcss"` thay thế.
- `layout shift` (CLS): Metric khi element dịch chuyển sau khi render. `next/font` giải quyết font layout shift.

---
**Overlap Lock:**
- Performance optimization (image, font loading metrics): Thuộc về M9 — bài này dừng ở setup.
- Dark mode implementation: Không thuộc về bài này — mention nhưng không implement.

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "CSS-in-JS nào work với Server Components?" (Mid)
- "Tailwind v4 khác v3 thế nào?" (Junior)

---
**Legacy Bridge:**
- Legacy: Styled-components v5 → Modern: v6 hoặc CSS Modules
- Migration strategy: M12.1

---
**Risk Flag:**
- CSS-in-JS compatibility matrix phức tạp và thay đổi nhanh. Cần table rõ ràng: "Library X + Next.js Y → Works? Notes?"

---

### M3.2: `next/image` và `next/link` — Optimization Primitives

**Level:** Junior
**Module:** M3
**Prerequisite:** M3.1
**Unlocks:** M9.1
**Parallel-safe:** M2

---
**Learning Objectives:**
1. Dùng `next/image` đúng cách — `width`, `height`, `fill`, `priority`, `sizes` props
2. Implement `next/link` với prefetching understanding — khi nào prefetch, khi nào không
3. Giải thích tại sao KHÔNG dùng `<img>` thay `next/image` trong production

---
**Topics:**
- **`next/image` v3 (Next.js 16)**: Default `quality` thay đổi, `overrideSrc` prop mới. `sizes` prop bắt buộc cho `fill` layout.
- **`priority` prop**: LCP image nên có `priority`. Bỏ lazy loading cho above-the-fold images.
- **`fill` vs explicit `width/height`**: `fill` + `position: relative` container. Khi nào dùng.
- **`remotePatterns` config**: Security — whitelist domains được allow optimize.
- **`next/link` prefetching**: Prefetch mặc định khi link trong viewport. Next.js 16 incremental prefetch — chỉ prefetch phần chưa có trong cache.
- **`<a>` vs `<Link>`**: `<Link>` dùng client-side navigation. `<a>` full page reload.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (3):**
- **Dùng `<img>` thay `next/image`**: Không resize, không lazy load, không WebP/AVIF conversion. → Staff luôn dùng `next/image`.
- **Thiếu `alt` prop**: Accessibility + SEO issue. → Staff: `alt=""` cho decorative images, mô tả thực cho content images.
- **Không set `sizes` với `fill`**: Next.js sẽ default sizes không optimal → download image quá lớn. → Staff luôn set `sizes` responsive.

---
**Terminology CẦN dạy:**
- `LCP` (Largest Contentful Paint): Core Web Vital — thờii gian render element lớn nhất visible. Image thường là LCP element.
- `AVIF` / `WebP`: Next.js auto-convert images sang format tốt hơn. AVIF mới hơn, nhỏ hơn 20-50% so với WebP.
- `Incremental prefetch` (Next.js 16): Chỉ prefetch phần chưa có trong router cache, không prefetch toàn bộ route. Ít data transfer hơn.

---
**Overlap Lock:**
- Core Web Vitals sâu: Thuộc về M9.1 — bài này mention metrics nhưng không optimize.
- Image CDN / custom loader: Thuộc về M13 — KHÔNG ĐỀ CẬP.

---
**Production Scenarios:**
- Scenario: "Image load chậm" → Root cause: Không dùng priority cho LCP image
- Scenario: "Image từ CDN không load" → Root cause: Chưa config remotePatterns

---
**Interview Questions:**
- "Tại sao dùng `next/image` thay vì `<img>`?" (Junior)
- "Làm sao optimize LCP image?" (Mid)

---
**Legacy Bridge:**
- Legacy: `next/image` v1/v2 → Modern: v3 (Next.js 16)
- Migration strategy: M12.1

---
**Risk Flag:**
- `next/image` có nhiều props — học viên dễ overwhelm. Cần "cheatsheet: 3 use cases phổ biến nhất" làm anchor.

---

### M4.1: The Server/Client Component Boundary — Deep Dive

**Level:** Mid
**Module:** M4
**Prerequisite:** M1.2, M2.1
**Unlocks:** M4.2, M4.3, M5.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Phân biệt chính xác component nào chạy trên Server vs Client bằng directive `'use client'`.
2. Render xuống HTML một component server và pass props serializable xuống component client.
3. Đưa interactivity (onClick) từ Server Component xuống Client Component thông qua composition (children props).
4. Giải thích tại sao React cần Server Components (bundle size, waterfall)

---
**Topics:**
- **The Network Boundary**: Định nghĩa ranh giới trong App Router.
- **`'use client'` directive deep dive**: Cách hoạt động, phạm vi ảnh hưởng.
- **Serialization rules deep**: Những gì có thể/vì sao KHÔNG thể pass qua boundary (functions, class instances, Dates).
- **Client Component Composition**: Pattern dùng `children` để tránh spindle prop drilling.
- **"Server Component First" mental model reinforcement**: Mặc định mọi component là SC, chỉ add `'use client'` khi thực sự cần interactivity.
- **Server Components trong React ecosystem**: Không phải Next.js invention — React 18+ feature.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (4):**
- **The "Use Client Everything" Anti-Pattern**: Bỏ `'use client'` ở root layout → Staff làm: Đẩy `'use client'` xuống tận nhất các leaf components (nút bấm, form input).
- **Passing Non-Serializable Props**: Truyền function/class instance từ Server xuống Client → Staff làm: Dùng Server Actions hoặc serialize data.
- **Client Component Spindle**: Import Client Component vào Server Component rồi lại import Server Component vào Client Component đó → Staff làm: Dùng `children` prop pattern.
- **"Server Component = SSR"**: Khác nhau hoàn toàn → Staff hiểu RSC render trên server, không hydrate, không gửi JS bundle.

---
**Terminology CẦN dạy:**
- `Server Component`: Era Modern, component default, không state, chạy trên server.
- `Client Component`: Era Modern, tương đương CSR component cũ nhưng được pre-rendered trên server.
- `Network Boundary`: Ranh giới serialization giữa server và client.
- `hydration`: React concept, meaning không đổi: attach event listeners to server-rendered HTML. SC không hydrate. CC hydrates.

---
**Overlap Lock:**
- Data Fetching (`fetch`): Thuộc M2.1 — bài này KHÔNG fetch data, chỉ hardcode props.
- Caching: Thuộc M5 — bài này tuyệt đối không đề cập.
- Server Actions: Thuộc M6 — bài này không implement SA.

---
**Production Scenarios:**
- Symptom: Cart icon mất UI khi click. Root cause: Wrap toàn bộ layout bằng `'use client'`, làm mất hydration matching.
- Symptom: Lỗi `Error: Functions cannot be passed directly to Client Components`. Root cause: Pass event handler từ Server sang Client component.

---
**Interview Questions:**
- Nếu tôi có 1 Server Component chứa dữ liệu user, và 1 Client Component là nút "Follow", làm sao kết nối 2 cái mà không leak sensitive data? (Junior/Mid)
- Tại sao Next.js không cho phép truyền Function qua Server/Client boundary? (Mid)
- "React Server Components khác SSR như thế nào?" (Mid)
- "Tại sao useEffect không chạy trong Server Component?" (Junior)

---
**Legacy Bridge:**
- Legacy: `_app.tsx` wrapping toàn bộ app bằng JS function.
- Modern: Layout.tsx (Server) + Client leaf components.
- Migration strategy: Nằm ở M12.2

---
**Risk Flag:**
- **[MERGE PRIORITY: Kimi + GLM-5]** Đây là **#1 topic bị hiểu sai** trên thị trường. 80% dev dùng App Router nhưng viết code theo tư duy Pages Router (bỏ toàn bộ vào Client Components). Cần bài tập bắt buộc: Build 1 trang có Analytics tracking, Form state, và Database query. Yêu cầu học viên không được dùng quá 1 `'use client'` directive. Buộc họ phải dùng Composition pattern (children prop) để hiểu sâu Network Boundary.

---

### M4.2: RSC Streaming & Suspense Internals

**Level:** Mid
**Module:** M4
**Prerequisite:** M4.1
**Unlocks:** M4.3, M5.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Giải thích RSC payload format và cách nó stream từ server
2. Phân biệt SSR (HTML stream) vs RSC (component stream)
3. Thiết kế Suspense boundaries đúng cách để maximize streaming benefit

---
**Topics:**
- **RSC Payload**: Format dữ liệu stream từ server (không phải HTML). Chứa component tree + props.
- **SSR vs RSC streaming**: SSR stream HTML. RSC stream component data.
- **Suspense as streaming boundary**: `<Suspense>` trigger để stream partial data.
- **Streaming waterfall**: Đặt Suspense boundary ở đâu để tối ưu.
- **DevTools Network tab**: Filter `RSC` payload để debug streaming.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (2):**
- **Suspense boundary quá cao**: Toàn bộ page chờ 1 slow component. → Staff đặt ở component level.
- **Không dùng Suspense cho async components**: Miss opportunity để stream. → Staff wrap mọi async component trong Suspense.

---
**Terminology CẦN dạy:**
- `RSC Payload`: Serialized component tree từ server.
- `Streaming SSR`: Server render HTML theo từng chunk.
- `Suspense boundary`: React primitive để declare loading state + streaming trigger.

---
**Overlap Lock:**
- PPR: Thuộc về M5.3 — bài này chỉ streaming fundamentals.
- `loading.tsx`: Thuộc về M1.3 — đã cover basics.

---
**Production Scenarios:**
- Scenario: "Page load chậm mặc dù API nhanh" → Root cause: Không có Suspense boundary, đang chờ toàn bộ data.

---
**Interview Questions:**
- "RSC payload khác HTML stream thế nào?" (Senior)
- "Đặt Suspense boundary ở đâu là tối ưu?" (Mid)

---
**Legacy Bridge:**
- Legacy: `getServerSideProps` blocking → Modern: RSC streaming
- Migration strategy: M12.2

---
**Risk Flag:**
- RSC payload format là implementation detail — có thể thay đổi. Dạy concept, không đào sâu format.

---

### M4.3: Third-Party Libraries & RSC Integration

**Level:** Mid
**Module:** M4
**Prerequisite:** M4.1, M4.2
**Unlocks:** M6.2, M8.2
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Tích hợp third-party libraries vào App Router đúng cách
2. Phân biệt library nào work với SC, library nào cần CC wrapper
3. Handle "client-only" libraries (charts, maps, editors)

---
**Topics:**
- **Library compatibility matrix**: SC-safe vs CC-only libraries.
- **Wrapper pattern**: Tạo CC wrapper cho SC-unsafe libraries.
- **Dynamic import**: `next/dynamic` cho client-only components.
- **Context providers trong App Router**: Phải là CC, đặt ở đâu trong tree.
- **Popular libraries**: Prisma/Drizzle (SC), TanStack Query (CC), Zustand (CC), Recharts (CC).

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Import client-only library trong SC**: Build fail hoặc unexpected behavior. → Staff luôn check library compatibility.
- **Context provider ở root layout mà không cần**: Nếu chỉ 1 subtree cần → Staff đặt ở subtree layout.

---
**Terminology CẦN dạy:**
- `next/dynamic`: Lazy loading cho components. Tương tự React.lazy + Suspense.
- `ssr: false`: Option để disable server rendering cho dynamic import.

---
**Overlap Lock:**
- State management deep dive: Thuộc về M8.2 — KHÔNG ĐỀ CẬP.
- Specific library internals: Không dạy library internals, chỉ dạy integration.

---
**Production Scenarios:**
- Scenario: "Chart không render" → Root cause: Import recharts trong SC, cần dynamic import với `ssr: false`.

---
**Interview Questions:**
- "Làm sao dùng charting library trong App Router?" (Mid)
- "Context provider nên đặt ở đâu trong App Router?" (Mid)

---
**Legacy Bridge:**
- Legacy: `pages/_app.tsx` providers → Modern: `app/layout.tsx` CC wrapper
- Migration strategy: M12.2

---
**Risk Flag:**
- Library compatibility thay đổi nhanh — cần update matrix thường xuyên.

---

### M5.1: Cache Architecture — Mental Model

**Level:** Mid
**Module:** M5
**Prerequisite:** M2.1, M4.1
**Unlocks:** M5.2, M5.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Mô tả 4 cache layers trong Next.js App Router và cơ chế hoạt động của từng layer
2. Giải thích tại sao caching default thay đổi qua các version (Next.js 13-16) và hệ quả
3. Diagram được luồng data request qua các cache layers

---
**Topics:**
- **4 Cache Layers** (App Router, Next.js 16):
  1. **Request Memoization** (in-memory, per-request): `fetch()` dedup trong 1 render.
  2. **Data Cache** (persistent server-side): `'use cache'` directive. Survive restarts nếu config.
  3. **Full Route Cache** (static HTML): Pre-rendered routes. `no-store` = không có Full Route Cache.
  4. **Router Cache** (client-side): Browser giữ RSC payload của visited routes.
- **Cache Cheat Sheet theo version**:
  - Next.js 13-14: fetch default cache; segment config complex; implicit.
  - Next.js 15: fetch default `no-store`; async APIs; transitional.
  - Next.js 16: Fully explicit — `'use cache'` để opt-in; `no-store` default.
- **"Everything Dynamic by Default"** (Next.js 16 philosophy): Opt-in cache, not opt-out.
- **Cache invalidation**: `revalidateTag`, `revalidatePath`, `updateTag` (Next.js 16).

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (5):**
- **Assume "Next.js 14 caching behavior" trong Next.js 16**: Fetch giờ không cache mặc định — từng cached data giờ dynamic. → Staff kiểm tra `next.config.ts` và `'use cache'` directives khi upgrade.
- **Cache toàn bộ data không phân loại**: Sensitive data (session, cart) bị cache shared across users — security disaster. → Staff phân loại: public static data → cache; user-specific → never cache.
- **Dùng `revalidatePath('/')` khi chỉ cần invalidate 1 tag**: Invalidate toàn bộ route tree. Overkill và có thể gây thundering herd. → Staff dùng `revalidateTag('product-123')` granular.
- **Infinite stale data vì không có revalidation strategy**: Không có `cacheLife` hoặc `revalidate` → data cũ mãi mãi. → Staff define revalidation strategy ngay khi design data fetching.
- **Mix `unstable_cache` (Next.js 14-15) với `'use cache'` (Next.js 16)**: Behavior khác nhau. → Staff migrate `unstable_cache` sang `'use cache'` khi upgrade.

---
**Terminology CẦN dạy:**
- `'use cache'`: Directive (Next.js 16+). Opt-in caching cho component, function, hoặc cả route. Thay thế cho ISR và `unstable_cache`.
- `cacheTag()` / `revalidateTag()`: Granular cache invalidation. Tag = logic group.
- `cacheLife()`: Set TTL và stale-while-revalidate cho cached item.
- `updateTag()` (Next.js 16): Mới — update cache tag sau revalidation.
- `unstable_cache` (Next.js 14-15): Legacy API cho server-side caching. Vẫn hoạt động trong 16.x nhưng deprecated.
- `ISR` (Incremental Static Regeneration): Pages Router và early App Router pattern. Trong Next.js 16, tương đương là `'use cache'` với expiry.
- `stale-while-revalidate` (SWR pattern): Serve stale data ngay, revalidate in background. `cacheLife` hỗ trợ pattern này.
- `Thundering herd`: Nhiều requests cùng lúc khi cache expire → overload server. Giải quyết bằng stale-while-revalidate.

---
**Overlap Lock:**
- `'use cache'` implementation chi tiết với component level: Thuộc về M5.2.
- Cache security (sensitive data leak): Thuộc về M10 — bài này mention nhưng không deep dive.
- PPR (Partial Prerendering) mechanics: Thuộc về M5.3.

---
**Production Scenarios:**
- Symptom: Đăng bài xong, F5 lại mất bài (vì Router Cache client vẫn trả data cũ). Root cause: Server Action thiếu `revalidatePath` hoặc invalidation không match router cache.
- Symptom: Memory leak trên server. Root cause: Lạm dụng Request Memoization để lưu state globally.

---
**Interview Questions:**
- "Next.js có bao nhiêu cache layers? Mô tả từng cái." (Senior hỏi)
- "Tại sao caching strategy thay đổi giữa Next.js 13-14 và Next.js 16?" (Senior hỏi)
- Phân biệt Data Cache và Full Route Cache. Nếu Data Cache miss, Full Route Cache có hit không? (Senior)
- Tại sao Next.js 15 đổi default `fetch` từ cache sang no-cache? (Staff - Architectural Trade-off)

---
**Legacy Bridge:**
- Legacy: `getStaticProps` + `fallback: 'blocking'`.
- Modern: `fetch` + `force-cache` + `revalidate`.
- Migration strategy: Nằm ở M12.3

---
**Risk Flag:**
- **[MERGE PRIORITY: Kimi + GLM-5]** Đây là bài dễ nhất để "quá tải". 4 cache layers + version history + invalidation = quá nhiều. Đã split theo Kimi: M5.1 = mental model, M5.2 = implementation, M5.3 = PPR. Không mix 3 thứ này. Bắt buộc học viên mở DevTools Network tab, filter `RSC` payload. Chia làm 2 bài: M5.1 (Server-side caches) và M5.2 (Client-side Router Cache). Không dạy lý thuyết if không có DevTools mở sẵn.

---

### M5.2: `'use cache'` & Cache Components Implementation

**Level:** Mid
**Module:** M5
**Prerequisite:** M5.1
**Unlocks:** M5.3, M9.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement `'use cache'` ở 3 levels: function, component, route segment
2. Sử dụng `cacheTag()`, `cacheLife()`, `revalidateTag()`, `revalidatePath()` đúng cách
3. Debug cache hit/miss bằng Next.js DevTools và response headers

---
**Topics:**
- **`'use cache'` directive** ở 3 levels:
  - Function level: `async function getData() { 'use cache'; ... }`
  - Component level: `async function Component() { 'use cache'; ... }`
  - Route segment: `export const revalidate = 3600;` (vẫn hỗ trợ trong 16.x)
- **`cacheTag('tag-name')`**: Đặt tag để có thể invalidate theo nhóm logic.
- **`cacheLife(profile)`**: `'hours'`, `'days'`, `'weeks'`, hay custom object `{ stale, revalidate, expire }`.
- **`revalidateTag('tag')` vs `revalidatePath('/path')`**: Tag = granular, path = coarser.
- **`updateTag()` (Next.js 16)**: Thay đổi tags của cached item sau khi cache.
- **Cache debugging**: `x-nextjs-cache` response header. `REVALIDATED`, `MISS`, `HIT`, `STALE`.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (4):**
- **`'use cache'` trong Client Component**: Chỉ hoạt động trong Server Components và server functions. → Staff check component type trước khi add directive.
- **Tag quá generic** (`cacheTag('data')` cho toàn bộ app): Một `revalidateTag('data')` invalidate toàn bộ. → Staff dùng entity-specific tags: `product-${id}`, `user-${userId}`.
- **`cacheLife('max')` cho user-specific data**: TTL quá dài cho data personalized. → Staff: public/shared data → long TTL, user data → short TTL hoặc không cache.
- **Không theo dõi cache hit rate**: Không biết cache có work không. → Staff monitor `x-nextjs-cache` header trong logging pipeline.

---
**Terminology CẦN dạy:**
- `stale-while-revalidate` (SWR pattern): Serve stale data ngay, revalidate in background. `cacheLife` hỗ trợ pattern này.
- `Cache Components`: Tên marketing của Vercel cho feature `'use cache'` + PPR. Ra đờii Next.js 16.
- `Thundering herd`: Nhiều requests cùng lúc khi cache expire → overload server. Giải quyết bằng stale-while-revalidate.

---
**Overlap Lock:**
- PPR (Partial Prerendering): Thuộc về M5.3 — bài này chỉ nói "Cache Components là nền tảng của PPR".
- On-demand revalidation từ webhook: Thuộc về M6 (Server Actions) — bài này dừng ở API usage.

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "`'use cache'` khác `unstable_cache` thế nào?" (Mid)
- "Làm sao debug cache hit/miss?" (Senior)

---
**Legacy Bridge:**
- Legacy: `unstable_cache` → Modern: `'use cache'`
- Migration strategy: M12.3

---
**Risk Flag:**
- `'use cache'` có syntax giống `'use client'` / `'use server'` nhưng hoạt động khác hoàn toàn. Cần explicit comparison table.

---

### M5.3: Partial Prerendering (PPR) & Streaming Architecture

**Level:** Mid
**Module:** M5
**Prerequisite:** M5.2
**Unlocks:** M9.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Giải thích PPR model — static shell + dynamic holes — và khi nào dùng
2. Thiết kế Suspense boundaries đúng cách để maximize PPR benefit
3. Phân biệt PPR với SSG, SSR, ISR về performance profile

---
**Topics:**
- **PPR concept**: Server pre-render static shell (HTML ngay lập tức), stream dynamic parts vào holes (`<Suspense>` boundaries).
- **PPR vs SSR**: SSR block toàn bộ page cho đến khi data ready. PPR stream static HTML ngay, dynamic data stream sau.
- **PPR vs SSG**: SSG cần build-time data. PPR có static shell + request-time dynamic.
- **Enabling PPR**: `experimental.ppr = true` trong Next.js 15, default trong Next.js 16 với `'use cache'` adoption.
- **`<Suspense>` as PPR boundary**: Mọi `<Suspense>` wrapping dynamic component tạo ra "hole" cho PPR.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (2):**
- **PPR cho page hoàn toàn dynamic**: Không có static shell để pre-render → PPR không có benefit. → Staff dùng PPR cho pages có mixed static/dynamic content.
- **Suspense boundary quá lớn**: Static shell nhỏ, dynamic part lớn → miss PPR benefit. → Staff design để static shell chứa layout + cached data.

---
**Terminology CẦN dạy:**
- `PPR` (Partial Prerendering): Hybrid rendering — static shell + dynamic holes.
- `Static shell`: Phần HTML pre-rendered at build time.
- `Dynamic hole`: `<Suspense>` boundary nơi dynamic content stream vào.

---
**Overlap Lock:**
- Advanced streaming: Thuộc về M4.2 — bài này tập trung PPR specifics.
- Caching implementation: Thuộc về M5.2 — bài này assume đã biết `'use cache'`.

---
**Production Scenarios:**
- Scenario: E-commerce product page — static shell (product info cached) + dynamic hole (cart, recommendations).

---
**Interview Questions:**
- "PPR khác ISR thế nào?" (Senior)
- "Khi nào KHÔNG nên dùng PPR?" (Staff)

---
**Legacy Bridge:**
- Legacy: ISR (`revalidate`) → Modern: PPR + `'use cache'`
- Migration strategy: M12.3

---
**Risk Flag:**
- PPR là Next.js 16+ feature — không work trong legacy versions. Cần version check.

---

### M6.1: Server Actions — Fundamentals

**Level:** Mid
**Module:** M6
**Prerequisite:** M2.1, M2.3, M4.1
**Unlocks:** M6.2, M6.3, M7.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement Server Action với `'use server'` directive
2. Phân biệt Server Action vs Route Handler — khi nào dùng cái nào
3. Handle form submission với Server Action + progressive enhancement

---
**Topics:**
- **`'use server'` directive**: Mark function as Server Action.
- **Form submission**: `<form action={myAction}>` — progressive enhancement.
- **`useFormStatus`**: Pending state cho form (React 19).
- **`useActionState`**: Form state management (React 19).
- **Server Action vs Route Handler**: SA = internal mutation từ UI. RH = external API.
- **Validation trong SA**: Zod validation trước khi mutate.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **Dùng SA cho external API**: SA không phải REST endpoint. → Staff dùng Route Handler cho external.
- **Không validate input trong SA**: Security hole. → Staff validate mọi input với Zod.
- **SA quá dài**: Nhiều logic business trong 1 function. → Staff tách business logic ra service layer.

---
**Terminology CẦN dạy:**
- `'use server'`: Directive để mark server function.
- `useFormStatus`: React 19 hook cho form pending state.
- `useActionState`: React 19 hook cho form state + error handling.
- `progressive enhancement`: Form work without JavaScript.

---
**Overlap Lock:**
- Auth trong SA: Thuộc về M7.1 — bài này không implement auth check.
- Optimistic updates: Thuộc về M6.2 — bài này mention nhưng không implement.

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "Server Action khác Route Handler thế nào?" (Junior)
- "Làm sao handle form pending state?" (Mid)

---
**Legacy Bridge:**
- Legacy: API Route + client fetch → Modern: Server Action
- Migration strategy: M12.3

---
**Risk Flag:**
- SA là paradigm shift — học viên từ REST background cần explicit reframing.

---

### M6.2: Server Actions — Advanced Patterns

**Level:** Mid
**Module:** M6
**Prerequisite:** M6.1, M4.3
**Unlocks:** M6.3, M7.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement optimistic updates với `useOptimistic`
2. Handle file upload trong Server Actions
3. Chain multiple Server Actions (workflow pattern)

---
**Topics:**
- **`useOptimistic`**: React 19 hook cho optimistic UI.
- **File upload**: `FormData` với file, upload to storage (S3, etc.).
- **SA chaining**: Gọi SA từ SA, workflow pattern.
- **Error handling trong SA**: Return error object, handle ở client.
- **Revalidation sau SA**: `revalidatePath`, `revalidateTag` sau mutation.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Optimistic update không rollback**: Nếu SA fail, UI không revert. → Staff implement rollback pattern.
- **File upload không validate type/size**: Security + performance issue. → Staff validate trước khi process.

---
**Terminology CẦN dạy:**
- `useOptimistic`: React 19 hook cho optimistic UI.
- `FormData`: Web API cho form data + file upload.

---
**Overlap Lock:**
- Storage integration: Không dạy S3/AWS specifics — chỉ dạy pattern.

---
**Production Scenarios:**
- Scenario: "Comment hiện ra rồi biến mất" → Root cause: Optimistic update không rollback khi fail.

---
**Interview Questions:**
- "Làm sao implement optimistic update?" (Mid)
- "Server Action có thể gọi Server Action khác không?" (Mid)

---
**Legacy Bridge:**
- Legacy: useSWR mutation + manual optimistic → Modern: `useOptimistic`
- Migration strategy: M12.3

---
**Risk Flag:**
- `useOptimistic` là React 19 — không available trong older versions.

---

### M6.3: Authentication with Server Actions

**Level:** Mid
**Module:** M6
**Prerequisite:** M6.1, M6.2
**Unlocks:** M7.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement auth flow (login, logout, session) với Server Actions
2. Handle session management trong App Router
3. Protect routes và Server Actions với auth check

---
**Topics:**
- **Auth flow**: Login form → SA → session cookie → redirect.
- **Session management**: `cookies()` API trong SA / SC.
- **Route protection**: Middleware/proxy.ts pattern cho auth check.
- **SA protection**: Auth check đầu mỗi SA.
- **OAuth integration**: NextAuth.js v5 / Auth.js trong App Router.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **Auth logic trong `proxy.ts`**: proxy.ts là cho network operations, không phải business logic. Dễ bypass (security CVEs đã xảy ra). → Staff đặt auth check trong route handlers hoặc server actions.
- **Session trong localStorage**: Không secure. → Staff dùng httpOnly cookies.
- **Không validate session trong mỗi SA**: Assume client đã check. → Staff validate ở server.

---
**Terminology CẦN dạy:**
- `cookies()`: Next.js API đọc/ghi cookies trong SA/SC.
- `httpOnly cookie`: Cookie không accessible từ JavaScript.
- `CSRF`: Cross-Site Request Forgery — mitigation trong SA.

---
**Overlap Lock:**
- Full auth system design: Thuộc về M7.1 — bài này chỉ SA-specific auth.
- OAuth internals: Không dạy OAuth protocol — chỉ dạy integration.

---
**Production Scenarios:**
- Scenario: "Auth bypass" → Root cause: Không validate session trong SA.
- Scenario: "Flash of unauthenticated content" → Root cause: Auth state chưa sync

---
**Interview Questions:**
- "Làm sao protect Server Action với auth?" (Mid)
- "Session nên lưu ở đâu trong App Router?" (Senior)

---
**Legacy Bridge:**
- Legacy: `getServerSideProps` auth check → Modern: SA auth check
- Migration strategy: M12.2

---
**Risk Flag:**
- Auth là security-critical — cần explicit security review trong exercises.

---

### M7.1: Authentication & Authorization Architecture

**Level:** Mid
**Module:** M7
**Prerequisite:** M1.1, M6.3
**Unlocks:** M7.2, M7.3, M8.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Thiết kế auth architecture cho App Router (session-based vs JWT vs OAuth)
2. Implement role-based access control (RBAC) trong Next.js
3. Phân biệt authentication vs authorization

---
**Topics:**
- **Auth strategies**: Session-based, JWT, OAuth 2.0 / OIDC.
- **NextAuth.js v5 / Auth.js**: Auth library cho Next.js App Router.
- **RBAC**: Role-based access control với middleware/proxy.ts.
- **Auth middleware pattern**: Check auth ở proxy.ts, redirect nếu chưa login.
- **Protected routes**: Pattern để protect route segments.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **Auth logic trong `proxy.ts` (quá nhiều)**: proxy.ts chỉ nên network-level, không business logic. → Staff để RBAC ở application layer.
- **Client-side auth check duy nhất**: Dễ bypass. → Staff luôn check ở server.
- **Lưu JWT trong localStorage**: XSS vulnerable. → Staff dùng httpOnly cookies.

---
**Terminology CẦN dạy:**
- `Authentication`: Verify identity (login).
- `Authorization`: Check permissions (access control).
- `RBAC`: Role-Based Access Control.
- `proxy.ts` (Next.js 16): Network-level proxy. Node.js runtime mặc định. **Không phải middleware.**

---
**Overlap Lock:**
- SA auth specifics: Thuộc về M6.3 — bài này tập trung architecture.
- OAuth protocol: Không dạy protocol — chỉ dạy integration.

---
**Production Scenarios:**
- Scenario: "Auth middleware không work ở production" → Root cause: Edge runtime không có Node.js crypto

---
**Interview Questions:**
- "Authentication khác Authorization thế nào?" (Junior)
- "Làm sao implement RBAC trong Next.js?" (Mid)

---
**Legacy Bridge:**
- Legacy: `middleware.ts` auth → Modern: `proxy.ts` + app-level auth
- Migration strategy: M12.3

---
**Risk Flag:**
- `middleware.ts` → `proxy.ts` rename dễ gây confusion giữa "tại sao đổi tên?" Cần clear rationale: tách biệt "proxy-level concerns" vs "application-level concerns".

---

### M7.2: `proxy.ts` vs `middleware.ts` — Migration & Security

**Level:** Mid
**Module:** M7
**Prerequisite:** M7.1
**Unlocks:** M7.3, M10.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement `proxy.ts` trong Next.js 16 — network-level operations
2. Map `middleware.ts` patterns sang `proxy.ts` equivalents
3. Tránh auth bypass security CVEs liên quan đến proxy

---
**Topics:**
- **`proxy.ts` (Next.js 16)**: Network-level proxy. Node.js runtime mặc định. Focus: URL rewrite, headers, redirects.
- **`middleware.ts` (Next.js 12-15)**: Edge-based middleware. Deprecated trong 16.
- **Migration pattern**: `middleware.ts` → `proxy.ts` — những gì cần thay đổi.
- **Security CVEs**: Auth bypass qua proxy.ts — cách phòng tránh.
- **`matcher` config trong proxy.ts**: Filter routes cần proxy.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **Copy `middleware.ts` từ Next.js 15 vào Next.js 16 không sửa**: `middleware.ts` vẫn hoạt động nhưng deprecated — và một số patterns bị CVE. → Staff migrate sang `proxy.ts` khi có thể.
- **Business logic trong proxy.ts**: proxy.ts = network level. → Staff để business logic ở SA/RH.
- **Không test proxy.ts**: Dễ miss edge cases. → Staff viết integration tests.

---
**Terminology CẦN dạy:**
- `middleware.ts` (Next.js 12-15): Edge-based middleware. Deprecated trong Next.js 16, thay bởi `proxy.ts`.
- `proxy.ts` (Next.js 16): Network-level proxy. Node.js runtime mặc định. **Không phải middleware.**
- `Edge Runtime`: Chạy tại CDN edge nodes, không phải server chính. Hạn chế: không có Node.js core modules.
- `matcher`: Config pattern cho middleware — route nào sẽ trigger middleware.

---
**Overlap Lock:**
- Auth patterns trong proxy.ts chi tiết: Thuộc về M7.1 — bài này chỉ architectural overview.
- Security CVEs và proxy bypass: Thuộc về M10 — KHÔNG ĐỀ CẬP chi tiết.

---
**Production Scenarios:**
- Scenario: "Middleware chậm" → Root cause: Không dùng matcher, chạy cho static files
- Scenario: "Auth middleware không work ở production" → Root cause: Edge runtime không có Node.js crypto

---
**Interview Questions:**
- "`proxy.ts` khác `middleware.ts` thế nào?" (Mid)
- "Tại sao Next.js 16 đổi tên thành proxy.ts?" (Senior)

---
**Legacy Bridge:**
- Legacy: `middleware.ts` → Modern: `proxy.ts` (v16)
- Migration strategy: M12.3, M10.1

---
**Risk Flag:**
- `middleware.ts` → `proxy.ts` rename dễ gây confusion. Cần clear rationale: tách biệt "proxy-level concerns" vs "application-level concerns".

---

### M7.3: Edge Runtime & API Layer

**Level:** Mid
**Module:** M7
**Prerequisite:** M7.2, M2.3
**Unlocks:** M8.1, M9.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Phân biệt Edge runtime vs Node.js runtime trong Next.js
2. Implement Route Handler với Edge runtime
3. Handle Edge runtime limitations (no Node.js APIs)

---
**Topics:**
- **Edge runtime**: V8 isolate, lightweight, regional. Cold start nhanh.
- **Node.js runtime**: Full Node.js APIs, heavy computation.
- **Runtime selection**: Khi nào chọn Edge, khi nào chọn Node.js.
- **Edge API Routes**: `export const runtime = 'edge'`.
- **Edge limitations**: No `fs`, no heavy ORM, limited npm packages.
- **Regional deployment**: Edge functions chạy gần user hơn.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **"Edge runtime cho mọi thứ"**: Không phải lúc nào cũng tốt → Staff chọn Edge cho lightweight, Node cho heavy computation.
- **Dùng Prisma trong Edge**: Prisma không work trong Edge (cần Prisma Accelerate). → Staff dùng lightweight DB client.
- **Không test Edge behavior**: Edge và Node behavior khác nhau. → Staff test cả hai.

---
**Terminology CẦN dạy:**
- `Edge Runtime`: v12+, meaning: V8 isolate, lightweight, regional.
- `Node.js runtime`: Default runtime, full APIs.
- `Cold start`: Thờii gian khởi động function. Edge nhanh hơn Node.js.

---
**Overlap Lock:**
- Deployment specifics: Thuộc về M13 — bài này chỉ runtime concepts.

---
**Production Scenarios:**
- Scenario: "Edge runtime lỗi với Node.js API" → Root cause: Dùng fs/path trong Edge, không supported
- Scenario: "Middleware chậm" → Root cause: Không dùng matcher, chạy cho static files

---
**Interview Questions:**
- "Khi nào nên dùng Edge runtime thay vì Node.js?" (Junior)
- "Edge runtime có những hạn chế gì?" (Mid)

---
**Legacy Bridge:**
- Legacy: Edge Functions (v12) → Modern: Edge Route Handlers (v16)
- Migration strategy: M12.3

---
**Risk Flag:**
- Edge runtime limitations không intuitive → Cần exercise: "List 5 APIs không work trong Edge"

---

### M8.1: Advanced Routing — Parallel & Intercepting Routes

**Level:** Senior
**Module:** M8
**Prerequisite:** M1.1, M7.3
**Unlocks:** M8.2, M8.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement Parallel Routes (`@folder`) cho complex layouts
2. Implement Intercepting Routes (`(.)`, `(..)`) for modal patterns
3. Thiết kế routing architecture phức tạp

---
**Topics:**
- **Parallel Routes**: `@folder` convention. Render multiple pages cùng lúc.
- **Intercepting Routes**: `(.)`, `(..)`, `(...)`. Intercept route để show modal.
- **Modal pattern**: Intercept + Parallel Routes để tạo modal navigation.
- **Route groups**: `(groupName)` để organize mà không affect URL.
- **Conditional routes**: Render route dựa trên condition.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (2):**
- **Parallel Routes quá phức tạp**: Khó maintain. → Staff dùng khi thực sự cần multiple independent panels.
- **Intercepting Routes cho mọi modal**: Không phải mọi modal cần URL state. → Staff dùng cho modal cần shareable URL.

---
**Terminology CẦN dạy:**
- `Parallel Routes`: `@folder` — render multiple pages simultaneously.
- `Intercepting Routes`: `(.)`, `(..)` — intercept navigation để show different UI.
- `Slot`: `@folder` là "slot" trong layout.

---
**Overlap Lock:**
- Basic routing: Thuộc về M1.1 — bài này chỉ advanced patterns.

---
**Production Scenarios:**
- Scenario: E-commerce — product grid + cart sidebar (Parallel Routes).
- Scenario: Photo gallery — click thumbnail mở modal nhưng URL thay đổi (Intercepting).

---
**Interview Questions:**
- "Parallel Routes khác Intercepting Routes thế nào?" (Senior)
- "Khi nào dùng Intercepting Routes?" (Senior)

---
**Legacy Bridge:** N/A (App Router only feature)

---
**Risk Flag:**
- Parallel + Intercepting Routes dễ gây confuse — cần visual diagram.

---

### M8.2: State Management in App Router

**Level:** Senior
**Module:** M8
**Prerequisite:** M4.3, M8.1
**Unlocks:** M8.3, M9.2
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Chọn state management phù hợp cho App Router (Zustand, Jotai, Context)
2. Tổ chức state giữa Server và Client
3. Handle URL state management

---
**Topics:**
- **State categories**: Server state, Client state, URL state.
- **Zustand trong App Router**: Global client state. CC-only.
- **Jotai / Recoil**: Atomic state management.
- **React Context trong App Router**: Phải là CC. Đặt ở đâu.
- **URL state**: `useSearchParams` cho shareable state.
- **Server state**: TanStack Query cho server data caching.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (3):**
- **"Context cho mọi state"**: Performance issue → Staff dùng state management library cho complex state.
- **Zustand store trong SC**: Zustand chỉ work trong CC. → Staff check component type.
- **localStorage trong render**: Hydration mismatch → Staff dùng useEffect hoặc dynamic import.

---
**Terminology CẦN dạy:**
- `Zustand`: Lightweight state management. CC-only.
- `Server state`: Data từ server (TanStack Query).
- `URL state`: State trong query parameters.

---
**Overlap Lock:**
- TanStack Query: Thuộc về M2.2 — bài này không repeat.

---
**Production Scenarios:**
- Scenario: "State không sync giữa tabs" → Root cause: Không dùng URL state cho shareable state.

---
**Interview Questions:**
- "Chọn state management nào cho App Router?" (Mid)
- "Server state khác Client state thế nào?" (Senior)

---
**Legacy Bridge:**
- Legacy: Redux trong Pages Router → Modern: Zustand trong App Router
- Migration strategy: M12.2

---
**Risk Flag:**
- State management là opinionated topic — cần present trade-offs, không push 1 solution.

---

### M8.3: SEO & Structured Data Advanced

**Level:** Senior
**Module:** M8
**Prerequisite:** M1.5, M8.2
**Unlocks:** M9.2
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Generate dynamic OG images với `@vercel/og`
2. Implement structured data (JSON-LD) cho SEO
3. Handle international SEO (hreflang)

---
**Topics:**
- **OG Image generation**: `@vercel/og` cho dynamic social cards.
- **JSON-LD**: Structured data cho search engines.
- **hreflang**: International SEO với Metadata API.
- **Sitemap**: `sitemap.ts` / `sitemap.xml` generation.
- **robots.ts**: Dynamic robots.txt.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Static OG image cho dynamic content**: Không personalized. → Staff dùng dynamic generation.
- **JSON-LD không valid**: Search engine ignore. → Staff validate schema.

---
**Terminology CẦN dạy:**
- `JSON-LD`: JavaScript Object Notation for Linked Data.
- `OG Image`: Open Graph image cho social sharing.
- `hreflang`: Attribute chỉ định language/region của page.

---
**Overlap Lock:**
- Basic metadata: Thuộc về M1.5 — bài này chỉ advanced.

---
**Production Scenarios:**
- Scenario: "Social share không hiển thị đúng image" → Root cause: OG image không dynamic.

---
**Interview Questions:**
- "Làm sao generate OG image động?" (Mid)
- "Structured data ảnh hưởng SEO thế nào?" (Senior)

---
**Legacy Bridge:**
- Legacy: `next/head` SEO → Modern: Metadata API + `@vercel/og`
- Migration strategy: M12.1

---
**Risk Flag:**
- OG image generation tốn resources — cần cache strategy.

---

### M9.1: Performance Engineering — Core Web Vitals

**Level:** Senior
**Module:** M9
**Prerequisite:** M3.2, M5.2
**Unlocks:** M9.2, M9.3, M13
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Đo và optimize Core Web Vitals (LCP, INP, CLS, TTFB, FCP)
2. Implement performance monitoring trong Next.js
3. Optimize rendering performance với React Compiler

---
**Topics:**
- **Core Web Vitals**: LCP, INP, CLS, TTFB, FCP — definitions và targets.
- **LCP optimization**: Image optimization, font loading, server response time.
- **INP optimization**: Input responsiveness, main thread blocking.
- **CLS optimization**: Layout stability, image dimensions, font loading.
- **React Compiler**: Automatic memoization (Next.js 16). Không cần `useMemo`/`useCallback` manual.
- **Performance monitoring**: `web-vitals` library, Vercel Analytics.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (3):**
- **React Compiler bật nhưng vẫn dùng `useMemo` manual**: Không cần thiết. → Staff let compiler handle memoization.
- **Optimize premature**: Không đo trước khi optimize. → Staff đo CWV trước, optimize sau.
- **Ignore mobile performance**: Chỉ test desktop. → Staff test cả mobile (throttling).

---
**Terminology CẦN dạy:**
- `LCP`: Largest Contentful Paint.
- `INP`: Interaction to Next Paint (thay FID từ 2024).
- `CLS`: Cumulative Layout Shift.
- `React Compiler`: Automatic memoization (React 19 / Next.js 16).

---
**Overlap Lock:**
- Image optimization: Thuộc về M3.2 — bài này không repeat.

---
**Production Scenarios:**
- Scenario: "LCP 4.5s" → Root cause: Image không optimized, không priority.
- Scenario: "INP cao" → Root cause: Main thread blocking, cần React Compiler + code splitting.

---
**Interview Questions:**
- "React Compiler khác `useMemo` thế nào?" (Senior)
- "Làm sao optimize INP?" (Senior)

---
**Legacy Bridge:**
- Legacy: Manual `useMemo`/`useCallback` → Modern: React Compiler automatic
- Migration strategy: M12.1

---
**Risk Flag:**
- React Compiler là Next.js 16+ feature — không backport.

---

### M9.2: Turbopack Configuration & Build Optimization

**Level:** Senior
**Module:** M9
**Prerequisite:** M5.2, M8.2
**Unlocks:** M9.3, M13
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Configure Turbopack cho production builds
2. Migrate custom webpack config sang Turbopack
3. Optimize build time và output size

---
**Topics:**
- **Turbopack config**: `next.config.ts` — top-level `turbopack` key (v16 syntax).
- **Webpack migration**: `webpack` config → Turbopack equivalents. Không phải mọi webpack feature đều có.
- **Custom loaders**: Turbopack loader config.
- **Resolve aliases**: `turbopack.resolveAlias`.
- **Build optimization**: Code splitting, tree shaking, dead code elimination.
- **Bundle Analyzer**: `next/bundle-analyzer` để phân tích output.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (3):**
- **Config `experimental.turbopack` từ v15 sang v16**: Syntax đã đổi. → Staff dùng top-level `turbopack` key.
- **Custom webpack plugin không có Turbopack equivalent**: Blocker upgrade. → Staff tìm alternative hoặc viết Turbopack plugin.
- **Không analyze bundle**: Không biết gây bloat ở đâu. → Staff dùng bundle analyzer thường xuyên.

---
**Terminology CẦN dạy:**
- `Turbopack`: Rust bundler, default từ Next.js 16.
- `Bundle Analyzer`: Tool phân tích bundle size.
- `Tree shaking`: Loại bỏ dead code.

---
**Overlap Lock:**
- Basic Turbopack intro: Thuộc về M0.3 — bài này chỉ advanced config.

---
**Production Scenarios:**
- Scenario: "Build lâu vì quá nhiều getStaticPaths" → Root cause: Dùng `getStaticPaths` với `fallback: false` cho 100k SSG pages (legacy).
- Scenario: "Bundle size lớn" → Root cause: Không code split, import cả library chỉ dùng 1 function.

---
**Interview Questions:**
- "Làm sao migrate webpack config sang Turbopack?" (Senior)
- "Turbopack khác webpack thế nào về architecture?" (Staff)

---
**Legacy Bridge:**
- Legacy: webpack config → Modern: Turbopack config
- Migration strategy: M12.4

---
**Risk Flag:**
- Turbopack plugin ecosystem chưa mature bằng webpack — cần check compatibility.

---

### M9.3: Observability & Monitoring

**Level:** Senior
**Module:** M9
**Prerequisite:** M9.1, M9.2, M7.3
**Unlocks:** M13
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Setup error tracking (Sentry) trong Next.js
2. Implement performance monitoring
3. Add logging và tracing cho production

---
**Topics:**
- **Sentry integration**: Error tracking cho Next.js App Router.
- **Performance monitoring**: Vercel Analytics, custom metrics.
- **Logging**: Structured logging trong SA, Route Handlers.
- **OpenTelemetry**: Distributed tracing cho Next.js.
- **Health checks**: Endpoint để check app health.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Log sensitive data**: Leak PII. → Staff sanitize logs.
- **Không monitor client-side errors**: Chỉ track server. → Staff track cả client với Sentry.

---
**Terminology CẦN dạy:**
- `OpenTelemetry`: Standard cho distributed tracing.
- `Structured logging`: JSON format logs, dễ parse.

---
**Overlap Lock:**
- Security monitoring: Thuộc về M10 — bài này không repeat.

---
**Production Scenarios:**
- Scenario: "Lỗi production không biết nguyên nhân" → Root cause: Không có error tracking.

---
**Interview Questions:**
- "Làm sao monitor Next.js app trong production?" (Senior)
- "OpenTelemetry khác logging thông thường thế nào?" (Staff)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Observability tools có free tier limits — cần mention cost.

---

### M10.1: Testing Strategy — Unit, Integration, E2E

**Level:** Senior
**Module:** M10
**Prerequisite:** M6.1, M7.1
**Unlocks:** M10.2, M10.3, M13
**Parallel-safe:** M9

---
**Learning Objectives:**
1. Setup testing framework cho Next.js (Vitest, Testing Library, Playwright)
2. Test Server Components, Client Components, và Server Actions
3. Implement E2E testing với Playwright

---
**Topics:**
- **Unit testing**: Vitest + Testing Library cho components.
- **Server Component testing**: Mock `fetch`, mock DB calls.
- **Server Action testing**: Test SA như functions.
- **E2E testing**: Playwright cho user flows.
- **Mocking**: `msw` cho API mocking.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Test implementation details thay vì behavior**: Fragile tests. → Staff test behavior.
- **Không test Server Components**: SC cũng cần test. → Staff mock dependencies.

---
**Terminology CẦN dạy:**
- `Vitest`: Test runner thay thế Jest.
- `Testing Library`: Testing utilities focus user interactions.
- `Playwright`: E2E testing framework.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "Test fail sau refactor" → Root cause: Test implementation details.

---
**Interview Questions:**
- "Làm sao test Server Component?" (Mid)
- "Unit test khác E2E test thế nào trong Next.js?" (Senior)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Testing SC đòi hởi mock phức tạp — cần provide mock utilities.

---

### M10.2: Security Patterns & Hardening

**Level:** Senior
**Module:** M10
**Prerequisite:** M7.1, M9.3
**Unlocks:** M10.3, M13
**Parallel-safe:** M9

---
**Learning Objectives:**
1. Implement security headers cho Next.js
2. Handle CSRF, XSS, SQL injection trong App Router
3. Secure Server Actions và Route Handlers

---
**Topics:**
- **Security headers**: CSP, HSTS, X-Frame-Options trong `next.config.ts`.
- **CSRF protection**: Built-in trong Server Actions (Next.js 16).
- **XSS prevention**: Sanitize user input, escape output.
- **SQL injection**: Parameterized queries (Prisma/Drizzle tự động).
- **Secure headers**: `headers()` trong `next.config.ts`.
- **CVE awareness**: Recent Next.js CVEs và cách phòng tránh.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (3):**
- **Trust user input**: Không validate. → Staff validate mọi input với Zod.
- **Expose sensitive data trong API response**: Leak thông tin. → Staff sanitize responses.
- **Không update dependencies**: CVE không patched. → Staff dùng Dependabot/Snyk.

---
**Terminology CẦN dạy:**
- `CSP`: Content Security Policy.
- `CSRF`: Cross-Site Request Forgery.
- `XSS`: Cross-Site Scripting.
- `CVE`: Common Vulnerabilities and Exposures.

---
**Overlap Lock:**
- Auth security: Thuộc về M7.1 — bài này không repeat.

---
**Production Scenarios:**
- Scenario: "XSS attack" → Root cause: Không sanitize user input.
- Scenario: "CVE-2026-23870" → Root cause: Không update Next.js version.

---
**Interview Questions:**
- "Làm sao prevent XSS trong Next.js?" (Senior)
- "Server Actions có CSRF protection không?" (Senior)

---
**Legacy Bridge:**
- Legacy: `getServerSideProps` security → Modern: SA security
- Migration strategy: M12.2

---
**Risk Flag:**
- Security là topic nghiêm túc — cần reference OWASP guidelines.

---

### M10.3: `after()` API & Background Tasks

**Level:** Senior
**Module:** M10
**Prerequisite:** M6.2, M9.3
**Unlocks:** M13
**Parallel-safe:** M9

---
**Learning Objectives:**
1. Implement `after()` API cho cleanup logic
2. Handle background tasks sau response
3. Phân biệt `after()` vs `unstable_after`

---
**Topics:**
- **`after()` API**: Chạy code sau khi response đã gửi (Next.js 15.1+).
- **Background tasks**: Send email, update analytics, sau response.
- **Cleanup patterns**: Close connections, cleanup resources.
- **`waitUntil`**: Edge runtime equivalent.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (2):**
- **Block response cho non-critical tasks**: User chờ lâu. → Staff dùng `after()`.
- **Không handle `after()` errors**: Silent fail. → Staff wrap trong try-catch + log.

---
**Terminology CẦN dạy:**
- `after()`: API chạy code sau response.
- `waitUntil`: Edge runtime API tương tự.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "User chờ 3s sau form submit" → Root cause: Send email trong request path.

---
**Interview Questions:**
- "`after()` khác `setTimeout` thế nào?" (Mid)
- "Khi nào dùng `after()` thay vì queue?" (Senior)

---
**Legacy Bridge:**
- Legacy: `unstable_after` → Modern: `after()` (stable)
- Migration strategy: M12.1

---
**Risk Flag:**
- `after()` không đảm bảo execution (request bị kill) → không dùng cho critical tasks.

---

### M11.1: Pages Router — Architecture & Data Fetching

**Level:** Senior
**Module:** M11
**Prerequisite:** M0.2, M2.1
**Unlocks:** M11.2, M11.3, M12.1
**Parallel-safe:** Không (dạy riêng để tránh confusion với App Router)

---
**Learning Objectives:**
1. Đọc và hiểu codebase Pages Router (`pages/` directory, `_app.tsx`, `_document.tsx`)
2. Implement `getStaticProps`, `getStaticPaths`, `getServerSideProps` — đúng use case
3. Giải thích tại sao Pages Router bị deprecated về features và App Router thay thế nó

---
**Topics:**
- **`pages/` directory structure**: `_app.tsx` (global wrapper), `_document.tsx` (HTML document), `pages/api/` (API Routes).
- **`getStaticProps`**: Build-time data fetching. Returns `props`. `revalidate` cho ISR.
- **`getStaticPaths`**: Generate dynamic paths tại build time. `fallback: 'blocking'` vs `false` vs `true`.
- **`getServerSideProps`**: Request-time data fetching. Chạy mỗi request. Slower than static.
- **`getInitialProps`** (deprecated): Chạy cả client lẫn server. Tránh dùng.
- **Pages Router limitations**: Không có layout nesting, không có streaming, fetch trong component phải client-side.

---
**Depth Level:** 4 (vì đây là LEGACY_CORE — cần đủ để maintain)

---
**Anti-Patterns CẦN cover (4):**
- **Dùng `getServerSideProps` cho data ít thay đổi**: Mỗi request đều fetch — chậm và tốn tài nguyên. → Staff dùng `getStaticProps` với `revalidate` (ISR).
- **`getInitialProps` trong custom `_app.tsx`**: Disable Automatic Static Optimization cho toàn bộ app. → Staff tránh `getInitialProps` trong `_app`.
- **`getStaticPaths` với `fallback: false` cho large dataset**: Build time quá dài khi có 100k+ paths. → Staff `fallback: 'blocking'` + on-demand generation.
- **Mix Pages Router và App Router data fetching mental model**: `getStaticProps` không tồn tại trong App Router. → Staff clear mental model separation.

---
**Terminology CẦN dạy:**
- `getStaticProps`: Pages Router era (9.3+). Build-time fetch. **Không tồn tại trong App Router.** Vẫn dùng nhiều trong codebase cũ.
- `getServerSideProps`: Pages Router era (9.3+). Per-request fetch. **App Router tương đương**: async Server Component (nhưng hoạt động khác).
- `ISR` (Incremental Static Regeneration): Regenerate static page theo `revalidate` interval. Pages Router pattern → App Router tương đương là `'use cache'` với expiry.
- `Automatic Static Optimization`: Next.js tự detect page là static nếu không có `getServerSideProps`/`getInitialProps`. Chỉ trong Pages Router.

---
**Overlap Lock:**
- Migration từ Pages Router sang App Router: Thuộc về M12 — bài này chỉ dạy Pages Router để understand, không dạy migrate.
- App Router Cache Components: Thuộc về M5 — KHÔNG ĐỀ CẬP ở đây.

---
**Production Scenarios:**
- Symptom: TTFB cao 3s trên mọi page. Root cause: `getInitialProps` chạy ở mọi route download data không cần thiết.
- Symptom: Build time 40 phút. Root cause: Dùng `getStaticPaths` với `fallback: false` cho 100k SSG pages.

---
**Interview Questions:**
- "Explain ISR — tại sao nó ra đờii?" (Mid hỏi)
- "Bạn sẽ migrate codebase Pages Router 200 pages sang App Router thế nào? Step đầu tiên là gì?" (Senior hỏi)
- "Lý do kiến trúc `getServerSideProps` không scale được cho Streaming UI?" (Senior)
- "Nếu maintain codebase Next 12, làm sao tối ưu Custom App mà không break route?" (Mid)

---
**Legacy Bridge:**
- Đây chính là Legacy Core.
- Legacy: `getStaticProps` → Modern: `fetch()` with cache + `generateStaticParams`
- Legacy: `getServerSideProps` → Modern: async Server Component

---
**Risk Flag:**
- **[MERGE PRIORITY: GLM-5 + Kimi]** Học viên có thể bị "lây" Pages Router mental model khi quay về App Router. Cần explicit closure: "Module này kết thúc Pages Router thinking. M12 trở đi là Migration."
- Học viên chê bai Legacy là "công nghệ rác". Cần nhấn mạnh: Vercel tạo ra pattern này vì constraints của năm 2019. Phải hiểu constraint để thông cảm kiến trúc.

---

### M11.2: Pages Router — Middleware, i18n & Production

**Level:** Senior
**Module:** M11
**Prerequisite:** M11.1
**Unlocks:** M11.3, M12.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Đọc hiểu `middleware.ts` trong Pages Router / Next.js 15 context (legacy pattern)
2. Hiểu i18n routing trong Pages Router (`i18n` config) vs App Router approach
3. Map legacy patterns sang Next.js 16 equivalents (proxy.ts, manual i18n)
4. Cấu hình `next.config.js` cho production (output, trailingSlash, images)

---
**Topics:**
- **`middleware.ts` (legacy, Next.js 12-15)**: `NextRequest`, `NextResponse.redirect`, `matcher` config. Chạy trên Edge Runtime.
- **Pages Router i18n**: `i18n` config trong `next.config.js`. Auto locale detection. Routing với `defaultLocale`.
- **Next.js 16 `proxy.ts`**: Thay `middleware.ts`. Chạy trên Node.js runtime mặc định (không phải Edge). Focus network operations (URL rewrite, headers).
- **i18n trong App Router**: Manual — không có built-in config. Dùng thư viện (`next-intl`, `next-i18next` cho App Router).
- **`next/headers` (legacy) vs async `headers()` (Next.js 16)**: Breaking change.
- **Production config**: `output: 'standalone'`, `images.remotePatterns`, `trailingSlash`.
- **Environment variables**: `NEXT_PUBLIC_` prefix, server-only variables.

---
**Depth Level:** 3

---
**Anti-Patterns CẦN cover (4):**
- **Auth logic trong `proxy.ts`**: proxy.ts là cho network operations, không phải business logic. Dễ bypass (security CVEs đã xảy ra). → Staff đặt auth check trong route handlers hoặc server actions.
- **Copy `middleware.ts` từ Next.js 15 vào Next.js 16 không sửa**: `middleware.ts` vẫn hoạt động nhưng deprecated — và một số patterns bị CVE. → Staff migrate sang `proxy.ts` khi có thể.
- **i18n Pages Router config trong App Router project**: Không có tác dụng. → Staff dùng `next-intl` hoặc implement thủ công.
- **"NEXT_PUBLIC_ cho secret"**: Expose to client → Staff dùng server-only env, không prefix.

---
**Terminology CẦN dạy:**
- `middleware.ts` (Next.js 12-15): Edge-based middleware. Deprecated trong Next.js 16, thay bởi `proxy.ts`.
- `proxy.ts` (Next.js 16): Network-level proxy. Node.js runtime mặc định. **Không phải middleware.**
- `Edge Runtime`: Chạy tại CDN edge nodes, không phải server chính. Hạn chế: không có Node.js core modules.
- `matcher`: Config pattern cho middleware — route nào sẽ trigger middleware.
- `output: 'standalone'`: v12+, meaning: self-contained build for Docker.
- `NEXT_PUBLIC_`: v9.4+, meaning: env variable exposed to client.

---
**Overlap Lock:**
- Auth patterns trong proxy.ts/middleware.ts chi tiết: Thuộc về M7 — bài này chỉ architectural overview.
- Security CVEs và proxy bypass: Thuộc về M10 — KHÔNG ĐỀ CẬP chi tiết.
- App Router deployment: Thuộc về M13 — bài này chỉ Pages Router.
- Build Adapters API: Thuộc về M13 — KHÔNG ĐƯỢC đề cập.
- Turbopack build: Thuộc về M9 — bài này chỉ Webpack (Pages Router default).

---
**Production Scenarios:**
- Scenario: "Middleware chậm" → Root cause: Không dùng matcher, chạy cho static files
- Scenario: "Auth middleware không work ở production" → Root cause: Edge runtime không có Node.js crypto
- Scenario: "Env variable undefined ở client" → Root cause: Không có NEXT_PUBLIC_ prefix
- Scenario: "Image từ CDN không load" → Root cause: Chưa config remotePatterns

---
**Interview Questions:**
- "Middleware chạy ở đâu? Edge hay Node?" (Junior)
- "Khi nào KHÔNG nên dùng middleware?" (Mid)
- "NEXT_PUBLIC_ khác gì với server-only env?" (Junior)
- "Standalone output khác gì với default output?" (Mid)

---
**Legacy Bridge:**
- Legacy: `middleware.ts` → Modern: `proxy.ts` (v16)
- Migration strategy: M12.3, M10.1

---
**Risk Flag:**
- `middleware.ts` → `proxy.ts` rename dễ gây confusion giữa "tại sao đổi tên?" Cần clear rationale: tách biệt "proxy-level concerns" vs "application-level concerns".

---

### M11.3: Pages Router — State, Context & API Routes

**Level:** Senior
**Module:** M11
**Prerequisite:** M11.1, M11.2
**Unlocks:** M12.1
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Implement global state trong Pages Router với React Context
2. Handle authentication state giữa server và client
3. Implement API Routes với `pages/api/`
4. Persist state qua page transitions

---
**Topics:**
- **React Context trong Pages Router**: Provider ở `_app.tsx`.
- **Authentication patterns**: JWT in cookies, session storage, context provider.
- **State persistence**: `useEffect` + `localStorage`, zustand, redux.
- **Hydration mismatch**: Causes (random, Date, window object) và fixes.
- **API Routes**: `pages/api/hello.ts`, request/response handling.
- **`_app.tsx` vs `_document.tsx` lifecycle**.

---
**Depth Level:** 4

---
**Anti-Patterns CẦN cover (4):**
- **"Context cho mọi state"**: Performance issue → Staff dùng state management library cho complex state.
- **"localStorage trong render"**: Hydration mismatch → Staff dùng useEffect hoặc dynamic import.
- **"Auth check ở mọi page"**: Duplicate logic → Staff dùng HOC hoặc `_app.tsx` wrapper.
- **API Routes cho internal data fetching**: Tạo waterfall → Staff dùng getServerSideProps hoặc (modern) Server Component.

---
**Terminology CẦN dạy:**
- `hydration mismatch`: React concept, meaning: server render ≠ client render.
- `_app.tsx`: v9-v13, [DEPRECATED] in App Router, meaning: root component wrapper.
- `API Routes` (legacy): Pages Router convention. Vẫn hoạt động trong Next.js 16 nếu dùng Pages Router.

---
**Overlap Lock:**
- Server Component state: Thuộc về M4 — KHÔNG ĐƯỢC đề cập (bài này chỉ client state).
- Context trong App Router: Thuộc về M8.2 — bài này chỉ Pages Router.
- Zustand/Redux setup: Thuộc về M8.2 — KHÔNG ĐƯỢC đề cập.
- App Router patterns: Thuộc về M2 — bài này KHÔNG ĐƯỢC so sánh (tránh confuse).

---
**Production Scenarios:**
- Scenario: "Flash of unauthenticated content" → Root cause: Auth state chưa sync.
- Scenario: "Hydration mismatch warning" → Root cause: Date.now() trong render.

---
**Interview Questions:**
- "Làm sao tránh hydration mismatch với localStorage?" (Mid)
- "Auth flow trong Pages Router như thế nào?" (Junior)

---
**Legacy Bridge:**
- Legacy: `_app.tsx` Provider pattern → Modern: `app/layout.tsx` với context ở client component.
- Migration strategy: M12.2

---
**Risk Flag:**
- Học viên dễ stuck ở: Hydration mismatch khó debug → Cần exercise: "Fix 3 hydration errors"

---

### M12.1: Migration Strategy — From Pages to App Router

**Level:** Staff
**Module:** M12
**Prerequisite:** M7.1, M9.3, M10.1, M11.3
**Unlocks:** M12.2, M12.3, M12.4
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Thiết kế migration plan từ Pages Router sang App Router
2. Implement incremental migration (hybrid mode)
3. Sử dụng codemod và automation tools

---
**Topics:**
- **Migration planning**: Assessment, priority, timeline.
- **Incremental migration**: Pages + App Router song song (hybrid mode).
- **Codemod**: `@next/codemod` cho automated migration.
- **Breaking changes**: `getStaticProps` → `generateStaticParams`, `getServerSideProps` → async SC, `next/head` → Metadata API.
- **Testing during migration**: Regression testing strategy.

---
**Depth Level:** 5

---
**Anti-Patterns CẦN cover (3):**
- **Big bang migration**: Risk cao, dễ break. → Staff migrate incrementally.
- **Không test sau mỗi step**: Regression. → Staff test sau mỗi route migrated.
- **Copy paste code cũ sang mới**: Miss optimization opportunity. → Staff redesign khi migrate.

---
**Terminology CẦN dạy:**
- `Hybrid mode`: Pages + App Router cùng tồn tại.
- `Codemod`: Automated code transformation.

---
**Overlap Lock:**
- (No major overlaps — this is the integration module)

---
**Production Scenarios:**
- Scenario: "Migrate 200 pages từ Pages sang App" → Root cause: Need incremental plan.

---
**Interview Questions:**
- "Làm sao migrate incrementally?" (Senior)
- "Codemod có handle mọi case không?" (Staff)

---
**Legacy Bridge:**
- Đây chính là module bridge từ Legacy sang Modern.

---
**Risk Flag:**
- **[MERGE PRIORITY: GLM-5]** Migration là **#1 differentiator** trên thị trường (~40-50% JD yêu cầu). Cần capstone-level exercises.

---

### M12.2: [LEGACY_BRIDGE] Next.js 15 Breaking Changes

**Level:** Staff
**Module:** M12
**Prerequisite:** M12.1
**Unlocks:** M12.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Handle breaking changes từ Next.js 14 → 15 (async params, fetch no-store default)
2. Handle breaking changes từ Next.js 15 → 16 (proxy.ts, Turbopack default, async APIs)
3. Write migration scripts cho automated upgrade

---
**Topics:**
- **Next.js 15 breaking changes**:
  - `fetch` default: `force-cache` → `no-store`
  - `cookies()`, `headers()`, `params`: sync → async
  - `next/head` → Metadata API enforcement
- **Next.js 16 breaking changes**:
  - `middleware.ts` → `proxy.ts`
  - webpack → Turbopack default
  - `'use cache'` thay `unstable_cache`
  - `next lint` deprecated
- **Codemod**: `@next/codemod` cho v15 → v16 migration.
- **Migration scripts**: Viết scripts để automate breaking changes.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (3):**
- **Upgrade mà không đọc release notes**: Miss breaking changes. → Staff luôn đọc upgrade guide.
- **Manual fix từng file**: Tốn thờii gian. → Staff dùng codemod + custom scripts.
- **Không test sau upgrade**: Regression. → Staff có comprehensive test suite trước upgrade.

---
**Terminology CẦN dạy:**
- `Codemod`: Automated code transformation.
- `Breaking change`: Change làm code cũ không work.
- `Deprecation`: Feature vẫn work nhưng sẽ bị remove.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "Upgrade lên v16, app crash" → Root cause: Không chạy codemod cho async params.

---
**Interview Questions:**
- "Next.js 15 có những breaking changes nào?" (Senior)
- "Làm sao migrate từ v15 lên v16?" (Staff)

---
**Legacy Bridge:**
- Legacy: sync params, default cache → Modern: async params, no-store default
- Migration strategy: Chính bài này.

---
**Risk Flag:**
- **[MERGE NOTE: Claude phản biện]** Claude chọn v15 làm LEGACY_CORE nhưng GLM-5 + Kimi chọn v12. Resolution: LEGACY_CORE = v12-14 (Pages Router), [LEGACY_BRIDGE] = v15 (transition breaking changes). Cả hai đều được cover nhưng ở module khác nhau.

---

### M12.3: Migration — Specific Pattern Transforms

**Level:** Staff
**Module:** M12
**Prerequisite:** M12.2
**Unlocks:** M12.4
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Transform `getStaticProps` → `generateStaticParams` + `fetch`
2. Transform `getServerSideProps` → async Server Component
3. Transform API Routes → Route Handlers
4. Transform `next/head` → Metadata API

---
**Topics:**
- **`getStaticProps` → `generateStaticParams`**: Build-time params generation.
- **`getStaticProps` + `fetch`**: Static data fetching pattern.
- **`getServerSideProps` → async SC**: Request-time data fetching.
- **`pages/api/` → `app/api/`**: API Routes → Route Handlers.
- **`next/head` → `generateMetadata` / `metadata` object.
- **`_app.tsx` → `app/layout.tsx`**: Global wrapper migration.
- **`middleware.ts` → `proxy.ts`**: Network proxy migration.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (2):**
- **1:1 mapping không redesign**: Chỉ copy pattern cũ sang mới. → Staff tận dụng App Router benefits.
- **Không remove legacy code**: Code cũ vẫn còn trong repo. → Staff clean up sau migration.

---
**Terminology CẦN dạy:**
- (Pattern-specific, no new terminology)

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "getStaticProps chuyển sang App Router không work" → Root cause: Không dùng generateStaticParams.

---
**Interview Questions:**
- "`getStaticProps` tương đương gì trong App Router?" (Senior)
- "API Route khác Route Handler thế nào?" (Mid)

---
**Legacy Bridge:**
- Chính là module bridge.

---
**Risk Flag:**
- Mỗi pattern transform cần explicit before/after code comparison.

---

### M12.4: Turbopack Migration & Build System

**Level:** Staff
**Module:** M12
**Prerequisite:** M9.2, M12.3
**Unlocks:** M13
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Migrate custom webpack config sang Turbopack
2. Handle webpack plugins không có Turbopack equivalent
3. Optimize build output với Turbopack

---
**Topics:**
- **Webpack → Turbopack migration**: Config mapping.
- **Custom plugins**: Viết Turbopack plugin nếu không có equivalent.
- **Build optimization**: Code splitting, tree shaking với Turbopack.
- **Turbopack config**: `next.config.ts` — top-level `turbopack` key.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (2):**
- **Force webpack trong v16**: Không tận dụng Turbopack. → Staff migrate khi có thể.
- **Không test build sau migration**: Build fail production. → Staff test build CI/CD.

---
**Terminology CẦN dạy:**
- `Turbopack plugin`: Plugin system của Turbopack (khác webpack plugin).

---
**Overlap Lock:**
- Turbopack basics: Thuộc về M9.2 — bài này chỉ migration.

---
**Production Scenarios:**
- Scenario: "Custom webpack plugin không work với Turbopack" → Root cause: Không có equivalent.

---
**Interview Questions:**
- "Làm sao migrate webpack plugin sang Turbopack?" (Staff)

---
**Legacy Bridge:**
- Legacy: webpack → Modern: Turbopack
- Migration strategy: Chính bài này.

---
**Risk Flag:**
- Turbopack plugin ecosystem chưa mature — cần check compatibility matrix.

---

### M13.1: Deployment on Vercel

**Level:** Staff
**Module:** M13
**Prerequisite:** M8, M9, M10, M12
**Unlocks:** M13.2, M13.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Deploy Next.js 16 app lên Vercel
2. Configure Vercel-specific features (Analytics, Speed Insights, OG Image)
3. Handle environment variables, domains, previews

---
**Topics:**
- **Vercel deployment**: Zero-config deployment.
- **Environment variables**: Vercel dashboard config.
- **Preview deployments**: Auto-deploy cho mỗi PR.
- **Analytics**: Vercel Analytics, Speed Insights.
- **Edge Config**: Feature flags với Vercel Edge Config.
- **Image Optimization**: Vercel Image Optimization CDN.

---
**Depth Level:** 4

---
**Anti-Patterns CĂN cover (2):**
- **Hardcode env variables trong code**: Không secure. → Staff dùng Vercel dashboard.
- **Không dùng preview deployments**: Test trực tiếp production. → Staff dùng preview cho QA.

---
**Terminology CẦN dạy:**
- `Preview deployment`: Auto-deploy cho mỗi PR.
- `Edge Config`: Vercel feature flag service.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- (Standard — covered in topics)

---
**Interview Questions:**
- "Vercel deployment khác self-hosted thế nào?" (Mid)

---
**Legacy Bridge:**
- Legacy: `next.config.js` deploy → Modern: `next.config.ts` + Vercel native
- Migration strategy: M12.1

---
**Risk Flag:**
- Vendor lock-in concern — cần mention self-hosted alternative.

---

### M13.2: Self-Hosted Deployment & Docker

**Level:** Staff
**Module:** M13
**Prerequisite:** M13.1
**Unlocks:** M13.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Dockerize Next.js 16 app với standalone output
2. Deploy lên các platform khác (Railway, Fly.io, AWS)
3. Handle reverse proxy, SSL, load balancing

---
**Topics:**
- **Dockerfile**: Multi-stage build cho Next.js.
- **Standalone output**: `output: 'standalone'` cho minimal image.
- **Reverse proxy**: Nginx config cho Next.js.
- **SSL/TLS**: HTTPS setup.
- **Load balancing**: Multiple instances.
- **Platform-specific**: Railway, Fly.io, AWS ECS.

---
**Depth Level:** 4

---
**Anti-Patterns CĂN cover (3):**
- **Build trên server**: Không reproducible → Staff build ở CI, deploy artifact.
- **Không dùng standalone output**: Image lớn. → Staff dùng standalone.
- **Expose `.env` trong Docker image**: Security leak. → Staff dùng runtime env variables.

---
**Terminology CẦN dạy:**
- `Standalone output`: Self-contained Next.js build.
- `Multi-stage build`: Docker pattern để minimize image size.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "Docker image 2GB" → Root cause: Không dùng multi-stage + standalone.

---
**Interview Questions:**
- "Làm sao Dockerize Next.js?" (Senior)
- "Standalone output khác gì với default output?" (Mid)

---
**Legacy Bridge:**
- Legacy: `output: 'serverless'` → Modern: `output: 'standalone'`
- Migration strategy: M12.1

---
**Risk Flag:**
- Docker config phức tạp → Cần template Dockerfile sẵn.

---

### M13.3: CI/CD, Build Adapters & Infrastructure

**Level:** Staff
**Module:** M13
**Prerequisite:** M13.2
**Unlocks:** M14
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Setup CI/CD pipeline cho Next.js (GitHub Actions, etc.)
2. Configure Build Adapters API (Next.js 16)
3. Implement blue-green deployment

---
**Topics:**
- **CI/CD**: GitHub Actions cho Next.js — lint, test, build, deploy.
- **Build Adapters API**: Next.js 16 feature để customize build output.
- **Blue-green deployment**: Zero-downtime deployment.
- **Health checks**: Endpoint để verify deployment.
- **Rollback strategy**: Rollback khi deployment fail.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (2):**
- **Deploy không qua CI/CD**: Manual deploy, không reproducible. → Staff dùng CI/CD.
- **Không có rollback plan**: Deployment fail → downtime. → Staff có rollback strategy.

---
**Terminology CẦN dạy:**
- `Build Adapters API`: Next.js 16 feature để customize build output.
- `Blue-green deployment`: Zero-downtime deployment strategy.

---
**Overlap Lock:**
- (No major overlaps)

---
**Production Scenarios:**
- Scenario: "Deploy fail, downtime 30 phút" → Root cause: Không có rollback.

---
**Interview Questions:**
- "Build Adapters API là gì?" (Staff)
- "Làm sao zero-downtime deploy?" (Staff)

---
**Legacy Bridge:**
- Legacy: Custom build scripts → Modern: Build Adapters API
- Migration strategy: M12.4

---
**Risk Flag:**
- Build Adapters API là v16 feature — không available trong older versions.

---

### M14.1: System Design with Next.js

**Level:** Staff
**Module:** M14
**Prerequisite:** M0–M13
**Unlocks:** M14.2, M14.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Thiết kế system architecture với Next.js
2. Evaluate trade-offs giữa các rendering strategies
3. Make architectural decisions cho enterprise projects

---
**Topics:**
- **Architecture patterns**: Monolith, micro-frontend, BFF.
- **Rendering strategy selection**: SSR, SSG, ISR, PPR, CSR — khi nào dùng cái nào.
- **Scalability**: Horizontal scaling, caching layers, CDN.
- **Micro-frontend với Next.js**: Module Federation, Multi-Zones.
- **Enterprise patterns**: Multi-tenant, white-label, i18n at scale.

---
**Depth Level:** 5

---
**Anti-Patterns CĂN cover (2):**
- **One-size-fits-all rendering**: Dùng 1 strategy cho cả app. → Staff chọn rendering per-route.
- **Over-engineering**: Micro-frontend cho app nhỏ. → Staff đánh giá thực sự cần không.

---
**Terminology CẦN dạy:**
- `BFF`: Backend for Frontend.
- `Micro-frontend`: Independent deployable frontend modules.
- `Multi-tenant`: Single app serve multiple customers.

---
**Overlap Lock:**
- (Capstone module — integrates all previous)

---
**Production Scenarios:**
- Scenario: "App chậm khi scale" → Root cause: Wrong rendering strategy + no CDN.

---
**Interview Questions:**
- "Thiết kế e-commerce site với Next.js?" (Staff)
- "Khi nào dùng PPR thay vì SSR?" (Staff)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- System design là subjective — cần present trade-offs, không có "đáp án đúng".

---

### M14.2: Capstone — Enterprise Migration Project (Part 1)

**Level:** Staff
**Module:** M14
**Prerequisite:** M14.1
**Unlocks:** M14.3
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Thực hiện migration từ Next.js 12 (Pages Router) lên Next.js 16 (App Router)
2. Apply tất cả patterns đã học trong context thực tế
3. Write migration documentation

---
**Topics:**
- **Project setup**: Repo Next.js 12 cũ (e-commerce enterprise).
- **Assessment**: Đánh giá codebase, identify migration priority.
- **Phase 1**: Setup hybrid mode, migrate landing pages.
- **Phase 2**: Migrate product pages (getStaticProps → generateStaticParams + fetch).
- **Phase 3**: Migrate API Routes → Route Handlers.
- **Documentation**: Write migration guide cho team.

---
**Depth Level:** 5

---
**Anti-Patterns**: Không dạy anti-patterns ở capstone — học viên tự discover.

---
**Interview Questions:**
- "Bạn sẽ migrate codebase 200 pages thế nào?" (Staff)

---
**Legacy Bridge:** N/A (đây là migration itself)

---
**Risk Flag:**
- Capstone scope lớn — cần clear milestone và time allocation.

---

### M14.3: Capstone — Enterprise Migration Project (Part 2)

**Level:** Staff
**Module:** M14
**Prerequisite:** M14.2
**Unlocks:** —
**Parallel-safe:** Không

---
**Learning Objectives:**
1. Hoàn thành migration với advanced features
2. Implement PPR, caching, optimization
3. Deploy và monitor

---
**Topics:**
- **Phase 4**: Migrate auth, middleware → proxy.ts.
- **Phase 5**: Implement PPR cho product pages.
- **Phase 6**: Setup caching strategy (`'use cache'`, cacheTag, revalidateTag).
- **Phase 7**: Performance optimization (React Compiler, image optimization).
- **Phase 8**: Testing, security audit, deployment.
- **Observability**: OpenTelemetry trace được Data Cache miss/hit.

---
**Depth Level:** 5

---
**Anti-Patterns**: Không dạy — học viên tự discover.

---
**Interview Questions:**
- "Bạn đo lường migration success thế nào?" (Staff)

---
**Legacy Bridge:** N/A

---
**Risk Flag:**
- Capstone cần realistic legacy codebase — cần prepare sample repo trước.

---

## PHẦN 6: ANTI-OVERLAP AUDIT TOÀN KHÓA

**[MERGE SOURCE: Kimi (PHẦN 6) — giữ nguyên format, điều chỉnh module numbers theo merge]**

- **Concept: "Server-Side Rendering (SSR)"**
  - Ownership: M4.1 (dạy chính ở depth 5 — RSC rendering modern)
  - M11.1 (Legacy) chỉ được reference như sau: Nhắc là `getServerSideProps` tạo HTML blocking, đối chiếu với RSC streaming.
  - M0.1 KHÔNG ĐƯỢC đề cập chi tiết, chỉ dùng như marketing term.

- **Concept: "Routing / Layouts"**
  - Ownership: M1.1 (App Router) & M11.1 (Pages Router)
  - M4.1 chỉ được reference: Giả định học viên đã biết nested layout, dùng layout để compose Client/Server components.
  - M7.1 KHÔNG ĐƯỢC đề cập routing, chỉ focus auth intercept logic.

- **Concept: "Caching invalidation"**
  - Ownership: M5.1 (4 Layers of Caching) & M5.2 (`'use cache'` implementation)
  - M6.1 (Server Actions) chỉ được reference: Gọi `revalidatePath` ở cuối action, không giải thích cơ chế cache tầng dưới.
  - M5.3 (PPR) KHÔNG ĐƯỢC đề cập cache invalidation, chỉ dùng output của cache (static shell).

- **Concept: "Data Fetching"**
  - Ownership: M2.1 (Server Components) & M2.2 (Client-side)
  - M4.1 KHÔNG ĐƯỢC fetch data, chỉ hardcode props (focus SC/CC boundary).
  - M6.1 chỉ được reference: Mention Server Actions cho mutations, không dạy fetch patterns.

- **Concept: "Authentication"**
  - Ownership: M7.1 (Architecture) & M6.3 (SA Auth)
  - M10.2 (Security) chỉ được reference: Security headers + CSRF/XSS, không dạy auth flow.
  - M7.2 (proxy.ts) KHÔNG ĐƯỢC đề cập auth logic — chỉ architectural overview.

- **Concept: "Server Actions"**
  - Ownership: M6.1 (Fundamentals) & M6.2 (Advanced)
  - M2.3 (Route Handlers) chỉ được reference: Distinguish SA vs RH.
  - M5.x KHÔNG ĐƯỢC đề cập SA — chỉ focus caching.

---

## PHẦN 7: TERMINOLOGY EVOLUTION MAP TOÀN KHÓA

**[MERGE SOURCE: Kimi (PHẦN 7) — giữ format bảng, bổ sung từ Claude + GLM-5]**

| Term | Era đầu | Era cuối | Status | Dạy ở bài nào | Nhắc lại ở bài nào |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SSR** | v1 (getInitialProps) | v16 (RSC) | Đổi nghĩa hoàn toàn | M4.1 (Modern) | M11.1 (Legacy) |
| **SSG** | v9 (getStaticProps) | v16 (force-cache) | Đổi tên thành Full Route Cache | M5.1 | M11.1 |
| **ISR** | v9 (unstable_revalidate) | v16 (revalidateTag) | Hợp nhất vào Data Cache | M5.1 | M11.1 |
| **API Routes** | v9 (/pages/api) | v16 (Route Handlers) | Bị thay thế | M2.3 | M11.1 |
| **Hydration** | v9 (CSR setup) | v16 (RSC payload) | Vẫn dùng nhưng tự động | M4.1 | M5.3 |
| **Middleware** | v12 (middleware.ts) | v16 (proxy.ts) | Đổi tên + đổi runtime | M7.2 | M11.2 |
| **Bundler** | v1 (webpack) | v16 (Turbopack default) | Thay thế hoàn toàn | M0.3 | M9.2 |
| **next/head** | v1 | v16 (Metadata API) | Bị thay thế | M1.5 | M11.1 |
| **next/link** | v1 | v16 (incremental prefetch) | Cải tiến, vẫn dùng | M1.4 | M3.2 |
| **next/image** | v10 | v16 (v3) | Cải tiến, vẫn dùng | M3.2 | M9.1 |
| **Caching** | v13 (implicit) | v16 ('use cache' explicit) | Paradigm shift | M5.1 | M5.2 |
| **Font Loading** | v10 (next/font) | v16 (auto-optimize) | Cải tiến, vẫn dùng | M0.3 | M9.1 |

---

## PHẦN 8: CAPSTONE / FINAL PROJECT SCOPE

**Module M14: Capstone — Enterprise E-commerce Migration**

**[MERGE SOURCE: Blend từ GLM-5 (scenario chi tiết) + Claude (architectural scope) + Kimi (format)]**

- **Scenario:** Học viên tiếp nhận 1 repo Next.js 12 (Pages Router) của 1 công ty Enterprise. Codebase đang dùng `getServerSideProps` cho mọi page, API routes phình to, build time 20 phút. Học viên phải refactor lên Next.js 16.2.9 App Router chuẩn bị deploy lên Edge.

- **Yêu cầu tích hợp:**
  1. **Migration**: Dùng codemod, chia nhỏ route. Không được break tính năng cũ trong quá trình migrate (sử dụng App Router và Pages Router song song).
  2. **RSC Architecture**: Tách Dashboard (Client-heavy) ra khỏi Product List (Server-heavy). Áp dụng Composition pattern để minimize `'use client'` directives.
  3. **Caching Strategy**: Áp dụng PPR (Partial Prerendering) cho Product Detail page (phần shell tĩnh, phần giỏ hàng dynamic). Implement `'use cache'` với proper `cacheTag`/`cacheLife`.
  4. **API Layer**: Chuyển API Routes sang Route Handlers, deploy logic check stock lên Edge Runtime.
  5. **Auth & Security**: Migrate `middleware.ts` auth sang `proxy.ts` + app-level auth checks. Implement RBAC.
  6. **Performance**: Apply React Compiler, optimize LCP images, setup Turbopack config.
  7. **Observability**: Cài đặt OpenTelemetry trace được Data Cache miss/hit. Setup Sentry error tracking.
  8. **Deployment**: Deploy lên Vercel với preview environments. Viết migration documentation.

- **Deliverables:**
  - Migrated codebase (Next.js 12 → 16.2.9)
  - Migration documentation
  - Performance audit report (before/after CWV)
  - Architecture decision records (ADRs)

---

## PHẦN 9: RISK FLAGS TOÀN KHÓA

**[MERGE SOURCE: Kimi (format + thinking mode) + Claude (content) + GLM-5 (market-specific risks)]**

1. **Tụt hứng (boring / too abstract):**
   - *Điểm:* Module M0 giới thiệu về Meta-Framework paradigm.
   - *Điều chỉnh:* Bỏ lý thuyết vô bổ. Đưa thẳng 1 lỗi `CORS` của Create React App và dùng Next.js API Route fix trong 5 phút để chứng minh pain-point. Cho học viên deploy lên Vercel trong 15 phút để có quick win.

2. **Quá tải (too much too fast):**
   - *Điểm:* Module M5 (Caching Architecture) - 4 lớp cache nhồi trong 1 buổi.
   - *Điều chỉnh:* Bắt buộc học viên mở DevTools Network tab, filter `RSC` payload. Chia làm 2 bài: M5.1 (Server-side caches) và M5.2 (Client-side Router Cache + `'use cache'` implementation). Không dạy lý thuyết if không có DevTools mở sẵn.

3. **Hiểu nhầm (counter-intuitive concept):**
   - *Điểm:* Module M4 (RSC Boundary). Học viên mặc định "Component nào import thư viện là Client, còn lại là Server", dẫn đến lạm dụng `'use client'`.
   - *Điều chỉnh:* Tạo 1 bài tập bắt buộc: Build 1 trang có Analytics tracking, Form state, và Database query. Yêu cầu học viên không được dùng quá 1 `'use client'` directive. Buộc họ phải dùng Composition pattern (children prop) để hiểu sâu Network Boundary.

4. **Lây mental model cũ (Pages Router "infection"):**
   - *Điểm:* Module M11 (Pages Router Legacy). Học viên quen App Router rồi học Pages Router, sau đó quay lại App Router dễ bị confuse.
   - *Điều chỉnh:* Explicit closure sau M11: "Module này kết thúc Pages Router thinking. Từ giờ trở đi là Modern-only." Không mix code Pages + App trong cùng 1 exercise sau M11.

5. **Migration stuck (upgrade paralysis):**
   - *Điểm:* Module M12 (Migration). Học viên thấy quá nhiều breaking changes, nản chí.
   - *Điều chỉnh:* Cung cấp codemod scripts sẵn, template migration checklist, và before/after code comparisons. Mỗi bài tập chỉ focus 1 breaking change.

6. **Cache confusion (4 layers overwhelm):**
   - *Điểm:* Module M5.1 (4 Cache Layers). Học viên không phân biệt được 4 tầng.
   - *Điều chỉnh:* Cần diagram vẽ sequence request đi qua 4 tầng, bài tập debug cache miss/hit bằng DevTools Network tab. Mỗi layer có 1 màu riêng trong diagram.

7. **Security blind spots:**
   - *Điểm:* Module M7 (Auth) + M10 (Security). Học viên coi security là "optional".
   - *Điều chỉnh:* Mỗi auth exercise phải có "attack scenario" — học viên phải tìm cách bypass chính code mình viết.

8. **Turbopack migration blocker:**
   - *Điểm:* Module M9.2 (Turbopack). Custom webpack plugins không có Turbopack equivalent — học viên stuck.
   - *Điều chỉnh:* Cung cấp compatibility matrix, alternative plugins, và hướng dẫn viết custom Turbopack plugin nếu cần.

---

## PHẦN 10: MERGE LOG

### Conflict Resolution Summary

| # | Conflict | Bible 1 (Claude) | Bible 2 (Kimi) | Bible 3 (GLM-5) | **Resolution** | Lý do |
|---|----------|-----------------|----------------|-----------------|----------------|-------|
| 1 | **Số module** | 14 modules (M0-M13 + Capstone M14) | 13 modules (M0-M12) | 10 modules (M0-M9) | **14 modules (M0-M14)** | Theo Claude's architectural reasoning (3 eras × 5 levels = 14-16 modules). GLM-5's 10 modules không đủ để cover cả 3 eras + capstone. Kimi's 13 modules thiếu Testing module riêng. |
| 2 | **LEGACY_CORE version** | v15.x ([LEGACY_CORE]) | v12-14 (Pages Router) | v12 (Pages Router) | **v12-14 làm [LEGACY_CORE]**, v15 làm [LEGACY_BRIDGE] | Theo GLM-5 (real-time JD data): v12-14 vẫn chiếm 25-30% JD enterprise. Claude chọn v15 vì "App Router era peak" nhưng GLM-5 chứng minh enterprise codebase vẫn ở v12-14. v15 breaking changes được cover ở M12.2 [LEGACY_BRIDGE]. |
| 3 | **Module ordering** | App Router first (M1), Legacy sau (M4) | Pages Router first (M1), App Router sau (M2) | Modern first (M0-M7), Legacy sau (M8) | **App Router first (M1-M9), Legacy sau (M11)** | Theo Claude (dependency graph) + GLM-5 (market needs). Kimi's "Pages first" đi ngược lại Modern-first approach. Học viên nên học App Router (target) trước, Pages Router (legacy) sau. |
| 4 | **RSC placement** | Phân tán vào M1.2 + M2.1 | Tách thành M3 riêng (RSC Deep Dive) | Tách thành M2 riêng (RSC Mental Model) | **Tách RSC thành M4 riêng** | Theo Kimi + GLM-5: RSC là "#1 hiểu sai" (GLM-5: 80% dev viết code theo tư duy Pages Router). Cần module riêng để drill đủ sâu. |
| 5 | **Caching module scope** | M5 = Cache Architecture (mental model + implementation + PPR) | M4 = Data Fetching & Caching (5 lessons) | M4 = Caching Architecture (deep dive) | **Split M5 = M5.1 (Mental Model) + M5.2 (`'use cache'`) + M5.3 (PPR)** | Theo Kimi's anti-overlap logic: "4 cache layers nhồi trong 1 buổi = quá tải". Claude's M5 quá lớn. Đã split theo Kimi + bổ sung PPR từ GLM-5. |
| 6 | **JD % cho "migrate experience"** | ~20% | ~40-50% | ~60% | **~40-50%** | GLM-5 có real-time search data cao nhất (~60%) nhưng có thể overestimate. Claude (~20%) có thể underestimate. Chọn middle ground ~40-50% với note **HIGH DEMAND, LOW SUPPLY**. |
| 7 | **Testing module** | M10 (Testing Strategy) — Senior level | Không có module Testing riêng | Không có module Testing riêng | **Giữ M10 (Testing Strategy)** | Theo Claude's architectural vision: Testing là Senior-level skill không thể thiếu. Kimi + GLM-5 bỏ sót → đã bổ sung. |
| 8 | **`after()` API placement** | M6.x (Server Actions) | Không mention | Không mention | **M10.3 riêng** | Theo Claude: `after()` là API quan trọng cho production patterns. Kimi + GLM-5 bỏ sót → đã bổ sung vào M10 (Senior). |
| 9 | **Terminology Map format** | Không có PHẦN 7 | Có PHẦN 7 (bảng chi tiết) | Không có PHẦN 7 | **Giữ PHẦN 7 từ Kimi, bổ sung từ Claude** | Kimi có format structured nhất cho Terminology Map. Bổ sung terms từ Claude (Turbopack, next/head, font loading...). |
| 10 | **Anti-Overlap Audit** | Không có PHẦN 6 | Có PHẦN 6 (chi tiết) | Không có PHẦN 6 | **Giữ PHẦN 6 từ Kimi, adjust module numbers** | Kimi có anti-overlap logic rõ ràng nhất. Đã adjust module numbers theo merged structure. |
| 11 | **Proxy.ts vs Middleware.ts** | M7.2 + M11.2 | M9.1 (proxy.ts) | M5 (Middleware/Edge) | **M7.2 riêng (proxy.ts migration) + M11.2 (legacy middleware)** | Theo Claude (dependency graph): proxy.ts liên quan auth (M7) nên đặt ở M7.2. Legacy middleware ở M11.2 (Pages Router). GLM-5 đặt ở M5 không hợp lý về dependency. |
| 12 | **Capstone scope** | M14 (System Design + Capstone) | M12 (Capstone) | M9 (Capstone) | **M14.1 (System Design) + M14.2-14.3 (Capstone 2 phần)** | Theo Claude (architectural vision dài hạn): Capstone cần đủ lớn để cover migration end-to-end. GLM-5's M9 quá sớm (chưa học đủ prerequisites). Kimi's M12 không có System Design module riêng. |

### Topics từ Bible 2/3 được thêm vào Bible 1

| Topic | Từ Bible nào | Thêm vào module |
|---|---|---|
| RSC Deep Dive module riêng | Kimi (M3) + GLM-5 (M2) | M4 (RSC Deep Dive) |
| [LEGACY_BRIDGE] v15 breaking changes | GLM-5 (classification) | M12.2 |
| `after()` API | Claude (M6.x) | M10.3 |
| Testing Strategy module | Claude (M10) | M10.1 |
| File Conventions & Routing Mental Model | Kimi (M0.4) | M0.4 |
| React Prerequisites for Next.js | Kimi (M0.3) | M0.3 (đã merge vào M0.3 Toolchain) |
| Anti-Overlap Audit (PHẦN 6) | Kimi | PHẦN 6 |
| Terminology Map (PHẦN 7) | Kimi | PHẦN 7 |
| Ecosystem & Tooling (pnpm, ESLint config) | Kimi (M0.5) | M0.5 |
| "Match feature to version" flashcards | Kimi (M0.2 Risk Flag) | M0.2 |
| Capstone — OpenTelemetry trace | GLM-5 (M9) | M14.3 |
| Capstone — RBAC requirement | GLM-5 (M9) | M14.2 |
| **#1 differentiator = migration** | GLM-5 (JD analysis) | M12 (Migration Engineering) |
| 80% dev hiểu sai RSC | GLM-5 (market gap) | M4.1 Risk Flag |

### Topics từ Bible 1 bị cắt bỏ vì Bible 2/3 chứng minh không cần thiết

| Topic | Bible 1 (Claude) | Lý do cắt bỏ |
|---|---|---|
| M3 (Styling) 4 lessons → rút xuống 2 | Claude có M3.1-M3.2 | Kimi + GLM-5: Styling không phải core differentiator, rút gọn để nhường thờii gian cho RSC (M4) và Caching (M5) |
| M4 (Pages Router) ở Junior level | Claude đặt M4 ở Junior | GLM-5: Pages Router là Senior-level concern (enterprise maintain). Đã chuyển lên M11 (Senior). |
| M7 (Advanced Routing) bao gồm Auth | Claude gộp Auth + Routing | Kimi: Auth nên tách riêng (M7) và Advanced Routing riêng (M8). Đã tách. |
| v15.x làm [LEGACY_CORE] chính | Claude's M2.4 | GLM-5: v12-14 vẫn chiếm production enterprise nhiều hơn. v15 → [LEGACY_BRIDGE]. |

---

## PHẦN 11: VERIFICATION CHECKLIST

### Những gì cần double-check khi chạy Phase 1-3

**Phase 1 (Research):**
- [ ] Verify Next.js 16.2.9 là latest stable (check https://nextjs.org/blog)
- [ ] Verify `proxy.ts` documentation từ Vercel (có thể còn experimental)
- [ ] Verify Turbopack plugin ecosystem — list available plugins
- [ ] Verify React Compiler stability và compatibility matrix
- [ ] Verify `'use cache'` directive behavior (có thể thay đổi giữa minor versions)
- [ ] Check `@next/codemod` latest version và supported transforms
- [ ] Verify TanStack Query v5 integration với Next.js 16 (có breaking changes?)

**Phase 2 (Skeleton):**
- [ ] Test tất cả code examples với Next.js 16.2.9 (không phải 15.x)
- [ ] Verify `create-next-app` scaffold output matches current version
- [ ] Test async `params` behavior — ensure examples use `await params`
- [ ] Verify `'use cache'` syntax — không nhầm với `'use client'` / `'use server'`
- [ ] Test cache debugging với DevTools — ensure `x-nextjs-cache` header visible
- [ ] Verify `proxy.ts` hoạt động đúng (khác `middleware.ts`)
- [ ] Test codemod scripts trên sample codebase

**Phase 3 (Polish):**
- [ ] Review tất cả Overlap Locks — ensure không có topic bị dạy ở 2 bài
- [ ] Check Depth Level consistency — Fresher ≤ 3, Junior ≤ 4, Mid/Senior/Staff = 4-5
- [ ] Verify Risk Flags có mitigation strategy
- [ ] Ensure capstone codebase (Next.js 12) thực sự run được
- [ ] Test tất cả exercise instructions — học viên có thể follow không?

### Assumptions có thể sai

| Assumption | Nguồn | Rủi ro nếu sai | Mitigation |
|---|---|---|---|
| Next.js 16.2.9 là stable target | Claude (knowledge cutoff mid-2026) | Có thể có 16.3+ với breaking changes | Check Vercel blog trước Phase 1 |
| `proxy.ts` replace `middleware.ts` hoàn toàn | Claude + GLM-5 | Có thể Vercel giữ cả 2 | Check Next.js 16 docs — nếu middleware.ts vẫn supported, ghi chú |
| Turbopack default từ v16 | Claude | Có thể vẫn cần opt-in | Verify với `create-next-app` output |
| React Compiler stable | Claude + GLM-5 | Có thể vẫn có edge cases | Có fallback manual memoization patterns |
| `'use cache'` directive syntax | Claude | Có thể thay đổi tên | Track RFC và experimental docs |
| ~40-50% JD yêu cầu migration | GLM-5 (real-time search) | Search bias, overestimate | Cross-reference với nhiều job boards |
| Next.js 12 = LEGACY_CORE | GLM-5 + Kimi | Enterprise có thể đã lên v14 | Adjust LEGACY_CORE range nếu data cho thấy v14 phổ biến hơn |
| CSS-in-JS library compatibility | Claude + Kimi | Libraries update nhanh | Verify compatibility matrix trước mỗi khóa |

---

## PHẦN 12: AI ASSIGNMENT FOR PHASE 1-3

### Phase 1: Research (Data Gathering & Verification)

| Module | AI khuyến nghị | Lý do |
|---|---|---|
| M0 (Orientation) | **GLM-5** | Cần real-time data về Next.js latest releases, version history verification |
| M1 (App Router) | **Claude** | 1M context, reasoning sâu về routing architecture |
| M2 (Data Fetching) | **Claude** | Complex async patterns, waterfall analysis cần deep reasoning |
| M3 (Styling) | **GLM-5** | Cần real-time data về CSS-in-JS library compatibility, Tailwind v4 latest |
| M4 (RSC Deep Dive) | **Claude** | Counter-intuitive concepts cần deep architectural reasoning |
| M5 (Caching) | **Claude** | 4 cache layers + version history cần 1M context để track tất cả |
| M6 (Server Actions) | **Claude** | Mutation patterns, progressive enhancement cần deep reasoning |
| M7 (Auth, Proxy, Edge) | **GLM-5** | Cần real-time CVE data, proxy.ts latest docs, Edge runtime updates |
| M8 (Advanced Routing) | **Claude** | Parallel/Intercepting Routes phức tạp cần deep reasoning |
| M9 (Performance) | **GLM-5** | Cần real-time CWV benchmarks, React Compiler latest status |
| M10 (Testing, Security) | **Kimi** | Structured output tốt cho test cases, security checklist |
| M11 (Pages Router Legacy) | **Claude** | Legacy patterns cần deep historical reasoning |
| M12 (Migration) | **GLM-5** | Cần real-time codemod scripts, breaking changes latest updates |
| M13 (Deployment) | **GLM-5** | Cần real-time platform-specific configs, Build Adapters API docs |
| M14 (Capstone) | **Claude** | System design cần broad architectural vision |

### Phase 2: Skeleton (Content Drafting)

| Module | AI khuyến nghị | Lý do |
|---|---|---|
| M0-M1 (Fresher) | **Kimi** | Structured output tốt nhất cho format consistency, anti-patterns, risk flags |
| M2-M5 (Junior-Mid) | **Claude** | Complex technical content cần deep reasoning, accurate code examples |
| M6-M9 (Mid-Senior) | **Claude** | Advanced patterns, architectural decisions cần 1M context |
| M10 (Testing/Security) | **Kimi** | Thinking mode phát hiện stuck point, test case design tốt |
| M11-M13 (Legacy/Deploy) | **Claude** | Historical context + infrastructure reasoning cần depth |
| M14 (Capstone) | **Claude** | Long-form capstone design cần broad context |

### Phase 3: Polish (Review & Refinement)

| Task | AI khuyến nghị | Lý do |
|---|---|---|
| Overlap Lock verification | **Kimi** | Anti-overlap logic rõ ràng nhất, phát hiện duplicate topics tốt |
| Depth Level consistency check | **Kimi** | Structured output kiểm tra depth level hiệu quả |
| Code example accuracy | **Claude** | Deep reasoning kiểm tra code correctness |
| Market relevance check | **GLM-5** | Real-time web search verify JD relevance |
| Risk Flag completeness | **Kimi** | Thinking mode phát hiện stuck point, confusing concepts tốt nhất |
| Interview question quality | **Claude** | Architectural vision cho senior/staff level questions |
| Terminology Map accuracy | **Kimi** | Structured format verification |
| Final cross-reference check | **Tất cả 3 AI (ensemble)** | Mỗi AI check phần ưu thế của mình |

### Summary: AI Selection Matrix

| AI | Context | Ưu thế | Best for |
|---|---|---|---|---|
| **Claude** | 1M tokens | Deep architectural reasoning, long-form content, historical context | M1-M9 content, M14 capstone, system design |
| **Kimi** | 262K tokens | Structured output, anti-overlap logic, risk flag detection, format consistency | PHẦN 6-7, M10, Overlap Lock, Risk Flags, Fresher-level content |
| **GLM-5** | Real-time search | Market data, JD analysis, latest docs, CVE tracking, compatibility matrices | PHẦN 2, M0.3, M3, M7, M9, M12-M13 research |

---

*MASTER CURRICULUM BIBLE v2.0 — End of Document*
*Merge Date: June 2026*
*Sources: Claude.ai (Bible 1), Kimi K2.6 Thinking (Bible 2), Z.AI GLM-5 (Bible 3)*
