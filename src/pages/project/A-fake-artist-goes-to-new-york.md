---
layout: ../../layouts/project.astro
title: A fake artist goes to New York (Realtime Multiplayer Game)
client: Self
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
description: |
  A realtime Multiplayer drawing game using websockets
tags:
  - SVG and Canvas
  - Websockets
  - React
  - Full Stack
---

I wanted to learn websockets, and I also wanted to play with HTML Canvas. At the time I recently learned of board
game called "A fake artist goes to New York". Its similar to pictionary. I built an online version of this using
websockets. I used Redwood js for managing the non-realtime aspects of the app, and the stood up a seperate node app
on heroku for the websockets. For the drawing part, I started with Canvas, but ended up changing to svgs for they
were easier to update each of the players paths. I eventually figured out a way to do it with canvas, but the svg
implementation worked well enough.

## WHAT I LEARNED

I learned how to use websockets, and you to manage multiple "rooms" and clients. I also learned how to use simple
State machines for controlling the phases of the game. I learned how to draw using both svg, and canvas. I got
experience with the Redwood framework and prismadb.

## TECH.

- React
- Redwood
- websockets
- node
- prismadb
- posgres
- SVG
- graphql
