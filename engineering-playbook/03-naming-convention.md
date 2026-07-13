# Engineering Playbook — 03: Naming Convention

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Files, functions, variables, types, components, hooks — 3 Projects  
> **Principle:** "Tên phải trả lời được 3 câu: Nó là gì? Nó làm gì? Nó dùng ở đâu?"

## 1. PHILOSOPHY

### 1.1 Tên Là Tài Liệu Đầu Tiên

```typescript
// ❌ KHÔNG — Tên không nói gì
const d = new Date();
const res = fetchData();
const handleClick = () => {};

// ✅ NÊN — Tên tự giải thích
const orderCreatedAt = new Date();
const productsResponse = fetchProducts();
const handleAddToCart = () => {};
```

### 1.2 Nguyên Tắc: "Bad Name Costs More"

| Chi Phí             | Ví Dụ                                |
| ------------------- | ------------------------------------ |
| Đọc code chậm hơn   | `data` vs `orderItems`               |
| Bug khó phát hiện   | `items` (products? cart? wishlist?)  |
| Refactor nguy hiểm  | Search & replace `user` trùng 50 chỗ |
| Review kém hiệu quả | Reviewer phải đoán ý định            |

## 2. FILES & FOLDERS

### 2.1 File Naming

| Category         | Pattern                   | Example                          | Counter-Example        |
| ---------------- | ------------------------- | -------------------------------- | ---------------------- |
| React Component  | `PascalCase.tsx`          | `ProductCard.tsx`                | `productCard.tsx` ❌   |
| Component folder | `PascalCase/`             | `ProductCard/index.tsx`          | `product-card/` ❌     |
| Hook             | `camelCase`, prefix `use` | `useOrderPipeline.ts`            | `orderPipeline.ts` ❌  |
| Utility          | `camelCase.ts`            | `formatCurrency.ts`              | `utils.ts` ❌          |
| API service      | `[domain].api.ts`         | `product.api.ts`                 | `api.ts` ❌            |
| Zod schema       | `[domain].schemas.ts`     | `order.schemas.ts`               | `schemas.ts` ❌        |
| Type definition  | `[domain].types.ts`       | `order.types.ts`                 | `types.ts` ❌          |
| Constant         | `[domain].constants.ts`   | `order.constants.ts`             | `constants.ts` ❌      |
| Redux slice      | `[domain].slice.ts`       | `order.slice.ts`                 | `orderSlice.ts` ❌     |
| Redux saga       | `[domain].saga.ts`        | `order.saga.ts`                  | `sagas.ts` ❌          |
| Test file        | `[filename].test.ts`      | `orderStateMachine.test.ts`      | `test-order.ts` ❌     |
| E2E test         | `[flow].spec.ts`          | `booking-flow.spec.ts`           | `test1.ts` ❌          |
| MSW handler      | `[domain].mocks.ts`       | `product.mocks.ts`               | `handlers.ts` ❌       |
| Web Worker       | `[purpose].worker.ts`     | `portfolio-calculator.worker.ts` | `worker.ts` ❌         |
| Story (future)   | `[Component].stories.tsx` | `Button.stories.tsx`             | `button-story.tsx` ❌  |
| Style module     | `[Component].module.css`  | `Button.module.css`              | `styles.css` ❌        |
| Config file      | `kebab-case.config.ts`    | `tailwind.config.ts`             | `tailwindConfig.ts` ❌ |

### 2.2 Folder Naming

| Category              | Pattern        | Example                              |
| --------------------- | -------------- | ------------------------------------ |
| Module                | `kebab-case`   | `modules/order-pipeline/`            |
| Feature sub-folder    | `kebab-case`   | `components/`, `hooks/`, `services/` |
| Route group (Next.js) | `(kebab-case)` | `(auth)/`, `(dashboard)/`            |
| Dynamic route         | `[param]`      | `[id]/`, `[...slug]/`                |

### 2.3 Barrel Export File

```typescript
// modules/commerce/index.ts
// ✅ Chỉ export public API, không export internal

export { ProductTable } from './components/ProductTable';
export { ProductForm } from './components/ProductForm';
export { useProducts } from './hooks/useProducts';
export type { Product, ProductInput } from './types/product.types';

// ❌ KHÔNG export implementation detail
// export { productApiClient } from './services/product.api';
// export { validateSkuInternal } from './utils/skuValidator';
```

