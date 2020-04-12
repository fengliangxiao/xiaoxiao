<template>
  <div class="home">
    <div class="desc">
      <h1>xiaoxiao</h1>
      <p class>你到你的二仙桥，我走我的成华大道</p>
      <el-button type="primary" round>Enter</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {}
}
</script>
Enter
<style scoped>
.home {
  background-image: url("../assets/image/background.jpg");
  background-size: 100% 100%;
  height: 100vh;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc {
  color: aliceblue;
  line-height: 80px;
}
.desc p {
  letter-spacing: 10px;
}
.desc a {
  line-height: 40px;
  background-color:#1E9FFF;
  font-size: 20px;
  height: 40px;
  width: 100px;
}
</style>
