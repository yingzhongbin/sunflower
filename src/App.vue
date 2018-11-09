<template>
  <div id="app" class="hidden">
    <!--<router-view/>-->
    <Loading v-show="!loaded"/>
    <ImageSwiper/>
    <Main v-show="loaded" v-cloak/>
  </div>
</template>

<script>
import $ from 'jquery'
import Loading from './components/Loading'
import ImageSwiper from './components/ImageSwiper'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Loading,
    Main,
    ImageSwiper
  },
  data () {
    return {
      loaded: false
    }
  },
  created () {
    this.$root.bus.$on('loaded', (value) => {
      console.log(222)
      setTimeout(() => {
        this.loaded = true
        window.scrollTo(0, 0)
        $('#app').removeClass('hidden')
      }, 1000)
    })
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style>
  #app.hidden{
    height:100vh;
    overflow: hidden;
  }
  *{
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .swiper-pagination-bullet-active {
    background-color: #f07810 !important;
  }
  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  [v-cloak] { display: none }
</style>
