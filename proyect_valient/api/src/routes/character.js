const axios = require("axios");
const { Router } = require("express");

require("dotenv").config();

const { getAllInfo } = require("./functions.js");
const { episodesInfo } = require("./episodes.js");
const { locationInfo } = require("./location.js");

const router = Router();

router.get("/character", async (req, res, next) => {
  try {
    const gameAll = await getAllInfo();
    res.status(200).json(gameAll);
  } catch (error) {
    next(error);
  }
});

/*Episodios*/

router.get("/episode", async (req, res, next) => {
  try {
    const allEpisodes = await episodesInfo();
    res.status(200).json(allEpisodes);
  } catch (error) {
    next(error);
  }
});

/**Detail por ID */
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

router.get("/location", async (req, res, next) => {
  try {
    const locations = await locationInfo();
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
