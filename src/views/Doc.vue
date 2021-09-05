<template>
  <section>
    <TopNav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol v-for="item in docContent" :key="item.index">
          <li>
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {inject, Ref} from "vue";

export default {
  name: "Docs",
  components: {TopNav: TopNav},
  data() {
    return {
      docContent: [
        {name: 'switch组件', url: '/doc/switch'},
        {name: 'Button组件', url: '/doc/button'},
        {name: 'Dialog组件', url: '/doc/dialog'},
        {name: 'Tabs组件', url: '/doc/tabs'},]
    }
  },
  setup() {
    const asideVisible = inject<Ref<Boolean>>('asideVisible', false) // set
    return {asideVisible}
  }
}
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {

    > li {
      padding: 4px 0;
    }

  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>