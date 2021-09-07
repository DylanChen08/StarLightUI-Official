<template>
  SwitchDemo
  <Switch :value="checkingStatusInFather" @input="checkingStatusInFather=$event"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {Switch},
  setup() {
    const checkingStatusInFather = ref(false)
    return {checkingStatusInFather}
  }
}
</script>

<style scoped>

</style>