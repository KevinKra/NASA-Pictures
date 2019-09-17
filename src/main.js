import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueYouTubeEmbed);
new Vue({
  render: h => h(App)
}).$mount("#app");
