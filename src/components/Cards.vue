<template>
  <div id="card-container">
    <div class="card-detail" v-for="(item,index) in cardDetail" :key="index">
      <div class="card-detail-img" :style="[item.imgStyle,defaultImgStyle]">
      </div>
      <div class="card-detail-content">
        <div class="card-detail-price">{{item.price}}</div>
        <div class="card-detail-title">
          {{item.title}}
        </div>
      </div>
      <div class="more">
        <a :href="item.aHref">了解更多</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Cards',
  data: function () {
    return {
      defaultImgStyle: {
        'background-position': 'center center',
        'background-size': 'cover'
      },
      cardDetail: [
        {
          imgStyle: {
            'background-image': `url(https://i.loli.net/2018/11/02/5bdbc7a777d5e.jpg)`
          },
          price: '￥158.00',
          title: '【预售】米菲勇气兔，两色可选，发货期：2017年7月-2018年1月（英子手术后开始制作，按照订单顺序发货）',
          aHref: ''
        },
        {
          imgStyle: {
            'background-image': `url(https://si.geilicdn.com/bj-pc-1140044929-1492743752031-992945835_700_700.jpg.webp?w=750&h=750&cp=1)`
          },
          price: '￥18.00',
          title: '【瓷心巧手】瓷娃娃手工，永不凋谢的玫瑰',
          aHref: 'https://weidian.com/item.html?itemID=2083927330&wfr=c_qfriendh5&ifr=itemdetail&spider_token=9490&spider=seller.zx-shopdetail.tabbar.47&state=H5WXshareOld&distributorId=1145966003&share_relation=4ec13dceec910548_1145966003_1'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  $red: #c50d66;
  $yellow: #eec60a;
  $orange:#f07810;
  $grey:#f5f4e8;
  #card-container{
    position: relative;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    background-color: $red;
    > .card-detail{
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      min-height:700px;
      border-radius: 20px;
      background-color: #fff;
      width:440px;
      position: relative;
      top:-90px;
      overflow: hidden;
      &:hover{
        > .card-detail-img{
          position: absolute;
          transform: scale(1.2);
          height:440*1.2px;
          width:440*1.2px;
        }
        > .card-detail-content{
          position: absolute;
          top: 400px;
          width:93%;
          min-height:400px;
        }
      }
      > .card-detail-img{
        position: absolute;
        top:0px;
        left: 0px;
        height:440px;
        width:100%;
        transition: all 200ms ease-in-out;
      }
      > .card-detail-content{
        width:93%;
        min-height:400px;
        background-color: #fff;
        /*border:2px blue solid;*/
        transition: all 200ms ease-in-out;
        position: absolute;
        top: 440px;
        padding: 10px 20px;
        > .card-detail-price{
          color: #FF3938;
          font-size: 27px;
        }
        > .card-detail-title{
        }
      }
      > .more{
        position: absolute;
        top: 600px;
        left: 20px;
        border-color: $orange;
        border-style: solid;
        border-width: 2px 2px 5px;
        padding: 1.2em 3em;
        color: $yellow;
        width:64px;
        > a{
          color: $orange;
        }
      }

    }
  }
</style>
