# Engineering Playbook — 02: Folder Structure

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Module-based convention — 3 Projects  
> **Principle:** "Code gần nhau nếu thay đổi cùng lý do"

## 1. PHILOSOPHY

### 1.1 Core Principle: Co-location

> **"Code gần nhau nếu thay đổi cùng lý do. Code xa nhau nếu thay đổi vì lý do khác nhau."**

- **Feature/module** thay đổi vì business logic → Gom lại
- **Shared component** thay đổi vì design system → Gom lại
- **Utility** thay đổi vì cross-cutting concern → Gom lại

### 1.2 Anti-Patterns Tránh

```
❌ Tech-based splitting (by file type)
src/
├── components/          ← Mọi component ở đây? Không!
├── hooks/               ← Mọi hook ở đây? Không!
├── utils/               ← Mọi utility ở đây? Không!
└── pages/               ← Mọi page ở đây? Không!

→ Vấn đề: Sửa 1 feature phải nhảy 4-5 folder. Khó biết file nào thuộc feature nào.

❌ Flat structure
src/
├── UserList.tsx
├── UserForm.tsx
├── useUsers.ts
├── userApi.ts
├── userTypes.ts
├── ProductList.tsx
├── ProductForm.tsx
├── useProducts.ts
├── productApi.ts
├── productTypes.ts

→ Vấn đề: 20 features = 100+ file ở cùng level. Không scale.
```

## 2. MODULE-BASED STRUCTURE

### 2.1 Tổng Quan (Áp dụng cả 3 project)

```
src/
├── modules/              → Business features (mỗi module = 1 domain)
│   ├── [module-name]/
│   │   ├── components/   → UI components chỉ dùng trong module
│   │   ├── hooks/        → Custom hooks cho module
│   │   ├── services/     → API calls, external integrations
│   │   ├── types/        → TypeScript types, interfaces, enums
│   │   ├── utils/        → Module-specific utilities
│   │   ├── stores/       → Zustand store (nếu module có local state)
│   │   ├── constants/    → Module constants, config
│   │   └── index.ts      → Public API của module (barrel export)
│   └── ...
├── shared/               → Cross-cutting concerns (dùng ở nhiều module)
│   ├── components/       → Design system components
│   ├── hooks/            → Global hooks (useAuth, usePermission...)
│   ├── utils/            → Pure functions (format, validate...)
│   ├── types/            → Global types
│   ├── constants/        → App-wide constants
│   └── lib/              → Third-party config (queryClient, supabase...)
├── app/                  → Next.js App Router (P2, P3) hoặc routes (P1)
├── styles/               → Global styles, Tailwind config
├── public/               → Static assets
└── tests/                → Test setup, fixtures, mocks
```

### 2.2 Module Internal Structure

```
modules/[module-name]/
├── components/
│   ├── [ComponentName]/           → Mỗi component = 1 folder
│   │   ├── index.tsx              → Component implementation
│   │   ├── [ComponentName].test.tsx  → Test cùng chỗ
│   │   └── types.ts               → Component-specific types (nếu cần)
│   └── index.ts                   → Barrel export components
├── hooks/
│   ├── use[HookName].ts
│   ├── use[HookName].test.ts
│   └── index.ts
├── services/
│   ├── [serviceName].api.ts       → API functions
│   ├── [serviceName].mocks.ts   → MSW mocks
│   └── index.ts
├── types/
│   ├── [domain].types.ts          → Core types
│   ├── [domain].schemas.ts        → Zod schemas
│   └── index.ts
├── utils/
│   ├── [utilName].ts
│   ├── [utilName].test.ts
│   └── index.ts
├── constants/
│   └── [domain].constants.ts
├── stores/                        → Optional: Zustand store cho module
│   └── [storeName].store.ts
└── index.ts                       → Public API: chỉ export những gì cần public
```

## 3. PROJECT-SPECIFIC STRUCTURE

### 3.1 P1 — Enterprise Admin Platform (React 18 CSR + Vite)

