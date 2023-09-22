<script setup>
import PokeItem from "./PokeItem.vue";

defineProps({
  pokelist: {
    type: Object,
    required: true,
  },
  isFavoritesPage: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="poke-gallery">
    <PokeItem
      v-for="pokemon in pokelist.filter((pokemon) =>
        isFavoritesPage ? pokemon.favorite : true
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
