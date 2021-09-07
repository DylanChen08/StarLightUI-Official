<template>
  SwitchDemo
  <!--  下面是 Vue 2 写法-->
  <!--  <Switch :value="checkingStatusInFather" @input="checkingStatusInFather=$event"/>-->
  <!--  Vue 3 之后可以这样写-->
  <!--  <Switch :value="checkingStatus" @update:value="checkingStatus=$event"/> -->
  <!--Vue 3的 v-model可以将上述再简化如下-->
  <Switch :value="checkingStatus" v-model:value="checkingStatus"/>

</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {Switch},
  setup() {
    const checkingStatus = ref(false)
    return {checkingStatus}
  }
}
</script>

<style scoped>

</style>