<template>
  <div id="nav-bar-container" v-scroll="handleScroll">
    <div id="nav-bar" class="clearfix">
      <div id="nav-bar-left">
        <img src="../assets/logo.png" alt="">
        <ul>
          <li class="nav-li">
            新闻中心
            <div class="subMenu-container">
              <div class="subMenu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-triangle"></use>
                </svg>
                <ul>
                  <li><a href="">机构动态</a></li>
                  <li><a href="">媒体报道</a></li>
                  <li><a href="">病友故事</a></li>
                  <li><a href="">视频专区</a></li>
                </ul>
              </div>

            </div>
          </li>
          <li class="nav-li">
            项目工作
            <div class="subMenu-container">
              <div class="subMenu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-triangle"></use>
                </svg>
                <ul>
                  <li><a href="">关怀服务</a></li>
                  <li><a href="">瓷爱助力</a></li>
                  <li><a href="">梦想学院</a></li>
                  <li><a href="">&nbsp;99 公益</a></li>
                </ul>
              </div>

            </div>
          </li>
          <li class="nav-li">
            疾病简介
            <div class="subMenu-container">
              <div class="subMenu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-triangle"></use>
                </svg>
                <!--<svg class="icon" aria-hidden="true">-->
                <!--<use xlink:href="#icon-triangle-copy"></use>-->
                <!--</svg>-->
                <ul>
                  <li><a href="">分型介绍</a></li>
                  <li><a href="">临床诊断</a></li>
                  <li><a href="">治疗方法</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-li">
            关于我们
            <div class="subMenu-container">
              <div class="subMenu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-triangle"></use>
                </svg>
                <ul>
                  <li><a href="">机构简介</a></li>
                  <li><a href="">信息公开</a></li>
                  <li><a href="">合作伙伴</a></li>
                  <li><a href="">联系我们</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-li">
            支持我们
            <div class="subMenu-container">
              <div class="subMenu">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-triangle"></use>
                </svg>
                <ul>
                  <li><a href="">我要捐款</a></li>
                  <li><a href="">志愿报名</a></li>
                  <li><a href="">物资需求</a></li>
                  <li><a href="">招募启事</a></li>
                </ul>
              </div>
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
import $ from 'jquery'
export default {
  name: 'NavBar',
  mounted () {
    $('.nav-li').on('mouseover', function (e) {
      let children = e.currentTarget.childNodes
      for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName === 'DIV') {
          for (let j = 0; j < children[i].childNodes.length; j++) {
            if (children[i].childNodes[j].nodeName === 'DIV') {
              $(children[i].childNodes[j]).addClass('active')
            }
          }
        }
      }
    })
    $('.nav-li').on('mouseout', function (e) {
      let children = e.currentTarget.childNodes
      for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName === 'DIV') {
          for (let j = 0; j < children[i].childNodes.length; j++) {
            if (children[i].childNodes[j].nodeName === 'DIV') {
              $(children[i].childNodes[j]).removeClass('active')
            }
          }
        }
      }
    })
    if (window.scrollY > 0) {
      $('#nav-bar-container').addClass('active')
    }
    $('.subMenu li').on('mouseover', function (e) {
      let li = e.currentTarget
      $(li).addClass('active')
    })
    $('.subMenu li').on('mouseout', function (e) {
      let li = e.currentTarget
      $(li).removeClass('active')
    })
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 0) {
        $('#nav-bar-container').addClass('active')
      } else {
        $('#nav-bar-container').removeClass('active')
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
  .clearfix::after{
    content:'';
    display: block;
    clear:both;
  }
  #nav-bar-container{
    /*min-width: 950px;*/
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    transition: all .4s ease 0s;
    background-color: #fff;
    position: fixed;
    top:50px;
    left:5%;
    z-index: 111;
    overflow-y:visible;
    margin: 0 auto;
    height:80px;
    width: 90%;
    min-width:900px;
    > #nav-bar{
      transition: all .4s ease 0s;
      margin: 0 auto;
      justify-content: space-between;
      color:#546e7a;
      font-size: 16px;
      > #nav-bar-left{
        float: left;
        display: flex;
        height: 85px;
        margin-left: 30px;
        > img{
          margin-top: 9px;
          height: 65px;
        }
        > ul{
          margin-top: 35px;
          list-style-type:none;
          display: flex;
          align-items: center;
          > li.nav-li{
            list-style-type:none;
            padding: 0 1.2rem;
            position: relative;
            /*border:1px solid red;*/
            color:$orange;
            > div.subMenu-container{
              padding-top: 6px;
              font-size: 16px;
              /*border:1px solid green;*/
              > div.subMenu{
                background-color: #fff;
                padding: 16px;
                /*display: none;*/
                /*border:1px solid red;*/
                position: absolute;
                top: 22px;
                /*top:0;*/
                left: 9px;
                border-radius: 3px;
                box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.16);
                transition: .8s all;
                visibility:hidden;
                opacity: 0;
                >svg{
                  position: absolute;
                  top:-10px;
                }
                > ul{
                  list-style: none;
                  padding-inline-start: 0px;
                  > li{
                    word-break: keep-all;
                    font-size: 15px;
                    margin-bottom: 6px;
                    position: relative;
                    a{
                      color:black;
                    }
                    &:after{
                      content:'';
                      /*animation: .3s lineSlideBack;*/
                      background-color: $orange;
                      height: 1px;
                      position: absolute;
                      left: 0;
                      bottom: -3px;
                    }
                  }
                  > li.active{
                    &:after{
                      content:'';
                      animation: .8s lineSlide;
                    }
                  }
                  > li:last-child{
                    margin-bottom: 0px;

                  }
                }
              }

            }
          }
          > li.nav-li{
            > div.subMenu-container{
              > div.subMenu.active{
                top: 27px;
                display: flex;
                visibility: visible;
                opacity: 1;

              }
            }
          }
        }
      }
      > #nav-bar-right{
        margin-right: 30px;

        float: right;
        margin-top: 39px;
        display: flex;
        align-items: center;
        > span:nth-child(2){
          margin: 0 1em;
          > &:hover {
            color:$orange;
          }
        }
        > button{
          outline: none;
          margin-left: 26px;
          font-size: 0.9rem;
          padding: 0.475rem 1.1rem;
          border-radius: 100px;
          background-color: $orange;
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
  #nav-bar-container.active{
    left:0;
    width:100%;
    top:0px;
    height:80px;
    display: flex;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
    /*padding: 0 30px;*/
    > #nav-bar{
      width:calc(100% - 60px);
    }
  }
  @keyframes lineSlide{
    0%{
      width:0;
    }
    100%{
      width:100%;
    }
  }
  @keyframes lineSlideBack{
    0%{
      wisth:100%;
    }
    100%{
      width:0;
    }
  }
  @keyframes hvr-wobble-horizontal{5.56%{-webkit-transform:translateX(8px);transform:translateX(8px)}11.11%{-webkit-transform:translateX(-6px);transform:translateX(-6px)}16.67%{-webkit-transform:translateX(4px);transform:translateX(4px)}22.22%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}27.75%{-webkit-transform:translateX(1px);transform:translateX(1px)}33.33%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}
</style>
