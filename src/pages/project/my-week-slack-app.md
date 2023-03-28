---
layout: ../../layouts/project.astro
title: My Week (Slack App)
client: Self
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
description: |
  A slack app that provided a quick way to show which clients I tracked time for in the past week.
tags:
  - Canvas
  - Node
  - Serverless
  - Slack Api
---

I wanted a fun and easy way to share with my boss what I worked on this week. We used harvest time tracker to track
our time. I used their api to get the data, and then built a serverless function that converted this data into a pie
chart using node-canvas, that visualized where I spent my time. I then turned that into a png. I set this up as a slack app so you could trigger it with
`/my-week` and then in slack the image would then be displayed.

## WHAT I LEARNED

I learned about working with the harvest api, and how to dynamically generate images using node-canvas. The most
challenging part was deploying node-canvas to a serverless function.
