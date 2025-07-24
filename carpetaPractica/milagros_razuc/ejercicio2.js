const fs = require('fs');
const moment = require('moment'); //  moment para formatear la fecha

function registrarVisita(nombre) {
    const fecha = moment().format('YYYY-MM-DD HH:mm');  //se podia hacer sin moment pero asi queda mas limpio
    const linea = `Visitó: ${nombre} - Fecha: ${fecha}\n`;

    fs.appendFile('visitas.txt', linea, (err) => { //si no existe lo crea
        if (err) {
            console.error('Error al registrar la visita:', err);
        } else {
            console.log(`Registro exitoso: ${nombre} visitó.`);
        }
    });
}

module.exports = registrarVisita;

