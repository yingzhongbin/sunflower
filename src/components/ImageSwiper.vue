<template>
  <div>
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(item,index) in items" :key="index">
        <div class='swiper-slide' :style="[item.style,defaultImgStyle]">
        </div>
        <div class="mask"></div>
      </swiper-slide>
      <div class="swiper-button-prev orange" slot="button-prev"></div>
      <div class="swiper-button-next orange" slot="button-next"></div>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'ImageSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      defaultImgStyle: {
        'background-position': 'center center',
        'background-size': 'cover'
      },
      items: [
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afa924a.jpg)`
          }
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afb4faf.jpg)`
          }
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afbbcaa.jpg)`
          }
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afce8d9.jpg)`,
          }
        }
      ],
      swiperOption: {
        navigation: {// 使用前进后退按钮来控制Swiper切换
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {// 用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          disableOnInteraction: false
        }, // 可选选项，自动滑动
        loop: true, // 可循环
        preventClicks: false, // a链接跳转
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 1,
          clickable: true// 点击分页器的指示点分页器会控制Swiper切换
        }
      }
    }
  },
  // 定义这个sweiper对象
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false)
    $('.swiper-slide').on('mouseenter', function (e) {
      $('.swiper-slide').addClass('active')
    })
    $('.swiper-slide').on('mouseout', function (e) {
      $('.swiper-slide').removeClass('active')
    })
  }
}

</script>

<style scoped lang="scss">
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

.blue-slide {
  background: $grey;
}
.red-slide {
  background: $grey;
}
.orange-slide {
  background: $grey;
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
