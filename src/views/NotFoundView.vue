<script setup>
import StyledButton from "../components/StyledButton.vue";

const goBack = () => {
  window.location.href = "/";
};
</script>

<template>
  <div class="notfound">
    <!-- 
      If the app had more routes, then I would create a special view like this
      In this case I created three routes: /, /all and /favorites. The user should not enter the routes manually.
      That's why this component only redirects to the Poke Welcome.
    -->
    <div class="container">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <div class="btn">
        <StyledButton :text="'Go back'" @action="goBack" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.notfound {
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;

  .container {
    display: grid;
    place-items: center;
    gap: 24px;

    h1 {
      text-align: center;
    }
  }
}
</style>
