<template>
  <h1>页面建设中....</h1>
</template>

<script>
import BScroll from "better-scroll";

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
</style>
