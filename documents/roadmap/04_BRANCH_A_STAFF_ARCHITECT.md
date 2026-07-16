# NHÁNH A: STAFF/ARCHITECT

## Bối cảnh

Sau khi hoàn thành **3 khối lõi chung** (Frontend, Backend, DevOps), bạn đứng ở **điểm rẽ nhánh**. Nếu hoàn cảnh thực tế nghiêng về con đường **đi làm trong doanh nghiệp và phát triển sự nghiệp kỹ thuật lên cấp Staff/Principal/Architect**, bạn chọn Nhánh A.

**Nhánh A không dạy bạn "trở thành Staff Engineer trong 6 tháng".** Staff/Architect thật là sự kết hợp của:
1. **Nền tảng kỹ thuật** có thể thiết kế hệ thống chịu tải cao, hiểu sâu distributed systems, và đưa ra quyết định kiến trúc dưới ràng buộc mơ hồ.
2. **Kinh nghiệm phán đoán** tích lũy qua năm tháng: on-call lúc 2 giờ sáng với hệ thống có triệu user, viết RFC thuyết phục được 5 team khác nhau adopt, mentor senior engineers, và đánh đổi tech debt với business deadline dưới áp lực doanh thu.

Chặn này cung cấp phần **(1)** — nền tảng kỹ thuật và kỹ năng phỏng vấn để **được tuyển vào track Staff/Principal** và bắt đầu tích lũy phần **(2)** trong 2–4 năm tiếp theo. Nếu bạn nghĩ "học xong 6 tháng là Staff", bạn sẽ thất vọng nặng nề ở vòng behavioral đầu tiên.

---

* **Mục tiêu:** Đạt **năng lực thiết kế hệ thống chịu tải cao** và **vượt qua vòng phỏng vấn Senior/Staff/Principal** (lương 60–120+ triệu, hoặc equivalent USD ở công ty có backing nước ngoài) — KHÔNG phải "là Staff" ngay lập tức. Staff thật đòi hỏi track record chứng minh qua production: bạn đã từng lead migration không downtime, đã từng viết RFC được 3 team adopt, đã từng xử lý incident khi monitoring cháy đỏ. Không roadmap nào rút ngắn phần này.
* **Thời gian dự kiến:** 12–24 tháng (A1: 6–12 tháng + A2: song song). Học song song với đi làm ở vị trí Senior.
* **Thuộc:** **Nhánh A** — chỉ dành cho ngườii chọn đi làm công ty. Nếu chọn Nhánh B (Solo Founder), bỏ qua toàn bộ chặn này.
* **Milestone:** Thiết kế được 5 đề System Design nâng cao với capacity estimation, bảo vệ trade-off khi bị đẩy thêm; viết được 1 RFC/ADR có tính thuyết phục; pass được vòng Behavioral Staff (STAR + War Stories); có khả năng đàm phán lương và đánh giá offer ở cấp Staff.

> **Vì sao ghi chú này quan trọng:** Phỏng vấn Staff không còn là "reverse binary tree". Đó là 45 phút bạn đứng trước bảng trắng, nhận một đề mở như "Thiết kế News Feed cho 10M DAU", và phải chứng minh khả năng **nghĩ toàn cục, nói rõ ràng, chịu được pressure khi bị poke vào góc chết**, trong khi vẫn thể hiện sự khiêm tốn với những gì mình chưa biết. Kỹ năng đó không tự nhiên có được từ việc đọc sách — nó cần luyện đi luyện lại.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NHÁNH A: STAFF/ARCHITECT                                                   │
│  Mục tiêu: Thiết kế hệ thống chịu tải cao + Vượt phỏng vấn Staff/Principal  │
│  Thời gian: 12–24 tháng (A1: 6–12 tháng + A2: song song)                    │
│  ─────────────────────────────────────────────────────────────────────────  │
│  A1: HIGH TRAFFIC SYSTEM DESIGN                                             │
│  • Scalability: Horizontal vs Vertical, Load Balancing (L7/L4), Auto-scale  │
│  • Caching Strategies: Cache Aside, Read-Through, Write-Behind, Invalidation│
│  • Database Advanced: Sharding, Partitioning, Read Replicas, Connection     │
│    Pooling, CAP/PACELC theorem                                              │
│  • Async & Event-Driven: Kafka/RabbitMQ, Event Sourcing, CQRS               │
│  • Microservices: Khi nào tách, khi nào không, API Gateway (Kong/AWS)       │
│  • Service Mesh: Istio/Linkerd (m2m communication, observability)           │
│  • Distributed Transactions: Saga Pattern, 2PC, Outbox Pattern              │
│  • CDN & Edge: Cloudflare Workers, Edge computing, Global load balancing    │
│  • Chaos Engineering: Circuit breakers (Resilience4j), Fault injection      │
│  • Security Advanced: mTLS, WAF, DDOS mitigation, Zero Trust                │
│  • Compliance: GDPR/CCPA, Data retention, Right to be forgotten             │
│  • Infrastructure as Code: Terraform / Pulumi, K8s (Pods, Services,         │
│    Deployments), HashiCorp Vault / Secrets Manager                          │
│  • AI System Design: kiến trúc có AI là thành phần cốt lõi,                │
│    multi-model routing (chi phí/độ trễ/năng lực), real-time inference,      │
│    vector DB như một lớp dữ liệu ngang hàng relational/document             │
│  • Bài tập thực hành: URL Shortener, Twitter/X News Feed, Chat System,      │
│    E-commerce Checkout (Saga), Video Streaming                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  A2: CAREER & INTERVIEW                                                     │
│  • Data Structures & Algorithms (pattern thường gặp, không cần thi đấu)     │
│  • System Design Interview format: trình bày trong 45 phút — khác với       │
│    "học" system design ở A1, đây là kỹ năng giao tiếp/framing riêng         │
│  • Frontend System Design: RADIO framework, UI Component + Application      │
│  • Behavioral Interview: War Stories, STAR format, trade-off reasoning      │
│  • Đàm phán lương & đánh giá offer (base, equity, benefit, level)           │
│  • Technical Writing: RFC/ADR, tài liệu kiến trúc                           │
│  • Tech Lead: Tech Debt Management, Code Review Culture, mentoring          │
│  • Cross-team influence, xây ảnh hưởng kỹ thuật không cần chức danh         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN

### 1.1. Mục tiêu đạt được

Sau chặn này, bạn phải:

