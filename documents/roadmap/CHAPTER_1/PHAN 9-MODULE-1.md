## STAGE 1 — BUILD & TOOLING

> **Mục tiêu:** Hiểu công cụ biên dịch và quản lý code trước khi viết app lớn.  
> **Nguyên tắc:** Nếu không giải thích được tại sao bundle có 3 bản `lodash`, chưa sang Stage 2.  
> **Teaching Model:** 70% Teaching / 30% Questioning

### Stage 1 Overview

**Tại sao Stage 1 tồn tại:**
Hầu hết tutorial bỏ qua phần "code biên dịch như thế nào". Học viên copy config mà không hiểu tại sao cần `sideEffects: false`, tại sao `import()` tách chunk, tại sao lockfile conflict nguy hiểm. Khi production có vấn đề (bundle quá lớn, dependency hell, git history rối), họ không biết bắt đầu từ đâu.

**Hậu quả nếu bỏ qua:**
- Bundle 5MB vì không hiểu tree-shaking
- Mất 1 ngày resolve lockfile conflict bằng cách xóa `node_modules`
- Không biết khi nào rebase, khi nào merge → team conflict kéo dài

**Output của Stage 1:**
- Giải thích được ESM vs CommonJS, tree-shaking, code splitting
- Resolve lockfile conflict đúng cách
- Dùng `git bisect` tìm regression

---

### Module 1.1 — Build Tool & Bundler

#### 1. Context

**Vấn đề thực tế:**
Bạn import một hàm từ `lodash` — `import { debounce } from 'lodash'` — nhưng bundle nhận cả 70KB lodash. Bạn thêm `import('./Modal')` để lazy load nhưng chunk không tách. Bạn dùng `/*#__PURE__*/` nhưng không biết tại sao cần. Bạn thấy `sideEffects: false` trong `package.json` nhưng không hiểu ý nghĩa.

**Hậu quả nếu không hiểu:**
- Bundle bloat không kiểm soát
- Không tối ưu được load time
- Không debug được khi tree-shaking fail

#### 2. Prerequisites
- JavaScript modules: `import`/`export`
- Node.js và `npm` cơ bản
- Module 0.1 (Event Loop — để hiểu async loading)

#### 3. Knowledge Building

**A. Module Systems**

| | CommonJS (CJS) | ESM |
|---|---|---|
| Syntax | `require()` / `module.exports` | `import` / `export` |
| Load time | Runtime synchronous | Parse-time static analysis |
| Tree-shaking | Khó (dynamic require) | Dễ (static structure) |
| Top-level await | Không | Có |
| Browser native | Không | Có |

**B. Bundler Core Concepts**

- **Entry:** Điểm bắt đầu (thường `index.js` hoặc `main.tsx`)
- **Dependency Graph:** Bản đồ import từ entry đến tất cả file phụ thuộc
- **Chunk:** File output được tách ra. Có thể tách theo route (`import()`), vendor (node_modules), hoặc shared module.
- **Loaders:** Biến đổi file không-JS thành JS (CSS, SVG, TypeScript)
- **Plugins:** Mở rộng behavior (HTML generation, minification, HMR)

**C. Tree-Shaking**

- **Dead Code Elimination (DCE):** Loại bỏ code không được dùng.
- **Side Effects:** Nếu module có side effect (ví dụ: polyfill, global CSS import), bundler không thể xóa dù không import trực tiếp.
- `sideEffects: false` trong `package.json` báo bundler: "Module này an toàn để xóa nếu không dùng."
- `/*#__PURE__*/` annotation: Báo minifier rằng function call này không có side effect, có thể xóa nếu return value không dùng.

**D. Code Splitting**

- **Route-based:** Mỗi route là một chunk (Next.js/Vite tự động)
- **Component-based:** `const Modal = lazy(() => import('./Modal'))`
- **Vendor splitting:** Tách `node_modules` thành chunk riêng để cache lâu dài

**E. Dev vs Production**

