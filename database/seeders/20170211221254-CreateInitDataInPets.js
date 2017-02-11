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
    
    return queryInterface.bulkInsert('Pets', [
        {
          id: 1,
          name: "Trixie",
          location: "Toronto, ON, Canada",
          longitude: "43.661390",
          latitude: "-79.357962",
          BreedId: 3,
          TypeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          id: 2,
          name: "Elmo",
          location: "Regina, SK, Canada",
          longitude: "50.492779",
          latitude: "-104.624561",
          BreedId: 4,
          TypeId: 1,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          id: 3,
          name: "Brutus",
          location: "New York, NY, USA",
          longitude: "40.753046",
          latitude: "-73.982237",
          BreedId: 1,
          TypeId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          id: 4,
          name: "Sammy the Bull",
          location: "Toronto, ON, Canada",
          longitude: "43.657859",
          latitude: "-79.350255",
          BreedId: 6,
          TypeId: 2,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Pets', null, {});
  }
};
