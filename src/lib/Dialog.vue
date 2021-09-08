<template>
  <template v-if="visible">
    <Teleport to="body">
      <!--      遮罩层,点击遮罩可以关闭dialog-->
      <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <!--具名插槽-->
            <!--https://vue3js.cn/docs/zh/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD-->
            <!--字组件 v-slot:content-->
            <slot name="title"/>
            <span @click="close" class="gulu-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    /*
    * 考虑到某些用户没有填写东西，但是不小心点了ok会导致意外关闭dialog
    * 所以需要对用户进行【内容不能为空】的提醒
    * 因为 setup()里面的 context.emit() / $.emit() 没有返回值(undefined)
    * 所以要用户在初始化的时候,在【子组件】传入两个函数 ok() cancel()
    *
    * */
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = () => {
      // 如果存在 ok () 函数(用户传入) 而且 ok()函数执行之后函数返回值不为 false,才执行close
      // ts 最新语法
      if (props.ok?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      props.cancel?.()
      close()
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel
    }
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

  }
}
</style>