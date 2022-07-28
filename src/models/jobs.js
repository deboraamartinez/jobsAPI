'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Jobs.belongsTo(models.Companies, {
        as: 'companies',
        foreignKey: 'companyId',
      })
    }
  }
  Jobs.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    limitDate: DataTypes.DATE,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};