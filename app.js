const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */
//lat=35&lon=139
/* clima.getClima(35, 139)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.ciudad} es de ${ temp }.`;
    } catch (error) {
        return `No se puede determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);