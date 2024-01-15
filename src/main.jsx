import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStateProvider from './context/state/GlobalStateProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
)
