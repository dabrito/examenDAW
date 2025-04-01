'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const ropas = [
      { nombre: 'Camisa', tipo: 'Camiseta', talla: 'M', precio: 29.99 },
      { nombre: 'Camisa', tipo: 'Camisa', talla: 'M', precio: 29.99 },
      { nombre: 'Pantalón', tipo: 'Short', talla: 'L', precio: 49.99 },
    ];
    await queryInterface.bulkInsert('ropas', ropas, {});

    const coloresxropa = [
      { colores_id_color: 1, ropa_id_Color: 1 },
      { colores_id_color: 2, ropa_id_Color: 1 },
      { colores_id_color: 3, ropa_id_Color: 2 },
      { colores_id_color: 4, ropa_id_Color: 2 },
      { colores_id_color: 5, ropa_id_Color: 3 },
      { colores_id_color: 6, ropa_id_Color: 3 },
    ];
    await queryInterface.bulkInsert('coloresxropa', coloresxropa, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ropas', null, {});
  }
};
