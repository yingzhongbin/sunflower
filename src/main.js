// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import svg from './assets/js/svg'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import './assets/scss/color.scss'
import './assets/css/default.scss'
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(svg)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
new Vue({
  el: '#app',
  router,
  components: {App},
  template: `
    <App/>
  `,
  data: {
    bus: new Vue()
  }
})
