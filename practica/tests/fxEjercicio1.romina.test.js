const sumarGanancias = require('../romina_iurchik/fxEjercicio1');

describe('Romina - sumarGanancias()', () => {
  test('devuelve 400 con [100, -20, 2000, 300]', () => {
    expect(sumarGanancias([100, -20, 2000, 300])).toBe(400);
  });

  test('devuelve 0 si no hay números positivos', () => {
    expect(sumarGanancias([-1000, -50])).toBe(0);
  });

  test('suma correctamente con varios valores válidos', () => {
    expect(sumarGanancias([100, 200, 300])).toBe(600);
  });
});