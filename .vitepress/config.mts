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
      { text: 'Home', link: '/' },
      { text: 'Course Outline', link: '/INTRO' }
    ],
    sidebar: [
      {
        text: 'Nội dung khóa học',
        items: [
          { text: 'Giới thiệu', link: '/INTRO' },
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'M0: Orientation', link: '/modules/M0-orientation' },
          { text: 'M1: React Mental Models', link: '/modules/M1-react-mental-models' },
          { text: 'M2: Legacy Next.js', link: '/modules/M2-legacy-nextjs' },
          { text: 'M3: App Router Fundamentals', link: '/modules/M3-app-router-fundamentals' },
          { text: 'M4: Rendering Mental Models', link: '/modules/M4-rendering-mental-models' },
          { text: 'M5: Data Fetching Architecture', link: '/modules/M5-data-fetching-architecture' },
          { text: 'M6: Server Components', link: '/modules/M6-server-components' },
          { text: 'M7: Caching Deep Dive', link: '/modules/M7-caching-deep-dive' },
          { text: 'M8: Auth & Authorization', link: '/modules/M8-authentication-authorization' },
          { text: 'M9: Server Actions', link: '/modules/M9-server-actions' },
          { text: 'M10: Database Integration', link: '/modules/M10-database-integration' },
          { text: 'M11: Performance Engineering', link: '/modules/M11-performance-engineering' },
          { text: 'M12: Testing', link: '/modules/M12-testing' },
          { text: 'M13: Deployment', link: '/modules/M13-deployment' },
          { text: 'M14: Observability', link: '/modules/M14-observability' },
          { text: 'M15: Enterprise Architecture', link: '/modules/M15-enterprise-architecture' },
          { text: 'M16: Debugging Lab', link: '/modules/M16-debugging-lab' },
          { text: 'M17: Legacy Migration Lab', link: '/modules/M17-legacy-migration-lab' },
          { text: 'M18: Interview Preparation', link: '/modules/M18-interview-preparation' },
          { text: 'M19: Capstone Project', link: '/modules/M19-capstone-project' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://tuanlee-tech.github.io/nextjs' }
    ]
  }
})
