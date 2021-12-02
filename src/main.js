import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import css
import './assets/css/reset.css'
import './assets/css/base.css'

document.title = 'Bài test';

new Vue({
  render: h => h(App)
}).$mount('#app')
