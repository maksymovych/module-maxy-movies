import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { userReducer } from ".";
import { themReducer } from "./themeSlice";

export const history = createBrowserHistory();

export const rootReduser = (history) =>
  combineReducers({
    user: userReducer,
    theme: themReducer,
  });

export default rootReduser(history);
