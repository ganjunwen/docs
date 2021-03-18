module.exports = {
  base: "/docs/",
  title: 'Dendi的博客',
  description: 'zzl',
  head: [
    ['meta', {
      name: 'keywords',
      content: '这是Dendi的博客'
    }],
    ['meta', {
      name: 'author',
      content: '这是Dendi的博客'
    }],
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/img/hero.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/about.md'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'Chinese',
            link: '/language/chinese/'
          },
          {
            text: 'Japanese',
            link: '/language/japanese/'
          }
        ]
      }
    ],
    sidebar: [
      '/',
      'about'
    ],
    lastUpdated: '更新时间', // string | boolean
  }
}