| | Development | Production |
|---|---|---|
| Source map | `eval-source-map` (nhanh) | `source-map` (chính xác) |
| Minification | Không | Terser/esbuild/swc |
| HMR | Có | Không |
| Dead code | Giữ lại | Loại bỏ |

**F. Bundler Landscape**

- **Webpack:** Linh hoạt nhất, config phức tạp, HMR ổn định, ecosystem lớn.
- **Vite:** Dùng esbuild (Go) để dev (cực nhanh), Rollup để production. Native ESM trong dev.
- **Rspack:** Rust-based, API tương thích Webpack, nhanh hơn 10x.
- **Turbopack:** Rust-based, incremental computation, thay thế Webpack trong Next.js.

#### 4. Mental Model

**Model: Bundler là công ty dọn nhà**

- **Entry** = Căn hộ gốc cần dọn
- **Dependency Graph** = Danh sách đồ đạc trong từng phòng — nếu không liệt kê rõ, dễ bỏ sót hoặc mang thừa
- **Tree-shaking** = "Cái sofa này không ai ngồi → bỏ lại" (chỉ được bỏ nếu không ảnh hưởng gì khác)
- **Code Splitting** = "Đồ dùng mùa đông cho vào thùng riêng, để tầng hầm. Cần thì mang lên sau."
- **Source map** = "Bản đồ chỉ vị trí đồ trong thùng — để khi cần tìm lại nhanh."

**Model: ESM vs CJS là hai hệ thống địa chỉ**

- **CJS** = Địa chỉ viết tay, không có bản đồ. Có thể tính toán địa chỉ runtime (`require(path + '.js')`). Shipper không biết trước cần giao gì.
- **ESM** = Địa chỉ chuẩn hóa, có bản đồ rõ ràng. Shipper biết trước tất cả điểm đến → tối ưu lộ trình (tree-shaking).

#### 5. Visualization

**Dependency Graph & Chunking:**

```
Entry: main.js
   │
   ├──► Header.js ──► Logo.svg
   │
   ├──► Dashboard.js ──► Chart.js ──► d3 (50KB)
   │        │
   │        └──► import('./Report') ──► Report.js (lazy, separate chunk)
   │
   └──► node_modules
          ├──► react (40KB)
          ├──► react-dom (120KB)
          └──► lodash (70KB) ──► chỉ dùng debounce (2KB)

Output chunks:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  main.js    │  │ vendor.js   │  │ report.js   │  │  [lazy]     │
│  (entry)    │  │ (react,     │  │ (d3, chart) │  │             │
│             │  │  react-dom) │  │             │  │             │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

**Tree-Shaking Decision:**

```
import { debounce } from 'lodash';
        │
        ▼
Bundler: "lodash có sideEffects: false không?"
   │
   ├──► Không có / không khai báo → Giữ cả 70KB (an toàn)
   │
   └──► Có → Chỉ giữ debounce và dependencies của nó → 2KB
```

#### 6. Guided Example

**Bài toán:** Tối ưu bundle bằng cách fix tree-shaking và tách chunk.

```js
// BEFORE: Bundle bloat
import _ from 'lodash';  // Cả 70KB
import { Modal } from './components';  // Modal import sẵn, không lazy

// AFTER: Tree-shaking + Code splitting
import { debounce } from 'lodash-es';  // Chỉ 2KB, ESM native
import { lazy, Suspense } from 'react';

const Modal = lazy(() => import('./components/Modal'));  // Tách chunk

