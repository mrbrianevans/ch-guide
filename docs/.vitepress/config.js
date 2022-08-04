/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "CH Guide",
  description: 'Unofficial Companies House developer guide',
  outDir: '../build',
  base: '/ch-guide/',
  lang: 'en-GB',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/mrbrianevans/ch-guide/edit/master/docs/:path'
    }
  }
}

export default config
