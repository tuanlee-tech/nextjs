# PROMPT TẠO FILE CHAPTER CHO KHỐI LỘ TRÌNH SOLO FULLSTACK

Mở chat mới, paste prompt này + đính kèm file 00_TONG_QUAN và 01_CHAPTER_1 (nếu có upload được), rồi yêu cầu tiếp.

## BỐI CẢNH TỔNG QUAN
Bạn đang viết tiếp lộ trình Solo Fullstack (JS/TS ecosystem) đã có:
- `00_TONG_QUAN_LO_TRINH_SOLO_FULLSTACK.md` — 3 khối lõi (K1 Frontend xong, K2 Backend, K3 DevOps) → điểm rẽ Nhánh A Staff/Architect hoặc B Solo Founder.
- `01_CHAPTER_1_FRONTEND_MASTER.md` — chuẩn văn phong, độ sâu, cấu trúc 4 phần.
- Nguyên tắc cốt lõi: Học theo chiều ngang (Project-based). Mỗi khối = năng lực chứng minh được. Phân biệt rõ "đủ nền tảng để phỏng vấn/vận hành" vs "kinh nghiệm senior thật cần thời gian tích lũy".

## NHIỆM VỤ
Viết file chi tiết cho **[KHỐI X: TÊN KHỐI]** theo đúng chuẩn độ sâu và format của `01_CHAPTER_1_FRONTEND_MASTER.md`.

---

## RÀNG BUỘC BẮT BUỘC (rút từ review Chặn 1)

### 1. Ngôn ngữ & Tinh thần
- Giọng văn: thực chiến, thẳng thắn, không hời hợt. Anti-pattern phải rõ ràng, quyết định mặc định cụ thể.
- **KHÔNG** khẳng định "hoàn thành khối này = đạt trình độ X" nếu X là năng lực cần kinh nghiệm thực chiến (on-call, incident thật, trade-off dưới áp lực). Luôn phân biệt "đủ nền tảng kỹ thuật" vs "kinh nghiệm vận hành thật".

### 2. Format mỗi mục kiến thức (bắt buộc tuân thủ)
Mỗi phần/mục lớn phải có đủ 5 thành phần theo thứ tự:
1. **Vấn đề thực tế** — tại sao cần học?
2. **Bảng quyết định** — 3 cột: Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng
3. **Quyết định mặc định** — khuyến nghị stack/lựa chọn mặc định của lộ trình
4. **Anti-pattern** — sai lầm phổ biến phải tránh
5. **Checklist chi tiết** — checkbox lồng nhau, có thể đánh dấu hoàn thành

### 3. Cấu trúc file CHAPTER chính (4 phần)
Giữ đúng cấu trúc 4 phần như Chặn 1:
- **Phần 1: Mục tiêu & Thông tin chặn** — mục tiêu đạt được (phân biệt "sẵn sàng phỏng vấn" vs "đã là senior"), thời gian & lộ trình tuần, milestone.
- **Phần 2: Danh mục kiến thức + Quyết định công nghệ** — các mục kỹ thuật theo format trên. Bảo mật phải **rải trong từng mục liên quan** (Auth, Payment, File Upload...), **KHÔNG** dồn thành 1 checklist cuối tách biệt.
- **Phần 3: Projects thực chiến + Lộ trình tuần** — project có business context, tech stack + lý do chọn (có cả "Thay thế đã cân nhắc & tại sao không chọn"), production-ready checklist (CI/CD, Tests, Monitoring, Deploy, Docs, Git flow).
- **Phần 4: Checklist xin việc + Tài liệu tham khảo** — câu hỏi phỏng vấn thường gặp & cách trả lời, tài liệu bắt buộc/nên đọc.

### 4. System Design riêng cho khối
- Mỗi khối phải có **mục System Design riêng**, ngang hàng với các mục kỹ thuật khác.
- K2 (Backend): Khung thiết kế BE/API + luyện tối thiểu 5 đề: Rate Limiter, Webhook Idempotent (Stripe), Notification System, Job Queue chịu tải (BullMQ), URL Shortener. Mỗi đề **PHẢI** có phần "bị đẩy thêm" (interviewer hỏi ngược trade-off, vd: Redis backing counter sập thì fail open hay fail closed — không có đáp án sạch, đúng dạng network partition trade-off).
- K3 (DevOps): Khung "Production Readiness" 5 trụ cột làm xương sống: (a) Bảo mật nền, (b) Observability nối thẳng runbook, (c) Rollback tập luyện thật, (d) Backup/restore test thật, (e) Environment parity.

### 5. Judgment / War Stories / Trade-off
- Phải có mục **Judgment & War Stories** với **ví dụ cụ thể** (tình huống thật, không chỉ định nghĩa).
- Mỗi ví dụ phải có format: Bối cảnh → Áp lực/Ràng buộc → Lựa chọn đã cân nhắc → Quyết định + Lý do → Đánh đổi phải chấp nhận → Bài học.
- Câu hỏi phỏng vấn phải có dạng **trade-off / bị đẩy thêm**, không chỉ hỏi định nghĩa.

