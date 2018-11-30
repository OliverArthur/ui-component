module.exports = {
  title: 'UI Components',
  description: "A demo documentation using VuePress",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'DSM Zava UK Library', link: 'https://zava.invisionapp.com/dsm/zava/zava-uk-library' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/how-it-works',
          '/guide/supported-browsers',
          '/guide/style-guide'
        ]
      },
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/layout/'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/button'
        ]
      },
      {
        title: 'Directives',
        collapsable: false,
        children: [
          '/directives/'
        ]
      },
      {
        title: 'Server side rendering (SSR)',
        collapsable: false,
        children: [
          '/ssr/'
        ]
      }
    ]
  }
}
