<script context="module">
  export async function load({ params, fetch, session }) {
    const { group, slug } = params;

    // if theres a slug but not a group, redirect to the first
    // slugs' item (in this case the slug is the group)
    if (session.get("sidebar").has(slug) && (!group || group?.length === 0)) {
      let defaultFile;

      for (const [, value] of session.get("sidebar").get(slug)) {
        for (const [keyC] of value.files) {
          defaultFile = keyC;
          break;
        }
        if (defaultFile) break;
      }

      return !defaultFile
        ? {
          status: 400,
          error: "No posts available"
        }
        : {
          status: 307,
          redirect: defaultFile.replace(/\.[^/.]+$/, "")
        };
    }

    // needs to be post so slug and group are passed
    // from here
    const post = await fetch(`/${group}/${slug}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(params)
    }).then((r) => r.json());

    if (post?.error) {
      return {
        status: post.status,
        error: post.status === 404 ? "Post not found" : "Server Error"
      };
    }
    return {
      props: { post, params }
    };
  }
</script>

<script>
  import Content from "$lib/SveltePress/components/content.svelte";
  import Config from "$lib/SveltePress/sveltePress.config";
  import {
    // Breadcrumb, BreadcrumbItem,
    Tag, Tile
  } from "carbon-components-svelte";

  export let post, params;
</script>

<svelte:head>
  <meta content="CH Guide" property="og:site_name" />
  <meta content={post.meta.postName + ' - ' + Config.title} property="og:title" />
  <meta content="article" property="og:type" />
  <meta content="en_GB" property="og:locale" />
  {#if post.meta.description}
    <meta content={post.meta.description} property="og:description" />
    <meta content={post.meta.description} name="description" />
  {/if}
  {#if post.meta.tags}
    {#each post.meta.tags as tag}
      <meta content={tag} property="article:tag" />
    {/each}
  {/if}
  <title>{post.meta.postName + ' - ' + Config.title}</title>
</svelte:head>

<Content meta={post.meta} pagination={post.pagination}>
  <p>
<!--    commented out until the date is accurate. Need to get modified date from Git log -->
<!--    Posted on {Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(post.meta.date))}-->
    {#if post.meta.tags}
      {#each post.meta.tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    {/if}
  </p>
  {#if post.meta.description}
    <Tile>
      <!--			this is commented out until groupName can be successfully passed through -->
      <!--			<Breadcrumb>-->
      <!--				<BreadcrumbItem href="/">Home</BreadcrumbItem>-->
      <!--				<BreadcrumbItem href="/{params.group}">{post.meta.groupName}</BreadcrumbItem>-->
      <!--				<BreadcrumbItem href="/{params.group}/{params.slug}">{post.meta.postName}</BreadcrumbItem>-->
      <!--			</Breadcrumb>-->
      <h1>{post.meta.postName}</h1>
      {post.meta.description}
    </Tile>
  {/if}
  <!--todo: add a button to report a mistake on the page and to edit it on GitHub -->
  {@html post.body}
</Content>
