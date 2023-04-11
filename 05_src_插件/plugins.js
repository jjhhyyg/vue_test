export default {
    // 参数是Vue的构造函数
    install(Vue) {
        // 全局过滤器
        Vue.filter("mySLice", function (value) {
            return value.slice(0, 4)
        });
        // 全局自定义指令
        Vue.directive("fbind", {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            },
        });
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                };
            },
        });
        // 给Vue原型上添加一个方法(vm和vc都能用)
        Vue.prototype.hello = ()=>{alert('你好啊')}
    },
};
