# Engineering Playbook — 01: Coding Standards

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** TypeScript, React, Next.js — 3 Projects  
> **Enforcement:** ESLint + Prettier + CI (không merge khi đỏ)

## 1. PHILOSOPHY

> **"Code được viết một lần, đọc hàng trăm lần, debug hàng nghìn lần."**

Standards không phải để ràng buộc creativity — mà để **giảm cognitive load** khi đọc code của chính mình sau 3 tháng, hoặc code của AI vừa generate.

**Quy tắc vàng:** Nếu một quyết định style không có lý do rõ ràng, chọn cái **đồng nhất** thay vì cái "tốt hơn một chút".

## 2. TYPESCRIPT — STRICT MODE

### 2.1 tsconfig.json (Dùng chung 3 project)

```json
{
  "compilerOptions": {
    "target": "ES2022", // Phiên bản JavaScript được biên dịch tới
    "lib": ["ES2022", "DOM", "DOM.Iterable"], // Các thư viện kiểu dữ liệu được sử dụng
    "jsx": "react-jsx", // Cách biên dịch JSX của React
    "module": "ESNext", // Hệ thống module đầu ra
    "moduleResolution": "bundler", // Cách tìm và resolve module theo bundler
    "resolveJsonModule": true, // Cho phép import file JSON
    "allowJs": false, // Không cho phép dùng file .js
    "checkJs": false, // Không kiểm tra kiểu trong file .js

    /* Chế độ kiểm tra nghiêm ngặt — không thỏa hiệp */
    "strict": true, // Bật toàn bộ kiểm tra strict
    "noImplicitAny": true, // Cấm kiểu any ngầm
    "strictNullChecks": true, // Phân biệt null/undefined
    "strictFunctionTypes": true, // Kiểm tra chặt chẽ kiểu của function
    "strictBindCallApply": true, // Kiểm tra bind/call/apply
    "strictPropertyInitialization": true, // Bắt buộc khởi tạo thuộc tính class
    "noImplicitThis": true, // Không cho phép this ngầm có kiểu any
    "alwaysStrict": true, // Luôn sinh mã ở chế độ strict

    /* Kiểm tra bổ sung */
    "noUnusedLocals": true, // Báo biến cục bộ không dùng
    "noUnusedParameters": true, // Báo tham số không dùng
    "noImplicitReturns": true, // Mọi nhánh phải return rõ ràng
    "noFallthroughCasesInSwitch": true, // Cấm fall-through trong switch
    "noUncheckedIndexedAccess": true, // Truy cập mảng/object có thể trả về undefined

    /* Thiết lập module */
    "esModuleInterop": true, // Tương thích với CommonJS
    "allowSyntheticDefaultImports": true, // Cho phép default import kể cả khi module không export default
    "forceConsistentCasingInFileNames": true, // Bắt buộc đúng chữ hoa/thường của tên file
    "skipLibCheck": true, // Bỏ qua kiểm tra type của thư viện ngoài

    /* Đường dẫn import */
    "baseUrl": ".", // Thư mục gốc để resolve import
    "paths": {
      "@/*": ["src/*"], // Alias @ -> src
      "@/components/*": ["src/components/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"],
      "@/lib/*": ["src/lib/*"]
    }
  },

  "include": [
    "src/**/*", // Bao gồm toàn bộ source
    "__tests__/**/*" // Bao gồm thư mục test
  ],

  "exclude": [
    "node_modules", // Bỏ qua thư viện
    "dist", // Bỏ qua thư mục build
    ".next" // Bỏ qua output của Next.js
  ]
}
```

### 2.2 Không Bao Giờ Dùng `any`

```typescript
// ❌ KHÔNG
function processData(data: any) {
  return data.value;
}

// ✅ NÊN DÙNG
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return (data as { value: string }).value;
  }
  throw new Error('Invalid data shape');
}

// ✅ Hoặc dùng Zod parse
const DataSchema = z.object({ value: z.string() });
function processData(data: unknown) {
  return DataSchema.parse(data).value;
}
```

### 2.3 Branded Types (P3 — Financial Domain)

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

// Factory functions
export const AssetId = (id: string): AssetId => id as AssetId;
export const Price = (value: number): Price => value as Price;
export const Quantity = (value: number): Quantity => value as Quantity;

