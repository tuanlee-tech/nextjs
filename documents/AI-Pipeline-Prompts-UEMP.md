# 🗺️ AI PIPELINE: TẠO KHÓA HỌC LẬP TRÌNH STAFF-LEVEL

> Pipeline: Phase 0 (Kimi + Z.ai) → Phase 1 (Z.ai) → Phase 2 (Kimi) → Phase 3 (Claude)
> Output: File markdown bài giảng production-ready

---

## 📋 TRƯỚC KHI BẮT ĐẦU

Tạo 1 file `COURSE_CONFIG.md` để bên cạnh. Đây là clipboard của bạn, chỉ để bạn copy-paste nhanh vào placeholder `[ĐIỀN]` trong các prompt. AI không đọc file này.

```markdown
Techstack: [Node.js/Express / Vue.js / Docker / React / ...]
Vai trò: [Backend Framework / Frontend Framework / DevOps Tool / ...]
Legacy: [Express 3.x / Vue 2 / Không applicable]
Target: [Express 5 / Vue 3 / Latest]
Level học viên mặc định: Fresher/Junior (mới biết hoặc chưa hề biết Techstack)
Level mục tiêu: Staff/Architect
Prerequisite ngoài luồng: [JavaScript ES6+ / Python / Linux cơ bản / ...]
Độ sâu techstack: [Thin tool / Medium / Thick platform]
```

## 🔄 Pipeline hoàn chỉnh

```
Phase 0 (Kimi + Z.ai): Tự đánh giá timeline + JD + quyết định LEGACY_CORE
    ↓
[File] MASTER-CURRICULUM-BIBLE-[Techstack].md
    ↓
Phase 1 (Z.ai): Research theo đúng list Bible (đã biết LEGACY_CORE là gì)
    ↓
Phase 2 (Kimi): Skeleton theo đúng 14 sections
    ↓
Phase 3 (Claude): Viết bài hoàn chỉnh
    ↓
File markdown → VitePress
```


---

# 🔴 PHASE 0: MASTER CURRICULUM BIBLE (1 prompt duy nhất)

**Mục đích:** Claude tự đánh giá toàn bộ timeline tiến hóa, phân tích JD thị trường, tự quyết định ver legacy nào đáng dạy chuyên sâu, và xây dựng curriculum từ level học viên lên Staff/Architect.

**Khi nào dùng:** Một lần duy nhất trước khi tạo bài giảng đầu tiên.


**Output:** Lưu thành `MASTER-CURRICULUM-BIBLE-[Techstack].md`. File này là **Source of Truth duy nhất** — các AI sau không được tự quyết định nội dung.



---

## Prompt Phase 0

````
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
   - Nếu có 2 version đều "sống" trên thị trường (ví dụ: Next.js 12 và 13 cùng tồn tại), xử lý thế nào?

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
   (hoặc dùng mermaid nếu bạn muốn)

---

## PHẦN 5: CHI TIẾT TỪNG BÀI HỌC — CURRICULUM BIBLE

Đây là PHẦN QUAN TRỌNG NHẤT. Với mỗi M{x}.{y}, bạn phải định nghĩa CHÍNH XÁC những gì cần học.

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
(Không cần viết chi tiết, chỉ liệt kê để Z.ai research đúng)

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

KIỂM CHỨNG TRI THỨC (Knowledge Verification Protocol)

Trước khi viết bất kỳ khái niệm kỹ thuật nào, PHẢI:

1. XÁC ĐỊNH NGUỒN GỐC:
   - Khái niệm này đến từ source code, official docs, RFC, hay là "suy diễn cá nhân"?
   - Nếu là suy diễn → ĐÁNH DẤU [NEEDS VERIFICATION]

2. PHÂN BIỆT 3 LỚP KIẾN THỨC:
   - [FACT]: Được ghi rõ trong source code hoặc official docs
   - [MODEL]: Mental model hợp lý, được cộng đồng senior đồng thuận
   - [ANALOGY]: Phép so sánh để dễ hiểu, có thể không chính xác 100%
   → Mỗi khái niệm PHẢI gắn tag [FACT]/[MODEL]/[ANALOGY]

3. NGUYÊN TẮC "KHÔNG TỰ SUY DIỄN":
   - KHÔNG ĐƯỢC tự "logic ra" cách [Techstack] hoạt động nếu chưa đọc source code/docs
   - KHÔNG ĐƯỢC dùng "có lẽ", "có thể", "hình như" trong phần Core Concepts
   - Nếu không chắc chắn → VIẾT "Theo [nguồn cụ thể]..." hoặc bỏ qua

4. NGUYÊN TẮC "THỨ TỰ KHÔNG ĐƯỢC TÙY TIỆN":
   - Khái niệm A xảy ra TRƯỚC B hay SAU B phải dựa trên source/docs
   - KHÔNG ĐƯỢC viết "Sau đó..." nếu chưa xác nhận thứ tự thực tế

---

THUẬT NGỮ & LỊCH SỬ (Terminology & Evolution)

Mục tiêu: Học viên phải hiểu TERMINOLOGY nào đã từng tồn tại,
đang dùng, hay đã bị thay thế — để đọc được codebase từ mọi era.

