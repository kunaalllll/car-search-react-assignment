// actions.js
import { SEARCH_CARS } from "./types";

export const searchCars = (query) => ({
  type: SEARCH_CARS,
  payload: query,
});
