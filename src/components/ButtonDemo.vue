<template>
  ButtonDemo
  <Button>
    <slot></slot>
  </Button>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  name: "ButtonDemo",
  components:{Button}
}
</script>

<style scoped>

</style>