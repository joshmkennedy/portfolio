---
layout: ../../layouts/project.astro
title: Interactive Maps
client: Dan Pink through Out:think Group
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
description: |
  An interactive world map that would display user submitted regrets from around the world
tags:
  - SVG
  - Data visualization
  - React
---

In 2020, I built an interactive map for the author Dan Pink. He was conducting a survey for a book he was writing, that collected peoples regrets. He wanted to show in a fun and visual way the entries he had collected along the way. Using the qualtrics api, and serverless functions I pulled down results, and stored them in a json file. The next step was displaying the results. I built him a World map who's countries, were colored based on how many regrets had been collected for that location, and could be clicked, and then zoom in on the country and display a few regrets for that location. I used svg for the map so that I could animate the viewbox when the user clicked to get a nice transition from seeing the whole world to the country. The finish version is at wordregretsurvey.com.

## WHAT I LEARNED

I learned how to use github actions, serverless functions, and got really good at transforming data. I learned how
svg viewboxes work and how to measure shapes inside svg to be able to create the zoom animation.

## TECH:

- React
- Gatsby
- Wordpress
- serverless Functions
- Github actions
- SVG
- react spring
