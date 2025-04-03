import PokemonList from "./pokemonList";

async function Pokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemon = await response.json();

  return (
    <div className="container mx-auto p-4">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default Pokemon;
