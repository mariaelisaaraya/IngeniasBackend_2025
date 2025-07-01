// tests/fxEjercicio2.romina.test.js

const fs = require('fs');
const path = require('path');

jest.mock('fs');

const { registrarVisita } = require('../romina_iurchik/ejercicio_2');
const { darFormatoFecha } = require('../romina_iurchik/formatoFecha');

describe('Romina - registrarVisita()', () => {
  const archivo = 'Visitas.txt';

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('crea el archivo si no existe', () => {
    fs.existsSync.mockReturnValue(false);
    fs.writeFile.mockImplementation((file, content, cb) => cb(null));

    registrarVisita('Carla');

    expect(fs.writeFile).toHaveBeenCalled();
    const contenidoEsperado = `Nombre: Carla - Fecha: ${darFormatoFecha(new Date())}`;
    expect(fs.writeFile).toHaveBeenCalledWith(archivo, expect.stringContaining('Carla'), expect.any(Function));
  });

  test('agrega contenido si el archivo ya existe', () => {
    fs.existsSync.mockReturnValue(true);
    fs.appendFile.mockImplementation((file, content, cb) => cb(null));

    registrarVisita('Pedro');

    expect(fs.appendFile).toHaveBeenCalled();
    expect(fs.appendFile).toHaveBeenCalledWith(archivo, expect.stringContaining('Pedro'), expect.any(Function));
  });
});
