'use strict';

module.exports = (Sequelize, DataTypes) => {
  let Pet = Sequelize.define(
    'Pet',
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING
    },
    {
      classMethods: {
        associate: (models) => {
          // create one to one relationship with a type
          Pet.belongsTo(models.Type, {foreignKey: 'typeId'});
          
          // create one to one relationship with a breed
          Pet.belongsTo(models.Breed, {foreignKey: 'breedId'});
        }
      }
    }
  );
  
  return Pet;
};