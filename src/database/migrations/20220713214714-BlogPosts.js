const { DataTypes } = require('sequelize');

const atributtes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  },
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('BlogPosts', atributtes);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('BlogPosts')
  }
};
