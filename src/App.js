import React, { useEffect, useState } from 'react';
import './App.css';
import Result from './components/Result'
import Search from './components/Search'

function App() {
  const [pokemon, setPokemon] = useState({
    name: "", id: "", height: "", weight: "", 
    typeOne: "", typeTwo: "", sprite: ""
  })
  const handleSearch = (query) => {
    console.log(query)
    fetch("https://pokeapi.co/api/v2/pokemon/" + query).then(res => res.json()).then(res => {
    console.log(res)
    const {name, id, height, weight} = res
      setPokemon({name, id, height, weight,
        typeOne: res.types[0].type.name,
        typeTwo: res.types[1] ? res.types[1].type.name : "",
        sprite: res.sprites.front_default
      })
    })
  }
  return (
    <div className="App">
      <Search 
        handleSearch={handleSearch}
      />
      <Result 
        pokemon={pokemon}
      />
    </div>
  );
}

export default App;
