import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0-config';
import App from './App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(Auth0Provider, { domain: auth0Config.domain, clientId: auth0Config.clientId, authorizationParams: {
                redirect_uri: auth0Config.redirectUri,
                audience: auth0Config.audience
            }, children: _jsx(App, {}) }) }) }));