// Không thể nhầm lẫn
const assetId = AssetId('VNM');
const price = Price(50000);
// price = assetId;
// ❌ Compile error — Type 'AssetId' is not assignable to type 'Price'
```

### 2.4 Type Inference vs Explicit Types

```typescript
// ✅ Inference cho literal/simple types
const count = 0; // number — không cần :number
const isActive = true; // boolean
const items = ['a', 'b']; // string[]

// ✅ Explicit cho function return, public API, complex types
interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
}

function getUser(id: string): User {
  // ...
}

// ✅ Explicit cho React component props
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  isLoading?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  isLoading,
}: ProductCardProps) {
  // ...
}
```

### 2.5 Discriminated Unions cho State

```typescript
// ✅ Pattern này cho mọi async state
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

// Không bao giờ có data khi loading, không bao giờ có error khi success
function handleState<T>(state: AsyncState<T>) {
  switch (state.status) {
    case 'idle': return <Idle />;
    case 'loading': return <Loading />;
    case 'success': return <Data data={state.data} />; // Tự động narrow
    case 'error': return <Error message={state.error.message} />;
  }
}
```

## 3. REACT — COMPONENT PATTERNS

### 3.1 Function Components Only

```typescript
// ❌ KHÔNG — Class component
class UserProfile extends React.Component { ... }

// ✅ NÊN — Function component
export function UserProfile({ userId }: UserProfileProps) {
  const { data, status } = useUser(userId);
  // ...
}
```

### 3.2 Props Interface Naming

```typescript
// ✅ ComponentName + Props
interface ButtonProps { ... }
interface UserCardProps { ... }

// ❌ Không dùng I prefix
interface IButtonProps { ... } // KHÔNG
```

### 3.3 Default Props Pattern

```typescript
// ✅ Destructure với default trong function signature
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  children,
}: ButtonProps) {
  // ...
}

// ❌ KHÔNG dùng defaultProps
Button.defaultProps = { variant: 'primary' }; // DEPRECATED
```

### 3.4 Event Handler Naming

```typescript
// ✅ on[Event] cho props, handle[Event] cho internal
interface ProductFormProps {
  onSubmit: (values: ProductFormValues) => void;
  onCancel: () => void;
}

export function ProductForm({ onSubmit, onCancel }: ProductFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}
```

### 3.5 useEffect — Dependencies & Cleanup

```typescript
// ✅ Dependencies đầy đủ, cleanup rõ ràng
export function useWebSocket(url: string) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    // Cleanup — không bao giờ quên
    return () => {
      ws.close();
    };
  }, [url]); // url là dependency duy nhất

  return message;
}

// ❌ KHÔNG — missing dependency hoặc empty array khi không đúng
useEffect(() => {
  fetchData(userId);
}, []); // userId thay đổi nhưng effect không chạy lại
```

### 3.6 Custom Hooks — Naming & Rules

```typescript
// ✅ Bắt đầu bằng "use", return object
export function useOrderPipeline(orderId: string) {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // Logic phức tạp tách khỏi UI
  const transition = useCallback((nextStatus: OrderStatus) => {
    // validation, side effects...
  }, []);

  return {
    state,
    transition,
    canTransition: (to: OrderStatus) => validateTransition(state.status, to),
  };
}

// Usage
function OrderDetail({ orderId }: { orderId: string }) {
  const { state, transition, canTransition } = useOrderPipeline(orderId);
  // UI chỉ render, không chứa logic business
}
```

## 4. STATE MANAGEMENT — CONSISTENCY

### 4.1 Philosophy (Áp dụng cả 3 project)

| State Type          | Tool                                  | Rule                             |
| ------------------- | ------------------------------------- | -------------------------------- |
| **Server state**    | RTK Query (P1) / React Query (P2, P3) | Cache, invalidate, retry         |
| **Global UI state** | Zustand                               | Sidebar, theme, modal, filter    |
| **Local UI state**  | useState / useReducer                 | Form input, toggle, local list   |
| **Derived state**   | useMemo / selector                    | Không lưu state có thể tính được |
| **URL state**       | URL params / query string             | Filter, pagination, sort         |

### 4.2 Không Mix State Tools Cho Cùng Mục Đích

```typescript
// ❌ KHÔNG — RTK Query và React Query cùng fetch users
const { data: usersFromRtk } = useGetUsersQuery();
const { data: usersFromRq } = useUsers(); // React Query

