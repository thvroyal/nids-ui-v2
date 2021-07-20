import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import { logo } from "@/assets/customIcon/logo";

Vue.use(Chakra, {
  icons: {
    extend: {
      ...logo,
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(App)]),
}).$mount("#app");
