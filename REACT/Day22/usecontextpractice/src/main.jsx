import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseProvider from "./provider/UseProvider.jsx";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <UseProvider>
    <App />
  </UseProvider>
  ,
)