// ✅ NÊN — Một nguồn sự thật cho server state
// P1: Chỉ RTK Query
// P2/P3: Chỉ React Query
```

### 4.3 Zustand Store Pattern

```typescript
// stores/ui-store.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UIState {
  sidebar: { isOpen: boolean; activeItem: string };
  modal: { isOpen: boolean; content: React.ReactNode | null };
  theme: 'light' | 'dark' | 'system';
}

interface UIActions {
  toggleSidebar: () => void;
  setActiveItem: (item: string) => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  setTheme: (theme: UIState['theme']) => void;
}

export const useUIStore = create<UIState & UIActions>()(
  immer((set) => ({
    sidebar: { isOpen: true, activeItem: 'dashboard' },
    modal: { isOpen: false, content: null },
    theme: 'system',

    toggleSidebar: () =>
      set((state) => {
        state.sidebar.isOpen = !state.sidebar.isOpen;
      }),

    setActiveItem: (item) =>
      set((state) => {
        state.sidebar.activeItem = item;
      }),

    openModal: (content) =>
      set((state) => {
        state.modal = { isOpen: true, content };
      }),

    closeModal: () =>
      set((state) => {
        state.modal = { isOpen: false, content: null };
      }),

    setTheme: (theme) =>
      set((state) => {
        state.theme = theme;
      }),
  })),
);

// Selector để tránh re-render không cần thiết
const sidebarOpen = useUIStore((state) => state.sidebar.isOpen);
// Không re-render khi theme thay đổi
```

## 5. ASYNC PATTERNS

### 5.1 Data Fetching — Legacy Query Pattern (Explicit Loading States)

> Sử dụng cho tương tác UI (tìm kiếm, lọc, phân trang, cuộn vô hạn) khi cần giữ nguyên UI trước đó.

```typescript
// ✅ Pattern chuẩn cho mọi query
function useProducts(filters: ProductFilters) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      if (error instanceof NetworkError) return failureCount < 3;
      return false; // Don't retry 4xx errors
    },
  });

  return {
    products: data ?? [],
    isLoading,
    isError,
    error: error instanceof Error ? error.message : 'Unknown error',
    refetch,
  };
}

// UI usage
function ProductList() {
  const { products, isLoading, isError, error, refetch } = useProducts(filters);

  if (isLoading) return <ProductSkeleton />;
  if (isError) return <ErrorState message={error} onRetry={refetch} />;
  if (products.length === 0) return <EmptyState />;

  return <ProductGrid products={products} />;
}
```

### 5.2 Mutation — Optimistic Update với Rollback

```typescript
// ✅ Pattern cho mọi mutation có thể optimistic
function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProductApi,

    onMutate: async (newProduct) => {
      // Cancel outgoing refetches
      // Hủy tất cả các yêu cầu refetch đang chờ xử lý cho query "products"
      await queryClient.cancelQueries({ queryKey: ['products'] });

      // Snapshot previous value
      const previousProducts = queryClient.getQueryData<Product[]>([
        'products',
      ]);

      // Optimistically update
      queryClient.setQueryData(['products'], (old: Product[] | undefined) =>
        old?.map((p) => (p.id === newProduct.id ? { ...p, ...newProduct } : p)),
      );

      // Return context for rollback
      return { previousProducts };
    },

    onError: (err, newProduct, context) => {
      // Rollback on error
      if (context?.previousProducts) {
        queryClient.setQueryData(['products'], context.previousProducts);
      }
      toast.error(`Failed to update product: ${err.message}`);
    },

    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}
