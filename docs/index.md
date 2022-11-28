---
layout: home
title: CH Guide 
description: Unofficial Companies House developer guide
hero:
    name: CH Guide
    text:  Companies House data developer guide
    tagline: Unofficial community-driven effort to provide clear and correct guidance for working with Companies House data.
    actions:
      - theme: brand
        text: Bulk files
        link: /bulk-data/
      - theme: alt
        text: REST API
        link: /rest-api/
      - theme: alt
        text: Streaming API
        link: /streams/

features:
  - title: Avoid common pitfalls
    details: There are many footguns when using the Companies House data products. Build on other developers experience to avoid shooting yourself in the foot 🦶.
  - title: Discover new data products
    details: One place with documentation for many data products, compiled from various sources.
  - title: Common questions answered
    details: Good answers to the most commonly asked questions on the developer forum.
---

<div style="margin: 2rem auto 0;max-width: 1152px;">

Companies House offers data in various ways which can be used for one-time queries, 
or for maintaining an up-to-date database that stays in sync with Companies House data.

In general, the REST API is good for one-time queries such as "get the registered office address for a specific company" or 
"which companies is this person a director of" etc. 

Whereas the bulk products combined with the Streaming API make it possible to keep a database always up-to-date with the latest data.
For example, you can load the basic company information data set into a database and then listen on the company events stream to update it when a companies details change.

</div>
