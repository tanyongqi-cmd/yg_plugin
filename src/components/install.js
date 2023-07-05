// 组件全局注册
import Vue from 'vue'
import demo from "@/components/yg_plugin/ygDialog/demo";
import yg_plugin from "@/components/yg_plugin"
Vue.use(yg_plugin)
const Components=[
    demo
]
// 注册全局组件
Components.map((com) =>{
    Vue.component(com.name, com)
})
export default Vue
