'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserName = sequelize.define('UserName', {
    userid: {type: DataTypes.INTEGER,  primaryKey: true},
    UserName: DataTypes.STRING,
    aadhaarNumber: {type: DataTypes.INTEGER,  unique: true}
  }, {});
  UserName.associate = function(models) {
    // associations can be defined here
  };
  return UserName;
};