## 3. VARIABLES

### 3.1 General Rules

| Rule           | Pattern                                    | Example                                 |
| -------------- | ------------------------------------------ | --------------------------------------- |
| Boolean        | prefix `is`, `has`, `should`, `can`, `did` | `isLoading`, `hasError`                 |
| Array          | plural noun                                | `products`, `orderItems`                |
| Object         | singular noun                              | `product`, `currentUser`                |
| Number         | noun + unit                                | `itemCount`, `maxRetries`, `pageSize`   |
| String         | noun mô tả nội dung                        | `userName`, `orderId`, `errorMessage`   |
| Function       | verb + noun                                | `fetchProducts`, `validateEmail`        |
| Callback       | `on` + Event                               | `onSubmit`, `onChange`                  |
| Handler        | `handle` + Event                           | `handleSubmit`, `handleClick`           |
| Async function | verb + noun hoặc suffix `Async`            | `fetchProducts`, `submitFormAsync`      |
| Ref            | noun + `Ref`                               | `inputRef`, `modalRef`                  |
| State setter   | `set` + StateName                          | `setIsLoading`, `setProducts`           |
| Memoized value | `memoized` + noun hoặc `use` + noun        | `memoizedColumns`, `useDebouncedSearch` |

### 3.2 Boolean Naming — Chi Tiết

| Prefix   | Usage                | Example                                    |
| -------- | -------------------- | ------------------------------------------ |
| `is`     | State hiện tại       | `isOpen`, `isLoading`, `isAuthenticated`   |
| `has`    | Sở hữu/possession    | `hasPermission`, `hasError`, `hasNextPage` |
| `should` | Điều kiện logic      | `shouldRetry`, `shouldShowBanner`          |
| `can`    | Khả năng/capability  | `canEdit`, `canDelete`, `canSubmit`        |
| `did`    | Hành động đã xảy ra  | `didMount`, `didSubmit` (ít dùng)          |
| `will`   | Hành động sắp xảy ra | `willUnmount` (ít dùng, lifecycle)         |

```typescript
// ❌ KHÔNG
const loading = true;
const error = false;
const admin = user.role === 'admin';

// ✅ NÊN
const isLoading = true;
const hasError = false;
const isAdmin = user.role === 'admin';
```

### 3.3 Collection Naming

```typescript
// ❌ KHÔNG — Không rõ là array hay object
const user = users.find((u) => u.id === id);
const data = await fetchData();

// ✅ NÊN — Rõ ràng kiểu dữ liệu
const userList: User[] = [];
const userMap: Map<string, User> = new Map();
const userById: Record<string, User> = {};
const userSet: Set<string> = new Set();

// Async
const usersPromise = fetchUsers(); // Promise<User[]>
const usersResponse = await fetchUsers(); // User[]
const users = usersResponse.data; // User[]
```

### 3.4 Temporal Naming

```typescript
// ❌ KHÔNG — Không rõ format
const date = '2024-01-01';
const time = Date.now();

// ✅ NÊN — Rõ format và múi giờ
const createdAtISO = '2024-01-01T00:00:00Z'; // ISO 8601 string
const createdAtTimestamp = 1704067200000; // Unix timestamp (ms)
const createdAtDate = new Date('2024-01-01'); // Date object
const createdAtFormatted = 'Jan 1, 2024'; // Display string
const createdAtDateString = '2024-01-01'; // Date-only string
```

## 4. FUNCTIONS

### 4.1 Function Naming by Purpose

| Purpose         | Pattern                           | Example                                 |
| --------------- | --------------------------------- | --------------------------------------- |
| Fetch data      | `fetch` + Noun                    | `fetchProducts`, `fetchUserById`        |
| Get data (sync) | `get` + Noun                      | `getLocalStorageItem`, `getQueryParam`  |
| Create          | `create` + Noun                   | `createOrder`, `createUser`             |
| Update          | `update` + Noun                   | `updateProduct`, `updateProfile`        |
| Delete          | `delete` + Noun / `remove` + Noun | `deleteProduct`, `removeFromCart`       |
| Validate        | `validate` + Noun                 | `validateEmail`, `validateForm`         |
| Format          | `format` + Noun                   | `formatCurrency`, `formatDate`          |
| Parse           | `parse` + Noun                    | `parseCSV`, `parseJWT`                  |
| Transform       | `to` + Format / `from` + Format   | `toCamelCase`, `fromISOString`          |
| Check condition | `is` + Adjective / `has` + Noun   | `isValidEmail`, `hasPermission`         |
| Calculate       | `calculate` + Noun                | `calculateTotal`, `calculateReturnRate` |
| Generate        | `generate` + Noun                 | `generateId`, `generateReport`          |
| Handle event    | `handle` + Event                  | `handleSubmit`, `handleClick`           |
| Callback prop   | `on` + Event                      | `onSubmit`, `onProductSelect`           |

