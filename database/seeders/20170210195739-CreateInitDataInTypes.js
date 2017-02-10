'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
        {
          id: 1,
          name: 'Dog',
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        {
          id: 2,
          name: 'Cat',
          createdAt: Date.now(),
          updatedAt: Date.now()
          
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    
    return queryInterface.bulkDelete('Types', null, {});
  }
};
