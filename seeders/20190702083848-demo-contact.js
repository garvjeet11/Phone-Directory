'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', [{
        contactid: '2',
        userid: '1',
        contactNumber: '147852',
        address: 'Bangalore',
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1972-01-01 00:44:01'
      },{
        contactid: '3',
        userid: '1',
        contactNumber: '654321',
        address: 'Delhi',
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1972-01-01 00:44:01'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
