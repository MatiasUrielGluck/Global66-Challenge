<script setup>
import { usePokemonsStore } from "../stores/pokemons";
import PokeItem from "./PokeItem.vue";

const store = usePokemonsStore();
console.log(store.getPokemonList);
</script>

<template>
  <div class="poke-gallery">
    <PokeItem
      v-for="pokemon in store.getPokemonList"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.poke-gallery {
  
}
</style>
