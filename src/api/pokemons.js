export const fetchPokemonList = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0"
  );
  const data = await res.json();
  return data.results;
};
