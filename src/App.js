import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  const [pokemon, setPokemon] = useState()
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState('')

  const getPokemon = async () => {
    const toArray = []
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon
      const res = await axios.get(url)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
  }

  return (
    <>
      <div className='pokedex'>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" onChange={handleChange} placeholder='Enter pokemon name...'></input>
          </label>
        </form>
      </div>
    </>
  )
}