- [ ] **Thiết kế được 5 đề System Design nâng cao** từ đầu đến cuối: vẽ architecture, tính capacity (QPS, storage, bandwidth), chọn DB/cache, và bảo vệ trade-off khi bị hỏi ngược (follow-up)
- [ ] **Giải thích được CAP theorem, PACELC, và consistent hashing** cho ngườii chưa biết
- [ ] **Phân biệt rõ** khi nào dùng Cache Aside vs Write-Behind, khi nào Kafka vs RabbitMQ, khi nào sharding vs read replica
- [ ] **Hiểu microservices** không phải mục tiêu mà là **công cụ** — biết khi nào tách, khi nào modular monolith vẫn thắng
- [ ] **Viết được 1 RFC/ADR** thực tế cho một quyết định kiến trúc (ví dụ: migrate từ REST sang gRPC giữa 2 service, hoặc thêm CQRS cho read model)
- [ ] **Trình bày được System Design trong 45 phút** theo format phỏng vấn — nói to suy nghĩ (talk out loud), hỏi requirements trước, không nhảy vào giải pháp
- [ ] **Giải quyết DSA pattern thường gặp** (Two Pointers, Sliding Window, BFS/DFS, Topological Sort, Union-Find) trong 20–30 phút mỗi bài — không cần thi đấu, chỉ cần đủ nhanh cho phỏng vấn
- [ ] **Kể được 3–4 câu chuyện behavioral** theo khung STAR, thể hiện ownership, cross-team impact, và trade-off dưới ambiguity
- [ ] **Đàm phán được offer Staff-level**: hiểu base vs equity vs bonus, đánh giá level mapping, và biết khi nào nên nhận/nên từ chối
- [ ] **Mentor được 1 junior/senior** — dù chỉ là informal, chứng minh khả năng truyền đạt và nâng cao chất lượng team

> **Điều roadmap KHÔNG thể cho bạn:** uy tín trong công ty khi bạn đã từng cứu production lúc 3 giờ sáng, khả năng "ngửi" được mùi kiến trúc sắp gãy trước khi nó thành sự cố, và mối quan hệ tin tưởng với product manager để họ nghe bạn khi bạn nói "cái này cần 2 tuần refactor". Những thứ này chỉ có qua thờii gian và va chạm thực tế.

### 1.2. Thờii gian & Lộ trình đề xuất

```
Tháng 1–2:   Scalability + Database Advanced + Caching Deep Dive
             + DSA Patterns (song song, 30 phút/ngày)
             + Project A1: URL Shortener (thiết kế + prototype)

Tháng 3–4:   Event-Driven (Kafka) + Microservices + Distributed Transactions
             + System Design luyện tập 2 đề/tuần (song song)
             + Project A2: Twitter/X Clone (thiết kế + prototype core)

Tháng 5–6:   Service Mesh + Security Advanced + Compliance + IaC/K8s cơ bản
             + AI System Design
             + System Design luyện tập tiếp (5 đề hoàn chỉnh)

Tháng 7–9:   A2: Interview Skills + Behavioral + Tech Writing
             + Frontend System Design (RADIO) luyện tập
             + Viết 2 RFC/ADR thực tế
             + Mock interview (System Design + Behavioral)

Tháng 10–12: Apply Job Staff/Principal
             + Tối ưu portfolio + GitHub
             + Apply 10+ công ty mục tiêu
             + Đàm phán offer
```

> **Điều chỉnh thực tế:** Nếu timeline bị trễ, ưu tiên **KHÔNG** cắt System Design luyện tập và Behavioral. Cắt bớt **Service Mesh sâu** (chỉ cần biết concept) và **Compliance chi tiết** (biết GDPR cơ bản) trước. DSA chỉ cần đủ pattern thường gặp, không cần 300 bài LeetCode.

### 1.3. Kiến thức thuộc Nhánh A

Toàn bộ chặn này thuộc **Nhánh A**. Nếu bạn chọn Nhánh B (Solo Founder), **KHÔNG học** Kafka, K8s, Terraform, hay microservices nâng cao — chúng là over-engineering cho solo scale và là nguyên nhân burnout hàng đầu.

---

## PHẦN 2: A1 — KIẾN THỨC HỆ THỐNG NÂNG CAO

### 2.1. Scalability Fundamentals

**Vấn đề thực tế:** App của bạn có 1K user thì chạy tốt. Nhưng khi lên 100K concurrent, API timeout, DB chết, queue backlog. Làm sao scale đúng cách?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Horizontal Scaling (thêm máy) | Mặc định khi stateless — scale linh hoạt | App stateful (session lưu local disk) |
| Vertical Scaling (nâng CPU/RAM) | Nhanh, không cần đổi code, dữ liệu single-node | Đắt đỏ, có giới hạn vật lý, single point of failure |
| Auto-scaling | Traffic biến động (flash sale, viral content) | Traffic ổn định — tốn tiền churn instance |
| Stateless App | Mọi service cần scale — session ra Redis, file ra S3 | Không bao giờ lưu trạng thái local trên server |

**Quyết định mặc định:** Stateless app + Horizontal scaling + Load balancer (Round Robin/Least Connections). Session ra Redis. File ra object storage.

**Anti-pattern:** Lưu session trong server memory (`MemoryStore`) rồi bất ngờ khi user bị logout khi scale lên 2 instance.

- [ ] **Load Balancing:**
  - [ ] L4 (Transport): TCP/UDP level, nhanh, không xem payload (HAProxy, AWS NLB)
  - [ ] L7 (Application): HTTP level, có thể route theo path/header (Nginx, AWS ALB)
  - [ ] Health check: LB chỉ gửi traffic đến node healthy
- [ ] **Auto-scaling Triggers:**
  - [ ] CPU > 70% trong 5 phút → scale out
  - [ ] Queue depth > 1000 messages → scale out worker
  - [ ] Scale in khi traffic giảm (tiết kiệm cost)
- [ ] **Database of Session:** Không bao giờ sticky session nếu có thể tránh — dùng Redis/JWT

---

### 2.2. Database Advanced

**Vấn đề thực tế:** Table 100M rows. Query chậm dù đã index. Single DB instance chết là toàn bộ hệ thống đứng. Làm sao scale DB?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Read Replica | Read-heavy, read/write ratio cao (80/20) | Write-heavy — replica lag gây inconsistent |
| Partitioning | Table > 10M rows, query thường filter theo time/region | Table nhỏ, query không có natural partition key |
| Sharding | Write-heavy, data quá lớn cho 1 instance (> 1TB) | Cần cross-shard join phức tạp — ứng dụng phải handle |
| Connection Pooling (PgBouncer) | Nhiều app instance, mỗi instance mở 10+ connections | Ít connection, DB nhỏ |

**Quyết định mặc định:** Read replica cho read scale. Partitioning cho table lớn có time-series pattern. Sharding chỉ khi đã dùng hết vertical scaling + partitioning.

**Anti-pattern:** Sharding ngay từ đầu vì "scale" — sharding là pain: cross-shard transaction khó, re-sharding là nightmare, query phức tạp hóa.

- [ ] **CAP Theorem:**
  - [ ] **C**onsistency: mọi node thấy cùng data cùng lúc
  - [ ] **A**vailability: mọi request nhận response (không lỗi)
  - [ ] **P**artition tolerance: hệ thống chịu được mạng chia cắt
  - [ ] **Không thể có cả 3.** Mọi distributed system phải chọn. RDBMS chọn CP. Cassandra chọn AP.
- [ ] **PACELC Theorem (mở rộng CAP):**
  - [ ] Nếu **P**artition → chọn **A**vailability hay **C**onsistency?
  - [ ] **E**lse (không partition) → chọn **L**atency hay **C**onsistency?
