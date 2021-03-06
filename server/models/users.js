'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    email: DataTypes.STRING,
    pw: DataTypes.STRING,
    mobile: DataTypes.STRING,
    nickname: DataTypes.STRING,
    level: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};