FORMAT MỖI THUẬT NGỮ:

Tên → [Trạng thái] → [Era từng dùng] → [Giải thích lịch sử] → [Dùng thế nào bây giờ]

Ví dụ template:
```
"[Terminology Name]"
  [LỖI THỜI / CHÍNH THỨC / VẪN DÙNG]
  Era: [Version range]
  Lịch sử: [Tại sao tồn tại, tại sao đổi, ai quyết định]
  Bây giờ: [Dùng gì thay thế, khi nào gặp trong codebase cũ]
```
---

NHỮNG TỪ KHÔNG ĐƯỢC DÙNG MÀ KHÔNG GIẢI THÍCH LỊCH SỬ:

[ĐIỀN CÁC TERMINOLOGY ĐẶC TRƯNG CỦA TECHSTACK]

Ví dụ:
- ❌ "Term cũ" → phải giải thích đây là từ cũ, nay dùng gì
- ❌ "Term đã thay đổi meaning" → phải giải thích meaning cũ vs mới

---

ANTI-HALLUCINATION CHECKLIST

Trước khi viết Core Concepts, trả lời:

□ Thuật toán/sequence này có trong source code/docs chính thức không?
□ Có source code reference cụ thể (file:line) hoặc docs link không?
□ Có bài viết chính thức từ core team/maintainers xác nhận không?
□ Có khả năng hiểu nhầm "trước/sau" không? → Kiểm tra lại
□ Có dùng terminology đã lỗi thời không?

Nếu trả lời KHÔNG cho bất kỳ câu nào → KHÔNG VIẾT, hoặc ghi rõ [CHƯA XÁC THỰC]

---

SOURCE CODE REFERENCE REQUIREMENT

Mỗi khái niệm trong Core Concepts PHẢI có ít nhất một trong:

A. Source Code Reference:
   - File và function name (vd: `src/core/renderer.ts:render()`)
   - Hoặc link đến source code trên GitHub/GitLab

B. Official Documentation:
   - Link đến docs chính thức
   - Hoặc quote trực tiếp từ docs

C. Core Team/Maintainer Publication:
   - Blog post từ core team
   - RFC (Request for Comments)
   - Talk từ conference với slide reference

Nếu không có → VIẾT ở dạng [THEORY — NEEDS VERIFICATION] và đặt ở cuối bài

---

SEQUENCE VERIFICATION RULE

Khi mô tả sequence/flow:

1. PHẢI dùng từ ngữ CHÍNH XÁC:
   - ❌ "Sau đó..."
   - ❌ "Tiếp theo..."
   - ✅ "Trong cùng phase/step..."
   - ✅ "Sau khi [phase X] hoàn tất..."
   - ✅ "Đồng thời với..."

2. PHẢI phân biệt:
   - "Xảy ra trong cùng phase" vs "Xảy ra ở phase khác"
   - "Xảy ra đồng thời" vs "Xảy ra tuần tự"
   - "Xảy ra trước" vs "Xảy ra sau" (phải có source xác nhận)

---

REVIEW CHECKPOINT

SAU KHI VIẾT XONG MỖI BÀI — BẮT BUỘC KIỂM TRA

1. [ ] Có khái niệm nào tôi "tự logic ra" không?
2. [ ] Có sequence nào tôi chưa xác nhận thứ tự không?
3. [ ] Có terminology nào đã lỗi thời không?
4. [ ] Có chỗ nào "đúng một nửa, sai một nửa" không?
5. [ ] Nếu senior engineer đọc, họ có bắt lỗi được không?

Nếu trả lời CÓ cho bất kỳ câu nào → SỬA LẠI trước khi gửi.

---

KHI USER HỎI "CÓ ĐÚNG KHÔNG" HOẶC "CHECK LẠI"

→ KHÔNG tự vệ hoặc giải thích quanh co
→ PHẢI:
   1. Thừa nhận nếu sai
   2. Tra cứu source code/docs để xác minh
   3. Sửa lại với reference cụ thể
   4. Cập nhật Known Pitfalls nếu là lỗi mới

---

KNOWN PITFALLS (Cập nhật liên tục)

[ĐIỀN CÁC LỖI ĐÃ TỪNG XẢY RA TRONG TECHSTACK NÀY]

Ví dụ template:
Lỗi #[n]: [Mô tả lỗi phổ biến]
→ Thực tế: [Sự thật đúng]
→ Source: [Link docs/source]

→ KIỂM TRA: Bài mới có mắc lỗi nào trong danh sách này không?


````

## Bảng phân tích Phase 0

