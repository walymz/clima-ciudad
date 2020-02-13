const argv = require('./config/config').argv;
const colors = require('colors/safe');
const ciudad = require('./ciudad/ciudad');
const clima = require('./clima/clima');

const getInfo = async(city) => {
    try {
        const coord = await ciudad.getDatosCiudad(city);
        const t = await clima.getClima(coord.lat, coord.lng);
        return `El clima de: ${argv.ciudad} es ${t}`;
    } catch (Error) {
        return `No se pudo determinar el clima de ${argv.ciudad}`;
    }
}

getInfo(argv.ciudad)
    .then(console.log)
    .catch(console.log);

/*
Usamdo promesas tradicionales
ciudad.getDatosCiudad(argv.ciudad)
    .then(resp => {
        console.log(resp);
        clima.getClima(resp.lat, resp.lng)
            .then(t => console.log('La temperatura es: ', t))
            .catch(e => console.log('Error: ', e));
    })
    .catch(err => {
        console.log(`Error:  no se pudo obtener la información: ${err}`)
    });
    */