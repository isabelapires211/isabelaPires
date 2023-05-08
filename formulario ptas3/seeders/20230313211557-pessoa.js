'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [


      { nome: 'felipe', sobrenome: 'silva', idade: '18', altura:'1.80' },
      { nome: 'joao', sobrenome: 'pessoa', idade: '16', altura:'1.75' },
      { nome: 'philipe', sobrenome: 'lima', idade: '17', altura:'1.77' },
      { nome: 'lucas', sobrenome: 'montero', idade: '18', altura:'1.82' },
      { nome: 'luana', sobrenome: 'costa', idade: '17', altura:'1.64' },
      { nome: 'ana livia', sobrenome: 'modesto', idade: '16', altura:'1.69' },
      { nome: 'brenda', sobrenome: 'perreira', idade: '19', altura:'1.74' },
      { nome: 'renato', sobrenome: 'dantas', idade: '18', altura:'1.79' }


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
