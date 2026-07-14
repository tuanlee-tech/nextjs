# PROMPT TẠO NỘI DUNG CHI TIẾT CHO TỪNG CHẶN
## Lộ trình: Solo Fullstack — Từ React đến Staff/Architect hoặc Solo Founder

---

## NGỮ CẢNH TỔNG QUAN (ĐÃ CÓ SẴN)

Bạn đang viết nội dung cho một lộ trình học fullstack chi tiết, được chia thành 5 chặn. Chương Tổng Quan đã hoàn thành, định nghĩa:
- 3 Khối Lõi Chung (Master FE, Master BE, DevOps cơ bản)
- 2 Nhánh rẽ: A (Staff/Architect) và B (Solo Founder)
- Nguyên tắc học theo chiều ngang (Project-based)
- Điểm rẽ nhánh dựa trên hoàn cảnh thực tế

---

## NHIỆM VỤ

Viết nội dung chi tiết cho **CHẶN [SỐ]: [TÊN CHẶN]** dưới dạng file Markdown hoàn chỉnh, có thể đưa vào học và thực hành ngay.

Nếu nội dung quá dài thì phải chia 2-3 response và hỏi ý review trước khi làm.

---

## CẤU TRÚC BẮT BUỘC CỦA FILE CHẶN

### PHẦN 1: MỤC TIÊU & THÔNG TIN CHẶN
- Mục tiêu đạt được sau chặn này
- Thời gian dự kiến
- Milestone (có thể làm gì sau chặn — ví dụ: xin việc, deploy MVP, v.v.)
- Kiến thức nào thuộc Lõi Chung, kiến thức nào thuộc Nhánh A/B (nếu có)

### PHẦN 2: DANH MỤC KIẾN THỨC + QUYẾT ĐỊNH CÔNG NGHỆ

Mỗi nhóm kiến thức phải có:

```
#### [TÊN NHÓM KIẾN THỨC]

**Vấn đề cần giải quyết:** [Mô tả ngắn gọn]

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| [Tech A] | [Scenario] | [Scenario] |
| [Tech B] | [Scenario] | [Scenario] |

**Quyết định mặc định:** [Chọn gì + lý do]
**Khi nào chọn khác:** [Exception cases]
**Anti-pattern / Sai lầm thường gặp:** [Liệt kê]

- [ ] **Checklist chi tiết:**
  - [ ] Mục con 1
  - [ ] Mục con 2
```

Yêu cầu:
- Mỗi tech phải có lý do chọn hoặc không chọn — không liệt kê khô khan
- So sánh trade-offs rõ ràng
- Anti-pattern phải là lỗi thực tế hay gặp, không phải lý thuyết chung chung
- Checklist phải đủ chi tiết để tự học — không chung chung như "Học React Query"

### PHẦN 3: HỆ THỐNG PROJECT THỰC CHIẾN

Mỗi project phải có:

```
#### PROJECT [SỐ]: [TÊN PROJECT]

**Business context:** [Tại sao project này tồn tại — không phải "để học"]
**Vấn đề giải quyết:** [Pain point thực tế]
**Người dùng/target:** [Ai dùng sản phẩm này]

**Tech stack + Lý do chọn:**

| Tech | Lý do chọn | Thay thế đã cân nhắc & tại sao không chọn |
|------|-----------|------------------------------------------|
| [Tech] | [Lý do] | [Tech B: vì...] |

**Kiến thức tự nhiên cover:** [Không nhét — chỉ liệt những gì thực sự cần dùng]
**Deliverable:** [Sản phẩm cụ thể có thể demo]
**Production-ready checklist:** [Deploy, test, monitoring, docs...]
```

Yêu cầu:
- Tối thiểu 4 project, tối đa 6 project
- Mỗi project phải là sản phẩm thật, không phải "bài tập"
- Complexity tăng dần
- Kiến thức phân bổ đều — không project nào cover quá ít hoặc quá nhiều
- Mỗi tech trong stack phải có lý do chọn cụ thể

### PHẦN 4: LỘ TRÌNH THỰC HIỆN

```
Tháng X: [Tên project chính]
├── Tuần 1: [Mục tiêu cụ thể]
├── Tuần 2: [Mục tiêu cụ thể]
├── Tuần 3: [Mục tiêu cụ thể]
├── Tuần 4: [Mục tiêu cụ thể]
└── Song song: [Kiến thức lý thuyết học cùng]
```

