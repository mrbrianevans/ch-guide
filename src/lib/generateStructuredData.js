export function generateLd(metadata){
  const {email} = metadata.gitCommit.commit.author
  const username = email.match(/^.*?\+(.+)@users\.noreply\.github\.com$/)
  const authorUrl = username === null ? `mailto:${email}` : `https://github.com/${username[1]}`
  return `<script type="application/ld+json">
    ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "author": [{
      "@type": "Person",
      "url": authorUrl,
      "name": metadata.gitCommit.commit.author.name
    }],
    dateModified: new Date(metadata.gitCommit.commit.author?.timestamp*1000).toISOString(),
    headline: metadata.title
  })}
  </script>`
}
