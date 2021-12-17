function bunny(type) {
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
        return TypeError('In the bunny function you must provide a type, this can be either img, gif or video.');
    };
};

function getBunnyIMG() {
    const math = Math.floor(Math.random() * 163);
    const img = `https://bunnies.media/poster/${math}.png`;
    return img;
}

function getBunnyGIF() {
    const math = Math.floor(Math.random() * 163);
    const gif = `https://bunnies.media/gif/${math}.gif`;
    return gif;
}

function getBunnyVIDEO() {
    const math = Math.floor(Math.random() * 163);
    const video = `https://bunnies.media/webm/${math}.webm`;
    return video;
}

module.exports = { bunny, getBunnyIMG, getBunnyGIF, getBunnyVIDEO };
