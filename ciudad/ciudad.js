const axios = require('axios');

const getDatosCiudad = async(dir) => {

    console.log('Datos de ', dir);
    const encodeUrl = encodeURI(dir);

    //Creación de la instance con los parámetros apropiados para consumir la api

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '4bb2c6d2d9msh87b7e5b7afcdf51p1dd808jsne34a2817aa1e'
        }
    });

    //Consumo de la Api con un get

    const consulta = await instance.get();
    /**
     * Acá se maneja instance como una promesa que debe ejecutarse para poder avanzar
     * a la siguiente instrucción, una vez que obtiene un resultado, ese resultado se analiza
     * y se obtiene un error si no hay nada o los datos de la ciudad si se obtuvo un resultado
     */
    if (consulta.data.Results.length === 0)
        throw Error("No se tienen datos de esa ciudad");
    else {
        const datos = consulta.data.Results[0];
        const direccion = datos.name;
        const lat = datos.lat;
        const lng = datos.lon;
        return {
            direccion,
            lat,
            lng
        };
    }
}

module.exports = { getDatosCiudad }