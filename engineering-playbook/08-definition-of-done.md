# Engineering Playbook — 08: Definition of Done

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Every task, every project, no exception  
> **Principle:** "Done không phải là 'code xong'. Done là 'sẵn sàng cho production'."

## 1. PHILOSOPHY

### 1.1 Done ≠ Code Written

> **"Viết code xong là 30% công việc. 70% còn lại là test, review, document, deploy, monitor."**

### 1.2 Why Strict Definition of Done

| Without DoD                                     | With DoD                               |
| ----------------------------------------------- | -------------------------------------- |
| "Tôi code xong rồi" — nhưng chưa test edge case | Code + test + review + deploy = Done   |
| Bug phát hiện ở production                      | Bug phát hiện ở CI                     |
| Không biết task nào thực sự xong                | Board rõ ràng: Done = production-ready |
| Technical debt tích lũy                         | Mỗi task là nền tảng chắc chắn         |
| Interviewer hỏi "làm sao đảm bảo quality?"      | Trả lời bằng checklist và metrics      |

## 2. THE 10 CONDITIONS

```

┌─────────────────────────────────────────────────────────────┐
│ DEFINITION OF DONE — 10 CONDITIONS                          │
├─────────────────────────────────────────────────────────────┤
│ 1. ✅ Build pass                                            │
│ 2. ✅ ESLint pass                                           │
│ 3. ✅ TypeScript pass (strict, zero any)                    │
│ 4. ✅ Responsive (mobile, tablet, desktop)                  │
│ 5. ✅ Loading state                                         │
│ 6. ✅ Error state                                           │
│ 7. ✅ Empty state                                           │
│ 8. ✅ Test (unit/integration)                               │
│ 9. ✅ Documentation                                         │
│ 10.✅ Self Review                                           │
└─────────────────────────────────────────────────────────────┘

```

> **Task chỉ được chuyển sang "Done" khi pass cả 10 điều kiện. Không exception.**

## 3. CONDITION BREAKDOWN

### 3.1 ✅ Build Pass

**Question:** _Code có build được không? Production build không có lỗi?_

#### Verification

```bash
# P1 — Vite
npm run build
# Expected: 0 errors, 0 warnings critical

# P2/P3 — Next.js
npm run build
# Expected: Static generation complete, no route errors
```

#### Checklist

- [ ] No build errors
- [ ] No critical warnings (unused imports OK nếu intentional)
- [ ] Bundle size trong budget (P1: < 250KB first load)
- [ ] No module resolution errors
- [ ] Environment variables đầy đủ (`.env.example` updated)

#### Common Failures

| Failure               | Cause                                   | Fix                                         |
| --------------------- | --------------------------------------- | ------------------------------------------- |
| `Module not found`    | Import path sai hoặc file chưa commit   | Check case sensitivity, commit missing file |
| `Type error in build` | `tsc --noEmit` pass nhưng build fail    | Check `skipLibCheck`, strict mode config    |
| `Out of memory`       | Bundle quá lớn hoặc circular dependency | Analyze bundle, tách code                   |

---

### 3.2 ✅ ESLint Pass

**Question:** _Code tuân thủ coding standards? Không có lint error?_

#### Verification

```bash
npm run lint
# Expected: 0 errors, warnings documented nếu intentional
```

#### Checklist

- [ ] `npm run lint` pass với 0 errors
- [ ] No `eslint-disable` không giải thích (comment phải nói tại sao)
- [ ] No unused variables (trừ intentional destructuring)
- [ ] Import order đúng (ESLint `import/order` rule)
- [ ] No `console.log` (chỉ `console.error` cho error handling)

#### Example

```typescript
// ❌ KHÔNG — eslint-disable không giải thích
// eslint-disable-next-line
const data = fetchData();

// ✅ NÊN — Giải thích tại sao disable
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Reason: Third-party library type definition incomplete,
// tracked in issue #123
const data = thirdPartyLib.parse(input) as any;
```

---

### 3.3 ✅ TypeScript Pass (Strict, Zero Any)

