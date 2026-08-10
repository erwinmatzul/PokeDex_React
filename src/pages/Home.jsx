import { NavLink } from "react-router"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Home = () => {
    return (
        <main className="home-page">
            <section className="home-hero">
                <Container>
                    <Row className="align-items-center gy-5">
                        <Col lg={7}>
                            <span className="home-eyebrow">Tu aventura comienza aquí</span>
                            <h1>Descubre el mundo <span>Pokémon</span></h1>
                            <p className="home-lead">
                                Explora una colección completa, conoce las estadísticas de cada criatura
                                y crea tu propia lista de favoritos.
                            </p>
                            <div className="home-actions">
                                <Button as={NavLink} to="/personajes" className="home-primary-button">
                                    Explorar catálogo <span aria-hidden="true">→</span>
                                </Button>
                                <Button as={NavLink} to="/favorites" variant="link" className="home-secondary-button">
                                    Ver favoritos
                                </Button>
                            </div>
                            <div className="home-trust-row">
                                <span><strong>151+</strong> Pokémon para descubrir</span>
                                <span className="trust-divider" aria-hidden="true" />
                                <span><strong>∞</strong> Aventuras por vivir</span>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="home-visual" aria-label="Ilustración de Pokéball">
                                <div className="visual-glow" />
                                <div className="pokeball-art">
                                    <div className="pokeball-line" />
                                    <div className="pokeball-button" />
                                </div>
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                                    alt="Pikachu"
                                    className="hero-pokemon"
                                />
                                <span className="visual-label">#025 · Pikachu</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="home-features">
                <Container>
                    <div className="section-heading">
                        <span className="home-eyebrow">Todo lo que necesitas</span>
                        <h2>Tu Pokédex, a tu manera</h2>
                    </div>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="feature-card h-100">
                                <Card.Body>
                                    <span className="feature-icon feature-icon-red">⌕</span>
                                    <h3>Explora sin límites</h3>
                                    <p>Busca y descubre información detallada de tus Pokémon favoritos.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="feature-card h-100">
                                <Card.Body>
                                    <span className="feature-icon feature-icon-yellow">✦</span>
                                    <h3>Conoce cada detalle</h3>
                                    <p>Consulta tipos, estadísticas, habilidades y mucho más.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="feature-card h-100">
                                <Card.Body>
                                    <span className="feature-icon feature-icon-blue">♡</span>
                                    <h3>Guarda tus favoritos</h3>
                                    <p>Crea tu colección personal y tenla siempre a mano.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export { Home }
