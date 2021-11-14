import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import api from "./api/index";
import Echarts from "./plugins/echarts"
import "../node_modules/echarts/map/js/china"

Vue.use(Echarts)
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
