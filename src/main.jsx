import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { PokemonProvider } from './Context/PokemonContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PokemonProvider>
    <App />
    </PokemonProvider>
  </BrowserRouter>
)
