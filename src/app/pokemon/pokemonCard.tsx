import React from "react";
import { ISprite } from "./types";
import Image from "next/image";

interface PokemonCardProps {
  sprite: ISprite;
}
const PokemonCard = ({ sprite }: PokemonCardProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-2 shadow-md h-24 w-[150px] m-1">
      <p className="text-xs font-bold uppercase">{sprite.pokemonName}</p>

      <Image
        src={sprite.image}
        alt={sprite.pokemonName}
        width={50}
        height={50}
      />
    </div>
  );
};

export default PokemonCard;
