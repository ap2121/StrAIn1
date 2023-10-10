import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-kk1mcq3jkw8u6xus.us.auth0.com"
    clientId="ysHkUETXPmGcky7Xu5ISAhh181E9ofBK"
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
