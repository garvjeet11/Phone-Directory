'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserName = sequelize.define('UserName', {
    userid: {type: DataTypes.INTEGER,  primaryKey: true},
    UserName: DataTypes.STRING
  }, {});
  UserName.associate = function(models) {
    // associations can be defined here
  };
  return UserName;
};