# Engineering Playbook — 07: Code Review Checklist

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** 10 inspection points per PR — 3 Projects  
> **Principle:** "Review không phải để tìm lỗi. Review để đảm bảo code có thể maintain được 6 tháng sau."

## 1. PHILOSOPHY

### 1.1 Review Là Gate, Không Phải Speed Bump

> **"Code review không làm chậm delivery. Nó ngăn technical debt làm chậm delivery sau này."**

### 1.2 Solo Developer Adaptation

Vì bạn là 1 người, checklist này dùng cho:

- **Self-review** trước khi tạo PR
- **AI-assisted review** (Claude Code / Copilot) để bắt issues sớm
- **Proof of process** cho interviewer: "Tôi review code của chính mình như review junior"

## 2. THE 10-POINT CHECKLIST

---

### 1. ARCHITECTURE

**Question:** _Code này có phù hợp với kiến trúc hiện tại không? Có vi phạm separation of concerns không?_

#### What to Check

- [ ] Không import cross-module internal (chỉ import public API qua barrel)
- [ ] Không để business logic trong component
- [ ] Không vi phạm layer boundaries (UI → Hooks → Services → API)
- [ ] Không tạo circular dependency
- [ ] State management phù hợp (server state vs UI state đúng tool)

#### Examples

```typescript
// ❌ KHÔNG — Business logic trong component
function OrderCard({ order }: OrderCardProps) {
  const canCancel =
    order.status === 'pending' &&
    order.createdAt > Date.now() - 86400000 &&
    order.paymentStatus !== 'paid';
  // ...
}

// ✅ NÊN — Tách thành domain logic
// modules/commerce/utils/orderPolicy.ts
export function canCancelOrder(order: Order): boolean {
  const isWithinWindow = order.createdAt > Date.now() - CANCEL_WINDOW_MS;
  return (
    order.status === 'pending' &&
    isWithinWindow &&
    order.paymentStatus !== 'paid'
  );
}

// Component chỉ render
function OrderCard({ order }: OrderCardProps) {
  const canCancel = canCancelOrder(order);
}
```

```typescript
// ❌ KHÔNG — Import internal từ module khác
import { useProductCache } from '@/modules/commerce/hooks/useProducts'; // Internal!

// ✅ NÊN — Import public API
import { useProducts } from '@/modules/commerce'; // Barrel export
```

#### Verify

- [ ] Kiểm tra import path — có `../../modules/xxx/internal` không?
- [ ] Kiểm tra function length — > 50 lines = có thể cần tách
- [ ] Kiểm tra file responsibility — 1 file làm > 1 việc?

---

### 2. NAMING

**Question:** _Tên có trả lời được "nó là gì, nó làm gì, nó dùng ở đâu" không?_

#### What to Check

- [ ] Boolean có prefix `is`/`has`/`should`/`can`
- [ ] Function có verb + noun rõ ràng
- [ ] Không dùng `data`, `info`, `item`, `thing`
- [ ] Component props interface đặt tên đúng (`ComponentNameProps`)
- [ ] Không abbreviation không chuẩn

#### Examples

```typescript
// ❌ KHÔNG
const d = new Date();
const res = fetchData();
const flag = true;
const handleClick = () => {};

// ✅ NÊN
const orderCreatedAt = new Date();
const productsResponse = fetchProducts();
const shouldShowBanner = true;
const handleAddToCart = () => {};
```

```typescript
// ❌ KHÔNG
interface Props { ... } // Không rõ của component nào

// ✅ NÊN
interface ProductCardProps { ... }
```

#### Verify

- [ ] Đọc tên không cần mở implementation có hiểu không?
- [ ] Search tên trong codebase — có unique không?

---

### 3. REUSABILITY

**Question:** _Có thể tách thành primitive/component nhỏ hơn không? Có đang lặp code không?_

#### What to Check

