<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="poke-item">
    {{ pokemon.name }}
  </div>
</template>

<style scoped></style>
