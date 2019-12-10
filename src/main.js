import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "@/utils/prototype.fun.js";
// import '@/utils/filter.util.js'
// import requestBack from '@/utils/native.bridge'

import "./utils/globalSetRem";
import EnvConfig from "./utils/env.config";
import ClientSystem from "./utils/client.info";

Vue.config.productionTip = false;
Vue.prototype.$config = {
  ...EnvConfig,
  ...ClientSystem
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
