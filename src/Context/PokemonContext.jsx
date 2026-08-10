import { createContext, useEffect, useState } from "react";
import { ApiClient } from "../Utils/api";
import { data } from "react-router";

const PokemonContext = createContext()


const PokemonProvider = ({ children }) => {


    const [pokemons, setPokemons] = useState([])
    const [pokemonsFilter, setPokemonsFilter] = useState([])
    const [favoritos, setFavoritos] = useState([])
    const [paginados, setPaginados] = useState([])

    /* const getPokemons = async () => {
        const { data } = await apiClient.get('/pokemon')

        const pokemones = await Promise.all(data.results.map(async item => {
            const pokemon = await apiClient.get(item.url)
            return {
                name: pokemon.data.name,
                types: pokemon.data.types.map(item => item.type.name),
                image: pokemon.data.sprites.other.home.front_default
            }
        }))

        return pokemones;
    } */


    useEffect(() => {

        const getPokemons = async () => {

            const { data } = await ApiClient.get('/pokemon?limit=1025')

            const pokemones = await Promise.all(data.results.map(async item => {
                const pokemon = await ApiClient.get(item.url)

                return {

                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    types: pokemon.data.types.map(item => item.type.name),
                    image: pokemon.data.sprites.other.home.front_default,
                    isFavorite: false,
                }
            }))

            paginate(pokemones)
            setPokemons(pokemones)

        }

        const paginate = (pokemons) => {
      
            const limit = 20/* 
            const offset = 20 */
            let paginado = []

            for (let i = 0; i < pokemons.length; i += limit) {
                paginado.push(pokemons.slice(i, i + limit))
            }
            console.log(paginado)
            setPaginados(paginado)
            setPokemonsFilter(paginado[0])
        }

        getPokemons()

    }, [])


    const getDetailPokemon = async (id) => {
        const pokemon = await ApiClient.get(`/pokemon/${id}`)
        return pokemon.data
    }

    const addFavorite = (id) => {

        const pokemon = pokemons.find(pokemon => pokemon.id == id)

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


    return (
        <PokemonContext.Provider value={{
            getDetailPokemon,
            favoritos,
            addFavorite,
            pokemons,
            pokemonsFilter,
            setPokemonsFilter,
            paginados
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonProvider, PokemonContext }