- [ ] **Sharding Strategy:**
  - [ ] Hash-based: `hash(userId) % N` — phân phối đều, nhưng re-sharding khó
  - [ ] Range-based: `user_id 1-1M` ở shard 1 — dễ range query, nhưng hot shard (celebrity problem)
  - [ ] Directory-based: lookup service biết key nào ở shard nào — linh hoạt, nhưng thêm hop
- [ ] **Consistent Hashing:**
  - [ ] Giảm re-shard cost khi thêm/xóa node (chỉ ~1/N key di chuyển)
  - [ ] Dùng virtual nodes để tránh uneven distribution
- [ ] **Read Replica Lag:**
  - [ ] Replication async → replica có thể lag 1–5 giây
  - [ ] Pattern: write vào primary → read từ replica cho non-critical data → read từ primary cho data vừa write (read-your-write)

---

### 2.3. Async & Event-Driven Architecture

**Vấn đề thực tế:** Bạn cần xử lý 100K events/giây: order placed → cập nhật kho → gửi email → ghi analytics. Làm sao không block API chính?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Kafka | High throughput (1M+ msg/s), log retention, replay, consumer groups | Cần queue đơn giản, không cần durability cao (dùng RabbitMQ) |
| RabbitMQ | Complex routing, RPC, priority queue, dead letter dễ config | Throughput cực cao, cần log retention dài |
| AWS SQS / Google Pub/Sub | Cloud-native, managed, không cần tự vận hành broker | On-premise, cần control sâu, multi-cloud |
| Event Sourcing | Audit trail tuyệt đối, cần replay state (banking, logistics) | Simple CRUD, team chưa quen — overhead lớn |
| CQRS | Read model khác write model, read scale độc lập | Read/write giống nhau, thêm complexity không cần thiết |

**Quyết định mặc định:** Kafka cho high-throughput event streaming. RabbitMQ cho job queue có routing phức tạp. CQRS chỉ khi read pattern thực sự khác write pattern.

**Anti-pattern:** Dùng Kafka cho mọi thứ kể cả gửi 1 email — overhead setup, monitoring, topic management không đáng cho use case đơn giản.

- [ ] **Kafka Core:**
  - [ ] Topic, Partition, Offset, Consumer Group
  - [ ] Một partition chỉ được consume bởi 1 consumer trong group → scale bằng thêm partition
  - [ ] Replication factor ≥ 3 cho production
  - [ ] Retention policy: time-based hoặc size-based
- [ ] **Backpressure:**
  - [ ] Producer nhanh hơn consumer → lag tăng
  - [ ] Giải pháp: scale consumer, drop message (nếu không critical), hoặc pause producer
- [ ] **Exactly-Once Semantics:**
  - [ ] Idempotent producer + transactional consumer
  - [ ] Thực tế: "at-least-once + idempotency" dễ implement và đủ reliable hơn exactly-once phức tạp
- [ ] **Event Sourcing:**
  - [ ] Store events thay vì state hiện tại
  - [ ] State = fold(aggregate, events)
  - [ ] Snapshot để không replay 10 năm events
  - [ ] **Trade-off:** Debug dễ (biết lịch sử), nhưng schema evolution events là hell

---

### 2.4. Microservices

**Vấn đề thực tế:** Team 50 dev, monolith deploy 1 lần/tuần, conflict code liên tục. Nhưng tách thành 20 service thì mỗi lần debug cần trace qua 5 service.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Modular Monolith | Team < 20, cần deploy nhanh, bounded contexts đã rõ nhưng chưa cần scale team độc lập | Team > 50, cần deploy 10 lần/ngày, team sở hữu service riêng |
| Microservices | Team lớn, scale deploy độc lập, tech stack khác nhau phù hợp từng service | Team nhỏ, chưa rõ bounded context, chưa có platform team hỗ trợ |
| API Gateway | Unified entry, auth, rate limit, request routing | Chỉ 1–2 service (overhead) |

**Quyết định mặc định:** Modular monolith cho đến khi bạn **đau** vì deploy. Không tách vì "trend". API Gateway khi có ≥ 3 client-facing services.

**Anti-pattern:** Tách service theo layer (frontend-service, backend-service, database-service) thay vì theo business capability (order-service, inventory-service, payment-service).

- [ ] **Service Boundaries:**
  - [ ] Tách theo business capability (Domain-Driven Design — Bounded Context)
  - [ ] Mỗi service sở hữu data riêng — không share DB trực tiếp
  - [ ] Communication: async message preferred, sync REST/gRPC chỉ khi cần immediate response
- [ ] **API Gateway:**
  - [ ] Auth, SSL termination, rate limiting, request/response transform
  - [ ] Kong, AWS API Gateway, hoặc Nginx + custom logic
  - [ ] **Không để business logic phức tạp trong Gateway** — chỉ cross-cutting concern
- [ ] **Service Discovery:**
  - [ ] Consul, Eureka, hoặc K8s DNS/service
  - [ ] Health check để loại bỏ instance dead khỏi pool

---

### 2.5. Service Mesh

**Vấn đề thực tế:** 20 service giao tiếp



Giữa 20 service, mỗi service cần encrypt, retry, circuit breaker, observability. Nếu viết logic này trong từng service → code trùng lặp, khó đồng bộ.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Service Mesh (Istio/Linkerd) | > 10 services, cần mTLS, traffic split, observability uniform, multi-language stack | < 5 services, team chưa có platform/SRE — operational overhead giết chết velocity |
| Client-side library (Resilience4j, Polly) | 3–5 services, cùng ngôn ngữ, muốn giữ đơn giản | Nhiều ngôn ngữ, cần policy đồng nhất không phụ thuộc dev tự implement |
| API Gateway + ngắn gọn | Chỉ cần SSL termination, basic routing, rate limit | Cần service-to-service auth, retry, circuit breaker |

**Quyết định mặc định:** Chưa cần Service Mesh cho đến khi bạn có ≥ 8 services VÀ đội ngũ platform/SRE đủ người vận hành. Trước đó, dùng API Gateway + client-side circuit breaker.

**Anti-pattern:** Deploy Istio cho 3 microservices vì "trend" — sidecar latency + debugging network partition trong mesh là cơn ác mộng khi bạn chưa có Grafana tracing đàng hoàng.

- [ ] **Service Mesh Core:**
  - [ ] Data plane (Envoy sidecar) + Control plane (Istiod)
  - [ ] Traffic management: canary deploy (10% traffic với version mới), blue/green
  - [ ] mTLS tự động giữa các service — không cần dev tự xử lý certificate
  - [ ] Observability: distributed tracing tự động qua sidecar
- [ ] **Operational Reality:**
  - [ ] Sidecar resource overhead: mỗi pod thêm ~100MB RAM + CPU
  - [ ] Debugging: `curl` không còn đơn giản — cần `istioctl proxy-config`
  - [ ] Upgrade mesh = upgrade toàn bộ cluster — plan maintenance window

---

### 2.6. Distributed Transactions

