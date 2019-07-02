'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserNames', [{
        userid: '2',
        UserName: 'Garv',
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1972-01-01 00:44:01'
      },
      {
        userid: '3',
        UserName: 'Gar',
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1972-01-01 00:44:01'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
