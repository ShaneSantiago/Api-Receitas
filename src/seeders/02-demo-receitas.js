'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('receitas', [
      {
        titulo: "Pizza",
        ingredientes: "Farinha, ovo, leite, oregano",
        url_imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCt0oxxxC7Nf3grIcVm9YzbtpB1UMOOkJowg&s",
        modo_preparo: "Misturar tudo e assar por 30 minutos",
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('receitas', null, {});
  }
};