**Question:** _TypeScript strict mode pass? Không có `any`?_

#### Verification

```bash
npm run type-check
# Expected: 0 errors, 0 `any`
```

#### Checklist

- [ ] `tsc --noEmit` pass với `strict: true`
- [ ] Zero `any` type (search `grep -r ": any" src/`)
- [ ] Zero `// @ts-ignore` (trừ có giải thích)
- [ ] Zero `as` ép kiểu không cần thiết
- [ ] Branded types dùng đúng (P3)

#### Example

```typescript
// ❌ KHÔNG — any và ts-ignore
// @ts-ignore
const data: any = fetchData();

// ✅ NÊN — unknown + parse
const data: unknown = fetchData();
const products = ProductSchema.parse(data);
```

---

### 3.4 ✅ Responsive (Mobile, Tablet, Desktop)

**Question:** _UI hoạt động trên mọi breakpoint?_

#### Verification

- [ ] Test trên Chrome DevTools: iPhone SE (375px), iPad (768px), Desktop (1440px)
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44x44px
- [ ] Font size readable (≥ 16px cho input để tránh iOS zoom)
- [ ] Table có horizontal scroll hoặc card layout trên mobile

#### Breakpoints (Tailwind)

```css
/* Mobile first */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

#### Example

```tsx
// ❌ KHÔNG — Chỉ desktop
<div className="grid grid-cols-4 gap-4">

// ✅ NÊN — Responsive
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
```

---

### 3.5 ✅ Loading State

**Question:** _User biết hệ thống đang xử lý? Không có UI freeze?_

#### Verification

- [ ] Async operation có loading indicator (spinner, skeleton, progress)
- [ ] Loading state không block toàn bộ UI (nếu không cần)
- [ ] Loading có timeout/fallback nếu quá lâu (> 10s)
- [ ] Button có disabled + loading state khi submit
- [ ] Skeleton cho content heavy (table, dashboard)

#### Example

```tsx
// ❌ KHÔNG — Không có loading state
function ProductList() {
  const { data } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  return (
    <div>
      {data?.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </div>
  );
}

// ✅ NÊN — Đầy đủ loading states
function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <ProductSkeleton count={6} />;

  return (
    <div>
      {data?.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </div>
  );
}
```

---

### 3.6 ✅ Error State

**Question:** _Khi lỗi xảy ra, user biết và có thể hành động?_

#### Verification

- [ ] API error có user-friendly message (không hiện raw error)
- [ ] Có retry mechanism (button hoặc auto-retry)
- [ ] Error Boundary catch render errors
- [ ] Form validation error hiển thị field-by-field
- [ ] Network error có fallback (cached data hoặc offline message)
- [ ] Error log đến Sentry

#### Example

```tsx
// ❌ KHÔNG — Không handle error
function ProductList() {
  const { data } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  return <div>{data.map(...)}</div>; // Crash nếu error!
}

// ✅ NÊN — Error handling đầy đủ
function ProductList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    retry: 2,
  });

  if (isLoading) return <ProductSkeleton />;

  if (isError) {
    return (
      <ErrorState
        title="Failed to load products"
        message={error instanceof Error ? error.message : 'Please try again'}
        action={{
          label: 'Retry',
          onClick: () => refetch(),
        }}
      />
    );
  }

  if (!data?.length) return <EmptyState />;

  return <ProductGrid products={data} />;
}
```

---

### 3.7 ✅ Empty State

**Question:** _Khi không có data, user thấy gì? Không để trống?_

#### Verification

- [ ] Empty list có illustration + message + CTA (nếu applicable)
- [ ] Search/filter không có kết quả có hướng dẫn
- [ ] First-time user có onboarding/empty state helpful
- [ ] Không hiển thị "0" hoặc "undefined"

#### Example

```tsx
// ❌ KHÔNG — Trống hoặc số 0
function ProductList({ products }: { products: Product[] }) {
  return <div>{products.length && products.map(...)}</div>; // Hiện "0"!
}