```

### 5.3 Suspense & Error Boundary Strategy — Modern Query Pattern

#### Tải dữ liệu ban đầu (Initial Data Loading)

- Sử dụng **Suspense** cho lần tải dữ liệu đầu tiên.
- Sử dụng **Error Boundary** để xử lý lỗi từ query.
- Component chỉ nên tập trung vào các trạng thái nghiệp vụ (business states).

#### Cập nhật dữ liệu khi người dùng tương tác (Interactive Updates)

Áp dụng cho các trường hợp:

- Tìm kiếm (Search)
- Lọc dữ liệu (Filter)
- Phân trang (Pagination)
- Cuộn tải thêm (Infinite Scroll)
- Tự động tải lại dữ liệu nền (Background Refetch)

**Nguyên tắc:**

- Sử dụng `isFetching` hoặc `isFetchingNextPage` để hiển thị trạng thái đang tải.
- **Không** sử dụng `Suspense` để chặn toàn bộ trang.

#### Thao tác thay đổi dữ liệu (Mutations)

- `useMutation` tự quản lý trạng thái đang xử lý (`pending`) và lỗi (`error`).
- **Không** sử dụng `Suspense` cho mutation.

#### Initial Loading

> Khi sử dụng **Suspense** hoặc **`throwOnError`/`useErrorBoundary`** với TanStack Query, `QueryErrorResetBoundary` cho phép reset trạng thái lỗi của các query bên trong nó. Khi người dùng nhấn **Try again**, `ErrorBoundary` và các query đều được reset, giúp query có thể thực thi lại thay vì tiếp tục ném lỗi cũ.

```tsx
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
// Cách 1: Fallback tĩnh: <ErrorBoundary fallback={<ErrorState />}> ... </ErrorBoundary>
// Cách 2: Fallback có Retry (khuyến nghị)
<QueryErrorResetBoundary>
  {({ reset }) => (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <ErrorState onRetry={resetErrorBoundary} />
      )}
    >
      <Suspense fallback={<ProductSkeleton />}>
        <ProductList />
      </Suspense>
    </ErrorBoundary>
  )}
</QueryErrorResetBoundary>;
```

**Hook**

```ts
function useProducts(filters: ProductFilters) {
  const { data } = useSuspenseQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000,
  });

  return {
    products: data,
  };
}
```

**Component**

```tsx
function ProductList() {
  const { products } = useProducts(filters);

  if (products.length === 0) return <EmptyState />;

  return <ProductGrid products={products} />;
}
```

---

#### Interactive Loading

```tsx
//Render:
// <>
//     {isFetching && <LoadingSpinner />}
//     <ProductGrid />
// </>
```

Không dùng Suspense cho

- Search
- Filter
- Pagination
- Infinite Scroll

---

#### Mutation

Không dùng Suspense

```tsx
const mutation = useMutation(...);

<Button disabled={mutation.isPending}>
    Save
</Button>
```

## 6. ERROR HANDLING

### 6.1 Error Hierarchy

```typescript
// lib/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public isRetryable: boolean = false,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class NetworkError extends AppError {
  constructor(message = 'Network error') {
    super(message, 'NETWORK_ERROR', 503, true);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string,
    public fields: Record<string, string>,
  ) {
    super(message, 'VALIDATION_ERROR', 400, false);
    this.name = 'ValidationError';
  }
}

