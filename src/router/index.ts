import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import {createRouter, createWebHashHistory} from "vue-router";


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: "/doc",
            component: Doc,
            children: [{path: "ButtonDemo", component: ButtonDemo},
                {path: "dialogDemo", component: DialogDemo},
                {path: "switchDemo", component: SwitchDemo},
                {path: "tabsDemo", component: TabsDemo},],
        },
    ]
})