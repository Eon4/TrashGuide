import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/userContext.jsx";
import 'mapbox-gl/dist/mapbox-gl.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<UserContextProvider>
<App />
</UserContextProvider>    
  </React.StrictMode>,
)
