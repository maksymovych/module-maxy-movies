import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { userReducer } from ".";
import { themReducer } from "./themeSlice";
import { movieReducer } from "./moviesSlice";

export const history = createBrowserHistory();

export const rootReduser = (history) =>
  combineReducers({
    user: userReducer,
    movies: movieReducer,
    theme: themReducer,
  });

export default rootReduser(history);
