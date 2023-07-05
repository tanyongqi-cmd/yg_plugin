// 组件全局注册
import Vue from 'vue'
import ygdialog from './ygDialog';
import demo from "@/components/ygDialog/demo";
Vue.use(ygdialog)
const Components=[
    demo
]
// 注册全局组件
Components.map((com) =>{
    Vue.component(com.name, com)
})
export default Vue
