<script setup>
import { ref, watch } from "vue";
import IconSearch from "../components/icons/IconSearch.vue";

const emit = defineEmits(["change"]);
const searchQuery = ref("");

watch(searchQuery, () => {
  emit("change", searchQuery.value);
});
</script>

<template>
  <div class="container">
    <form>
      <input type="text" v-model="searchQuery" placeholder="Search" id="search-input" />
      <IconSearch class="search-icon" />
    </form>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 6.66%;
  background: var(--color-body-background);
}

@media (min-width: 768px) {
  .container {
    padding: 35px 25%;
  }
}

form {
  position: relative;
  width: 100%;
}

input {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px #0000000a;
  height: 50px;
  width: 100%;
  padding: 0 43px;
}

input:focus {
  outline: none;
}

::placeholder {
  color: var(--color-text-searchbar-placeholder);
}

.search-icon {
  position: absolute;
  top: 16px;
  left: 15px;
}
</style>