### 4.2 Async Function Naming

```typescript
// ✅ Pattern chuẩn
async function fetchProducts(filters: ProductFilters): Promise<Product[]> {
  // ...
}

// ✅ Hoặc suffix Async nếu tên gây nhầm lẫn
async function submitFormAsync(values: FormValues): Promise<void> {
  // ...
}

// ❌ KHÔNG — Không rõ là async
function getProducts() {
  /* ... */
} // Không biết có await không
```

### 4.3 Higher-Order Function

```typescript
// ✅ Prefix `with` hoặc `create`
function withAuth<P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> {
  return function WithAuth(props: P) {
    // ...
  };
}

function createValidator<T>(schema: z.ZodSchema<T>) {
  return (data: unknown): T => schema.parse(data);
}

// ❌ KHÔNG — Không rõ là HOC
function authWrapper(Component) {
  /* ... */
}
```

## 5. TYPES & INTERFACES

### 5.1 Naming Convention

| Category        | Pattern                          | Example                              |
| --------------- | -------------------------------- | ------------------------------------ |
| Object type     | PascalCase, noun                 | `Product`, `Order`, `UserProfile`    |
| Union type      | PascalCase, mô tả                | `OrderStatus`, `UserRole`            |
| Function type   | PascalCase, suffix `Fn`          | `FetchProductsFn`, `ValidateFn`      |
| Component props | `ComponentName` + `Props`        | `ButtonProps`, `ProductCardProps`    |
| Hook return     | `Use` + `HookName` + `Return`    | `UseProductsReturn`                  |
| API response    | `Resource` + `Response`          | `ProductsResponse`, `UserResponse`   |
| API request     | `Resource` + `Request` / `Input` | `CreateOrderRequest`, `ProductInput` |
| Zod schema type | `Resource` + `Schema`            | `ProductSchema`, `OrderSchema`       |
| Branded type    | PascalCase, domain noun          | `AssetId`, `Price`, `Quantity`       |
| Generic         | `T`, `K`, `V` hoặc mô tả         | `T`, `TData`, `TError`               |

### 5.2 Interface vs Type

```typescript
// ✅ Interface cho object shape có thể extend
interface Product {
  id: string;
  name: string;
  price: number;
}

interface DigitalProduct extends Product {
  downloadUrl: string;
}

// ✅ Type cho union, intersection, utility
type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered';
type AsyncState<T> = { status: 'loading' } | { status: 'success'; data: T };

// ✅ Type cho function signature
type FetchProductsFn = (filters: ProductFilters) => Promise<Product[]>;

// ❌ KHÔNG dùng interface cho union
interface Status {
  /* ... */
} // Không thể union
```

### 5.3 Enum Pattern (Hạn Chế Dùng)

```typescript
// ❌ KHÔNG — Enum TypeScript compile thành object, bundle lớn hơn
enum OrderStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
}

// ✅ NÊN — Union type + const object
type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered';

const OrderStatus = {
  Pending: 'pending',
  Confirmed: 'confirmed',
  Shipped: 'shipped',
  Delivered: 'delivered',
} as const;

// Usage
type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
```

### 5.4 Branded Types (P3 — Financial Domain)

```typescript
// types/branded.ts
declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

// Usage
export type AssetId = Branded<string, 'AssetId'>;
export type Price = Branded<number, 'Price'>;
export type Quantity = Branded<number, 'Quantity'>;
export type ReturnRate = Branded<number, 'ReturnRate'>;

// Factory functions — bắt buộc dùng để tạo
export const AssetId = (id: string): AssetId => id as AssetId;
export const Price = (value: number): Price => value as Price;

// Không thể nhầm lẫn compile-time
const assetId = AssetId('VNM');
const price = Price(50000);
// const wrong: Price = assetId; // ❌ Compile error
```