```
src/
├── modules/
│   ├── auth/                      → Auth: login, register, forgot password
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   │   ├── OAuthButton/
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── usePermission.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── auth.api.ts
│   │   │   ├── auth.mocks.ts
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   ├── auth.types.ts
│   │   │   ├── auth.schemas.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── tokenStorage.ts
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── auth.constants.ts
│   │   └── index.ts               → export { useAuth, usePermission, LoginForm... }
│   │
│   ├── commerce/                  → Commerce module (P1 core)
│   │   ├── components/
│   │   │   ├── ProductTable/
│   │   │   ├── ProductForm/
│   │   │   ├── OrderPipeline/
│   │   │   ├── OrderStatusBadge/
│   │   │   ├── InventoryAlert/
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useProducts.ts
│   │   │   ├── useOrders.ts
│   │   │   ├── useOrderPipeline.ts  → Redux Saga orchestration
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── product.api.ts
│   │   │   ├── order.api.ts
│   │   │   ├── order.saga.ts      → Redux Saga (chỉ cho Order pipeline)
│   │   │   ├── inventory.api.ts
│   │   │   ├── commerce.mocks.ts
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   ├── product.types.ts
│   │   │   ├── order.types.ts
│   │   │   ├── order.schemas.ts
│   │   │   ├── inventory.types.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── orderStateMachine.ts  → State machine cho Order lifecycle
│   │   │   ├── priceCalculator.ts
│   │   │   └── index.ts
│   │   ├── constants/
│   │   │   └── order.constants.ts
│   │   └── index.ts
│   │
│   ├── dashboard/                 → Analytics dashboard
│   ├── activity-log/              → Activity log module
│   └── settings/                  → User settings, preferences
│
├── shared/
│   ├── components/                → Design system (P1 dùng Shadcn/UI + custom)
│   │   ├── ui/                    → Shadcn/UI components (không sửa trực tiếp)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── AppShell/          → Sidebar + Header + Content
│   │   │   ├── Sidebar/
│   │   │   ├── Header/
│   │   │   ├── Breadcrumb/
│   │   │   └── index.ts
│   │   ├── feedback/
│   │   │   ├── Toast/
│   │   │   ├── Modal/
│   │   │   ├── ConfirmDialog/
│   │   │   └── index.ts
│   │   ├── data-display/
│   │   │   ├── DataTable/         → TanStack Table wrapper
│   │   │   ├── Pagination/
│   │   │   ├── FilterBar/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── cn.ts                  → clsx + tailwind-merge
│   │   ├── formatDate.ts
│   │   ├── formatCurrency.ts
│   │   ├── httpClient.ts          → Axios/fetch wrapper
│   │   └── index.ts
│   ├── types/
│   │   ├── api.types.ts           → Generic API response types
│   │   ├── common.types.ts        → Shared utility types
│   │   └── index.ts
│   ├── constants/
│   │   └── app.constants.ts
│   └── lib/
│       ├── redux/                 → Redux store setup
│       │   ├── store.ts
│       │   ├── rootReducer.ts
│       │   └── middleware.ts
│       ├── queryClient.ts         → RTK Query setup
│       ├── supabase.ts
│       └── index.ts
│
├── app/                           → React Router v6 routes
│   ├── routes.tsx
│   └── route-guards.tsx
│
├── styles/
│   ├── globals.css
│   └── tailwind.config.ts
│
└── tests/
    ├── setup.ts
    ├── fixtures/
    │   ├── users.fixture.ts
    │   └── products.fixture.ts
    └── msw/
        ├── handlers.ts
        └── server.ts
```

### 3.2 P2 — Property Platform (Next.js 16 App Router)

```
src/
├── modules/
│   ├── auth/                      → NextAuth v5 + JWT
│   ├── project/                   → Real estate projects
│   ├── property/                  → Properties within project
│   ├── unit/                      → Units (apartments, lots)
│   ├── agent/                     → Sales agents
│   ├── lead/                      → Customer leads
│   ├── booking/                   → Booking/giữ chỗ
│   ├── contract/                  → Contract management
│   └── report/                    → Dashboard & reports
│
├── shared/
│   ├── components/
│   │   ├── ui/                    → Ant Design 6 components (wrapper nếu cần)
│   │   ├── layout/
│   │   │   ├── AdminLayout/       → Next.js layout.tsx pattern
│   │   │   ├── Sidebar/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── usePermission.ts       → RBAC hook: usePermission('property:create')
│   │   └── index.ts
│   ├── utils/
│   └── lib/
│       ├── prisma.ts              → Prisma client singleton
│       ├── supabase.ts
│       └── auth.ts                → NextAuth config
│
├── app/                           → Next.js 16 App Router
│   ├── (auth)/                    → Route group: auth pages
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/               → Route group: protected pages
│   │   ├── layout.tsx             → AdminLayout + route guard
│   │   ├── page.tsx               → Dashboard
│   │   ├── projects/
│   │   │   ├── page.tsx           → Server Component: load data
│   │   │   ├── loading.tsx        → Suspense fallback
│   │   │   ├── error.tsx          → Error Boundary
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── edit/
│   │   │           └── page.tsx
│   │   ├── properties/
│   │   ├── units/
│   │   ├── agents/
│   │   ├── leads/
│   │   ├── bookings/
│   │   ├── contracts/
│   │   └── reports/
│   ├── api/                       → Route Handlers (ít dùng, prefer Server Actions)
│   │   ├── auth/
│   │   └── webhook/
│   └── layout.tsx                 → Root layout
│
├── styles/
└── tests/
    ├── e2e/                       → Playwright tests
    │   ├── booking-flow.spec.ts
    │   └── contract-flow.spec.ts
    └── setup.ts
```