function App() {
  const handleResize = debounce(() => {
    console.log(window.innerWidth);
  }, 200);
  
  return (
    <div onResize={handleResize}>
      <Suspense fallback={<Spinner />}>
        {showModal && <Modal />}
      </Suspense>
    </div>
  );
}
```

**Think Aloud:**
1. `lodash` (CJS) không tree-shake tốt — dùng `lodash-es` (ESM) hoặc `babel-plugin-lodash`
2. `lazy() + import()` tạo dynamic chunk — chỉ load khi cần
3. `Suspense` cung cấp fallback UI trong lúc load chunk

**Vite config để tách vendor:**

```js
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
  },
};
```

#### 7. Guided Questions

- Tại sao ESM tree-shake tốt hơn CommonJS? (Hint: static vs dynamic analysis)
- `sideEffects: false` trong `package.json` có nghĩa gì? Nếu một module import CSS global, đặt `sideEffects: false` có vấn đề gì?
- `/*#__PURE__*/` dùng khi nào? Cho ví dụ cụ thể.

#### 8. Guided Practice

**Bài tập:** Phân tích bundle của một project bằng `vite-bundle-visualizer` hoặc `@next/bundle-analyzer`.

**Checklist:**
- [ ] Tìm 3 thư viện chiếm nhiều nhất bundle
- [ ] Xác định thư viện nào import cả package thay vì submodule
- [ ] Fix bằng cách chuyển sang ESM hoặc submodule import
- [ ] Chứng minh bundle giảm bằng screenshot before/after

#### 9. Independent Practice

**Bài tập:** Cấu hình Webpack và Vite từ đầu cho một React app:

**Requirements:**
- TypeScript support
- CSS Modules
- Tree-shaking hoạt động (thêm `sideEffects: false` nếu cần)
- Code splitting: vendor và route-based
- Source map khác nhau cho dev/prod

#### 10. Edge Cases

**A. Module có `sideEffects` (import CSS global) làm tree-shaking thất bại**

```js
// library/index.js
import './styles.css';  // Side effect!
export { Button } from './Button';

// package.json
{
  "sideEffects": false  // ❌ CSS bị xóa mất!
}

// Fix:
{
  "sideEffects": ["*.css", "*.scss"]  // ✅ Báo bundler giữ file CSS
}
```

**B. Dynamic import với variable**

```js
// BAD: Bundler không biết trước để tách chunk
const page = 'Dashboard';
const Component = lazy(() => import(`./pages/${page}`));  // Có thể không work

// GOOD: Explicit path
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

**C. Duplicate dependencies trong monorepo**

```js
// node_modules/lodash (v4.17.15)
// node_modules/some-lib/node_modules/lodash (v4.17.21)
// Bundle chứa 2 lodash!
```

Fix: Dùng `pnpm` dedupe hoặc `resolve.alias` trong bundler.

#### 11. Reflection

**Teach Back:** Giải thích cho junior: "Tại sao `import { debounce } from 'lodash'` bundle 70KB nhưng `import debounce from 'lodash/debounce'` chỉ 2KB?"

**Self-Check:**
- [ ] Tôi giải thích được tại sao ESM tree-shake tốt hơn CommonJS
- [ ] Tôi tìm được duplicate `lodash` trong bundle
- [ ] Tôi biết cách config code splitting cho route-based lazy loading

#### 12. Exit Exam

**Bài thi:**
1. Giải thích được tại sao ESM tree-shake tốt hơn CommonJS. Vẽ dependency graph minh họa.
2. Tìm và fix duplicate dependency trong bundle (dùng analyzer).
3. Config code splitting: tách `react`, `react-dom` thành vendor chunk; tách route `/admin` thành lazy chunk.

**Pass criteria:**
- Bundle giảm >30% sau optimization
- Không có duplicate thư viện lớn (>10KB)
- Lazy chunk load đúng khi navigate

---

### Module 1.2 — Package Manager

#### 1. Context

**Vấn đề thực tế:**
Bạn clone repo, chạy `npm install`, app crash vì dependency cũ. Đồng nghiệp thêm package mới, lockfile conflict với branch của bạn. Bạn xóa `node_modules` và cài lại — mất 15 phút. Monorepo có 5 package, mỗi package dùng React version khác nhau. Bạn publish package lên npm nhưng quên bump version.

**Hậu quả nếu không hiểu:**
- Không resolve được lockfile conflict đúng cách
- Dependency hell: React 18 vs 19 trong cùng project
- Không hiểu tại sao `node_modules` nặng 2GB

