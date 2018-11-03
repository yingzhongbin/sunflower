<template>
  <div class="datail-container">
    <Friends/>
    <div id="detail">
      <div class="detail-left">
        <ul>
          <li><a href="">病友故事</a></li>
          <li><a href="">关怀服务</a></li>
          <li><a href="">瓷爱助力</a></li>
          <li><a href="">梦想学院</a></li>
        </ul>
        <ul>
          <li><a href="">机构简介</a></li>
          <li><a href="">信息公开</a></li>
          <li><a href="">联系我们</a></li>
          <li><a href="">我要捐款</a></li>
        </ul>
        <ul>
          <li><a href="">志愿报名</a></li>
          <li><a href="">物资需求</a></li>
          <li><a href="">招募启事</a></li>
        </ul>
      </div>
      <div class="detail-right">
        <ul>
          <li>天津市武清区雍阳西道100号&nbsp;&nbsp;</li>
          <li>武清区人民医院9楼&nbsp;&nbsp;</li>
          <li>800-800-800（电话）</li>
          <li>800-800-800（传真）</li>
        </ul>
      </div>
    </div>
    <Right/>
  </div>
</template>

<script>
import Friends from './Friends'
import Right from './Right'
export default {
  name: 'Detail',
  components: {
    Friends,
    Right
  }
}
</script>

<style scoped lang="scss">
  $red: #c50d66;
  $yellow: #eec60a;
  $orange:#f07810;
  $grey:#f5f4e8;
  .datail-container{
    background-color: #fff;
    > #detail{
      border-top: 1px solid $grey;
      padding-top: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      > .detail-left{
        display: flex;
        /*border: 1px solid red;*/
        > ul{
          list-style: none;
          padding-right: 75px;
          > li{
            list-style: none;
            margin-bottom: .5em;
            font-size: 16px;
            > a{
              color: rgba(0,0,0,.8);
              text-decoration: none;
              transition: all .3s;
              &:hover{
                color: rgba(0,0,0,1);
              }
            }
          }
        }
      }
      > .detail-right{
        /*border: 1px solid red;*/
        > ul{
          padding-right: 16px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          /*justify-content: flex-end;*/
          align-items: flex-end;
          list-style: none;
          > li{
            color: rgba(0,0,0,.8);
            font-size: 16px;

          }
        }
      }
    }
  }
</style>
