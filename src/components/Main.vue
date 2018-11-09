<template>
  <div>
    <NavBar v-cloak/>
    <ProjectShow v-cloak/>
    <NewsDelivery v-cloak/>
    <Stores v-cloak/>
    <Footer v-cloak/>
  </div>
</template>

<script>
import NavBar from './NavBar'
import ProjectShow from './ProjectShow'
import NewsDelivery from './NewsDelivery'
import Stores from './Stores'
import Footer from './Footer'
export default {
  name: 'Main',
  components: {
    NavBar,
    ProjectShow,
    NewsDelivery,
    Footer,
    Stores
  },
  mounted () {
    this.$root.bus.$emit('loaded', null)
  }
}
</script>

<style scoped>
  [v-cloak] { display: none }
</style>
