'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidates.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    phone: DataTypes.STRING,
    openToWork: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Candidates',
  });
  return Candidates;
};