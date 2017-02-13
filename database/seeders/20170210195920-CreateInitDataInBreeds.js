'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    return queryInterface.bulkInsert('Breeds', [
        { 
          id: 1,
          name: 'German Shephard',
          typeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 2,
          name: 'Bulldog',
          typeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 3,
          name: 'Shitzu',
          typeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 4,
          name: 'Poodle',
          typeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 5,
          name: 'Tabby',
          typeId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 6,
          name: 'Siamese',
          typeId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        { 
          id: 7,
          name: 'Persian',
          typeId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
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
    
    return queryInterface.bulkDelete('Breeds', null, {});
  }
};
