import {createApp} from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Docs from './views/Doc.vue'
// import './index.css'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/docs', component: Docs},
    ]
})

createApp(App).use(router).mount('#app')
