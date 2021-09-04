import {createApp} from 'vue'
import App from './App.vue'
import test from './components/test.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: test}
    ]
})

createApp(App).use(router).mount('#app')
