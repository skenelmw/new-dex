import React from 'react';

const Result = (props) => {
    const pokemon = props.pokemon
    return (
        <div>
            <p>Name: {pokemon.name}</p>
            <p>Dex no. {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.typeOne} {pokemon.typeTwo}</p>
            <img src={pokemon.sprite} />
        </div>
    )
}
export default Result