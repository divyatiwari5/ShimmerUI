import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Pokemon, SpriteValue } from "./types";

interface PokemonListProps {
  pokemon: Pokemon | null;
}

interface ISprite {
  image: string;
  pokemonName: string;
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  const [sprites, setSprites] = useState<ISprite[]>([]);

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

    console.log(formattedSprites, sprites);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {sprites.map((sprite, i) => (
        <div key={i}>
          <p>{sprite.pokemonName}</p>

          <Image
            src={sprite.image}
            alt={sprite.pokemonName}
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
