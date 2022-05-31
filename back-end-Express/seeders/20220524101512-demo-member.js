'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('members', [{
      first_name : 'Thanh Binh',
      last_name : 'Dayon',
      email : 'thanhbinh@tekos.net',
      username:'binhbinh',
      password : '123',
      createdAt : new Date(),
      updatedAt : new Date() 

    },

    {
      first_name : 'Sebastien',
      last_name : 'Dayon',
      email : 'sebastien@tekos.net',
      username : 'sebseb',
      password : '123',
      createdAt : new Date(),
      updatedAt : new Date()

    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  
  return queryInterface.bulkDelete('members', null, {}) 
}
};
