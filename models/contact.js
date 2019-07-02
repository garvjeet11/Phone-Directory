'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    contactid: {type: DataTypes.INTEGER,  primaryKey: true},
    userid: DataTypes.INTEGER,
    contactNumber: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};