/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tracks', [
      {
        title: 'Stairway to Heaven', author: 'Led Zeppelin', duration: 263, img: 'https://i1.sndcdn.com/artworks-6oPOQTZYHoUKgdhv-0TFwFA-t500x500.jpg',
      },
      {
        title: 'Californication', author: 'RHCP', duration: 200, img: 'https://m.media-amazon.com/images/I/81x1drakpHS._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Bohemian Rhapsody', author: 'Queen', duration: 266, img: 'https://www.pravilamag.ru/upload/img_cache/c03/c03f3fce79204e7f6eb472c3a04b5716_ce_1920x1197x0x1.jpg',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
