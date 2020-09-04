/* istanbul ignore file */
const testData = [
  {
    characters: [],
    created: "2014-12-10T14:23:31.880000Z",
    director: "George Lucas",
    edited: "2014-12-12T11:24:39.858000Z",
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    planets: [],
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    species: [],
    starships: [],
    title: "A New Hope",
    url: "https://swapi.dev/api/films/1/",
    vehicles: [],
  },
  {
    characters: [],
    created: "2014-12-10T14:23:31.880000Z",
    director: "George Lucas",
    edited: "2014-12-12T11:24:39.858000Z",
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    planets: [],
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    species: [],
    starships: [],
    title: "A New Hope",
    url: "https://swapi.dev/api/films/1/",
    vehicles: [],
  },
];

/**
 * Returns a list of Star Wars Films
 */
export const getFilms = async (props = {}) => {
  const { format = "" } = props;
  if (format === "error") {
    throw new Error("Invalid Format");
  }
  return testData;
};

/**
 * Returns an individual Star Wars Film
 *
 * @param {getFilmById} getFilmByIdParams
 * @typedef {Object} getFilmById
 * @property {string} id - movie id by release order
 */
export const getFilmById = async (props = {}) => {
  const { id } = props;
  if (id !== 1) {
    throw new Error("Invalid Id");
  }
  return testData[0];
};
