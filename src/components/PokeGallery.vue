<script setup>
import { ref } from "vue";
import PokeItem from "./PokeItem.vue";
import PokeModal from "./PokeModal.vue";

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
  query: {
    type: String,
    required: true,
  },
});

const isModalOpen = ref(false);
const selectedPokemon = ref({});

const selectPokemon = (pokemon) => {
  selectedPokemon.value = pokemon;
  isModalOpen.value = true;
};

const unselectPokemon = () => {
  selectedPokemon.value = {};
  isModalOpen.value = false;
};
</script>

<template>
  <PokeModal
    v-if="isModalOpen"
    :pokemon="selectedPokemon"
    @close-modal="unselectPokemon"
  />
  <div class="poke-gallery">
    <PokeItem
      v-for="pokemon in pokelist.filter((poke) =>
        poke.name.toLowerCase().includes(query.toLowerCase())
      )"
      :key="pokemon.name"
      :pokemon="pokemon"
      @select-pokemon="selectPokemon"
    />
  </div>
</template>

<style scoped>
.poke-gallery {
  margin-bottom: 90px;
}
</style>
