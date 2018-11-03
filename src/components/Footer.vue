<template>
  <div id="footer">
    <Cards/>
    <Detail/>
  </div>
</template>

<script>
import Cards from './Cards'
import Detail from './Detail'

export default {
  name: 'Footer',
  components: {
    Cards,
    Detail
  }
}
</script>

<style scoped lang="scss">
  #footer{
    margin: 0 auto;
    margin-top: 210px;
    width: 1200px;
    min-height: 1000px;
    position: relative;

  }
</style>