## 6. COMPONENTS

### 6.1 Component Naming

| Pattern       | Example                            | When to Use           |
| ------------- | ---------------------------------- | --------------------- |
| Noun          | `ProductCard`, `UserAvatar`        | Display component     |
| Noun + Action | `ProductForm`, `LoginModal`        | Form/Input component  |
| Layout        | `Sidebar`, `Header`, `Footer`      | Layout component      |
| Page          | `ProductsPage`, `OrderDetailPage`  | Route-level component |
| List          | `ProductList`, `OrderTable`        | Collection display    |
| Item          | `ProductListItem`, `OrderRow`      | Item trong list       |
| Skeleton      | `ProductSkeleton`, `TableSkeleton` | Loading state         |
| Empty         | `EmptyState`, `NoResults`          | Empty state           |
| Error         | `ErrorBoundary`, `ErrorFallback`   | Error state           |

### 6.2 Props Interface

```typescript
// ✅ ComponentName + Props
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  isLoading?: boolean;
  variant?: 'compact' | 'detailed';
}

export function ProductCard({
  product,
  onAddToCart,
  isLoading = false,
  variant = 'compact',
}: ProductCardProps) {
  // ...
}
```

### 6.3 Compound Component Pattern

```typescript
// ✅ Khi component có nhiều sub-component liên quan
export const Tabs = {
  Root: function TabsRoot({ children }: { children: React.ReactNode }) {
    return <div role="tablist">{children}</div>;
  },
  Trigger: function TabsTrigger({ value, children }: TabsTriggerProps) {
    return <button role="tab">{children}</button>;
  },
  Content: function TabsContent({ value, children }: TabsContentProps) {
    return <div role="tabpanel">{children}</div>;
  },
};

// Usage
<Tabs.Root>
  <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
  <Tabs.Trigger value="details">Details</Tabs.Trigger>
  <Tabs.Content value="overview">...</Tabs.Content>
  <Tabs.Content value="details">...</Tabs.Content>
</Tabs.Root>
```

## 7. HOOKS

### 7.1 Custom Hook Naming

| Pattern               | Example                                | When to Use          |
| --------------------- | -------------------------------------- | -------------------- |
| `use` + Noun          | `useAuth`, `useTheme`                  | Global state/context |
| `use` + Verb + Noun   | `useFetchProducts`, `useCreateOrder`   | Data fetching        |
| `use` + Noun + State  | `useOrderState`, `useFormState`        | Local state logic    |
| `use` + Noun + Action | `useOrderPipeline`, `useProductFilter` | Complex logic        |
| `use` + Adjective     | `useDebounce`, `useThrottle`           | Utility              |

### 7.2 Hook Return Pattern

```typescript
// ✅ Return object — dễ destructuring, dỜ thêm field
function useProducts(filters: ProductFilters) {
  const { data, isLoading, error } = useQuery({...});

  return {
    products: data ?? [],
    isLoading,
    isError: !!error,
    error: error instanceof Error ? error.message : null,
    refetch,
  };
}

// Usage
const { products, isLoading, isError, refetch } = useProducts(filters);

// ❌ KHÔNG — Return array, khó thêm field sau này
return [data, isLoading, error]; // Không scalable
```

### 7.3 Hook Rules

```typescript
// ✅ Tên bắt đầu bằng `use`
function useOrderPipeline(orderId: string) { /* ... */ }

// ✅ Chỉ gọi hook ở top level
function ProductList() {
  const { products } = useProducts(); // ✅ Top level

  if (isLoading) return <Loading />;

  const { mutate } = useCreateProduct(); // ❌ Sau return/condition

  // ...
}
```

## 8. CONSTANTS

### 8.1 Naming

| Category          | Pattern                   | Example                                  |
| ----------------- | ------------------------- | ---------------------------------------- |
| App-wide constant | `SCREAMING_SNAKE_CASE`    | `MAX_RETRY_COUNT`, `API_BASE_URL`        |
| Module constant   | `SCREAMING_SNAKE_CASE`    | `ORDER_STATUS_FLOW`, `PRODUCT_PAGE_SIZE` |
| Enum-like object  | `PascalCase` + `as const` | `OrderStatus`, `UserRole`                |
| Config object     | `camelCase`               | `tableConfig`, `chartOptions`            |

### 8.2 Organization

