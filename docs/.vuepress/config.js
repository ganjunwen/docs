module.exports = {
    title: 'Dendi的博客',
    description: 'zzl',
    head: [
      ['meta', { name: 'keywords', content: '这是Dendi的博客' }],
      ['meta', { name: 'author', content: '这是Dendi的博客' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      logo: '/assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about.md' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
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