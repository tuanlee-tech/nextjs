# CHECKLIST TỔNG QUÁT: TẠO BÀI GIẢNG CHI TIẾT
## Dùng chung cho mọi Khối/Chapter (Frontend, Backend, DevOps, System Design, Staff/Architect, Solo Founder...)

> Đúc kết từ checklist riêng cho Chapter 1 (Master Frontend). Bản này bỏ hết chi tiết riêng của Frontend, chỉ giữ lại phần **bất biến** — áp dụng được cho bất kỳ Chapter nào trong lộ trình Solo Fullstack, kể cả các Chapter chưa viết (Backend, DevOps, Nhánh A, Nhánh B).

---

## 0. NGUYÊN TẮC CỐT LÕI (không đổi dù đổi domain)

1. **Học ngang (project/case-based)** — mọi kiến thức phải gắn vào 1 sản phẩm/case thật, không học lý thuyết trôi nổi.
2. **"Đủ điều kiện" ≠ "Đã là chuyên gia"** — mỗi Chapter chỉ đưa học viên đến mức đủ để *bắt đầu* (đủ để pass phỏng vấn / đủ để tự vận hành), không phải mức thành thạo qua va chạm thực tế.
3. **Judgment dưới ràng buộc mơ hồ** quan trọng hơn checklist kiến thức thuần túy — mọi bài giảng phải có phần trade-off/quyết định, không chỉ liệt kê định nghĩa.
4. **AI Coding Agent phải được VERIFY, không chỉ dùng** — áp dụng mọi domain (code FE/BE, script DevOps, tài liệu Staff).
5. **Không hời hợt, nghiên cứu sâu** — mỗi checkbox trong bài giảng là 1 điều học viên phải giải thích lại được cho người khác.

---

## A. INPUT CONTEXT — Prompt phải xác định đủ trước khi sinh bài giảng

- [ ] **Domain/Khối đang học** (Frontend / Backend / DevOps / System Design / Nhánh A Staff / Nhánh B Founder...)
- [ ] **Vị trí trong Curriculum Map** của Khối đó — file/module nào, buổi thứ mấy trên tổng số buổi
- [ ] **Chủ đề gốc của buổi** — trích đúng từ tài liệu nguồn của Khối (không tự chế ngoài phạm vi)
- [ ] **Mục kiến thức chi tiết tương ứng** trong tài liệu gốc của Khối — trỏ đúng section, không suy diễn
- [ ] **Project/Case/Artifact đang triển khai song song** — bài học phải nối được vào sản phẩm thật (dự án code, hệ thống hạ tầng, tài liệu quyết định kỹ thuật, sản phẩm kinh doanh...)
- [ ] **Kiến thức buổi trước đã học** — để không lặp lại, chỉ liên kết 1 dòng
- [ ] **Mức độ ưu tiên** (Critical/High/Medium theo yêu cầu thị trường/JD/mục tiêu Chapter) — quyết định độ sâu cần đào
- [ ] **Loại bổ sung** nếu có hệ phân loại riêng của lộ trình (vd Loại A "nhúng vào project", Loại B "exercise độc lập", Loại C "mock interview/mock incident", Loại D "đọc + note")

---

## B. ĐỘ SÂU NỘI DUNG — Bất kể domain, bài giảng phải đạt các mức sau

