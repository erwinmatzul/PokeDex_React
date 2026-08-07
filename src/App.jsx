import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Personajes } from "./pages/Personajes"
import { Favorites } from "./pages/Favorites"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default App
