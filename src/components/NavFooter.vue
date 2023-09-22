<script setup>
import IconListAll from "../components/icons/IconListAll.vue";
import IconFavoritesPlain from "../components/icons/IconFavoritesPlain.vue";
import StyledButton from "./StyledButton.vue";

defineProps({
  actualPage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer>
    <StyledButton
      :secondary="actualPage === 'all' ? false : true"
      :text="'All'"
      :url="'/all'"
      @action="$router.push('/all')"
      :width="'150px'"
      :height="'44px'"
      force-width
    >
      <template v-slot:icon>
        <IconListAll />
      </template>
    </StyledButton>

    <StyledButton
      :secondary="actualPage === 'favorites' ? false : true"
      :text="'Favorites'"
      :url="'/all'"
      @action="$router.push('/favorites')"
      :width="'150px'"
      :height="'44px'"
      force-width
    >
      <template v-slot:icon>
        <IconFavoritesPlain />
      </template>
    </StyledButton>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background: var(--color-body-background-secondary);
  box-shadow: 0px -5px 4px 0px #0000000d;
  padding: 0 6.66%;
}

@media (min-width: 1024px) {
  footer {
    padding: 0 25%;
  }
}
</style>
