
function sumarGanancias(importes) {
    return importes.reduce((total, valor) => {
        if (valor > 0 && valor <= 1000) {
            return total + valor;
        }
        return total;
    }, 0);
}

module.exports = sumarGanancias;