### 3.3 P3 — Investment Portfolio Tracker (Next.js 16 + D3.js)

```
src/
├── modules/
│   ├── auth/
│   ├── portfolio/                 → Core: assets, transactions, overview
│   │   ├── components/
│   │   │   ├── PortfolioOverview/
│   │   │   ├── AssetAllocation/
│   │   │   ├── TransactionTable/  → TanStack Table server-side
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── usePortfolio.ts
│   │   │   ├── useTransactions.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── portfolio.api.ts
│   │   │   ├── portfolio.worker.ts  → Web Worker cho calculation
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   ├── portfolio.types.ts
│   │   │   ├── portfolio.schemas.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── analytics/                 → Charts, reports
│   │   ├── components/
│   │   │   ├── CandlestickChart/    → D3.js custom
│   │   │   ├── AllocationHeatmap/   → D3.js custom
│   │   │   ├── WaterfallChart/      → D3.js custom
│   │   │   ├── PerformanceLine/     → Recharts
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useChartData.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── watchlist/                 → Price alerts, tracking
│   └── import/                    → CSV import, Web Worker parse
│
├── shared/
│   ├── components/
│   │   ├── ui/                    → MUI v6 components
│   │   ├── layout/
│   │   └── charts/
│   │       ├── ChartContainer/    → Shared: responsive, loading, error
│   │       └── index.ts
│   ├── hooks/
│   ├── utils/
│   │   ├── branded-types.ts       → AssetId, Price, Quantity...
│   │   ├── decimal-math.ts        → Financial calculation precision
│   │   └── index.ts
│   └── lib/
│       ├── d3/                    → D3.js shared utilities
│       │   ├── scales.ts
│       │   ├── axes.ts
│       │   └── index.ts
│
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 → Portfolio overview
│   │   ├── portfolio/
│   │   ├── analytics/
│   │   ├── transactions/
│   │   ├── watchlist/
│   │   └── import/
│   └── api/
│       └── market-data/             → Route Handler: market data proxy
│
├── workers/                         → Web Workers (không trong modules/)
│   ├── portfolio-calculator.worker.ts
│   ├── csv-parser.worker.ts
│   └── index.ts
│
├── styles/
└── tests/
```

## 4. FILE NAMING CONVENTION

### 4.1 General Rules

| Type             | Pattern                       | Example                     |
| ---------------- | ----------------------------- | --------------------------- |
| Component        | PascalCase.tsx                | `ProductCard.tsx`           |
| Component folder | PascalCase/                   | `ProductCard/index.tsx`     |
| Hook             | camelCase, prefix `use`       | `useOrderPipeline.ts`       |
| API service      | `[domain].api.ts`             | `product.api.ts`            |
| Zod schema       | `[domain].schemas.ts`         | `order.schemas.ts`          |
| Type definition  | `[domain].types.ts`           | `order.types.ts`            |
| Utility          | camelCase.ts                  | `formatCurrency.ts`         |
| Constant         | `[domain].constants.ts`       | `order.constants.ts`        |
| Test             | `[filename].test.ts`          | `orderStateMachine.test.ts` |
| Story (future)   | `[ComponentName].stories.tsx` | `Button.stories.tsx`        |
| Style module     | `[ComponentName].module.css`  | `Button.module.css`         |

### 4.2 Barrel Export Pattern

```typescript
// modules/commerce/index.ts
export { ProductTable } from './components/ProductTable';
export { ProductForm } from './components/ProductForm';
export { useProducts } from './hooks/useProducts';
export { useOrders } from './hooks/useOrders';
export type { Product, ProductInput } from './types/product.types';
export { ProductSchema } from './types/product.schemas';

// Không export internal implementation details
// ❌ Không export: useProductCache, productApiClient, validateSku...
```

## 5. IMPORT RULES

### 5.1 Absolute vs Relative

