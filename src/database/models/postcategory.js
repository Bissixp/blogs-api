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

/** @param {import ('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
 const PostCategories = sequelize.define('PostCategory', atributtes, {
   tableName:'PostCategories',
   timestamps: false,
  });

  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategories;
};