- [ ] Mở đầu bằng **vấn đề/tình huống thực tế**, không mở bằng định nghĩa suông (vd không phải "DevOps là gì" mà là "Vì sao deploy lúc 2 giờ sáng lại rollback thất bại?")
- [ ] Có **cơ chế bên trong / nguyên lý vận hành**, không chỉ dạy thao tác bề mặt (vd không chỉ "chạy lệnh X" mà giải thích X làm gì bên dưới)
- [ ] Có **ít nhất 1 ví dụ thực hành cụ thể** (code, config, script, tài liệu mẫu...) ưu tiên case dễ gây hiểu sai/edge case hơn case cơ bản
- [ ] Có **Decision Table / so sánh trade-off** khi chủ đề có nhiều lựa chọn (công cụ, kiến trúc, chiến lược) — không dạy một chiều
- [ ] Có **Anti-pattern thực tế** — sai lầm phổ biến và tại sao sai, không phải anti-pattern chung chung
- [ ] Có phần **tóm tắt giải thích lại cho người khác** (Feynman) — nếu không tự giải thích được bằng lời thường, chưa đạt độ sâu
- [ ] Nếu chủ đề thuộc nhóm **rủi ro cao / khó đảo ngược** (Security, Production Incident, System Design, quyết định kinh doanh lớn...) → bắt buộc có **War Story / tình huống thực chiến**, không được bỏ qua dù rút gọn buổi học

---

## C. CẤU TRÚC BÀI GIẢNG — Khung 9 mục chuẩn, tái dùng cho mọi domain

1. **Vấn đề thực tế** (2–3 câu, tình huống mở đầu)
2. **Mục tiêu** (1 câu, đo lường được — học xong làm được gì)
3. **Input** (tài liệu đọc — chỉ trích từ danh sách nguồn được duyệt, 2–3 câu hỏi định hướng tự tìm đáp án)
4. **Process** (thực hành chính — có Decision Table + Anti-pattern nếu áp dụng được)
5. **Output** (artifact cụ thể phải hoàn thành — gắn vào Project/Case đang làm)
6. **Verify** (Feynman self-check + 3 câu hỏi kiểu phỏng vấn/đánh giá + Integration Check: kiến thức này nhúng vào đâu)
7. **Homework/Mini-exercise** (nếu buổi thuộc loại kiến thức nền không "làm" trực tiếp trong project được)
8. **War Story / Case thực chiến** (bối cảnh → quyết định → trade-off → bài học)
9. **Liên kết & Tiếp theo** (1 dòng nối buổi trước không lặp lại + 1 dòng "buổi sau học gì")

> Domain khác nhau chỉ đổi **loại artifact** ở mục 5 (xem bảng thích ứng ở mục G), khung 9 mục giữ nguyên.

---

## D. RÀNG BUỘC LỘ TRÌNH — Không phá vỡ tính nhất quán tổng thể

- [ ] Không dạy kiến thức **ngoài phạm vi Khối hiện tại** — nếu chủ đề chạm ranh giới Khối khác (vd BFF chạm Backend, CI/CD chạm DevOps), chỉ dạy phần thuộc Khối đang học, ghi rõ phần còn lại sẽ học ở Khối nào
- [ ] Không tự nhận học viên "đã thành thạo/senior/staff" sau 1 buổi — giữ đúng tinh thần "đủ điều kiện bắt đầu", kinh nghiệm thật chỉ tích lũy qua va chạm thực tế
- [ ] Các mục **rủi ro cao** của Khối đó (Security, System Design, Incident Response, Negotiation/Sales cho Founder...) **không được cắt gọn hay gộp buổi** dù tiến độ bị trễ — luôn ưu tiên hơn phần "ecosystem phụ"
- [ ] Giữ đúng thuật ngữ chuyên ngành gốc (song ngữ Việt–Anh nếu tài liệu gốc dùng song ngữ), không tự dịch sai lệch nghĩa kỹ thuật
- [ ] Chỉ generate **1 buổi/lần**, không tóm tắt trước buổi sau, không giảng lại buổi trước (trừ 1 dòng liên kết ở mục 9)

---

## E. OUTPUT FORMAT — Chuẩn xuất bản, áp dụng mọi domain