| Yêu cầu| Cách giải quyết |
|---|---|
| **User biết toàn bộ quá trình tiến hóa** | `FULL EVOLUTION TIMELINE ANALYSIS` — liệt kê TẤT CẢ version từ đầu đến target, không bỏ sót. Mỗi version có: release year, đặc trưng kiến trúc, problem giải quyết. |
| **Phân loại version** | Mỗi version được tag: `[HISTORY_ONLY]` / `[REFERENCE_ONLY]` / `[LEGACY_CORE]` / `[TRANSITIONAL]` / `[MODERN]`. Giải thích rõ tại sao version nào thuộc loại nào. |
| **Biết tại sao bị thay thế** | Với `[HISTORY_ONLY]` và `[REFERENCE_ONLY]`: giải thích lý do kiến trúc bị thay thế, thay thế bởi gì, terminology nào vẫn bị dùng sai nghĩa. |
| **Phân tích JD thị trường** | `JOB MARKET & JD ANALYSIS` — phân tích % JD yêu cầu từng version, công ty archetype (startup/scale-up/enterprise/agency), và "khoảng trống kiến thức" thị trường đang thiếu. |
| **Tự quyết định legacy chuyên sâu** | Claude tự quyết định `[LEGACY_CORE]` dựa trên phân tích JD, không phải user chọn trước. Giải thích lý do chọn version này. |
| **Xử lý nhiều version legacy sống song song** | Nếu nhiều version legacy sống song song cùng tồn tại trên thị trường → Claude phải quyết định: dạy cả hai? hay chọn 1 làm core? |


## Dùng 3 AI kết hợp để tạo Phase 0 (Advanced)

### 🔄 Workflow 4 tab

```
Tab 1 (Claude)          Tab 2 (Kimi)            Tab 3 (Z.AI GLM-5)
    │                       │                       │
    ▼                       ▼                       ▼
 Paste Prompt Claude    Paste Prompt Kimi      Paste Prompt ZAI
    ↓                       ↓                       ↓
  Chờ output            Chờ output              Chờ output
    ↓                       ↓                       ↓
  Copy Bible A          Copy Bible B            Copy Bible C
    └───────────────────────┴───────────────────────┘
                        ↓
              Tab 4 (Kimi K2.6 Thinking hoặc Claude)
                        ↓
              Paste Merge Prompt + 3 Bible
                        ↓
              Nhận MASTER-CURRICULUM-BIBLE-UNIFIED.md
```

| File | Dùng cho | Tab |
|---|---|---|
| **Phase0-Prompt-Claude.md** | Claude.ai (Sonnet 4.6) | Tab 1 |
| **Phase0-Prompt-Kimi.md** | Kimi K2.6 Thinking | Tab 2 |
| **Phase0-Prompt-ZAI-GLM5.md** | Z.AI GLM-5 (Advanced Search + DeepThink) | Tab 3 |
| **Phase0-Merge-Prompt.md** | Kimi K2.6 Thinking hoặc Claude (AI xịn nhất bạn có) | Tab 4 (sau khi 3 tab trên xong) |


### 🎯 Tại sao Merge Prompt dùng Kimi K2.6 Thinking?

| Lý do | Giải thích |
|---|---|
| **Context 262K** | Đủ để chứa 3 Bible (mỗi cái ~60-80K) + prompt merge |
| **Thinking mode** | Cần chain-of-thought dài để so sánh 3 phiên bản, giải quyết conflict |
| **Free tier hào phóng** | Không giới hạn message như Claude |
| **Structured output** | Kimi format bảng, markdown rất sạch |

**Nếu Kimi bị cắt output** (3 Bible quá dài): Tóm tắt mỗi Bible thành ~30% độ dài trước khi merge, hoặc chia merge thành 2 prompt (trước Phần 5 / sau Phần 5).

#### ⚡ Tối ưu nếu context không đủ

Nếu 2 Bible quá dài (mỗi cái ~100-120K tokens) + prompt merge → vượt 262K context Kimi:

**Cách 1: Chia nhỏ**
- Merge từng phần riêng: Phần 1 (Timeline), Phần 2 (JD), Phần 4 (Module List), Phần 5 (Chi tiết từng bài)...
- Mỗi phần 1 prompt Kimi. Tổng ~5-7 prompt.

**Cách 2: Tóm tắt trước khi merge**
- Yêu cầu Kimi tóm tắt Bible A thành ~30% độ dài (giữ key decisions, module list, anti-overlap)
- Tương tự Bible B
- Rồi merge 2 bản tóm tắt

**Cách 3: Dùng Kimi K2.6 (non-Thinking) cho merge**
- Thinking mode tiêu tốn nhiều tokens cho reasoning
- Non-Thinking mode tiết kiệm tokens, đủ để merge nếu logic đã rõ từ 2 Bible



---



## Sau Phase 0

Lưu output Claude thành: `MASTER-CURRICULUM-BIBLE-[Techstack].md`

File này là **Source of Truth**. Từ giờ, mỗi prompt Phase 1-3 chỉ paste đúng phần M{x}.{y} tương ứng, không paste toàn bộ Bible (tránh quá dài).

**Cách cắt nhỏ Bible để paste:**

```
=== CURRICULUM BIBLE — M{x}.{y} ===
[Paste toàn bộ phần M{x}.{y} từ Bible, từ dòng "### M{x}.{y}" đến hết phần Risk Flag của bài đó]
=== END BIBLE ===
```

---

# 🔵 PHASE 1: RESEARCH (Z.ai — Thoải mái dùng)

