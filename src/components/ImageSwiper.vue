<template>
  <div>
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(item,index) in items" :key="index">
        <div :class="item.class" :style="item.style">
          <!--<img :src="item.src" alt="">-->
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'ImageSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      items: [
        {
          src: 'https://i.loli.net/2018/11/01/5bdad6afa924a.jpg',
          class: `swiper-slide blue-slide`,
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afa924a.jpg)`,
            'background-position': 'center center',
            'background-size': 'cover'
          }
        },
        {
          src: 'https://i.loli.net/2018/11/01/5bdad6afb4faf.jpg',
          class: `swiper-slide red-slide`,
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afb4faf.jpg)`,
            'background-position': 'center center',
            'background-size': 'cover'
          }
        },
        {
          src: 'https://i.loli.net/2018/11/01/5bdad6afbbcaa.jpg',
          class: `swiper-slide orange-slide`,
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afbbcaa.jpg)`,
            'background-position': 'center center',
            'background-size': 'cover'
          }
        },
        {
          src: 'https://i.loli.net/2018/11/01/5bdad6afce8d9.jpg',
          class: `swiper-slide blue-slide`,
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afce8d9.jpg)`,
            'background-position': 'center center',
            'background-size': 'cover'
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
  }
}

</script>

<style scoped lang="scss">
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
  background: #4390EE;
}
.red-slide {
  background: #CA4040;
}
.orange-slide {
  background: #FF8604;
}
.swiper-slide {
  /*line-height: 300px;*/
  color: #fff;
  font-size: 36px;
  text-align: center;
}
</style>
