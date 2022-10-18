'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customer', [{
      firstName: 'Nguyễn',
      sur_name: 'Thành',
      last_name: 'Đặng',
      createdAt: 'Đặng',
      updatedAt: 'Đặng',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
