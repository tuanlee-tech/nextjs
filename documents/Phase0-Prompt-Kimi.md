# Prompt Phase 0 — Kimi K2.6 Thinking

Bạn là Principal [Techstack] Engineer kiêm Curriculum Architect. Bạn đã từng onboard Fresher thành Staff Engineer trong công ty, và bạn theo dõi JD thị trường tuyển dụng [Techstack] hàng tuần.

Nhiệm vụ: Thiết kế MASTER CURRICULUM BIBLE cho khóa học Universal Engineer Mastery Program.

Techstack: [ĐIỀN]
Vai trò: [ĐIỀN]
Target mới nhất: [ĐIỀN]
Prerequisite ngoài luồng: [ĐIỀN: học viên đã biết gì TRƯỚC KHI học Techstack này]

---

## PHẦN 1: FULL EVOLUTION TIMELINE ANALYSIS

1.1. Liệt kê toàn bộ phiên bản [Techstack] từ đầu đến [target mới nhất]:
   - Mỗi version: release year, đặc trưng kiến trúc chính, problem nó giải quyết
   - Đánh dấu: [MAJOR SHIFT] nếu version này thay đổi paradigm
   - Đánh dấu: [DEPRECATED] nếu feature bị bỏ hoàn toàn
   - Đánh dấu: [STILL_ALIVE] nếu codebase production vẫn dùng

1.2. Phân loại từng version:
   - [HISTORY_ONLY]: Chỉ cần biết từng tồn tại, không cần học để maintain. Dùng trong M0.2 (timeline) và Terminology Evolution.
   - [REFERENCE_ONLY]: Có thể gặp trong codebase cũ nhưng ít, chỉ cần nhận diện. Dùng trong M2 (Legacy) nhưng không đào sâu.
   - [LEGACY_CORE]: Vẫn tồn tại nhiều trong production, cần học để maintain và migrate. Đây là **legacy chuyên sâu**.
   - [TRANSITIONAL]: Giai đoạn chuyển đổi, có cả old và new pattern song song. Cần hiểu để đọc codebase hybrid.
   - [MODERN]: Target hiện tại, dạy chính.

1.3. Với mỗi [HISTORY_ONLY] và [REFERENCE_ONLY], giải thích:
   - Tại sao bị thay thế? (không phải "cũ rồi" — phải có lý do kiến trúc)
   - Thay thế bởi gì ở version nào?
   - Có terminology nào từ era này vẫn được dùng sai nghĩa không?

---

## PHẦN 2: JOB MARKET & JD ANALYSIS

2.1. Phân tích JD [Techstack] hiện nay trên thị trường (dựa trên kiến thức của bạn đến 2026):
   - % JD yêu cầu [LEGACY_CORE] version: [ước tính]
   - % JD yêu cầu [TRANSITIONAL] version: [ước tính]
   - % JD yêu cầu [MODERN] version: [ước tính]
   - % JD yêu cầu "có kinh nghiệm migrate": [ước tính]

2.2. Các công ty archetype và techstack version họ dùng:
   - Startup mới (founded 2024-2026): thường dùng gì?
   - Scale-up (đang grow nhanh): thường dùng gì? Đang migrate từ đâu?
   - Enterprise lớn (bank, telecom, enterprise SaaS): thường dùng gì? Maintain gì?
   - Agency / Outsourcing: thường phải đụng codebase gì?

2.3. "Khoảng trống kiến thức" thị trường đang thiếu:
   - Skill nào JD yêu cầu nhiều nhưng engineer hiện tại thường không có?
   - Đây là cơ hội để khóa học của tôi "đắt giá" hơn.

2.4. Quyết định LEGACY_CORE:
   - Dựa trên phân tích trên, version nào là [LEGACY_CORE] — tức là version cần dạy CHUYÊN SÂU để học viên có thể maintain và migrate?
   - Giải thích lý do: tại sao chọn version này, không phải version khác?
   - Nếu có 2 version đều "sống" trên thị trường, xử lý thế nào?

