import type {UserConfig} from "vitepress";
// used for sidebar and navbar. Should contain links to main sections, but not every page.
const navigationTree = [
  {
    text: 'Bulk data',
    items: [
      { text: 'Overview', link: '/bulk-data/' },
      { text: 'Companies', link: '/bulk-data/companies' },
      { text: 'Persons with significant control', link: '/bulk-data/psc' },
      { text: 'Officers', link: '/bulk-data/officers/' },
      { text: 'Accounts', link: '/bulk-data/accounts/' }
    ]
  },
  {
    text: 'APIs',
    items: [
      { text: 'Streaming API', link: '/streams/' },
      { text: 'REST API', link: '/rest-api/' }
    ]
  }
]

/**
 * @type {import("vitepress").UserConfig}
 */
const config: UserConfig = {
  "title": "CH Guide",
  "description": "Unofficial Companies House developer guide",
  "outDir": "../build",
  "lang": "en-GB",
  "lastUpdated": true,
  markdown: {
    theme: { dark: "dark-plus", light: "light-plus" }
  },
  "themeConfig": {
    "editLink": {
      "pattern": "https://github.com/mrbrianevans/ch-guide/edit/master/docs/:path", "text": "Edit this page on GitHub"
    }, "nav": navigationTree, "sidebar": navigationTree, "footer": {
      "message": "Made with ♥ by <a href='https://brianevans.tech' target='blank'>Brian Evans</a>",copyright: 'Open source'
    }, "socialLinks": [{
      "icon": "github", "link": "https://github.com/mrbrianevans/ch-guide"
    }]
  },
  cleanUrls: 'without-subfolders',
  transformHead(ctx){
    // can be used to add a head tag to every page pointing to a canonical URL for google crawl bots
    return [
      // ['link', {rel:'canonical', href:'https://chguide.co.uk/'+ctx.pageData.relativePath.replace(/\.md$/, '')}]
    ]
  }
};

export default config;

