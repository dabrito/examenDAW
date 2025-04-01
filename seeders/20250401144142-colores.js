'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const colores = [
      {nombre: 'Rojo'},
      { nombre: 'Azul'}, 
      { nombre: 'Negro'}, 
      { nombre: 'Blanco'}, 
      { nombre: 'Verde'}, 
      { nombre: 'Amarillo'}, 
      { nombre: 'Gris'}, 
      { nombre: 'Naranja'}, 
      { nombre: 'Morado'}, 
      { nombre: 'Rosa'}, 
      { nombre: 'Marrón'}, 
      { nombre: 'Turquesa'}, 
      { nombre: 'Beige'}, 
      { nombre: 'Violeta'}, 
      { nombre: 'Celeste'}
    ];
   await queryInterface.bulkInsert('colores', colores, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('colores', null, {});
  }
};
