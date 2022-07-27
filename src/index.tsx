import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

const ROOT = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

ROOT.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals()
