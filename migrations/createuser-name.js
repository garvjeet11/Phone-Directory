'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'UserNames',
      'aadhaarNumber',
      {
        type: Sequelize.BIGINT,
        unique: true
      }
    );

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'UserNames',
      'aadhaarNumber'
    );
  }
}