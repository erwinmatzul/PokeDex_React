import { useContext, useEffect, useState } from "react"
import { CardPokemon } from "../components/CardPokemon"
import { PokemonContext } from "../Context/PokemonContext"
import { Container, Form, InputGroup, Row } from "react-bootstrap"
import { NavLink } from "react-router"

const Personajes = () => {

    const { pokemons, pokemonsFilter, setPokemonsFilter, paginados } = useContext(PokemonContext)
    const [page, setPage] = useState(0)

    const buscador = (e) => {

        const pokemonEncontrado = pokemons.filter(pokemon => pokemon.name.toLowerCase().
        includes(e.target.value.toLowerCase())).slice(0, 20)

        if (e.target.value == "") {
            setPokemonsFilter(paginados[page])

        } else {
            setPokemonsFilter(pokemonEncontrado)
        }

    }

    const irAdelante = () => {
        setPage(prev => prev + 1)
        setPokemonsFilter(paginados[page + 1])
        
    }

    const irAtras = () => {
        setPage(prev => prev - 1)
        setPokemonsFilter(paginados[page - 1])
    }
    
    return (

        <main className="catalog-page">
            <Container className="py-5">
                <div className="catalog-heading text-center">
                    <span className="catalog-eyebrow">Pokédex</span>
                    <h1>Explora el mundo Pokémon</h1>
                    <p>Descubre tus Pokémon favoritos y conoce cada detalle.</p>
                </div>
                <div className="catalog-search">


                    <InputGroup>
                        <InputGroup.Text className="search-icon" aria-hidden="true">
                            ⌕
                        </InputGroup.Text>
                        <Form.Control
                            type="search"
                            placeholder="Busca un Pokémon por nombre..."
                            aria-label="Buscar Pokémon por nombre"
                            onChange={buscador}
                        />
                    </InputGroup>

                </div>

                <div>
                    <button onClick={irAdelante}>Ir Siguiente</button>
                    <button onClick={irAtras}>Ir Atras</button>
                </div>

                <Row className="g-4">
                    {
                        pokemonsFilter?.map(item => (
                            <CardPokemon key={item.id} {...item} />
                        ))
                    }
                </Row>
            </Container>
        </main>
    )
}

export { Personajes }
