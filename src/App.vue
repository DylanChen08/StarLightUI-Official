<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {provide, ref} from "vue";

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup(){
    const width = document.documentElement.clientWidth;
    console.log(`clientWidth is ${width}`)
    const asideVisible = ref(width <= 500 ? false : true);
    provide('asideVisible',asideVisible)
  }
}
</script>
