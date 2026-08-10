import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Personajes } from "./pages/Personajes"
import { Favorites } from "./pages/Favorites"
import { DetallePokemon } from "./pages/DetallePokemon"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detalles/:id" element={<DetallePokemon />} />

      </Routes>
    </>
  )
}

export default App
