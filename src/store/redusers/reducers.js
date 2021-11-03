import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { userSlice } from ".";

export const history = createBrowserHistory();

export const rootReduser = (history) =>
  combineReducers({
    user: userSlice.reducer,
    router: connectRouter(history),
  });

export default rootReduser(history);
