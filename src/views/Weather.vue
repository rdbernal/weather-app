<template>
  <div class="weather">
    <search />
  </div>
</template>

<script>
// Components
import Search from "@/components/SearchComponent/index.vue";

export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.weather {
  box-sizing: border-box;
  padding: 3rem 2rem;
  width: 100%;
  height: calc(100vh - 78.4px);
  background-color: var(--laurel-green);
}
</style>
