<template>
<section>
  <TopNav/>
  <div class="content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</section>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  name: "Docs",
  components:{TopNav: TopNav}
}
</script>

<style scoped>

</style>