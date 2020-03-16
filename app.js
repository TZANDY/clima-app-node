const argv = require("./config/yargs").argv;

const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp);
// });

// clima
//     .getClima(-5.710000, -79.279999)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async direccion => {
    try {
        const resp1 = await lugar.getLugarLatLng(direccion);
        const resp2 = await clima.getClima(resp1.lat, resp1.lng);

        return `El clima de ${resp1.direccion} es de ${resp2}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);