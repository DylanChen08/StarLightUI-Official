<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {provide, ref} from "vue";
import {router} from "./router";

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup(){
    const width = document.documentElement.clientWidth;
    console.log(`clientWidth is ${width}`)
    const asideVisible = ref(width <= 500 ? false : true);//判断设备宽度,自动代入布尔值
    console.log(`asideVisible is [${asideVisible.value}]`)
    provide('asideVisible',asideVisible)
    router.afterEach((info)=>{
      console.log("路由切换了");
      console.log(info);
      if (width <= 500) {
        asideVisible.value = false;
      }
    })
  }
}
</script>
