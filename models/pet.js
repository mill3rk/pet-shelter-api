'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // create one to one relationship
        Pet.hasOne(models.Type);
        // create one to one relationship
        Pet.hasOne(models.Breed);
      }
    }
  });
  return Pet;
};