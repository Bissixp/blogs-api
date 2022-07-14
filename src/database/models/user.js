const { DataTypes } = require('sequelize');

const atributtes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
}

/** @param {import ('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
 const model = sequelize.define('User', atributtes, {
   tableName:'Users',
   timestamps: false,
  });
  return model;
}

