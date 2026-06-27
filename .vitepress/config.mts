import { defineConfig } from 'vitepress';

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
        text: "M0 — Orientation & Evolution Map",
        collapsed: true,
        items: [
          {
            text: "M0.1 - Tại sao Next.js tồn tại",
            link: "/modules/M0/M0.1-tai-sao-next-js-ton-tai"
          },
          {
            text: "M0.2 - Dòng thời gian Tiến hóa đầy đủ",
            link: "/modules/M0/M0.2-dong-thoi-gian-tien-hoa-day-du"
          },
          {
            text: "M0.3 - Các công ty thực sự dùng Next.js như thế nào",
            link: "/modules/M0/M0.3-cac-cong-ty-thuc-su-dung-next-js-nhu-the-nao"
          },
          {
            text: "M0.4 - Hiểu lầm phổ biến",
            link: "/modules/M0/M0.4-hieu-lam-pho-bien"
          },
          {
            text: "M0.5 - Next.js Ecosystem & Tooling",
            link: "/modules/M0/M0.5-next-js-ecosystem-tooling"
          }
        ]
      },
      {
        text: "M1 — App Router Foundations",
        collapsed: true,
        items: [
          {
            text: "M1.1 - App Router & File-System Routing",
            link: "/modules/M1/M1.1-app-router-file-system-routing"
          },
          {
            text: "M1.2 - Server Components vs Client Components",
            link: "/modules/M1/M1.2-server-components-vs-client-components"
          },
          {
            text: "M1.3 - Loading, Error, và Streaming UI",
            link: "/modules/M1/M1.3-loading-error-streaming-ui"
          },
          {
            text: "M1.4 - Navigation & Linking",
            link: "/modules/M1/M1.4-navigation-linking"
          },
          {
            text: "M1.5 - Metadata API & SEO Foundations",
            link: "/modules/M1/M1.5-metadata-api-seo-foundations"
          }
        ]
      },
      {
        text: "M2 — Data Fetching Patterns",
        collapsed: true,
        items: [
          {
            text: "M2.1 - Server Components Data Fetching",
            link: "/modules/M2/M2.1-server-components-data-fetching"
          },
          {
            text: "M2.2 - Client-Side Data Fetching & State",
            link: "/modules/M2/M2.2-client-side-data-fetching-state"
          },
          {
            text: "M2.3 - Route Handlers (API Layer)",
            link: "/modules/M2/M2.3-route-handlers-api-layer"
          },
          {
            text: "M2.4 - Form Handling & Validation Patterns",
            link: "/modules/M2/M2.4-form-handling-validation-patterns"
          },
          {
            text: "M2.5 - Error Handling & Resilience Patterns",
            link: "/modules/M2/M2.5-error-handling-resilience-patterns"
          }
        ]
      },
      {
        text: "M3 — Styling & Assets",
        collapsed: true,
        items: [
          {
            text: "M3.1 - Styling trong Next.js — CSS Modules, Tailwind, CSS-in-JS",
            link: "/modules/M3/M3.1-styling-css-modules-tailwind-css-in-js"
          },
          {
            text: "M3.2 - next/image và next/link — Optimization Primitives",
            link: "/modules/M3/M3.2-next-image-next-link-optimization-primitives"
          },
          {
            text: "M3.3 - Fonts & Typography Optimization",
            link: "/modules/M3/M3.3-fonts-typography-optimization"
          },
          {
            text: "M3.4 - Global Styles & Theme Setup",
            link: "/modules/M3/M3.4-global-styles-theme-setup"
          }
        ]
      },
      {
        text: "M4 — React Server Components Deep Dive",
        collapsed: true,
        items: [
          {
            text: "M4.1 - The Server/Client Component Boundary — Deep Dive",
            link: "/modules/M4/M4.1-server-client-component-boundary-deep-dive"
          },
          {
            text: "M4.2 - RSC Streaming & Suspense Internals",
            link: "/modules/M4/M4.2-rsc-streaming-suspense-internals"
          },
          {
            text: "M4.3 - Third-Party Libraries & RSC Integration",
            link: "/modules/M4/M4.3-third-party-libraries-rsc-integration"
          },
          {
            text: "M4.4 - RSC Composition Patterns",
            link: "/modules/M4/M4.4-rsc-composition-patterns"
          }
        ]
      },
      {
        text: "M5 — Caching Architecture",
        collapsed: true,
        items: [
          {
            text: "M5.1 - Cache Architecture — Mental Model",
            link: "/modules/M5/M5.1-cache-architecture-mental-model"
          },
          {
            text: "M5.2 - 'use cache' & Cache Components Implementation",
            link: "/modules/M5/M5.2-use-cache-cache-components-implementation"
          },
          {
            text: "M5.3 - Partial Prerendering (PPR) & Streaming Architecture",
            link: "/modules/M5/M5.3-partial-prerendering-streaming-architecture"
          },
          {
            text: "M5.4 - Cache Invalidation Strategies",
            link: "/modules/M5/M5.4-cache-invalidation-strategies"
          },
          {
            text: "M5.5 - Cache Debugging & Monitoring",
            link: "/modules/M5/M5.5-cache-debugging-monitoring"
          }
        ]
      },
      {
        text: "M6 — Server Actions & Mutations",
        collapsed: true,
        items: [
          {
            text: "M6.1 - Server Actions — Fundamentals",
            link: "/modules/M6/M6.1-server-actions-fundamentals"
          },
          {
            text: "M6.2 - Server Actions — Advanced Patterns",
            link: "/modules/M6/M6.2-server-actions-advanced-patterns"
          },
          {
            text: "M6.3 - Authentication with Server Actions",
            link: "/modules/M6/M6.3-authentication-with-server-actions"
          },
          {
            text: "M6.4 - Server Actions Security & Validation",
            link: "/modules/M6/M6.4-server-actions-security-validation"
          }
        ]
      },
      {
        text: "M7 — Authentication & Authorization",
        collapsed: true,
        items: [
          {
            text: "M7.1 - Authentication & Authorization Architecture",
            link: "/modules/M7/M7.1-authentication-authorization-architecture"
          },
          {
            text: "M7.2 - proxy.ts vs middleware.ts — Migration & Security",
            link: "/modules/M7/M7.2-proxy-ts-vs-middleware-ts-migration-security"
          },
          {
            text: "M7.3 - Edge Runtime & API Layer",
            link: "/modules/M7/M7.3-edge-runtime-api-layer"
          },
          {
            text: "M7.4 - Session Management & JWT",
            link: "/modules/M7/M7.4-session-management-jwt"
          }
        ]
      },
      {
        text: "M8 — Advanced Routing & Patterns",
        collapsed: true,
        items: [
          {
            text: "M8.1 - Advanced Routing — Parallel & Intercepting Routes",
            link: "/modules/M8/M8.1-advanced-routing-parallel-intercepting-routes"
          },
          {
            text: "M8.2 - State Management in App Router",
            link: "/modules/M8/M8.2-state-management-in-app-router"
          },
          {
            text: "M8.3 - SEO & Structured Data Advanced",
            link: "/modules/M8/M8.3-seo-structured-data-advanced"
          },
          {
            text: "M8.4 - Middleware & Proxy Patterns",
            link: "/modules/M8/M8.4-middleware-proxy-patterns"
          },
          {
            text: "M8.5 - Internationalization (i18n) Patterns",
            link: "/modules/M8/M8.5-internationalization-i18n-patterns"
          }
        ]
      },
      {
        text: "M9 — Performance Engineering",
        collapsed: true,
        items: [
          {
            text: "M9.1 - Performance Engineering — Core Web Vitals",
            link: "/modules/M9/M9.1-performance-engineering-core-web-vitals"
          },
          {
            text: "M9.2 - Turbopack Configuration & Build Optimization",
            link: "/modules/M9/M9.2-turbopack-configuration-build-optimization"
          },
          {
            text: "M9.3 - Observability & Monitoring",
            link: "/modules/M9/M9.3-observability-monitoring"
          },
          {
            text: "M9.4 - React Compiler & Automatic Memoization",
            link: "/modules/M9/M9.4-react-compiler-automatic-memoization"
          },
          {
            text: "M9.5 - Bundle Analysis & Code Splitting",
            link: "/modules/M9/M9.5-bundle-analysis-code-splitting"
          }
        ]
      },
      {
        text: "M10 — Testing Strategy",
        collapsed: true,
        items: [
          {
            text: "M10.1 - Testing Strategy — Unit, Integration, E2E",
            link: "/modules/M10/M10.1-testing-strategy-unit-integration-e2e"
          },
          {
            text: "M10.2 - Security Patterns & Hardening",
            link: "/modules/M10/M10.2-security-patterns-hardening"
          },
          {
            text: "M10.3 - after() API & Background Tasks",
            link: "/modules/M10/M10.3-after-api-background-tasks"
          },
          {
            text: "M10.4 - Production Debugging & Error Tracking",
            link: "/modules/M10/M10.4-production-debugging-error-tracking"
          }
        ]
      },
      {
        text: "M11 — Pages Router & Legacy Codebase",
        collapsed: true,
        items: [
          {
            text: "M11.1 - Pages Router — Architecture & Data Fetching",
            link: "/modules/M11/M11.1-pages-router-architecture-data-fetching"
          },
          {
            text: "M11.2 - Pages Router — Middleware, i18n & Production",
            link: "/modules/M11/M11.2-pages-router-middleware-i18n-production"
          },
          {
            text: "M11.3 - Pages Router — State, Context & API Routes",
            link: "/modules/M11/M11.3-pages-router-state-context-api-routes"
          },
          {
            text: "M11.4 - getStaticProps & getServerSideProps Deep Dive",
            link: "/modules/M11/M11.4-getstaticprops-getserversideprops-deep-dive"
          },
          {
            text: "M11.5 - ISR & Incremental Static Regeneration",
            link: "/modules/M11/M11.5-isr-incremental-static-regeneration"
          }
        ]
      },
      {
        text: "M12 — Migration Engineering",
        collapsed: true,
        items: [
          {
            text: "M12.1 - Migration Strategy — From Pages to App Router",
            link: "/modules/M12/M12.1-migration-strategy-from-pages-to-app-router"
          },
          {
            text: "M12.2 - [LEGACY_BRIDGE] Next.js 15 Breaking Changes",
            link: "/modules/M12/M12.2-legacy-bridge-next-js-15-breaking-changes"
          },
          {
            text: "M12.3 - Migration — Specific Pattern Transforms",
            link: "/modules/M12/M12.3-migration-specific-pattern-transforms"
          },
          {
            text: "M12.4 - Turbopack Migration & Build System",
            link: "/modules/M12/M12.4-turbopack-migration-build-system"
          }
        ]
      },
      {
        text: "M13 — Deployment & Infrastructure",
        collapsed: true,
        items: [
          {
            text: "M13.1 - Deployment on Vercel",
            link: "/modules/M13/M13.1-deployment-on-vercel"
          },
          {
            text: "M13.2 - Self-Hosted Deployment & Docker",
            link: "/modules/M13/M13.2-self-hosted-deployment-docker"
          },
          {
            text: "M13.3 - CI/CD, Build Adapters & Infrastructure",
            link: "/modules/M13/M13.3-ci-cd-build-adapters-infrastructure"
          },
          {
            text: "M13.4 - Environment Management & Secrets",
            link: "/modules/M13/M13.4-environment-management-secrets"
          }
        ]
      },
      {
        text: "M14 — System Design & Capstone",
        collapsed: true,
        items: [
          {
            text: "M14.1 - System Design with Next.js",
            link: "/modules/M14/M14.1-system-design-with-next-js"
          },
          {
            text: "M14.2 - Capstone — Enterprise Migration Project (Part 1)",
            link: "/modules/M14/M14.2-capstone-enterprise-migration-project-part-1"
          },
          {
            text: "M14.3 - Capstone — Enterprise Migration Project (Part 2)",
            link: "/modules/M14/M14.3-capstone-enterprise-migration-project-part-2"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://tuanlee-tech.github.io/nextjs' }
    ]
  }
})