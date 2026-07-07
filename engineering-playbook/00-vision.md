# Engineering Playbook — 00: Vision

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-07  
> **Scope:** Portfolio Roadmap — 3 Production-Grade Projects  
> **Audience:** Future self, code reviewers, hiring managers

## 1. WHY THIS PLAYBOOK EXISTS

Bạn biết React, Next.js, TypeScript — nhưng bạn **chưa từng delivery một project từ con số 0 đến production** với đầy đủ: setup, architecture, documentation, review, monitoring.

Playbook này là **Operating System** cho quá trình đó. Viết một lần, áp dụng cho cả 3 project. Không phải để đọc cho vui — mà để **tra cứu khi đang code và không biết nên làm gì tiếp theo**.

## 2. PORTFOLIO VISION

### 2.1 North Star

> **"Tôi không xây 3 project để khoe công nghệ. Tôi xây 3 project để chứng minh tôi có thể nhận một bài toán, thiết kế kiến trúc, triển khai, kiểm thử, đưa vào production, quan sát hệ thống khi chạy — và giải thích vì sao tôi chọn từng quyết định kỹ thuật, kể cả quyết định KHÔNG dùng một công nghệ nào đó."**

### 2.2 The 3 Projects

| #   | Project                      | Problem It Solves                                    | Core Proof                                               |
| --- | ---------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| P1  | Enterprise Admin Platform    | Xây đi xây lại admin cho mỗi freelance project       | Redux ecosystem, 10k+ table, RBAC, Module Federation ADR |
| P2  | Property Platform            | PropTech startup cần hệ thống vận hành trước website | Next.js 16 deep, Server Components, RLS, multi-tenant    |
| P3  | Investment Portfolio Tracker | Không có tool VN quản lý đa tài sản                  | D3.js custom charts, Web Workers, performance monitoring |

### 2.3 What "Done" Means

Một project chỉ được coi là **Done** khi:

- Deployed trên production domain (Vercel)
- Có Lighthouse score > 95
- Có ít nhất 1 ADR viết hoàn chỉnh
- Có `AI-WORKFLOW.md` với 1 quyết định kiến trúc khó + 1 lần AI sai
- Có error monitoring (Sentry) hoạt động
- Có CI/CD pipeline chạy được
- README hướng dẫn setup trong < 5 phút

## 3. ENGINEERING PRINCIPLES

> **Áp dụng cho mọi quyết định kỹ thuật trong cả 3 project.**

```
Simplicity over cleverness
Composition over inheritance
Prefer explicit over implicit
Measure before optimizing
Build reusable primitives before features
Document every important decision
Production-first mindset
```

### 3.1 Principle Breakdown

| Principle                         | What It Means                                   | Anti-Pattern                                        |
| --------------------------------- | ----------------------------------------------- | --------------------------------------------------- |
| **Simplicity over cleverness**    | Code dễ đọc > code ngắn gọn                     | One-liner khó hiểu, abstraction sâu không cần thiết |
| **Composition over inheritance**  | Tách nhỏ, kết hợp lại                           | Class hierarchy sâu, HOC lồng nhau                  |
| **Prefer explicit over implicit** | Magic là kẻ thù                                 | Global state ẩn, side effect không rõ ràng          |
| **Measure before optimizing**     | Không optimize khi chưa có số                   | Premature optimization, micro-optimization không đo |
| **Build primitives first**        | Component cơ bản trước feature                  | Xây feature rồi mới refactor ra component           |
| **Document decisions**            | ADR cho mọi quyết định quan trọng               | "Tôi nhớ tại sao tôi chọn cái này"                  |
| **Production-first**              | Monitoring, error handling, logging từ ngày đầu | "Sẽ thêm monitoring sau khi xong feature"           |

## 4. BLOAT FILTER

> **Áp dụng cho mọi quyết định thêm library, tool, hoặc pattern.**

Trước khi thêm bất kỳ công cụ nào, trả lời 3 câu hỏi:

