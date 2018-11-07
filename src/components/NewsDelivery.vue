<template>
  <div id="news">
    <div id="news-container">
      <div class="news-img">
      </div>
      <div class="news-lists">
        <div class="main-news">
          <div class="meta">2018 10.31 | 新闻速递 </div>
          <h3>武清区委统战部牵线搭桥，太阳语走进武清区残联</h3>
          <p>10月30日，武清区委统战部王术力副部长牵线搭桥，并亲自和太阳语发起人魏瑞红、理事张景懿一起走进武清区残联拜访...</p>
          <div class="more"><a href="https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649943033&idx=1&sn=41bb905defc3aa640532897a81a4215e&chksm=be4589e9893200ffb4b5384526376566846d8021d2d345f0a92ed181b4dac64b62a9b384a641&mpshare=1&scene=23&srcid=1104R6zvmQ1cxw1CoBAJusnf%23rd">阅读更多</a></div>
        </div>
        <div class="subtitle-news">
          <div class="subNews-content">
            <div class="subNews-title">他们说，我们准备好了 -- 记天狮学院瓷娃娃志愿者见面培训会</div>
            <div class="more"><a href="https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649943033&idx=1&sn=41bb905defc3aa640532897a81a4215e&chksm=be4589e9893200ffb4b5384526376566846d8021d2d345f0a92ed181b4dac64b62a9b384a641&mpshare=1&scene=23&srcid=1104R6zvmQ1cxw1CoBAJusnf%23rd">阅读更多</a></div>

          </div>
          <div class="subNews-content">
            <div class="subNews-title">我们来了@河北工业大学 -- 瓷娃娃进校园系列</div>
            <div class="more"><a href="https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649943033&idx=1&sn=41bb905defc3aa640532897a81a4215e&chksm=be4589e9893200ffb4b5384526376566846d8021d2d345f0a92ed181b4dac64b62a9b384a641&mpshare=1&scene=23&srcid=1104R6zvmQ1cxw1CoBAJusnf%23rd">阅读更多</a></div>

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
        width:480px;
        height: 530px;
        background: url("https://i.loli.net/2018/11/04/5bde9e8f08e73.jpg");
        background-position: center center;
        background-size: cover;
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
            &:hover{
              text-decoration: underline;
            }
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
            &:hover{
              text-decoration: underline;
            }
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
              margin-bottom: 10px;
              &:hover{
                text-decoration: underline;
              }
            }
            > .more{
              color: $yellow;
              font-size: .9375rem;
              font-weight: 600;
              letter-spacing: .12em;
              font-size: 17px;
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
</style>
