# PHẦN 9: LỘ TRÌNH THỰC HIỆN CHI TIẾT

> **Triết lý cốt lõi:** Không timeline cứng, không đếm ngày. Chỉ có **thứ tự module** và **Exit Criteria**. Tuân theo dependency: bạn không thể hiểu sâu React Fiber nếu chưa hiểu Browser Rendering Pipeline; không thể tối ưu Network nếu chưa hiểu HTTP/2 và TLS.  
> Quy tắc duy nhất: **không sang module sau khi chưa đạt Exit Criteria module trước**.

---

## MỤC LỤC

- [0. Triết lý đào tạo](#0-triết-lý-đào-tạo)
- [1. Stage 0 — Foundation](#1-stage-0--foundation)
- [2. Stage 1 — Build & Tooling](#2-stage-1--build--tooling)
- [3. Stage 2 — Project 1: SaaS Landing + Blog + Newsletter](#3-stage-2--project-1)
- [4. Stage 3 — Project 2: E-commerce Checkout Flow](#4-stage-3--project-2)
- [5. Stage 4 — Project 3: Admin Dashboard](#5-stage-4--project-3)
- [6. Stage 5 — Project 4: Real-time Social Feed](#6-stage-5--project-4)
- [7. Stage 6 — Project 5: Design System + Component Library](#7-stage-6--project-5)
- [8. Stage 7 — Project 6: Legacy Migration](#8-stage-7--project-6)
- [9. Stage 8 — Consolidation & Interview Prep](#9-stage-8--consolidation)
- [10. Checkpoint & References](#10-checkpoint--references)

---

## 0. TRIẾT LÝ ĐÀO TẠO

### 0.1 Core Philosophies

Các triết lý sau là nền móng bất biến của chương trình. Không được loại bỏ, chỉ được bổ sung.

| Triết lý | Định nghĩa | Tại sao cần |
|----------|-----------|-------------|
| **Spiral Learning** | Học theo vòng xoắn ốc — mỗi vòng đi qua cùng một chủ đề nhưng ở độ sâu cao hơn | Kiến thức phức tạp không thể nắm trong một lần tiếp cận |
| **Deliberate Practice** | Luyện tập có chủ đích với feedback cụ thể, nằm ngoài vùng thoải mái | Kỹ năng chỉ phát triển khi luyện tập đúng cách, không phải lặp lại công việc thường ngày |
| **Mental Model** | Xây dựng mô hình tư duy trừu tượng về cơ chế hoạt động thực sự | Giúp suy luận trong tình huống mới thay vì nhớ công thức |
| **First Principles** | Phân rách vấn đề về nguyên lý cơ bản, không dựa vào analogy | Tránh hiểu nhầm do metaphor sai hoặc abstraction leak |
| **Active Recall** | Tự gợi nhớ kiến thức thay vì đọc lại passive | Tăng retention và phát hiện lỗ hổng hiểu biết |
| **Teach Back** | Giải thích lại cho người khác (hoặc tưởng tượng) | Lỗ hổng hiểu biết lộ ra khi phải diễn đạt |
| **Edge Case Learning** | Học qua trường hợp biên, failure mode, và hiểu lầm phổ biến | Production không crash ở happy path |
| **ADR (Architecture Decision Record)** | Ghi lại bối cảnh, lựa chọn đã cân nhắc, trade-off, và quyết định | Rèn luyện tư duy engineering, không phải coding |
| **War Story** | Phân tích tình huống thực chiến: Bối cảnh → Ràng buộc → Lựa chọn → Quyết định → Trade-off → Bài học | Chuyển đổi kinh nghiệm người khác thành judgment của bản thân |
| **Exit Criteria** | Tiêu chí rõ ràng để xác nhận đã sẵn sàng sang module tiếp theo | Tránh ảo tưởng năng lực và lấp lỗ hổng kiến thức |
| **Learning by Building** | Học thông qua xây dựng project thực | Kiến thức chỉ củng cố khi áp dụng vào bối cảnh thực |
| **Production Mindset** | Mọi quyết định đều xét đến monitoring, rollback, security, performance, accessibility | Junior viết code chạy được; Senior viết code vận hành được |
| **Engineering Thinking** | Tư duy phân rã, đánh giá trade-off, đo lường, verify hypothesis | Phân biệt lập trình viên và kỹ sư phần mềm |

### 0.2 Knowledge Scaffolding — Giàn giáo tri thức

#### A. Vấn đề với Socratic Method thuần túy

Socratic Method (đặt câu hỏi → học viên suy nghĩ → học) hiệu quả khi học viên đã có **Mental Model** đủ để suy luận. Nhưng với Fresher — người chưa có nền tảng — việc bị hỏi "Tại sao Event Loop hoạt động như vậy?" tương đương yêu cầu xây nhà trên không trung.

**Nguyên lý:** Không được yêu cầu học viên trả lời những gì họ chưa có Mental Model.

#### B. Cognitive Load Theory

Bộ nhớ làm việc (working memory) của con người có giới hạn khoảng 4±1 chunk thông tin đồng thời. Khi học kiến thức mới:

- **Intrinsic load:** Độ phức tạp vốn có của kiến thức (không giảm được)
- **Extraneous load:** Gánh nặng từ cách trình bày (phải giảm — ví dụ: không dùng thuật ngữ lạ trước khi định nghĩa)
- **Germane load:** Gánh nặng tích cực từ việc xây dựng schema (cần tối đa hóa)

**Áp dụng:** Mỗi bài học chỉ giới thiệu tối đa 3–5 khái niệm mới. Mọi khái niệm mới phải được neo vào kiến thức đã có.

#### C. Zone of Proximal Development (ZPD)

ZPD là khoảng cách giữa:
- Những gì học viên **tự làm được** một mình
- Những gì học viên **làm được với hướng dẫn**

Nhiệm vụ của mentor là đưa bài tập vào đúng ZPD — không quá dễ (chán), không quá khó (bỏ cuộc).

**Đo lường ZPD:** Nếu học viên giải được bài tập trong 3 lần thử với gợi ý → đúng ZPD. Nếu cần >5 lần gợi ý → quá khó, cần giảm độ phức tạp. Nếu làm đúng ngay lần đầu → quá dễ, cần tăng độ phức tạp.

#### D. Scaffolding trong chương trình này

Scaffolding không phải là "dễ dàng hóa" — nó là **cấu trúc hóa** quá trình học:

1. **Conceptual scaffolding:** Định nghĩa, thuật ngữ, khái niệm nền được cung cấp trước
2. **Procedural scaffolding:** Hướng dẫn từng bước, checklist, template
3. **Strategic scaffolding:** Gợi ý cách tiếp cận, không phải câu trả lời
4. **Metacognitive scaffolding:** Yêu cầu học viên tự đánh giá "Tôi hiểu đến đâu?"

**Scaffolding được tháo dần:** Stage 0–1 có nhiều scaffolding nhất. Stage 5–7 scaffolding gần như biến mất, thay vào đó là discussion và self-directed learning.

### 0.3 Learning Pipeline — 12 bước

Mỗi module trong chương trình tuân theo pipeline sau. **Không đảo thứ tự.**

```
┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐
│   Context   │───▶│ Prerequisites│───▶│ Knowledge Building│
│  (Tại sao?) │    │  (Cần gì?)   │    │  (Khái niệm)       │
└─────────────┘    └─────────────┘    └─────────────────────┘
                                              │
┌─────────────┐    ┌─────────────┐    ┌───────▼───────────┐
│  Reflection │◀───│ Edge Cases  │◀───│ Independent Practice│
│ (Teach Back)│    │ (Phản biện) │    │   (Tự làm)         │
└─────────────┘    └─────────────┘    └───────────────────┘
       ▲                                      │
       └─────────────┐    ┌─────────────┐     │
                     │◀───│ Guided      │◀───┘
                     │    │ Practice    │
                     │    │ (Có gợi ý)  │
                     │    └─────────────┘
                     │           ▲
                     │    ┌──────┴──────────┐
                     │    │ Guided Questions│
                     │    │ (Socratic)      │
                     │    └─────────────────┘
                     │           ▲
                     │    ┌──────┴───────────┐
                     │    │ Guided Example   │
                     │    │ (Làm cùng mentor)│
                     │    └──────────────────┘
                     │           ▲
                     └────┌──────┴──────────┐
                          │ Visualization   │
                          │ (Hình dung)     │
                          └─────────────────┘
                                  ▲
                          ┌───────┴───────────┐
                          │   Mental Model    │
                          │ (Mô hình tư duy)  │
                          └───────────────────┘
```

#### 1. Context
**Mục đích:** Trả lời "Tại sao phải học?"
- Vấn đề thực tế kiến thức này giải quyết
- Hậu quả nếu không hiểu
- Bối cảnh production cụ thể

#### 2. Prerequisites
**Mục đích:** Xác định kiến thức nền tối thiểu
- Liệt kê module phụ thuộc
- Kiểm tra nhanh trước khi bắt đầu
- Nếu thiếu → quay lại module trước

#### 3. Knowledge Building
**Mục đích:** Cung cấp dữ liệu thô để suy luận
- Định nghĩa chính xác
- Thuật ngữ và ký hiệu
- Thành phần cấu thành
- **Không** đi sâu implementation detail

#### 4. Mental Model
**Mục đích:** Xây dựng mô hình tư duy trừu tượng
- Cơ chế hoạt động thực sự (không phải API surface)
- Analogy phù hợp (nếu cần) nhưng phải chỉ rõ giới hạn của analogy
- Quan hệ nhân-quả giữa các thành phần

#### 5. Visualization
**Mục đích:** Biến trừu tượng thành hình ảnh
- Sơ đồ kiến trúc
- Timeline / flow
- Stack / queue / memory layout
- State transition diagram

#### 6. Guided Example
**Mục đích:** Cho học viên thấy cách tư duy
- Mentor giải quyết 1 bài toán từ đầu đến cuối
- Nói to suy nghĩ (think aloud)
- Giải thích tại sao loại bỏ từng lựa chọn sai

#### 7. Guided Questions
**Mục đích:** Kích hoạt Socratic Method đúng lúc
- Chỉ hỏi trong phạm vi kiến thức vừa xây
- Không hỏi ngoài ZPD
- Gợi ý dần nếu học viên bí

#### 8. Guided Practice
**Mục đích:** Làm cùng với hỗ trợ
- Bài tập có cấu trúc
- Checklist từng bước
- Mentor feedback real-time

#### 9. Independent Practice
**Mục đích:** Tự làm không hỗ trợ
- Bài tập tương tự nhưng khác context
- Không có gợi ý
- Self-check với đáp án

#### 10. Edge Cases
**Mục đích:** Phá vỡ hiểu lầm và rèn luyện judgment
- Trường hợp biên
- Failure mode
- Hiểu lầm phổ biến
- Anti-pattern

#### 11. Reflection
**Mục đích:** Củng cố và tổng hợp
- Teach Back: giải thích lại bằng lời của mình
- So sánh với kiến thức trước đó
- Viết summary
- Tự đánh giá: "Tôi hiểu điều gì? Chưa hiểu điều gì?"

#### 12. Exit Exam
**Mục đích:** Đánh giá khả năng transfer knowledge
- Không dùng đúng ví dụ đã học
- Context mới, bài toán mới
- Đánh giá khả năng áp dụng, không phải nhớ lại

### 0.4 Stage-Based Teaching Model

Cách mentor tương tác với học viên thay đổi theo từng Stage. Đây không phải quy tắc cứng nhắc mà là gradient.

#### Stage 0–1: Foundation & Build Tooling
**Tỷ lệ: 70% Teaching / 30% Questioning**

- Mentor **dạy trực tiếp** nhiều hơn
- Giải thích cơ chế, định nghĩa, mô hình
- Hướng dẫn từng bước, cho template
- Questioning tập trung vào **verification** ("Em có hiểu điều này không?") hơn **exploration** ("Em nghĩ sao?")
- **Lý do:** Học viên chưa có đủ chunk kiến thức để suy luận. ZPD nằm gần hoàn toàn trong vùng cần hướng dẫn.

#### Stage 2–4: Project Application
**Tỷ lệ: 50% Teaching / 50% Questioning**

- Mentor chuyển sang **facilitator**
- Teaching tập trung vào pattern mới và review
- Questioning tập trung vào **guidance** ("Nếu API này fail, em sẽ xử lý thế nào?")
- Học viên bắt đầu tự đưa ra lựa chọn với gợi ý
- **Lý do:** Học viên đã có nền tảng đủ để suy luận trong domain quen thuộc nhưng cần scaffolding cho domain mới.

#### Stage 5–7: Advanced & Architecture
**Tỷ lệ: 20% Teaching / 80% Discussion**

- Mentor là **sparring partner** và **reviewer**
- Teaching giới hạn trong kiến thức hoàn toàn mới (ví dụ: Micro-frontend pattern)
- Questioning chuyển thành **challenge** ("Tại sao em không cân nhắc X?", "Trade-off của lựa chọn này là gì?")
- Học viên tự nghiên cứu, đưa ra ADR, mentor phản biện
- **Lý do:** Học viên đã có đủ Mental Model để tự suy luận. Giá trị của mentor nằm ở việc chỉ ra blind spot và rèn luyện judgment.

### 0.5 Core Loop — Vòng xoắn ốc vĩnh cửu

Roadmap này không tuyến tính. Bạn không bao giờ "xong Stage 8". Đây là vòng lặp vĩnh cửu — mỗi vòng xoắn ốc đưa bạn lên cao hơn, nhìn rộng hơn, nhưng vẫn đi trên chính nền tảng đã xây.

```
                    ┌─────────────┐
                    │  FOUNDATION │
                    │ (Stage 0–1) │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   PROJECT   │
                    │ (Stage 2–7) │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  PRODUCTION │
                    │   (Deploy)  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   INCIDENT  │
                    │  (2 giờ sáng)│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   REFACTOR  │
                    │  (ADR/Spiral)│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  TEACH BACK │
                    │ (Blog/Mentor)│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ OPEN SOURCE │
                    │ (Contribute) │
                    └──────┬──────┘
                           │
                           └──────────────► FOUNDATION (lần 2)
                                           (đọc lại YDKJS,
                                            V8 blog, React source —
                                            hiểu sâu hơn lần trước)
```

**Quy tắc áp dụng:**
- Sau mỗi Project (Stage 2–7), bắt buộc viết ít nhất 1 ADR và 1 War Story trước khi sang Stage tiếp theo.
- Sau Stage 8, quay lại Stage 0 với góc nhìn mới — lần này đọc source code thay vì tutorial.
- Mỗi lần lặp lại Foundation, giảm thờigian Vòng 1 (Foundation) và tăng thờigian Vòng 3 (Mastery).

### 0.6 Deliberate Practice — Hoạt động bắt buộc mỗi tuần

| Hoạt động | Tần suất | Mục đích |
|-----------|----------|----------|
| **Source Code Reading** | 2–3 giờ/tuần | Đọc source Zustand, TanStack Query, Radix, React Fiber, V8 blog |
| **Edge Case Lab** | 1 buổi/tuần | "Điều gì xảy ra nếu...", viết test cho edge case, simulate failure |
| **War Story Documentation** | 1 bài/tuần | Bối cảnh → Ràng buộc → Lựa chọn → Quyết định → Trade-off → Bài học |
| **Teach Back** | 1 buổi/tuần | Giải thích cho junior tưởng tượng hoặc viết blog kỹ thuật |

### 0.7 Milestone đánh giá năng lực

- **Milestone 1:** Debug được 1 bug production thực mà không cần Google
- **Milestone 2:** Review PR của ngườikhác, tìm ra lỗi security/performance họ không thấy
- **Milestone 3:** Viết ADR với ít nhất 3 lựa chọn đã cân nhắc, mỗi lựa chọn có rủi ro cụ thể
- **Milestone 4:** Tự implement 1 thư viện nhỏ (giống Zustand, Virtual Scroll, hoặc 1 phần React)
- **Milestone 5:** Xử lý được incident 2 giờ sáng (simulate) — quyết định rollback/feature flag/fix ngay trong 10 phút

---

## 1. STAGE 0 — FOUNDATION

> **Mục tiêu:** Hiểu "máy tính chạy code như thế nào" và "trình duyệt render trang như thế nào" trước khi chạm vào framework.  
> **Nguyên tắc:** Nếu không vẽ được Event Loop và Rendering Pipeline trên giấy, chưa sang Stage 1.  
> **Teaching Model:** 70% Teaching / 30% Questioning

### Stage 0 Overview

**Tại sao Stage 0 tồn tại:**
Hầu hết lập trình viên frontend bắt đầu bằng cách học React syntax. Điều này tương đương việc học lái xe bằng cách nhớ vị trí nút bấm mà không hiểu động cơ, hệ thống phanh, và vật lý ma sát. Khi xe hỏng (production bug), họ không thể chẩn đoán.

**Hậu quả nếu bỏ qua:**
- Không thể debug memory leak vì không hiểu Garbage Collection
- Không thể optimize INP vì không hiểu Browser Rendering Pipeline
- Không thể viết code bất đồng bộ đúng vì không hiểu Event Loop

**Output của Stage 0:**
- Vẽ được Event Loop, Rendering Pipeline, HTTP Request Lifecycle
- Giải thích được cơ chế V8, GC, TLS handshake
- Debug được bug cơ bản bằng DevTools

---

### Module 0.1 — JS Engine & Runtime

#### 1. Context

**Vấn đề thực tế:**
Bạn viết `const obj = { a: 1 }` — nhưng điều gì thực sự xảy ra trong RAM? Tại sao đoạn code này chạy nhanh, đoạn kia chậm? Tại sao `Promise.then` chạy trước `setTimeout(..., 0)`? Tại sao app bị memory leak sau 2 giờ?

**Hậu quả nếu không hiểu:**
- Tối ưu sai chỗ (ví dụ: micro-optimize vòng lặp trong khi vấn đề là GC pressure)
- Không debug được race condition
- Không hiểu tại sao React re-render

#### 2. Prerequisites
- Biết JavaScript cơ bản: variables, functions, objects, arrays
- Biết cách mở Chrome DevTools
- Hiểu khái niệm stack và heap ở mức đại học (nếu chưa có, học trong 30 phút trước khi bắt đầu)

#### 3. Knowledge Building

**A. V8 Engine Pipeline**

JavaScript là ngôn ngữ dynamic — type của biến có thể thay đổi runtime. Nhưng CPU chỉ hiểu machine code. V8 phải biên dịch JS → machine code nhanh nhất có thể.

Pipeline hiện tại (V8 v10+):

```
JavaScript Source
       │
       ▼
   Ignition (Bytecode Interpreter)
       │
       ├──► Sparkplug (Baseline Compiler) ──► Machine Code (nhanh, không optimize)
       │
       └──► Maglev (Mid-tier Optimizer) ────► Optimized Machine Code
                    │
                    └──► TurboFan (Top-tier Optimizer) ──► Highly Optimized Machine Code
```

- **Ignition:** Biên dịch JS thành bytecode. Chạy ngay lập tức. Không optimize.
- **Sparkplug:** Biên dịch bytecode thành machine code nhanh (baseline). Không bỏ qua edge case.
- **Maglev:** Optimizer tầm trung. Inlining, constant folding, type specialization.
- **TurboFan:** Optimizer cao cấp. Loop unrolling, escape analysis, speculative optimization.

**B. Hidden Classes & Inline Caching**

Khi bạn tạo object:
```js
const p1 = { x: 1, y: 2 };
const p2 = { x: 3, y: 4 };
```

V8 tạo một **hidden class** (còn gọi là shape/map) mô tả cấu trúc object. `p1` và `p2` chia sẻ cùng hidden class vì có cùng shape (x rồi y).

Nếu bạn làm:
```js
const p3 = { x: 1, y: 2 };
p3.z = 3;  // Thêm property mới
```

V8 phải tạo hidden class mới. Nếu object shape không consistent, V8 không thể inline cache property access → mỗi lần truy cập property phải lookup dictionary → chậm 10–100x.

**C. Event Loop**

JavaScript là single-threaded nhưng có thể xử lý bất đồng bộ nhờ Event Loop.

Các thành phần:
- **Call Stack:** Nơi thực thi synchronous code. LIFO.
- **Heap:** Nơi lưu objects. Unstructured memory.
- **Web APIs:** Các API browser cung cấp (setTimeout, fetch, DOM events). Chạy ngoài main thread.
- **Microtask Queue:** Chứa callbacks từ `Promise.then`, `MutationObserver`, `queueMicrotask`. FIFO. Được xử lý **ngay sau khi call stack rỗng**, trước macrotask.
- **Macrotask Queue (Callback Queue):** Chứa callbacks từ `setTimeout`, `setInterval`, `setImmediate`, I/O. FIFO. Được xử lý **mỗi iteration của event loop**, sau khi microtask queue rỗng.
- **Render Phase:** Browser paint frame (60Hz/120Hz). Chạy sau khi cả call stack và microtask queue rỗng, nhưng có thể bị delay nếu task quá dài.

**D. Memory Management**

- **Mark-and-Sweep:** GC đánh dấu objects reachable từ root (global object, stack variables). Objects không reachable bị xóa.
- **Generational GC:** Heap chia làm Young Generation (ngắn hạn) và Old Generation (dài hạn). Objects mới sinh ra ở Young. Nếu sống qua vài lần Minor GC, promoted sang Old.
- **WeakMap / WeakSet / WeakRef / FinalizationRegistry:** Cho phép reference đến object mà không ngăn GC thu hồi. `WeakMap` key phải là object; nếu key không còn reference nào khác, entry tự động bị xóa.

#### 4. Mental Model

**Model chính: Event Loop là vòng lặp điều phối**

Hãy tưởng tượng Event Loop như một quản lý nhà hàng:
- **Call Stack** là bếp chính — chỉ nấu được 1 món tại một thờiiểm (single-threaded)
- **Web APIs** là các bếp phụ — nhận order rồi báo lại khi xong (setTimeout, fetch)
- **Microtask Queue** là khay ưu tiên — món này phải phục vụ ngay sau khi bếp chính rảnh, trước khi lấy order mới
- **Macrotask Queue** là khay thường — phục vụ theo thứ tự, mỗi lần 1 món
- **Render Phase** là lúc bồi bàn dọn bàn — chỉ làm khi bếp chính và khay ưu tiên đều rỗng

**Giới hạn của model:**
- Model này không bao gồm Worker Threads (Web Workers chạy trên thread riêng)
- Không mô tả chi tiết V8 pipeline (Ignition → TurboFan)
- Chỉ mô tả 1 event loop; Node.js có nhiều phase khác (timers, I/O callbacks, idle, prepare, check, close callbacks)

#### 5. Visualization

**A. Event Loop Timeline**

```
Time →
│  sync()        │  Promise.then()  │  setTimeout()  │  Render  │
│  ████████████  │  ████            │                │          │
│  Call Stack    │  Microtask       │                │          │
│                │  Queue           │                │          │
│                │                  │  ████          │  ░░░░    │
│                │                  │  Macrotask     │  Paint   │
```

**B. Memory Layout**

```
┌─────────────────────────────────────────┐
│              STACK                      │
│  (primitive values, references,         │
│   execution contexts)                   │
│  LIFO, fast allocation/deallocation     │
├─────────────────────────────────────────┤
│              HEAP                       │
│  ┌──────────────┐  ┌─────────────────┐  │
│  │   YOUNG      │  │      OLD        │  │
│  │  Generation  │  │   Generation    │  │
│  │  (New Space) │  │   (Old Space)   │  │
│  │  Minor GC    │  │   Major GC      │  │
│  │  (Scavenge)  │  │   (Mark-Sweep)  │  │
│  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────┘
```

#### 6. Guided Example

**Bài toán:** Dự đoán output và giải thích thứ tự.

```js
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

**Think Aloud:**

1. `console.log('1')` — synchronous, chạy ngay. Output: `1`
2. `setTimeout(..., 0)` — đăng ký callback với Web API. Sau 0ms, callback `() => console.log('2')` được đẩy vào **Macrotask Queue**. Không chạy ngay.
3. `Promise.resolve().then(...)` — `then` callback được đẩy vào **Microtask Queue**. Không chạy ngay vì call stack chưa rỗng.
4. `console.log('4')` — synchronous. Output: `4`
5. Call stack rỗng. Event loop kiểm tra **Microtask Queue** trước. Chạy `() => console.log('3')`. Output: `3`
6. Microtask queue rỗng. Event loop kiểm tra **Macrotask Queue**. Chạy `() => console.log('2')`. Output: `2`

**Kết quả:** `1 4 3 2`

**Tại sao không phải `1 2 3 4`:** `setTimeout` là macrotask; `Promise.then` là microtask. Microtask luôn chạy trước macrotask sau khi call stack rỗng.

#### 7. Guided Questions

- Nếu thêm `Promise.resolve().then(() => console.log('5'))` bên trong `setTimeout` callback, thứ tự thay đổi thế nào?
- Tại sao `setTimeout(..., 0)` không chạy ngay lập tức?
- Điều gì xảy ra nếu microtask queue có vòng lặp vô hạn? Render phase có chạy không?

#### 8. Guided Practice

**Bài tập:** Viết một đoạn code tạo ra chuỗi output `A B C D E` theo thứ tự, sử dụng kết hợp `console.log`, `setTimeout`, và `Promise.then`.

**Checklist:**
- [ ] Output đúng thứ tự `A B C D E`
- [ ] Giải thích được tại sao mỗi log chạy ở phase nào
- [ ] Vẽ timeline tương ứng

#### 9. Independent Practice

**Bài tập:** Cho đoạn code sau, dự đoán output và giải thích.

```js
async function foo() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}

console.log('C');
foo();
console.log('D');
```

**Yêu cầu:**
- Không chạy code trước khi viết đáp án
- Giải thích `await` tương đương với gì trong Event Loop
- So sánh với `Promise.then`

#### 10. Edge Cases

**A. `eval()` và `with` phá vỡ hidden class optimization**

```js
function createPoint(x, y) {
  return { x, y };
}

// Fast: consistent shape
const p1 = createPoint(1, 2);
const p2 = createPoint(3, 4);

// Slow: with() forces dictionary mode
function createPointSlow(x, y) {
  const p = { x, y };
  with (p) { z = 3; }  // V8 bỏ hidden class, chuyển sang dictionary
  return p;
}
```

**B. Memory leak qua closure**

```js
function setup() {
  const hugeArray = new Array(1000000).fill('x');
  
  document.getElementById('btn').addEventListener('click', () => {
    console.log('clicked');  // Closure giữ reference đến hugeArray
  });
}
```

`hugeArray` không bị GC dù không dùng đến vì closure trong event listener giữ reference.

**C. `setTimeout` không đảm bảo chính xác**

```js
const start = Date.now();
setTimeout(() => {
  console.log(Date.now() - start);  // Có thể > 0ms, thậm chí > 4ms
}, 0);
```

Browser throttle `setTimeout` trong background tab hoặc khi main thread bận.

#### 11. Reflection

**Teach Back Prompt:**
Giải thích cho một junior developer tưởng tượng: "Tại sao `Promise.then` chạy trước `setTimeout(..., 0)`?" Không được dùng từ "microtask" hoặc "macrotask" trong 30 giây đầu — phải dùng analogy.

**Self-Check:**
- [ ] Tôi vẽ được Event Loop từ đầu đến cuối
- [ ] Tôi giải thích được V8 pipeline (Ignition → Sparkplug → Maglev → TurboFan)
- [ ] Tôi biết tại sao object shape consistency quan trọng
- [ ] Tôi tìm được memory leak bằng Chrome DevTools Memory tab

#### 12. Exit Exam

**Bài thi:**
1. Debug một đoạn code có race condition thực tế (không phải ví dụ đã học). Dùng Chrome DevTools để tìm root cause.
2. Benchmark hai đoạn code: một dùng object shape consistent, một dùng shape inconsistent. Giải thích kết quả.
3. Viết một đoạn code gây memory leak, sau đó fix nó. Chụp Memory tab trước và sau.

**Pass criteria:**
- Giải thích được vì sao `Promise.then` chạy trước `setTimeout(..., 0)`
- Debug được memory leak qua Chrome DevTools Memory tab
- Benchmark chứng minh hidden class optimization

---

### Module 0.1x — Scheduler & Browser Task Scheduling

#### 1. Context

**Vấn đề thực tế:**
Bạn có 10,000 dòng dữ liệu cần render. Nếu render tất cả trong một lần, main thread bị block 2 giây — UI đóng băng, user không thể scroll hoặc click. Làm sao chia nhỏ công việc để UI vẫn responsive?

**Hậu quả nếu không hiểu:**
- Dùng `setTimeout` để "yield" main thread nhưng không hiểu tại sao vẫn drop frame
- Không hiểu React Scheduler hoạt động thế nào
- Không tối ưu được animation 60fps

#### 2. Prerequisites
- Module 0.1 (Event Loop, Call Stack, Microtask/Macrotask)
- Hiểu khái niệm 60fps = 16.67ms/frame

#### 3. Knowledge Building

**A. `requestAnimationFrame` (rAF)**
- Đồng bộ với display refresh rate (60Hz = ~16.67ms, 120Hz = ~8.33ms)
- Callback nhận timestamp (`DOMHighResTimeStamp`)
- Chạy **trước** render/paint phase của browser
- Dùng cho: animation, scroll-linked effects
- Hủy bằng `cancelAnimationFrame`

**B. `requestIdleCallback` (rIC)**
- Chạy task khi main thread "rảnh" (không có input event, rAF, hoặc timer nào chờ)
- Nhận `IdleDeadline` object với `timeRemaining()`
- Có `timeout` option để đảm bảo deadline (nếu browser quá bận, callback vẫn chạy sau timeout)
- **Hạn chế:** Có thể bị delay vĩnh viễn nếu main thread liên tục bận. Safari không hỗ trợ.

**C. Prioritized Task Scheduling API (`scheduler.postTask`)**
- `priority: 'user-blocking'` | `'user-visible'` | `'background'`
- Browser tự quản lý queue và priority
- `signal` để abort/cancel task
- Thay thế tốt hơn rIC cho prioritized work

**D. React Scheduler**
- `unstable_scheduleCallback(priority, callback)`
- Expiration time: task càng ưu tiên, expiration càng ngắn
- Lane-based priority (React 18+): mỗi update được gán lane, scheduler merge và batch updates

#### 4. Mental Model

**Model: Nhà hàng có nhiều loại order**

- **rAF** = Order của VIP khách — phục vụ ngay trước khi bếp dọn món ra (render). Nếu miss, khách thấy món không mượt (drop frame).
- **rIC** = Order của khách không gấp — phục vụ khi bếp rảnh. Nhưng nếu bếp quá bận, khách này đợi mãi.
- **`postTask`** = Hệ thống order có priority — VIP (`user-blocking`) được ưu tiên, nhưng vẫn có queue rõ ràng.
- **React Scheduler** = Bếp trưởng tự quyết định order nào nấu trước dựa trên độ gấp (expiration time) và tài nguyên hiện có.

#### 5. Visualization

**Timeline so sánh:**

```
Frame 1 (16.67ms)          Frame 2 (16.67ms)
├─ rAF callback ─┤         ├─ rAF callback ─┤
├─ Microtasks ───┤         ├─ Microtasks ───┤
├─ rIC (if idle)─┤         ├─ rIC (if idle)─┤
├─ Macrotasks ───┤         ├─ Macrotasks ───┤
├─ Render/Paint ─┤         ├─ Render/Paint ─┤
└─ Idle Time ────┘         └─ Idle Time ────┘
```

#### 6. Guided Example

**Bài toán:** Chia nhỏ render 10,000 item để không block UI.

```js
const items = Array.from({ length: 10000 }, (_, i) => i);
const container = document.getElementById('list');

// Cách 1: Block UI (BAD)
// items.forEach(i => container.appendChild(createItem(i)));

// Cách 2: Dùng rAF để yield (BETTER)
let index = 0;
const BATCH_SIZE = 100;

function renderBatch() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < BATCH_SIZE && index < items.length; i++, index++) {
    fragment.appendChild(createItem(items[index]));
  }
  container.appendChild(fragment);
  
  if (index < items.length) {
    requestAnimationFrame(renderBatch);  // Yield cho browser paint
  }
}

requestAnimationFrame(renderBatch);
```

**Giải thích từng bước:**
1. Thay vì render 10,000 item liên tục (block 2s), ta chia thành batch 100 item
2. Sau mỗi batch, `requestAnimationFrame` yield cho browser paint frame tiếp theo
3. User vẫn có thể scroll/click trong lúc render

#### 7. Guided Questions

- Tại sao không dùng `setTimeout(..., 0)` thay vì `requestAnimationFrame` cho animation?
- `requestIdleCallback` có thể bị delay vĩnh viễn — khi nào điều này xảy ra và fallback là gì?
- React Scheduler dùng lane-based priority — lợi ích so với simple priority queue là gì?

#### 8. Guided Practice

**Bài tập:** Viết một task queue đơn giản với 3 priority level: `animation` > `user-input` > `background-sync`.

**Requirements:**
- Task `animation` phải chạy trong rAF
- Task `user-input` chạy ngay sau animation
- Task `background-sync` chạy khi main thread rảnh (rIC hoặc `postTask`)
- Có thể cancel task

#### 9. Independent Practice

**Bài tập:** Implement một virtual list với 100,000 item. Khi user scroll nhanh, chỉ render item trong viewport ± buffer. Dùng `scheduler.yield()` (nếu browser hỗ trợ) hoặc `requestAnimationFrame` để không block scroll.

#### 10. Edge Cases

**A. `requestIdleCallback` bị delay vĩnh viễn**

```js
function busyLoop() {
  while (true) { /* busy work */ }
}
// Nếu busyLoop chạy, rIC callback sẽ không bao giờ fire
```

**Fix:** Dùng `postTask` với `timeout` hoặc tự implement deadline check.

**B. Animation drop frame vì chạy heavy computation trước rAF**

```js
// BAD: Heavy work trước rAF
heavyComputation();
requestAnimationFrame(animate);

// GOOD: rAF trước, heavy work sau hoặc trong rIC
requestAnimationFrame(animate);
requestIdleCallback(heavyComputation);
```

#### 11. Reflection

**Teach Back:** Giải thích React Scheduler priority cho junior. Dùng analogy nhà hàng. So sánh với rAF/rIC/`postTask`.

#### 12. Exit Exam

**Bài thi:**
1. Giải thích sự khác biệt giữa rAF, rIC, `postTask`, và React Scheduler — khi nào dùng cái nào.
2. Viết một task queue đơn giản ưu tiên animation > user input > background sync.
3. Profile một trang có animation drop frame, xác định nguyên nhân bằng Chrome DevTools Performance tab.

**Pass criteria:**
- Giải thích được sự khác biệt rAF, rIC, `postTask`, React Scheduler
- Viết được task queue ưu tiên đúng
- Fix được animation drop frame trong thực tế

---

### Module 0.2 — Browser Rendering Engine

#### 1. Context

**Vấn đề thực tế:**
Bạn thêm `margin-top: 10px` vào một element và cả trang chậm đi 200ms. Bạn đổi `top: 10px` thành `transform: translateY(10px)` và animation mượt hơn 10x. Tại sao? Bạn set `z-index: 9999` nhưng element vẫn bị che. Tại sao?

**Hậu quả nếu không hiểu:**
- Tối ưu CSS sai chỗ (micro-optimize color thay vì reflow)
- Không hiểu tại sao React re-render gây chậm
- Không debug được layout thrashing

#### 2. Prerequisites
- Module 0.1 (Event Loop, main thread)
- Biết HTML, CSS cơ bản
- Biết cách mở Chrome DevTools Performance tab

#### 3. Knowledge Building

**A. Critical Rendering Path**

```
HTML ──► DOM Tree
          │
CSS  ──► CSSOM Tree
          │
          ▼
     Render Tree (DOM + CSSOM, chỉ visible nodes)
          │
          ▼
     Layout (Reflow) ──► tính toán vị trí, kích thước
          │
          ▼
     Paint (Repaint) ──► vẽ pixels (color, border, shadow)
          │
          ▼
     Composite ──► GPU composite layers thành final image
```

**B. Layout vs Paint vs Composite**

| Thao tác | Trigger | Cost | Ví dụ |
|----------|---------|------|-------|
| **Layout (Reflow)** | Thay đổi geometry | Cao nhất | `width`, `height`, `top`, `left`, `margin` |
| **Paint (Repaint)** | Thay đổi visual nhưng không geometry | Trung bình | `color`, `background-color`, `visibility` |
| **Composite** | Chỉ thay đổi layer transform | Thấp nhất | `transform`, `opacity` |

**C. GPU Layer**

Browser tạo GPU layer cho các element có:
- `transform: translate3d()` hoặc `will-change: transform`
- `opacity` animation
- `position: fixed` hoặc `position: sticky`
- `filter`, `clip-path`
- `canvas`, `video`, `iframe`

Layer được composite bởi GPU — không cần repaint layout layer khác.

**D. Layout Thrashing (Forced Synchronous Layout)**

```js
// BAD: Read -> Write -> Read -> Write (forced reflow)
for (let i = 0; i < elements.length; i++) {
  const height = elements[i].offsetHeight;  // READ (forces layout)
  elements[i].style.height = height * 2 + 'px';  // WRITE (invalidates layout)
}

// GOOD: Batch reads, then batch writes
const heights = elements.map(el => el.offsetHeight);  // READ all
heights.forEach((h, i) => {
  elements[i].style.height = h * 2 + 'px';  // WRITE all
});
```

**E. CSS Rendering Deep Dive**

- **Stacking Context:** Một ngữ cảnh độc lập quyết định thứ tự z-axis. Tạo bởi: `z-index` (trên positioned element), `opacity` < 1, `transform`, `filter`, `isolation: isolate`, `contain`. `z-index` chỉ có ý nghĩa trong cùng stacking context.
- **Containing Block:** Element được position dựa trên containing block của nó. `position: fixed` thường dựa trên viewport, nhưng nếu ancestor có `transform`, `perspective`, hoặc `filter` → containing block thay đổi, `fixed` bị "cắt" theo ancestor.
- **Block Formatting Context (BFC):** Vùng độc lập nơi block boxes được layout. Tạo bởi: `overflow` không phải `visible`, `display: flow-root`, `float`, `position: absolute/fixed`. Dùng để: clear float, ngăn margin collapse, isolate layout.

#### 4. Mental Model

**Model: Browser là họa sĩ vẽ tranh nhiều lớp**

1. **Đọc kịch bản (HTML Parser)** → Tạo danh sách nhân vật (DOM)
2. **Đọc phục trang (CSS Parser)** → Tạo bảng màu/trang phục (CSSOM)
3. **Dựng sân khấu (Render Tree)** → Chọn nhân vật nào xuất hiện, mặc gì
4. **Định vị (Layout)** → Đặt mỗi nhân vật ở đâu, cao bao nhiêu, rộng bao nhiêu
5. **Vẽ màu (Paint)** → Tô màu da, quần áo, nền
6. **Ghép ảnh (Composite)** → Chụp từng lớp riêng biệt, ghép lại bằng Photoshop

**Tại sao `transform` mượt hơn `top/left`:**
- `top/left` thay đổi geometry → phải tính lại Layout cho cả cây → tốn thờigian
- `transform` chỉ thay đổi layer transform → GPU composite ngay → không cần Layout hay Paint

**Tại sao `z-index: 9999` vẫn bị che:**
- `z-index` chỉ so sánh trong cùng stacking context
- Nếu parent tạo stacking context mới với `z-index: 1`, child với `z-index: 9999` vẫn không vượt qua element ở stacking context khác

#### 5. Visualization

**A. Rendering Pipeline**

```
HTML Parser          CSS Parser
     │                    │
     ▼                    ▼
  DOM Tree            CSSOM Tree
     │                    │
     └────────┬───────────┘
              ▼
         Render Tree
              │
              ▼
    ┌─────────────────┐
    │ Layout (Reflow) │◄── offsetHeight read forces sync layout
    └────────┬────────┘
             ▼
    ┌─────────────────┐
    │  Paint (Repaint)│
    └────────┬────────┘
             ▼
    ┌─────────────────┐
    │   Composite     │◄── GPU layers merged
    └─────────────────┘
```

**B. Stacking Context Hierarchy**

```
Root Stacking Context (html)
├── z-index: 1 (position: relative)
│   └── z-index: 9999  ← vẫn bị che bởi...
├── z-index: 2 (position: relative)  ← ...cái này
└── z-index: auto
    └── opacity: 0.9  ← tạo stacking context mới!
        └── z-index: 100
```

#### 6. Guided Example

**Bài toán:** Fix layout thrashing trong đoạn code sau.

```js
// BEFORE: Layout thrashing
function updateLayout() {
  const container = document.getElementById('container');
  const children = container.children;
  
  for (let i = 0; i < children.length; i++) {
    const width = children[i].offsetWidth;  // READ → forces layout
    children[i].style.width = width * 0.5 + 'px';  // WRITE → invalidates
  }
}
```

**Think Aloud:**
1. Vòng lặp đọc `offsetWidth` (layout property) rồi ngay lập tức write style
2. Browser phải tính layout sau mỗi lần read vì style vừa bị thay đổi
3. Fix: Batch read trước, batch write sau

```js
// AFTER: Batch read/write
function updateLayout() {
  const container = document.getElementById('container');
  const children = Array.from(container.children);
  
  // Phase 1: READ all
  const widths = children.map(child => child.offsetWidth);
  
  // Phase 2: WRITE all
  children.forEach((child, i) => {
    child.style.width = widths[i] * 0.5 + 'px';
  });
}
```

#### 7. Guided Questions

- Tại sao đọc `offsetHeight` sau khi write style gây forced synchronous layout?
- `position: fixed` bị cắt bởi `transform` của ancestor — giải thích bằng containing block.
- Khi nào `display: flow-root` tốt hơn `overflow: hidden` để tạo BFC?

#### 8. Guided Practice

**Bài tập:** Cho một trang web chậm, dùng Chrome DevTools Performance tab để:
1. Tìm forced reflow
2. Xác định selector CSS gây reflow
3. Fix bằng cách batch read/write hoặc dùng `transform`

#### 9. Independent Practice

**Bài tập:** Tạo một animation phức tạp (card flip, modal slide-in) chỉ dùng `transform` và `opacity`. Đo bằng DevTools để chứng minh không có Layout hoặc Paint cost.

#### 10. Edge Cases

**A. `offsetHeight` trong loop gây layout thrashing**

```js
// N^2 layout cost
for (let i = 0; i < 1000; i++) {
  el.style.height = '100px';
  console.log(el.offsetHeight);  // Forces layout 1000 lần
}
```

**B. `position: fixed` bị cắt bởi ancestor `transform`**

```css
.ancestor { transform: translateX(0); }
.fixed-child { position: fixed; top: 0; }
```

`.fixed-child` sẽ bị "cắt" theo boundary của `.ancestor` thay vì viewport. Đây là spec behavior, không phải bug.

**C. Animation lag vì đổi `top/left` thay vì `transform`**

```css
/* BAD: Triggers layout + paint every frame */
.box { animation: move 1s; }
@keyframes move { from { top: 0; } to { top: 100px; } }

/* GOOD: Only composite */
.box { animation: move 1s; }
@keyframes move { from { transform: translateY(0); } to { transform: translateY(100px); } }
```

#### 11. Reflection

**Teach Back:** Giải thích GPU Layer và Stacking Context cho junior. Dùng ví dụ cụ thể: "Tôi có một modal với `z-index: 1000` nhưng vẫn bị che bởi navbar. Tại sao?"

#### 12. Exit Exam

**Bài thi:**
1. Vẽ được Rendering Pipeline từ HTML đến Pixel.
2. Giải thích được tại sao `transform: translate3d` mượt hơn `top: 10px`.
3. Giải thích được tại sao `z-index: 9999` vẫn bị che — vẽ stacking context tree.
4. Tạo được BFC để clear float đúng cách.

---

### Module 0.3 — Browser APIs

#### 1. Context

**Vấn đề thực tế:**
App của bạn cần lưu 50MB dữ liệu offline. `localStorage` chỉ cho 5MB. User dùng Safari private mode — `localStorage` vẫn "work" nhưng bị xóa khi đóng tab. Bạn cần sync dữ liệu giữa 2 tab. Bạn cần biết khi nào user rời khỏi trang để save draft.

**Hậu quả nếu không hiểu:**
- Lưu token nhạy cảm vào `localStorage`
- Không handle `QuotaExceededError`
- Không biết khi nào dùng `IndexedDB` vs `Cache API`

#### 2. Prerequisites
- JavaScript async/await
- Module 0.1 (Event Loop — để hiểu observer callbacks)

#### 3. Knowledge Building

**A. Storage APIs**

| API | Dung lượng | Scope | Sync | Use case |
|-----|-----------|-------|------|----------|
| `localStorage` | ~5–10MB | Origin | Sync | Token không nhạy cảm, flags |
| `sessionStorage` | ~5–10MB | Tab | Sync | Form draft tạm thờii |
| `IndexedDB` | ~50MB+ (quota-based) | Origin | Async | Large dataset, structured data |
| `Cookie` | 4KB | Domain (configurable) | Sync | Session ID, tracking |
| `Cache API` | Quota-based | Origin | Async | Service Worker caching |

**B. Storage Quota & Persistence**

- `navigator.storage.estimate()` → `{ usage, quota }`
- `navigator.storage.persist()` → Yêu cầu persistent storage (không bị xóa khi hết space). User phải grant (hoặc browser tự grant nếu PWA installed).
- `navigator.storage.persisted()` → Kiểm tra đã persistent chưa
- Eviction policy: LRU (Least Recently Used) cho non-persistent. Persistent không bị evicted.

**C. Observers**

- `IntersectionObserver`: Theo dõi element vào/ra viewport. Dùng cho lazy load, infinite scroll.
- `ResizeObserver`: Theo dõi thay đổi kích thước element. Thay thế `window.resize` + `getBoundingClientRect`.
- `MutationObserver`: Theo dõi thay đổi DOM tree. Dùng cho integration với legacy code.

**D. Workers & Communication**

- `Web Workers`: Chạy JS trên thread riêng. Không access DOM. `postMessage`/`onmessage`.
- `Service Worker`: Proxy giữa browser và network. Có thể intercept request, cache, background sync.
- `BroadcastChannel`: Giao tiếp giữa các tab/window cùng origin.
- `Page Visibility API`: `document.visibilityState` (`visible`/`hidden`). Dùng để pause/resume resource-intensive tasks.

#### 4. Mental Model

**Model: Browser là một hệ điều hành thu nhỏ**

- **localStorage/sessionStorage** = File text nhỏ trên disk — đọc/ghi nhanh nhưng giới hạn kích thước
- **IndexedDB** = Database NoSQL mini — lưu object phức tạp, query bằng index
- **Cookie** = Thẻ tên ghi chú dán trên cửa — tự động gửi kèm mọi request
- **Service Worker** = Proxy server chạy local — có thể chặn request, trả về cache, sync background
- **BroadcastChannel** = Hệ thống loa phát thanh nội bộ — phát tin cho mọi tab cùng công ty (origin)

#### 5. Visualization

**Storage Architecture:**

```
┌─────────────────────────────────────────┐
│           BROWSER STORAGE               │
├─────────────┬─────────────┬─────────────┤
│ localStorage│ sessionStorage│ IndexedDB │
│  (Sync,     │  (Sync,     │  (Async,   │
│   5–10MB)   │   tab-scope)│   50MB+)   │
├─────────────┴─────────────┴─────────────┤
│           Storage Quota                 │
│  ┌─────────────────────────────────┐    │
│  │  Persistent (PWA granted)       │    │
│  │  → Không bị xóa                 │    │
│  ├─────────────────────────────────┤    │
│  │  Best Effort (default)          │    │
│  │  → LRU eviction                 │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

#### 6. Guided Example

**Bài toán:** Lưu draft form vào `IndexedDB` với auto-save.

```js
import { openDB } from 'idb';

const db = await openDB('form-drafts', 1, {
  upgrade(db) {
    db.createObjectStore('drafts', { keyPath: 'formId' });
  },
});

// Auto-save draft
async function saveDraft(formId, data) {
  await db.put('drafts', { formId, data, savedAt: Date.now() });
}

// Load draft

async function loadDraft(formId) {
  return await db.get('drafts', formId);
}

// Clear draft after submit
async function clearDraft(formId) {
  await db.delete('drafts', formId);
}

// Usage
const draft = await loadDraft('contact-form');
if (draft && Date.now() - draft.savedAt < 86400000) {
  restoreForm(draft.data);
}
```

**Think Aloud:**
1. `openDB` tạo database version 1 với object store `drafts`, dùng `formId` làm key
2. `db.put` ghi đè nếu key đã tồn tại — idempotent, an toàn cho auto-save
3. Kiểm tra `savedAt < 24h` để tránh restore draft quá cũ

#### 7. Guided Questions

- `localStorage` sync có nghĩa là gì? Nếu ghi 10MB vào `localStorage` trong event handler, điều gì xảy ra với main thread?
- `BroadcastChannel` có work cross-origin không? Tại sao?
- `persist()` bị từ chối trên Safari private mode — graceful fallback là gì?

#### 8. Guided Practice

**Bài tập:** Viết một hệ thống lưu draft form với yêu cầu:
- Dùng `IndexedDB` cho dữ liệu lớn
- Dùng `BroadcastChannel` để sync draft giữa 2 tab cùng origin
- Handle `QuotaExceededError` bằng cách xóa draft cũ nhất

**Checklist:**
- [ ] Draft sync real-time giữa 2 tab
- [ ] Báo lỗi rõ ràng khi hết quota
- [ ] Không dùng `localStorage` cho dữ liệu > 1MB

#### 9. Independent Practice

**Bài tập:** Implement lazy load ảnh bằng `IntersectionObserver`. Không dùng thư viện. Thêm `rootMargin` để preload ảnh trước 200px khi scroll.

#### 10. Edge Cases

**A. `ResizeObserver` trigger liên tục**

```js
// BAD: Không debounce → callback fire mỗi frame
new ResizeObserver(entries => {
  setState({ width: entries[0].contentRect.width });  // React re-render liên tục
});

// GOOD: Debounce bằng requestAnimationFrame
const ro = new ResizeObserver(entries => {
  requestAnimationFrame(() => {
    setState({ width: entries[0].contentRect.width });
  });
});
```

**B. `persist()` bị từ chối trên Safari private mode**

```js
async function saveCriticalData(data) {
  try {
    await db.put('store', data);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      // Fallback: save to memory + warn user
      inMemoryCache.set('draft', data);
      showWarning('Storage full. Data will be lost if you close this tab.');
    }
  }
}
```

**C. `storage` event không fire trong cùng tab**

`window.addEventListener('storage', ...)` chỉ fire ở tab **khác**. Tab hiện tại không nhận event khi tự ghi `localStorage`. Phải dùng `BroadcastChannel` hoặc tự dispatch custom event.

#### 11. Reflection

**Teach Back:** Giải thích sự khác biệt giữa `localStorage`, `sessionStorage`, `IndexedDB`, và `Cookie`. Cho ví dụ cụ thể: "App cần lưu JWT token, user preference, và 20MB cache ảnh. Phân bổ thế nào?"

**Self-Check:**
- [ ] Tôi giải thích được storage quota và eviction policy
- [ ] Tôi xử lý được `QuotaExceededError`
- [ ] Tôi biết khi nào dùng `IndexedDB` thay vì `localStorage`

#### 12. Exit Exam

**Bài thi:**
1. So sánh 4 storage mechanism — biết khi nào dùng cái nào.
2. Xử lý lỗi `QuotaExceededError` trong IndexedDB với graceful fallback.
3. Viết code sync state giữa 2 tab bằng `BroadcastChannel`.

**Pass criteria:**
- Không lưu token nhạy cảm vào `localStorage`
- Handle quota error không crash app
- Giải thích được `persist()` và `persisted()`

---

### Module 0.3x — Web Components & Shadow DOM

#### 1. Context

**Vấn đề thực tế:** Bạn cần embed một widget thanh toán từ bên thứ ba vào trang. Widget có CSS riêng — nếu leak ra ngoài, nó phá vỡ layout host. CSS từ host cũng không được leak vào widget. Bạn cần một form trong widget participate vào form bên ngoài.

**Hậu quả nếu không hiểu:** CSS leak giữa host và component; event target bị retarget gây khó debug; form trong Shadow DOM không submit cùng form ngoài.

#### 2. Prerequisites
- Module 0.2 (DOM, CSSOM, Stacking Context)
- JavaScript Class và `this`
- Module 0.4 (Prototype, Class) — nếu chưa học, đọc lướt phần Class syntax trước

#### 3. Knowledge Building

**A. Custom Elements**
- `customElements.define(name, Class, { extends })`
- Lifecycle: `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback(name, oldVal, newVal)`
- `observedAttributes` static getter — chỉ định attribute nào trigger `attributeChangedCallback`

**B. Shadow DOM**
- `attachShadow({ mode: 'open' | 'closed' })`
- `open`: host có thể access `shadowRoot` qua `element.shadowRoot`
- `closed`: `element.shadowRoot` trả về `null` — nhưng vẫn có thể bypass bằng cách ghi đè prototype
- Encapsulation: style bên trong không leak ra, style bên ngoài không leak vào (trừ CSS custom properties)

**C. Slot**
- Default slot: `<slot></slot>` — projection của children không có `slot` attribute
- Named slot: `<slot name="header"></slot>` — projection của children có `slot="header"`
- `slotchange` event — fire khi distributed nodes thay đổi

**D. Styling**
- `::part(name)` — expose phần tử trong Shadow DOM để host style từ bên ngoài
- `::slotted(selector)` — style các node được projection vào slot
- `adoptedStyleSheets` — share `CSSStyleSheet` giữa nhiều Shadow Root để tiết kiệm memory

**E. Form Participation**
- `ElementInternals` + `attachInternals()` — cho phép custom element participate vào form (validation, submit, reset)
- `this.internals.setFormValue(value)` — set giá trị form

#### 4. Mental Model

**Model: Shadow DOM là một phòng thí nghiệm cách ly**

- **Custom Element** = Một thiết bị mới với tên riêng (`<my-widget>`)
- **Shadow Root** = Phòng thí nghiệm kín — bên trong có layout, style, behavior riêng
- **Slot** = Cửa sổ trong tường phòng thí nghiệm — bên ngoài nhìn thấy, nhưng chỉ là projection
- **Event Retargeting** = Khi quan sát từ bên ngoài, mọi event phát ra từ phòng thí nghiệm đều bị đổi nguồn thành chính thiết bị đó (host element)

**Giới hạn:** `closed` mode không phải security boundary — chỉ là convenience. Dev vẫn có thể bypass.

#### 5. Visualization

**Shadow DOM Architecture:**

```
┌─────────────────────────────────────┐
│           HOST PAGE                 │
│  ┌─────────────────────────────┐    │
│  │    <my-widget>              │    │
│  │  ┌─────────────────────┐    │    │
│  │  │   SHADOW ROOT       │    │    │
│  │  │  ┌───────────────┐  │    │    │
│  │  │  │ <slot name="h">│  │    │    │
│  │  │  │   ← projected │  │    │    │
│  │  │  └───────────────┘  │    │    │
│  │  │  <style>/*scoped*/  │    │    │
│  │  │  <div part="body">  │    │    │
│  │  └─────────────────────┘    │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

#### 6. Guided Example

**Bài toán:** Xây dựng một custom element `<credit-card-input>` với Shadow DOM, có validation, participate vào form ngoài.

```js
class CreditCardInput extends HTMLElement {
  static formAssociated = true;
  
  constructor() {
    super();
    this.internals = this.attachInternals();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        input { border: 2px solid #ccc; }
        input:invalid { border-color: red; }
      </style>
      <input type="text" part="input" placeholder="1234 5678 9012 3456">
    `;
    this.input = this.shadowRoot.querySelector('input');
    this.input.addEventListener('input', () => this.validate());
  }
  
  validate() {
    const value = this.input.value.replace(/\s/g, '');
    const isValid = /^\d{16}$/.test(value);
    this.internals.setFormValue(value);
    this.internals.setValidity(
      isValid ? {} : { patternMismatch: true },
      isValid ? '' : 'Invalid card number',
      this.input
    );
  }
}

customElements.define('credit-card-input', CreditCardInput);
```

**Think Aloud:**
1. `static formAssociated = true` báo browser element này participate form
2. `attachInternals()` lấy `ElementInternals` để set form value và validity
3. Style trong Shadow DOM scoped — không ảnh hưởng input bên ngoài
4. `part="input"` cho phép host style từ bên ngoài qua `credit-card-input::part(input)`

#### 7. Guided Questions

- `event.target` khi click vào button trong Shadow DOM sẽ là gì nếu listen từ document? Tại sao?
- `closed` mode có thực sự bảo mật không? Làm sao bypass?
- Khi nào dùng `::slotted()` thay vì style trực tiếp trong Shadow DOM?

#### 8. Guided Practice

**Bài tập:** Xây dựng `<modal-dialog>` với:
- Shadow DOM, focus trap bên trong
- Slot cho header, body, footer
- `::part()` cho host customize style
- Đóng bằng Escape key, click overlay

**Checklist:**
- [ ] Focus trap hoạt động (Tab không thoát ra ngoài)
- [ ] Style bên ngoài không leak vào
- [ ] Slot projection đúng

#### 9. Independent Practice

**Bài tập:** Xây dựng `<star-rating>` custom element:
- Shadow DOM, không dùng thư viện
- `value` attribute reflect property
- Participate vào form qua `ElementInternals`
- `::part(star)` để host customize màu star

#### 10. Edge Cases

**A. Form trong Shadow DOM không participate form ngoài**

Nếu không dùng `ElementInternals`, input trong Shadow DOM không xuất hiện trong `FormData`. User submit form mà thiếu dữ liệu.

**B. Event retargeting**

```js
// Shadow DOM bên trong <my-button> có <button>
document.addEventListener('click', e => {
  console.log(e.target); // Luôn in <my-button>, không phải <button>
});
```

Fix: Dùng `e.composedPath()` để lấy full path qua Shadow boundary.

**C. CSS custom properties là cách duy nhất "xuyên" Shadow DOM**

```css
/* Host có thể truyền variable vào */
my-widget {
  --primary-color: blue;
}

/* Shadow DOM bên trong dùng */
:host {
  color: var(--primary-color, black);
}
```

#### 11. Reflection

**Teach Back:** Giải thích sự khác biệt `open` vs `closed` mode. Khi nào nên dùng Web Components thay vì React component?

#### 12. Exit Exam

**Bài thi:**
1. Viết custom element với Shadow DOM, slot, và `::part()`.
2. Giải thích event retargeting và `composedPath()`.
3. Xử lý form participation bằng `ElementInternals`.

---

### Module 0.4 — JavaScript Core

#### 1. Context

**Vấn đề thực tế:** Bạn debug một đoạn code legacy: `setTimeout(obj.method, 0)` mất `this`. Một object tạo từ class không có property như mong đợi. Một Proxy bắt validation nhưng lại chặn cả property hợp lệ.

**Hậu quả nếu không hiểu:** Không debug được `this` binding; không hiểu tại sao `instanceof` fail; không dùng đúng `Proxy`.

#### 2. Prerequisites
- Biết JavaScript cơ bản: variables, functions, objects
- Module 0.1 (Execution Context, Call Stack)

#### 3. Knowledge Building

**A. Execution Context & Hoisting**
- Global Execution Context (GEC), Function Execution Context (FEC)
- Creation phase: hoisting `var`, function declaration; `let`/`const` trong TDZ (Temporal Dead Zone)
- Scope chain: `[[Environment]]` internal slot trỏ đến outer lexical environment

**B. `this` Binding (4 quy tắc)**
1. **Default binding:** `foo()` → `this` = global (strict mode: `undefined`)
2. **Implicit binding:** `obj.foo()` → `this` = `obj`
3. **Explicit binding:** `foo.call(obj)`, `foo.apply(obj)`, `foo.bind(obj)`
4. **`new` binding:** `new Foo()` → `this` = instance mới
5. **Arrow function:** Không có `this` riêng — lexical `this` từ enclosing scope

**C. Prototype Chain**
- Mọi object có `[[Prototype]]` (truy cập qua `__proto__` hoặc `Object.getPrototypeOf`)
- Property lookup: object → prototype → prototype của prototype → ... → `null`
- `class` là syntactic sugar trên constructor function + prototype

**D. `Proxy` & `Reflect`**
- `Proxy(target, handler)`: intercept operations (get, set, has, deleteProperty, apply, construct)
- `Reflect`: API để thực hiện operation mặc định, dùng trong Proxy handler để không bỏ qua behavior mặc định

#### 4. Mental Model

**Model: Execution Context là một tập hồ sơ**

Mỗi lần gọi function, engine tạo một "hồ sơ" mới:
- **This record:** Ai là chủ thể của lần gọi này?
- **Variable record:** Có những biến nào trong phạm vi này?
- **Outer record:** Phạm vi bên ngoài là gì? (để resolve closure)

**Model: Prototype Chain là chuỗi ủy quyền**

Khi tìm property, object nói: "Tôi không có, hỏi ông chủ tôi" → prototype nói "Tôi không có, hỏi ông chủ tôi" → ... → `null`.

#### 5. Visualization

**Prototype Chain:**

```
const obj = { a: 1 };
obj.__proto__ === Object.prototype

obj → Object.prototype → null
       ├── toString()
       ├── valueOf()
       └── hasOwnProperty()

const arr = [1, 2];
arr → Array.prototype → Object.prototype → null
       ├── push()
       ├── map()
       └── ...
```

**This Binding Decision Tree:**

```
foo() ──► Default (global/undefined)
obj.foo() ──► Implicit (obj)
foo.call(ctx) ──► Explicit (ctx)
new Foo() ──► New (instance)
() => {} ──► Lexical (enclosing)
```

#### 6. Guided Example

**Bài toán:** Fix `this` mất trong `setTimeout`.

```js
const obj = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

// BAD: this = global (strict: undefined)
setTimeout(obj.greet, 0);  // "Hello, undefined"

// FIX 1: Wrapper function
setTimeout(() => obj.greet(), 0);

// FIX 2: bind
setTimeout(obj.greet.bind(obj), 0);

// FIX 3: Arrow function trong object (nếu khai báo bằng class field)
class Person {
  name = 'Alice';
  greet = () => {
    console.log(`Hello, ${this.name}`);
  };
}
```

**Think Aloud:**
1. `obj.greet` truyền như một value — mất context gọi
2. `setTimeout` gọi function với default binding
3. Arrow function giữ lexical `this` từ lúc tạo

#### 7. Guided Questions

- Tại sao arrow function không dùng được làm method trong prototype?
- `Reflect.get(target, prop, receiver)` — tại sao cần `receiver` thay vì chỉ `target[prop]`?
- `Proxy` intercept `in` operator bằng handler nào?

#### 8. Guided Practice

**Bài tập:** Viết một `ValidatorProxy` dùng Proxy để:
- Bắt set property với sai type (number cho age, string cho name)
- Log mọi get access
- Cho phép delete nhưng không cho phép thêm property mới

#### 9. Independent Practice

**Bài tập:** Implement `new` bằng tay (mimic `new` operator) sử dụng `Object.create` và `Function.prototype.apply`.

#### 10. Edge Cases

**A. `this` mất trong callback**

```js
class Counter {
  count = 0;
  increment() {
    this.count++;
  }
}

const c = new Counter();
document.getElementById('btn').addEventListener('click', c.increment);
// this = button element, không phải Counter instance
```

Fix: Dùng class field arrow function hoặc `bind` trong constructor.

**B. Proxy không trap property trên prototype**

Proxy chỉ intercept operations trên chính target, không phải prototype chain của target.

**C. `with` statement phá scope chain**

```js
with (obj) {
  console.log(x);  // Không biết x là biến local hay obj.x
}
```
V8 không thể optimize scope lookup → chậm. Không dùng.

#### 11. Reflection

**Teach Back:** Giải thích Prototype chain cho junior. Dùng ví dụ cụ thể: "Tại sao `{}.toString()` work mà `{}` không có method `toString`?"

#### 12. Exit Exam

**Bài thi:**
1. Vẽ được Prototype chain cho một object bất kỳ.
2. Giải thích 4 quy tắc `this` + arrow function.
3. Viết Proxy cho validation object shape.

---

### Module 0.5 — TypeScript Advanced

#### 1. Context

**Vấn đề thực tế:** API trả về `any` — bạn dùng `as` để cast, 3 tháng sau API đổi shape, TypeScript không báo lỗi, production crash. Bạn cần type-safe cho nested object, cần infer type từ schema runtime.

**Hậu quả nếu không hiểu:** Dùng `any` khắp nơi; không viết được generic reusable; runtime validation và compile-time type không khớp.

#### 2. Prerequisites
- JavaScript Core (Module 0.4)
- Biết TypeScript cơ bản: types, interfaces, generics đơn giản

#### 3. Knowledge Building

**A. Type System**
- `unknown` vs `any`: `unknown` bắt buộc type narrowing trước khi dùng; `any` tắt type checking
- `satisfies` vs `as`: `satisfies` kiểm tra type mà không widen; `as` ép kiểu (dangerous)
- Type Guard: `typeof`, `instanceof`, custom guard (`x is Type`)
- `never`: bottom type — function throw hoặc exhaustive switch

**B. Advanced Generics**
- Constraints: `<T extends { id: string }>`
- Mapped Types: `{ [K in keyof T]: T[K] }`
- Conditional Types: `T extends U ? X : Y`
- `infer`: Extract type từ generic parameter
- Template Literal Types: `` `on${Capitalize<EventName>}` ``

**C. Utility Types tự viết**
- `DeepPartial<T>`: Làm optional recursive
- `Paths<T>`: Extract tất cả paths dạng string literal từ nested object
- `PickByValueType<T, V>`: Pick keys có value type = V

**D. Zod**
- Runtime validation + compile-time type inference
- `z.infer<typeof schema>`: Derive TypeScript type từ Zod schema
- Share schema FE-BE để đảm bảo contract

#### 4. Mental Model

**Model: Type System là một bộ lọc**

- **Compile time:** TypeScript lọc code trước khi chạy — bắt lỗi shape mismatch, missing property
- **Runtime:** JavaScript chạy — không có type check. Nếu API trả về sai shape, app crash.
- **Zod:** Thêm một lớp lọc ở runtime — validate dữ liệu ngoại lai trước khi vào app.

**Model: Generics là function parameter cho type system**

Như function nhận value và trả về value, generic nhận type và trả về type. Constraint là "precondition" cho type parameter.

#### 5. Visualization

**Type Inference Flow:**

```
Runtime Data (unknown)
        │
        ▼
   Zod Schema Validation
        │
        ├──► Fail → Throw / Return error
        │
        └──► Pass → z.infer<typeof schema>
                    │
                    ▼
            TypeScript Type (known)
```

#### 6. Guided Example

**Bài toán:** Viết `DeepPartial<T>` và dùng Zod cho API response.

```ts
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Zod schema
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string(),
  profile: z.object({
    name: z.string(),
    age: z.number().optional(),
  }),
});

type User = z.infer<typeof UserSchema>;

// Runtime validation
const result = UserSchema.safeParse(apiResponse);
if (!result.success) {
  console.error(result.error.flatten());
}
```

**Think Aloud:**
1. `DeepPartial` dùng mapped type + recursion
2. `z.infer` derive TypeScript type từ runtime schema — single source of truth
3. `safeParse` không throw — return discriminated union `{ success: true, data: T } | { success: false, error: ZodError }`

#### 7. Guided Questions

- `as` gây bug production — cho 3 ví dụ cụ thể.
- Tại sao `unknown` an toàn hơn `any` nhưng vẫn flexible?
- `infer` hoạt động như thế nào trong `ReturnType<T>`?

#### 8. Guided Practice

**Bài tập:** Viết các utility type:
- `Paths<T>`: từ `{ a: { b: { c: number } } }` → `'a' | 'a.b' | 'a.b.c'`
- `PickByValueType<T, string>`: chỉ lấy keys có value là `string`

#### 9. Independent Practice

**Bài tập:** Xây dựng Zod schema cho một form phức tạp (nested object, array, union type). Infer type và dùng trong React component.

#### 10. Edge Cases

**A. `as` gây bug silent**

```ts
const data = apiResponse as { id: string };
// API trả về { id: number } — TypeScript không báo, runtime crash khi dùng .toUpperCase()
```

**B. Recursive type quá sâu**

TypeScript có giới hạn recursion depth (~50 levels). Dùng interface + recursive reference thay vì inline mapped type nếu cần độ sâu lớn.

**C. `satisfies` giữ literal type**

```ts
const config = {
  host: 'localhost',
  port: 3000,
} satisfies { host: string; port: number };

config.host // string (vẫn là literal 'localhost' nếu dùng `as const` + satisfies)
```

#### 11. Reflection

**Teach Back:** Giải thích `infer` cho junior. Dùng ví dụ: "Làm sao lấy được type của phần tử trong array?"

#### 12. Exit Exam

**Bài thi:**
1. Viết `DeepPartial<T>` từ đầu.
2. Giải thích `infer` — viết `ReturnType<T>` tự implement.
3. Validate input bằng Zod và infer type — handle schema mismatch.

---

### Module 0.6 — HTTP & Networking

#### 1. Context

**Vấn đề thực tế:** Trang load chậm 5 giây. Ảnh hero chưa hiện nhưng 10 font `preload` đã chiếm hết băng thông. HTTP/2 multiplex nhưng một slow request vẫn block render vì nó là render-blocking CSS.

**Hậu quả nếu không hiểu:** Không optimize được TTFB; không hiểu tại sao HTTP/2 vẫn cần domain sharding; lạm dụng `preload`.

#### 2. Prerequisites
- Biết cách mở Network tab trong DevTools
- Hiểu cơ bản về client-server architecture

#### 3. Knowledge Building

**A. HTTP Versions**
- **HTTP/1.1:** Persistent connection (keep-alive), nhưng head-of-line blocking trong một connection. 6 connections per domain (browser limit).
- **HTTP/2:** Multiplex nhiều stream trong một TCP connection. Server Push (deprecated). Header compression (HPACK). Priority stream.
- **HTTP/3:** QUIC trên UDP. Không head-of-line blocking ở transport layer. 0-RTT handshake. Connection migration.

**B. TLS/SSL**
- TLS 1.2: 2-RTT handshake (TCP + TLS)
- TLS 1.3: 1-RTT (0-RTT nếu đã gặp trước)
- Certificate chain: leaf → intermediate → root. Browser verify bằng root certificate store.

**C. DNS & CDN**
- DNS resolution: recursive (resolver) vs iterative (root → TLD → authoritative)
- CDN: edge cache, origin pull, purge. DDoS protection.

**D. Caching**
- `Cache-Control`: `max-age`, `no-cache`, `no-store`, `immutable`
- `ETag` / `If-None-Match`: conditional request, 304 Not Modified
- `Vary`: cache key phụ thuộc vào request headers (ví dụ: `Accept-Encoding`)

**E. Resource Hints**
- `preload`: load resource cần thiết cho current navigation (high priority)
- `prefetch`: load resource cho navigation tiếp theo (low priority)
- `preconnect`: setup connection sớm (DNS + TCP + TLS)
- `dns-prefetch`: chỉ resolve DNS

#### 4. Mental Model

**Model: HTTP là hệ thống bưu điện**

- **HTTP/1.1:** Mỗi thư phải gửi trong một xe tải riêng. Nếu thư A chậm, thư B đợi (head-of-line blocking).
- **HTTP/2:** Một xe tải chở nhiều thư cùng lúc, có số thứ tự. Nhưng nếu đường bị kẹt (TCP packet loss), tất cả thư đều delay.
- **HTTP/3:** Nhiều xe máy (UDP) chạy riêng lẻ. Một xe kẹt không ảnh hưởng xe khác.

**Model: Caching là thư viện cá nhân**

- `max-age` = "Giữ sách này ở nhà trong 1 năm, đừng hỏi thư viện"
- `ETag` = "Hỏi thư viện: sách này có bản mới không? Nếu không, giữ bản cũ"
- `no-store` = "Không được photo hoặc giữ bản sao"

#### 5. Visualization

**HTTP Request Lifecycle:**

```
User Type URL
     │
     ▼
 DNS Lookup (recursive)
     │
     ▼
 TCP Handshake (SYN, SYN-ACK, ACK)
     │
     ▼
 TLS Handshake (ClientHello, ServerHello, ...)
     │
     ▼
 HTTP Request
     │
     ▼
 Server Processing
     │
     ▼
 HTTP Response (+ Cache Headers)
     │
     ▼
 Browser: Cache? → Yes → Return cached
              → No  → Store + Return
```

#### 6. Guided Example

**Bài toán:** Tối ưu load font cho landing page.

```html
<!-- BEFORE: Preload 10 font → cạnh tranh băng thông -->
<link rel="preload" href="/font-1.woff2" as="font">
<link rel="preload" href="/font-2.woff2" as="font">
<!-- ... 8 more -->

<!-- AFTER: Chỉ preload critical font, dùng font-display: swap -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="/font-bold.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: 'MyFont';
    src: url('/font-regular.woff2') format('woff2');
    font-display: swap;  /* Hiện fallback ngay, swap khi font load xong */
  }
</style>
```

**Think Aloud:**
1. `preload` có high priority — 10 file preload cạnh tranh với hero image
2. `preconnect` chỉ setup connection, không tốn băng thông
3. `font-display: swap` tránh FOIT (Flash of Invisible Text) — giảm LCP

#### 7. Guided Questions

- Tại sao HTTP/2 multiplex nhưng vẫn cần domain sharding cho third-party?
- Phân biệt `preload` vs `prefetch` vs `preconnect` — cho ví dụ cụ thể từng loại.
- `Vary: Accept-Encoding` có ý nghĩa gì với CDN cache?

#### 8. Guided Practice

**Bài tập:** Inspect network waterfall của một trang chậm. Xác định:
1. Blocking resource nào kéo dài TTFB/FCP?
2. Resource nào nên `preload`?
3. Resource nào nên `prefetch`?

#### 9. Independent Practice

**Bài tập:** Setup CDN + custom domain cho một static site. Cấu hình `Cache-Control` cho:
- HTML: `no-cache` (luôn revalidate)
- JS/CSS: `max-age=31536000, immutable` (vì có content hash)
- Ảnh: `max-age=86400`

#### 10. Edge Cases

**A. `preload` lạm dụng**

Preload 10 font làm cạnh tranh băng thông với hero image. Kết quả: LCP tăng thay vì giảm.

**B. HTTP/2 multiplex + render-blocking CSS**

Một slow request CSS vẫn block render dù HTTP/2 multiplex — vì browser cần CSS để tính render tree.

**C. `Vary` header sai**

```http
Vary: Cookie
```
CDN cache mỗi cookie value = cache miss liên tục. Không dùng `Vary: Cookie` nếu không cần thiết.

#### 11. Reflection

**Teach Back:** Giải thích HTTP/3 QUIC cho junior. Tại sao UDP lại giải quyết head-of-line blocking?

#### 12. Exit Exam

**Bài thi:**
1. Giải thích tại sao HTTP/2 multiplex nhưng vẫn cần domain sharding cho third-party.
2. Phân biệt `preload` vs `prefetch` vs `preconnect`.
3. Cấu hình cache strategy cho một SPA với hashed assets.

---

### Module 0.6x — API Design & Backend Contract

#### 1. Context

**Vấn đề thực tế:** Backend trả API sai shape — FE crash. User scroll nhanh gửi 10 request pagination cùng lúc, hiển thị sai thứ tự. Thanh toán bị double charge vì user click 2 lần.

**Hậu quả nếu không hiểu:** Không thiết kế pagination đúng; không handle race condition; không hiểu idempotency.

#### 2. Prerequisites
- HTTP & Networking (Module 0.6)
- JavaScript async/await
- TypeScript Advanced (Module 0.5) — để hiểu type contract

#### 3. Knowledge Building

**A. REST Maturity**
- Level 0: RPC over HTTP
- Level 1: Resources
- Level 2: HTTP verbs
- Level 3: HATEOAS (hiếm dùng trong practice)

**B. Pagination**
- **Offset:** `?page=2&limit=20`. Đơn giản nhưng không scale (deep paging O(n)).
- **Cursor:** `?cursor=eyJpZCI6MTAwfQ==`. Dùng `created_at` + `id`. Không skip, scale tốt, không miss/duplicate khi insert giữa chừng.

**C. Idempotency**
- Idempotent methods: GET, PUT, DELETE
- Non-idempotent: POST
- **Idempotency Key:** UUID + client seed. Server lưu key đã xử lý, reject duplicate trong window time.
- Retry strategy: exponential backoff + jitter

**D. Rate Limiting**
- `429 Too Many Requests`
- `Retry-After` header
- Exponential backoff: `delay = min(base * 2^attempt + jitter, maxDelay)`

**E. Frontend Perspective**
- Consume API đúng cách: validate response shape (Zod)
- Handle `409 Conflict`, `412 Precondition Failed`
- Request cancellation: `AbortController`

#### 4. Mental Model

**Model: Pagination là lật sách**

- **Offset:** "Bỏ qua 200 trang đầu" — nếu ai đó xóa 1 trang giữa chừng, sách bị xê dịch.
- **Cursor:** "Bắt đầu từ trang có gáy màu xanh" — không quan tâm sách bị xê dịch.

**Model: Idempotency là tem chống giả**

Mỗi request POST có một tem duy nhất. Server kiểm tra: "Tem này đã dùng chưa?" Nếu rồi → trả kết quả cũ. Nếu chưa → xử lý mới.

#### 5. Visualization

**Cursor Pagination:**

```
DB: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
         ↑
      cursor=5

Client request: ?cursor=5&limit=3
Server: [6, 7, 8], nextCursor=8
```

**Idempotency Flow:**

```
Client ──► POST /orders (Idempotency-Key: abc-123)
              │
Server ◄──────┘
   │
   ├──► Key đã tồn tại? ──► Yes ──► Trả response cũ (200)
   │                         │
   │                        No
   │                         ▼
   │                    Xử lý mới
   │                    Lưu key + response
   └──────────────────────────►
```

#### 6. Guided Example

**Bài toán:** Implement cursor pagination cho feed.

```ts
// API Design
GET /api/feed?cursor=eyJpZCI6MTAwLCJjcmVhdGVkQXQiOiIyMDI0LTAxLTAxIn0=&limit=20

// Response
{
  "data": [...],
  "nextCursor": "eyJpZCI6MTIwLCJjcmVhdGVkQXQiOiIyMDI0LTAxLTAyIn0=",
  "hasMore": true
}

// Frontend with TanStack Query
const { data, fetchNextPage } = useInfiniteQuery({
  queryKey: ['feed'],
  queryFn: ({ pageParam }) => fetchFeed({ cursor: pageParam }),
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});
```

**Think Aloud:**
1. Cursor encode `created_at` + `id` — stable sort, không miss khi insert
2. `getNextPageParam` tự động fetch trang tiếp theo
3. `useInfiniteQuery` handle cache và deduplication

#### 7. Guided Questions

- Tại sao offset pagination không scale với deep paging?
- User scroll nhanh gửi 10 request — làm sao đảm bảo hiển thị đúng thứ tự?
- `Idempotency-Key` nên generate ở client hay server?

#### 8. Guided Practice

**Bài tập:** Thiết kế API endpoint cho e-commerce:
- Cursor pagination cho product list
- Idempotency key cho checkout
- Rate limit với `Retry-After`

#### 9. Independent Practice

**Bài tập:** Implement exponential backoff với jitter cho API client. Xử lý `429` và `503`.

#### 10. Edge Cases

**A. Race condition pagination**

User scroll nhanh → request 2, 3, 4 gửi cùng lúc. Response trả về out of order.

Fix: Dùng request sequencing hoặc `AbortController` để cancel request cũ khi có request mới.

**B. Idempotency key trùng cross-user**

Nếu chỉ dùng UUID không có user context, user A có thể accidentally trùng với user B (cực hiếm nhưng có thể). Thêm user ID vào key scope.

**C. Backend đổi API version không báo trước**

FE không validate response shape → crash. Fix: Dùng Zod schema, graceful degrade khi schema mismatch.

#### 11. Reflection

**Teach Back:** Giải thích cursor pagination cho PM. Tại sao không dùng "trang 1, 2, 3"?

#### 12. Exit Exam

**Bài thi:**
1. Thiết kế API endpoint với cursor pagination và idempotency key.
2. Implement exponential backoff với jitter.
3. Giải thích tại sao offset pagination không scale.

---

### Module 0.7 — Debugging Methodology

#### 1. Context

**Vấn đề thực tế:** Bug chỉ reproduce trên production. Bạn thêm `console.log` khắp nơi, đoán nguyên nhân, fix bằng cách thử đại — introduce regression lớn hơn. 2 giờ sáng, production down, team panic.

**Hậu quả nếu không hiểu:** Debug bằng đoán; không isolate root cause; không viết postmortem.

#### 2. Prerequisites
- Tất cả module Stage 0 trước đó (để hiểu system behavior)
- Biết dùng Chrome DevTools cơ bản

#### 3. Knowledge Building

**A. RIMHVRP Framework**
1. **Reproduce:** Tìm minimal steps. Check environment, version, data.
2. **Isolate:** Binary search (`git bisect`), comment code, swap component, DevTools profiler.
3. **Measure:** Không đoán — dùng Performance tab, Memory tab, Network tab, LoAF API.
4. **Hypothesis:** Dựa trên data, không cảm tính.
5. **Verify:** Fix phải có test/regression. Reproduce lại bug sau fix để confirm.
6. **Fix:** Áp dụng fix tối thiểu.
7. **Postmortem:** Timeline, impact, root cause (5 Whys), fix, action items, prevention.

**B. DevTools Deep Dive**
- **Performance tab:** Flame chart, call tree, event log. Tìm long task, forced reflow.
- **Memory tab:** Heap snapshot, allocation timeline. Tìm detached DOM, closure leak.
- **Network tab:** Waterfall, initiator chain. Tìp blocking resource.
- **Sources tab:** Breakpoint, conditional breakpoint, logpoint, blackbox script.

**C. Production Debugging**
- Sentry: error tracking, breadcrumbs, session replay
- Log correlation ID: trace 1 request xuyên suốt FE → BFF → BE
- Feature flag để isolate (tắt feature nghi ngờ)

#### 4. Mental Model

**Model: Debug là chẩn đoán bệnh**

- **Reproduce** = Hỏi bệnh nhân: "Làm gì thì đau?"
- **Isolate** = Khám từng bộ phận, loại trừ dần
- **Measure** = Xét nghiệm máu, chụp X-quang — không đoán bệnh
- **Hypothesis** = "Dựa trên X-quang, tôi nghĩ là gãy xương"
- **Verify** = "Nếu bó bột, 1 tuần sau kiểm tra lại"
- **Postmortem** = "Bệnh nhân ngã vì sàn trơn → lắp đệm sàn"

#### 5. Visualization

**Debug Decision Tree:**

```
Bug Reported
     │
     ▼
Reproduce? ──► No ──► Check environment, data, race condition
     │
    Yes
     ▼
Isolate ──► git bisect, swap component, comment code
     │
     ▼
Measure ──► DevTools, logs, metrics
     │
     ▼
Hypothesis ──► Dựa trên data
     │
     ▼
Verify Fix ──► Test, regression, reproduce
     │
     ▼
Postmortem ──► 5 Whys, action items
```

#### 6. Guided Example

**Bài toán:** App chậm sau khi user ở trang 10 phút.

```js
// BEFORE: Debug bằng đoán
// "Chắc là memory leak" → thêm window.gc() ???

// AFTER: RIMHVRP
// Reproduce: Mở app, để 10 phút, scroll nhiều
// Isolate: Comment từng component
// Measure: Memory tab → Heap snapshot → Detached DOM tree
// Hypothesis: Event listener không remove khi component unmount
// Verify: Fix, chụp lại snapshot → detached DOM giảm
// Fix:
useEffect(() => {
  const handler = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler); // Cleanup
}, []);
```

#### 7. Guided Questions

- Khi nào dùng `git bisect` thay vì manual comment code?
- `console.log` vs breakpoint — ưu/nhược điểm trong tình huống nào?
- Làm sao debug bug không reproduce locally?

#### 8. Guided Practice

**Bài tập:** Một trang có INP cao. Dùng Chrome DevTools Performance tab:
1. Tìm long task
2. Xác định script gây chậm
3. Đề xuất fix

#### 9. Independent Practice

**Bài tập:** Debug một memory leak thực:
1. Chụp heap snapshot trước và sau
2. Tìm detached DOM hoặc closure leak
3. Fix và verify bằng snapshot thứ ba

#### 10. Edge Cases

**A. Bug chỉ reproduce trên production**

Dùng Sentry breadcrumbs + session replay. Tìm correlation ID để trace request. Dùng feature flag tắt feature nghi ngờ.

**B. Fix bằng đoán → regression**

```js
// Đoán: "Chắc là state update chậm"
setTimeout(() => setState(data), 100);  // HACK

// Thực tế: Vấn đề là forced reflow. setTimeout che giấu symptom,
// không fix root cause, introduce race condition.
```

**C. "Works on my machine"**

Khác: timezone, locale, browser version, network speed, data size. Dùng Docker hoặc cloud VM để match production environment.

#### 11. Reflection

**Teach Back:** Hướng dẫn junior debug bằng hypothesis-driven thay vì "thử đại". Kể một lần bạn đoán sai và học được gì.

#### 12. Exit Exam

**Bài thi:**
1. Debug một bug production thực trong 30 phút không cần Google (chỉ dùng devtools + source code).
2. Viết postmortem đúng format: timeline, impact, root cause (5 Whys), fix, action items, prevention.
3. Dùng `git bisect` tìm commit gây regression trong 20 commit.

**Pass criteria:**
- Không dùng `console.log` để debug performance/memory
- Postmortem có 5 Whys đến root cause thực sự
- Có action item prevention, không chỉ fix

---

## Stage 0 Checkpoint

Trước khi sang Stage 1, tự trả lời:

| Câu hỏi | Nếu "Không" → Quay lại |
|---------|------------------------|
| Tôi vẽ được Event Loop trên giấy? | Module 0.1 |
| Tôi giải thích được V8 pipeline? | Module 0.1 |
| Tôi vẽ được Rendering Pipeline? | Module 0.2 |
| Tôi giải thích được Stacking Context? | Module 0.2 |
| Tôi biết khi nào dùng rAF vs rIC vs `postTask`? | Module 0.1x |
| Tôi xử lý được storage quota và eviction? | Module 0.3 |
| Tôi viết được custom element với Shadow DOM? | Module 0.3x |
| Tôi vẽ được Prototype chain? | Module 0.4 |
| Tôi viết được `DeepPartial<T>`? | Module 0.5 |
| Tôi thiết kế được cursor pagination? | Module 0.6x |
| Tôi debug được bug production trong 30 phút không Google? | Module 0.7 |

**Quy tắc:** Không sang Stage 1 nếu chưa đạt Exit Criteria của tất cả module Stage 0.