- [ ] Logic dùng > 1 chỗ đã extract chưa?
- [ ] Component có quá nhiều props (> 7) không?
- [ ] Có hardcode value không?
- [ ] Custom hook đã tách khỏi UI chưa?
- [ ] Có thể dùng compound pattern thay vì prop drilling?

#### Examples

```typescript
// ❌ KHÔNG — Lặp logic ở 2 component
function ProductList() {
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('');
  // ... sorting logic
}

function OrderList() {
  const [sort, setSort] = useState('date');
  const [filter, setFilter] = useState('');
  // ... sorting logic (giống hệt!)
}

// ✅ NÊN — Extract thành hook reusable
function useListState<T>(defaultSort: keyof T) {
  const [sort, setSort] = useState(defaultSort);
  const [filter, setFilter] = useState('');
  return { sort, setSort, filter, setFilter };
}
```

```typescript
// ❌ KHÔNG — Component 12 props
function DataTable({
  data, columns, sortable, filterable, paginated, pageSize,
  onRowClick, onSort, onFilter, loading, emptyMessage, rowClassName
}: DataTableProps) { ... }

// ✅ NÊN — Compound pattern
<DataTable.Root data={products}>
  <DataTable.Header>
    <DataTable.Sort column="name" />
    <DataTable.Filter />
  </DataTable.Header>
  <DataTable.Body onRowClick={handleRowClick} />
  <DataTable.Pagination pageSize={20} />
</DataTable.Root>
```

#### Verify

- [ ] Copy 1 đoạn logic, search trong codebase — có duplicate không?
- [ ] Component có thể dùng ở module khác không?

---

### 4. ACCESSIBILITY (a11y)

**Question:** _Người dùng screen reader hoặc chỉ dùng keyboard có dùng được không?_

#### What to Check

- [ ] Interactive element có `aria-label` hoặc text rõ ràng
- [ ] Form input có `label` liên kết (htmlFor + id)
- [ ] Error message có `aria-describedby`/`aria-errormessage`
- [ ] Loading state có `aria-busy` hoặc `role="status"`
- [ ] Modal/Dialog có `role="dialog"`, `aria-modal="true"`, focus trap
- [ ] Color không phải sole indicator (kèm icon/text)

#### Examples

```tsx
// ❌ KHÔNG
<button onClick={deleteProduct}>
  <TrashIcon />
</button>

// ✅ NÊN
<button
  onClick={deleteProduct}
  aria-label="Delete product"
  className="text-red-600 hover:text-red-700"
>
  <TrashIcon aria-hidden="true" />
  <span className="sr-only">Delete product</span>
</button>
```

```tsx
// ❌ KHÔNG
<input
  type="text"
  value={search}
  onChange={setSearch}
/>

// ✅ NÊN
<label htmlFor="product-search">Search products</label>
<input
  id="product-search"
  type="text"
  value={search}
  onChange={setSearch}
  aria-describedby="search-hint"
/>
<span id="search-hint" className="text-sm text-gray-500">
  Enter product name or SKU
</span>
```

#### Verify

- [ ] Chạy Lighthouse accessibility audit
- [ ] Tab qua toàn bộ UI — có element nào không focus được?
- [ ] Dùng screen reader (VoiceOver/NVDA) đọc 1 flow

---

### 5. PERFORMANCE

**Question:** _Có re-render không cần thiết? Có lazy load? Có block main thread?_

#### What to Check

- [ ] `useMemo`/`useCallback` dùng đúng (không premature optimization)
- [ ] Large list có virtualize (TanStack Virtual)
- [ ] Heavy calculation có ở Web Worker (P3)
- [ ] Image có lazy load + proper sizing
- [ ] Không fetch data trong `useEffect` (dùng React Query/RTK Query)
- [ ] Bundle size ảnh hưởng — có import cả library chỉ dùng 1 function?

#### Examples

