const { DataTypes } = require('sequelize');

const atributtes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Categories', atributtes);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories')
  }
};
