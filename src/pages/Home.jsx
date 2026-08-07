import { NavLink } from "react-router"

const Home = () => {
    return (
        <>
            <p>Bienvenido a Pantalla Principal</p>
            <NavLink
                to="/personajes"
                className="btn btn-primary"
            >Ir al Catalogo
            </NavLink>

            <NavLink
                to="/favorites"
                className="btn btn-secondary"
            >
                Ir a Favorios

            </NavLink>
        </>
    )
}

export { Home }
