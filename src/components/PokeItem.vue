<script setup>
import IconFavoriteEnabled from "../components/icons/IconFavoriteEnabled.vue";
import IconFavoriteDisabled from "../components/icons/IconFavoriteDisabled.vue";
import { usePokemonsStore } from "../stores/pokemons";

const store = usePokemonsStore();

defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>

<template>
  <div class="poke-item prevent-select">
    <p>{{ capitalize(pokemon.name) }}</p>
    <div class="fav-btn" @click="store.toggleFavorite(pokemon.name)">
      <IconFavoriteEnabled v-if="pokemon.favorite" />
      <IconFavoriteDisabled v-else />
    </div>
  </div>
</template>

<style scoped>
.poke-item {
  cursor: pointer;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: var(--color-body-background-secondary);
}

p {
  font-size: 22px;
  font-weight: 500;
  line-height: 26.4px;
  color: var(--color-text-li);
}
</style>
