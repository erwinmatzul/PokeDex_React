    import { Container, Navbar, Nav } from "react-bootstrap"
    import { NavLink } from "react-router"

    const Header = () => {
        return (
            <Navbar expand="lg" className="site-header" sticky="top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="brand-mark">
                        <span className="brand-pokeball" aria-hidden="true">◓</span>
                        <span>Pokédex</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navigation" />
                    <Navbar.Collapse id="main-navigation">
                        <Nav className="ms-auto align-items-lg-center gap-lg-2">
                            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/personajes">Catálogo</Nav.Link>
                            <Nav.Link as={NavLink} to="/favorites">Favoritos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

    export { Header }
