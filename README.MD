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
  Whats bunny-img? bunny-img is a npm package which allows you to get images, gifs, videos of animals.

  Github? https://github.com/dubfib/bunny-img  

  Need Help or Report an Issue? Go to https://github.com/dubfib/bunny-img/issues and submit a pull request, you can ask for new features or get help on the package.

  What service are you using? We are using plenty of apis.

  License? This package is using Apache-2.0.

  ## 📗 Usage
This is how to use the package, scroll down to see all of them or use the find function in your browser and write the animal.

# 📕 Image
```js
//Importing everything from bunny-img module.
const { bunny, dog, cat, fox, bird, lizard, koala, duck, kangaroo, raccoon } = require('bunny-img');

//Creating an async function so then we can run the images.
//If you already have an async in a event you should be fine.

async function data() {
    //Calling the bunny function.
    await bunny('img');

    //Calling the dog function.
    await dog('img');

    //Calling the cat function.
    await cat('img');

    //Calling the fox function.
    await fox('img');

    //Calling the bird function.
    await bird('img');

    //Calling hte lizard function.
    await lizard('img');

    //Calling the koala function.
    await koala('img');

    //Calling the duck function.
    await duck('img');

    //Calling the kangaroo function.
    await kangaroo('img');

    //Calling the raccoon function.
    await raccoon('img');
};

//Calling the async function so it runs
data();
```

# 📘 Gif
```js
//Important bunny from bunny-img
const { bunny } = require('bunny-img');

//Creating an async function so then we can run the gifs.
//If you already have an async in a event you should be fine.

async function data() {
  //Calling the bunny function.
  await bunny('gif');
};

//Calling the async function so it runs
data();
```

# 📙 Video
```js
//Important bunny from bunny-img
const { bunny } = require('bunny-img');

//Creating an async function so then we can run the video.
//If you already have an async in a event you should be fine.

async function data() {
  //Calling the bunny function.
  //The video comes in the .webm format.
  await bunny('video');
};

//Calling the async function so it runs
data();
```