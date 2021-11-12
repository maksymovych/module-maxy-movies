import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { history } from "./redusers";

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? "#ed1539" : "#15e2ed"),
    prevState: () => "#1c28d4",
    action: () => "#69b851",
    nextState: () => "#e6bf40",
    error: () => "#b5181b",
  },
});

const isDevelopmentMode = process.env.NODE_ENV === "development";

export const middlewares = [];

if (isDevelopmentMode) {
  middlewares.push(logger, routerMiddleware(history));
}
