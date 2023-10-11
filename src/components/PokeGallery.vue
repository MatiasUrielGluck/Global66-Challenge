<script setup>
import { onBeforeUpdate, ref } from "vue";
import PokeItem from "./PokeItem.vue";
import PokeModal from "./PokeModal.vue";

const props = defineProps({
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

const emit = defineEmits(["showInvalidQuery"]);
const list = ref(props.pokelist);

onBeforeUpdate(() => {
  list.value = props.pokelist.filter((poke) =>
    poke.name.toLowerCase().includes(props.query.toLowerCase())
  );

  if (!list.value.length) {
    emit("showInvalidQuery");
  }
});
</script>

<template>
  <PokeModal
    v-if="isModalOpen"
    :pokemon="selectedPokemon"
    @close-modal="unselectPokemon"
  />
  <div class="poke-gallery">
    <PokeItem
      v-for="pokemon in list"
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