### 4.1 Question 1: Problem Specificity

> **"Bài toán CỤ THỂ nào trong project này đòi hỏi công cụ này?"**

- ❌ Không được: "Để học" hoặc "Trending trên Twitter"
- ✅ Phải là: "Order pipeline có 5 bước async, cần orchestrate retry và cancellation → Redux Saga"

### 4.2 Question 2: Simplicity Defense

> **"Nếu bỏ công cụ này, interviewer có thể hỏi 'sao không dùng cái đơn giản hơn?' → Mình có câu trả lời thuyết phục không?"**

- Ví dụ: "Tại sao không dùng `fetch` thay vì RTK Query?" → "Vì invalidation cache và optimistic update tự viết sẽ lặp lại logic RTK Query đã optimize, và tôi đã đo thời gian viết tay vs dùng library."

### 4.3 Question 3: Reusability Across Projects

> **"Công cụ này có xuất hiện >1 lần trong 3 project không? Nếu không, có đáng đánh đổi thời gian học so với đào sâu cái đã có?"**

- Ví dụ: D3.js chỉ ở P3 → Đáng vì P3 cần proof of deep visualization skill
- Ví dụ: Kafka ở không project nào → Không đáng, dùng webhook + queue đơn giản

## 5. SKILL DEVELOPMENT STRATEGY

### 5.1 Current State → Target State

| Skill                   | Current      | Target (After 3 Projects)            | Project Focus |
| ----------------------- | ------------ | ------------------------------------ | ------------- |
| TypeScript strict       | 🟡 Sơ        | ✅ Branded types (P3)                | P1, P2, P3    |
| Redux ecosystem         | 🟡 Lý thuyết | ✅ Production-grade (P1)             | P1            |
| React Query             | 🟡 Cơ bản    | ✅ Deep patterns (P2, P3)            | P2, P3        |
| Next.js 16 deep         | 🟡 Sơ        | ✅ Server Components, Actions, cache | P2            |
| D3.js                   | ❌ Không     | ✅ 3 custom charts                   | P3            |
| Testing                 | 🟡 Đọc hiểu  | ✅ Viết unit + integration + E2E     | P1, P2, P3    |
| CI/CD                   | 🟡 Copy mẫu  | ✅ Tự viết pipeline                  | P1, P2, P3    |
| Performance engineering | 🟡 Sơ        | ✅ Budget, measure, optimize         | P1, P3        |
| Documentation           | 🟡 Sơ        | ✅ ADR, system design, runbooks      | P1, P2, P3    |

### 5.2 Learning Method

```
1. Đọc docs → 2. Build feature nhỏ → 3. Đo performance → 4. Viết ADR → 5. Review lại sau 1 tuần
```

**Không được:** Đọc docs xong nghĩ là biết. Phải code, phải đo, phải gặp lỗi thật.

## 6. PROJECT SEQUENCING

```
Engineering Playbook (hiện tại)
    ↓
P1 — Enterprise Admin Platform (React 18 CSR)
    ↓
⭐ APPLY CHECKPOINT #1 — Deploy P1, rải CV
    ↓
P2 — Property Platform (Next.js 16 App Router)
    ↓
P3 — Investment Portfolio Tracker (Next.js 16 + D3.js)
    ↓
Documentation Synthesis + Interview Prep
    ↓
🚀 APPLY CHÍNH THỨC TOÀN DIỆN
```

**Quy tắc vàng:** Apply ngay khi P1 deploy. Feedback thật từ thị trường quý hơn mọi giả định chưa kiểm chứng.

## 7. QUALITY GATES

### 7.1 Definition of Done (Mọi Task)

```
✅ Build pass
✅ ESLint pass
✅ TypeScript pass (strict, zero any)
✅ Responsive (mobile, tablet, desktop)
✅ Loading state
✅ Error state
✅ Empty state
✅ Test (unit hoặc integration)
✅ Documentation (ADR hoặc inline comment cho logic phức tạp)
✅ Self Review (đọc lại PR như review người khác)
```

