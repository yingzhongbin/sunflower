<template>

  <div class="bg-container">
    <h3>我们的伙伴</h3>
    <ul>
      <li>
        <img src="https://mat1.gtimg.com/gongyi/css/images/foot_logo.png" alt="">
      </li>
      <li>
        <img src="http://www.fupin.org.cn/images/index_logo.png" alt="">
      </li>
      <li>
        <img src="http://www.cmbc.com.cn/skin/cs/statics/images/images/logo.gif" alt="">
      </li>
      <li>
        <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=eabd73117dec54e755e1124cd851f035/9825bc315c6034a8955d46aecd13495409237666.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Friends'
}
</script>

<style scoped lang="scss">
  .bg-container{
    background-color: #fff;
    /*position: absolute;*/
    margin-top: 00px;
    align-items: center;
    min-height: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    > h3{
      /*border:1px solid red;*/
      margin-top: 70px;
      font-size: 32px;
      font-weight: 400;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
    }
    > ul{
      /*border:1px solid red;*/
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
      > li{
        img{
          height: 65px;
        }
      }
    }
  }
</style>