```typescript
// constants/app.constants.ts — App-wide
export const APP_NAME = 'Enterprise Admin';
export const API_BASE_URL = import.meta.env.VITE_API_URL;
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// modules/order/constants/order.constants.ts — Module-specific
export const ORDER_STATUS_FLOW = [
  'pending',
  'confirmed',
  'packing',
  'shipping',
  'delivered',
] as const;

export const ORDER_RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000,
} as const;
```

## 9. CSS / TAILWIND

### 9.1 Class Naming

| Pattern           | Example                                        | When to Use         |
| ----------------- | ---------------------------------------------- | ------------------- |
| Utility first     | `className="flex items-center gap-2"`          | Mọi component       |
| `cn()` utility    | `cn("base-class", isActive && "active-class")` | Conditional classes |
| Component variant | `variant="primary"`, `size="lg"`               | Shadcn/UI pattern   |
| Data attribute    | `data-state="open"`, `data-active`             | State styling       |

### 9.2 Không Dùng

```typescript
// ❌ KHÔNG — Inline style
<div style={{ marginTop: '16px', color: 'red' }}>

// ❌ KHÔNG — Generic class name không semantic
<div className="wrapper">
<div className="container">
<div className="box">

// ✅ NÊN — Tailwind utility hoặc semantic class
<div className="mt-4 text-red-600">
<div className="product-card-container">
```

## 10. TEST NAMING

### 10.1 File Naming

| Type             | Pattern                         | Example                        |
| ---------------- | ------------------------------- | ------------------------------ |
| Unit test        | `[filename].test.ts`            | `formatCurrency.test.ts`       |
| Component test   | `[ComponentName].test.tsx`      | `ProductCard.test.tsx`         |
| Hook test        | `[hookName].test.ts`            | `useOrderPipeline.test.ts`     |
| Integration test | `[feature].integration.test.ts` | `checkout.integration.test.ts` |
| E2E test         | `[flow].spec.ts`                | `booking-flow.spec.ts`         |

### 10.2 Test Case Naming (describe/it)

```typescript
// ✅ Pattern: should [expected behavior] when [condition]
describe('formatCurrency', () => {
  it('should format VND with thousand separator', () => {
    expect(formatCurrency(1000000, 'VND')).toBe('1.000.000 ₫');
  });

  it('should return "0 ₫" when amount is 0', () => {
    expect(formatCurrency(0, 'VND')).toBe('0 ₫');
  });

  it('should throw error when currency is unsupported', () => {
    expect(() => formatCurrency(100, 'XYZ')).toThrow('Unsupported currency');
  });
});

describe('useOrderPipeline', () => {
  it('should transition from pending to confirmed when valid', () => {
    // ...
  });

  it('should not transition from delivered to cancelled', () => {
    // ...
  });

  it('should call onError callback when API fails', () => {
    // ...
  });
});
```

## 11. GIT BRANCHES & COMMITS

### 11.1 Branch Naming (Chi Tiết ở 05-branching-strategy.md)

| Type     | Pattern                             | Example                            |
| -------- | ----------------------------------- | ---------------------------------- |
| Feature  | `feature/[ticket-id]-[description]` | `feature/EP-001-bootstrap-project` |
| Bugfix   | `fix/[ticket-id]-[description]`     | `fix/EP-042-login-redirect`        |
| Hotfix   | `hotfix/[description]`              | `hotfix/critical-auth-bypass`      |
| Refactor | `refactor/[description]`            | `refactor/extract-order-module`    |
| Docs     | `docs/[description]`                | `docs/adr-001-redux-saga`          |

### 11.2 Commit Message (Chi Tiết ở 06-commit-convention.md)

```
type(scope): subject

body (optional)

footer (optional)
```

| Type       | Usage            | Example                                  |
| ---------- | ---------------- | ---------------------------------------- |
| `feat`     | New feature      | `feat(commerce): add bulk order action`  |
| `fix`      | Bug fix          | `fix(auth): redirect after login`        |
| `refactor` | Restructure code | `refactor(order): extract pipeline hook` |
| `perf`     | Performance      | `perf(table): virtualize 10k rows`       |
| `test`     | Add tests        | `test(order): add saga unit tests`       |
| `docs`     | Documentation    | `docs: add ADR-001 Redux Saga`           |
| `chore`    | Maintenance      | `chore: update dependencies`             |
| `ci`       | CI/CD            | `ci: add GitHub Actions workflow`        |