export class AuthError extends AppError {
  constructor(message = 'Authentication required') {
    super(message, 'AUTH_ERROR', 401, false);
    this.name = 'AuthError';
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 'NOT_FOUND', 404, false);
    this.name = 'NotFoundError';
  }
}
```

### 6.2 Error Boundary Pattern

```typescript
// components/error-boundary.tsx
import { Component, ReactNode } from 'react';
import { AppError } from '@/lib/errors';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to Sentry
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div role="alert" className="p-6 rounded-lg border border-red-200 bg-red-50">
          <h2 className="text-lg font-semibold text-red-800">Something went wrong</h2>
          <p className="mt-2 text-red-600">
            {this.state.error instanceof AppError
              ? this.state.error.message
              : 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage — per module
<ErrorBoundary fallback={<CommerceErrorFallback />}>
  <CommerceModule />
</ErrorBoundary>
```

#### Khi nào `error instanceof AppError`?

`ErrorBoundary` sẽ bắt mọi lỗi được throw trong quá trình render, constructor hoặc lifecycle của các component con. Nếu lỗi được tạo từ `AppError`, điều kiện `error instanceof AppError` sẽ trả về `true`, cho phép hiển thị thông báo lỗi thân thiện hơn.

```tsx
function CommerceModule() {
  const product = null;

  if (!product) {
    throw new AppError('Unable to load product information.');
  }

  return <div>...</div>;
}
```

Trong trường hợp này, `ErrorBoundary` sẽ nhận được một `AppError`, nên đoạn mã sau sẽ thực thi nhánh `true`:

```tsx
this.state.error instanceof AppError;
```

và hiển thị:

```tsx
<p>{this.state.error.message}</p>
```

Nếu thay vào đó component throw một `Error` thông thường:

```tsx
throw new Error('Unexpected error');
```

thì `instanceof AppError` sẽ trả về `false` và `ErrorBoundary` sẽ hiển thị thông báo mặc định:

```text
An unexpected error occurred
```

> **Lưu ý:** `ErrorBoundary` chỉ bắt lỗi phát sinh trong quá trình render, constructor hoặc lifecycle của component. Nó không tự động bắt lỗi trong event handlers (`onClick`, `onSubmit`, ...) hoặc các tác vụ bất đồng bộ như `fetch`, `setTimeout` hay `Promise`.

### 6.2 Query Error Boundary

Khi sử dụng **Suspense** hoặc `useErrorBoundaries` trong các query, bạn cần một cách để báo cho các query biết rằng bạn muốn **thử lại** khi component được render lại sau khi xảy ra lỗi.

`QueryErrorResetBoundary` cung cấp cơ chế để **reset trạng thái lỗi của các query** nằm trong phạm vi (boundary) của component. Điều này cho phép các query được thực thi lại thay vì tiếp tục ném ra lỗi cũ khi component render lại.

```tsx
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        <Page />
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
```

---

### DEMO MODERN APPROACH

```tsx
// ============================================
// lib/api.ts — API Layer
// ============================================

import {
  AppError,
  NetworkError,
  ValidationError,
  NotFoundError,
} from '@/lib/errors';

const API_BASE = '/api';

// --- Helper: Xử lý response và throw error hierarchy ---
async function handleResponse<T>(res: Response): Promise<T> {
  if (res.ok) return res.json();

  // Parse error body nếu có
  const body = await res.json().catch(() => ({}));

  switch (res.status) {
    case 400:
      throw new ValidationError(
        body.message || 'Invalid input',
        body.fields || {},
      );
    case 401:
      throw new AuthError(body.message || 'Authentication required');
    case 404:
      throw new NotFoundError(body.resource || 'Resource');
    case 408:
    case 503:
      throw new NetworkError(body.message || 'Service unavailable');
    default:
      throw new AppError(
        body.message || `Request failed with status ${res.status}`,
        `HTTP_${res.status}`,
        res.status,
        res.status >= 500, // Retryable nếu server error
      );
  }
}

// --- 1. Fetch Products (cho query) ---
export async function fetchProducts(filters: {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}): Promise<{ items: Product[]; hasMore: boolean }> {
  const params = new URLSearchParams();
  if (filters.search) params.set('search', filters.search);
  if (filters.category && filters.category !== 'all')
    params.set('category', filters.category);
  if (filters.page) params.set('page', String(filters.page));
  if (filters.limit) params.set('limit', String(filters.limit));

  const res = await fetch(`${API_BASE}/products?${params}`);
  return handleResponse(res);
}

// --- 2. Update Product (cho mutation) ⭐ ---
export async function updateProductApi(
  updatedProduct: Partial<Product> & { id: string },
): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${updatedProduct.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProduct),
  });

  return handleResponse<Product>(res);
}

// ============================================
// HOOKS — Đầy đủ các pattern
// ============================================

import {
  useQueryClient,
  useSuspenseQuery,
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
import { Suspense, useState, useCallback, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { updateProductApi, fetchProducts } from '@/lib/api';
import { Product } from '@/types';

// --- 1. INITIAL LOAD: Suspense Query ---
function useProducts(filters: { search: string; category: string }) {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000,
  });
  return { products: data, isFetching };
}

