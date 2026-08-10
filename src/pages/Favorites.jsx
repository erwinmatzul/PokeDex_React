import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { CardPokemon } from '../components/CardPokemon'

const Favorites = () => {

  const { favoritos } = useContext(PokemonContext)

  return (
    <>

      <div className='container'>
        <div className='row mt-5'>
          
        {
          favoritos.length > 0 ?

            favoritos.map((pokemon) => {
              return <CardPokemon key={pokemon.id} {...pokemon} />
            })
            : <p>No hay Pokemones Favoritos</p>
        }

        </div>

      </div>

    </>
  )
}

export { Favorites }
