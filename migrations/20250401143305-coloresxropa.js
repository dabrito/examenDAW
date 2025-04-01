'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coloresxropa', {
      colores_id_color: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true,
        references: {
          model: 'colores',
          key: 'id_color'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ropa_id_Color: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true,
        references: {
          model: 'ropas',
          key: 'id_ropa'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
    await queryInterface.addConstraint('coloresxropa', {
      fields: ['colores_id_color', 'ropa_id_Color'],
      type: 'primary key',
      name: 'coloresxropa_pkey'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coloresxropa');
  }
};
