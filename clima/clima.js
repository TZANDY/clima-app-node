const axios = require("axios");

let id = "2a15d66b230c4f3f4b80d72640aacaef";

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${id}&units=metric`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima
};