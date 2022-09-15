import bLoading from "./src/index.vue";


const defautConfig = {
    type: 0,
    text: '',
    mask: 'rgba(44, 42, 57, 0.3)',
    textColor: '#fff',
    iconColor: '#1890ff',
    iconSize: 24
}
let BLoading = {};

// 准备好 install 方法 给 Vue.use() 使用
BLoading.install = (Vue) => {
    const template = Vue.extend(bLoading);

    let instance = new template().$mount(document.createElement("div"));


    // 初始化配置信息
    BLoading["init"] = (config = {}) => {
        instance.config = Object.assign(defautConfig, config);
    }
    // 显示加载中
    BLoading["show"] = () => {
        document.body.appendChild(instance.$el);
    };
    // 隐藏加载中
    BLoading["hide"] = () => {
        try {
            document.body.removeChild(instance.$el);
        } catch {
            console.log("b-loading is not found");
        }
    };

    // 将包装好的 toast 挂到Vue的原型上，作为 Vue 实例上的方法
    Vue.prototype.$BLoading = BLoading;


    Vue.directive('bloading', {
        bind: (el, binding) => {
            let dirInstance = new template().$mount(document.createElement("div"));
            dirInstance.config = instance.config
            if (binding.value) {
                el.appendChild(dirInstance.$el);
            } else {
                try {
                    el.removeChild(getLoadingEl(el));
                } catch {
                    console.warn("b-loading is not found");
                }
            }
        },
        update: (el, binding) => {
            let dirInstance = new template().$mount(document.createElement("div"));
            dirInstance.config = instance.config
            if (binding.value) {
                if (!isLoadingEl(el)) {
                    return
                } else {
                    el.appendChild(dirInstance.$el);
                }
            } else {
                try {
                    el.removeChild(getLoadingEl(el));
                } catch {
                    console.warn("b-loading is not found");
                }
            }
        },
        unbind: () => {
            // debugger
        }
    })
};
// 判断vue是全局变量时，自动安装，这个如果你是vue脚手架import引入的，那就卵用没有
if (typeof window !== "undefined" && window.Vue) {
    BLoading.install(window.Vue);
}


// 判断元素中是否有加载
function isLoadingEl(el) {
    let flag = true
    if (el.children) {
        for (let i of el.children) {
            if (i.getAttribute('id') === 'bbLoadingMask') {
                flag = false
            }
        }
    }
    return flag
}
// 获取元素中的loading元素
function getLoadingEl(el) {
    let resEl = null
    if (el.children) {
        for (let i of el.children) {
            if (i.getAttribute('id') === 'bbLoadingMask') {
                resEl = i
            }
        }
    }
    return resEl
}

export default BLoading;
