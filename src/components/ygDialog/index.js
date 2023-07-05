import ygDialog from './ygDialog.vue'

export default {
    // 核心: Vue.js 的插件应该暴露一个 install 方法。
    // 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
    install(Vue, options) {
        let components=[ygDialog]
        if(options){
            components=[
                ...components,
                ...options,
            ]
        }
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    }
}