**Mục đích:** Thu thập raw material, facts, anti-patterns, terminology, source references — **theo đúng list đã định trong Bible**.

**Khi nào dùng:** Mỗi bài giảng trước khi qua Kimi.

**Quota:** Không giới hạn (Z.ai free hào phóng).

---

## Prompt Phase 1

```
=== CURRICULUM BIBLE — M{x}.{y} ===
[Paste toàn bộ phần M{x}.{y} từ Bible]
=== END BIBLE ===

Bạn là Senior [Techstack] Research Engineer. Bạn không viết bài giảng. Bạn chỉ khai thác dữ liệu thô (raw material) và xác thực facts để một Staff Engineer sau này viết bài.

Tôi đang thiết kế khóa học theo triết lý:
"Pain Point → Cách cũ → Tại sao thất bại → Cách mới → Trade-offs → Production Reality → Migration → Interview Perspective"

Bài giảng cần nghiên cứu: M{x}.{y} - [Tên bài]

YÊU CẦU OUTPUT (chỉ bullet point, ngắn gọn, đậm chất engineering notes):

1. PAIN POINT & EVOLUTION CONTEXT
   - Vấn đề gốc rễ tại sao khái niệm này ra đời?
   - Trước [Techstack], người ta giải quyết bằng cách nào? Thất bại ở đâu?
   - Timeline ngắn: từ [legacy] đến [target], khái niệm này thay đổi thế nào?

2. CORE FACTS (Đã xác thực)
   - Liệt kê 5-7 facts cốt lõi THEO ĐÚNG Topics trong Bible. Mỗi fact PHẢI gắn tag:
     [FACT] nếu có source code/docs chính thức
     [MODEL] nếu là mental model được cộng đồng senior đồng thuận
     [ANALOGY] nếu chỉ là phép so sánh
   - Nếu là [FACT]: cố gắng đưa file:function hoặc link docs chính thức.
   - Nếu không chắc: ghi [NEEDS VERIFICATION], KHÔNG tự suy diễn.
   - KHÔNG cover topic nào nằm trong Overlap Lock của Bible.

3. ANTI-PATTERNS (Junior vs Staff)
   - Research đúng [số lượng] anti-patterns đã liệt kê trong Bible.
   - Mỗi anti-pattern: code smell junior + cách Staff refactor + trade-off + incident có thể xảy ra.
   - KHÔNG tự thêm anti-pattern ngoài list Bible.

4. TERMINOLOGY EVOLUTION
   - Research đúng list terminology trong Bible.
   - Thêm nếu phát hiện terminology quan trọng Bible bỏ sót (ghi [BIBLE MISSING] để tôi cập nhật).
   - Không research terminology của bài khác.

5. TRADE-OFFS MATRIX
   - Bảng so sánh ít nhất 4 phương án giải quyết vấn đề chính của bài này.
   - Cột: Approach | Pros | Cons | Khi nào dùng | Khi nào KHÔNG dùng | Overhead / Cost

6. LEGACY & MIGRATION
   - 3 vấn đề cụ thể khi gặp chủ đề này trong codebase [legacy].
   - Strategy refactor an toàn (không break production).
   - Rollback plan nếu migration fail.

7. PRODUCTION REALITY
   - 3 case study / pattern thực tế (ưu tiên đúng Production Scenarios trong Bible).
   - Performance implication cụ thể (nếu có số liệu thì tốt).
   - Debugging scenario: symptom → root cause → cách detect.

8. INTERVIEW PERSPECTIVE
   - 5 câu hỏi phỏng vấn Mid/Senior thực tế (theo đúng loại câu hỏi Bible yêu cầu).
   - Đáp án tóm tắt (1-2 câu) ở mức độ Staff Engineer.

9. KNOWN PITFALLS (Cập nhật)
   - Liệt kê 3 lỗi phổ biến đã từng xảy ra trong [Techstack] liên quan đến chủ đề này.
   - Mỗi lỗi: Mô tả → Thực tế đúng → Source/docs nếu có.

10. SOURCE & REFERENCES
    - Liệt kê tất cả nguồn bạn dùng (docs, source code, RFC, blog core team).
    - Phân loại: [OFFICIAL] / [COMMUNITY] / [EXPERIENCE].

QUY TẮC NGHIÊM NGẶT:
- KHÔNG cover topic nằm trong Overlap Lock của Bible.
- KHÔNG tự thêm anti-pattern ngoài list Bible.
- KHÔNG tự thêm terminology của bài khác.
- Không viết thành bài giảng. Chỉ bullet point, ngắn, đanh thép.
- Không dùng "có lẽ", "hình như", "có thể" trong phần Core Facts.
- Tiếng Việt hoặc tiếng Anh đều được, nhưng terminology giữ nguyên tiếng Anh.
- Nếu không chắc: ghi [NEEDS VERIFICATION] và bỏ qua, đừng tự logic ra.
```

---

## Sau Phase 1

Copy **toàn bộ** output Z.ai. Giữ lại để dán vào Prompt Phase 2 và Phase 3.

---

# 🟠 PHASE 2: SKELETON (Kimi — 1-2 prompt/bài)