#### 2. Prerequisites
- Node.js và npm cơ bản
- Module 1.1 (Bundler — để hiểu dependency graph)

#### 3. Knowledge Building

**A. Lockfile**

Lockfile ghi lại **exact version** và **resolved URL** của mọi dependency (cả transitive). Đảm bảo `node_modules` giống nhau trên mọi máy.

| | npm | yarn | pnpm |
|---|---|---|---|
| Lockfile | `package-lock.json` | `yarn.lock` | `pnpm-lock.yaml` |
| Format | JSON | YAML | YAML |
| Speed | Trung bình | Nhanh | Rất nhanh (hard link) |
| Disk usage | Lớn | Lớn | Nhỏ (content-addressable store) |

**B. Dependency Types**

- **`dependencies`:** Cần cho runtime
- **`devDependencies`:** Chỉ cần cho build/test
- **`peerDependencies`:** Yêu cầu host app cung cấp (ví dụ: `react` trong UI library). Không tự cài, chỉ warning nếu thiếu hoặc mismatch.
- **`optionalDependencies`:** Cài nếu được, bỏ qua nếu fail (thường dùng cho native module)

**C. Monorepo**

- **Workspaces:** Quản lý nhiều package trong một repo. `pnpm-workspace.yaml`, `package.json > workspaces`
- **`workspace:` protocol:** Tham chiếu package trong monorepo bằng `workspace:*` — lockfile tự resolve đúng version local.
- **Changesets:** Tool quản lý version bump và changelog trong monorepo. Mỗi PR thêm changeset file, CI tự động bump version và publish.

**D. Semantic Versioning**

```
MAJOR.MINOR.PATCH
  │      │     │
  │      │     └── Bug fix, backward compatible
  │      └──────── New feature, backward compatible
  └─────────────── Breaking change
```

**E. Security**

- **Dependency confusion:** Attacker publish package cùng tên với internal package lên public registry. npm ưu tiên public → cài nhầm package độc hại.
- **Lockfile integrity:** `npm audit` kiểm tra known vulnerabilities. `package-lock.json` có `integrity` hash để verify package không bị sửa.

#### 4. Mental Model

**Model: `node_modules` là thư viện công cộng**

- **`package.json`** = Danh sách sách muốn mượn (có thể ghi "phiên bản mới nhất của Sherlock Holmes")
- **Lockfile** = Biên lai mượn sách chính xác: "Mượn Sherlock Holmes tập 3, in lần thứ 5, từ kệ B-12"
- **Xóa `node_modules`** = Đốt thư viện đi xây lại — không cần thiết nếu chỉ cần sửa biên lai

**Model: Peer dependency là hợp đồng thuê nhà**

Bạn thuê căn hộ (library) nhưng phải tự mua điện thoại (React). Chủ nhà không cung cấp điện thoại, nhưng yêu cầu bạn phải có loại tương thích (React 18.x).

**Model: Monorepo là trung tâm thương mại**

Nhiều cửa hàng (packages) trong một tòa nhà (repo). Chia sẻ hệ thống điện nước (shared config, types) nhưng mỗi cửa hàng có bảng hiệu riêng (publish riêng).

#### 5. Visualization

**Dependency Hoisting (npm/yarn classic):**

```
node_modules/
├── react (18.2.0)  ← hoisted
├── lodash (4.17.21)
└── some-lib/
    └── node_modules/
        └── lodash (4.17.15)  ← duplicate!
```

**pnpm Content-Addressable Store:**

```
~/.pnpm-store/
├── lodash@4.17.21/  ← 1 bản duy nhất trên disk
├── lodash@4.17.15/

project/node_modules/
├── lodash -> ~/.pnpm-store/lodash@4.17.21  ← hard link
└── some-lib/
    └── node_modules/
        └── lodash -> ~/.pnpm-store/lodash@4.17.15
```