## 12. ENVIRONMENT VARIABLES

### 12.1 Naming

| Scope                 | Prefix         | Example                                     |
| --------------------- | -------------- | ------------------------------------------- |
| Public (client) P1    | `VITE_`        | `VITE_SUPABASE_URL`                         |
| Public (client) P2/P3 | `NEXT_PUBLIC_` | `NEXT_PUBLIC_API_URL`                       |
| Private (server)      | No prefix      | `DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` |

### 12.2 Grouping

```bash
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=...

# External Services
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
SENTRY_DSN=...

# Feature Flags
ENABLE_REALTIME=false
ENABLE_ANALYTICS=true
```

## 13. FORBIDDEN NAMING PATTERNS

| Pattern                        | Why Forbidden                            | Correct Alternative                      |
| ------------------------------ | ---------------------------------------- | ---------------------------------------- |
| Single letter (trừ loop index) | Không rõ ý nghĩa                         | `index`, `item`, `element`               |
| `data`, `info`, `item`         | Quá generic                              | `products`, `userProfile`, `orderItem`   |
| `tmp`, `temp`                  | Tạm bợ, quên xóa                         | `pendingUpload`, `draftOrder`            |
| `flag`                         | Không rõ true/false nghĩa gì             | `isLoading`, `shouldShowModal`           |
| Hungarian notation             | Lỗi thời                                 | `strName` → `userName`                   |
| Abbreviation không chuẩn       | Khó đoán                                 | `btn` → `button`, `cnt` → `count`        |
| `handleClick` generic          | Không rõ click cái gì                    | `handleAddToCart`, `handleToggleSidebar` |
| `getData`                      | Không rõ data gì                         | `fetchProducts`, `getUserProfile`        |
| `process`                      | Quá mơ hồ                                | `validateForm`, `transformPayload`       |
| `manager`, `helper`, `util`    | Quá generic, không single responsibility | `formatCurrency`, `validateEmail`        |

## 14. NAMING DECISION TREE

```
Bạn cần đặt tên cho:
├── File/Folder?
│   ├── Component → PascalCase.tsx / PascalCase/
│   ├── Hook → use + PascalCase.ts
│   ├── Utility → camelCase.ts
│   ├── API → [domain].api.ts
│   └── Test → [filename].test.ts
├── Variable?
│   ├── Boolean → is/has/should/can + noun
│   ├── Array → plural noun
│   ├── Number → noun + unit/count/size
│   └── Function → verb + noun
├── Function?
│   ├── Fetch data → fetch + noun
│   ├── Validate → validate + noun
│   ├── Format → format + noun
│   ├── Event handler → handle + event
│   └── Callback prop → on + event
├── Type?
│   ├── Object → PascalCase noun
│   ├── Union → PascalCase descriptive
│   └── Props → ComponentName + Props
└── Constant?
    ├── App-wide → SCREAMING_SNAKE_CASE
    └── Module → SCREAMING_SNAKE_CASE
```

## 15. REVISION HISTORY

| Version | Date       | Changes                                           |
| ------- | ---------- | ------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — Comprehensive naming convention |

---

> **"Tên đúng là 50% documentation. Tên sai là 100% technical debt."**

---

Tóm tắt:

1. **Philosophy** — Tên là tài liệu đầu tiên, bad name costs more
2. **Files & Folders** — Bảng tra cứu đầy đủ 20+ loại file, barrel export pattern
3. **Variables** — Boolean prefixes, collection naming, temporal naming
4. **Functions** — Naming by purpose, async patterns, HOC naming
5. **Types & Interfaces** — Interface vs Type, enum pattern (union + const), branded types chi tiết
6. **Components** — Naming by category, props interface, compound component
7. **Hooks** — Naming patterns, return object pattern, hook rules
8. **Constants** — Naming và organization
9. **CSS/Tailwind** — Utility first, `cn()` utility, forbidden patterns
10. **Test Naming** — File naming, describe/it pattern
11. **Git Branches & Commits** — Preview (chi tiết ở file 05, 06)
12. **Environment Variables** — Prefix convention, grouping
13. **Forbidden Patterns** — 10 pattern cấm với alternative đúng
14. **Naming Decision Tree** — Flowchart tra cứu nhanh
