<template>
  <div>Dialog 示例</div>
  <h1>示例1section</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <!--具名插槽-->
    <!--https://vue3js.cn/docs/zh/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD-->
    <!--[使用插槽]-父组件 v-slot:content-->
    <!--[注意]插槽需要在子组件内使用-->
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref, h} from 'vue'
import {openDialog} from '../lib/openDialog.ts'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    /*
    * f1()和f2()分别对应子组件的 ok() 和 cancel()
    * f1()函数都需要用户传入
    * f1() return false表示用户【没有填写】
    *
    * */
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    }
  }
}
</script>