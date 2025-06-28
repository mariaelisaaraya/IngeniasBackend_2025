function sumarGanancias(importes){
    
    //valido si lo que viene es un array
 
    if(!Array.isArray(importes)){
        console.error('Enviar como parámetro un array');
        return 0;  
        /* --> retorno 0 xq no me gustaba que en consola quede undefined cuando hago return console.error('sarasa')
        En consola:
        Enviar como parámetro un array
        Total:  undefined
        <-- */
    }

    /*valido que todos los elementos del array sean números
    // --> Si bien realiza igual la operacion con un string dentro de los elelmentos, no me gusto el resultado
        En consola
        Suma de ganancias
        ┌─────────┬────────┐
        │ (index) │ Values │
        ├─────────┼────────┤
        │ 0       │ 'por'  │
        │ 1       │ 0      │
        │ 2       │ 2000   │
        │ 3       │ 300    │
        └─────────┴────────┘
        Total:  300
    <--*/
    const isNumber = importes.every(elem => typeof elem ==='number');
    if (!isNumber){
        console.error('Todos los elementos deben ser números');
        return 0;
    }

    // Retorno el total: métodos utilizadfos (filter y reduce)
    return importes.filter(dato => (dato > 0 && dato < 1000)).reduce((acumulador, producto) => acumulador+producto, 0);

}
//exporto, si no esta no funciona 😵‍💫
module.exports = sumarGanancias;