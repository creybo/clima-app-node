const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://countries-cities.p.rapidapi.com/location/country/PE?code=${ encodeUlr }`,
        headers: { 'x-rapidapi-key': '28408cacf7msh80c033861b30892p1b6e64jsn74688b55b21a' }
    });

    const Resp = await instance.get();

    const data = Resp.data;

    const name = data.name
    const ciudad = data.capital.name;
    const code = data.code;
    const lat = 35;
    const lng = 139;

    return {
        name,
        ciudad,
        code,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}