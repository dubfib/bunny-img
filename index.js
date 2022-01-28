const fetch = require('node-fetch');

async function bunny(type) {
    const math = Math.floor(Math.random() * 163);

    const img = `https://bunnies.media/poster/${math}.png`;
    const gif = `https://bunnies.media/gif/${math}.gif`;
    const video = `https://bunnies.media/webm/${math}.webm`;

    if (type.toLowerCase() === 'img') {
        return img;
    } else if (type.toLowerCase() === 'gif') {
        return gif;
    } else if (type.toLowerCase() === 'video') {
        return video;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    };
};

async function dog(type) {
  if (type.toLowerCase() === 'img') {
    const dog = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await dog.json();

    return data.message;
  } else {
   return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
  }
}

async function cat(type) {
  if (type.toLowerCase() === 'img') {
    const cat = await fetch(`https://aws.random.cat/meow`);
    const data = await cat.json();

    return data.file;
  } else {
    return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
  }
}

async function fox(type) {
  if (type.toLowerCase() === 'img') {
    const math = Math.floor(Math.random() * 120);
    const img = `https://randomfox.ca/images/${math}.jpg`;

    if (type.toLowerCase() === 'img') {
        return img;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
  }
}

async function bird(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://some-random-api.ml/animal/birb');
        const data = await api.json();
        return data.image;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function lizard(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://nekos.life/api/v2/img/lizard');
        const data = await api.json();
        return data.url;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function koala(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://some-random-api.ml/img/koala');
        const data = await api.json();
        return data.link;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function koala(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://some-random-api.ml/img/koala');
        const data = await api.json();
        return data.link;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function duck(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://random-d.uk/api/v1/random?type=png');
        const data = await api.json();
        return data.url;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function kangaroo(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://some-random-api.ml/animal/kangaroo');
        const data = await api.json();
        return data.image;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

async function raccoon(type) {
    if (type.toLowerCase() === 'img') {
        const api = await fetch('https://some-random-api.ml/animal/raccoon');
        const data = await api.json();
        return data.image;
    } else {
        return TypeError('Incorrect usage! Check https://npmjs.com/package/bunny-img to see how to use it.');
    }
}

module.exports = { bunny, dog, cat, fox, bird, lizard, koala, duck, kangaroo, raccoon };