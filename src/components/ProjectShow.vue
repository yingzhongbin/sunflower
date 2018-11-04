<template>
  <div id="ProjectShow">
    <header>
      <h1>项目动态展示</h1>
    </header>
    <main>
      <div id="main-left">
        <div class="ml-show" v-for="(item,index) in leftItems" :key="index">
          <a :href="item.aSrc">
            <div class="imgContainer" :style="[defaultImgStyle,item.style]"></div>
            <div class="mlr-container">
              <div class="meta">{{item.meta}}</div>
              <h3>{{item.h3}}</h3>
              <p>{{item.p}}</p>
              <a class="more">更 多</a>
            </div>
          </a>
        </div>
      </div>
      <div id="main-right">
        <div class="mr-show" v-for="(item,index) in rightItems" :key="index">
          <a :href="item.aSrc">
            <div class="meta">{{item.meta}}</div>
            <h3>{{item.h3}}</h3>
            <a class="more">阅读更多</a>
          </a>
        </div>

      </div>
    </main>
    <div class="more">
      <a href="">
        更多动态&nbsp;
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangxia"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectShow',
  data: function () {
    return {
      defaultImgStyle: {
        'background-position': 'center center',
        'background-size': 'cover'
      },
      leftItems: [
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/04/5bde625ec08b6.jpg)`
          },
          meta: '2018 9月29日 | 梦想学院 ',
          h3: '又是一年结业时，我们的征途是星辰画社',
          p: '对于梦想学院的小伙伴们来说，9月，是又一次素描课的结业时候...',
          aSrc: 'https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649942963&idx=1&sn=7b889709c454d05e4e52ae33cdad3038&chksm=be4589a3893200b587dcc2209a95bb5e19f05cabcdc6de88745db751d845678d4c9c5dcd52cd&mpshare=1&scene=23&srcid=11049ecOBZVNesW5mSQOesuG%23rd'
        },
        {
          style: {
            'background-image': `url(https://i.loli.net/2018/11/01/5bdad6afa924a.jpg)`
          },
          meta: '2018 9月29日 | 梦想学院 ',
          h3: '我们有话说——一对一线上授课那些事',
          p: '一眨眼，梦想学院线下一对一的课程已经进行了许久，来听听授课的志愿者老师们有什么话想说...',
          aSrc: 'https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649942963&idx=2&sn=782edd79fb947666924918e685899b26&chksm=be4589a3893200b5fc6c6d9bd9983c93d8d1f5328d79ccd71a0002d34ddf52e41dbd9e840cdd&mpshare=1&scene=23&srcid=11043cRgDdjfnAcpi77V9q54%23rd'
        }
      ],
      rightItems: [
        {
          meta: '2018 9月22日 | 梦想学院 ',
          h3: '从这里开始，随音乐一起，感悟生命的力量',
          aSrc: 'https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649942949&idx=1&sn=538277e8bf3fe20ab1bb9a52c9512ae8&chksm=be4589b5893200a3fdca80755281f36246f5a2780a6aac74d072e7eab40bb12e17326a1d6deb&mpshare=1&scene=23&srcid=1104RyLQaMucsoNMVQF62JWd%23rd'
        },
        {
          meta: '2018 10月8日 | 梦想学院 ',
          h3: '阳光心态与认识自我（上）',
          aSrc: 'https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649942968&idx=1&sn=e74212b10ea6b1f7bf8c17c0ff49e55a&chksm=be4589a8893200be4931b6251f9824a25dde27211af13f35638aa8cfbabe84c1b2c43837de0f&mpshare=1&scene=23&srcid=1104HIvMkzuN9uxf1YJrcK31%23rd'
        },
        {
          meta: '2018 11月3日 | 梦想学院 ',
          h3: '招生|太阳语梦想学院梦成真成长营“认识不一样的我”工作坊招生启动啦！',
          aSrc: 'https://mp.weixin.qq.com/s?__biz=MjM5MDUwNDgzMQ==&mid=2649943046&idx=1&sn=ab9d4d44dcf8ce80675cdd53d84766b2&chksm=be458e16893207001597d19e3361e0a0ae2a65daf1af20046f0f6deaaa7e0957528b474a2f68&mpshare=1&scene=23&srcid=1104gA7wNTzX1fKe2hVe6nL1%23rd'
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
  #ProjectShow{
    margin: 0 auto;
    width:1100px;
    box-sizing: border-box;
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
      border-bottom:1px solid $grey;
      padding-bottom: 8px;
      #main-left{
        width:770px;
        /*background-color: red;*/
        > div.ml-show{
          /*background-color: red;*/
          > a{
            color: black;
            display: flex;
            justify-content: space-between;
            padding: 54px 54px 54px 0;
            border-top:1px solid $grey;
            border-right:1px solid $grey;
            > div.imgContainer{
              width:285px;
              height:285px;
              flex-shrink: 0;
              animation: .8s all;
              &:hover{
                opacity: .8;
              }
            }
            > div.mlr-container{
              flex-shrink: 1;
              margin-left: 40px;
              > div.meta{
                font-size: 16px;
                color: rgba(0, 0, 0, 0.6);
                font-weight: 600;
                margin-bottom: 1em;
              }
              > h3{
                font-size: 1.6875rem;
                color: $red;
                margin-bottom: .25em;
              }
              > p{
                margin-bottom: 1.5em;
              }
              > a.more{
                font-size: .9375rem;
                font-weight: 600;
                letter-spacing: .12em;
                color: $orange;
                border-color: $orange;
                border-style: solid;
                border-width: 2px 2px 5px;
                display: inline-block;
                padding: .6em 1.5em;
                text-decoration: none;
                font-size: 17px;
              }
            }
          }
        }
      }
      #main-right{
        width:330px;
        /*background-color: blue;*/
        > .mr-show{
          border-top:1px solid $grey;
          padding: 36px 16px 36px 36px;
          > a{
            > div.meta{
              font-size: .9375rem;
              color: rgba(0, 0, 0, 0.6);
              font-weight: 600;
              margin-bottom: 1em;
            }
            > h3{
              font-size: 1.375rem;
              font-weight: 400;
              line-height: 1.3;
              margin-bottom: 1em;
              color:$red;
            }
            > a.more{
              color: $orange;
              font-size: .9375rem;
              font-weight: 600;
              letter-spacing: .12em;
              text-decoration: none;
            }
          }
        }
      }
    }
    .more{
      display: flex;
      justify-content: flex-end;
      padding: 27px 18px;
      transition: all .3s;
      font-size: .9375rem;
      font-weight: 600;
      letter-spacing: .12em;
      > a{
        color: $red;
        text-decoration: none;
        position: relative;
        &:hover svg{
          right: -20px;
        }
        svg{
          position: absolute;
          width: .84em;
          top: 3px;
          right: -14px;
          transition: right .3s;
        }
      }
    }
  }
</style>
