import { createApp } from 'vue';
import router from '@/router/index';
import { installComponent } from '@/components/index';
import { installDirective } from '@/directives/index';
import './assets/css/common.less';
import App from './App.vue';

const app = createApp(App);
// 注册组件
installComponent(app);

// 注册指令
installDirective(app);
app.use(router);
app.mount('#app');
