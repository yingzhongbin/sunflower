<template>
  <div id="main-wrapper">
    <ProjectShow/>
  </div>
</template>

<script>
import ProjectShow from './ProjectShow'
export default {
  name: 'Main',
  components: {
    ProjectShow
  }
}
</script>

<style scoped lang="scss">
  #main-wrapper{
    margin: 0 auto;
    /*background-color: red;*/
    width:1100px;
  }
</style>
