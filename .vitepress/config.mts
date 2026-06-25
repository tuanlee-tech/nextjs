import { defineConfig } from 'vitepress'

const isProd = process.env.NODE_ENV === 'production';
const repo = 'nextjs';
export const base = isProd ? `/${repo}/` : '/';

export default defineConfig({
  title: "Next.js Mastery",
  description: "Universal Engineer Mastery Next.js",
  base: base,
  lang: 'vi-VN',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    ['meta', { property: 'og:image', content: `${base}og-image.png` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Next.js Mastery', link: '/INTRO' },
    ],
    sidebar: [
      {
        text: "Nội dung khóa học",
        items: [
          {
            text: "Giới thiệu",
            link: "/INTRO"
          },

        ]
      },
      {
        text: "M0 (Optional) — ĐỊNH HƯỚNG & SỰ PHÁT TRIỂN",
        collapsed: true,
        items: [
          {
            text: "M0.1 - Tại sao Next.js tồn tại",
            link: "/modules/M0/M0.1-tai-sao-next-js-ton-tai"
          },
          {
            text: "M0.2 - Dòng thời gian Tiến hóa đầy đủ",
            link: "/modules/M0/M0.2-dong-thoi-gian-tien-hoa-ay-u"
          },
          {
            text: "M0.3 - Các công ty thực sự dùng Next.js như thế nào",
            link: "/modules/M0/M0.3-cac-cong-ty-thuc-su-dung-next-js-nhu-the-nao"
          },
          {
            text: "M0.4 - Hiểu lầm phổ biến",
            link: "/modules/M0/M0.4-hieu-lam-pho-bien"
          }
        ]
      },
      {
        text: "M1 — MÔ HÌNH TƯ DUY REACT CHO NEXT.JS",
        collapsed: true,
        items: [
          {
            text: "M1.1 - Rendering",
            link: "/modules/M1/M1.1-rendering"
          },
          {
            text: "M1.2 - Reconciliation",
            link: "/modules/M1/M1.2-reconciliation"
          },
          {
            text: "M1.3 - Vòng đời Component",
            link: "/modules/M1/M1.3-vong-doi-component"
          },
          {
            text: "M1.4 - Suspense",
            link: "/modules/M1/M1.4-suspense"
          },
          {
            text: "M1.5 - Kết xuất Đồng thời",
            link: "/modules/M1/M1.5-ket-xuat-dong-thoi"
          },
          {
            text: "M1.6 - Hydration",
            link: "/modules/M1/M1.6-hydration"
          },
          {
            text: "M1.7 - Khái niệm Streaming",
            link: "/modules/M1/M1.7-khai-niem-streaming"
          }
        ]
      },
      {
        text: "M2 — NEXT.JS KẾ THỪA",
        collapsed: true,
        items: [
          {
            text: "M2.1 - Pages Router",
            link: "/modules/M2/M2.1-pages-router"
          },
          {
            text: "M2.2 - Định tuyến File",
            link: "/modules/M2/M2.2-dinh-tuyen-file"
          },
          {
            text: "M2.3 - getInitialProps",
            link: "/modules/M2/M2.3-getinitialprops"
          },
          {
            text: "M2.4 - getServerSideProps",
            link: "/modules/M2/M2.4-getserversideprops"
          },
          {
            text: "M2.5 - getStaticProps",
            link: "/modules/M2/M2.5-getstaticprops"
          },
          {
            text: "M2.6 - getStaticPaths",
            link: "/modules/M2/M2.6-getstaticpaths"
          },
          {
            text: "M2.7 - API Routes",
            link: "/modules/M2/M2.7-api-routes"
          },
          {
            text: "M2.8 - ISR",
            link: "/modules/M2/M2.8-isr"
          },
          {
            text: "M2.9 - Legacy Project Anatomy",
            link: "/modules/M2/M2.9-legacy-project-anatomy"
          },
          {
            text: "M2.10 - Chiến lược Migration",
            link: "/modules/M2/M2.10-chien-luoc-migration"
          }
        ]
      },
      {
        text: "M3 — CƠ BẢN APP ROUTER",
        collapsed: true,
        items: [
          {
            text: "M3.1 - Thư mục App",
            link: "/modules/M3/M3.1-thu-muc-app"
          },
          {
            text: "M3.2 - Layouts",
            link: "/modules/M3/M3.2-layouts"
          },
          {
            text: "M3.3 - Layouts Lồng nhau",
            link: "/modules/M3/M3.3-layouts-long-nhau"
          },
          {
            text: "M3.4 - Templates",
            link: "/modules/M3/M3.4-templates"
          },
          {
            text: "M3.5 - Loading",
            link: "/modules/M3/M3.5-loading"
          },
          {
            text: "M3.6 - Error",
            link: "/modules/M3/M3.6-error"
          },
          {
            text: "M3.7 - Not Found",
            link: "/modules/M3/M3.7-not-found"
          },
          {
            text: "M3.8 - Route Groups - Nhóm Định tuyến",
            link: "/modules/M3/M3.8-route-groups-nhom-inh-tuyen"
          },
          {
            text: "M3.9 - Dynamic Routes - Định tuyến Động",
            link: "/modules/M3/M3.9-dynamic-routes-inh-tuyen-ong"
          },
          {
            text: "M3.10 - Catch-all Routes - Định tuyến Catch-all",
            link: "/modules/M3/M3.10-catch-all-routes-inh-tuyen-catch-all"
          },
          {
            text: "M3.11 - Parallel Routes - Định tuyến Song song",
            link: "/modules/M3/M3.11-parallel-routes-inh-tuyen-song-song"
          },
          {
            text: "M3.12 - Intercepting Routes - Định tuyến Chặn",
            link: "/modules/M3/M3.12-intercepting-routes-inh-tuyen-chan"
          }
        ]
      },
      {
        text: "M4 — MÔ HÌNH TƯ DUY KẾT XUẤT",
        collapsed: true,
        items: [
          {
            text: "M4.1 - Request Lifecycle",
            link: "/modules/M4/M4.1-request-lifecycle"
          },
          {
            text: "M4.2 - CSR",
            link: "/modules/M4/M4.2-csr"
          },
          {
            text: "M4.3 - SSR",
            link: "/modules/M4/M4.3-ssr"
          },
          {
            text: "M4.4 - SSG",
            link: "/modules/M4/M4.4-ssg"
          },
          {
            text: "M4.5 - ISR",
            link: "/modules/M4/M4.5-isr"
          },
          {
            text: "M4.6 - Partial Prerendering - Kết xuất Trước một phần",
            link: "/modules/M4/M4.6-partial-prerendering-ket-xuat-truoc-mot-phan"
          },
          {
            text: "M4.7 - Streaming",
            link: "/modules/M4/M4.7-streaming"
          },
          {
            text: "M4.8 - Chi phí Hydration Cost",
            link: "/modules/M4/M4.8-chi-phi-hydration-cost"
          },
          {
            text: "M4.9 - Rendering Trade-offs",
            link: "/modules/M4/M4.9-rendering-trade-offs"
          }
        ]
      },
      {
        text: "M5 — KIẾN TRÚC LẤY DỮ LIỆU",
        collapsed: true,
        items: [
          {
            text: "M5.1 - Lịch sử Tiến hóa",
            link: "/modules/M5/M5.1-lich-su-tien-hoa"
          },
          {
            text: "M5.2 - Pages Router Fetching",
            link: "/modules/M5/M5.2-pages-router-fetching"
          },
          {
            text: "M5.3 - App Router Fetching",
            link: "/modules/M5/M5.3-app-router-fetching"
          },
          {
            text: "M5.4 - Server Component Fetching",
            link: "/modules/M5/M5.4-server-component-fetching"
          },
          {
            text: "M5.5 - Parallel Fetching - Lấy dữ liệu Song song",
            link: "/modules/M5/M5.5-parallel-fetching-lay-du-lieu-song-song"
          },
          {
            text: "M5.6 - Waterfalls",
            link: "/modules/M5/M5.6-waterfalls"
          },
          {
            text: "M5.7 - Request Deduplication - Loại bỏ Request Trùng lặp",
            link: "/modules/M5/M5.7-request-deduplication-loai-bo-request-trung-lap"
          },
          {
            text: "M5.8 - Xử lý Lỗi",
            link: "/modules/M5/M5.8-xu-ly-loi"
          },
          {
            text: "M5.9 - Data Layer Design",
            link: "/modules/M5/M5.9-data-layer-design"
          }
        ]
      },
      {
        text: "M6 — SERVER COMPONENTS",
        collapsed: true,
        items: [
          {
            text: "M6.1 - Tại sao Server Components tồn tại",
            link: "/modules/M6/M6.1-tai-sao-server-components-ton-tai"
          },
          {
            text: "M6.2 - Server Components",
            link: "/modules/M6/M6.2-server-components"
          },
          {
            text: "M6.3 - Client Components",
            link: "/modules/M6/M6.3-client-components"
          },
          {
            text: "M6.4 - Serialization - Tuần tự hóa",
            link: "/modules/M6/M6.4-serialization-tuan-tu-hoa"
          },
          {
            text: "M6.5 - Boundaries",
            link: "/modules/M6/M6.5-boundaries"
          },
          {
            text: "M6.6 - Phân tích Bundle",
            link: "/modules/M6/M6.6-phan-tich-bundle"
          },
          {
            text: "M6.7 - Sai lầm Phổ biến",
            link: "/modules/M6/M6.7-sai-lam-pho-bien"
          },
          {
            text: "M6.8 - Production Patterns",
            link: "/modules/M6/M6.8-production-patterns"
          }
        ]
      },
      {
        text: "M7 — ĐÀO SÂU CACHING",
        collapsed: true,
        items: [
          {
            text: "M7.1 - Mô hình Tư duy Cache",
            link: "/modules/M7/M7.1-mo-hinh-tu-duy-cache"
          },
          {
            text: "M7.2 - Memoization Request",
            link: "/modules/M7/M7.2-memoization-request"
          },
          {
            text: "M7.3 - Data Cache",
            link: "/modules/M7/M7.3-data-cache"
          },
          {
            text: "M7.4 - Full Route Cache",
            link: "/modules/M7/M7.4-full-route-cache"
          },
          {
            text: "M7.5 - Router Cache",
            link: "/modules/M7/M7.5-router-cache"
          },
          {
            text: "M7.6 - Cache Components",
            link: "/modules/M7/M7.6-cache-components"
          },
          {
            text: "M7.7 - cacheTag",
            link: "/modules/M7/M7.7-cachetag"
          },
          {
            text: "M7.8 - revalidateTag",
            link: "/modules/M7/M7.8-revalidatetag"
          },
          {
            text: "M7.9 - updateTag",
            link: "/modules/M7/M7.9-updatetag"
          },
          {
            text: "M7.10 - Cache Invalidation Strategies - Chiến lược Vô hiệu hóa Cache",
            link: "/modules/M7/M7.10-cache-invalidation-strategies-chien-luoc-vo-hieu-hoa-cache"
          },
          {
            text: "M7.11 - Lỗi Production Thực tế",
            link: "/modules/M7/M7.11-loi-production-thuc-te"
          }
        ]
      },
      {
        text: "M8 — XÁC THỰC & PHÂN QUYỀN",
        collapsed: true,
        items: [
          {
            text: "M8.1 - Kiến trúc Session",
            link: "/modules/M8/M8.1-kien-truc-session"
          },
          {
            text: "M8.2 - JWT",
            link: "/modules/M8/M8.2-jwt"
          },
          {
            text: "M8.3 - Cookies",
            link: "/modules/M8/M8.3-cookies"
          },
          {
            text: "M8.4 - NextAuth/Auth.js",
            link: "/modules/M8/M8.4-nextauth-auth-js"
          },
          {
            text: "M8.5 - Middleware",
            link: "/modules/M8/M8.5-middleware"
          },
          {
            text: "M8.6 - RBAC",
            link: "/modules/M8/M8.6-rbac"
          },
          {
            text: "M8.7 - Mẫu Enterprise Auth",
            link: "/modules/M8/M8.7-mau-enterprise-auth"
          }
        ]
      },
      {
        text: "M9 — SERVER ACTIONS",
        collapsed: true,
        items: [
          {
            text: "M9.1 - Tiến hóa",
            link: "/modules/M9/M9.1-tien-hoa"
          },
          {
            text: "M9.2 - Server Actions",
            link: "/modules/M9/M9.2-server-actions"
          },
          {
            text: "M9.3 - Form Actions",
            link: "/modules/M9/M9.3-form-actions"
          },
          {
            text: "M9.4 - Mutations",
            link: "/modules/M9/M9.4-mutations"
          },
          {
            text: "M9.5 - Optimistic UI",
            link: "/modules/M9/M9.5-optimistic-ui"
          },
          {
            text: "M9.6 - Xác thực",
            link: "/modules/M9/M9.6-xac-thuc"
          },
          {
            text: "M9.9 - Bảo mật",
            link: "/modules/M9/M9.9-bao-mat"
          }
        ]
      },
      {
        text: "M10 — TÍCH HỢP CƠ SỞ DỮ LIỆU",
        collapsed: true,
        items: [
          {
            text: "M10.1 - Prisma",
            link: "/modules/M10/M10.1-prisma"
          },
          {
            text: "M10.2 - Drizzle",
            link: "/modules/M10/M10.2-drizzle"
          },
          {
            text: "M10.3 - Connection Pooling",
            link: "/modules/M10/M10.3-connection-pooling"
          },
          {
            text: "M10.4 - Transactions",
            link: "/modules/M10/M10.4-transactions"
          },
          {
            text: "M10.5 - Vấn đề N+1",
            link: "/modules/M10/M10.5-van-e-n-1"
          },
          {
            text: "M10.6 - Repository Patterns",
            link: "/modules/M10/M10.6-repository-patterns"
          }
        ]
      },
      {
        text: "M11 — KỸ NGHỆ HIỆU NĂNG",
        collapsed: true,
        items: [
          {
            text: "M11.1 - Bundle Analysis",
            link: "/modules/M11/M11.1-bundle-analysis"
          },
          {
            text: "M11.2 - Dynamic Imports",
            link: "/modules/M11/M11.2-dynamic-imports"
          },
          {
            text: "M11.3 - Code Splitting",
            link: "/modules/M11/M11.3-code-splitting"
          },
          {
            text: "M11.4 - Tối ưu Hình ảnh",
            link: "/modules/M11/M11.4-toi-uu-hinh-anh"
          },
          {
            text: "M11.5 - Fonts",
            link: "/modules/M11/M11.5-fonts"
          },
          {
            text: "M11.6 - Core Web Vitals",
            link: "/modules/M11/M11.6-core-web-vitals"
          },
          {
            text: "M11.7 - Profiling",
            link: "/modules/M11/M11.7-profiling"
          },
          {
            text: "M11.8 - Performance Budget",
            link: "/modules/M11/M11.8-performance-budget"
          }
        ]
      },
      {
        text: "M12 — TESTING - KIỂM THỬ",
        collapsed: true,
        items: [
          {
            text: "M12.1 - Unit Testing",
            link: "/modules/M12/M12.1-unit-testing"
          },
          {
            text: "M12.2 - Integration Testing",
            link: "/modules/M12/M12.2-integration-testing"
          },
          {
            text: "M12.3 - E2E Testing",
            link: "/modules/M12/M12.3-e2e-testing"
          },
          {
            text: "M12.4 - Testing Server Components",
            link: "/modules/M12/M12.4-testing-server-components"
          },
          {
            text: "M12.5 - Chiến lược Testing",
            link: "/modules/M12/M12.5-chien-luoc-testing"
          }
        ]
      },
      {
        text: "M13 — DEPLOYMENT - TRIỂN KHAI",
        collapsed: true,
        items: [
          {
            text: "M13.1 - Vercel",
            link: "/modules/M13/M13.1-vercel"
          },
          {
            text: "M13.2 - Docker",
            link: "/modules/M13/M13.2-docker"
          },
          {
            text: "M13.3 - Self-hosting (Tự host)",
            link: "/modules/M13/M13.3-self-hosting-tu-host"
          },
          {
            text: "M13.4 - CI/CD",
            link: "/modules/M13/M13.4-ci-cd"
          },
          {
            text: "M13.5 - Environment Management",
            link: "/modules/M13/M13.5-environment-management"
          }
        ]
      },
      {
        text: "M14 — OBSERVABILITY - QUAN SÁT",
        collapsed: true,
        items: [
          {
            text: "M14.1 - Logging",
            link: "/modules/M14/M14.1-logging"
          },
          {
            text: "M14.2 - Metrics",
            link: "/modules/M14/M14.2-metrics"
          },
          {
            text: "M14.3 - Tracing",
            link: "/modules/M14/M14.3-tracing"
          },
          {
            text: "M14.4 - Giám sát Production Monitoring",
            link: "/modules/M14/M14.4-giam-sat-production-monitoring"
          },
          {
            text: "M14.5 - Phản ứng Sự cố (Incident Response)",
            link: "/modules/M14/M14.5-phan-ung-su-co-incident-response"
          }
        ]
      },
      {
        text: "M15 — ENTERPRISE ARCHITECTURE - KIẾN TRÚC DOANH NGHIỆP",
        collapsed: true,
        items: [
          {
            text: "M15.1 - Monolith vs Modular Monolith",
            link: "/modules/M15/M15.1-monolith-vs-modular-monolith"
          },
          {
            text: "M15.2 - Feature-based Architecture",
            link: "/modules/M15/M15.2-feature-based-architecture"
          },
          {
            text: "M15.3 - Mở rộng Multi-team",
            link: "/modules/M15/M15.3-mo-rong-multi-team"
          },
          {
            text: "M15.4 - Monorepo",
            link: "/modules/M15/M15.4-monorepo"
          },
          {
            text: "M15.5 - Micro Frontends",
            link: "/modules/M15/M15.5-micro-frontends"
          },
          {
            text: "M15.6 - Enterprise Trade-offs",
            link: "/modules/M15/M15.6-enterprise-trade-offs"
          }
        ]
      },
      {
        text: "M16 — DEBUGGING LAB - PHÒNG THÍ NGHIỆM DEBUG",
        collapsed: true,
        items: [
          {
            text: "M16.1 - Hydration Errors",
            link: "/modules/M16/M16.1-hydration-errors"
          },
          {
            text: "M16.2 - Cache Bugs",
            link: "/modules/M16/M16.2-cache-bugs"
          },
          {
            text: "M16.3 - Rendering Bugs",
            link: "/modules/M16/M16.3-rendering-bugs"
          },
          {
            text: "M16.4 - Race Conditions",
            link: "/modules/M16/M16.4-race-conditions"
          },
          {
            text: "M16.5 - Rò rỉ bộ nhớ Memory Leaks",
            link: "/modules/M16/M16.5-ro-ri-bo-nho-memory-leaks"
          },
          {
            text: "M16.6 - Production Incidents Sự cố Production",
            link: "/modules/M16/M16.6-production-incidents-su-co-production"
          }
        ]
      },
      {
        text: "M17 — LEGACY MIGRATION LAB",
        collapsed: true,
        items: [
          {
            text: "M17.1 - Pages Router",
            link: "/modules/M17/M17.1-pages-router"
          },
          {
            text: "M17.2 - Legacy APIs",
            link: "/modules/M17/M17.2-legacy-apis"
          },
          {
            text: "M17.3 - Legacy Patterns",
            link: "/modules/M17/M17.3-legacy-patterns"
          },
          {
            text: "M17.4 - Incremental Migration",
            link: "/modules/M17/M17.4-incremental-migration"
          },
          {
            text: "M17.5 - Ràng buộc Enterprise Constraints",
            link: "/modules/M17/M17.5-rang-buoc-enterprise-constraints"
          }
        ]
      },
      {
        text: "M18 — CHUẨN BỊ PHỎNG VẤN",
        collapsed: true,
        items: [
          {
            text: "M18.1 - Junior",
            link: "/modules/M18/M18.1-junior"
          },
          {
            text: "M18.2 - Mid",
            link: "/modules/M18/M18.2-mid"
          },
          {
            text: "M18.3 - Senior",
            link: "/modules/M18/M18.3-senior"
          },
          {
            text: "M18.4 - Staff",
            link: "/modules/M18/M18.4-staff"
          },
          {
            text: "M18.5 - Architect",
            link: "/modules/M18/M18.5-architect"
          }
        ]
      },
      {
        text: "M19 — CAPSTONE PROJECT",
        collapsed: true,
        items: [
          {
            text: "M19.1 - SaaS Architecture",
            link: "/modules/M19/M19.1-saas-architecture"
          },
          {
            text: "M19.2 - Auth & Organizations",
            link: "/modules/M19/M19.2-auth-organizations"
          },
          {
            text: "M19.3 - Roles & Permissions",
            link: "/modules/M19/M19.3-roles-permissions"
          },
          {
            text: "M19.4 - Dashboard",
            link: "/modules/M19/M19.4-dashboard"
          },
          {
            text: "M19.5 - Audit Logs",
            link: "/modules/M19/M19.5-audit-logs"
          },
          {
            text: "M19.6 - Billing",
            link: "/modules/M19/M19.6-billing"
          },
          {
            text: "M19.7 - Observability",
            link: "/modules/M19/M19.7-observability"
          },
          {
            text: "M19.8 - Performance Optimization",
            link: "/modules/M19/M19.8-performance-optimization"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://tuanlee-tech.github.io/nextjs' }
    ]
  }
})
