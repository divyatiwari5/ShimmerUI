export type SpriteValue = string | null | { [key: string]: SpriteValue };

export interface Pokemon {
  sprites: {
    [key: string]: SpriteValue;
  };
}

export interface ISprite {
  image: string;
  pokemonName: string;
}
