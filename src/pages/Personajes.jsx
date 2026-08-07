import { useContext, useEffect, useState } from "react"
import { CardPokemon } from "../components/CardPokemon"
import { PokemonContext } from "../Context/PokemonContext"
import { Container, Form, InputGroup, Row } from "react-bootstrap"

const Personajes = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsFilter, setPokemonsFilter] = useState([])

    const { getPokemons } = useContext(PokemonContext)

    useEffect(() => {

        const getPoke = async () => {
            let pokemonsApi = await getPokemons()
            setPokemons(pokemonsApi)
            setPokemonsFilter(pokemonsApi)
        }

        getPoke()
    }, [getPokemons])
 
   
  const buscador = (e) => {
        const pokemonEncontrado = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setPokemonsFilter(pokemonEncontrado)

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
                <Row className="g-4">
                {
                    pokemonsFilter.map(item => (
                        <CardPokemon key={item.name} {...item} />
                    ))
                }
                </Row>
            </Container>
        </main>
    )
}

export { Personajes }
