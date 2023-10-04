<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePokemonsStore } from "../stores/pokemons";
import IconLoading from "../components/icons/IconLoading.vue";
import SearchBar from "../components/SearchBar.vue";
import PokeGallery from "../components/PokeGallery.vue";
import NavFooter from "../components/NavFooter.vue";
import StyledButton from "../components/StyledButton.vue";
import { storeToRefs } from "pinia";

const props = defineProps({
  isFavoritesPage: {
    type: Boolean,
    required: false,
  },
});

const store = usePokemonsStore();
const router = useRouter();

const query = ref("");

const { getPokemonList, getFavPokemonList } = storeToRefs(store);
const pokelist = ref(
  props.isFavoritesPage ? getFavPokemonList : getPokemonList
);

const onQueryChange = (newSearchQuery) => {
  query.value = newSearchQuery;
};

const goBack = () => {
  document.getElementById("search-input").value = "";
  onQueryChange("");

  if (props.isFavoritesPage) {
    router.push("/all");
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
  if (store.getPokemonList.length) return;
  store.fetchPokemons();
});
</script>

<template>
  <div class="invalid-fetch" v-if="store.pokemons === 500">
    <div class="invalid-query">
      <h1>Uh-oh!</h1>
      <p>There was a problem loading the application.</p>
      <div class="back-btn">
        <StyledButton
          :text="'Try again'"
          :width="'155px'"
          :height="'44px'"
          @action="store.fetchPokemons()"
        />
      </div>
    </div>
  </div>

  <div class="pokemons-view" v-else-if="store.pokemons.length">
    <SearchBar @change="onQueryChange" />
    <div class="valid-query" v-if="pokelist.length">
      <div class="gallery">
        <PokeGallery
          :pokelist="pokelist"
          :is-favorites-page="isFavoritesPage"
          :query="query"
        />
      </div>
      <NavFooter :actual-page="isFavoritesPage ? 'favorites' : 'all'" />
    </div>
    <div class="invalid-query" v-else>
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <div class="back-btn">
        <StyledButton
          :text="'Go back home'"
          :width="'155px'"
          :height="'44px'"
          @action="goBack()"
        />
      </div>
    </div>
  </div>

  <div class="loading" v-else>
    <div class="loader-icon">
      <IconLoading />
    </div>
  </div>
</template>

<style scoped>
.pokemons-view {
  padding: 6.66%;
}

.gallery {
  margin-top: 90px;
}

@media (min-width: 768px) {
  .pokemons-view {
    padding: 0 25%;
    min-height: 100vh;
  }

  .gallery {
    margin-top: 125px;
  }
}

/* Invalid fetch (api error) */
.invalid-fetch {
  height: 100vh;
}

.invalid-fetch > .invalid-query {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

/* Invalid query (empty list) */
.invalid-query {
  display: grid;
  place-items: center;
  margin-top: 100px;
}

.invalid-query > h1 {
  font-weight: 700;
  font-size: 36px;
  line-height: 43.2px;
  text-align: center;
}

.invalid-query > p {
  margin-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
}

.invalid-query > .back-btn {
  margin-top: 25px;
}

@media (min-width: 768px) {
  .invalid-query {
    margin-top: 120px;
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
