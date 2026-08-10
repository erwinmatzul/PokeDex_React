import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../Context/PokemonContext"
import { useNavigate, useParams } from "react-router"
import { Alert, Badge, Button, Card, Col, Container, ProgressBar, Row, Spinner } from "react-bootstrap"

const DetallePokemon = ({children}) => {

    const {getDetailPokemon} = useContext(PokemonContext)
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        const getData = async () =>{
            try {
                const response = await getDetailPokemon(id)
                setPokemon(response)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [id, getDetailPokemon])

    if (loading) {
        return (
            <main className="pokemon-detail-page detail-state">
                <Spinner animation="border" variant="danger" aria-label="Cargando Pokémon" />
            </main>
        )
    }

    if (error || !pokemon) {
        return (
            <main className="pokemon-detail-page detail-state">
                <Alert variant="danger" className="detail-error">
                    No se pudo cargar el perfil de este Pokémon.
                </Alert>
                <Button variant="outline-secondary" onClick={() => navigate(-1)}>Volver</Button>
            </main>
        )
    }

    const image = pokemon.sprites?.other?.['official-artwork']?.front_default
        || pokemon.sprites?.front_default
    const primaryType = pokemon.types?.[0]?.type?.name || 'normal'
    const maxStat = 150

    return (
        <main className={`pokemon-detail-page detail-type-${primaryType}`}>
            <Container className="py-4 py-md-5">
                <Button variant="link" className="detail-back-button" onClick={() => navigate(-1)}>
                    ← Volver a la Pokédex
                </Button>

                <Card className="pokemon-profile-card border-0">
                    <Row className="g-0 align-items-stretch">
                        <Col lg={5} className="profile-hero">
                            <span className="profile-number">N.º {String(pokemon.id).padStart(4, '0')}</span>
                            {image && <img className="profile-image" src={image} alt={pokemon.name} />}
                            <div className="profile-type-list">
                                {pokemon.types?.map(({ type }) => (
                                    <Badge key={type.name} className={`type-badge type-${type.name}`}>
                                        {type.name}
                                    </Badge>
                                ))}
                            </div>
                        </Col>

                        <Col lg={7}>
                            <Card.Body className="profile-content">
                                <span className="catalog-eyebrow">Perfil Pokémon</span>
                                <h1 className="profile-name">{pokemon.name}</h1>
                                <p className="profile-description">
                                    Conoce las características, estadísticas y habilidades de este Pokémon.
                                </p>

                                <Row className="profile-facts g-3">
                                    <Col xs={6}>
                                        <span className="fact-label">Altura</span>
                                        <strong>{(pokemon.height / 10).toFixed(1)} m</strong>
                                    </Col>
                                    <Col xs={6}>
                                        <span className="fact-label">Peso</span>
                                        <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
                                    </Col>
                                </Row>

                                <section className="profile-section">
                                    <h2>Estadísticas base</h2>
                                    <div className="stats-list">
                                        {pokemon.stats?.map(({ base_stat: value, stat }) => (
                                            <div className="stat-row" key={stat.name}>
                                                <span className="stat-name">{stat.name.replace('-', ' ')}</span>
                                                <span className="stat-value">{value}</span>
                                                <ProgressBar now={value} max={maxStat} variant="danger" aria-label={`${stat.name}: ${value}`} />
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="profile-section">
                                    <h2>Habilidades</h2>
                                    <div className="ability-list">
                                        {pokemon.abilities?.map(({ ability, is_hidden }) => (
                                            <Badge bg="light" text="dark" key={ability.name}>
                                                {ability.name.replace('-', ' ')}{is_hidden && ' · oculta'}
                                            </Badge>
                                        ))}
                                    </div>
                                </section>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </main>
    )
}

export { DetallePokemon }