```typescript
// ❌ KHÔNG — Re-render mỗi lần parent render
function ProductList({ products }: { products: Product[] }) {
  const sortedProducts = products.sort((a, b) => b.price - a.price); // Tính lại mỗi render!
  // ...
}

// ✅ NÊN — Memoize nếu expensive
function ProductList({ products }: { products: Product[] }) {
  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => b.price - a.price),
    [products],
  );
  // ...
}
```

```typescript
// ❌ KHÔNG — Import cả lodash chỉ dùng debounce
import _ from 'lodash'; // +70KB!

// ✅ NÊN — Tree-shakeable import
import { debounce } from 'lodash-es'; // Chỉ import debounce
// Hoặc dùng native nếu có
```

```typescript
// ❌ KHÔNG — Block main thread với heavy calculation
function calculatePortfolioValue(transactions: Transaction[]) {
  // 50k transactions — block UI 2s
  return transactions.reduce(...);
}

// ✅ NÊN — Web Worker (P3)
// workers/portfolio-calculator.worker.ts
self.onmessage = (e) => {
  const result = calculatePortfolioValue(e.data);
  self.postMessage(result);
};

// Component
useEffect(() => {
  const worker = new Worker('/workers/portfolio-calculator.worker.js');
  worker.postMessage(transactions);
  worker.onmessage = (e) => setValue(e.data);
}, [transactions]);
```

#### Verify

- [ ] React DevTools Profiler — có render không cần thiết?
- [ ] Lighthouse Performance score > 95?
- [ ] Chrome DevTools Performance tab — có long task (> 50ms)?

---

### 6. SECURITY

**Question:** _Có lỗ hổng XSS, CSRF, injection, leak thông tin nhạy cảm?_

#### What to Check

- [ ] Không dùng `dangerouslySetInnerHTML` (trừ khi sanitize kỹ)
- [ ] User input có validate (Zod schema)
- [ ] Không log token/password
- [ ] API response có validate trước khi dùng
- [ ] RBAC check ở cả UI và API layer
- [ ] File upload có type/size validation
- [ ] JWT không lưu localStorage (httpOnly cookie nếu có thể)

#### Examples

```typescript
// ❌ KHÔNG — XSS vulnerability
function Comment({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

// ✅ NÊN — Sanitize hoặc dùng text content
import DOMPurify from 'dompurify';
function Comment({ content }: { content: string }) {
  const clean = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
// Hoặc tốt hơn: chỉ cho phép markdown subset, render thành components
```

```typescript
// ❌ KHÔNG — Không validate API response
const data = await fetchProducts(); // any!
setProducts(data);

// ✅ NÊN — Zod validate
const ProductsResponseSchema = z.array(ProductSchema);
const data = await fetchProducts();
const products = ProductsResponseSchema.parse(data); // Runtime validation
setProducts(products);
```

```typescript
// ❌ KHÔNG — Log sensitive info
console.error('Auth failed:', { token, password }); // LEAK!

// ✅ NÊN — Log safe info
console.error('Auth failed:', {
  userId: user.id,
  reason: 'INVALID_CREDENTIALS',
});
```

#### Verify

- [ ] Search `dangerouslySetInnerHTML` — có usage nào không?
- [ ] Search `console.log`, `console.error` — có log token/password?
- [ ] Kiểm tra Zod schema cho mọi API response
- [ ] Kiểm tra RBAC: UI hide button nhưng API vẫn check permission?

---

### 7. TESTING

**Question:** _Logic quan trọng có test không? Test có cover edge case không?_

#### What to Check

- [ ] Business logic có unit test (pure functions, reducers, validators)
- [ ] Component có integration test (user interaction, async flow)
- [ ] Edge cases: empty, error, loading, boundary
- [ ] Mock data realistic (không phải `name: 'test'`)
- [ ] Test không phụ thuộc implementation detail (test behavior, không test internal)
- [ ] Async test có `waitFor`/`findBy` đúng, không dùng `setTimeout`

