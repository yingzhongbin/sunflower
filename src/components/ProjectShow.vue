<template>
  <div id="ProjectShow">
    <header>
      <h1>项目动态展示</h1>
    </header>
    <main>
      <div id="main-left">
        <div class="ml-show">
          <img src="../assets/img/test.png" alt="">
          <div class="mlr-container">
            <div class="meta">2018 10.11 | 病房服务 </div>
            <h3>我是标题</h3>
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <a href="" class="more">更 多</a>
          </div>
        </div>
        <div class="ml-show">
          <img src="../assets/img/test.png" alt="">
          <div class="mlr-container">
            <div class="meta">2018 10.11 | 病房服务 </div>
            <h3>我是标题</h3>
            <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
            <a href="" class="more">更 多</a>
          </div>
        </div>
      </div>
      <div id="main-right">
        <div class="mr-show">
          <div class="meta">2018 10.11 | 病房服务 </div>
          <h3>我是标题我是标题我是标题我是标题我是标题</h3>
          <a href="" class="more">阅读更多</a>
        </div>
        <div class="mr-show">
          <div class="meta">2018 10.11 | 病房服务 </div>
          <h3>我是标题我是标题我是标题我是标题我是标题</h3>
          <a href="" class="more">阅读更多</a>
        </div>
        <div class="mr-show">
          <div class="meta">2018 10.11 | 病房服务 </div>
          <h3>我是标题我是标题我是标题我是标题我是标题</h3>
          <a href="" class="more">阅读更多</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ProjectShow'
}
</script>

<style scoped lang="scss">
  #ProjectShow{
    box-sizing: border-box;
    width:1100px;
    > header{
      > h1{
        font-size: 30px;
        font-weight: 300;
        /*border-bottom:1px solid #DEDDE2;*/
        margin-top: 66px;
        padding-bottom: 15px;
      }
    }
    > main{
      display: flex;
      border-bottom:1px solid #DEDDE2;
      padding-bottom: 8px;
      #main-left{
        width:770px;
        /*background-color: red;*/
        > div.ml-show{
          /*background-color: red;*/
          display: flex;
          justify-content: space-between;
          padding: 54px 54px 54px 0;
          border-top:1px solid #DEDDE2;
          border-right:1px solid #DEDDE2;

          > img{
            width:285px;
          }
          > div.mlr-container{
            margin-left: 40px;
            > div.meta{
              font-size: .9375rem;
              color: #7da5e2;
              font-weight: 600;
              margin-bottom: 1em;
            }
            > h3{
              font-size: 1.6875rem;
              color: #17468f;
              margin-bottom: .25em;
            }
            > p{
              margin-bottom: 1.5em;
            }
            > a{
              font-size: .9375rem;
              font-weight: 600;
              letter-spacing: .12em;
              color: #39bcd8;
              border-color: #39bcd8;
              border-style: solid;
              border-width: 2px 2px 5px;
              /*display: inline-block;*/
              padding: 1.2em 3em;
              text-decoration: none;
            }
          }
        }
      }
      #main-right{
        width:330px;
        /*background-color: blue;*/
        > .mr-show{
          border-top:1px solid #DEDDE2;
          padding: 36px 0 36px 36px;
          > div.meta{
            font-size: .9375rem;
            color: #7da5e2;
            font-weight: 600;
            margin-bottom: 1em;
          }
          > h3{
            font-size: 1.375rem;
            font-weight: 400;
            line-height: 1.3;
            margin-bottom: 1em;
          }
          > a{
            color: #39bcd8;
            font-size: .9375rem;
            font-weight: 600;
            letter-spacing: .12em;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
