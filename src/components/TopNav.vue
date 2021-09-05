<template>
  <div class="topNav">
    <div class="logo" @click="toggleAsideVisible">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";


export default {
  name: "TopNav",
  setup() {
    const asideVisible = inject < Ref < Boolean >> ('asideVisible', false) // set
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value
      console.log(`aside可见状态:${asideVisible.value}`)
      console.log(asideVisible)
    }
    return {toggleAsideVisible}
  }
}
</script>

<style lang="scss" scoped>
.topNav {
  border: 1px solid red;
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>