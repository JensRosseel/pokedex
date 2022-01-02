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
      <div className='pokedex'>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" onChange={handleChange} placeholder='Enter pokemon name...'></input>
          </label>
        </form>
        {pokemonData.map((data) => {
          return(
            <div className='container'>
              <img />
              <table>
                <tr>
                  <td>Type:</td>
                  <td>{pokemonType}</td>
                </tr>
                <tr>
                  <td>Height:</td>
                  <td>{data.height}</td>
                </tr>
                <tr>
                  <td>Weight:</td>
                  <td>{data.weight}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{pokemonType}</td>
                </tr>
              </table>
            </div>
          )
        })}
      </div>
    </>
  )
}