**Peer Dependency Conflict:**

```
my-app
├── react@18.2.0
└── some-lib
    └── peerDependencies: react@^17.0.0  ← ⚠️ Warning!
```

#### 6. Guided Example

**Bài toán:** Resolve lockfile conflict sau khi merge branch.

```bash
# BEFORE: Xóa node_modules (Sai!)
rm -rf node_modules package-lock.json
npm install

# AFTER: Resolve đúng cách
# Step 1: Accept both changes (hoặc regenerate từ package.json)
git checkout --theirs package-lock.json  # Hoặc --ours
npm install  # Regenerate lockfile từ package.json mới

# Step 2: Verify
npm ci  # Clean install từ lockfile để đảm bảo ổn định
```

**Think Aloud:**
1. Lockfile conflict thường xảy ra khi 2 branch thêm dependency khác nhau
2. Không xóa lockfile — mất exact version, reintroduce "works on my machine"
3. `npm ci` (clean install) verify lockfile khớp với `package.json`

**Monorepo setup với pnpm:**

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

```json
// apps/web/package.json
{
  "dependencies": {
    "@myorg/ui": "workspace:*",
    "@myorg/utils": "workspace:*"
  }
}
```

```bash
# Changeset workflow
pnpm changeset  # Chọn package, mô tả change
# Merge PR → CI bump version → publish
```

#### 7. Guided Questions

- Tại sao không nên xóa `node_modules` khi lockfile conflict?
- `peerDependencies` khác `dependencies` ở điểm nào? Cho ví dụ thư viện UI.
- Dependency confusion là gì? Cách phòng tránh?

#### 8. Guided Practice

**Bài tập:** Setup pnpm workspace với 2 package: `apps/web` và `packages/ui`.

**Checklist:**
- [ ] `packages/ui` export component, có `peerDependencies: react`
- [ ] `apps/web` import `@myorg/ui` qua `workspace:*`
- [ ] Publish `packages/ui` lên GitHub Packages với changeset

#### 9. Independent Practice

**Bài tập:** Resolve một lockfile conflict thực tế:
1. Tạo 2 branch, mỗi branch thêm 1 dependency khác nhau
2. Merge và gây conflict `package-lock.json`
3. Resolve đúng cách không xóa lockfile
4. Verify bằng `npm ci`

#### 10. Edge Cases

**A. Peer dependency hell — React 18 vs 19**

```json
{
  "dependencies": {
    "react": "^18.2.0"
  },
  "devDependencies": {
    "some-testing-lib": "^1.0.0"  // peer react@^17
  }
}
```

Fix: Dùng `pnpm.peerDependencyRules.ignoreMissing` hoặc override. Hoặc đơn giản: đừng dùng lib không support React 18.

**B. Lockfile poisoning**

Attacker sửa `package-lock.json`, thay `integrity` hash của package hợp lệ bằng package độc hại. `npm install` vẫn pass vì tin lockfile.

Fix: `npm audit`, enable npm provenance, review lockfile trong PR.

**C. `workspace:` protocol sau publish**

```json
// Trước publish
"dependencies": {
  "@myorg/ui": "workspace:*"
}

// Sau publish (pnpm changeset version tự thay)
"dependencies": {
  "@myorg/ui": "^1.2.3"
}
```

Nếu dùng `workspace:*` trong published package mà không có tool thay thế, consumer sẽ không install được.

#### 11. Reflection

**Teach Back:** Giải thích `peerDependencies` cho junior. Tại sao thư viện UI không nên bundle React vào?

**Self-Check:**
- [ ] Tôi tự resolve lockfile conflict không xóa `node_modules`
- [ ] Tôi giải thích được dependency confusion
- [ ] Tôi setup được pnpm workspace và changeset

#### 12. Exit Exam

**Bài thi:**
1. Tự resolve lockfile conflict không xóa `node_modules`. Giải thích từng bước.
2. Giải thích dependency confusion và cách phòng tránh.
3. Setup monorepo với pnpm workspace, publish 1 package lên npm/GitHub Packages.

