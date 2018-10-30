<template>
  <div id="nav-bar-container">
    <div id="nav-bar" class="clearfix">
      <div id="nav-bar-left">
        <img src="../assets/logo.png" alt="">
        <ul>
          <li class="nav-li">
            新闻中心
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-triangle"></use>
              </svg>
              <ul>
                <li>机构动态</li>
                <li>媒体报道</li>
                <li>病友故事</li>
                <li>视频专区</li>
              </ul>
            </div>
          </li>
          <li class="nav-li">
            项目工作
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-triangle"></use>
              </svg>
              <ul>
                <li>关怀服务</li>
                <li>瓷爱助力</li>
                <li>梦想学院</li>
                <li>&nbsp;99 公益</li>
              </ul>
            </div>
          </li>
          <li class="nav-li">
            疾病简介
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-triangle"></use>
              </svg>
              <!--<svg class="icon" aria-hidden="true">-->
              <!--<use xlink:href="#icon-triangle-copy"></use>-->
              <!--</svg>-->
              <ul>
                <li>分型介绍</li>
                <li>临床诊断</li>
                <li>治疗方法</li>
              </ul>
            </div>
          </li>
          <li class="nav-li">
            关于我们
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-triangle"></use>
              </svg>
              <ul>
                <li>机构简介</li>
                <li>信息公开</li>
                <li>合作伙伴</li>
                <li>联系我们</li>
              </ul>
            </div>
          </li>
          <li class="nav-li">
            支持我们
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-triangle"></use>
              </svg>
              <ul>
                <li>我要捐款</li>
                <li>志愿报名</li>
                <li>物资需求</li>
                <li>招募启事</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      <div id="nav-bar-right">
        <span>800-800-800</span>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
  .clearfix::after{
    content:'';
    display: block;
    clear:both;
  }
  #nav-bar-container{
    overflow-y:visible;
    > #nav-bar{
      width:85%;
      margin: 0 auto;
      justify-content: space-between;
      color:#546e7a;
      font-size: 14px;
      > #nav-bar-left{
        float: left;
        display: flex;
        height: 79px;
        > img{
          height: 75px;
        }
        > ul{
          margin-top: 45px;
          list-style-type:none;
          display: flex;
          align-items: center;
          > li.nav-li{
            list-style-type:none;
            padding: 0 1.2rem;
            position: relative;
            &:hover {
              color:#FF9200;
              > div{
                display: flex;
                position: absolute;
                top: 35px;
                left: 9px;
                border-radius: 3px;
                box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.16);
                >svg{
                  position: absolute;
                  top:-10px;
                }
                > ul{
                  list-style: none;
                  padding-inline-start: 0px;
                  > li{
                    color:black;
                    word-break: keep-all;
                    font-size: 13px;
                    margin-bottom: 6px;
                  }
                  > li:last-child{
                    margin-bottom: 0px;

                  }
                }
              }
            }
            > div{
              position: absolute;
              padding: 16px;
              display: none;
              > ul{
                list-style: none;
                > li{
                }
              }
            }
            /*> div::before{
              content: "";
              font-family: fontawesome;
              top: -26px;
              font-size: 32px;
              position: absolute;
              left: 50px;
              color: #fff;
            }*/
          }
        }
      }
      > #nav-bar-right{
        float: right;
        margin-top: 39px;
        display: flex;
        align-items: center;
        > span:nth-child(2){
          margin: 0 1em;
          > &:hover {
            color:#FF9200;
          }
        }
        > button{
          margin-left: 26px;
          font-size: 0.75rem;
          padding: 0.475rem 1.1rem;
          border-radius: 100px;
          background-color: #FF9200;
          color: white;
          transition: all .5s;
          animation-name:hvr-wobble-horizontal;
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          box-shadow: 0 0 1px transparent;
          border: none;
        }
      }
    }
  }
  @keyframes hvr-wobble-horizontal{5.56%{-webkit-transform:translateX(8px);transform:translateX(8px)}11.11%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}16.67%{-webkit-transform:translateX(4px);transform:translateX(4px)}22.22%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}27.75%{-webkit-transform:translateX(1px);transform:translateX(1px)}33.33%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}
</style>
