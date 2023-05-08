import React, { useState } from 'react'


const PokeDex = () => {
    const [pokemonList, setPokemonList] = useState([]);


    const FetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response =>{
            return response.json()
        })
        .then(response => {
            setPokemonList(response.results)
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }





    return (
        <div className='container text-center'>
            <button onClick={FetchPokemon} className='mb-5'> Fetch Pokemon</button>
            {
                pokemonList.map( (pokemon, i) => {
                    return(
                        <li key = {i}>
                            {pokemon.name}
                        </li>
                    )
                })
            }
        </div>
    )
        }

export default PokeDex