#### Examples

```typescript
// ❌ KHÔNG — Test implementation detail
test('sets loading state', () => {
  const { result } = renderHook(() => useProducts());
  expect(result.current.isLoading).toBe(true); // Implementation detail!
});

// ✅ NÊN — Test behavior
test('displays products after loading', async () => {
  render(<ProductList />);
  expect(screen.getByRole('status')).toBeInTheDocument(); // Loading spinner
  expect(await screen.findByText('Product A')).toBeInTheDocument();
});
```

```typescript
// ❌ KHÔNG — Không test edge case
test('calculates total', () => {
  expect(calculateTotal([{ price: 100, quantity: 2 }])).toBe(200);
});

// ✅ NÊN — Test edge cases
test('calculates total with edge cases', () => {
  expect(calculateTotal([])).toBe(0); // Empty
  expect(calculateTotal([{ price: 0, quantity: 1 }])).toBe(0); // Zero price
  expect(calculateTotal([{ price: 100, quantity: 0 }])).toBe(0); // Zero quantity
  expect(() => calculateTotal([{ price: -100, quantity: 1 }])).toThrow(); // Negative
});
```

#### Verify

- [ ] Chạy `npm test` — pass 100%?
- [ ] Coverage report — logic quan trọng có cover?
- [ ] Xóa 1 dòng code quan trọng — có test fail không?

---

### 8. TYPING

**Question:** _TypeScript strict có pass? Có `any` không? Có type inference đúng?_

#### What to Check

- [ ] Không `any` — dùng `unknown` + type guard hoặc Zod
- [ ] Function return type explicit (public API)
- [ ] Generic dùng đúng (không `as` ép kiểu tùy tiện)
- [ ] Discriminated union cho state thay vì optional fields
- [ ] Branded types cho financial domain (P3)
- [ ] `strictNullChecks` pass — không có `null`/`undefined` surprise

#### Examples

```typescript
// ❌ KHÔNG — any
function processData(data: any): any { ... }

// ✅ NÊN — unknown + parse
function processData(data: unknown): Product {
  return ProductSchema.parse(data);
}
```

```typescript
// ❌ KHÔNG — Optional fields cho mutually exclusive state
interface AsyncState<T> {
  data?: T;
  error?: Error;
  isLoading?: boolean;
}
// state.data và state.error có thể cùng tồn tại!

// ✅ NÊN — Discriminated union
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

```typescript
// ❌ KHÔNG — Ep kiểu tùy tiện
const price = data.price as number;

// ✅ NÊN — Validate trước
const price = typeof data.price === 'number' ? data.price : 0;
// Hoặc dùng Zod
const price = PriceSchema.parse(data).price;
```

#### Verify

- [ ] Chạy `npm run type-check` — zero errors?
- [ ] Search `any` trong codebase — có còn sót?
- [ ] Search `as ` — có ép kiểu không cần thiết?

---

### 9. ERROR HANDLING

**Question:** _Có handle error đầy đủ? Có fallback? Có log? Có toast?_

#### What to Check

- [ ] Async operation có loading, success, error state
- [ ] API error có retry strategy (React Query/RTK Query config)
- [ ] Form validation có display error field-by-field
- [ ] Error Boundary cho module (không crash cả app)
- [ ] User-friendly message (không hiện raw error)
- [ ] Error log đến Sentry với context đầy đủ

#### Examples

```typescript
// ❌ KHÔNG — Không handle error
function ProductList() {
  const { data } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  return <div>{data.map(...)}</div>; // Crash nếu data undefined!
}

// ✅ NÊN — Handle mọi state
function ProductList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    retry: 2,
  });

  if (isLoading) return <ProductSkeleton />;
  if (isError) return <ErrorState message={error.message} onRetry={refetch} />;
  if (!data?.length) return <EmptyState />;

  return <ProductGrid products={data} />;
}
```

```typescript
// ❌ KHÔNG — Error boundary generic
class ErrorBoundary extends Component {
  render() {
    if (this.state.hasError) return <div>Something went wrong</div>;
    return this.props.children;
  }
}

