# React Handbook

## Quick Reference for Middle & Senior Developers

> **Mục đích**: Tài liệu ôn tập nhanh, không dành cho người mới học.  
> **Phiên bản**: React 18+ | TypeScript | Modern Patterns

## Mục lục

1. [Fundamentals](#_1-fundamentals)
2. [Hooks Deep Dive](#_2-hooks-deep-dive)
3. [Component Lifecycle & Effects](#_3-component-lifecycle--effects)
4. [State Management Decision Tree](#_4-state-management-decision-tree)
5. [Performance Optimization](#_5-performance-optimization)
6. [Advanced Patterns](#_6-advanced-patterns)
7. [React 18+ Concurrent Features](#_7-react-18-concurrent-features)
8. [Forms & Validation](#_8-forms--validation)
9. [Data Fetching](#_9-data-fetching)
10. [Routing](#_10-routing)
11. [Testing](#_11-testing)
12. [TypeScript with React](#_12-typescript-with-react)
13. [SSR & Server Components](#_13-ssr--server-components)
14. [Styling Strategies](#_14-styling-strategies)
15. [Decision Trees](#_15-decision-trees)
16. [Anti-patterns Checklist](#_16-anti-patterns-checklist)

---

## 1. Fundamentals

### JSX Rules

- Một root element duy nhất (hoặc `<></>` Fragment)
- `className` thay vì `class`, `htmlFor` thay vì `for`
- Expression: `{expression}` — không dùng statement
- Conditional: `{condition ? <A /> : <B />}` hoặc `{condition && <A />}`
- Lists: luôn có `key` stable, **KHÔNG** dùng index cho dynamic lists

### Component Types

```tsx
// Function Component (khuyên dùng)
function Card({ title, children }: CardProps) {
  return <div>{title}{children}</div>;
}

// Class Component (legacy — chỉ còn Error Boundaries)
class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) { ... }
  componentDidCatch(error, info) { ... }
}
```

### Props vs State

|                    | Props         | State              |
| ------------------ | ------------- | ------------------ |
| Source             | Parent        | Component internal |
| Mutable            | ❌ Read-only  | ✅ `setState`      |
| Triggers re-render | ✅            | ✅                 |
| Use case           | Configuration | Dynamic data       |

### Controlled vs Uncontrolled

```tsx
// Controlled — React owns the value
const [value, setValue] = useState('');
<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>;

// Uncontrolled — DOM owns the value
const inputRef = useRef<HTMLInputElement>(null);
<input
  ref={inputRef}
  defaultValue='initial'
/>;
// Đọc: inputRef.current.value
```

---

## 2. Hooks Deep Dive

### Core Hooks

#### `useState`

```tsx
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);

// Functional update — dùng khi new state phụ thuộc old state
setCount((prev) => prev + 1);

// Lazy initialization — tránh re-compute initial state
const [state, setState] = useState(() => expensiveComputation());
```

#### `useEffect`

```tsx
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup (component unmount hoặc deps change)
  };
}, [dependency1, dependency2]); // [] = mount only, no deps = every render

// Các pattern phổ biến:
// 1. Subscribe/unsubscribe
useEffect(() => {
  const sub = store.subscribe(callback);
  return () => sub.unsubscribe();
}, [store]);

// 2. Fetch with cleanup
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then(setData);
  return () => controller.abort();
}, [url]);

// 3. Sync with external system (DOM, storage)
useEffect(() => {
  document.title = title;
}, [title]);
```

#### `useRef`

```tsx
// 1. DOM reference
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

// 2. Mutable value persists across renders (không trigger re-render)
const renderCount = useRef(0);
renderCount.current++;

// 3. Previous value pattern
const prevValue = useRef(value);
useEffect(() => {
  prevValue.current = value;
}, [value]);
```

#### `useReducer`

```tsx
// Khi state logic phức tạp hoặc nhiều related states
const [state, dispatch] = useReducer(reducer, initialState);

// Thay thế nhiều useState liên quan:
// ❌ const [loading, setLoading] = useState(false);
// ❌ const [error, setError] = useState(null);
// ❌ const [data, setData] = useState(null);
// ✅ Một reducer quản lý tất cả
```

#### `useMemo` vs `useCallback`

```tsx
// useMemo — cache computed VALUE
const filteredList = useMemo(
  () => items.filter((item) => item.active),
  [items],
);

// useCallback — cache FUNCTION reference
const handleSubmit = useCallback((data: FormData) => {
  api.submit(data);
}, []); // deps empty nếu không phụ thuộc external values

// ⚠️ KHÔNG dùng cho primitive values hoặc simple operations
// ✅ DÙNG khi: expensive computation, prop cho memo child, effect dependency
```

#### `useContext`

```tsx
// Tạo context
const ThemeContext = createContext<Theme>('light');

// Provider
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>;

// Consume
const theme = useContext(ThemeContext);

// ⚠️ Context chỉ cho data ít thay đổi. State thay đổi liên tục → dùng external store
```

### Rules of Hooks

1. Chỉ gọi ở **top level** — không trong if/for/nested functions
2. Chỉ gọi trong **React functions** — components hoặc custom hooks
3. Custom hooks bắt đầu bằng `use`

### Custom Hooks Pattern

```tsx
// useLocalStorage.ts
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}
```

---

## 3. Component Lifecycle & Effects

### Function Component Lifecycle (Hooks)

```
Mount    →    Update    →    Unmount
  │              │              │
  ▼              ▼              ▼
useEffect   useEffect     Cleanup function
  ([])      ([deps])      trong useEffect
```

### Effect Timing

| Hook                 | When it runs         | Use case                                 |
| -------------------- | -------------------- | ---------------------------------------- |
| `useEffect`          | After paint (async)  | Most side effects (API, subscriptions)   |
| `useLayoutEffect`    | Before paint (sync)  | DOM measurements, prevent visual flicker |
| `useInsertionEffect` | Before DOM mutations | CSS-in-JS injection                      |

```tsx
// useLayoutEffect — đo lường DOM trước khi browser paint
useLayoutEffect(() => {
  const { width } = ref.current.getBoundingClientRect();
  setTooltipPosition(calculatePosition(width));
}, []);
```

### Cleanup Patterns

```tsx
// 1. Event listeners
useEffect(() => {
  const handler = () => setIsOnline(navigator.onLine);
  window.addEventListener('online', handler);
  return () => window.removeEventListener('online', handler);
}, []);

// 2. WebSocket
useEffect(() => {
  const ws = new WebSocket(url);
  ws.onmessage = (msg) => setData(msg.data);
  return () => ws.close();
}, [url]);

// 3. Debounce/Throttle
useEffect(() => {
  const timer = setTimeout(() => setDebouncedValue(value), 500);
  return () => clearTimeout(timer);
}, [value]);
```

---

## 4. State Management Decision Tree

### Hierarchy (từ đơn giản đến phức tạp)

```
useState (local)
    ↓
Lift State Up (shared siblings)
    ↓
Context (cross-tree, low-frequency updates)
    ↓
External Store (app-wide, complex logic)
```

### When to use what

| Scale                   | Solution                    | Example                |
| ----------------------- | --------------------------- | ---------------------- |
| 1 component             | `useState`                  | Form input, toggle     |
| 2-3 nearby components   | Lift state to common parent | Modal open state       |
| Cross-tree, read-heavy  | Context                     | Theme, locale, auth    |
| Cross-tree, write-heavy | Zustand / Redux RTK         | Shopping cart, filters |
| Server state            | TanStack Query              | API data, caching      |
| Form state              | React Hook Form             | Complex forms          |

### Context Anti-pattern

```tsx
// ❌ BAD: Context chứa state thay đổi liên tục
const AppContext = createContext({ count: 0, setCount: () => {} });
// Mỗi lần count thay đổi → TẤT CẢ consumers re-render

// ✅ GOOD: Tách thành nhiều contexts hoặc dùng external store
const ThemeContext = createContext('light'); // Static-ish
const UserContext = createContext(null); // Rarely changes
// State thay đổi nhiều → Zustand/Redux
```

### Zustand Quick Reference

```tsx
// store.ts
import { create } from 'zustand';

interface BearStore {
  bears: number;
  increase: () => void;
}

export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

// Component.tsx
const bears = useBearStore((state) => state.bears); // Selective subscription
```

---

## 5. Performance Optimization

### React.memo

```tsx
// Wrap component để tránh re-render khi props không đổi
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return items.map((item) => (
    <Item
      key={item.id}
      {...item}
    />
  ));
});

// Custom comparison (hiếm khi cần)
React.memo(Component, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

### useMemo / useCallback Checklist

**DÙNG khi:**

- Giá trị tính toán nặng (>100ms)
- Object/array/function là prop của `React.memo` child
- Là dependency của `useEffect` khác
- Cần reference stable (setState functions, callbacks)

**KHÔNG DÙNG khi:**

- Giá trị primitive đơn giản
- Không truyền xuống component con
- Component không bị re-render do parent

### Code Splitting

```tsx
// Route-based
const Dashboard = lazy(() => import('./Dashboard'));

<Suspense fallback={<Spinner />}>
  <Routes>
    <Route
      path='/dashboard'
      element={<Dashboard />}
    />
  </Routes>
</Suspense>;

// Component-based (heavy components)
const HeavyChart = lazy(() => import('./HeavyChart'));
```

### Virtualization

```tsx
// react-window cho list dài
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={500}
  itemCount={10000}
  itemSize={50}
  width='100%'
>
  {({ index, style }) => <div style={style}>{items[index]}</div>}
</FixedSizeList>;
```

### Performance Checklist

- [ ] Đo lường trước khi optimize (React DevTools Profiler)
- [ ] `key` prop stable cho lists
- [ ] Tránh inline objects/functions khi truyền props
- [ ] `React.memo` cho expensive components
- [ ] Code splitting cho routes và heavy components
- [ ] Virtualize lists >100 items
- [ ] `useTransition` cho non-urgent updates (React 18+)

---

## 6. Advanced Patterns

### Compound Components

```tsx
// Select.tsx
const SelectContext = createContext(null);

function Select({ children, value, onChange }) {
  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div>{children}</div>
    </SelectContext.Provider>
  );
}

function Option({ value, children }) {
  const { value: selected, onChange } = useContext(SelectContext);
  return (
    <div
      className={selected === value ? 'selected' : ''}
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
}

Select.Option = Option;
// Usage: <Select value={val} onChange={setVal}><Select.Option value="1">One</Select.Option></Select>
```

### Render Props

```tsx
// Pattern: truyền function để chia sẻ logic
<DataProvider render={(data) => <Chart data={data} />} />

// Thay thế bởi custom hooks trong hầu hết trường hợp
```

### Higher-Order Components (HOC)

```tsx
// Legacy pattern — thay bằng custom hooks hoặc composition
function withAuth<P extends object>(Component: ComponentType<P>) {
  return function WithAuth(props: P) {
    const { user } = useAuth();
    if (!user) return <Login />;
    return (
      <Component
        {...props}
        user={user}
      />
    );
  };
}
```

### Portals

```tsx
// Render ra DOM node khác (thường là document.body)
function Modal({ children }) {
  return createPortal(<div className='modal'>{children}</div>, document.body);
}
// Use case: Modal, Tooltip, Dropdown (tránh z-index issues, overflow:hidden)
```

### Error Boundaries

```tsx
class ErrorBoundary extends React.Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logErrorToService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
```

---

## 7. React 18+ Concurrent Features

### useTransition

```tsx
// Đánh dấu update là non-urgent
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  // Urgent: update input immediately
  setInputValue(e.target.value);

  // Non-urgent: search/filter có thể delay
  startTransition(() => {
    setSearchQuery(e.target.value);
  });
}

// isPending = true trong lúc transition chạy
```

### useDeferredValue

```tsx
// Trì hoãn re-render của low-priority value
const deferredQuery = useDeferredValue(query);

// Search sử dụng deferredQuery thay vì query
// Giữ UI responsive trong lúc search heavy
```

### Suspense for Data Fetching

```tsx
// Component "throws" promise khi data chưa sẵn sàng
function UserProfile({ userId }) {
  const user = useSuspenseQuery(getUserQuery(userId));
  return <div>{user.name}</div>;
}

// Parent bọc trong Suspense
<Suspense fallback={<Skeleton />}>
  <UserProfile userId={1} />
</Suspense>;
```

### Automatic Batching

```tsx
// React 18: Tự động batch trong setTimeout, promises, native events
setTimeout(() => {
  setCount((c) => c + 1); // Không re-render ngay
  setFlag((f) => !f); // Cùng batch, chỉ 1 re-render
}, 1000);
```

### Strict Mode (Development)

- Double-invoke effects để phát hiện side effects
- Kiểm tra pure components
- Warnings về deprecated APIs
- **KHÔNG** disable trong production — chỉ affect development

---

## 8. Forms & Validation

### React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur', // validation trigger
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type='submit'>Submit</button>
    </form>
  );
}
```

### Controlled vs Uncontrolled trong Forms

|             | Controlled    | Uncontrolled (RHF)      |
| ----------- | ------------- | ----------------------- |
| State       | React quản lý | DOM quản lý, ref đọc    |
| Re-render   | Mỗi keystroke | Chỉ khi submit/validate |
| Validation  | Real-time     | onBlur/onSubmit         |
| Performance | Lower         | Higher                  |
| Use case    | Simple inputs | Complex forms           |

---

## 9. Data Fetching

### TanStack Query (React Query)

```tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Query
const { data, isLoading, error } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 10 * 60 * 1000, // 10 minutes (cache time)
});

// Mutation
const queryClient = useQueryClient();
const mutation = useMutation({
  mutationFn: updateUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['user'] });
  },
});

// Prefetch
queryClient.prefetchQuery({
  queryKey: ['user', nextId],
  queryFn: () => fetchUser(nextId),
});
```

### Server State vs Client State

|           | Server State   | Client State     |
| --------- | -------------- | ---------------- |
| Source    | API            | User interaction |
| Ownership | Server         | Client           |
| Caching   | Cần            | Không            |
| Sync      | Async          | Sync             |
| Tool      | TanStack Query | useState/Zustand |

---

## 10. Routing

### React Router v6

```tsx
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  useNavigate,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'user/:id', element: <UserProfile />, loader: userLoader },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// Data API
function UserProfile() {
  const user = useLoaderData(); // từ loader
  const { id } = useParams();
  const navigate = useNavigate();

  return <div>{user.name}</div>;
}
```

### Next.js App Router

```tsx
// app/page.tsx — Server Component (default)
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}

// app/client-page.tsx — Client Component
('use client');
export default function ClientPage() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

---

## 11. Testing

### React Testing Library

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Query priority: getByRole > getByLabelText > getByPlaceholderText > getByText
// getBy: throw nếu không tìm thấy (dùng khi chắc chắn element tồn tại)
// queryBy: return null nếu không tìm thấy (dùng cho assert không tồn tại)
// findBy: async, wait for element

test('user can submit form', async () => {
  render(<LoginForm />);

  const emailInput = screen.getByLabelText(/email/i);
  await userEvent.type(emailInput, 'test@example.com');

  const submitBtn = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitBtn);

  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
```

### Mocking

```tsx
// Mock API
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('/api/user', () => HttpResponse.json({ name: 'John' })),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

---

## 12. TypeScript with React

### Common Types

```tsx
// Props
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode; // string | number | ReactElement | ...
};

// Component types
const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => { ... };
// Hoặc (khuyên dùng):
function Button({ variant = 'primary', onClick, children }: ButtonProps) { ... }

// Ref forwarding
const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => (
  <label>{label}<input ref={ref} /></label>
));

// Generic component
function List<T>({ items, render }: { items: T[]; render: (item: T) => ReactNode }) {
  return <ul>{items.map(render)}</ul>;
}
// Usage: <List<User> items={users} render={user => <li>{user.name}</li>} />
```

### Event Types

```tsx
React.MouseEvent<HTMLButtonElement>;
React.ChangeEvent<HTMLInputElement>;
React.FormEvent<HTMLFormElement>;
React.KeyboardEvent<HTMLInputElement>;
React.FocusEvent<HTMLInputElement>;
```

---

## 13. SSR & Server Components

### React Server Components (RSC)

```tsx
// Server Component (default trong Next.js App Router)
// ✅: Truy cập database, file system
// ✅: Không bundle JS (zero client JS)
// ❌: Không dùng hooks, không có interactivity
async function ProductList() {
  const products = await db.products.findAll();
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <ProductCard product={p} /> {/* Server Component */}
          <AddToCartButton productId={p.id} /> {/* Client Component */}
        </li>
      ))}
    </ul>
  );
}

// Client Component
('use client');
function AddToCartButton({ productId }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>Add ({count})</button>;
}
```

### Hydration

- Server render HTML → Client "hydrate" để thêm interactivity
- Hydration mismatch: Server HTML ≠ Client HTML → lỗi console
- Fix: Đảm bảo initial render giống nhau, hoặc dùng `suppressHydrationWarning`

---

## 14. Styling Strategies

| Strategy              | Pros                                      | Cons                                | When to use              |
| --------------------- | ----------------------------------------- | ----------------------------------- | ------------------------ |
| **Tailwind CSS**      | Utility-first, no CSS files, tree-shaking | HTML verbose                        | Mọi project hiện đại     |
| **CSS Modules**       | Scoped, no conflicts                      | File separation                     | Khi cần CSS truyền thống |
| **Styled Components** | Dynamic styles, theming                   | Runtime overhead, bundle size       | Cần dynamic styles nhiều |
| **CSS Variables**     | Native, performant                        | Không có logic                      | Theme switching          |
| **Inline styles**     | Dynamic                                   | No pseudo-classes, no media queries | Quick prototypes         |

### Tailwind + React Pattern

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility merge classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
<button className={cn(
  'px-4 py-2 rounded',
  variant === 'primary' && 'bg-blue-500 text-white',
  variant === 'secondary' && 'bg-gray-200 text-gray-800',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
```

---

## 15. Decision Trees

### A. State Management

```
1 component only?
  → useState

2-3 nearby components?
  → Lift state up to common parent

Shared across tree (>2-3 levels)?
  ├── Read-heavy, rarely changes → Context
  └── Write-heavy, complex logic → Zustand / Redux RTK

Server data?
  → TanStack Query (không dùng useEffect + fetch)
```

### B. Performance

```
Component re-render không cần thiết?
  ├── Kiểm tra React DevTools Profiler
  ├── Do parent re-render?
  │   └── Wrap child với React.memo
  ├── Do props thay đổi?
  │   └── useMemo cho computed values
  │   └── useCallback cho functions truyền xuống memo child
  └── Không rõ nguyên nhân?
      → Đo lường trước, optimize sau

⚠️ KHÔNG dùng useMemo/useCallback cho primitive values
⚠️ KHÔNG dùng React.memo nếu component không expensive
```

### C. Side Effects

```
Cần xử lý side effect?
  ├── Có thể dùng event handler?
  │   → ƯU TIÊN event handler (onClick, onSubmit)
  └── Không có event?
      → useEffect
          ├── Cần chạy sau mỗi render? → Không có deps (rất hiếm)
          ├── Chạy một lần? → [] (mount only)
          ├── Chạy khi deps thay đổi? → [dep1, dep2]
          └── Cần cleanup? → return cleanup function
```

### D. Data Fetching

```
Dùng Next.js App Router?
  → Server Components: async function, fetch trực tiếp
  → Client Components: 'use client' + TanStack Query

Dùng React thuần?
  → TanStack Query (khuyên dùng)
  → useEffect + fetch (chỉ prototype, nhớ cleanup)
```

### E. Forms

```
Form phức tạp (>3 fields, validation)?
  → React Hook Form + Zod
  → mode: 'onBlur' hoặc 'onChange' tùy UX

Form đơn giản (1-2 inputs)?
  → Controlled component + useState
```

### F. Component Split

```
Component >200 lines?
  ├── Tách UI logic → Presentational components
  ├── Tách business logic → Custom hooks
  └── Tách state management → Context / Store
```

---

## 16. Anti-patterns Checklist

### ❌ KHÔNG LÀM

| Anti-pattern                                      | Fix                                                           |
| ------------------------------------------------- | ------------------------------------------------------------- |
| Mutate state trực tiếp                            | `setItems([...items, newItem])` thay vì `items.push(newItem)` |
| setState trong render không điều kiện             | Dùng `useEffect` hoặc event handler                           |
| Inline object/function trong render               | Dùng `useMemo`/`useCallback` hoặc định nghĩa ngoài component  |
| Index làm key cho dynamic lists                   | Dùng unique stable ID                                         |
| Context cho state thay đổi liên tục               | Dùng Zustand/Redux                                            |
| useEffect cho logic có thể là event handler       | Chuyển thành onClick/onSubmit                                 |
| Quá nhiều useEffect                               | Tập trung logic, dùng custom hooks                            |
| Fetch trong useEffect không cleanup               | Thêm AbortController hoặc dùng TanStack Query                 |
| Props drilling quá 3-4 cấp                        | Context hoặc composition                                      |
| React.memo mọi component                          | Chỉ wrap expensive components                                 |
| useMemo cho giá trị đơn giản                      | Overhead > benefit                                            |
| "use client" cho toàn bộ app                      | Chỉ dùng khi cần interactivity                                |
| Hydration mismatch                                | Đảm bảo server/client render giống nhau                       |
| Quên cleanup subscriptions                        | `return () => unsubscribe()` trong useEffect                  |
| `useEffect(() => {}, [])` cho init logic phức tạp | Cân nhắc event-driven hoặc state machine                      |

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                    REACT QUICK REFERENCE                     │
├─────────────────────────────────────────────────────────────┤
│ STATE: useState → Lift Up → Context → Zustand/Redux       │
│ EFFECTS: Event Handler > useEffect (luôn cleanup)           │
│ FETCH: TanStack Query > useEffect+fetch                     │
│ FORMS: RHF+Zod > Controlled useState                        │
│ PERF: Measure (Profiler) → Memo → Code Split → Virtualize   │
│ ROUTING: Next.js App Router > React Router v6               │
│ STYLE: Tailwind CSS > CSS Modules > Styled Components       │
│ TEST: RTL (getByRole) > userEvent > MSW                     │
│ TYPESCRIPT: Props interface > FC type > forwardRef generic  │
│ SSR: Server Components default > 'use client' khi cần hooks │
└─────────────────────────────────────────────────────────────┘
```

---

## Resources

- [React Docs (Beta)](https://react.dev)
- [Patterns.dev](https://patterns.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

---

> _"Make it work, make it right, make it fast — in that order."_  
> _— Kent Beck_

**Last updated**: June 2026 | React 18+
