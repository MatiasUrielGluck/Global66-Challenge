import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { fetchPokemonList } from "../api/pokemons";

export const usePokemonsStore = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const favPokemons = ref([]);

  const getPokemonList = computed(() => pokemons.value);
  const getFavPokemonList = computed(() => favPokemons.value);

  const toggleFavorite = (name) => {
    if (favPokemons.value.find((pokemon) => pokemon.name === name)) {
      // Delete pokemon from fav list
      favPokemons.value = favPokemons.value.filter(
        (pokemon) => pokemon.name !== name
      );
    } else {
      favPokemons.value = [
        ...favPokemons.value,
        pokemons.value.find((pokemon) => pokemon.name === name),
      ];
    }
  };

  async function fetchPokemons() {
    const data = await fetchPokemonList();
    pokemons.value = data;
  }

  return {
    pokemons,
    favPokemons,
    getPokemonList,
    getFavPokemonList,
    fetchPokemons,
    toggleFavorite,
  };
});