```typescript
// ✅ Dùng absolute (@/*) cho cross-module import
import { Button } from '@/shared/components/ui/button';
import { useAuth } from '@/modules/auth';
import { formatCurrency } from '@/shared/utils';

// ✅ Dùng relative (./, ../) cho cùng module
import { ProductCard } from './components/ProductCard';
import { useProductForm } from '../hooks/useProductForm';

// ❌ KHÔNG dùng relative để nhảy nhiều cấp
import { Button } from '../../../../shared/components/ui/button'; // KHÔNG
```

### 5.2 Import Order (ESLint enforce)

```typescript
// 1. React / framework
import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. External libraries
import { z } from 'zod';
import { format } from 'date-fns';

// 3. Internal absolute (@/*)
import { Button } from '@/shared/components/ui/button';
import { useAuth } from '@/modules/auth';
import { cn } from '@/shared/utils';

// 4. Types
import type { Product } from '@/modules/commerce';
import type { AppRouter } from '@/app/api';

// 5. Relative (cùng module)
import { ProductCard } from './components/ProductCard';
import { useProductFilters } from './hooks/useProductFilters';

// 6. Styles
import styles from './ProductList.module.css';
```

## 6. SPECIAL FOLDERS

### 6.1 `shared/lib/` — Third-Party Configuration

```typescript
// shared/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

// shared/lib/queryClient.ts (P2, P3)
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
});
```

### 6.2 `shared/components/ui/` — Design System

```
shared/components/ui/
├── button.tsx          → Shadcn/UI (P1) / MUI wrapper (P3)
├── input.tsx
├── select.tsx
├── table.tsx
├── dialog.tsx
├── dropdown-menu.tsx
├── form.tsx            → React Hook Form + Zod integration
├── toast.tsx
├── skeleton.tsx
└── index.ts            → Barrel export
```

**Quy tắc:** Không sửa trực tiếp Shadcn/UI components. Wrap nếu cần customize.

```typescript
// shared/components/ui/button.tsx (Shadcn — không sửa)
// Nếu cần variant mới:
// shared/components/custom/CustomButton.tsx
import { Button as ShadcnButton } from '@/shared/components/ui/button';

interface CustomButtonProps {
  // ...additional props
}

export function CustomButton({ isLoading, children, ...props }: CustomButtonProps) {
  return (
    <ShadcnButton disabled={isLoading} {...props}>
      {isLoading ? <Spinner /> : children}
    </ShadcnButton>
  );
}
```

### 6.3 `tests/` — Test Infrastructure

```
tests/
├── setup.ts                    → Vitest / Jest setup
├── fixtures/
│   ├── users.fixture.ts        → Mock data
│   ├── products.fixture.ts
│   └── orders.fixture.ts
├── msw/                        → Mock Service Worker (P1)
│   ├── handlers.ts
│   └── server.ts
├── e2e/                        → Playwright (P2)
│   ├── auth.spec.ts
│   ├── booking-flow.spec.ts
│   └── utils/
│       └── test-utils.ts
└── unit/
    └── setup.ts
```

## 7. NEXT.JS APP ROUTER CONVENTION (P2, P3)

### 7.1 Route Groups

```
app/
├── (auth)/           → Không ảnh hưởng URL, group layout
│   ├── layout.tsx    → Auth layout (centered, no sidebar)
│   ├── login/
│   └── register/
├── (dashboard)/      → Protected routes
│   ├── layout.tsx    → AdminLayout + auth check
│   ├── page.tsx      → /dashboard
│   ├── projects/     → /dashboard/projects
│   └── settings/     → /dashboard/settings
└── api/              → Route Handlers
```

### 7.2 Parallel Routes & Intercepting (P2 — nếu cần)

```
app/
└── (dashboard)/
    ├── projects/
    │   ├── page.tsx           → List view
    │   └── @modal/            → Parallel route cho modal
    │       └── [id]/
    │           └── page.tsx     → Intercepted: /projects/123 mở modal
    └── layout.tsx             → {children} {modal}
```

### 7.3 Server vs Client Components

```typescript
// ✅ Server Component (default): Không cần 'use client'
// app/(dashboard)/projects/page.tsx
import { getProjects } from '@/modules/project/services/project.api';

export default async function ProjectsPage() {
  const projects = await getProjects(); // No useEffect needed

  return <ProjectTable data={projects} />;
}

// ✅ Client Component: Chỉ khi cần interactivity
// modules/project/components/ProjectForm/index.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ...
}
```

**Quy tắc:** Bắt đầu với Server Component. Chuyển sang Client Component chỉ khi cần:

- Event listeners (`onClick`, `onSubmit`)
- Browser APIs (`localStorage`, `window`)
- React hooks (`useState`, `useEffect`)
- Third-party components không hỗ trợ RSC

