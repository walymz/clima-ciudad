const axios = require('axios');

const getClima = async(lat, lng) => {
    const consulta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=db80403cbc2297f20076630dd6c952bc&units=metric`);
    const resp = consulta.data.main.temp;
    if (resp === null) throw Error('No se encontró la información del clima de esa ciudad');
    return consulta.data.main.temp

}

module.exports = {
    getClima
}