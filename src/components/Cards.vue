<template>
  <div id="card-container">
    <!--<div class="card">-->
      <!--<div class="title-img" :style="card.imgStyle"></div>-->
      <!--<div class="card-symbol" :style="card.symbolStyle"></div>-->
      <!--<div class="card-content">-->
        <!--<div class="card-content-title">微店</div>-->
        <!--<div class="card-content-text">微店太阳帆欢迎您！-->
          <!--<div class="card-content-text-img" :style="card.contentStyle"></div>-->
        <!--</div>-->
        <!--<div class="more">了解更多</div>-->
      <!--</div>-->
    <!--</div>-->

    <div class="card-detail">
      <div class="card-detail-img" :style="cardDetail.imgStyle">
      </div>
      <div class="card-detail-content">
        <div class="card-detail-price">￥158.00</div>
        <div class="card-detail-title">
          【预售】米菲勇气兔，两色可选，发货期：2017年7月-2018年1月（英子手术后开始制作，按照订单顺序发货）
        </div>
        <div class="more">了解更多</div>
      </div>
    </div>
    <div class="card-detail">
      <div class="card-detail-img" :style="cardDetail.imgStyle">
      </div>
      <div class="card-detail-content">
        <div class="card-detail-price">￥158.00</div>
        <div class="card-detail-title">
          【预售】米菲勇气兔，两色可选，发货期：2017年7月-2018年1月（英子手术后开始制作，按照订单顺序发货）
        </div>
        <div class="more">了解更多</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      card: {
        imgStyle: {
          'background-image': `url(https://i.loli.net/2018/11/01/5bdafbdd4f617.jpeg)`,
          'background-position': 'center center',
          'background-size': 'cover'
        },
        symbolStyle: {
          'background-image': `url(https://i.loli.net/2018/11/01/5bdafbdcefc2e.jpg)`,
          'background-position': 'center center',
          'background-size': 'cover'
        },
        contentStyle: {
          'background-image': `url(https://i.loli.net/2018/11/01/5bdafbdc791af.png)`,
          'background-position': 'center center',
          'background-size': 'cover'
        }
      },
      cardDetail: {
        imgStyle: {
          'background-image': `url(https://i.loli.net/2018/11/02/5bdbc7a777d5e.jpg)`,
          'background-position': 'center center',
          'background-size': 'cover'
        }
      }
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
    > .card{
      border-radius: 20px;
      position: relative;
      top:-90px;
      width:440px;
      overflow: hidden;
      /*border: 1px solid black;*/
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      > .title-img{
        width: 100%;
        height:250px;
        /*border: 1px solid red;*/
      }
      > .card-symbol{
        position: absolute;
        top: 220px;
        left: 55px;
        width: 32px;
        height: 32px;
        border-radius: 40px;
        /*border: 1px solid red;*/
        padding: 15px 14px 14px;
      }
      > .card-content{
        padding: 37px 54px 0px;
        min-height:367px;
        display: flex;
        flex-direction: column;
        > .card-content-title{
          font-size: 1.75rem;
          color: #242445;
          font-weight: 300;
          margin-bottom: 20px;
        }
        > .card-content-text{
          line-height: 1.6;
          flex-grow: 1;
          > .card-content-text-img{
            width:120px;
            height: 120px;
          }
        }
        > .more{
          margin-bottom: 52px;
          border-color: $yellow;
          border-style: solid;
          border-width: 2px 2px 5px;
          display: inline;
          padding: 1.2em 3em;
          color: $yellow;
          width:64px;
        }
      }
    }
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
        > .more{
          margin-top: 12px;

          border-color: $yellow;
          border-style: solid;
          border-width: 2px 2px 5px;
          /*display: inline;*/
          padding: 1.2em 3em;
          color: $yellow;
          width:64px;
        }
      }

    }
  }
</style>
