import bLoading from "./src/index.vue";

let BLoading = {};

// 准备好 install 方法 给 Vue.use() 使用
BLoading.install = (Vue) => {
  const template = Vue.extend(bLoading);

  let instance = new template().$mount(document.createElement("div"));
  BLoading["show"] = (config = {}) => {
    instance.config = config;
    document.body.appendChild(instance.$el);
  };
  BLoading["hide"] = () => {
    try {
      document.body.removeChild(instance.$el);
    } catch {
      console.log("b-loading is not found");
    }
  };

  // 将包装好的 toast 挂到Vue的原型上，作为 Vue 实例上的方法
  Vue.prototype.$BLoading = BLoading;
};
// 判断vue是全局变量时，自动安装，这个如果你是vue脚手架import引入的，那就卵用没有
if (typeof window !== "undefined" && window.Vue) {
  BLoading.install(window.Vue);
}
export default BLoading;
