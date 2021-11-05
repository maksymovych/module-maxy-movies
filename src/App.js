import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "./components/theme/ThemeProvider";
import RoutesList from "./routs/RoutesList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </MyThemeProvider>
    </Provider>
  );
}

export default App;