---

## PHẦN 3: LEVEL ASSESSMENT & PATH DESIGN

3.1. Đánh giá độ sâu Techstack:
   - [Techstack] là "thin tool" hay "thick platform"?
   - Có bao nhiêu "era" kiến thức cần cover (Fresher → Junior → Mid → Senior → Staff)?
   - Từ [level mặc định: Fresher/Junior] lên Staff/Architect cần bao nhiêu module?

3.2. Thiết kế Level Progression:
   - M0-M?: Fresher/Junior level (syntax, basics, first app)
   - M?-M?: Mid level (patterns, debugging, real codebase)
   - M?-M?: Senior level (system design, performance, trade-offs)
   - M?-M?: Staff/Architect level (legacy migration, architecture, mentoring, interview)
   Ghi rõ module nào thuộc level nào.

3.3. Nếu học viên ở level cao hơn Fresher:
   - Module nào có thể skip hoặc rút gọn?
   - Module nào bắt buộc vẫn phải học vì "mọi Senior đều hiểu sai phần này"?

---

## PHẦN 4: MODULE LIST & DEPENDENCY GRAPH

4.1. Liệt kê đầy đủ M0 → M[N-1]. Không ép số. Tự đánh giá N bao nhiêu là đủ.

4.2. Với mỗi module, ghi:
   - Module Name
   - Level (Fresher / Junior / Mid / Senior / Staff)
   - Prerequisite modules (bắt buộc học xong trước)
   - Unlocks modules (sau khi học xong mở khóa module nào)
   - Có thể song song với module nào?

4.3. Vẽ dependency graph dạng text:
   M0 → M1 → M2
         ↘ M3 → M4

---

## PHẦN 5: CHI TIẾT TỪNG BÀI HỌC — CURRICULUM BIBLE

Format MỖI BÀI:

```
### M{x}.{y}: [Tên bài]

**Level:** [Fresher/Junior/Mid/Senior/Staff]
**Module:** M{x}
**Prerequisite:** [Liệt kê M{a}.{b} đã học xong]
**Unlocks:** [M{c}.{d} có thể học sau]
**Parallel-safe:** [Có thể học song song với M{e}.{f} không?]

---
**Learning Objectives (Đo đếm được):**
Sau bài này, học viên PHẢI có thể:
1. [Objective 1 — cụ thể, không mơ hồ]
2. [Objective 2]
3. [Objective 3]

---
**Topics (Nội dung CHÍNH XÁC cần cover):**
- [Topic 1]: [Mô tả ngắn, giới hạn scope]
- [Topic 2]: [Mô tả ngắn, giới hạn scope]
- [Topic 3]: [Mô tả ngắn, giới hạn scope]

---
**Depth Level:** [1-5]
- 1 = Nhắc lại / Reference / Biết tên là đủ
- 2 = Hiểu concept, không cần code
- 3 = Giải thích đầy đủ, code ví dụ
- 4 = Đào sâu implementation, debug production
- 5 = Design trade-off, architect decision, source code level

---
**Anti-Patterns CẦN cover (số lượng cụ thể):**
- [Tên anti-pattern 1]: [Mô tả ngắn] → [Cách Staff làm]
- [Tên anti-pattern 2]: [Mô tả ngắn] → [Cách Staff làm]
- [Tên anti-pattern 3]: [Mô tả ngắn] → [Cách Staff làm]

---
**Terminology CẦN dạy:**
- [Term 1]: [Era nào dùng, status hiện tại, meaning đổi không?]
- [Term 2]: [Era nào dùng, status hiện tại, meaning đổi không?]

---
**Overlap Lock (KHÔNG ĐƯỢC ĐỤNG VÀO Ở BÀI NÀY):**
- [Topic A]: Thuộc về M{x}.{y+1} — bài này chỉ được nhắc qua, không giải thích
- [Topic B]: Thuộc về M{x+1}.{z} — bài này KHÔNG ĐƯỢC đề cập
- [Topic C]: Thuộc về M{x-1}.{w} — đã học rồi, bài này chỉ dùng như prerequisite

---
**Production Scenarios CẦN cover:**
- [Scenario 1]: [Mô tả ngắn symptom → root cause]
- [Scenario 2]: [Mô tả ngắn]

---
**Interview Questions CẦN chuẩn bị (loại câu hỏi, không cần viết đáp án):**
- [Câu hỏi 1 — level nào hỏi?]
- [Câu hỏi 2 — level nào hỏi?]

---
**Legacy Bridge (nếu applicable):**
- Legacy API/Pattern: [Tên]
- Modern tương đương: [Tên]
- Migration strategy nằm ở bài nào: [M{x}.{y}]

---
**Risk Flag:**
- [Học viên dễ stuck ở đâu? Cần bài tập gì để giữ momentum?]
```

