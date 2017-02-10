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
          TypeId: 1,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 2,
          name: 'Doberman',
          TypeId: 1,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 3,
          name: 'Shitzu',
          TypeId: 1,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 4,
          name: 'Poodle',
          TypeId: 1,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 5,
          name: 'Tabby',
          TypeId: 2,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 6,
          name: 'Siamese',
          TypeId: 1,
          createdAt: Date.now(),
          updatedAt: Date.now()
        },
        { 
          id: 7,
          name: 'Persian',
          TypeId: 1,
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
    
    return queryInterface.bulkDelete('Breeds', null, {});
  }
};
