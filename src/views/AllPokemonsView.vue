<script setup>
import { usePokemonsStore } from "../stores/pokemons";
import IconLoading from "../components/icons/IconLoading.vue";

const store = usePokemonsStore();
</script>

<template>
  <div class="all-pokemons" v-if="store.pokemons.length">
    
  </div>
  <div class="loading" v-else>
    <IconLoading />
  </div>
</template>

<style scoped>
.loading {
  display: grid;
  place-items: center;
  min-height: 100vh;
  animation: loading-animation 2s infinite linear;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
