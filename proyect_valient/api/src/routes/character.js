const { default: axios } = require("axios");
const { Router } = require("express");
const { Videogame, Genres, Platforms } = require("../db.js");
require("dotenv").config();
const { API_KEY } = process.env;
const { getAllInfo, apiInfo } = require("./functions.js");
const { v4: uuidv4 } = require("uuid");
const router = Router();

router.get("/character", async (req, res, next) => {
  try {
    const gameAll = await getAllInfo();
    res.status(200).json(gameAll);
  } catch (error) {
    next(error);
  }
});

// router.get("/character/:name", async (req, res, next) => {
//   const { name } = req.params;
//   try {
//     let infoApiUrl = await axios.get(
//       ` https://rickandmortyapi.com/api/character/&search=${name}`
//     );
//     const characterId = await infoApiUrl.data.results.map((e) => e.id);
//     console.log("desde el id", characterId);
//     let characterName = [];
//     for (let i = 0; i < characterId.length; i++) {
//       let temp = await axios.get(
//         ` https://rickandmortyapi.com/api/character/${characterId[i]}}`
//       );
//       characterName.push({
//         id: temp.data.id,
//         name: temp.data.name,
//         image: temp.data.image,
//         status: temp.data.status,
//         species: temp.data.species,
//         type: temp.data.type,
//         location: temp.data.location,
//       });
//     }

//     res.status(200).json(characterName);
//   } catch (error) {
//     next(error);
//   }
// });

/*
 GET /videogame/{idVideogame}:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados
*/
router.get("/character/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let infoApiUrl = await axios.get(
      ` https://rickandmortyapi.com/api/character/${id}`
    );

    const videogameDetail = infoApiUrl;
    let infoId = [videogameDetail.data].map((e) => {
      return {
        id: e.id,
        name: e.name,
        image: e.image,
        status: e.status,
        species: e.species,
        type: e.type,
        gender: e.gender,
        location: e.location.name,
      };
    });
    res.status(200).json(infoId);
  } catch (error) {
    next(error);
  }
});

/*
 POST /videogame:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos
 Un formulario controlado con los siguientes campos
    Nombre
    Descripción
    Fecha de lanzamiento
    Rating
** Posibilidad de seleccionar/agregar varios géneros
** Posibilidad de seleccionar/agregar varias plataformas
*/
router.post("/videogame", async (req, res, next) => {
  const {
    name,
    description,
    released,
    rating,
    createdInDb,
    genreId,
    platformId,
  } = req.body;

  try {
    const videogameCreate = await Videogame.create({
      id: uuidv4(),
      name,
      description,
      released,
      rating,
      createdInDb,
    });
    await videogameCreate.setGenres(genreId);
    await videogameCreate.setPlatforms(platformId);

    res.status(200).send("Video creado");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
