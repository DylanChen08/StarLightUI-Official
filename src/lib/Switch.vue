<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">

export default {
  name: "Switch",
  props: {value: Boolean},
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value) // Vue 3 新的写法 , Vue 2 的话 this.$emit()
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}

button.checked {
  background: #1890ff;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
  outline: none;
}
</style>



