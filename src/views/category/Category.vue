<template>
  <div class="main">
    <h3 class="text1">Author:Oliver-xuan</h3>
    <h3 class="text">Blog：www.oliverxuan.xyz</h3>
    <h3 class="text">VX:yzx690144569</h3>
    <h3 class="text">Git-Hub:https://github.com/Oliverxuan</h3>
    <h5 class="text">本项目仅用于学习，无商业用途，作者享有代码最终解释权</h5>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  created() {
    // this.scroll = new BScroll(this.$refs.aaaa, {});
  },
  mounted() {}
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: rgb(190, 75, 75);
  overflow: hidden;
}
.main {
  padding: 10px;
  padding-top: 50%;
  height: 100vh;
  background-color: rgb(203, 224, 153);
}
.text1 {
  padding-bottom: 20px;
  color: rgb(59, 62, 65);
  font-size: 20px;
}
.text {
  padding-top: 15px;
  color: rgb(59, 62, 65);
  font-size: 15px;
}
</style>
