import { Badge, Button, Card, Col } from "react-bootstrap"


const CardPokemon = ({ image, name, descripcion, types }) => {
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
                    <Button variant="primary">Ver detalles</Button>
                    <Button variant="outline-secondary">Agregar a favoritos</Button>
                </div>
            </Card.Body>
        </Card>
        </Col>



    )
}

export { CardPokemon }
