'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [

      { nome: 'Felipe'},
      { nome: 'Joao' },
      { nome: 'Lucas' },
      { nome: 'Luana' },
      { nome: 'Ana Luiza' }

  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
