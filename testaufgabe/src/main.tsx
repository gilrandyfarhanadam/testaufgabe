import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router.tsx';
import './css/index.css'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)