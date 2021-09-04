<template>
  <section>
    <TopNav/>
    <div class="banner">
      <h1>Starlight UI</h1>
      <h2>轻量实用的UI框架</h2>
      <p class="actions">
        <a href="#">github</a>
        <a href="#">开始</a>
      </p>
    </div>
  </section>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components:{TopNav}
}
</script>

<style lang="scss" scoped>

</style>