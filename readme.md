# CH Guide

Community-written documentation for Companies House developer products.

Written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) format, built with [VitePress](https://vitepress.vuejs.org/), deployed on [GitHub Pages](https://pages.github.com/).

If you spot any pages that need improvement or have an idea for a new page please open an issue on the GitHub repository, 
or if you know what needs to be done, open a pull request.

Documentation is in the `docs` directory.


## Guidelines
Every page should have a `description` set in the frontmatter. This description is used by search engines to work out 
what the page is about.

The sitemap should be regenerated with `pnpm sitemap` after any articles have been modified, before committing the changes to Git.
