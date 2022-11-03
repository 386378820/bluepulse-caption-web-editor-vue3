import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//加载element-plus
import 'element-plus/dist/index.css'
import './element-components/element-variables.scss';
import {
    ElMessage,
    ElSelect,
    ElOption,
    ElSlider,
    ElSwitch,
    ElCheckbox,
    ElTooltip
} from 'element-plus'
const app = createApp(App);
app.config.globalProperties.$message = ElMessage;
//
app.use(store);
app.use(ElMessage);
app.use(ElCheckbox);
app.use(ElTooltip);
app.use(ElSwitch);
app.use(ElSlider);
app.use(ElOption);
app.use(ElSelect);
app.use(router);
app.mount('#app');
export default app
