import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"


const routes = [
    { path: "/", name: "Homepage", component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router;