### 6. Production Operations
- Production Ops là **bắt buộc**, không phải "nâng cao, học sau". Phải có: monitoring, rollback, incident response, cost-awareness.
- K2: Thêm "Cost-awareness" (Stripe fee, DB connection pooling cost, Elasticsearch vs Meilisearch cost khi scale). Thêm "Debug dưới áp lực" (case study: p99 latency tăng gấp 3 qua đêm). Thêm "Migration & rollback an toàn 2 chiều" cho Prisma schema.
- K3: Thêm **case study incident thật** đi đủ 4 bước (phát hiện → chẩn đoán → xử lý → postmortem). Rollback phải là bài tập thực hành (cố tình deploy lỗi rồi rollback), không chỉ lý thuyết.

### 7. Stack khóa cứng
- **KHÔNG** đề xuất lại stack ngoài phạm vi lộ trình đã chọn.
- K2: NestJS (DI/Guards/Interceptors/Pipes), Prisma, PostgreSQL, Redis, BullMQ, Stripe, Meilisearch→Elasticsearch, Resend/Postmark, pgvector, tRPC/GraphQL, JWT/OAuth/RBAC, OWASP, Idempotency (mục riêng), Event-Driven (Outbox/Saga), LLM API + RAG.
- K3: Docker multi-stage + docker-compose, Linux VPS (Ubuntu/Debian), GitHub Actions CI/CD, Nginx reverse proxy, Cloudflare, Let's Encrypt, Vercel (FE) + Railway/Render (BE), Sentry + OpenTelemetry basics. **KHÔNG** đưa Terraform/K8s/Service Mesh/Vault vào K3.

### 8. Project khối này
- K2: Project "SaaS API Backend + AI feature" — NestJS + Prisma + PostgreSQL, JWT Auth, Stripe payment, BullMQ email queue, tích hợp LLM API + RAG cơ bản, API testing, Webhook security.
- K3: Project "Solo Deploy" — Docker compose, GitHub Actions CI/CD, Nginx, Cloudflare, Sentry, Backup automation, Graceful shutdown. **PHẢI** khớp kiến trúc đã dựng ở K2 (NestJS + Prisma + PG + Redis + BullMQ).

### 9. Idempotency & Concurrency (K2)
- Là mục **RIÊNG**, không lồng trong "Webhooks". Bao gồm: idempotency keys, concurrency control, distributed locking cơ bản, audit trail.

### 10. Breakdown 4 bước & 3 file
- Mọi khối con khi breakdown tuân thủ: Input (15-20') → Process (30-40') → Output (artifact cụ thể) → Verify (Feynman + tự chấm).
- Cấu trúc 3 file / chặn:
  1. `0X_CHAPTER_X_NAME.md` — File chính (nội dung đang viết)
  2. `0XA_CHAPTER_X_PROJECT_KNOWLEDGE_GAP.md` — Ma trận độ phủ kiến thức × projects, phân loại thiếu A/B/C/D
  3. `0XB_CHAPTER_X_BLOCK_BREAKDOWN.md` — Breakdown từng buổi học cụ thể theo 4 bước

---

## SELF-CHECK TRƯỚC KHI XUẤT
Trước khi trả kết quả, tự kiểm tra và đánh dấu:
- [ ] Có mục System Design riêng cho khối này chưa? (BE/API System Design cho K2 / Production Readiness 5 trụ cột cho K3)
- [ ] Bảo mật có nằm rải trong từng mục liên quan hay bị dồn 1 chỗ?
- [ ] Có mục Production Operations / vận hành thật không?
- [ ] Có War Stories / Judgment với ví dụ cụ thể + bị đẩy thêm không?
- [ ] Có ngầm hứa hẹn "học xong khối này = senior/production-grade" không? → Nếu có, sửa lại thành "đủ nền tảng kỹ thuật".
- [ ] Stack có bị đề xuất lại ngoài phạm vi cho phép không?
- [ ] (K2) Idempotency có là mục riêng không? Có Cost-awareness không? Có case debug dưới áp lực không?
- [ ] (K3) Project Solo Deploy có khớp kiến trúc K2 không? Có case study incident thật không? Có rollback tập luyện thật không? Có K8s/Terraform/Service Mesh không? → Nếu có thì xóa.

---

## THÔNG TIN BỔ SUNG CHO KHỐI CỤ THỂ
[KHI VIẾT K2: Thêm đoạn sau]
Người học đã biết backend cơ bản (từng làm API/Node đơn giản) → KHÔNG cần giải thích lại "API là gì", nhưng giải thích từ đầu các khái niệm NestJS-specific. Độ dài tự cân theo khối lượng kiến thức thực tế (backend rộng hơn frontend ở phần data/integration).

[KHI VIẾT K3: Thêm đoạn sau]
Độ dài gọn hơn K2 theo đúng tinh thần "rút gọn — chỉ phần ai cũng cần". Target solo founder/small team — thêm ghi chú "tự động hóa để giảm gánh nặng vận hành thủ công, tránh burnout" (dữ liệu khảo sát cho thấy burnout là yếu tố dự báo thất bại lớn nhất của solo founder).