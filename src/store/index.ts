import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            buttonSet1: [{innerText: '你好'}, {innerText: '你好', theme: 'button'}, {innerText: '你好', theme: 'link'}, {
                innerText: '你好',
                theme: 'text'
            },],
            buttonSet2: {
                sub1: [{size: 'big', innerText: '大大大'}, {size: '', innerText: '普通'}, {
                    size: 'small',
                    innerText: '小小小'
                },],
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
    },
    mutations: {}
})
export default store

