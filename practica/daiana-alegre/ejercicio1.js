
function sumarGanancias(importes) {

const gananciasValidas = importes.filter((valor) => valor > 0 && valor <= 1000);
const total = gananciasValidas.reduce((acumulador, valor) => acumulador + valor, 0);
return "La suma de las ganancias es"+ total;
  
 };


console.log(sumarGanancias([100, -20, 2000, 300]) )// → 400

module.exports = sumarGanancias;
