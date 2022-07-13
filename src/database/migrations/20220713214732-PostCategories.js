const { DataTypes } = require('sequelize');

const atributtes = {
  postId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('PostCategories', atributtes);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories')
  }
};