Yêu cầu:
- Lộ trình theo tuần, không chung chung theo tháng
- Mỗi tuần có deliverable cụ thể
- Ghi rõ kiến thức lý thuyết học song song với project

### PHẦN 5: CHECKLIST XIN VIỆC / ĐÁNH GIÁ

- [ ] Các câu hỏi phỏng vấn phải trả lời được sau chặn này
- [ ] Các project phải có trên GitHub với đầy đủ: README, demo link, test coverage
- [ ] Các skill phải demonstrate được qua project
- [ ] Các lỗi thường gặp trong phỏng vấn và cách tránh

### PHẦN 6: TÀI LIỆU THAM KHẢO

- Sách, documentation, course cụ thể cho từng nhóm kiến thức
- Video, blog post, repo mẫu
- Phân loại: Bắt buộc đọc / Nên đọc / Tham khảo

---

## NGUYÊN TẮC VIẾT

1. **Không hời hợt:** Mỗi checklist item phải đủ chi tiết để tự học — ví dụ không viết "Học Redux" mà viết "Hiểu createSlice auto-generate action types và reducers, biết so sánh với createReducer + createAction"

2. **Quyết định rõ ràng:** Mỗi lựa chọn công nghệ phải có lý do, có trade-off, có scenario dùng và không dùng

3. **Project là sản phẩm thật:** Mỗi project có business context, pain point, target user — không phải "để học tech X"

4. **Không nhét kiến thức:** Kiến thức cover trong project phải là thứ thực sự cần dùng — nếu không cần thì không cover

5. **Production-ready:** Mỗi project có checklist deploy, test, monitoring, docs — không dừng ở "chạy local"

6. **JD-aware:** Nội dung phải đáp ứng yêu cầu từ JD thực tế đã phân tích — không viết lý thuyết suông

7. **Solo Startup mindset:** Luôn hỏi "Nếu tôi tự làm startup, tôi có dùng cái này không?" — nếu không thì giải thích tại sao vẫn cần học

---

## ĐỊNH DẠNG OUTPUT

- File Markdown (.md)
- Tiêu đề H1 cho tên chặn
- Các phần dùng H2
- Nhóm kiến thức dùng H3
- Checklist dùng bullet + checkbox `- [ ]`
- Bảng dùng Markdown table
- Code snippet dùng fenced code block với language
- Không dùng HTML thô
- Không dùng emoji quá nhiều — tối đa 1 emoji mỗi section

---

## VÍ DỤ MINH HỌA (PHẦN NHỎ)

```markdown
#### State Management — Client State

**Vấn đề:** UI cần chia sẻ data giữa nhiều component không có quan hệ cha-con, cần reactivity, có thể cần persist.

| Lựa chọn | Khi nào dùng | Khi nào KHÔNG dùng |
|----------|-------------|-------------------|
| React Context + useReducer | State đơn giản, < 5 component dùng, không cần middleware | State phức tạp, nhiều component, cần time-travel debug |
| Zustand | Startup, small team, ít boilerplate, cần nhanh | Enterprise cần strict pattern, team quen Redux |
| Redux Toolkit | Enterprise, team lớn, codebase legacy, cần DevTools | Project nhỏ, team 1-2 người, muốn ít boilerplate |

**Quyết định mặc định cho Solo Startup:** Zustand — vì ít boilerplate, dễ setup, đủ cho 90% use case.
**Khi nào chọn Redux:** Khi maintain codebase enterprise đã có Redux, hoặc team yêu cầu strict pattern.
**Anti-pattern:** Đưa mọi state vào global store — form local state nên giữ trong component.

- [ ] **Zustand chi tiết:**
  - [ ] `create()` store với TypeScript generics
  - [ ] Slice pattern: tách store thành authSlice, cartSlice, themeSlice
  - [ ] Middleware: `persist` (localStorage), `devtools` (Redux DevTools compat)
  - [ ] `subscribe` pattern cho external events (ví dụ: sync với BroadcastChannel)
  - [ ] So sánh với Redux: khi nào dùng cái nào, trade-offs
```

---

## LƯU Ý QUAN TRỌNG

- Đây là **chặn chi tiết** — không phải tổng quan. Mỗi mục phải đủ để người đọc tự học và thực hành.
- Nếu kiến thức nào đã có trong chặn trước, không lặp lại — chỉ reference.
- Nếu kiến thức nào cần cho chặn sau, ghi chú "Sẽ approfondir ở Chặn X".
- Giữ nguyên ngôn ngữ tiếng Việt, thuật ngữ kỹ thuật giữ nguyên tiếng Anh.