**Vấn đề thực tế:** User đặt hàng → trừ kho → trừ tiền → gửi email. 4 bước, 4 service. Bước 3 lỗi, làm sao rollback bước 1 và 2?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Saga (Orchestration) | Workflow phức tạp, cần 1 bên điều phối trung tâm, dễ theo dõi trạng thái | Đơn giản 2–3 bước — orchestrator thêm single point of failure |
| Saga (Choreography) | Các service độc lập, không muốn phụ thuộc vào orchestrator | Cần biết trạng thái tổng thể nhanh — phải query nhiều service |
| 2PC (Two-Phase Commit) | Cần consistency tuyệt đối (ngân hàng, kho quỹ) | Latency cao, coordinator chết = toàn bộ transaction treo |
| Outbox Pattern | Cần đảm bảo "DB commit + event publish" là atomic | Đã dùng event sourcing — không cần thêm outbox |

**Quyết định mặc định:** Saga (Orchestration) cho workflow phức tạp. Outbox Pattern cho đảm bảo event không miss. 2PC chỉ khi compliance bắt buộc strong consistency.

**Anti-pattern:** Gọi HTTP POST từng service nối tiếp trong 1 API request — 1 lỗi giữa chừng là data inconsistency, không có cơ chế rollback tự động.

- [ ] **Saga Orchestration:**
  - [ ] Orchestrator service (state machine) gửi command → service thực hiện → nhận ack/nack
  - [ ] Compensation transaction: mỗi bước có "undo" (trừ kho → cộng lại kho)
  - [ ] Timeout: nếu service không phản hồi trong 30s → trigger compensation
  - [ ] Idempotency: compensation có thể chạy 2 lần nếu network timeout
- [ ] **Outbox Pattern:**
  - [ ] Transaction DB ghi cả business data + event vào `outbox` table
  - [ ] Relay process đọc outbox → publish Kafka → mark `published`
  - [ ] Đảm bảo: không bao giờ publish trước khi DB commit
- [ ] **2PC (biết để tránh):**
  - [ ] Phase 1: Prepare (lock resource)
  - [ ] Phase 2: Commit/Rollback
  - [ ] Vấn đề: lock lâu → contention, coordinator SPOF

---

### 2.7. CDN & Edge Computing

**Vấn đề thực tế:** User ở Úc, server ở US. API latency 300ms. Làm sao giảm xuống < 50ms?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| CDN (Cloudflare/Akamai) | Static asset, cache API response, DDoS protection | Dynamic content cá nhân hóa, không cache được |
| Edge Functions (Cloudflare Workers/Vercel Edge) | Logic nhẹ: A/B test, geolocation redirect, auth validation | Nặng compute, cần DB write — edge không phù hợp |
| Global Load Balancing | Multi-region deployment, route user đến region gần nhất | Single region, chưa cần geo-distribution |

**Quyết định mặc định:** Cloudflare cho CDN + DDoS + Edge Functions nhẹ. Global LB khi có multi-region.

**Anti-pattern:** Cache API `/user/profile` ở CDN với TTL 1 giờ — user đổi avatar nhưng vẫn thấy ảnh cũ, support ticket "bug" ầm ầm.

- [ ] **CDN Strategy:**
  - [ ] Static: Cache-Control `immutable` cho JS/CSS versioned
  - [ ] API: Cache GET `/products` với surrogate key để purge khi cập nhật
  - [ ] Stale-while-revalidate: serve cache cũ trong khi fetch mới ở background
- [ ] **Edge Computing:**
  - [ ] Cloudflare Workers: JS chạy ở 300+ PoP, cold start 0ms
  - [ ] Limit: 50ms CPU, 128MB memory — không chạy ML inference nặng
  - [ ] KV store: edge-local, eventual consistency
- [ ] **Multi-Region:**
  - [ ] Read replica ở region khác (EU, APAC)
  - [ ] Write vẫn về primary region → read replica lag
  - [ ] Conflict resolution: Last-Write-Wins (LWW) hoặc CRDT (nếu collaborative)

---

### 2.8. Chaos Engineering & Resilience

**Vấn đề thực tế:** Hệ thống chạy ổn 6 tháng. Đến Black Friday, Redis cluster sập → cascade failure, toàn bộ API timeout vì không có circuit breaker.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Circuit Breaker | Gọi external service (payment, SMS) — fail nhanh thay vì timeout chờ | Internal service độ trễ thấp, không có lỗi transient |
| Bulkhead | Cô lập thread pool theo tính năng — search không ăn hết resource của checkout | Resource dư giả, không có contention |
| Retry + Backoff | Lỗi transient (network blip, rate limit 429) | Lỗi logic (400 Bad Request) — retry vô ích |
| Timeout | Mọi external call phải có timeout | Không bao giờ để timeout mặc định "không giới hạn" |

**Quyết định mặc định:** Circuit Breaker + Exponential Backoff + Timeout cho mọi external call. Bulkhead cho critical path (checkout, payment).

**Anti-pattern:** Retry 5 lần liên tiếp không backoff khi Stripe trả 429 — bạn vừa tự tạo DDoS vào chính payment provider.

- [ ] **Circuit Breaker States:**
  - [ ] Closed: bình thường
  - [ ] Open: failure rate > 50% trong 30s → fail nhanh (fallback)
  - [ ] Half-Open: sau 60s, cho 1 request thử → nếu OK thì Closed
- [ ] **Chaos Engineering:**
  - [ ] Chaos Monkey: random kill instance
  - [ ] Latency Monkey: inject latency vào network
  - [ ] Start production: 1 instance dev → staging → 1% production traffic
- [ ] **Graceful Degradation:**
  - [ ] Recommendation service chết → hiển thị "popular items" thay vì 500
  - [ ] Search Elasticsearch sập → search SQL LIKE chậm nhưng vẫn chạy

---

### 2.9. Security Advanced

**Vấn đề thực tế:** Một intern để lộ AWS key trên GitHub. 24 giờ sau, bill $50K vì bot mining crypto. Làm sao ngăn và phát hiện?

> **Bảo mật rải trong từng mục:** Auth (JWT/OAuth), Input validation (SQL injection), File upload (virus scan), Payment (webhook signature). Đây là tầng nâng cao.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| mTLS | Service-to-service trong cluster, zero trust | Public API → client không có certificate |
| WAF (Cloudflare/AWS WAF) | Chặn SQLi, XSS, bot scraping ở edge | Internal API (đã behind VPN) |
| Secrets Manager (Vault/AWS SM) | Rotate secret tự động, audit log | Hardcode .env trong repo — tuyệt đối không |
| Zero Trust | "Never trust, always verify" — mọi request xác thực | Startup nhỏ, chưa có identity provider |

**Quyết định mặc định:** Secrets Manager cho mọi credential. WAF cho public-facing. mTLS cho internal service communication khi đã ở scale Staff.

**Anti-pattern:** Lưu `DATABASE_URL` trong GitHub Secrets rồi nghĩ "đã an toàn" — secret vẫn leak qua log, crash dump, và dev local.

- [ ] **mTLS:**
  - [ ] Certificate cho mỗi service, auto-rotate 90 ngày
  - [ ] Service mesh (Istio) tự động mTLS — không cần dev tự xử lý
- [ ] **Secret Management:**
  - [ ] HashiCorp Vault: dynamic secret (DB credential tự động expire)
  - [ ] AWS Secrets Manager: rotate RDS password tự động
  - [ ] **Không bao giờ** log secret — cấu hình log filter
