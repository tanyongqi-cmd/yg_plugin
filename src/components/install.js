// 组件全局注册
import Vue from 'vue'
import demo from "@/components/yg_plugin/ygDialog/demo";
import ygDrawer_demo from "@/components/yg_plugin/ygDrawer/ygDrawer_demo";
import yg_plugin from "@/components/yg_plugin"
Vue.use(yg_plugin)
const Components=[
    demo,
    ygDrawer_demo
]
// 注册全局组件
Components.map((com) =>{
    Vue.component(com.name, com)
})
export default Vue
