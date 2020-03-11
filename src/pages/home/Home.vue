<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeLeft></HomeLeft>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeLeft from './components/HomeLeft'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeLeft
  },
  data() { 
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="" scoped>

</style>