// --- 2. PAGINATION: useInfiniteQuery + isFetchingNextPage ---
function usePaginatedProducts(filters: { search: string }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, // ⭐ Chỉ true khi đang load page tiếp theo
    isFetching, // ⭐ True khi background refetch hoặc initial load
    status,
  } = useInfiniteQuery({
    queryKey: ['products-infinite', filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchProducts({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });

  const products = data?.pages.flatMap((page) => page.items) ?? [];

  return {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, // Cho UI "Loading more..."
    isFetching, // Cho UI "Updating..." khi search/filter
  };
}

// --- 3. MUTATION: Optimistic Update ---
function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    // ⭐ mutationFn gọi API layer
    mutationFn: updateProductApi,

    onMutate: async (newProduct) => {
      // 1. Cancel mọi refetch đang chạy cho query 'products'
      await queryClient.cancelQueries({ queryKey: ['products'] });

      // 2. Snapshot data cũ để rollback
      const previousProducts = queryClient.getQueryData<Product[]>([
        'products',
      ]);
      const previousInfinite = queryClient.getQueryData(['products-infinite']);

      // 3. Optimistically update TẤT CẢ query liên quan
      queryClient.setQueryData(['products'], (old: Product[] | undefined) =>
        old?.map((p) => (p.id === newProduct.id ? { ...p, ...newProduct } : p)),
      );

      // Cũng update infinite query cache nếu có
      queryClient.setQueryData(['products-infinite'], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            items: page.items.map((p: Product) =>
              p.id === newProduct.id ? { ...p, ...newProduct } : p,
            ),
          })),
        };
      });

      // 4. Trả về context cho rollback
      return { previousProducts, previousInfinite };
    },

    onError: (err, newProduct, context) => {
      // 5. Rollback về snapshot nếu API fail
      if (context?.previousProducts) {
        queryClient.setQueryData(['products'], context.previousProducts);
      }
      if (context?.previousInfinite) {
        queryClient.setQueryData(
          ['products-infinite'],
          context.previousInfinite,
        );
      }

      // Toast error (AppError đã có message)
      toast.error(`Failed to update: ${err.message}`);
    },

    onSuccess: (data, variables) => {
      // 6. Optional: Toast success
      toast.success(`Updated "${data.name}"`);
    },

    onSettled: (data, error, variables) => {
      // 7. Dù thành công hay lỗi, invalidate để đồng bộ với server
      // Không await ở đây để không block UI
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['products-infinite'] });
    },
  });
}

// ============================================
// UI COMPONENTS
// ============================================

function ProductSkeleton() {
  return (
    <div className='space-y-3'>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className='h-20 bg-gray-200 rounded animate-pulse'
        />
      ))}
    </div>
  );
}

function LoadingSpinner({ text }: { text: string }) {
  return (
    <div className='flex items-center gap-2 text-blue-600 text-sm py-2'>
      <span className='animate-spin'>↻</span>
      {text}
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className='p-6 border border-red-200 bg-red-50 rounded text-center'>
      <h2 className='text-lg font-semibold text-red-800'>
        Something went wrong
      </h2>
      <button
        onClick={onRetry}
        className='mt-4 px-4 py-2 bg-red-600 text-white rounded'
      >
        Try again
      </button>
    </div>
  );
}

function EmptyState() {
  return <p className='text-gray-500 py-8 text-center'>No products found.</p>;
}

// ============================================
// UTILS
// ============================================

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// ============================================
// MAIN PAGE — Đầy đủ flow: Search + Pagination + Background Refetch
// ============================================

export default function ProductPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const debouncedSearch = useDebounce(search, 300); // ⭐ Debounce search input

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-6'>Product Catalog</h1>

      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  SEARCH + FILTER — INTERACTIVE UPDATE                        ║
        ║  • KHÔNG dùng Suspense                                       ║
        ║  • isFetching hiển thị "Updating..." indicator nhẹ          ║
        ║  • Giữ nguyên list cũ trong lúc fetch                        ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <div className='flex gap-3 mb-4'>
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border p-2 rounded flex-1'
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='border p-2 rounded'
        >
          <option value='all'>All Categories</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
        </select>
      </div>

      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  INITIAL LOAD — Suspense + ErrorBoundary                     ║
        ║  • Chỉ chạy 1 lần khi mount                                  ║
        ║  • Block UI, show skeleton                                   ║
        ║  • Nếu lỗi → ErrorBoundary catch + retry reset được          ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <ErrorState onRetry={resetErrorBoundary} />
            )}
          >
            <Suspense fallback={<ProductSkeleton />}>
              <ProductContent filters={{ search: debouncedSearch, category }} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

// ============================================
// PRODUCT CONTENT — Business states + Interactive states
// ============================================

