<template>
  <div id="app">
    <div class="nav">
      <router-link to="/welcome">Welcome</router-link>
      <router-link to="/weather">Weather</router-link>
      <router-link class="github" to="#">
        <!-- <github /> -->
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Github from "vue-material-design-icons/Github.vue";

export default {
  name: "App",
  components: {
    // Github,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Raleway:wght@100&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: boder-box;
  font-family: "Poppins", sans-serif;
  font-size: 16px;

  --eggshell: #faf3dd;
  --laurel-green: #c8d5b9;
  --cambridge-blue: #8fc0a9;
  --green-sheen: #68b0ab;
  --amazon: #4a7c59;
}
.nav {
  padding: 1.5rem;
  background-color: var(--eggshell);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  & > a {
    color: var(--amazon);
    text-decoration: none;
  }

  & > .github {
    justify-self: flex-end;
  }
}
</style>
