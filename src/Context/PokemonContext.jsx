import { createContext } from "react";
import { ApiClient } from "../Utils/api";

const PokemonContext = createContext()


const PokemonProvider = ({ children }) => {

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

    const getPokemons = async () => {

        const response = await ApiClient.get("/pokemon")

        console.log(response.data)

        let data = []

        for (let i = 0; i < response.data.results.length; i++) {

            const pokemon = await ApiClient.get(response.data.results[i].url)

            const pokemonMio = {
                name: pokemon.data.name,
                types: pokemon.data.types.map(item => item.type.name),
                image: pokemon.data.sprites.other.home.front_default
            }

            data.push(pokemonMio)
        }
        return data
    }


    return (
        <PokemonContext.Provider value={{
            getPokemons
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonProvider, PokemonContext }
