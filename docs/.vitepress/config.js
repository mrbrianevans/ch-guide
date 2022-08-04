/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "CH Guide",
  description: 'Unofficial Companies House developer guide',
  outDir: '../build',
  lang: 'en-GB',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {text: 'Bulk downloads', link: '/bulk-data'},
      {text: 'Streaming API', link: '/streams'},
      {text: 'REST API', link: '/rest-api'}
    ],
    editLink: {
      pattern: 'https://github.com/mrbrianevans/ch-guide/edit/master/docs/:path'
    }
  }
}

export default config
