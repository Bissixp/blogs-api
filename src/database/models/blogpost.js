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

/** @param {import ('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
 const model = sequelize.define('BlogPost', atributtes, {
   tableName:'BlogPosts',
   timestamps: false,
  });

  model.associate = (models) => {
    model.belongsTo(models.User,
      {foreignKey: 'userId', as: 'Users'})
  };
  return model;
}

