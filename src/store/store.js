import { configureStore } from "@reduxjs/toolkit";
import { middlewares } from "./middleware";
import reducers from "./redusers/reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
});

//const API_KEY = process.env.REACT_APP_API_KEY;
