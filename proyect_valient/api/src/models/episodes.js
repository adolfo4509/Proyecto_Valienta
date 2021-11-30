const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "episodes",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      air_data: { type: DataTypes.DATE, allowNull: false },
      episode: { type: DataTypes.INTEGER, allowNull: false },
      characters: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: false,
    }
  );
};
