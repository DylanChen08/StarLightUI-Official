import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
    const { title, content, ok, cancel } = options;
    // 防止原来的div消失掉 , 创建新的 div
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount(div); // 取消挂载在div上
        div.remove();
    };
    const app = createApp({
        // Vue 3 render function ()
        render() {
            // 使用 h 好处是可以传递参数
            return h(
                Dialog,
                {
                    visible: true,
                    // Vue 3 渲染函数-监听事件回调写法
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    ok, cancel
                },
                // slot 插槽需要在第三个参数传递。
                {
                    title,
                    content,
                }
            );
        },
    });
    app.mount(div);
};