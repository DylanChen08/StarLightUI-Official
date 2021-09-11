<template>
  <section>
    <h1>示例1</h1>
    <Button v-for="item in buttonSet1" :theme="item.theme">{{ item.innerText }}</Button>
  </section>

  <section>
    <h1>示例2</h1>
    <section>
      <Button v-for="item in buttonSet2.sub1" :size="item.size" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
    <section>
      <Button v-for="item in buttonSet2.sub2" :size="item.size" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
    <section>
      <Button v-for="item in buttonSet2.sub3" :size="item.size" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
  </section>


  <section>
    <h1>示例3</h1>
    <section>
      <Button v-for="item in buttonSet3.sub1" :level="item.level" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
    <section>
      <Button v-for="item in buttonSet3.sub2" :level="item.level" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
    <section>
      <Button v-for="item in buttonSet3.sub3" :level="item.level" :theme="item.theme">{{ item.innerText }}</Button>
    </section>
  </section>

  <section>
    <h1>示例4</h1>
    <section>
      <Button v-for="item in buttonSet4.sub1" :level="item.level" :theme="item.theme" disabled>{{ item.innerText }}
      </Button>
    </section>
  </section>

  <section>
    <h1>示例5</h1>
    <section>
      <Button v-for="item in buttonSet5.sub1" :level="item.level" :theme="item.theme" loading>{{ item.innerText }}
      </Button>
      <Button>加载完毕</Button>
    </section>
  </section>
</template>
<script lang="ts">
import store from "../store";

import Button from "../lib/Button.vue";

export default {
  components: {Button},
  setup() {
  },
  data() {
    return {
      // 使用vuex全局管理
      buttonSet1: store.state.buttonSet1,
      buttonSet2: store.state.buttonSet2,
      buttonSet3: store.state.buttonSet3,
      buttonSet4: store.state.buttonSet4,
      buttonSet5: store.state.buttonSet5,
    }
  }
};
</script>