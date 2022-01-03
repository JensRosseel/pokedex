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
      toArray.push(res.data)
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray)
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
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" onChange={handleChange} placeholder='Enter pokemon name...'></input>
          </label>
        </form>
        {pokemonData.map((data) => {
          return(
            <div className='pokedex'>
              <div className='rotom'>
                <img src={data.sprites['front_default']} />
              </div>
              <div className='data-container'>
                <div className='table'>
                  <div className='table-row'>
                    <div className='table-data'>Type:</div>
                    <div className='table-data'>{pokemonType}</div>
                  </div>
                  <div className='table-row'>
                    <div className='table-data'>Height:</div>
                    <div className='table-data'>{data.height / 10} m</div>
                  </div>
                  <div className='table-row'>
                    <div className='table-data'>Weight:</div>
                    <div className='table-data'>{data.weight / 10} kg</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

