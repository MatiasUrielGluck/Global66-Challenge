<script setup>
import { usePokemonsStore } from "../stores/pokemons";
import IconLoading from "../components/icons/IconLoading.vue";
import SearchBar from "../components/SearchBar.vue";
import PokeGallery from "../components/PokeGallery.vue";

const store = usePokemonsStore();

const onQueryChange = (searchQuery) => {
  console.log(searchQuery);
};
</script>

<template>
  <div class="all-pokemons" v-if="store.pokemons.length">
    <SearchBar @change="onQueryChange" />
    <div class="gallery">
      <PokeGallery />
    </div>
  </div>

  <div class="loading" v-else>
    <div class="loader-icon">
      <IconLoading />
    </div>
  </div>
</template>

<style scoped>
.all-pokemons {
  padding: 6.66%;
}

.gallery {
  margin-top: 90px;
}

@media (min-width: 1024px) {
  .all-pokemons {
    padding: 0 25%;
    min-height: 100vh;
  }

  .gallery {
    margin-top: 125px;
  }
}

/* Loading display */
.loading {
  height: 100vh;
  display: grid;
  place-items: center;
}

.loader-icon {
  width: fit-content;
  height: fit-content;
  animation: loading-animation 1.5s infinite linear;
}

@keyframes loading-animation {
  0% {
    transform: scale(100%) /**/;
  }
  50% {
    transform: scale(120%) /**/;
  }
  100% {
    transform: scale(100%) /**/;
  }
}
</style>
