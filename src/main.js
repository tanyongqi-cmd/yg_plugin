import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)
import "@/components/install";
Vue.config.productionTip = false
new Vue({router, render: h => h(App)}).$mount('#app')
