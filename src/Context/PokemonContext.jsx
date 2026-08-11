import { createContext, useEffect, useState } from "react";
import { ApiClient } from "../Utils/api";
import { data } from "react-router";

const PokemonContext = createContext()


const PokemonProvider = ({ children }) => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsFilter, setPokemonsFilter] = useState([])
    const [favoritos, setFavoritos] = useState([])
    const [paginados, setPaginados] = useState([])
    const [page, setPage] = useState(0)
  
    useEffect(() => {

        const getPokemons = async () => {
        
            const { data } = await ApiClient.get(`/pokemon?limit=20&offset=${page * 20}`)

            const pokemones = await Promise.all(data.results.map(async item => {
                const pokemon = await ApiClient.get(item.url)

                return {

                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    types: pokemon.data.types.map(item => item.type.name),
                    image: pokemon.data.sprites.other.home.front_default,
                    isFavorite: favoritos.some(poke => poke.id == pokemon.data.id),
                }
            }))

            setPokemons(pokemones)
            setPokemonsFilter(pokemones)
        }
        getPokemons()

    }, [page])


    const getDetailPokemon = async (id) => {
        const pokemon = await ApiClient.get(`/pokemon/${id}`)
        return pokemon.data
    }

    const addFavorite = (id) => {

        const pokemon = pokemons.find(pokemon => pokemon.id == id)

        if (!favoritos.some(item => item.id == id)) {

            setPokemons((pokemons) => pokemons.map((pokemon => {
                return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
            })))

            setPokemonsFilter((pokemons) => pokemons.map((pokemon => {
                return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
            })))

            setFavoritos([...favoritos, {
                name: pokemon.name,
                image: pokemon.image,
                id: pokemon.id,
                types: pokemon.types,
            }])
        }
    }

    return (
        <PokemonContext.Provider value={{
            getDetailPokemon,
            favoritos,
            addFavorite,
            pokemons,
            pokemonsFilter,
            setPokemonsFilter,
            paginados,
            page,
            setPage
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonProvider, PokemonContext }
