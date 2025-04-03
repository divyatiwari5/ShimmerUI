import React from "react";
import { Pokemon, SpriteValue } from "./types";
import PokemonCard from "./pokemonCard";

interface PokemonListProps {
  pokemon: Pokemon;
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  const renderSprite = (sprites: SpriteValue) => {
    if (!sprites) return null;
    return Object.entries(sprites).map(([key, value], i) => {
      if (typeof value === "string" && value !== null) {
        return (
          <PokemonCard
            sprite={{ image: value, pokemonName: key }}
            key={key + i}
          />
        );
      } else if (value && typeof value === "object") {
        return (
          <div key={key + i} className="mb-8">
            <p className="text-xs font-bold uppercase mb-2">{key}</p>
            <div className="flex flex-row flex-wrap gap-4">{renderSprite(value)}</div>
          </div>
        );
      }
      return null;
    });
  };

  return <div>{renderSprite(pokemon.sprites)}</div>;
};

export default PokemonList;
