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
  },
  mounted () {
    console.log('footer')
    this.$root.bus.$emit('footer', true)
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
