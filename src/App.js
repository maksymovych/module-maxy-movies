import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routs/RoutesList";
import { history } from "./store/redusers";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
