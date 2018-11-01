// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NavBar from './components/NavBar'
import ImageSwiper from './components/ImageSwiper'
import ProjectShow from './components/ProjectShow'
import NewsDelivery from './components/NewsDelivery'
import Footer from './components/Footer'
import router from './router'
import svg from './assets/js/svg'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

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
  components: {App, NavBar, ImageSwiper, ProjectShow, NewsDelivery, Footer},
  template: `
    <div>
      <NavBar/>
      <ImageSwiper/>
      <ProjectShow/>
      <NewsDelivery/>
      <Footer/>
    </div>`

})
