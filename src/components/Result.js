import React from 'react';

const Result = (props) => {
    return (
        <div>
            <p>Name: {props.pokemon.name}</p>
            {/* <p>Dex no.: {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.typeOne}</p>
            <p> {pokemon.typeTwo}</p>
            <img src={pokemon.sprite} /> */}
        </div>
    )
}
export default Result