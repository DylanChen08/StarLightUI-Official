<template>
  ButtonDemo
  <Button>klklkl</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {Button},
  setup() {
    const x = () => {
      console.log('点击了');
    }
    return {x}
  }
}
</script>

<style scoped>

</style>