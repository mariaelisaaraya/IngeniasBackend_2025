const sumarGanancias = require('../daiana-alegre/ejercicio1');

describe('Daiana - sumarGanancias()', () => {
  test('devuelve "La suma de las ganancias es400" con [100, -20, 2000, 300]', () => {
    expect(sumarGanancias([100, -20, 2000, 300])).toBe('La suma de las ganancias es400');
  });

  test('devuelve "La suma de las ganancias es0" si no hay valores positivos', () => {
    expect(sumarGanancias([-1000, -50])).toBe('La suma de las ganancias es0');
  });

  test('suma correctamente con varios valores válidos', () => {
    expect(sumarGanancias([100, 200, 300])).toBe('La suma de las ganancias es600');
  });

  test('ignora valores mayores a 1000', () => {
    expect(sumarGanancias([500, 1200, 300])).toBe('La suma de las ganancias es800');
  });
});
