import type { UserConfig } from "vitepress";
// used for sidebar and navbar. Should contain links to main sections, but not every page.
const navigationTree = [
  {
    text: "Bulk data",
    items: [
      { text: "Overview", link: "/bulk-data/" },
      { text: "Companies", link: "/bulk-data/companies" },
      { text: "Persons with significant control", link: "/bulk-data/psc" },
      { text: "Officers", link: "/bulk-data/officers/" },
      { text: "Accounts", link: "/bulk-data/accounts/" },
    ],
  },
  {
    text: "APIs",
    items: [
      { text: "Streaming API", link: "/streams/" },
      { text: "REST API", link: "/rest-api/" },
    ],
  },
];

const siteUrl = "https://chguide.co.uk/";

/** "bulk-data/index.md" -> "bulk-data/", "streams/officers.md" -> "streams/officers", "index.md" -> "" */
const pageUrlPath = (relativePath: string) =>
  relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");

// URL paths of pages with `noindex: true` frontmatter, collected while page data is transformed
const noindexUrls = new Set<string>();

/**
 * @type {import("vitepress").UserConfig}
 */
const config: UserConfig = {
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
  title: "CH Guide",
  description: "Unofficial Companies House developer guide",
  outDir: "../build",
  lang: "en-GB",
  lastUpdated: true,
  markdown: {
    theme: { dark: "dark-plus", light: "light-plus" },
  },
  themeConfig: {
    editLink: {
      pattern: "https://github.com/mrbrianevans/ch-guide/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: navigationTree,
    sidebar: navigationTree,
    footer: {
      message: "Made with ♥ by <a href='https://brianevans.tech' target='blank'>Brian Evans</a>",
      copyright: "Open source",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mrbrianevans/ch-guide",
      },
    ],
  },
  cleanUrls: true,
  sitemap: {
    hostname: siteUrl,
    // keep pages marked `noindex: true` in frontmatter out of the sitemap
    transformItems: (items) => items.filter((item) => !noindexUrls.has(item.url)),
  },
  transformPageData(pageData) {
    const path = pageUrlPath(pageData.relativePath);
    pageData.frontmatter.head ??= [];
    // tell Google which URL is the real one (GitHub Pages also serves /page.html and redirects /dir to /dir/)
    pageData.frontmatter.head.push(["link", { rel: "canonical", href: siteUrl + path }]);
    if (pageData.frontmatter.noindex) {
      noindexUrls.add(path);
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }]);
    }
  },
};

export default config;