- [ ] **DDoS Mitigation:**
  - [ ] Cloudflare: absorb layer 3/4 attack
  - [ ] Rate limiting: 100 req/IP/phút cho public API
  - [ ] Challenge (CAPTCHA) khi phát hiện bot pattern
- [ ] **Vulnerability Scanning:**
  - [ ] SCA (Software Composition Analysis): scan dependency known CVE
  - [ ] SAST: scan source code (SonarQube, Semgrep)
  - [ ] DAST: scan running app (OWASP ZAP)

---

### 2.10. Compliance

**Vấn đề thực tế:** Khách hàng EU yêu cầu xóa data. Bạn xóa row trong DB nhưng backup S3 tháng trước vẫn có data họ. GDPR fine lên đến 4% doanh thu.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| GDPR (EU) | Có user EU, bất kể công ty ở đâu | Chỉ phục vụ VN, không có khách quốc tế |
| CCPA (California) | Có user California | Không có user US |
| Data Retention Policy | Tất cả — định nghĩa thời gian lưu từng loại data | "Lưu mãi để chắc ăn" — rủi ro pháp lý + cost |

**Quyết định mặc định:** Implement data retention + soft delete + audit log ngay từ đầu. GDPR "right to be forgotten" = hard delete + cascade đến backup.

**Anti-pattern:** Nghĩ "công ty nhỏ không bị kiểm tra" — GDPR áp dụng cho mọi công ty có user EU, không phân biệt size.

- [ ] **GDPR Basics:**
  - [ ] Consent: user phải actively opt-in, không pre-ticked checkbox
  - [ ] Right to access: export toàn bộ data của user trong 30 ngày
  - [ ] Right to erasure: xóa hoàn toàn (DB, cache, backup, log — hoặc anonymize)
  - [ ] Data Processing Agreement (DPA) với third-party (Stripe, AWS)
- [ ] **Audit Trail:**
  - [ ] Ai truy cập data nào, khi nào, tại sao
  - [ ] Immutable log (append-only, không sửa/xóa)
  - [ ] Retention: audit log giữ 1–7 năm tùy quy định

---

### 2.11. Infrastructure as Code & Kubernetes

**Vấn đề thực tế:** Dev A sửa Nginx config trên server production bằng tay. Dev B không biết. 2 tuần sau deploy, config bị overwrite, site down.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Terraform | Multi-cloud, resource phức tạp (RDS, VPC, IAM), cần version control | 1 VPS đơn giản — dùng Ansible hoặc shell script |
| Kubernetes | > 20 microservices, cần auto-healing, rolling deploy, resource quota | < 5 service, 1 team — Docker Compose trên 1–2 VPS đủ |
| Pulumi | Team thích code (TS/Python) hơn HCL | Team đã quen Terraform, không cần chuyển |

**Quyết định mặc định:** Terraform cho cloud infrastructure. K8s khi có platform team hoặc ≥ 10 services. Trước đó, Docker Compose + VPS + GitHub Actions đủ.

**Anti-pattern:** Học K8s vì "Staff phải biết" rồi deploy 3 service lên cluster 3 node — operational cost > value.

- [ ] **Terraform:**
  - [ ] State file remote (S3 + DynamoDB locking) — không local state
  - [ ] Module hóa: reusable VPC, RDS, ECS module
  - [ ] `terraform plan` trước mọi apply — review trong PR
- [ ] **K8s Core (biết để phỏng vấn, chưa cần thành thạo vận hành):**
  - [ ] Pod, Deployment, Service, Ingress, ConfigMap, Secret
  - [ ] Horizontal Pod Autoscaler (HPA): scale pod theo CPU/memory
  - [ ] Liveness probe: restart pod nếu deadlock
  - [ ] Readiness probe: không gửi traffic đến pod chưa sẵn sàng
- [ ] **GitOps:**
  - [ ] ArgoCD/Flux: Git là source of truth, auto-sync cluster với Git
  - [ ] Rollback: `git revert` → ArgoCD tự động sync về version cũ

---

### 2.12. AI System Design

**Vấn đề thực tế:** Bạn cần tích hợp LLM vào hệ thống: classify email, generate summary, trả lời chat. OpenAI API chậm (2–10s), expensive ($0.01–$0.12 per 1K tokens), và không 100% reliable.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Multi-model Routing | Task đơn giản → GPT-3.5 (rẻ), phức tạp → GPT-4 (chất) | Chỉ 1 use case, không cần optimize cost |
| Streaming Response | Chat UI, user cần thấy từng token hiện ra | Batch processing, không cần real-time |
| Caching (Semantic Cache) | Câu hỏi lặp lại (FAQ, support) | Mỗi query unique, cache hit rate thấp |
| Self-hosted (Llama/Mistral) | Data sensitive (healthcare, legal), cần 100% on-prem | Không có GPU infra, team chưa có MLops |

**Quyết định mặc định:** API routing (cheap model first, fallback expensive). Redis semantic cache cho FAQ. Streaming cho chat. Queue cho batch.

**Anti-pattern:** Gọi OpenAI API đồng bộ trong request HTTP — user chờ 8 giây, timeout 504, và bạn trả tiền cho cả request thất bại.

- [ ] **Architecture Patterns:**
  - [ ] Async queue: user submit → BullMQ process → webhook callback khi xong
  - [ ] Circuit breaker: OpenAI 429 → fallback to Anthropic
  - [ ] Cost cap: daily budget limit, alert khi > 80%
- [ ] **RAG at Scale:**
  - [ ] Vector DB (pgvector/Pinecone) như 1 lớp data ngang hàng relational
  - [ ] Embedding model riêng (local) → chỉ gọi LLM cho generation
  - [ ] Chunking strategy: semantic chunk > fixed-size chunk
- [ ] **Evaluation:**
  - [ ] LLM-as-judge: dùng GPT-4 đánh giá output của GPT-3.5
  - [ ] Human-in-the-loop: 5% sample review manual
  - [ ] A/B test: model A vs model B trên cùng metric (accuracy, latency, cost)

---

### 2.13. System Design — Khung Thiết Kế & 5 Đề Luyện Tập

**Vấn đề thực tế:** Phỏng vấn Staff: "Thiết kế News Feed cho 10M DAU". Bạn có 45 phút. Không phải để vẽ diagram đẹp, mà để chứng minh bạn nghĩ toàn cục, chịu pressure, và biết trade-off.

**Khung thiết kế (dùng cho mọi đề):**

```
1. Requirements (5 phút)
   - Functional: feature gì? (post, like, comment)
   - Non-functional: QPS, latency, availability, consistency
   - Scale: DAU, data size, growth rate

2. Capacity Estimation (5 phút)
   - Read QPS, Write QPS, Storage, Bandwidth
   - Back-of-envelope: 10M DAU × 10 session/ngày × 20 request/session

3. API Design (5 phút)
   - Endpoints, request/response, pagination
   - Idempotency keys cho write

4. Data Model (10 phút)
   - Relational vs NoSQL
   - Schema, index, sharding key
   - Read replica, caching strategy

5. High-Level Design (10 phút)
   - Load balancer → API Gateway → Service → DB/Cache/Queue
   - Draw diagram, explain data flow

6. Deep Dive (8 phút)
   - Bottleneck: News Feed fan-out, URL shortener hash collision
   - Trade-off: Push vs Pull, Cache Aside vs Write-Through

7. Failure Mode (2 phút)
   - What if DB primary dies? Cache miss storm? Queue backlog?
```

