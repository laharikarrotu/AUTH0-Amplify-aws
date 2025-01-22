import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0-config';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: auth0Config.redirectUri,
        audience: auth0Config.audience
      }}
    >
      <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);