**Pass criteria:**
- Lockfile conflict resolved đúng cách
- Không có duplicate React trong bundle
- Package publish thành công với semantic version

---

### Module 1.3 — Git Teamwork

#### 1. Context

**Vấn đề thực tế:**
Bạn làm feature mới, commit 15 lần với message "fix", "fix again", "wtf". Đồng nghiệp review PR không hiểu. Bạn merge branch và gây conflict. Bạn cần tìm commit nào introduce regression trong 20 commit. Bạn accidentally `git reset --hard` và mất commit.

**Hậu quả nếu không hiểu:**
- History rối, không revert được
- Không biết khi nào rebase, khi nào merge
- Mất code vĩnh viễn vì không biết `reflog`

#### 2. Prerequisites
- Biết Git cơ bản: add, commit, push, pull, branch
- Hiểu khái niệm commit graph

#### 3. Knowledge Building

**A. Rebase vs Merge**

| | Merge | Rebase |
|---|---|---|
| History | Preserved (merge commit) | Linear (rewrite history) |
| Use case | Feature branch → main (public) | Cập nhật feature branch với main (private) |
| Conflict | Resolve 1 lần | Resolve từng commit |
| Team | An toàn, transparent | Risky nếu đã push |

**B. Interactive Rebase**

`git rebase -i HEAD~5` — rewrite 5 commit gần nhất:
- `pick`: Giữ nguyên
- `reword`: Sửa message
- `squash`: Gộp vào commit trước
- `fixup`: Gộp, bỏ message
- `drop`: Xóa commit

**C. Advanced Commands**

- **`git cherry-pick <commit>`:** Copy commit từ branch khác sang branch hiện tại.
- **`git reflog`:** Log của mọi thao tác trên HEAD (commit, reset, rebase, checkout). Cứu code khi `reset --hard`.
- **`git bisect`:** Binary search qua commit history để tìm commit gây regression.
- **`git sparse-checkout`:** Chỉ checkout một phần repo (hữu ích cho monorepo lớn).

**D. Conventional Commits**

```
<type>(<scope>): <subject>

<body>

<footer>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting (no code change)
- refactor: Code change neither fix nor feat
- perf: Performance improvement
- test: Adding tests
- chore: Maintenance
```

**E. Commit Scope**

Scope giúp xác định ảnh hưởng của commit:
- `feat(auth): add OAuth login`
- `fix(api): handle null response`
- `refactor(ui): extract Button component`

#### 4. Mental Model

**Model: Git history là timeline của dự án**

- **Merge** = Hai dòng thời gian hợp nhất, vẫn giữ nhánh song song (multiverse)
- **Rebase** = Di chuyển một nhánh thời gian để bắt đầu từ điểm khác (rewrite history)
- **Reflog** = Bản sao lưu tự động của máy thời gian — dù bạn xóa timeline, bản sao vẫn còn trong 90 ngày
- **Bisect** = Tìm kiếm nhị phân trong timeline: "Bug có ở đây không? Không → đi tới. Có → đi lui."

#### 5. Visualization

**Merge vs Rebase:**

```
Merge:
main:    A---B---C---F (merge commit)
            \     /
feature:     D---E

Rebase:
main:    A---B---C
feature:         D'---E' (rewritten on top of C)
```

**Git Bisect Flow:**

```
Bad (HEAD) ────────────────────── Good (old)
      │                                  │
      └──────────► Check mid ──► Bad? ──┘
                          │
                    Yes: Move left
                    No:  Move right
```

#### 6. Guided Example

**Bài toán:** Tìm commit gây regression bằng `git bisect`.

