<script setup>
import { RouterLink } from "vue-router";
import IconWelcome from "../components/icons/IconWelcome.vue";
</script>

<template>
  <div class="welcome">
    <div class="icon-welcome-container">
      <IconWelcome />
    </div>
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <div class="btn">
      <RouterLink to="/all">Get started</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.icon-welcome-container {
  margin-top: 6%;
}

h1,
p {
  text-align: center;
}

h1 {
  margin-top: 60px;
  font-weight: 700;
  font-size: 26px;
  line-height: 31.2px;
}

p {
  margin-top: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}

.btn {
  margin-top: 50px;
  padding: 11px 20px;
  background: var(--color-accent-background);
}

@media (min-width: 1024px) {
  .welcome {
    min-height: 100vh;
  }
}
</style>