**5 Đề bắt buộc luyện tập:**

#### Đề 1: Rate Limiter
- **Bài toán:** 1M req/phút đến API. Chặn abuse, đảm bảo fair use.
- **Design:** Token Bucket (burst) vs Sliding Window Log (chính xác). Redis counter với TTL.
- **Bị đẩy thêm:**
  - *Interviewer:* "Redis node chứa counter sập. Fail open (cho qua) hay fail closed (chặn hết)?"
  - *Trade-off:* Fail open = risk abuse nhưng giữ availability. Fail closed = bảo vệ hệ thống nhưng kill legitimate traffic. **Đáp án:** Fail open cho read API, fail closed cho payment API. Giải thích: network partition không nên làm người dùng hợp lệ bị chặn mua hàng, nhưng cũng không nên để bot đọc data miễn phí khi hệ thống đã quá tải.

#### Đề 2: Webhook Idempotent (Stripe)
- **Bài toán:** Nhận webhook thanh toán, xử lý đúng 1 lần dù Stripe gửi 3 lần.
- **Design:** Idempotency key + processed_events table. ACK 200 ngay, xử lý async.
- **Bị đẩy thêm:**
  - *Interviewer:* "Webhook đến trước khi DB transaction của chính order đó commit. Làm sao?"
  - *Trade-off:* Buffer trong queue chờ 30s (tăng latency) vs xử lý ngay rồi rollback (phức tạp). **Đáp án:** Delayed queue — webhook vào queue với visibility delay 10s, retry nếu order chưa tồn tại. Giải thích: eventual consistency là chấp nhận được cho webhook, nhưng duplicate charge là không chấp nhận được.

#### Đề 3: Notification System
- **Bài toán:** Gửi 10M push notification trong 1 phút (flash sale).
- **Design:** Kafka topic per notification type. Worker pool consume. Batching FCM/APNS.
- **Bị đẩy thêm:**
  - *Interviewer:* "User A vừa đổi setting 'tắt notification' 2 giây trước, nhưng message đã trong queue. Gửi hay không?"
  - *Trade-off:* Check setting real-time (DB load cao) vs gửi rồi xin lỗi (bad UX). **Đáp án:** Pull setting từ cache trước khi gửi, chấp nhận 1–2 giây eventual inconsistency (cache TTL 5s) thay vì query DB 10M lần.

#### Đề 4: Job Queue Chịu Tải (BullMQ)
- **Bài toán:** 1M ảnh cần resize. Không được mất job, không được chạy 2 lần.
- **Design:** Redis queue. Worker idempotent. Dead letter queue (DLQ) cho fail > 3 lần.
- **Bị đẩy thêm:**
  - *Interviewer:* "Redis sập 5 phút. Job đang process giữa chừng thì mất. Làm sao?"
  - *Trade-off:* At-least-once (có thể duplicate) vs exactly-once (phức tạp). **Đáp án:** At-least-once + idempotent worker. Redis chỉ là queue, source of truth là DB (job status = processing/completed). Redis sập → restart worker, scan DB tìm job `processing` quá 5 phút → re-enqueue. Trade-off: duplicate resize 1–2 ảnh (không sao) thay vì mất 1M ảnh.

#### Đề 5: URL Shortener
- **Bài toán:** 100M URL mới/ngày. Read:Write = 100:1. Redirect < 50ms.
- **Design:** Base62 encode của auto-increment ID (hoặc MD5 prefix). Read replica cho redirect. Cache hot URL.
- **Bị đẩy thêm:**
  - *Interviewer:* "Một celebrity tweet short link. Traffic tăng 1000x trong 1 phút. Cache miss. Làm sao?"
  - *Trade-off:* Pre-warm cache (không biết trước link nào hot) vs staggered TTL (không giải quyết được). **Đáp án:** Cache Aside + request coalescing (1 request đến DB, 999 request cùng key chờ kết quả). Trade-off: 1 request chậm 10ms nhưng 999 request nhanh < 1ms, thay vì 1000 request đánh sập DB.

---

### 2.14. Idempotency & Concurrency Control

**Vấn đề thực tế:** User bấm "Đặt hàng" 2 lần vì lag. Stripe charge 2 lần. Làm sao đảm bảo chỉ 1 lần?

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Idempotency Key (client-generated UUID) | API write: payment, order, transfer | Read API (GET) — không cần |
| Optimistic Locking | Concurrent edit cùng resource (số dư, inventory) | Không có race condition |
| Pessimistic Locking | Race condition cao, không chấp nhận conflict (banking) | Read-heavy, lock gây deadlock |
| Distributed Lock (Redis Redlock) | Cross-service, cross-process coordination | Single instance, dùng mutex là đủ |

**Quyết định mặc định:** Idempotency key cho mọi write API. Optimistic locking (`version` column) cho DB update. Distributed lock cho job scheduler.

**Anti-pattern:** `SELECT ... FOR UPDATE` cho mọi query — deadlock city, performance chết.

- [ ] **Idempotency Key:**
  - [ ] Client tạo UUID, gửi trong header `Idempotency-Key`
  - [ ] Server lưu key + response vào cache/DB với TTL 24h
  - [ ] Request trùng → trả response cũ, không xử lý lại
  - [ ] Key phải unique theo user + endpoint, không global
- [ ] **Concurrency:**
  - [ ] Optimistic: `UPDATE inventory SET qty = qty - 1, version = version + 1 WHERE version = 5`
  - [ ] Retry optimistic conflict: 3 lần exponential backoff
  - [ ] Distributed lock: Redlock hoặc PostgreSQL advisory lock (đơn giản hơn Redis)
- [ ] **Audit Trail:**
  - [ ] Mỗi write log: idempotency key, timestamp, input hash, output
  - [ ] Immutable — append only

---

### 2.15. Production Operations & Cost Awareness

**Vấn đề thực tế:** Bill AWS tăng từ $500 lên $12K tháng này. CloudWatch không alert. Hoá ra dev bật RDS multi-AZ + 10XL instance cho staging.

> **Production Ops là bắt buộc, không "nâng cao".**

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| Sentry | Error tracking FE + BE, source map, release tracking | Chỉ console.log — không biết lỗi xảy ra ở đâu |
| OpenTelemetry (OTel) | Distributed tracing, correlate request qua 5 service | Monolith đơn giản — log đủ |
| Structured Logging (JSON) | Parse log bằng machine, alert theo field | Log text tự do — không query được |
| PagerDuty/Opsgenie | On-call rotation, escalate nếu không ack | 1 dev tự xem Slack lúc 3 giờ sáng |

**Quyết định mặc định:** Sentry + structured logging + OpenTelemetry basics. PagerDuty khi team ≥ 3 người on-call.