YÊU CẦU BẮT BUỘC CHO PHẦN 5:
- KHÔNG để 2 bài cùng cover 1 topic ở cùng depth.
- KHÔNG để bài sau "lấn" sang nội dung bài trước (dùng Overlap Lock).
- Anti-patterns phải liệt kê đủ số lượng — Z.ai sẽ research theo list này, không được tự thêm.
- Terminology phải liệt kê đầy đủ — để tránh Z.ai thu thập thiếu hoặc thừa.
- Mỗi bài phải có Risk Flag để Kimi biết chỗ nào cần thiết kế exercise cẩn thận.
- Nếu bài ở level Fresher/Junior: scope phải nhỏ, không assume kiến thức.
- Nếu bài ở level Senior/Staff: có thể assume kiến thức từ bài trước, focus vào trade-offs và architecture.

---

## PHẦN 6: ANTI-OVERLAP AUDIT TOÀN KHÓA

Liệt kê 5-10 cặp module có nguy cơ overlap CAO NHẤT toàn khóa học.

Format:
```
- [Concept X]: 
  - Ownership: M{a}.{b} (dạy chính ở depth [n])
  - M{c}.{d} chỉ được reference như sau: [cách reference cho phép]
  - M{e}.{f} KHÔNG ĐƯỢC đề cập
```

---

## PHẦN 7: TERMINOLOGY EVOLUTION MAP TOÀN KHÓA

Bảng tổng hợp: Term | Era đầu | Era cuối | Status | Dạy ở bài nào | Nhắc lại ở bài nào

---

## PHẦN 8: CAPSTONE / FINAL PROJECT SCOPE

Nếu có module cuối là Capstone:
- Tích hợp những gì từ toàn bộ curriculum?
- Scenario thực tế cụ thể (không phải "làm 1 app đơn giản")?
- Phải bao gồm: legacy codebase → migrate → modern architecture

---

## PHẦN 9: RISK FLAGS TOÀN KHÓA

3 điểm trong toàn bộ curriculum mà học viên dễ:
- Tụt hứng (boring / too abstract)
- Quá tải (too much too fast)
- Hiểu nhầm (counter-intuitive concept)

Đề xuất điều chỉnh cho từng điểm.

---

QUY TẮC:
- Triết lý: Pain Point → Cách cũ → Thất bại → Cách mới → Trade-offs → Production Reality → Migration → Interview Perspective
- Mỗi module phải có lý do tồn tại riêng biệt. Không "điền cho đủ".
- Nếu 2 module có thể gộp — nói rõ tại sao. Nếu cần tách thêm — nói rõ tại sao.
- Terminology: Giữ tiếng Anh cho tech terms. Giải thích tiếng Việt cho architectural reasoning.
- KHÔNG hỏi lại tôi bất kỳ câu nào. Tự đánh giá, tự quyết định, tự chịu trách nhiệm.
- Output markdown thuần. Không lời dẫn. Không "Dưới đây là...".
- Kimi có context window 262K tokens — hãy tận dụng tối đa để output chi tiết, không cắt bớt.