**Mục đích:** Biến raw material thành skeleton markdown chuẩn 14 sections — **theo đúng structure Bible đã định**.

**Khi nào dùng:** Sau khi có output Z.ai.

**Quota:** 1-2 prompt Kimi (có thể chat thêm 1 lượt để adjust).

---

## Prompt Phase 2

````
=== CURRICULUM BIBLE — M{x}.{y} ===
[Paste toàn bộ phần M{x}.{y} từ Bible]
=== END BIBLE ===

Bạn là Technical Architect cho khóa học Universal Engineer Mastery Program. Bạn không viết nội dung chi tiết. Bạn chỉ thiết kế SKELETON markdown chuẩn.

Tôi đang dạy khóa học [Techstack] theo triết lý:
"Pain Point → Cách cũ → Tại sao thất bại → Cách mới → Trade-offs → Production Reality → Migration → Interview Perspective"

Bài giảng: M{x}.{y} - [Tên bài cụ thể]

Dưới đây là RAW MATERIAL từ Senior Research Engineer:
[PASTE_TOÀN_BỘ_OUTPUT_TỪ_Z.AI]

NHIỆM VỤ: Tạo SKELETON markdown cho bài giảng trên.
KHÔNG viết nội dung chi tiết. Chỉ heading + placeholder + ghi chú ngắn về ý cần viết.

SKELETON PHẢI THEO ĐÚNG FORMAT 14 SECTIONS:

```markdown
# [M{x}.{y}] [Tên bài học]

> 🎯 **Lesson Goal:** [Placeholder: 1 câu mô tả objective — theo Learning Objectives trong Bible]

---

## 1. Evolution Context
[Placeholder: Pain Point → Cách cũ → Tại sao thất bại. Dùng facts từ raw material. Theo đúng Topics trong Bible]

## 2. Mental Model
[Placeholder: [MODEL] / [ANALOGY] đã xác thực. KHÔNG dùng [FACT] chưa verify]

## 3. Core Concepts
[Placeholder: Các [FACT] đã có source. Ghi chú từng fact cần source reference. Theo đúng Topics trong Bible, không đụng Overlap Lock]

### 3.1 [Sub-concept 1]
[CODE_PLACEHOLDER_1: Ghi chú yêu cầu code production-ready, có error handling, comment TẠI SAO]

### 3.2 [Sub-concept 2]
[CODE_PLACEHOLDER_2]

### 3.3 [Sub-concept 3]
[CODE_PLACEHOLDER_3]

## 4. Anti-Patterns in the Wild
[Placeholder: Đúng [số lượng] anti-patterns từ Bible. Mỗi cái format:]
- ❌ **Code Smell:** [Tên]
  ```[ngôn ngữ]
  // TODO: Code junior thường viết
  ```
- ✅ **Staff Refactor:** [Tên]
  ```[ngôn ngữ]
  // TODO: Code production-ready + trade-off comment
  ```
- 🧠 **Why:** [Placeholder: Trade-off, không chỉ "tốt hơn"]
- 🔥 **Incident Risk:** [Placeholder: Mô tả "mùi" incident nếu để lại code cũ]

## 5. Trade-offs
[Placeholder: Bảng markdown từ raw material. Cột: Approach | Pros | Cons | Khi nào dùng | Khi nào KHÔNG | Overhead]

## 6. Legacy Recognition
[Placeholder: Nhận diện code [legacy]. Terminology cũ. Theo Legacy Bridge trong Bible]

## 7. Modern Approach
[Placeholder: Cách làm ở [target]. Migration path từ legacy. Theo Legacy Bridge trong Bible]

## 8. Production Scenario
[Placeholder: Real-world case. Debugging symptom → root cause. Theo Production Scenarios trong Bible]

## 9. Performance & Overhead
[Placeholder: Số liệu hoặc benchmark guide. Memory/CPU/latency implication]

## 10. Architecture Notes
[Placeholder: System design implication. Khi nào dùng, khi nào tránh. Chỉ ở level Senior+]

## 11. Interview Questions
[Placeholder: 5 câu Mid/Senior. Theo đúng loại câu hỏi Bible yêu cầu. Format:]
### Q1: [Câu hỏi]
<details>
<summary>Đáp án</summary>
[Placeholder: Đáp án Staff-level, ngắn gọn, đanh thép]
</details>

## 12. Exercises
[Placeholder: 3 bài tập độ khó tăng dần. Theo Risk Flag trong Bible — chỗ nào dễ stuck thì thiết kế exercise cẩn thận]
### 🟢 Exercise 1: [Tên]
[Placeholder: Đề bài + Acceptance Criteria]
<details>
<summary>Hint</summary>
[Placeholder: Hint, không đưa lời giải]
</details>

### 🟡 Exercise 2: [Tên]
[Placeholder]

### 🔴 Exercise 3: [Tên]
[Placeholder]

## 13. Summary
[Placeholder: 3-4 bullet tóm tắt. Không lặp lại lý thuyết.]

## 14. Terminology Evolution
[Placeholder: Dùng raw material để tạo bảng. Theo list Terminology trong Bible]

[Tên terminology]
┌─────────────┬─────────────────┬─────────────────────────────┐
│ Era         │ Status          │ Dùng khi nào                │
├─────────────┼─────────────────┼─────────────────────────────┤
│ [Version]   │ [Status]        │ [Context]                   │
│ [Version]   │ [Status]        │ [Context]                   │
└─────────────┴─────────────────┴─────────────────────────────┘
Lịch sử: [Placeholder]
Codebase legacy: [Placeholder]

---

> 💡 **Staff Note:** [Placeholder: 1 câu để đời từ Staff Engineer]

> ⚠️ **Anti-Hallucination Check:** [Placeholder]
> - [ ] Có fact nào chưa verify không?
> - [ ] Có sequence nào chưa xác nhận thứ tự không?
> - [ ] Có terminology lỗi thời không?


QUY TẮC THIẾT KẾ SKELETON:
- Heading rõ ràng, dùng emoji phù hợp
- Code block để trống với comment `// TODO: Staff Engineer implementation - production-ready, error handling, structured logging if applicable`
- Callout box: `> ⚠️ WARNING`, `> 💡 TIP`, `> 📝 NOTE`, `> 🔴 PRODUCTION REALITY`
- Interview và Exercise PHẢI dùng `<details>` tag đúng format
- Terminology Evolution PHẢI dùng bảng markdown đúng format UEMP
- Giữ nguyên tiếng Việt cho heading/giải thích, terminology giữ tiếng Anh
- KHÔNG heading markdown bên trong `<details>` để tương thích VitePress
- Nếu thấy raw material thiếu section nào so với Bible → ghi [RAW MATERIAL NEEDED] để tôi bổ sung
- KHÔNG tự thêm section ngoài 14 section trên. Nếu Bible yêu cầu ít hơn, rút gọn cho phù hợp.
````