// ✅ NÊN — Empty state rõ ràng
function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<PackageOpen className="w-12 h-12 text-gray-400" />}
        title="No products yet"
        description="Get started by adding your first product"
        action={
          <Button onClick={onAddProduct}>Add Product</Button>
        }
      />
    );
  }

  return <ProductGrid products={products} />;
}
```

---

### 3.8 ✅ Test (Unit/Integration)

**Question:** _Logic quan trọng có test? Test pass?_

#### Verification

```bash
npm run test
# Expected: 100% pass, coverage > 70% cho logic quan trọng
```

#### Checklist

- [ ] Business logic có unit test (pure functions, reducers, validators)
- [ ] Component có integration test (user interaction)
- [ ] Async flow test (loading → success/error)
- [ ] Edge cases: empty, error, boundary, max length
- [ ] Test không phụ thuộc implementation detail
- [ ] Mock data realistic

#### Minimum Coverage by Project

| Project | Unit Test   | Integration Test | E2E Test     |
| ------- | ----------- | ---------------- | ------------ |
| P1      | ✅ Required | ✅ Required      | Optional     |
| P2      | ✅ Required | ✅ Required      | ✅ 5-8 cases |
| P3      | ✅ Required | ✅ Required      | Optional     |

#### Example

```typescript
// ✅ Unit test cho business logic
describe('calculatePortfolioValue', () => {
  it('returns 0 for empty transactions', () => {
    expect(calculatePortfolioValue([])).toBe(0);
  });

  it('calculates correctly for single buy', () => {
    const transactions = [{ type: 'buy', price: 100, quantity: 10 }];
    expect(calculatePortfolioValue(transactions)).toBe(1000);
  });

  it('calculates correctly for buy and sell', () => {
    const transactions = [
      { type: 'buy', price: 100, quantity: 10 },
      { type: 'sell', price: 120, quantity: 5 },
    ];
    expect(calculatePortfolioValue(transactions)).toBe(600); // 5 * 120
  });
});

