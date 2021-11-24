const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "character",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: true },
      species: { type: DataTypes.STRING, allowNull: true },
      type: { type: DataTypes.TEXT, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: true },
    },
    {
      timestamps: false,
    }
  );
};
