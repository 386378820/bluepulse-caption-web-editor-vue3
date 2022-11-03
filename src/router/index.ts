import {createRouter, createWebHistory} from 'vue-router';
import index from '../view/index.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
]
const router = createRouter({
    // 打包后的app白屏问题 see: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
    history: createWebHistory(),
    routes: routes
})
export default router
