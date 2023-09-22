<script setup>
import PokeItem from "./PokeItem.vue";

defineProps({
  pokelist: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="poke-gallery">
    <PokeItem
      v-for="pokemon in pokelist"
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
