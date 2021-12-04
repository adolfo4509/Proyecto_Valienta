const axios = require("axios");

const apiInfo = async () => {
  const getEpisodes = [];

  for (let index = 0; index < 30; index++) {
    getEpisodes.push(
      axios.get(` https://rickandmortyapi.com/api/character?page=${index + 1}`)
    );
  }
  const responses = await Promise.all(getEpisodes);

  let results = [];

  for (let index = 0; index < responses.length; index++) {
    const element = responses[index];
    results = [...results, ...element.data.results];
  }

  return results;
};

const getAllInfo = async () => {
  const infoTotal = await apiInfo();

  let temp = infoTotal.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      status: e.status,
      species: e.species,
      type: e.type,
      gender: e.gender,
      episodes: e.episode,
      location: e.location.name,
    };
  });

  return temp;
};

module.exports = { apiInfo, getAllInfo };
