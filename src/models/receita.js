'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receita.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuarios'
    });
      
    }
  }
  Receita.init({
    titulo: DataTypes.STRING,
    ingredientes: DataTypes.TEXT,
    usuario_id: DataTypes.INTEGER,
    modo_preparo: DataTypes.TEXT,
    url_imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receita',
    tableName: 'receitas',
  });
  return Receita;
};