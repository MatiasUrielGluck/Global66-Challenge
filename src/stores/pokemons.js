import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { fetchPokemonList } from "../api/pokemons";

export const usePokemonsStore = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const favorites = ref([]);

  const getPokemonList = computed(() => pokemons.value);
  const getFavoritesList = computed(() => favorites.value);

  const toggleFavorite = () => {};

  async function fetchPokemons() {
    pokemons.value = await fetchPokemonList();
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
