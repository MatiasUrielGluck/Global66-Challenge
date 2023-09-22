<script setup>
import StyledButton from "../components/StyledButton.vue";
import IconWelcome from "../components/icons/IconWelcome.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const getStarted = () => {
  router.push("/all");
};
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
    <div class="btn-container">
      <StyledButton
        :text="'Get started'"
        :url="'/all'"
        @action="getStarted"
        :width="'131px'"
        :height="'44px'"
      />
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 6.66%;
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

.btn-container {
  margin-top: 50px;
}

@media (min-width: 1024px) {
  .welcome {
    padding: 0 25%;
    min-height: 100vh;
  }
}
</style>
