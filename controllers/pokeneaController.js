const pokeneas = require('../db/pokeneas');



exports.getInfo = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({
        id: randomPokenea.id,
        name: randomPokenea.name,
        height: randomPokenea.height,
        ability: randomPokenea.ability,
        containerId: process.env.HOSTNAME
    });
};

exports.getImage = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.render('infoPokenea', {
        name: randomPokenea.name,
        image: randomPokenea.image,
        phrase: randomPokenea.phrase,
        containerId: process.env.HOSTNAME
    });
};

  