<template>
  <div class="topNav">
    <div class="logo" @click="toggleAsideVisible">
      <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";


export default {
  name: "TopNav",
  props:{
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  border-bottom: 1px solid #eaecef;
  background: #fff;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
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
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
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