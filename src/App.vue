<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script>
// import Footer from './components/Footer'
// import Header from './components/Header'
export default {
  data: function () {
    return {
      menu: []
    }
  },
  components: {
    // Footer,
    // Header
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