---

## Sau Phase 2

Copy **toàn bộ** skeleton Kimi. Giữ nguyên raw material Z.ai. Chuẩn bị cho Phase 3.

---

# 🟣 PHASE 3: POLISH (Claude — 1 prompt duy nhất/bài)

**Mục đích:** Viết bài giảng hoàn chỉnh, thay thế TẤT CẢ placeholder, giọng Staff Engineer.

**Khi nào dùng:** Sau khi có skeleton Kimi.

**Quota:** 1 prompt Claude/bài. **KHÔNG chat thêm lượt nào.**

---

## Prompt Phase 3

```
=== CURRICULUM BIBLE — M{x}.{y} ===
[Paste toàn bộ phần M{x}.{y} từ Bible]
=== END BIBLE ===

Bạn là Staff [Techstack] Engineer với 7 năm kinh nghiệm production, từng on-call vì [Techstack] fail, từng refactor legacy [legacy] lên [target], và đang mentor team 10 người.

Bạn KHÔNG phải giáo viên. Bạn là:
- Senior [Techstack] Engineer
- Staff Engineer
- Tech Lead
- Software Architect
- Reviewer
- Mentor

Triết lý dạy học (bắt buộc tuân thủ):
- KHÔNG DẠY: "API này dùng thế nào?" → PHẢI DẠY: "Tại sao API này tồn tại?"
- KHÔNG DẠY: "Syntax" → PHẢI DẠY: "Trade-offs"
- KHÔNG DẠY: "Best Practice" → PHẢI DẠY: "Khi nào không nên dùng Best Practice"
- Mọi khái niệm theo sequence: Pain Point → Cách cũ → Tại sao thất bại → Cách mới → Trade-offs → Production Reality → Migration → Interview Perspective

Techstack: [ĐIỀN]
Bài giảng: M{x}.{y} - [Tên bài]
Level bài học: [Fresher/Junior/Mid/Senior/Staff — theo Bible]
Các bài trước đã học xong: [Liệt kê từ Bible — bạn có quyền tái sử dụng kiến thức cũ]

---

DƯỚI ĐÂY LÀ RAW MATERIAL (từ Senior Research Engineer):
[PASTE_TOÀN_BỘ_OUTPUT_TỪ_Z.AI]

DƯỚI ĐÂY LÀ SKELETON (từ Technical Architect):
[PASTE_TOÀN_BỘ_SKELETON_TỪ_KIMI]

---

NHIỆM VỤ: Viết đầy đủ bài giảng, thay thế TẤT CẢ placeholder, output trong 1 markdown block duy nhất.

QUY TẮC VIẾT (KHÔNG THỎA HIỆP):

1. GIỌNG VĂN
   - Như Staff Engineer đang review PR của junior hoặc pair programming lúc 11 giờ tối.
   - Rõ ràng, không dung túng, nhưng hướng dẫn tận tình.
   - Không dùng giọng "thầy giáo giảng bài". Không "các em", "bây giờ chúng ta".
   - Dùng "bạn", "team", "production", "incident".
   - Nếu bài ở level Fresher/Junior: giọng vẫn Staff, nhưng giải thích từ đầu, không assume kiến thức.
   - Nếu bài ở level Senior/Staff: giọng nhanh, gọn, assume học viên đã biết basics.

2. CODE EXAMPLES
   - PHẢI production-ready: error handling đầy đủ, KHÔNG bao giờ swallow error, structured logging (pino/winston nếu Node.js, hoặc tương đương), graceful shutdown nếu applicable.
   - Comment giải thích TẠI SAO, không chỉ LÀM GÌ.
   - Tên biến/function tiếng Anh. Giải thích tiếng Việt.
   - Code block dùng ```ts [src/filename.ts] hoặc ```js [src/filename.js] để tương thích VitePress.

3. CORE CONCEPTS
   - Mỗi fact PHẢI gắn tag [FACT] / [MODEL] / [ANALOGY] như trong raw material.
   - Nếu dùng [FACT]: phải có source reference (file:function, docs link, hoặc "Theo official docs...").
   - Nếu không chắc chắn: ghi [THEORY — NEEDS VERIFICATION] và đặt ở cuối bài, KHÔNG đưa vào core.
   - KHÔNG dùng "có lẽ", "hình như", "có thể" trong phần Core Concepts.
   - KHÔNG đụng vào topic nằm trong Overlap Lock của Bible.

4. SEQUENCE VERIFICATION
   - KHÔNG dùng "Sau đó...", "Tiếp theo..." nếu chưa xác nhận thứ tự.
   - Dùng: "Trong cùng phase...", "Sau khi [X] hoàn tất...", "Đồng thời với..."
   - Phân biệt rõ: cùng phase / phase khác / đồng thời / tuần tự.

5. ANTI-PATTERNS
   - Đúng [số lượng] anti-patterns Bible yêu cầu. Không thêm, không bớt.
   - Mỗi anti-pattern phải có:
     - Code junior thường viết (❌)
     - Code Staff refactor (✅)
     - 1 câu mô tả "mùi" incident có thể xảy ra nếu để lại code cũ
     - Trade-off của việc refactor (không phải lúc nào cũng nên refactor ngay)

6. TRADE-OFFS
   - Section 5 phải là bảng markdown thực sự, ít nhất 4 phương án.
   - Cột: Approach | Pros | Cons | Khi nào dùng | Khi nào KHÔNG dùng | Overhead
   - Không chỉ "tốt/xấu". Phải có ngữ cảnh cụ thể.

7. LEGACY & MIGRATION
   - Mô tả scenario thực tế: codebase [legacy], callback/đồng bộ cũ, domains, etc.
   - Strategy: Strangler Fig, feature flag, incremental migration.
   - Rollback plan cụ thể nếu migration fail.
   - Không viết "rewrite toàn bộ". Staff Engineer không bao giờ rewrite toàn bộ.

8. PERFORMANCE
   - Đưa số liệu cụ thể nếu có (latency, memory, throughput).
   - Nếu không có số liệu chính xác: hướng dẫn benchmark cụ thể (dùng tool gì, metric nào, cách đọc).
   - Ví dụ: "OpenTelemetry SDK thêm ~5-15% latency. Nếu >10k req/s, cân nhắc sampling 10%."

9. EXERCISES
   - 3 bài tập độ khó tăng dần (🟢🟡🔴).
   - Mỗi bài: Đề bài rõ ràng + Acceptance Criteria (list kiểm tra).
   - Hint trong `<details>` (KHÔNG đưa lời giải hoàn chỉnh, để học viên struggle).
   - KHÔNG dùng heading markdown bên trong `<details>`.
   - Theo Risk Flag trong Bible: chỗ nào dễ stuck thì hint phải rõ hơn, nhưng vẫn không đưa lời giải.

10. INTERVIEW QUESTIONS
    - 5 câu Mid/Senior thực tế (theo đúng loại câu hỏi Bible yêu cầu).
    - Đáp án trong `<details>`: ngắn gọn, đanh thép, như Staff Engineer trả lời trong phỏng vấn.
    - Không lý thuyết dài dòng. Trả lời đúng trọng tâm.

11. TERMINOLOGY EVOLUTION
    - Dùng ĐÚNG format bảng từ skeleton.
    - Mỗi terminology: Era | Status | Context | Lịch sử thay đổi | Codebase legacy.
    - Theo đúng list Terminology trong Bible.

12. STAFF NOTE
    - Cuối bài: 1 đoạn ngắn gọn, để đời, như lời khuyên của Staff Engineer đã từng 3 giờ sáng fix production.

13. FRONTMATTER VITEPRESS
    - Đầu file phải có:
    ---
    title: M{x}.{y} [Tên bài]
    description: [Lesson Goal từ Bible]
    ---

14. ANTI-HALLUCINATION CHECKLIST (cuối bài, dạng comment HTML)
    <!--
    - [ ] Không có fact nào tự suy diễn
    - [ ] Sequence đã verify
    - [ ] Terminology không lỗi thời
    - [ ] Senior đọc không bắt lỗi được
    - [ ] Không đụng Overlap Lock
    -->

OUTPUT: 1 file markdown duy nhất. Không chia thành nhiều phần. Không tóm tắt lại yêu cầu. Không nói "Dưới đây là bài giảng". Chỉ output markdown thuần túy, sẵn sàng lưu thành `.md` vào VitePress.
```

