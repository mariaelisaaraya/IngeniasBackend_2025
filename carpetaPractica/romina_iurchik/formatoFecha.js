
function darFormatoFecha(fecha){
    const dd = fecha.getDate();
    const mm = (fecha.getMonth()+1);
    const yyyy = fecha.getFullYear();
    const hh = fecha.getHours();
    const min = fecha.getMinutes();
    // Fecha: 2025-06-20 17:45
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

module.exports = { darFormatoFecha }