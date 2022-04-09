import xml from "xml";
import { readdir, stat, writeFile } from "fs/promises";
import path from "path";

/**
 * Generates an XML sitemap in the static folder for bot crawlers like Google.
 */
export async function generateSitemap() {
  const pageFiles = await getPages("pages");
  const baseUrl = "https://chguide.co.uk/";
  const pages = await Promise.all(pageFiles.map(f => stat(f).then(s => ({
    url: [
      { loc: baseUrl + path.relative("pages", f).slice(0, -3).replaceAll("\\", "/") },
      { lastmod: s.mtime.toISOString() }
    ]
  }))));
  const indexModTime = await stat("src/routes/index.svelte").then(s => s.mtime);
  const sitemap = {
    urlset: [
      { _attr: { "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9" } },
      { url: [{ loc: baseUrl }, { lastmod: indexModTime.toISOString() }] },
      ...pages
    ]
  };
  const sitemapXml = xml(sitemap, { declaration: true, indent: true });
  await writeFile(path.resolve("static", "sitemap.xml"), sitemapXml);
}

/**
 * Returns list of pages as an array of strings which are relative file paths from the root.
 * @param directory {string} - directory to look in for pages
 * @returns {string[]}
 */
async function getPages(directory) {
  const children = await readdir(directory, { withFileTypes: true });
  const pages = children.filter((x) => (x.name.toLowerCase().endsWith(".md") && x.name.toLowerCase() !== "readme.md") || x.isDirectory()).map(p => {
    if (p.isDirectory()) return getPages(path.resolve(directory, p.name)).then(p => p.flat());
    else return path.resolve(directory, p.name);
  });
  return Promise.all(pages).then(ps => ps.flat());
}

await generateSitemap();
