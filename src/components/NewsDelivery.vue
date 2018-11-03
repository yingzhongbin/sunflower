<template>
  <div id="news">
    <div id="news-container">
      <div class="news-img">
      </div>
      <div class="news-lists">
        <div class="main-news">
          <div class="meta">2018 10.11 | 病房服务 </div>
          <h3>我是标题</h3>
          <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
          <div class="more">阅读更多</div>
        </div>
        <div class="subtitle-news">
          <div class="subNews-content">
            <div class="subNews-title">我是标题</div>
            <div class="subNews-author">我是作者</div>
          </div>
          <div class="subNews-content">
            <div class="subNews-title">我是标题</div>
            <div class="subNews-author">我是作者</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDelivery'
}
</script>

<style scoped lang="scss">
  $red: #c50d66;
  $yellow: #eec60a;
  $orange:#f07810;
  $grey:#f5f4e8;
  $wineRed:#dd7777;
  $newsTitle:#F54EA2;
  #news{
    width:100%;
    min-height: 700px;
    /*background-color: #0F2D71;*/
    > #news-container{
      color: $grey;
      display: flex;
      border-top: 10px $grey solid;
      margin: 0 auto;
      width: 1100px;
      background-color: $red;
      padding-top: 108px;
      min-height: 640px;
      > .news-img{
        margin-left: 20px;
        width:410px;
        height: 530px;
        background: url("../assets/img/5.jpg") center center;
        border:10px solid white;
        img{}
      }
      > .news-lists{
        background-color: $wineRed;
        margin-right: 20px;
        margin-top: 27px;
        margin-bottom: 83px;
        > .main-news{
          padding: 36px 0;
          margin-right: 70px;
          margin-left: 40px;
          border-bottom: 1px solid $grey;
          > .meta{
            padding-top: 1em;
            font-size: .9375rem;
            font-weight: 600;
            margin-bottom: 1.4em;
          }
          > h3{
            /*color: #fff;*/
            cursor: pointer;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: .35em;
            color:white;
          }
          > p{
            margin-bottom: 1.2em;
            /*color: #fff;*/
            line-height: 1.8;
          }
          > .more{
            color: $yellow;
            font-size: .9375rem;
            font-weight: 600;
            letter-spacing: .12em;
            font-size: 17px;
          }
        }
        > .subtitle-news{
          display: flex;
          flex-direction: row;
          margin-right: 70px;
          margin-left: 40px;
          > .subNews-content{
            width:50%;
            padding: 36px 0;
            /*color: #fff;*/
            &:last-child{
              border-left: 1px solid $grey;
              padding-left: 35px;
            }
            > .subNews-title{
              font-size: 1.25rem;
              font-weight: 400;
              color: white;
            }
            > .subNews-author{
              color: $grey;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
</style>
