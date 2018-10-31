<template>
  <div id="main-wrapper">
    <div id="main">
      <div id="show">
        <div id="project-show">project-show</div>
        <div id="news-show">news-show</div>
      </div>
      <div id="store-sidebar">store-sidebar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style scoped lang="scss">
  #main-wrapper{
    padding-top: 15px;
    background-color: #F8FAFC;
    width:100%;
    #main{
      box-sizing: border-box;
      margin:0px auto;
      width: 1100px;
      height: 400px;
      display: flex;
      > #show{
        display: flex;
        width:680px;
        height: 400px;
        > #project-show{
          box-sizing: border-box;
          height: 400px;
          width:332px;
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(7,17,27,.05);
          border-radius: 8px;
          padding: 24px 32px 32px;
        }
        > #news-show{
          margin-left: 15px;

          padding: 24px 32px 32px;
          box-shadow: 0 4px 8px 0 rgba(7,17,27,.05);
          border-radius: 8px;
          height: 400px;
          flex-grow: 1;
          background-color: white;
        }
      }
      > #store-sidebar{
        box-sizing: border-box;
        padding: 24px 32px 32px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.05);
        border-radius: 8px;
        margin-left: 15px;
        width:405px;
        height: 400px;
        background-color: white;
      }
    }

  }
</style>