---

## Sau Phase 3

Copy markdown output Claude → Lưu vào project VitePress: `docs/m{x}/{y}-[ten-bai].md`

---

# 🛠️ CHEAT SHEET VẬN HÀNH (3 Tab Browser)

```
Tab 1: Z.ai (z.ai/chat)          Tab 2: Kimi (kimi.moonshot.cn)          Tab 3: Claude (claude.ai)
   │                                      │                                      │
   │  Mở COURSE_CONFIG.md (Tab 4)         │                                      │
   │  Copy biến → Paste vào prompt        │                                      │
   ▼                                      │                                      │
 Phase 1: Paste Prompt Z.ai               │                                      │
   + Paste phần M{x}.{y} từ Bible         │                                      │
   → Copy output Z.ai                     │                                      │
   → Sang Tab 2: Paste output Z.ai        │                                      │
   → Paste phần M{x}.{y} từ Bible         │                                      │
   → Paste Prompt Kimi                    │                                      │
   → Copy skeleton Kimi                   │                                      │
   → Sang Tab 3: Paste skeleton + Z.ai    │                                      │
   → Paste phần M{x}.{y} từ Bible         │                                      │
   → Paste Prompt Claude                  │                                      │
   → Copy markdown hoàn chỉnh             │                                      │
   → Lưu vào VitePress docs/              │                                      │
```

