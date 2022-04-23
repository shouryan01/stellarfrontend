import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./Redux/store";

// Auth
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./Utils/History";
import { getConfig } from "./Utils/Config";

// Components
import App from "./App";

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render (
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider {...providerConfig}>
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);