## 8. REDUX-SPECIFIC STRUCTURE (P1 — Order Pipeline)

```
modules/commerce/services/
├── order.api.ts           → RTK Query endpoints
├── order.saga.ts          → Redux Saga (chỉ cho Order pipeline)
│   ├── watchOrderPipeline
│   ├── handleOrderTransition
│   └── handleBulkOperations
├── order.slice.ts         → Redux slice (nếu cần local state)
└── index.ts
```

```typescript
// order.saga.ts — giới hạn phạm vi rõ ràng
/**
 * REDUX SCOPE: Order pipeline only
 * - Order status transitions (Pending → Confirmed → Packing → Shipping → Delivered)
 * - Bulk operations (bulk cancel, bulk update status)
 * - Complex retry logic with race conditions
 *
 * NOT IN SCOPE:
 * - Simple CRUD (dùng RTK Query mutation)
 * - UI state (dùng Zustand)
 */
```

## 9. ENVIRONMENT VARIABLES

### 9.1 File Structure

```
.env.local          → Local development (gitignored)
.env.development    → Development defaults
.env.production     → Production defaults
.env.example        → Template (committed)
```

### 9.2 Naming Convention

```bash
# Public (client-side, prefix VITE_ cho P1, NEXT_PUBLIC_ cho P2/P3)
VITE_SUPABASE_URL=https://...
VITE_SENTRY_DSN=https://...
NEXT_PUBLIC_API_URL=https://...

# Private (server-side only, no prefix)
DATABASE_URL=postgresql://...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
```

### 9.3 Type-Safe Env (P2, P3)

```typescript
// shared/lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  DATABASE_URL: z.string().startsWith('postgresql://'),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
```

## 10. FORBIDDEN STRUCTURE PATTERNS

| Pattern                          | Why Forbidden                | Correct Alternative                     |
| -------------------------------- | ---------------------------- | --------------------------------------- |
| `src/components/Button.tsx` flat | Không biết thuộc feature nào | `src/shared/components/ui/button.tsx`   |
| `utils.ts` generic               | Không rõ scope               | `formatCurrency.ts`, `validateEmail.ts` |
| `types.ts` monolithic            | Không scalable               | `[domain].types.ts` per module          |
| `api.ts` toàn bộ app             | Không maintainable           | `[domain].api.ts` per module            |
| `useData.ts` generic             | Không rõ data gì             | `useProducts.ts`, `useOrders.ts`        |
| Import `../../..`                | Fragile, khó refactor        | Absolute import `@/shared/...`          |
| Test ở folder riêng xa source    | Khó maintain                 | Co-locate: `[Component].test.tsx`       |
| `index.ts` export everything     | Lộ implementation            | Chỉ export public API                   |

## 11. MIGRATION GUIDE

### 11.1 When to Restructure

Restructure khi:

- [ ] File trong 1 folder > 20 items
- [ ] Sửa 1 feature phải nhảy > 3 folder
- [ ] Không biết file mới nên đặt ở đâu
- [ ] Import cycle xuất hiện

### 11.2 Refactor Steps

```
1. Tạo module mới với cấu trúc đúng
2. Move file + update import
3. Viết barrel export (index.ts)
4. Update import ở consumer
5. Chạy type-check + test
6. Commit: "refactor: extract [module] from [old-location]"
```

## 12. REVISION HISTORY

| Version | Date       | Changes                                                 |
| ------- | ---------- | ------------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Module-based convention cho 3 project |

---

> **"Folder structure không phải để đẹp — mà để 6 tháng sau bạn vẫn biết file mới đặt ở đâu, và reviewer vẫn tìm được logic trong < 30 giây."**

---

Tóm tắt:

1. **Philosophy** — Co-location principle, anti-patterns tránh
2. **Module-based structure** — Tổng quan + chi tiết internal structure
3. **Project-specific structure** — P1 (React CSR), P2 (Next.js App Router), P3 (Next.js + D3.js) với tree visualization đầy đủ
4. **File naming convention** — Bảng tra cứu nhanh
5. **Import rules** — Absolute vs relative, import order (ESLint enforce)
6. **Special folders** — `shared/lib/`, `shared/components/ui/`, `tests/`
7. **Next.js App Router convention** — Route groups, Server vs Client Components
8. **Redux-specific structure** — Saga scope giới hạn, comment rõ ràng
9. **Environment variables** — Naming, type-safe env với Zod
10. **Forbidden patterns** — 8 pattern cấm và alternative đúng
11. **Migration guide** — Khi nào restructure, steps để refactor