- [ ] Có frontmatter/metadata đúng chuẩn hệ thống đang dùng (vd SEO Astro: title, description, sidebar.order) nếu lộ trình yêu cầu
- [ ] Heading phân cấp rõ ràng, code/config block gắn đúng ngôn ngữ (```ts, ```bash, ```yaml...)
- [ ] Checklist con dùng `- [ ]` nhất quán toàn tài liệu
- [ ] Độ dài phù hợp với thời lượng 1 buổi học thực tế (thường 90–120 phút) — không dài như 1 chương sách, không sơ sài như slide
- [ ] Nguồn trích dẫn chỉ lấy từ danh sách tài liệu đã được duyệt cho Khối đó; nguồn ngoài danh sách phải ghi rõ "nguồn bổ sung, cần verify"

---

## F. SELF-CHECK TRƯỚC KHI XUẤT (bắt buộc chạy qua trước khi trả lời)

- [ ] Nội dung có bám sát đúng tài liệu nguồn của Khối, không lan man ngoài phạm vi?
- [ ] Học viên đọc xong có tự trả lời được câu hỏi Verify mà không cần mở lại bài?
- [ ] Buổi học có tạo ra artefact cụ thể đóng góp vào Project/Deliverable/Case đang làm, không phải bài tập lơ lửng?
- [ ] Buổi học có trùng lặp nội dung với buổi liền trước không? Nếu có → sửa lại.
- [ ] Nếu chủ đề rủi ro cao (Security/Incident/Quyết định kinh doanh) → đã có War Story, chưa bỏ sót?
- [ ] Artifact/loại đầu ra đã đúng bản chất domain (xem bảng G) chưa, hay đang áp khuôn Frontend vào Backend/DevOps/Career một cách máy móc?

---

## G. BẢNG THÍCH ỨNG THEO DOMAIN (chỉ đổi phần này, khung 9 mục ở C giữ nguyên)

| Domain | Loại artifact ở mục Output | Loại "War Story" | Input/Tài liệu ưu tiên |
|--------|----------------------------|-------------------|------------------------|
| **Frontend** | Component/feature chạy được trong project FE | Bug UI, deadline, code review, AI output sai | Docs framework, sách JS/TS, blog kỹ thuật |
| **Backend** | API endpoint/migration/job chạy được, có test | Data corruption, race condition, outage do thiếu idempotency | Docs framework BE, sách DB/design pattern, RFC |
| **DevOps** | Pipeline/script/infra config chạy được, có rollback plan | Incident production, deploy fail, mất log/backup | Docs cloud/CI-CD, runbook mẫu, postmortem thật |
| **System Design (mọi domain)** | Bản thiết kế theo framework chuẩn (vd RADIO cho FE, C4/ADR cho hệ thống) | Trade-off bị hỏi ngược trong phỏng vấn/review kiến trúc | Sách system design, case study công ty lớn |
| **Nhánh A — Staff/Architect** | ADR, tài liệu review, buổi mock interview có ghi âm | Xung đột kỹ thuật với đồng nghiệp/PM, quyết định kiến trúc sai | Sách quản lý kỹ thuật, case interview thật |
| **Nhánh B — Solo Founder** | Bản validate ý tưởng, landing page test, kịch bản outreach | Pivot thất bại, mất khách hàng đầu, sai lầm định giá | Sách lean startup, case study founder kỹ thuật |

---

## H. QUY TRÌNH ÁP DỤNG (cách dùng checklist này cho Chapter mới)

1. Khi bắt đầu 1 Chapter mới (Backend/DevOps/...), copy checklist này làm **khung self-check** cho prompt sinh bài giảng của Chapter đó.
2. Điền phần **A. Input Context** bằng Curriculum Map + tài liệu nguồn riêng của Chapter mới.
3. Tra bảng **G** để xác định loại artifact/War Story phù hợp domain, thay vào mục **C.5** và **C.8** của khung 9 mục.
4. Giữ nguyên toàn bộ mục **B, D, E, F** — đây là phần bất biến không phụ thuộc domain.
5. Trước khi xuất mỗi buổi học, luôn chạy self-check mục **F**; nếu fail bất kỳ mục nào, tự sửa trước khi trả lời.