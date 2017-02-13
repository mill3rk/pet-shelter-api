'use strict';

module.exports = ( sequelize, DataTypes ) => {
  var Breed = sequelize.define(
    'Breed',
    { name: DataTypes.STRING },
    {
      classMethods: {
        associate: (models) => {
          // create one to one relationship
          Breed.belongsTo(models.Type, {foreignKey: 'typeId'});
        }
      }
    }
  );
  
  return Breed;
};