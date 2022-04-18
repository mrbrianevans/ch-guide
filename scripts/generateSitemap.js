import xml from "xml";
import { readdir, stat, writeFile } from "fs/promises";
import fs from 'fs'
import path from "path";
import {log} from 'isomorphic-git'

const gitdir = path.resolve('.git')
/**
 * Generates an XML sitemap in the static folder for bot crawlers like Google.
 */
export async function generateSitemap() {
  const pageFiles = await getPages("pages");
  const baseUrl = "https://chguide.co.uk/";
  const pages = await Promise.all(pageFiles.map(f => getModDate(f).then(lastmod => ({
    url: [
      { loc: baseUrl + path.relative("pages", f).slice(0, -3).replaceAll("\\", "/") },
      { lastmod }
    ]
  }))));
  const indexModTime = await getModDate("src/routes/index.svelte")
  const sitemap = {
    urlset: [
      { _attr: { "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9" } },
      { url: [{ loc: baseUrl }, { lastmod: indexModTime }] },
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

async function getModDate(filepath){
  const relPath = path.relative('.',filepath).replaceAll('\\','/')
  const history = await log({filepath:relPath, depth:1, gitdir ,fs, force:true})
  // console.log(relPath, 'last committed',new Date(history[0].commit.committer.timestamp*1000), 'in',history[0].commit.message.substring(0,history[0].commit.message.indexOf('\n')))
  return new Date(history[0].commit.committer.timestamp*1000).toISOString()
  // following this is a worse implementation that does not use git
  const s = await stat(filepath)
  return s.mtime.toISOString()
}
