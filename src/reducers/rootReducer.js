import { combineReducers } from "redux";
import houseReducer from "./house";
import bookReducer from "./books";
import characterReducer from "./characters";

export default combineReducers({
  houses: houseReducer,
  books: bookReducer,
  characters: characterReducer,
});
