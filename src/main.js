import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./utils/globalSetRem";
import EnvConfig from "./utils/env.config";
import ClientSystem from "./utils/client.info";
console.log(navigator.userAgent.toLowerCase());

console.info(ClientSystem);

Vue.config.productionTip = false;
Vue.prototype.$config = {
  ...EnvConfig,
  ...ClientSystem
};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
