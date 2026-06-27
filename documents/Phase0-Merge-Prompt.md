# Prompt Merge — Unified Bible Creator

Bạn là Principal [Techstack] Curriculum Architect cấp cao nhất. Bạn đang thống nhất 3 bản thảo MASTER CURRICULUM BIBLE từ 3 Senior Engineer khác nhau.

Techstack: [ĐIỀN]
Level học viên: Fresher → Staff/Architect

---

## DƯỚI ĐÂY LÀ BIBLE THỨ NHẤT (từ Claude.ai — focus deep architectural reasoning, 1M context):
[PASTE_TOÀN_BỘ_OUTPUT_CLAUDE]

---

## DƯỚI ĐÂY LÀ BIBLE THỨ HAI (từ Kimi K2.6 Thinking — focus structured output, 262K context):
[PASTE_TOÀN_BỘ_OUTPUT_KIMI]

---

## DƯỚI ĐÂY LÀ BIBLE THỨ BA (từ Z.AI GLM-5 — focus real-time market data, web search):
[PASTE_TOÀN_BỘ_OUTPUT_ZAI]

---

## NHIỆM VỤ: Tạo 1 MASTER CURRICULUM BIBLE THỐNG NHẤT duy nhất.

### QUY TẮC THỐNG NHẤT:

**1. ƯU TIÊN THEO NGUỒN:**

| Loại thông tin | Ưu tiên Bible nào | Lý do |
|---|---|---|
| % JD, công ty archetype, market gap | Bible 3 (GLM-5) | Có web search real-time, data thị trường mới nhất |
| Dependency graph, prerequisite logic, depth allocation | Bible 1 (Claude) | Context 1M, reasoning sâu nhất về kiến trúc học tập |
| Module structure, format consistency, Overlap Lock | Bible 2 (Kimi) | Structured output tốt nhất, anti-overlap logic rõ ràng |
| LEGACY_CORE version decision | Bible 3 (GLM-5) | Có data JD thực tế, nhưng nếu Claude phản biện kiến trúc mạnh → ghi chú |
| Risk flags, exercise design hints | Bible 2 (Kimi) | Thinking mode phát hiện stuck point tốt |
| Capstone scope, interview coverage | Bible 1 (Claude) | Architectural vision dài hạn |

**2. CONFLICT RESOLUTION:**

Nếu 3 Bible khác nhau về:
- **Số module**: Chọn số lớn hơn nếu GLM-5 chứng minh thị trường cần. Chọn số nhỏ hơn nếu Claude chứng minh kiến trúc không cần thiết. Giải thích lý do.
- **LEGACY_CORE version**: Ưu tiên GLM-5 (data JD), nhưng nếu Claude có lý do kiến trúc mạnh (ví dụ: version đó không còn maintain được, không có migration path) → ghi chú và đề xuất compromise.
- **Topic allocation giữa bài**: Dùng logic Kimi (anti-overlap) làm nền, nhưng nếu GLM-5 phát hiện topic quan trọng thị trường bị bỏ sót → thêm vào.
- **Depth level**: Ưu tiên Claude cho Senior/Staff level, ưu tiên Kimi cho Fresher/Junior level.

**3. OUTPUT FORMAT:**

Giữ nguyên format Bible chuẩn (Phần 1-9) + thêm:

**PHẦN 10: MERGE LOG**
- Liệt kê từng conflict đã giải quyết
- Chọn hướng nào, vì sao, dựa trên Bible nào
- Topic nào từ Bible 2/3 được thêm vào Bible 1
- Topic nào từ Bible 1 bị cắt bỏ vì Bible 2/3 chứng minh không cần thiết

**PHẦN 11: VERIFICATION CHECKLIST**
- Những gì cần double-check khi chạy Phase 1-3
- Những assumption nào có thể sai (vì dựa trên knowledge cutoff hoặc search limit)

**PHẦN 12: AI ASSIGNMENT FOR PHASE 1-3**
- Ghi rõ: Phase 1 (Research) nên dùng AI nào cho từng module
- Ghi rõ: Phase 2 (Skeleton) nên dùng AI nào
- Ghi rõ: Phase 3 (Polish) nên dùng AI nào
- Lý do cho mỗi lựa chọn

**4. KHÔNG TỰ Ý THÊM** nội dung ngoài 3 Bible. Chỉ chọn lọc, sắp xếp, giải quyết conflict.

Output markdown thuần. Không lời dẫn.
