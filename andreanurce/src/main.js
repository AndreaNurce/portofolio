import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import AOS from "aos"
import 'aos/dist/aos.css'


Vue.config.productionTip = false

Vue.use(Vuex)
new Vue({
  created() {
    AOS.init();
  },
  store,
  render: h => h(App),
}).$mount('#app')
