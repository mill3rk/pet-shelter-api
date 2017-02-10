'use strict';

module.exports = (sequelize, DataTypes) => {
  let Type = sequelize.define(
    'Type', 
    { name: DataTypes.STRING }, 
    { classMethods: { associate: (models) => {} } }
  );
  
  return Type;
};