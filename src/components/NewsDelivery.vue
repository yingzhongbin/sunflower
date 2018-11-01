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
  #news{
    width:100%;
    min-height: 700px;
    /*background-color: #0F2D71;*/
    > #news-container{
      display: flex;
      border-top: 10px #D9E0ED solid;
      margin: 0 auto;
      width: 1100px;
      background-color: #0F2D71;
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
        background-color: rgb(23, 70, 143);
        margin-right: 20px;
        margin-top: 27px;
        > .main-news{
          padding: 36px 0;
          margin-right: 70px;
          margin-left: 40px;
          border-bottom: 1px solid #3B5BA1;
          > .meta{
            padding-top: 1em;
            font-size: .9375rem;
            color: #7da5e2;
            font-weight: 600;
            margin-bottom: 1.4em;
          }
          > h3{
            color: #fff;
            cursor: pointer;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: .35em;
          }
          > p{
            margin-bottom: 1.2em;
            color: #fff;
            line-height: 1.8;
          }
          > .more{
            color: #39bcd8;
            font-size: .9375rem;
            font-weight: 600;
            letter-spacing: .12em;

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
            color: #fff;
            &:last-child{
              border-left: 1px solid #3B5BA1;
              padding-left: 35px;
            }
            > .subNews-title{
              font-size: 1.25rem;
              font-weight: 400;
            }
            > .subNews-author{
              color: #7da5e2;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
</style>
