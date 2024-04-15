import React, { useState, useEffect } from 'react';

export const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results);
      });
  };

  const handleShowList = () => {
    setShowList(true);
  };

  const handleHideList = () => {
    setShowList(false);
  };

  const handleDelete = (index) => {
    const newPokemonList = [...pokemon];
    newPokemonList.splice(index, 1);
    setPokemon(newPokemonList);
  };

  return (
    <div className='botones'>
      <button onClick={handleShowList}>Lista de Pokemons</button>
      <button onClick={handleHideList}>Ocultar Lista</button>
      {showList && pokemon.map((poke, index) => (
        <div key={poke.name}>
          <p>{poke.name}</p>
          <button onClick={() => handleDelete(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};