// ✅ NÊN — Error boundary với recovery
class CommerceErrorBoundary extends Component {
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-6 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800">
            Commerce Module Error
          </h2>
          <p className="mt-2 text-red-600">
            {this.state.error instanceof AppError
              ? this.state.error.message
              : 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

#### Verify

- [ ] Tắt network — UI có hiển thị error state?
- [ ] Throw error trong render — Error Boundary có bắt?
- [ ] Check Sentry — error có context đầy đủ?

---

### 10. DOCUMENTATION

**Question:** _Code tự giải thích chưa? Cần comment/ADR không?_

#### What to Check

- [ ] Complex logic có comment giải thích "tại sao" (không phải "cái gì")
- [ ] Public API có JSDoc (nếu dùng)
- [ ] ADR cập nhật nếu có quyết định kiến trúc
- [ ] README cập nhật nếu thay đổi setup
- [ ] AI-WORKFLOW.md cập nhật nếu có quyết định AI collaboration

#### Examples

```typescript
// ❌ KHÔNG — Comment nói "cái gì" (code đã nói rõ)
// Increment count by 1
count++;

// ✅ NÊN — Comment nói "tại sao"
// Debounce 300ms vì search API có rate limit 10 req/s
const debouncedSearch = useDebounce(search, 300);
```

```typescript
// ✅ NÊN — JSDoc cho public API
/**
 * Calculate portfolio return rate with time-weighted method.
 *
 * @param transactions - Ordered list of buy/sell transactions
 * @param currentPrices - Latest market prices for each asset
 * @returns Time-weighted return rate as percentage
 *
 * @example
 * const rate = calculateReturnRate(transactions, prices);
 * // 15.3
 */
export function calculateReturnRate(
  transactions: Transaction[],
  currentPrices: Record<string, number>
): number { ... }
```

#### Verify

- [ ] Đọc code không cần comment — có hiểu không?
- [ ] Comment có nói "tại sao" không?
- [ ] Có file docs nào cần update?

---

## 3. REVIEW SEVERITY LEVELS

| Level          | Icon | Action                | Example                                               |
| -------------- | ---- | --------------------- | ----------------------------------------------------- |
| **Blocking**   | 🔴   | Must fix before merge | XSS vulnerability, `any` type, missing error handling |
| **Suggestion** | 🟡   | Consider, discuss     | Extract function, rename variable, optimize loop      |
| **Nitpick**    | 🟢   | Optional, style       | Indentation, import order, comment grammar            |
| **Question**   | 💡   | Need clarification    | "Tại sao dùng pattern này?", "Có test edge case này?" |

## 4. SELF-REVIEW WORKFLOW (Solo Developer)

```bash
# 1. Before creating PR — Run automated checks
npm run lint        # ESLint
npm run type-check  # TypeScript strict
npm run test        # Unit tests
npm run build       # Production build

# 2. Read diff line-by-line
git diff develop

# 3. Ask yourself for each line:
# - "Nếu tôi đọc lại 6 tháng sau, tôi hiểu không?"
# - "Nếu junior hỏi tại sao, tôi trả lời được không?"
# - "Nếu xóa dòng này, có test fail không?"

# 4. Check against 10-point checklist (above)

# 5. AI-assisted review
# Prompt: "Review this diff for:
# 1. Type safety (strict TypeScript)
# 2. Error handling completeness
# 3. Performance issues (re-render, memory leak)
# 4. Security concerns (XSS, injection)
# 5. Test coverage gaps
# Suggest improvements with code examples."

# 6. Fix blocking issues, consider suggestions

# 7. Create PR with completed checklist
```

---

## 5. AI-ASSISTED REVIEW PROMPT

```markdown
## Prompt: AI Code Review Assistant

You are a senior frontend engineer reviewing a pull request.
Review the following code diff for:

### 1. Architecture

- Separation of concerns
- Module boundaries respected
- State management appropriate

### 2. Type Safety

- No `any` types
- Proper use of generics
- Runtime validation (Zod) where needed

### 3. Error Handling

- Loading states
- Error states with user-friendly messages
- Error boundaries
- Retry logic

### 4. Performance

- Unnecessary re-renders
- Missing memoization
- Bundle size impact
- Main thread blocking

### 5. Security

- XSS vulnerabilities
- Input validation
- Sensitive data exposure
- RBAC enforcement

### 6. Testing

- Missing test cases
- Test quality (behavior vs implementation)
- Edge cases covered

### 7. Documentation

- Missing comments for complex logic
- Need for ADR update

For each issue:

- Severity: 🔴 Blocking / 🟡 Suggestion / 🟢 Nitpick
- Explanation: Why this is an issue
- Suggestion: Code example of fix
```

---

## 6. QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────────┐
│                    CODE REVIEW CHECKLIST                    │
├─────────────────────────────────────────────────────────────┤
│ □ 1. ARCHITECTURE    → Separation, boundaries, no leak      │
│ □ 2. NAMING          → Clear, consistent, no generic        │
│ □ 3. REUSABILITY     → Extract, DRY, compound pattern       │
│ □ 4. ACCESSIBILITY   → ARIA, labels, keyboard, focus        │
│ □ 5. PERFORMANCE     → Memo, virtualize, lazy, workers      │
│ □ 6. SECURITY        → XSS, validate, no leak, RBAC         │
│ □ 7. TESTING         → Unit, integration, edge cases        │
│ □ 8. TYPING          → Strict, no any, unions, branded      │
│ □ 9. ERROR HANDLING  → States, retry, boundary, log         │
│ □ 10. DOCUMENTATION  → Why comments, ADR, JSDoc             │
├─────────────────────────────────────────────────────────────┤
│ 🔴 Blocking → Must fix    🟡 Suggestion → Consider          │
│ 🟢 Nitpick  → Optional    💡 Question   → Clarify           │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. PROJECT-SPECIFIC ADDITIONS

### P1 — Enterprise Admin

- [ ] Redux Saga scope giới hạn — chỉ Order pipeline?
- [ ] TanStack Virtual cho table > 10k rows?
- [ ] Error Boundary per module?

### P2 — Property Platform

- [ ] Server Component vs Client Component đúng?
- [ ] Supabase RLS policy test?
- [ ] Server Action error handling?

### P3 — Investment Tracker

- [ ] Branded types cho financial domain?
- [ ] Web Worker cho calculation?
- [ ] D3.js cleanup on unmount (memory leak)?

---

## 8. REVISION HISTORY

| Version | Date       | Changes                                            |
| ------- | ---------- | -------------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — 10-point checklist with examples |

---

> **"Review checklist không phải để đánh dấu cho xong. Nó là compass để bạn tự hỏi: 'Nếu tôi là người maintain code này 1 năm sau, tôi có cảm ơn present self không?'"**

---

Tóm tắt:

1. **Philosophy** — Review là gate không phải speed bump, solo adaptation
2. **10-Point Checklist** — Mỗi điểm với: question, what to check, good/bad examples, verify method
   - Architecture, Naming, Reusability, Accessibility, Performance, Security, Testing, Typing, Error Handling, Documentation
3. **Severity Levels** — 🔴🟡🟢💡 với action và example
4. **Self-Review Workflow** — 7 bước cho solo developer
5. **AI-Assisted Review Prompt** — Prompt chi tiết để AI review code
6. **Quick Reference Card** — Bảng tra cứu nhanh 1 trang
7. **Project-Specific Additions** — Checklist bổ sung cho P1, P2, P3
