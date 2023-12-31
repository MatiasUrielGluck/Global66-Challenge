<script setup>
import { ref, onMounted, toRaw } from "vue";
import IconClose from "./icons/IconClose.vue";
import { fetchSinglePokemon } from "../api/pokemons";
import StyledButton from "./StyledButton.vue";
import IconFavoriteEnabled from "./icons/IconFavoriteEnabled.vue";
import { usePokemonsStore } from "../stores/pokemons";
import IconFavoriteDisabled from "./icons/IconFavoriteDisabled.vue";
import IconLoading from "./icons/IconLoading.vue";

const store = usePokemonsStore();

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["closeModal"]);

const pokeInfo = ref();

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getTypes = () => {
  if (!pokeInfo.value) return;
  const types = toRaw(pokeInfo.value.types);
  let result = "";

  for (const type of types) {
    result += capitalize(type.type.name) + ", ";
  }

  return result.slice(0, result.length - 2);
};

const shareInfo = () => {
  let info = `${pokeInfo.value.name}, ${pokeInfo.value.weight}, ${
    pokeInfo.value.height
  }, ${getTypes()}`;
  navigator.clipboard.writeText(info);
};

onMounted(async () => {
  pokeInfo.value = await fetchSinglePokemon(props.pokemon.name);
});
</script>

<template>
  <Teleport to="#modal">
    <div class="poke-modal">
      <div class="internal-container">
        <div class="close-btn" @click="emit('closeModal')">
          <IconClose />
        </div>
        <div v-if="pokeInfo">
          <div class="image-container">
            <div class="backgroud">
              <img src="@/assets/landscape.png" alt="pokemon landscape image" />
            </div>
            <div class="poke-image">
              <img :src="pokeInfo.sprites.front_default" alt="" />
            </div>

            <div class="poke-info">
              <ul>
                <li><span>Name: </span>{{ capitalize(pokeInfo.name) }}</li>
                <li><span>Weight: </span>{{ pokeInfo.weight }}</li>
                <li><span>Height: </span>{{ pokeInfo.height }}</li>
                <li><span>Types: </span>{{ getTypes() }}</li>
              </ul>
            </div>
          </div>
          <div class="share-btn">
            <StyledButton
              :text="'Share to my friends'"
              :width="'195px'"
              :height="'44px'"
              @action="shareInfo"
            />
          </div>
          <div class="favorite-btn" @click="store.toggleFavorite(pokemon.name)">
            <IconFavoriteEnabled
              v-if="
                store.getFavPokemonList.find(
                  (poke) => poke.name === props.pokemon.name
                )
              "
            />
            <IconFavoriteDisabled v-else />
          </div>
        </div>

        <div class="loading" v-else>
          <IconLoading />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.poke-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.internal-container {
  background: var(--color-body-background-secondary);
  position: relative;
  width: calc(100% - 6.66% * 2);
  height: 506px;
  border-radius: 5px;
}

.close-btn {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
}

.image-container {
  height: 220px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}

.poke-image {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.poke-image img {
  margin-top: 70px;
  height: 180px;
  width: 180px;
  image-rendering: pixelated;
}

.image-container .backgroud img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.poke-info ul {
  list-style: none;
  padding: 0;
}

.poke-info ul li {
  padding: 10px 0;
  margin: 0 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-p);
}

li span {
  font-weight: 700;
}

.share-btn {
  position: absolute;
  left: 30px;
  bottom: 20px;
}

.favorite-btn {
  position: absolute;
  right: 30px;
  bottom: 20px;
}

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
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

@media (min-width: 768px) {
  .internal-container {
    width: calc(100% - 25% * 2);
  }
}
</style>
