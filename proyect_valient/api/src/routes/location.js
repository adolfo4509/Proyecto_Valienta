const axios = require("axios");

const locationInfo = async () => {
  const temp = [];
  for (let i = 0; i < 100; i++) {
    temp.push(axios.get(` https://rickandmortyapi.com/api/location/${i + 1}`));
  }
  const responses = await Promise.all(temp);
  let allLocation = responses.map((res) => res.data);
  return allLocation;
};

module.exports = { locationInfo };
