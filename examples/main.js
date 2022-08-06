import Vue from "vue";
import App from "./App.vue";
import BLoading from "../packages/b-loading";
Vue.config.productionTip = false;
Vue.use(BLoading);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
