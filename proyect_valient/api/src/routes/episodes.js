const axios = require("axios");
const { API_KEY } = process.env;
const { Genres } = require("../db");

const genresInfo = async () => {
  const apiGenresInfo = await axios.get(
    ` https://api.rawg.io/api/genres?key=${API_KEY}`
  );

  const infoGenres = await apiGenresInfo.data.results.map((e) => {
    return { name: e.name };
  });

  const consultDb = await Genres.findAll();

  if (consultDb.length === 0) {
    await Genres.bulkCreate(infoGenres);
  }

  return consultDb;
};

module.exports = { genresInfo };