**Anti-pattern:** "Production chạy được là được, log sau" — 2 giờ sáng incident, bạn ngồi SSH vào 5 server grep log.

- [ ] **Observability 3 Trụ Cột:**
  - [ ] Metrics: Prometheus/Grafana — CPU, memory, QPS, latency p99
  - [ ] Logs: ELK hoặc Loki — structured JSON, correlation ID
  - [ ] Traces: Jaeger/Tempo — trace request qua service mesh
- [ ] **Alerting:**
  - [ ] P99 latency > 500ms trong 5 phút → Slack alert
  - [ ] Error rate > 1% trong 2 phút → PagerDuty
  - [ ] **Không alert:** "CPU > 50%" — quá nhiễu, không actionable
- [ ] **Cost Awareness:**
  - [ ] DB: connection pool size ảnh hưởng RDS cost (over-provision = tiền ngủ)
  - [ ] Cache: Redis memory > 80% → scale hoặc eviction, không mua instance lớn ngay
  - [ ] Search: Elasticsearch 3 node cho 10K document = overkill, Meilisearch đủ
  - [ ] Stripe fee: 2.9% + 30¢ — tính vào unit economics, không để "sau này tính"
- [ ] **Debug Dưới Áp Lực:**
  - [ ] Case: p99 latency tăng gấp 3 qua đêm. Không deploy nào.
  - [ ] Bước 1: Xem metrics — DB connection pool exhausted?
  - [ ] Bước 2: Xem logs — slow query mới xuất hiện?
  - [ ] Bước 3: Xem trace — service nào là bottleneck?
  - [ ] Bước 4: Git diff 24h qua — dependency mới? config mới?
  - [ ] Bước 5: Nếu không tìm ra trong 15 phút → rollback deploy gần nhất (dù không nghĩ nó liên quan)
- [ ] **Rollback Tập Luyện Thật:**
  - [ ] Mỗi tháng 1 lần: deploy version mới → verify → rollback về cũ → verify
  - [ ] Rollback DB: migration phải reversible (không drop column, chỉ rename + add new)
  - [ ] Feature flag: tắt tính năng mới trong 30 giây thay vì deploy lại
- [ ] **Incident Response (4 bước):**
  - [ ] Phát hiện: Alert → on-call ack trong 5 phút
  - [ ] Chẩn đoán: Runbook checklist — "nếu DB CPU 100% → xem slow query log"
  - [ ] Xử lý: Mitigation trước root cause (restart, scale up, disable feature)
  - [ ] Postmortem: 24 giờ sau incident, blameless, action items có owner + deadline

---

### 2.16. Judgment & War Stories

**Vấn đề thực tế:** Bạn không được thăng chức vì code giỏi. Bạn được thăng vì đưa ra quyết định đúng dưới áp lực, thuyết phục được team, và chịu trách nhiệm khi sai.

**War Story 1: Deadline vs Tech Debt**

- **Bối cảnh:** Black Friday cách 2 tuần. Product yêu cầu feature "flash sale countdown" mới.
- **Áp lực:** Team 3 người, đã có 5 feature trong sprint.
- **Lựa chọn đã cân nhắc:** (a) Làm đúng — distributed lock, idempotency, full test — 2 tuần. (b) Làm nhanh — single DB instance, optimistic lock đơn giản, test manual — 3 ngày.
- **Quyết định:** Chọn (b) nhưng với điều kiện: (1) feature flag để tắt nếu cháy, (2) rate limit 10 req/s để không đánh sập DB, (3) manual checkout process backup nếu hệ thống lỗi.
- **Đánh đổi:** UX không mượt (có thể hết hàng nhưng vẫn hiển thị còn 2 giây). Rủi ro reputation nếu bán nhầm.
- **Bài học:** "Không hoàn hảo" là OK nếu bạn có mitigation. "Hoàn hảo nhưng miss deadline" = doanh thu 0.

**War Story 2: API Dispute giữa 2 Team**

- **Bối cảnh:** Team Payment đổi response format webhook. Team Order không biết, parse sai, 200K đơn "pending" mãi.
- **Áp lực:** 2 team đổ lỗi. Payment: "đã gửi email thông báo". Order: "không đọc email hàng ngày".
- **Lựa chọn:** (a) Đổ lỗi Payment. (b) Viết contract test + schema validation, bắt lỗi trước khi deploy.
- **Quyết định:** Chọn (b) + tổ chức 1 buổi API review chung. Không đổ lỗi.
- **Đánh đổi:** Mất 1 ngày làm việc của 2 team. Nhưng sau đó không còn incident kiểu này.
- **Bài học:** Staff Engineer không phải người code nhiều nhất. Là người ngăn incident trước khi nó xảy ra bằng process.

**War Story 3: AI Output gây Incident**

- **Bối cảnh:** Tích hợp LLM để tự động trả lời support ticket. LLM trả lời sai chính sách hoàn tiền, khách hàng đăng lên mạng.
- **Áp lực:** PR crisis, CEO hỏi "sao AI nói vậy được?"
- **Lựa chọn:** (a) Tắt AI ngay. (b) Thêm human-in-the-loop, chỉ AI suggest draft, agent approve.
- **Quyết định:** Tắt AI ngay (mitigation), sau đó chuyển sang (b) với guardrail: không trả lời về chính sách tiền, chỉ trả lời về kỹ thuật.
- **Đánh đổi:** Support ticket tăng 30% thời gian xử lý. Nhưng không còn rủi ro pháp lý.
- **Bài học:** AI không có accountability. Con người chịu trách nhiệm. Staff Engineer phải đặt guardrail trước khi đặt AI vào production.

---

## PHẦN 3: PROJECTS THỰC CHIẾN + LỘ TRÌNH TUẦN

### 3.1. Project A1: URL Shortener (Scalable)

**Business Context:** Dịch vụ rút gọn URL cho marketing campaign. 100K click/phút vào giờ cao điểm. Không được mất link, không được redirect chậm.

**Tech Stack + Lý do chọn:**
- **NestJS:** DI, Guards rate limit, Interceptors logging
- **PostgreSQL:** Lưu mapping short↔long URL. Read replica cho redirect.
- **Redis:** Cache hot URL (top 1% chiếm 50% traffic). Counter cho analytics.
- **Nginx:** Load balancing, SSL termination, cache header
- **Docker Compose:** Multi-service local dev

**Thay thế đã cân nhắc & tại sao không chọn:**
- MongoDB: Không cần schema linh hoạt, cần ACID cho analytics aggregation
- Cassandra: Overkill cho 100M URL, team chưa có expertise
- K8s: Chỉ 1 service, Docker Compose + 1 VPS đủ

**Production-Ready Checklist:**
- [ ] **CI/CD:** GitHub Actions — Lint → Test (Jest + Supertest) → Build → Push Docker Hub → Deploy VPS
- [ ] **Tests:** Unit (Jest), Integration (Supertest + test DB), Load test (k6: 10K req/s)
- [ ] **Monitoring:** Sentry (error), Prometheus (metrics), structured logging
- [ ] **Deploy:** Docker Compose trên VPS, Nginx reverse proxy, Cloudflare DNS + SSL
- [ ] **Docs:** OpenAPI/Swagger, README setup < 5 phút, ADR chọn hash strategy
- [ ] **Git flow:** Conventional commits, semantic versioning, branch protection

