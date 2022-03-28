const fetch = require('node-fetch');

class Images {
    constructor() {
    };

    async bunny() {
        return `https://bunnies.media/poster/${Math.floor(Math.random() * 162)}.png`;
    };

    async fox() {
        return `https://randomfox.ca/images/${Math.floor(Math.random() * 122)}.jpg`;
    };

    async dog() {
        const dog = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const data = await dog.json();
        return data.message;
    };

    async cat() {
        const cat = await fetch(`https://aws.random.cat/meow`);
        const data = await cat.json();
        return data.file;
    };

    async bird() {
        const api = await fetch('https://some-random-api.ml/animal/birb');
        const data = await api.json();
        return data.image;
    };

    async lizard() {
        const api = await fetch('https://nekos.life/api/v2/img/lizard');
        const data = await api.json();
        return data.url;
    };

    async koala() {
        const api = await fetch('https://some-random-api.ml/img/koala');
        const data = await api.json();
        return data.link;
    };

    async duck() {
        const api = await fetch('https://random-d.uk/api/v1/random?type=png');
        const data = await api.json();
        return data.url;
    };

    async kangaroo() {
        const api = await fetch('https://some-random-api.ml/animal/kangaroo');
        const data = await api.json();
        return data.image;
    };

    async raccoon() {
        const api = await fetch('https://some-random-api.ml/animal/raccoon');
        const data = await api.json();
        return data.image;
    };

    async panda() {
        const api = await fetch('https://some-random-api.ml/animal/panda');
        const data = await api.json();
        return data.image;
    };
};

module.exports = { Images };
