const pokeneas = require('../db/pokeneas');



exports.getInfo = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({
        id: randomPokenea.id,
        nombre: randomPokenea.nombre,
        altura: randomPokenea.altura,
        habilidad: randomPokenea.habilidad,
        containerId: process.env.HOSTNAME
    });
};

exports.getImage = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.render('infoPokenea', {
        nombre: randomPokenea.nombre,
        imagen: randomPokenea.imagen,
        frase: randomPokenea.frase,
        containerId: process.env.HOSTNAME
    });
};

  