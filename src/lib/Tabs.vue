<template>
  <div class="starlight-tabs">
    <div class="starlight-tabs-nav" ref="container">
      <!--渲染tabs的title-->
      <div class="starlight-tabs-nav-item" v-for="(t,index) in titles"
           :ref="el => { if (t===selected) selectedItem = el }" @click="select(t)" :class="{selected: t=== selected}"
           :key="index">{{ t }}
      </div>
      <div class="starlight-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="starlight-tabs-content">
      <!--component is 用来判断用户传入的组件是不是Tab类型，而非div或者其他类型-->
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted
} from 'vue'

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    // ts 泛型,尖括号里面是告诉ref函数传的参数是什么类型。
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      /*
      * 通过JS计算出高亮条的宽度
      * 高亮条的高度 = 移动后div的左边缘的坐标 - 容器container的左边缘(原始左边界)
      * */
      watchEffect(() => {
        /*
        * ES6解构赋值
        * 等价于: const width = selectedItem.value.getBoundingClientRect().width
        * 其实getBoundingClientRect()还有很多属性如height,left,top 等等
        * 也可以写成 const {top,height,left,width} = selectedItem.value.getBoundingClientRect()
        * */
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'


        /*
        * 解构赋值的[重命名语法]
        * const left = [...].getBoundingClientRect().left => left1 = left
        * const left = [...].getBoundingClientRect().left => left2 = left
        * 简而言之就是 container.value.getBounding 和  selectedItem.value.getBounding 都有一个 left 属性, 赋值给变量left
        * 但是为了防止left重名,分别将left重命名为left1 和 left2
        * [注意]此时left还是undefined(Es6 对象解构赋值)
        * */
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

    /*
    * 因 context是Object对象,使用拓展语法的时候需要用{}括起来,而 Array数组则不用.
    * console.log({...context.slots})
    * 获取到slots里面的default属性，可用于检查组件类型是否为 Tab
    * */

    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    // 获取tabs的标题的集合，对其进行相应数据处理
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.starlight-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>