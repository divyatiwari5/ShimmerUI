'use client';

import React, {useState, useEffect} from 'react'
import PokemonList from './pokemonList'
import { SpriteValue } from './types';

interface Pokemon {
    sprites: {
      [key: string]: SpriteValue;
    };
  }
const Pokemon = () => {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    setPokemon(data);
  }

  useEffect(() => {
    fetchPokemon()
  }, []);
  return (
    <div>
        <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default Pokemon