<template>
    <div id="stores">
      <h2>爱心售卖</h2>
      <div id="stores-container">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-taobao1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weidian"></use>
        </svg>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Stores'
}
</script>

<style scoped lang="scss">
  #stores{
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    > h2{
      margin-top: 70px;
      font-size: 32px;
      font-weight: 400;
    }
    > #stores-container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      > svg{
        width: 200px;
        height: 80px;
      }
      > svg:last-child{
        height: 70px;
      }
    }
  }
</style>
