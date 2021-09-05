<template>
  <div class="topNav">
    <div class="logo" @click="toggleAsideVisible">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAsideVisible">33333</span>
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
  justify-content: center;
  align-items: center;

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
  > .toggleAside {
    //display: inline-block;
    width: 24px;
    height: 24px;
    background: aquamarine;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
    }
  }}
</style>