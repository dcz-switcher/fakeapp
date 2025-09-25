import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './../mds/3.23.0/assets/mds-style.min.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
