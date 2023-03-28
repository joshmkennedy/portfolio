# Projects

- Interactive Maps

  - DESCRIPTION:
    In 2020, I built an interactive map for the author Dan Pink. He was conducting a survey for a book he was writing, that collected peoples regrets. He wanted to show in a fun and visual way the entries he had collected along the way. Using the qualtrics api, and serverless functions I pulled down results, and stored them in a json file. The next step was displaying the results. I built him a World map who's countries, were colored based on how many regrets had been collected for that location, and could be clicked, and then zoom in on the country and display a few regrets for that location. I used svg for the map so that I could animate the viewbox when the user clicked to get a nice transition from seeing the whole world to the country. The finish version is at wordregretsurvey.com.
    Later in 2022, another author wanted something similar for displaying survey entries for their project. This project was similare but with additional features such as categories, database, and way more data. I used the original map as a base. I converted it to typescript, since I was going to be changing a lot and wanted to quickily know when I broke something. I used wordpress as the backend, so there would be lots of flexibility on how the results would be imported with plugins. I also added react router, so that locations and results could be easily shared.
  - WHAT I LEARNED
    I learned how to use github actions, serverless functions, and got really good at transforming data. I learned how
    svg viewboxes work and how to measure shapes inside svg to be able to create the zoom animation. I also learned a
    lot about good ways to convert a javascript code base to a typescript one.
  - TECH:
    - React
    - Gatsby
    - Wordpress
    - serverless Functions
    - Github actions
    - SVG
    - react spring

- A fake artist goes to New York (Realtime Multiplayer Game)
  - DESCRIPTION
    I wanted to learn websockets, and I also wanted to play with HTML Canvas. At the time I recently learned of board
    game called "A fake artist goes to New York". Its similar to pictionary. I built an online version of this using
    websockets. I used Redwood js for managing the non-realtime aspects of the app, and the stood up a seperate node app
    on heroku for the websockets. For the drawing part, I started with Canvas, but ended up changing to svgs for they
    were easier to update each of the players paths. I eventually figured out a way to do it with canvas, but the svg
    implementation worked well enough.
  - WHAT I LEARNED
    I learned how to use websockets, and you to manage multiple "rooms" and clients. I also learned how to use simple
    State machines for controlling the phases of the game. I learned how to draw using both svg, and canvas. I got
    experience with the Redwood framework and prismadb.
  - TECH.
    - React
    - Redwood
    - websockets
    - node
    - prismadb
    - posgres
    - SVG
    - graphql
- Sendmagnet
  - DESCRIPTION.
    At outthink we built an internal App to help with author preorder campaigns. The app made any easy way for authors
    to setup a email address that would be used for forwarding Reader's pre order amazon reciepts, that would then add
    the user to an email list and then send them the pre order bonuses. I built both the backend using PHP, and the
    frontend using Nextjs. We used graphql to communicate with the server. We used mailgun's api to forw
  - WHAT I LEARNED
    I learned how to implement a graphql server in php using wpgraphql, and how to use JSON web tokens. I also learned
    a lot about what makes a good unit test and what should be a integration test. Knowing which one to use to test a
    certain behavior made all the difference, when it came to test realiability.
  - TECH
    - Stripe API
    - graphql
    - React
    - php
    - Nextjs
    - third party API
- My Week (Slack App)
  - DESCRIPTION:
    I wanted a fun and easy way to share with my boss what I worked on this week. We used harvest time tracker to track
    our time. I used their api to get the data, and then built a serverless function that converted this data into a pie
    chart using node-canvas, that visualized where I spent my time. I then turned that into a png. I set this up as a slack app so you could trigger it with
    `/my-week` and then in slack the image would then be displayed.
  - WHAT I LEARNED
    I learned about working with the harvest api, and how to dynamically generate images using node-canvas. The most
    challenging part was deploying node-canvas to a serverless function.
- Tic Tac Toe

  - DESCRIPTION
    I built a tic tac to game, and a AI player to play against. I had three different difficulties. The easy mode AI would
    randomly choose a empty square. Medium I implemented a niave simple strategy that just tried not to loose unless it
    could win. And final Game mode I implemented XXXX to make it impossible to win against. You would either tie or lose
    if you were bad at tic tac toe 😜. I styled the app glasmorphism design style, since I wanted to tryout `backdrop-filter`.
  - WHAT I LEARNED
    I learned about game theory, and building simple AI's to play tic tac toe.

- Remmy My Battlesnake
  - built
- Animals.
