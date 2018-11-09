<template>
  <div style="height: 700px">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item,index) in items" :key="index">
        <div class='swiper-slide'
             :style="[item.style,defaultImgStyle]"
             :swiper-animate-effect="items.animateEffect"
             :swiper-animate-duration="item.animateDuration">
        </div>
        <div class="mask"></div>
      </swiper-slide>
      <div class="swiper-button-prev orange" slot="button-prev"></div>
      <div class="swiper-button-next orange" slot="button-next"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(item,index) in items" :key="index">
        <div class='swiper-slide'
             :style="[item.style,defaultImgStyle]"
             :swiper-animate-effect="items.animateEffect"
             :swiper-animate-duration="item.animateDuration">
        </div>
        <div class="mask"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      defaultImgStyle: {
        'background-position': 'center center',
        'background-size': 'cover'
      },
      items: [
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afa924a.jpg)`
          },
          animateEffect: 'bounceInLeft',
          animateDuration: '0.5s'
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afb4faf.jpg)`
          },
          animateEffect: 'bounceInLeft',
          animateDuration: '0.5s'
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afbbcaa.jpg)`
          },
          animateEffect: 'bounceInLeft',
          animateDuration: '0.5s'
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afce8d9.jpg)`
          },
          animateEffect: 'bounceInLeft',
          animateDuration: '0.5s'
        }
      ],
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        autoplay: {// 用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          disableOnInteraction: false
        }, // 可选选项，自动滑动
        preventClicks: false,
        loopedSlides: 5, // looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    console.log('imageswiper')
    this.$root.bus.$emit('imageswiper', true)
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
    $('.swiper-slide').on('mouseenter', function (e) {
      $('.swiper-slide').addClass('active')
    })
    $('.swiper-slide').on('mouseout', function (e) {
      $('.swiper-slide').removeClass('active')
    })
  }
}
</script>

<style lang="scss" scoped>
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiperSlide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiperSlide-active {
    opacity: 1;
  }
  $red: #c50d66;
  $yellow: #eec60a;
  $orange:#f07810;
  $grey:#f5f4e8;
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next.orange{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23f07810'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev.orange{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23f07810'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-container{
    width:100%;
    height:500px;
    > .swiper-wrapper{
      width: 100%;
      > .swiper-slide{
        width: 100%;
        img{
          width: 100%;
          height:700px;
        }
      }
    }
  }
  .swiper-slide {
    color: #fff;
    font-size: 36px;
    text-align: center;
  }
  .swiper-slide .mask{
    width:100%;
    height:100%;
    background-color: black;
    position: absolute;
    top: 0;
    opacity: .2;
    transition: .5s all;
  }
  .swiper-slide.active .mask{
    opacity: 0;
  }
</style>
