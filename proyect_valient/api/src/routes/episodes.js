const axios = require("axios");

const episodesInfo = async () => {
  const temp = [];
  for (let i = 0; i < 51; i++) {
    temp.push(axios.get(` https://rickandmortyapi.com/api/episode/${i + 1}`));
  }
  const responses = await Promise.all(temp);
  let allEpisodes = responses.map((res) => res.data);

  return allEpisodes;
};

module.exports = { episodesInfo };
