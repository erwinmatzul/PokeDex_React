import { useContext } from "react"
import { Badge, Button, Card, Col } from "react-bootstrap"
import { NavLink } from "react-router"
import { PokemonContext } from "../Context/PokemonContext"


const CardPokemon = ({ image, name, descripcion, types, id, isFavorite }) => {

    const { addFavorite } = useContext(PokemonContext)

    return (
        <Col sm={6} lg={4} xl={3}>
            <Card className="pokemon-card h-100">
                <div className="pokemon-image-wrapper">
                    <Card.Img variant="top" src={image} alt={name} className="pokemon-image" />
                </div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="pokemon-name">{name}</Card.Title>
                    <div className="pokemon-types" aria-label="Tipos de Pokémon">
                        {types?.map(type => (
                            <Badge key={type} pill bg="light" text="dark">
                                {type}
                            </Badge>
                        ))}
                    </div>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <div className="d-grid gap-2 mt-auto">
                        <NavLink to={`/detalles/${id}`} className="btn btn-primary" variant="primary">Ver detalles</NavLink>

                        {
                            isFavorite != undefined &&
                            <Button
                                className={`favorite-button ${isFavorite ? '' : 'is-favorite'}`}
                                onClick={() => addFavorite(id)}
                                variant={isFavorite ? 'warning' : ''}
                            >
                                {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                            </Button>

                        }


                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export { CardPokemon }
