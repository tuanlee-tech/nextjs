# 🛠 Engineering Playbook

> **"Operating System"** cho hầu hết các loại project. Thiết lập chuẩn mực một lần, áp dụng đồng nhất và nghiêm ngặt cho toàn bộ lifecycle của phần mềm.

## 📌 Tại sao Playbook này tồn tại?

Là một kỹ sư phần mềm, điểm yếu lớn nhất không nằm ở việc không biết dùng React hay Next.js, mà nằm ở **kinh nghiệm delivery một project từ con số 0 đến production một cách có hệ thống**.

Thay vì mỗi project lại tự hỏi _"File này để đâu?"_, _"Commit thế nào?"_, _"AI đề xuất cái này có nên dùng không?"_, Playbook này đóng vai trò là **Single Source of Truth**. Nó ép buộc một tư duy Senior: làm việc có quy trình, có check-list, và biết giải trình vì sao ta chọn cách làm này mà không phải cách khác.

## 🚀 Cách sử dụng

Playbook này **KHÔNG** phải để đọc từ đầu đến cuối như một cuốn sách. Nó là một bộ công cụ, bạn mở file tương ứng theo thời điểm trong lifecycle của task/project:

### 1. Khởi động Project (Sprint 0)

- Đọc [`00-vision.md`](./00-vision.md) để nắm rõ triết lý cốt lõi.
- Áp dụng [`01-coding-standards.md`](./01-coding-standards.md) và [`02-folder-structure.md`](./02-folder-structure.md) để setup repository.
- Config Git workflow: [`04-git-workflow.md`](./04-git-workflow.md), [`05-branching-strategy.md`](./05-branching-strategy.md), [`06-commit-convention.md`](./06-commit-convention.md).

### 2. Thiết kế & Lên kế hoạch

- Khi có ý tưởng mới: Dùng [`13-feature-template.md`](./13-feature-template.md) để spec rõ ràng.
- Khi chia nhỏ công việc: Dùng [`11-task-template.md`](./11-task-template.md).
- **Quan trọng:** Khi cần quyết định dùng thư viện hay kiến trúc gì -> BẮT BUỘC điền [`10-adr-template.md`](./10-adr-template.md) và chạy qua **Bloat Filter**.

### 3. Implementation (Làm việc với AI)

- Trước khi nhờ AI code: Đọc [`09-ai-agent-rules.md`](./09-ai-agent-rules.md). AI là Junior, bạn là Senior.
- Trong lúc code: Tuân thủ [`03-naming-convention.md`](./03-naming-convention.md).

### 4. Hoàn thành Task (Definition of Done)

- Trước khi tạo PR/Merge: Tự điền [`08-definition-of-done.md`](./08-definition-of-done.md) và check qua [`07-code-review-checklist.md`](./07-code-review-checklist.md). Nếu có 1 checkbox chưa tick -> Task chưa xong.

### 5. Xử lý sự cố & Tổng kết

- Gặp bug: Ghi lại bằng [`12-bug-report-template.md`](./12-bug-report-template.md).
- Cuối Sprint: Viết [`14-retrospective-template.md`](./14-retrospective-template.md).
- Cuối Project: Viết [`15-ai-workflow-template.md`](./15-ai-workflow-template.md) để tài liệu hóa case study làm việc với AI.

## 🛡 Quy tắc tối thượng: Bloat Filter

Trước khi thêm BẤT KỲ thư viện, pattern hay công nghệ nào vào project, bắt buộc phải trả lời 3 câu hỏi:

1. Bài toán **CỤ THỂ** nào trong project này đòi hỏi công cụ này? (Không phải "để học")
2. Nếu bỏ công cụ này, interviewer có thể hỏi _"sao không dùng cái đơn giản hơn?"_ → Mình có câu trả lời thuyết phục không?
3. Công cụ này có xuất hiện **>1 lần** trong 3 project không? Nếu không, có đáng đánh đổi thời gian đào sâu cái đã có?

_Nếu không trả lời được, KHÔNG ĐƯỢC DÙNG._

## 📂 Chỉ mục Files

| Mã   | Tên File                                                      | Mô tả                                          |
| :--- | :------------------------------------------------------------ | :--------------------------------------------- |
| `00` | [`vision.md`](./00-vision.md)                                 | Triết lý kỹ thuật & Bloat Filter               |
| `01` | [`coding-standards.md`](./01-coding-standards.md)             | Quy tắc TS, React, ESLint, Prettier            |
| `02` | [`folder-structure.md`](./02-folder-structure.md)             | Quy ước sắp xếp module-based                   |
| `03` | [`naming-convention.md`](./03-naming-convention.md)           | Tên file, biến, function, class                |
| `04` | [`git-workflow.md`](./04-git-workflow.md)                     | Tổng quan quy trình làm việc với Git           |
| `05` | [`branching-strategy.md`](./05-branching-strategy.md)         | Trunk-based development & short-lived branches |
| `06` | [`commit-convention.md`](./06-commit-convention.md)           | Conventional Commits chuẩn                     |
| `07` | [`code-review-checklist.md`](./07-code-review-checklist.md)   | 10 điểm kiểm tra chất lượng code               |
| `08` | [`definition-of-done.md`](./08-definition-of-done.md)         | 10 điều kiện để một task được coi là "XONG"    |
| `09` | [`ai-agent-rules.md`](./09-ai-agent-rules.md)                 | Quy tắc cấp quyền cho AI (Junior Dev)          |
| `10` | [`adr-template.md`](./10-adr-template.md)                     | Template ghi nhận quyết định kiến trúc         |
| `11` | [`task-template.md`](./11-task-template.md)                   | Template phân tích và thực hiện 1 task         |
| `12` | [`bug-report-template.md`](./12-bug-report-template.md)       | Template báo cáo và reproduce bug              |
| `13` | [`feature-template.md`](./13-feature-template.md)             | Template thiết kế feature spec                 |
| `14` | [`retrospective-template.md`](./14-retrospective-template.md) | Template tổng kết cuối Sprint                  |
| `15` | [`ai-workflow-template.md`](./15-ai-workflow-template.md)     | Template viết Case Study làm việc với AI       |

## 💡 Ghi chú về Tư duy Portfolio

Mục tiêu của Playbook không phải là tạo ra những tài liệu "chết" để trông cho professional.

Khi đi phỏng vấn, nếu được hỏi: _"Tại sao bạn không dùng Module Federation cho P1?"_ hay _"Tại sao bạn chọn Redux Saga thay vì React Query cho flow này?"_, thay vì ấp úng, bạn sẽ mở ADR-001 ra và trả lời dựa trên **Context - Decision - Consequences** đã được suy nghĩ kỹ lưỡng từ lúc build.

Đó là sự khác biệt giữa một người "biết dùng thư viện" và một "Software Engineer biết thiết kế hệ thống".