### 3.2. Project A2: Twitter/X Clone (Core)

**Business Context:** Social feed cho 10K DAU ban đầu. Fan-out write vs read. Real-time notification.

**Tech Stack:**
- **NestJS microservices:** Post Service, Feed Service, Notification Service
- **PostgreSQL:** User, post, follow graph
- **Redis:** Timeline cache (fan-out read), session store
- **Kafka:** Event stream (new post → fan-out to followers)
- **Meilisearch:** Full-text search post

**Lộ trình tuần (gợi ý):**

```
Tuần 1–2:   Setup NestJS + Prisma + PostgreSQL. API: create post, follow user.
            Test: integration test với testcontainer.

Tuần 3–4:   Feed algorithm. Fan-out read (pull) vs write (push).
            Implement push cho follower < 1K, pull cho follower > 1K (hybrid).
            Redis timeline cho active user.

Tuần 5–6:   Kafka integration. New post event → Feed Service cập nhật timeline.
            Dead letter queue cho fail. Idempotency key.

Tuần 7–8:   Notification Service. Real-time SSE. BullMQ cho email digest.
            Search với Meilisearch.

Tuần 9–10:  Load test. K6: 1K concurrent user. Optimize DB query, add index.
            System Design doc: vẽ architecture, capacity estimation.

Tuần 11–12: Security audit. Rate limiting, input validation, XSS filter.
            Deploy: Docker Compose, Nginx, Cloudflare. Sentry monitoring.
```

### 3.3. Project A3: E-commerce Checkout (Saga Pattern)

**Business Context:** Checkout flow: validate cart → check inventory → process payment → create order → send email. Distributed transaction.

**Tech Stack:**
- **NestJS:** Orchestrator service + 4 worker services
- **PostgreSQL:** Mỗi service DB riêng (microservices)
- **Redis:** Saga state machine, distributed lock inventory
- **Stripe:** Payment, webhook idempotency
- **BullMQ:** Job queue cho email, inventory reservation timeout

**Key Implementation:**
- [ ] Saga orchestrator: NestJS state machine, compensation cho mỗi bước
- [ ] Outbox pattern: Order DB ghi cả order + event vào outbox table
- [ ] Stripe webhook: Idempotency key, verify signature, async processing
- [ ] Inventory: Optimistic locking + reservation TTL 15 phút

---

## PHẦN 4: CHECKLIST XIN VIỆC + TÀI LIỆU THAM KHẢO

### 4.1. Câu hỏi phỏng vấn thường gặp (Trade-off / Bị đẩy thêm)

> Không hỏi định nghĩa. Hỏi: "Nếu... thì sao?"

1. **"Bạn chọn Kafka hay RabbitMQ cho hệ thống này? Nếu team không ai biết Kafka, deadline 2 tuần, thì sao?"**
   - *Trả lời:* RabbitMQ vì operational overhead thấp, team onboard nhanh. Trade-off: throughput thấp hơn, nhưng 2 tuần không đủ để vận hành Kafka production. Sau MVP, đánh giá lại.

2. **"Cache Aside vs Write-Through? Nếu cache hit rate 10% thì sao?"**
   - *Trả lời:* Cache Aside mặc định. Nếu hit rate 10% → xem lại data model hoặc dùng prefetch. Write-Through chỉ khi read-after-write consistency bắt buộc.

3. **"Microservices vs Monolith? Nếu team bạn 5 người, 2 junior?"**
   - *Trả lời:* Modular monolith. Microservices cần platform team, DevOps maturity, và bounded context rõ ràng. 5 người không đủ cognitive load.

4. **"Kể 1 lần bạn đẩy back deadline với Product?"**
   - *STAR:* Situation (Black Friday), Task (feature flash sale), Action (đánh đổi scope + mitigation), Result (doanh thu đạt, 0 incident).

5. **"Bạn mentor 1 junior như thế nào khi họ viết code chậm tiến độ?"**
   - *Trả lời:* Không fix code hộ. Pair programming 30 phút/ngày. Đặt câu hỏi "em nghĩ cách này có vấn đề gì?" thay vì "sửa thành như này". Đo progress bằng story point hoàn thành, không phải line of code.

### 4.2. Checklist trước khi apply Staff/Principal

- [ ] **GitHub:** 3 project public, có README production-ready, CI/CD xanh, test coverage > 70%
- [ ] **Blog:** 2–3 bài technical (System Design, trade-off, incident postmortem)
- [ ] **System Design:** Luyện 5 đề trên, tự quay video 45 phút xem lại
- [ ] **Behavioral:** Chuẩn bị 4 câu chuyện STAR (leadership, conflict, failure, impact)
- [ ] **DSA:** 50 bài pattern thường gặp (Two Pointers, Sliding Window, BFS/DFS, Union-Find)
- [ ] **Mock Interview:** 3 lần với bạn bè hoặc platform (Pramp, interviewing.io)
- [ ] **Offer Evaluation:** Bảng so sánh: Base salary, Equity (vesting), Bonus, Level, Team scope

### 4.3. Tài liệu tham khảo bắt buộc

- **"Designing Data-Intensive Applications"** (Martin Kleppmann) — **BIBLE**. Đọc 2 lần. Lần 1 hiểu concept, lần 2 liên hệ với project đã làm.
- **"System Design Interview"** (Alex Xu) — Format phỏng vấn, cách nói to suy nghĩ.
- **"Building Microservices"** (Sam Newman) — Khi nào tách, khi nào không.
- **"The Staff Engineer's Path"** (Tanya Reilly) — Kỹ năng influence, technical writing, không phải code.
- **AWS Architecture Blog** — Real-world patterns, cost optimization.
- **Martin Fowler's Blog** — Microservices, Event Sourcing, CQRS patterns gốc.

---

> **SELF-CHECK trước khi xuất:**
> - [x] Có mục System Design riêng với 5 đề + bị đẩy thêm? **Có**
> - [x] Bảo mật rải trong từng mục (Auth, Payment, File, AI, CDN)? **Có**
> - [x] Có Production Operations / vận hành thật (incident 4 bước, rollback, cost)? **Có**
> - [x] Có War Stories cụ thể + format đầy đủ? **Có**
> - [x] Không hứa hẹn "học xong = Staff"? **Đã phân biệt nền tảng vs kinh nghiệm thật**
> - [x] Stack trong phạm vi cho phép (Kafka, K8s, Terraform cho Nhánh A)? **Có**
> - [x] Có Idempotency mục riêng? **Có**
> - [x] Có Cost-awareness? **Có**
> - [x] Project khớp kiến trúc? **URL Shortener + Twitter Clone + E-commerce Checkout**

---

**"Không hời hợt, nghiên cứu sâu."**
Mỗi checkbox là một kiến thức bạn PHẢI giải thích được cho người khác. Nếu không giải thích được, quay lại học. Staff Engineer không phải người biết nhiều nhất. Là người biết đủ để đưa ra quyết định đúng, và khiêm tốn khi cần học thêm.