---

# ⚠️ XỬ LÝ SỰ CỐ

## 1. Claude output bị cắt ngang (quá dài)

**Phòng ngừa:** Thêm vào **cuối Prompt Phase 3**:
```
Giữ bài trong 3500 từ, code snippet ngắn gọn nhưng đủ ý. 
Ưu tiên chất lượng over quantity. Nếu cần, có thể lược bỏ phần 10 (Architecture Notes) 
nhưng giữ đủ anti-patterns và exercises theo đúng số lượng Bible yêu cầu.
```

**Nếu đã bị cắt:** Không dùng "Continue". Thay vào đó:
- Chia skeleton thành 2 phần: Core (M1-M9) và Advanced (M10-M14)
- Hoặc giảm số anti-patterns từ 5 xuống 3, exercises từ 3 xuống 2 (cập nhật Bible cho lần sau)

## 2. Claude hết quota (Free tier ~20-40 msg/5h)

**Chiến lược:**
- Phase 0: 1 prompt (bắt buộc Claude)
- Phase 3: Mỗi bài 1 prompt
- Nếu khóa học 30 bài: cần 31 prompt Claude
- Free tier 20-40 msg/5h → Chia thành 2-3 "slot" (mỗi slot 5 tiếng)
- Trong thời gian chờ: Dùng Z.ai + Kimi để chuẩn bị raw material và skeleton cho các bài tiếp theo

## 3. Z.ai output quá dài (vượt context Kimi)

**Cách xử lý:**
- Chat tiếp 1 lượt Z.ai: `"Rút gọn phần 1 và 3, chỉ giữ insight cốt lõi. Bỏ phần 8 (Interview) và 9 (Known Pitfalls) — tôi sẽ tự bổ sung."`
- Hoặc tách Z.ai thành 2 prompt: 1 cho Core Facts + Anti-patterns, 1 cho Trade-offs + Legacy

## 4. Kimi skeleton thiếu section

**Cách xử lý:**
- Chat tiếp 1 lượt Kimi: `"Thêm section về Graceful Shutdown vào giữa phần 4 và 5."`
- Kimi free cho phép điều chỉnh skeleton dễ dàng

## 5. Bible bị lỗi / thiếu topic

**Cách xử lý:**
- Nếu Z.ai phát hiện topic quan trọng Bible bỏ sót: ghi `[BIBLE MISSING]` trong output
- Bạn cập nhật Bible thủ công, hoặc chạy lại Phase 0 cho module đó
- Không để AI tự thêm topic ngoài Bible — đó là nguyên nhân gây lố/thiếu

---

# 🎯 TÓM TẮT VAI TRÒ

| Model | Vai trò trong pipeline | Tương tự team | Quyền hạn |
|---|---|---|---|
| **Kimi + Z.ai** | **Phase 0:** Curriculum Architect (tự đánh giá, tự quyết định N module, tự định nghĩa từng M{x}.{y}) | Principal Engineer + CTO | **Toàn quyền quyết định nội dung** |
| **Z.ai** | **Phase 1:** Researcher (thu thập theo đúng list Bible) | Senior dev đào docs, list risk | **Không được tự thêm topic** |
| **Kimi** | **Phase 2:** Skeleton Architect (format theo đúng 14 sections Bible) | Tech writer | **Không được tự thêm section** |
| **Claude** | **Phase 3:** Staff Writer (viết đúng content Bible đã định) | Staff Engineer | **Viết content, không đổi structure** |

---

*Pipeline này đảm bảo: Claude (Phase 0) là "người quyết định duy nhất". Z.ai và Kimi chỉ là "công nhân thực hiện" theo plan đã định. Không lố, không thiếu, không overlap.*
