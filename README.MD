<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/bunny-img"><img src="https://i.imgur.com/rZPCzkz.png" width="546" alt="bunny-img" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/bunny-img"><img src="https://img.shields.io/npm/v/bunny-img.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bunny-img"><img src="https://img.shields.io/npm/dt/bunny-img.svg?maxAge=3600" alt="Oops... why didn't this load?" /></a>
  </p>
    <p>
    <a href="https://nodei.co/npm/bunny-img/"><img src="https://nodei.co/npm/bunny-img.png?downloads=true&stars=true" alt="Oops... why didn't this load?" /></a>
  </p>

  ## ❔ Questions/FAQ
  Whats bunny-img? bunny-img is a npm package which allows you to get images, gifs, videos of bunnys.

  Source? Source code might be added in the future.

  What service are you using? We are using https://bunnies.media/.

  License? This package is using Apache-2.0.

  ## 📗 Usage
  Here is the new usage for the package, if you liked the old usage from version 2.0.7 then scroll down because the package still supports that. Although the new usage is more easy to use in my opinion.

  ```js
  //Requiring the package, you can use import or require.
  const { bunny } = require("bunny-img") //Maybe try to do ES6?

  import bunny from "bunny-img"; //Looks like you know how to do both ways.

  //Getting some bunny media.
  bunny(); //Wait holdup there, you need to add a type this can be img, gif or video.

  bunny("img") //Ah, thats much better, you can also do it in other ways, about you show us?

  bunny("gif"); //Nice, thats one of them.

  bunny("video"); //Good, you got all of them, img, gif and video! Now try to use it in some code.

  //Getting the bunny media in the console.
  console.log(); //Cough, cough, you should put something in the console.log().

  console.log(bunny("img")); //Theres thats much better now do all of them.

  console.log(bunny("gif")) //Okay, theres one more to do.

  console.log(bunny("video")); //Wow, your good at this. You should learn how to use the package by now, if you don't understand start back from the top.
  ```

  ## 📕 Old Usage
  Heres the old usage for old school people of the package.

  ```js
  //requiring the npm package
  const bunny = require('bunny-img');

  //console logging the function

  //picture
  console.log(bunny.getBunnyIMG());

  //gif
  console.log(bunny.getBunnyGIF());

  //video
  console.log(bunny.getBunnyVIDEO());
  ```
</div>
