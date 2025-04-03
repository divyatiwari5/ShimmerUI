import React, { useState, useEffect } from "react";
import { ISprite, Pokemon, SpriteValue } from "./types";
import PokemonCard from "./pokemonCard";
import Shimmer from "../shimmer";

interface PokemonListProps {
  pokemon: Pokemon | null;
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  const [sprites, setSprites] = useState<ISprite[] | null>(null);

  useEffect(() => {
    if (pokemon) {
      fetchSprites(pokemon);
    }
  }, [pokemon]);

  const fetchSprites = (pokemon: Pokemon) => {
    const formattedSprites: ISprite[] = [];

    const calculateSprite = (spriteData: { [key: string]: SpriteValue }) => {
      if (!spriteData) return;

      Object.entries(spriteData).forEach(([key, value]) => {
        if (typeof value === "string" && value !== null) {
          formattedSprites.push({
            image: value,
            pokemonName: key,
          });
        } else if (value && typeof value === "object") {
          calculateSprite(value as { [key: string]: SpriteValue });
        }
      });
    };

    calculateSprite(pokemon.sprites);
    setSprites(formattedSprites);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {sprites ? (
        <>
          {sprites.map((sprite, i) => (
            <PokemonCard sprite={sprite} key={i} />
          ))}
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default PokemonList;
