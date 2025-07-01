// tests/fxEjercicio3.romina.test.js

const request = require('supertest');
const server = require('../romina_iurchik/ejercicio_3');

describe('Romina - Servidor HTTP básico', () => {
  test('GET / devuelve mensaje de bienvenida', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Bienvenida al servidor de Node.js');
  });

  test('GET /alumnas devuelve lista de alumnas', async () => {
    const res = await request(server).get('/alumnas');
    expect(res.statusCode).toBe(200);
    const json = JSON.parse(res.text);
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThanOrEqual(3);
    expect(json.map(a => a.nombre)).toEqual(
      expect.arrayContaining(['Lisa', 'Romi', 'Maria Angeles'])
    );
  });

  test('GET /otra-ruta devuelve 404', async () => {
    const res = await request(server).get('/otra-ruta');
    expect(res.statusCode).toBe(404);
    expect(res.text).toContain('recurso no encontrado');
  });
});