function ProductContent({
  filters,
}: {
  filters: { search: string; category: string };
}) {
  // ⭐ Với Pagination dùng useInfiniteQuery
  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, // true = đang load page tiếp (click "Load more")
    isFetching, // true = background refetch hoặc search/filter mới
  } = usePaginatedProducts({ search: filters.search });

  // ⭐ Nếu không dùng infinite scroll, dùng useProducts thường:
  // const { products, isFetching } = useProducts(filters);

  if (products.length === 0 && !isFetching) return <EmptyState />;

  return (
    <div>
      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  BACKGROUND REFETCH / SEARCH / FILTER INDICATOR              ║
        ║  • isFetching = true khi:                                    ║
        ║    - Query bị invalidate (mutation settled)                  ║
        ║    - Window focus refetch                                    ║
        ║    - Search/filter params đổi (stale-while-revalidate)       ║
        ║  • Hiển thị nhẹ NHƯNG KHÔNG block UI                         ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      {isFetching && !isFetchingNextPage && (
        <LoadingSpinner text='Updating data...' />
      )}

      {/* Product Grid */}
      <div className='grid grid-cols-3 gap-4 mb-6'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  PAGINATION — Load More                                      ║
        ║  • isFetchingNextPage = true khi đang fetch page tiếp        ║
        ║  • Giữ nguyên products cũ, thêm spinner ở dưới               ║
        ║  • KHÔNG dùng Suspense ở đây                                 ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      {hasNextPage && (
        <div className='text-center'>
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className='px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
          >
            {isFetchingNextPage ? (
              <span className='flex items-center gap-2'>
                <span className='animate-spin'>↻</span> Loading more...
              </span>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}

      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  INFINITE SCROLL (Alternative to Load More button)           ║
        ║  • Tự động fetch khi scroll đến cuối                         ║
        ║  • isFetchingNextPage hiển thị ở bottom                      ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      {/* <InfiniteScrollTrigger 
        onIntersect={() => hasNextPage && fetchNextPage()} 
      />
      {isFetchingNextPage && <LoadingSpinner text="Loading more..." />} */}
    </div>
  );
}

// ============================================
// PRODUCT CARD — Mutation + Optimistic
// ============================================

function ProductCard({ product }: { product: Product }) {
  const update = useUpdateProduct();

  return (
    <div
      className={`border p-4 rounded ${update.isPending ? 'opacity-70' : ''}`}
    >
      <h3 className='font-semibold'>{product.name}</h3>
      <p className='text-gray-600'>${product.price}</p>

      {/* 
        ╔══════════════════════════════════════════════════════════════╗
        ║  MUTATION — Optimistic Update                                ║
        ║  • UI update ngay lập tức (cache đã set trong onMutate)      ║
        ║  • isPending = true → disable button, giảm opacity           ║
        ║  • Nếu lỗi → rollback tự động, toast error                   ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <button
        disabled={update.isPending}
        onClick={() => update.mutate({ ...product, price: product.price + 10 })}
        className='mt-2 text-sm text-blue-600 disabled:text-gray-400'
      >
        {update.isPending ? 'Saving...' : `+ $10`}
      </button>
    </div>
  );
}
```

---

### Tóm tắt các trạng thái tải

| Tình huống                 | Hook/State           | UI Pattern                         | Lý do không dùng Suspense |
| -------------------------- | -------------------- | ---------------------------------- | ------------------------- |
| **Lần tải đầu**            | `useSuspenseQuery`   | `Suspense fallback={<Skeleton />}` | —                         |
| **Search / Filter**        | `isFetching`         | Indicator nhẹ "Updating..."        | Giữ list cũ, UX mượt      |
| **Pagination (Load More)** | `isFetchingNextPage` | Spinner ở button bottom            | Giữ products đã load      |
| **Background Refetch**     | `isFetching`         | Indicator nhẹ                      | Silent refresh            |
| **Infinite Scroll**        | `isFetchingNextPage` | Spinner ở bottom list              | Tự động, không block      |
| **Mutation**               | `isPending`          | Disable + opacity                  | Optimistic update         |

## 7. ESLINT CONFIGURATION

### 7.1 Base Config (`.eslintrc.cjs`)

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', // Must be last
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
    },
  },
  rules: {
    /* TypeScript Strict */
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],

    /* React */
    'react/react-in-jsx-scope': 'off', // React 17+ JSX Transform
    'react/prop-types': 'off', // TypeScript thay thế
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-key': 'error',

    /* Import */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',

    /* General */
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
  },
};
```

### 7.2 Prettier Config (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 7.3 CI Enforcement

```yaml
# .github/workflows/ci.yml (snippet)
- name: Lint
  run: |
    npm run lint
    npm run type-check
    npm run format:check

# package.json scripts
{
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "type-check": "tsc --noEmit",
  "format": "prettier --write \"src/**/*.{ts,tsx}\"",
  "format:check": "prettier --check \"src/**/*.{ts,tsx}\""
}
```

## 8. NAMING CONVENTION QUICK REF

| Category             | Convention                   | Example                             |
| -------------------- | ---------------------------- | ----------------------------------- |
| Component file       | PascalCase                   | `ProductCard.tsx`                   |
| Hook file            | camelCase, prefix `use`      | `useOrderPipeline.ts`               |
| Utility file         | camelCase                    | `formatCurrency.ts`                 |
| Type/Interface       | PascalCase                   | `Product`, `OrderStatus`            |
| Enum                 | PascalCase, singular         | `OrderStatus` (not `OrderStatuses`) |
| Constant             | SCREAMING_SNAKE_CASE         | `MAX_RETRY_COUNT`                   |
| Boolean variable     | prefix `is`, `has`, `should` | `isLoading`, `hasError`             |
| Event handler        | prefix `handle`              | `handleSubmit`                      |
| Callback prop        | prefix `on`                  | `onSubmit`, `onChange`              |
| Async function       | suffix `Async` hoặc verb     | `fetchProducts`, `submitFormAsync`  |
| CSS class (Tailwind) | kebab-case                   | `product-card`, `btn-primary`       |

## 9. FILE ORGANIZATION (Preview — Chi tiết ở 02-folder-structure.md)

```typescript
// ✅ Import order — ESLint enforce
import { useState } from 'react'; // 1. React
import { useQuery } from '@tanstack/react-query'; // 2. External
import { Button } from '@/components/ui/button'; // 3. Internal (@/*)
import { useAuth } from '@/hooks/use-auth'; // 3. Internal
import { formatCurrency } from '@/utils/format'; // 3. Internal
import type { Product } from '@/types/product'; // 4. Types
import styles from './ProductCard.module.css'; // 5. Relative

// Component definition
export interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // ...
}
```

## 10. FORBIDDEN PATTERNS

| Pattern                        | Why Forbidden                                 | Alternative                                                                          |
| ------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| `any` type                     | Mất type safety hoàn toàn                     | `unknown` + type guard, Zod parse                                                    |
| `console.log` trong production | Rò rỉ thông tin, không truy vết được          | Pino structured logging                                                              |
| `==` (loose equality)          | Bug khó phát hiện                             | `===` (strict equality)                                                              |
| `var`                          | Hoisting confusion                            | `const` / `let`                                                                      |
| `React.FC`                     | Không cần thiết, implicit children            | Function component thường                                                            |
| Index làm key trong list       | Bug khi reorder/filter                        | Stable ID từ data                                                                    |
| Inline style                   | Không maintainable, không optimize được       | Tailwind class, CSS module                                                           |
| `useEffect` fetch data         | Race condition, không cache                   | React Query / RTK Query                                                              |
| Prop drilling > 2 levels       | Khó maintain                                  | Context hoặc state management                                                        |
| `setState` trong loop          | Batch update không như mong đợi / stale state | Functional update hoặc nếu bạn biết trước cần tăng bao nhiêu: **dùng** `restructure` |

## 11. REVISION HISTORY

| Version | Date       | Changes                                                            |
| ------- | ---------- | ------------------------------------------------------------------ |
| 1.0.0   | 2026-07-07 | Initial version — TypeScript strict, React patterns, ESLint config |

---

> **"Standards không phải để nhớ — mà để ESLint và Prettier enforce. Bạn chỉ cần nhớ: `any` là kẻ thù, `unknown` là bạn, và mọi quyết định style phải có lý do."**

---

Tóm tắt:

1. **TypeScript Strict Config** — `tsconfig.json` dùng chung, zero `any`, branded types cho P3
2. **React Component Patterns** — function components, props naming, default props, event handler naming
3. **State Management Consistency** — server state vs UI state, Zustand pattern với Immer
4. **Async Patterns** — data fetching error handling, optimistic update với rollback
5. **Error Handling** — custom error hierarchy, Error Boundary per module
6. **ESLint + Prettier Config** — đầy đủ rules, CI enforcement
7. **Naming Convention** — bảng tra cứu nhanh
8. **Forbidden Patterns** — 10 pattern cấm và lý do
