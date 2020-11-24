import axios from "axios";

const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const rawgInstance = axios.create({
  baseURL: `https://api.rawg.io/api/games`,
  params: {
    key: RAWG_API_KEY,
  },
});

export default rawgInstance;
