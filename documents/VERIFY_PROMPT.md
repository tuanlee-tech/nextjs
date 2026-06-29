# VERIFY PROMPT

## Mục tiêu

Kiểm tra toàn bộ bài giảng Next.js đã tạo, phát hiện và phân loại mọi vấn đề về factual accuracy, temporal context, internal consistency, và completeness.

---

## QUY TRÌNH VERIFY — 5 BƯỚC BẮT BUỘC

### BƯỚC 1: Factual Verification

- Đọc toàn bộ bài giảng
- List tất cả factual claims (timeline, version, số liệu, tên người, capability)
- Với mỗi claim, verify bằng web_search nếu chưa có nguồn rõ ràng
- Đánh dấu: ✅ Verified / ⚠️ Unverified / ❌ Conflicted

### BƯỚC 2: Temporal Context Check

- Với mỗi thông tin kỹ thuật, xác định:
  - Thời điểm thông tin này ĐÚNG
  - Thời điểm thông tin này CÒN ĐÚNG không
  - Nếu đã lỗi thời: có được đánh dấu "đã lỗi thời" + thông tin mới không?
- Đặc biệt chú ý các khái niệm: "two-wave indexing", "Googlebot không render JS", "Pages Router era"

### BƯỚC 3: Internal Consistency Check

- Đọc lại toàn bộ bài từ đầu đến cuối
- Kiểm tra:
  - Timeline nào mâu thuẫn không? (ví dụ: App Router stable 2023 nhưng Pages Router "era kết thúc 2022")
  - Capability nào mâu thuẫn không? (ví dụ: "CSR = SEO death" ở phần này nhưng "Googlebot đã render JS" ở phần khác)
  - Terminology nào không nhất quán? (ví dụ: "two-wave indexing" vs "two wave indexing")
  - "Best practice" nào được trình bày như universal nhưng thực ra chỉ đúng trong context cụ thể?

### BƯỚC 4: Edge Case & Exception Check

- Kiểm tra:
  - Có exception nào quan trọng không được mention? (ví dụ: ChatGPT Operator render JS)
  - Có "it depends" nào bị bỏ qua không? (ví dụ: "AI crawlers không render JS" — đúng cho GPTBot nhưng sai cho Operator)
  - Có giả định ngầm nào không được explicit hóa? (ví dụ: giả định "Google = tất cả search engines")

### BƯỚC 5: Completeness Check

- Kiểm tra:
  - Có thông tin quan trọng nào bị thiếu? (ví dụ: số liệu AI crawlers, Google drop JS SEO warning)
  - Có "cập nhật 2025-2026" nào cần thêm?
  - Có link/reference nào cần bổ sung?

---

## PHÂN LOẠI VẤN ĐỀ — 4 LOẠI

### LOẠI 1: Factual Error (Sai sự thật)

- Định nghĩa: Thông tin không đúng tại BẤT KỲ thời điểm nào
- Severity: 🔴 P0 — Sửa ngay
- Ví dụ: "Next.js 1.0 release 2015", "CRA release 2015"

### LOẠI 2: Temporal Error (Sai thời điểm / Đã lỗi thời)

- Định nghĩa: Thông tin ĐÚNG tại thời điểm X nhưng KHÔNG CÒN ĐÚNG hiện tại, và KHÔNG được đánh dấu là lỗi thời
- Severity: 🟡 P1 — Bổ sung context + thông tin mới
- Ví dụ: "Two-wave indexing" không được đánh dấu lỗi thời; "Googlebot không render JS" không có disclaimer

### LOẠI 3: Internal Inconsistency (Mâu thuẫn nội bộ)

- Định nghĩa: Hai claim trong bài mâu thuẫn nhau
- Severity: 🟡 P1 — Sửa để thống nhất
- Ví dụ: "Pages Router era 2016-2022" vs "Pages Router vẫn được support"

### LOẠI 4: Missing Information (Thiếu thông tin)

- Định nghĩa: Thông tin quan trọng cần có nhưng bị bỏ qua
- Severity: 🟢 P2 — Bổ sung nếu có thời gian
- Ví dụ: Thiếu mention ChatGPT Operator, thiếu số liệu AI crawlers, thiếu Google drop JS SEO warning

---

## OUTPUT FORMAT

### NẾU CÓ LỖI (Loại 1, 2, hoặc 3):

```markdown
# Kết Quả Kiểm Tra: [Tên bài]

## Tổng Quan

| Loại                            | Số lượng | Severity |
| ------------------------------- | -------- | -------- |
| Factual Error (Loại 1)          | X        | 🔴 P0    |
| Temporal Error (Loại 2)         | X        | 🟡 P1    |
| Internal Inconsistency (Loại 3) | X        | 🟡 P1    |
| Missing Information (Loại 4)    | X        | 🟢 P2    |

---

## 🔴 P0 — Factual Errors (Sửa ngay)

### #[Số thứ tự]

**Trích đoạn sai:**
&gt; [paste đoạn text sai]

**Giải thích:**
[Giải thích tại sao sai, nguồn verify]

**Rewrite:**
&gt; [viết lại đúng]

---

## 🟡 P1 — Temporal Errors (Bổ sung context)

### #[Số thứ tự]

**Trích đoạn:**
&gt; [paste đoạn text]

**Vấn đề:**
Thông tin này đúng tại [thời điểm] nhưng đã lỗi thời từ [năm]. Hiện tại: [thông tin mới].

**Bổ sung cần thiết:**
&gt; [viết đoạn cần thêm vào, bao gồm cả thông tin cũ và mới]

---

## 🟡 P1 — Internal Inconsistencies (Sửa thống nhất)

### #[Số thứ tự]

**Claim A:**
&gt; [paste claim 1]

**Claim B:**
&gt; [paste claim 2]

**Mâu thuẫn:**
[Giải thích tại sao mâu thuẫn]

**Sửa:**
&gt; [viết lại thống nhất]

---

## 🟢 P2 — Missing Information (Nên bổ sung)

### #[Số thứ tự]

**Vị trí cần bổ sung:**
[Section name, gần đoạn nào]

**Nội dung cần bổ sung:**
&gt; [viết đoạn cần thêm]

**Lý do:**
[Giải thích tại sao cần bổ sung]

---

## Hành Động Đề Xuất

| Priority | Hành động   | Vị trí   |
| -------- | ----------- | -------- |
| P0       | [hành động] | [vị trí] |
| P1       | [hành động] | [vị trí] |
| P2       | [hành động] | [vị trí] |
```