// ✅ Integration test cho component
describe('ProductList', () => {
  it('displays products after loading', async () => {
    render(<ProductList />);

    expect(screen.getByRole('status')).toBeInTheDocument(); // Loading

    const products = await screen.findAllByTestId('product-card');
    expect(products).toHaveLength(3);
  });

  it('displays error state on fetch failure', async () => {
    server.use(
      http.get('/api/products', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<ProductList />);

    expect(await screen.findByText(/failed to load/i)).toBeInTheDocument();
  });
});
```

---

### 3.9 ✅ Documentation

**Question:** _Code tự giải thích? Cần ADR không? README cập nhật?_

#### Verification

- [ ] Complex logic có comment giải thích "tại sao"
- [ ] Public API có JSDoc (nếu dùng)
- [ ] ADR cập nhật nếu có quyết định kiến trúc
- [ ] README cập nhật nếu thay đổi setup
- [ ] AI-WORKFLOW.md cập nhật nếu có quyết định AI collaboration
- [ ] Changelog cập nhật (nếu release)

#### Documentation Matrix

| Change Type    | Documentation Required                 |
| -------------- | -------------------------------------- |
| New feature    | Inline comment + ADR nếu architectural |
| Bug fix        | Comment giải thích root cause          |
| Refactor       | ADR nếu change pattern                 |
| Performance    | Comment giải thích optimization        |
| API change     | README + API docs                      |
| New dependency | ADR (Bloat Filter)                     |

---

### 3.10 ✅ Self Review

**Question:** _Bạn đã review code của chính mình như review junior chưa?_

#### Verification

- [ ] Đọc từng dòng diff (`git diff develop`)
- [ ] Checklist 07-code-review-checklist.md pass
- [ ] AI-assisted review completed
- [ ] Không còn `TODO`, `FIXME`, `HACK` tạm
- [ ] Không còn `console.log`, `debugger`
- [ ] Commit message theo convention (06-commit-convention.md)

#### Self-Review Questions

```
□ Nếu tôi đọc lại 6 tháng sau, tôi hiểu không?
□ Nếu junior hỏi tại sao, tôi trả lời được không?
□ Nếu xóa 1 dòng code quan trọng, có test fail không?
□ Có edge case nào tôi chưa nghĩ đến?
□ Performance có vấn đề gì không?
□ Security có lỗ hổng nào không?
```

## 4. DO NOT DONE — ANTI-PATTERNS

| Anti-Pattern          | Why Wrong                               | Correct                      |
| --------------------- | --------------------------------------- | ---------------------------- |
| "Code xong rồi"       | Chưa test, chưa review                  | Code + Test + Review = Done  |
| "Test sau"            | Không bao giờ test                      | Test cùng lúc với code       |
| "Chỉ là refactor nhỏ" | Refactor cũng cần test                  | Mọi change đều qua checklist |
| "Tự review là đủ"     | Blind spot — cần AI/another perspective | AI review + self-review      |
| "Docs viết sau"       | Không bao giờ viết                      | Viết trong lúc code          |
| "Responsive sau"      | Mobile là first-class                   | Mobile-first từ đầu          |
| "Error handling sau"  | User thấy crash trước                   | Error state từ đầu           |

## 5. BOARD WORKFLOW

```
To Do → In Progress → Code Review → Testing → Done
              ↑            ↑            ↑
         Start task    Self-review   All 10 pass
         Create branch  AI review     Merge to develop
         Write tests    PR created    Deploy preview
```

### Transition Rules

| From        | To          | Condition                                   |
| ----------- | ----------- | ------------------------------------------- |
| To Do       | In Progress | Task broken down, acceptance criteria clear |
| In Progress | Code Review | Code written, tests pass locally            |
| Code Review | Testing     | Self-review + AI review pass, PR created    |
| Testing     | Done        | All 10 conditions pass, CI green, merged    |
| Any         | In Progress | Review feedback requires changes            |

## 6. EXCEPTION HANDLING

### 6.1 When to Break DoD

> **"Không bao giờ break DoD. Nếu cần break, DoD cần update trước."**

### 6.2 Emergency Protocol

```
Scenario: Critical bug cần fix ngay, không có thời gian test đầy đủ

1. Tạo hotfix branch từ main
2. Fix minimal
3. Test thủ công nhanh (không skip hoàn toàn)
4. Deploy
5. Viết test sau khi deploy (trong 24h)
6. Update retro: "Tại sao cần hotfix? Làm sao tránh lần sau?"
```

## 7. METRICS

| Metric                        | Target   | Measurement           |
| ----------------------------- | -------- | --------------------- |
| Tasks completed with full DoD | 100%     | Sprint review         |
| Average time to Done          | < 3 days | Board tracking        |
| Bug escape rate (production)  | < 2%     | Sentry + user reports |
| Test coverage                 | > 70%    | Coverage report       |
| DoD violations                | 0        | Self-audit weekly     |

## 8. REVISION HISTORY

| Version | Date       | Changes                                       |
| ------- | ---------- | --------------------------------------------- |
| 1.0.0   | 2026-07-07 | Initial version — 10 conditions, no exception |

---

> **"Definition of Done không phải rào cản. Nó là đảm bảo rằng mỗi task bạn hoàn thành là một viên gạch chắc chắn — không phải giấy dán tạm bợ."**

---

Tóm tắt:

1. **Philosophy** — Done ≠ Code Written, strict DoD để ngăn technical debt
2. **10 Conditions** — Build pass, ESLint pass, TypeScript strict, Responsive, Loading state, Error state, Empty state, Test, Documentation, Self Review
3. **Condition Breakdown** — Mỗi điều kiện với: question, verification commands, checklist, examples, common failures
4. **Do Not Done — Anti-Patterns** — 7 anti-patterns với why wrong + correct
5. **Board Workflow** — 5 trạng thái với transition rules
6. **Exception Handling** — Emergency protocol cho hotfix
7. **Metrics** — 5 metrics để track DoD effectiveness
