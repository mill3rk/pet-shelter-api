'use strict';
module.exports = function(sequelize, DataTypes) {
  var Breed = sequelize.define('Breed', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // create one to one relationship
        Breed.hasOne(models.Type);
      }
    }
  });
  return Breed;
};