### 7.2 Code Review Checklist (Mọi PR)

```
□ Architecture — có phù hợp với hiện tại không?
□ Naming — rõ ràng, consistent với convention?
□ Reusability — có thể tách thành primitive không?
□ Accessibility — ARIA, keyboard navigation?
□ Performance — có re-render không cần thiết? Có lazy load không?
□ Security — XSS, CSRF, input validation?
□ Testing — có test cho logic quan trọng không?
□ Typing — strict TypeScript, không any?
□ Error Handling — có fallback, có log không?
□ Documentation — ADR cần update không?
```

## 8. AI COLLABORATION PHILOSOPHY

> **"AI là Junior Dev. Tôi là Senior Dev review code của junior."**

### 8.1 AI Được Phép

- Implement theo spec đã thiết kế
- Refactor theo yêu cầu cụ thể
- Generate boilerplate
- Viết test
- Viết document

### 8.2 AI Không Được Phép

- Tự thêm library
- Tự đổi architecture / folder / naming
- Optimize khi chưa được yêu cầu
- Generate code ngoài task scope
- Tự quyết định pattern mới

### 8.3 Review Process

```
AI generate code
    ↓
Tôi đọc từng dòng (line-by-line review)
    ↓
Hỏi "tại sao" cho mọi quyết định không rõ ràng
    ↓
Chấp nhận / Từ chối / Yêu cầu sửa
    ↓
Chạy test trước khi merge
```

### 8.4 AI Collaboration Case Study

Mỗi project viết 1 file `AI-WORKFLOW.md`, không quá 1-2 trang:

```
1. Tool đã dùng (Claude Code / Claude / Copilot...)
2. Một quyết định kiến trúc khó — AI đề xuất gì, bạn chấp nhận/từ chối phần nào và vì sao
3. Một lần AI sai — bug/pattern AI đề xuất mà bạn phát hiện và sửa lại
4. Validation method: bạn review bằng cách nào
```

**Nguyên tắc viết:** Không viết như quảng cáo ("AI tăng tốc 10x"). Viết như kỹ sư mô tả code review thật — kể cả phần AI sai. Phần "AI sai, tôi phát hiện thế nào" có giá trị tín hiệu cao hơn phần "AI làm đúng".

## 9. DOCUMENTATION PHILOSOPHY

> **"Documentation viết từ trải nghiệm thật còn mạnh hơn 15 chương lý thuyết đẹp."**

### 9.1 Viết TRONG lúc build

- ADR — viết khi đang chọn tech stack
- Technical Decisions table — ghi lý do chọn/không chọn từng thư viện
- State Management Philosophy — viết 1 lần, áp dụng cả 3 project
- Database Design (ER Diagram) — vẽ trước khi code schema
- AI-WORKFLOW.md — viết song song với implementation

### 9.2 Viết SAU khi project chạy

- System Design diagrams — vẽ khi đã biết hệ thống thật chạy thế nào
- Error Handling Strategy — document flow thật, không lý thuyết
- Performance Engineering — đo thật bằng Lighthouse, Sentry, Web Vitals rồi mới viết
- Security checklist — dựa trên những gì đã implement
- Testing Strategy — describe testing pyramid của chính project
- CI/CD — document pipeline thật

### 9.3 Viết SAU khi xong cả 3 project

- Interview Guide: 20 câu hỏi React, 20 câu Next.js, 20 câu System Design, 20 câu Performance
- State Management Philosophy: so sánh thực tế Redux vs React Query vs Zustand
- AI Collaboration Philosophy: tổng hợp 3 AI-WORKFLOW.md

## 10. PERFORMANCE BUDGET (Tổng Quát)

