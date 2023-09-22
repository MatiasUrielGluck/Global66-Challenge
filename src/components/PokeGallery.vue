<script setup>
import { usePokemonsStore } from "../stores/pokemons";
import PokeItem from "./PokeItem.vue";

const store = usePokemonsStore();

defineProps({
  isFavoritesPage: {
    type: Boolean,
    required: false,
  },
  searchQuery: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="poke-gallery" v-if="!isFavoritesPage">
    <PokeItem
      v-for="pokemon in store.getPokemonList.filter((pokemon) =>
        pokemon.name.includes(searchQuery)
      )"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
  <div class="poke-gallery" v-else>
    <PokeItem
      v-for="pokemon in store.getPokemonList.filter(
        (pokemon) => pokemon.favorite && pokemon.name.includes(searchQuery)
      )"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.poke-gallery {
  margin-bottom: 90px;
}
</style>
