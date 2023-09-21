import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchPokemonList } from "../api/pokemons";

export const usePokemonsStore = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const favorites = ref([]);

  const toggleFavorite = () => {};

  async function fetchPokemons() {
    pokemons.value = await fetchPokemonList();
  }

  return {
    pokemons,
    favorites,
    fetchPokemons,
    toggleFavorite,
  };
});
