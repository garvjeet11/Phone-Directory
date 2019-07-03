'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    contactid: {type: DataTypes.INTEGER,  primaryKey: true,autoIncrement:true},
    userid: DataTypes.INTEGER,
    contactNumber: {type: DataTypes.BIGINT, unique:true},
    address: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};