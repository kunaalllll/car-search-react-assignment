// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Create this file with your reducers

const store = createStore(rootReducer);

export default store;
