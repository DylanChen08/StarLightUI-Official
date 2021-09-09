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

  <!--以下为对照的代码，用于上面数据绑定参考-->
  <!--  <section>Button 示例</section>-->
  <!--  <h1>示例1</h1>-->
  <!--  <section>-->
  <!--    <Button>你好</Button>-->
  <!--    <Button theme="button">你好</Button>-->
  <!--    <Button theme="link">你好</Button>-->
  <!--    <Button theme="text">你好</Button>-->
  <!--  </section>-->
  <!--  <h1>示例2</h1>-->
  <!--  <section>-->
  <!--    <section>-->
  <!--      <Button size="big">大大大</Button>-->
  <!--      <Button>普普通</Button>-->
  <!--      <Button size="small">小小小</Button>-->
  <!--    </section>-->
  <!--    <section>-->
  <!--      <Button theme="link" size="big">大大大</Button>-->
  <!--      <Button theme="link">普普通</Button>-->
  <!--      <Button size="small" theme="link">小小小</Button>-->
  <!--    </section>-->
  <!--    <section>-->
  <!--      <Button size="big" theme="text">大大大</Button>-->
  <!--      <Button theme="text">普普通</Button>-->
  <!--      <Button size="small" theme="text">小小小</Button>-->
  <!--    </section>-->
  <!--  </section>-->
  <!--  <h1>示例3</h1>-->
  <!--  <section>-->
  <!--    <section>-->
  <!--      <Button level="main">主要按钮</Button>-->
  <!--      <Button>普通按钮</Button>-->
  <!--      <Button level="danger">危险按钮</Button>-->
  <!--    </section>-->
  <!--    <section>-->
  <!--      <Button theme="link" level="main">主要链接按钮</Button>-->
  <!--      <Button theme="link">普通链接按钮</Button>-->
  <!--      <Button theme="link" level="danger">危险链接按钮</Button>-->
  <!--    </section>-->
  <!--    <section>-->
  <!--      <Button theme="text" level="main">主要文字按钮</Button>-->
  <!--      <Button theme="text">普通文字按钮</Button>-->
  <!--      <Button theme="text" level="danger">危险文字按钮</Button>-->
  <!--    </section>-->
  <!--  </section>-->
  <!--  <h1>示例4</h1>-->
  <!--  <section>-->
  <!--    <Button disabled>禁用按钮</Button>-->
  <!--    <Button theme="link" disabled>禁用链接按钮</Button>-->
  <!--    <Button theme="text" disabled>禁用按钮</Button>-->
  <!--  </section>-->
  <!--  <h1>示例5</h1>-->
  <!--  <section>-->
  <!--    <Button loading>加载中</Button>-->
  <!--    <Button>加载完毕</Button>-->
  <!--  </section>-->
</template>
<script lang="ts">


import Button from "../lib/Button.vue";

export default {
  components: {Button},
  setup() {
  },
  data() {
    return {
      buttonSet1: [{innerText: '你好'}, {innerText: '你好', theme: 'button'}, {innerText: '你好', theme: 'link'}, {
        innerText: '你好',
        theme: 'text'
      },],
      buttonSet2: {
        sub1: [{size: 'big', innerText: '大大大'}, {size: '', innerText: '普通'}, {size: 'small', innerText: '小小小'},],
        sub2: [{size: 'big', theme: 'link', innerText: '大大大'}, {theme: 'link', innerText: '普通通'}, {
          theme: 'link',
          size: 'small',
          innerText: '小小小'
        }],
        sub3: [{size: 'big', theme: 'text', innerText: '大大大'}, {theme: 'text', innerText: '普通通'}, {
          theme: 'text',
          size: 'small',
          innerText: '小小小'
        }],
      },
      buttonSet3: {
        sub1: [{level: 'main', innerText: '主要按钮'}, {innerText: '普通按钮'}, {level: 'danger', innerText: '危险按钮'},],
        sub2: [{theme: 'link', level: 'main', innerText: '主要链接按钮'}, {
          theme: 'link',
          innerText: '普通链接按钮'
        }, {theme: 'link', level: 'danger', innerText: '危险按钮'},],
        sub3: [{theme: 'text', level: 'main', innerText: '主要文字按钮'}, {
          theme: 'text',
          innerText: '普通文字按钮'
        }, {theme: 'text', level: 'danger', innerText: '危险文字按钮'},],
      },
      buttonSet4: {
        sub1: [{innerText: '禁用按钮'}, {theme: 'link', innerText: '禁用链接按钮'}, {theme: 'text', innerText: '禁用按钮'},],
      },
      buttonSet5: {
        sub1: [{innerText: '加载中'},]
      }
    }
  }
};
</script>