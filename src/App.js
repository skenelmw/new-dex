import React, { useEffect, useState } from 'react';
import './App.css';
import Result from './components/Result'

function App() {
  const [pokemon, setPokemon] = useState({name: "", id: "", height: "", weight: "", typeOne: "", typeTwo: "", sprite: ""})
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/growlithe").then(res => res.json()).then(res => {
      console.log(res)
      setPokemon({name: res.name})
    })
  }, [])
  return (
    <div className="App">
      <Result 
        pokemon={pokemon}
      />
    </div>
  );
}

export default App;
