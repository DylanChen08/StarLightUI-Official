<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="scss" scoped>
.topNav {
  border: 1px solid red;
  background: pink;
  display: flex;
  padding: 16px;

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