| Metric     | P1 Target | P2 Target | P3 Target |
| ---------- | --------- | --------- | --------- |
| Lighthouse | >95       | >95       | >95       |
| FPS        | 60        | 60        | 60        |
| Memory     | <100MB    | <100MB    | <100MB    |
| Error rate | <0.5%     | <0.5%     | <0.5%     |
| TTI        | <3s       | <2.5s     | <2.5s     |
| LCP        | —         | <2.5s     | <2.5s     |
| CLS        | —         | <0.1      | <0.1      |
| TTFB       | —         | <500ms    | <500ms    |

## 11. RISK MANAGEMENT

| Risk             | Impact                        | Mitigation                             |
| ---------------- | ----------------------------- | -------------------------------------- |
| Scope creep      | Timeline kéo dài              | Bloat Filter, sprint planning chặt     |
| Over-engineering | Code phức tạp không cần thiết | ADR cho mọi quyết định phức tạp        |
| Burnout          | Dừng giữa chừng               | Sprint 5 là polish, không thêm feature |
| AI dependency    | Không hiểu code AI viết       | Line-by-line review, viết AI-WORKFLOW  |
| No feedback loop | Không biết đúng/sai           | Apply sau P1, lấy feedback thật        |

## 12. SUCCESS METRICS

### 12.1 Project-Level

- [ ] Deployed và chạy ổn định 30 ngày
- [ ] Lighthouse > 95
- [ ] Sentry error rate < 0.5%
- [ ] CI/CD pass 100% (không merge khi đỏ)
- [ ] Test coverage > 70% cho logic quan trọng

### 12.2 Career-Level

- [ ] P1 deployed → Apply 10 vị trí, nhận 3 phỏng vấn
- [ ] P2 deployed → Apply 20 vị trí, nhận 8 phỏng vấn
- [ ] P3 deployed → Apply 30 vị trí, nhận 15 phỏng vấn, 2 offer Senior

### 12.3 Learning-Level

- [ ] Viết được ADR không cần tra cứu template
- [ ] Review code AI trong < 10 phút cho task nhỏ
- [ ] Giải thích được trade-off của mọi quyết định kiến trúc trong project

## 13. WHAT NOT TO ADD (EVER)

> **"Simplicity over cleverness" áp dụng cả cho tầng tooling/infra.**

❌ Kubernetes — không cần cho scope này  
❌ Kafka — overkill  
❌ Elasticsearch — không cần search phức tạp  
❌ RabbitMQ — không cần message queue  
❌ gRPC — REST đủ  
❌ Redis Cluster — không cần cache phân tán  
❌ Full Microservices — Module Federation ADR đủ  
❌ Event Sourcing — không cần audit toàn bộ event  
❌ CQRS — không cần tách read/write  
❌ React Query + RTK Query song song — 2 lib cùng làm 1 việc  
❌ OpenTelemetry cho 1 app monolithic — không đủ distributed  
❌ Posthog cho 1 user — không có gì để phân tích  
❌ Stripe cho app chưa multi-tenant — resume padding  
❌ Module Federation implementation cho 1 người 1 remote — chi phí không tương xứng payoff

## 14. REVISION HISTORY

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2026-07-07 | Initial version |

---

> **"Playbook này không phải để đọc một lần rồi quên. Nó là compass — tra cứu khi đang code, review khi đang quyết định, và sửa đổi khi học được điều mới."**

---

Tóm tắt:

1. **Vision rõ ràng** — tại sao playbook tồn tại, north star là gì
2. **7 Engineering Principles** — áp dụng cho mọi quyết định
3. **Bloat Filter** — 3 câu hỏi để chặn over-engineering
4. **Skill mapping** — từ current → target state
5. **AI Collaboration Philosophy** — AI là junior, bạn là senior reviewer
6. **Documentation Philosophy** — 3 nhóm: viết trong lúc build, sau khi chạy, sau khi xong cả 3
7. **Performance Budget** — định lượng rõ ràng
8. **Risk Management** — 5 rủi ro chính và cách mitigate
9. **What Not To Add** — danh sách cấm kỵ để tránh resume padding
