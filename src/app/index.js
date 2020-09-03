import { configureStore } from "@reduxjs/toolkit";
import counter from "./CounterModule";
import swapi from "./SwapiModule";

export default configureStore({
  reducer: {
    counter,
    swapi,
  },
});