```bash
# Bắt đầu bisect
git bisect start

# Đánh dấu commit hiện tại là bad
git bisect bad

# Đánh dấu commit cũ known-good (ví dụ: từ 1 tuần trước)
git bisect good v1.2.0

# Git checkout commit giữa. Bạn test:
npm test

# Nếu pass:
git bisect good

# Nếu fail:
git bisect bad

# Lặp lại ~log2(n) lần. Cuối cùng:
git bisect reset
# Git báo: "abc1234 is the first bad commit"
```

**Think Aloud:**
1. Binary search giảm số lần test từ 20 xuống ~5
2. Mỗi bước phải xác định rõ good/bad — không được "maybe"
3. `git bisect run npm test` — tự động hóa nếu có script test

**Interactive rebase để clean history:**

```bash
git rebase -i HEAD~5

# Trong editor:
pick abc1234 feat: add login form
fixup def5678 fix: typo
fixup ghi9012 fix: lint
reword jkl3456 feat: add OAuth
drop mno6789 wip: experiment
```

#### 7. Guided Questions

- Khi nào rebase, khi nào merge? Tại sao không rebase branch đã push?
- `git reflog` khác `git log` ở điểm nào? Làm sao cứu commit sau `git reset --hard`?
- Conventional Commits có lợi ích gì cho việc generate changelog?

#### 8. Guided Practice

**Bài tập:** Simulate conflict nghiêm trọng:
1. Tạo branch `feature`, sửa file A
2. Tạo branch `hotfix` từ main, rename file A → file B
3. Merge `hotfix` vào main
4. Rebase `feature` lên main — resolve rename conflict

#### 9. Independent Practice

**Bài tập:**
1. Tạo 20 commit với một số commit gây lỗi test
2. Dùng `git bisect` tìm commit gây lỗi
3. Dùng `git reflog` phục hồi sau `git reset --hard HEAD~10`

#### 10. Edge Cases

**A. `git bisect` với skip**

```bash
# Một commit không build được (unrelated issue)
git bisect skip
# Git sẽ tìm commit khác để test
```

**B. Cứu commit mất bằng `reflog`**

```bash
git reflog
# abc1234 HEAD@{5}: commit: feat: important feature
git reset --hard HEAD@{5}  # Phục hồi
```

**C. Rebase public branch**

```bash
# Bạn đã push feature branch, đồng nghiệp đã pull
git rebase main
git push --force  # ⚠️ Đồng nghiệp sẽ có history diverged!
```

Fix: Dùng `git merge main` thay vì rebase nếu branch đã public.

#### 11. Reflection

**Teach Back:** Giải thích cho junior: "Tại sao không nên `git push --force` trên main branch?" Kể một lần bạn (hoặc ai đó) làm mất code và cách phục hồi.

#### 12. Exit Exam

**Bài thi:**
1. Tự resolve lockfile conflict. (Lưu ý: Đây là kỹ năng từ Module 1.2, nhưng Git conflict cũng tương tự — merge code conflict.)
2. Giải thích khi nào rebase, khi nào merge.
3. Dùng `git bisect` tìm regression trong 20 commit.
4. Cứu commit mất bằng `reflog`.

**Pass criteria:**
- Resolve conflict đúng cách không mất code
- Giải thích được trade-off rebase vs merge
- Tìm được bad commit trong ≤5 bước bisect
- Phục hồi được commit sau `reset --hard`

---

## Stage 1 Checkpoint

Trước khi sang Stage 2, tự trả lời:

| Câu hỏi | Nếu "Không" → Quay lại |
|---------|------------------------|
| Tôi giải thích được ESM tree-shake tốt hơn CJS? | Module 1.1 |
| Tôi tìm được duplicate dependency trong bundle? | Module 1.1 |
| Tôi tự resolve lockfile conflict không xóa `node_modules`? | Module 1.2 |
| Tôi giải thích được dependency confusion? | Module 1.2 |
| Tôi biết khi nào rebase, khi nào merge? | Module 1.3 |
| Tôi dùng `git bisect` tìm được regression? | Module 1.3 |

**Quy tắc:** Không sang Stage 2 nếu chưa đạt Exit Criteria của tất cả module Stage 1.