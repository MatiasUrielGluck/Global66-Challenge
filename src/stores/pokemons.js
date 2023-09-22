import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { fetchPokemonList } from "../api/pokemons";

export const usePokemonsStore = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const favorites = ref([]);

  const getPokemonList = computed(() => pokemons.value);
  const getFavoritesList = computed(() => favorites.value);

  const toggleFavorite = (name) => {
    const pokemonIndex = pokemons.value.findIndex(
      (pokemon) => pokemon.name === name
    );
    pokemons.value[pokemonIndex].favorite =
      !pokemons.value[pokemonIndex].favorite;
  };

  async function fetchPokemons() {
    const data = await fetchPokemonList();
    data.forEach((pokemon) => {
      pokemons.value.push({
        ...pokemon,
        favorite: false,
      });
    });
  }

  return {
    pokemons,
    favorites,
    getPokemonList,
    getFavoritesList,
    fetchPokemons,
    toggleFavorite,
  };
});
