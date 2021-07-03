<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 15px 0 30px;
  border-bottom: 10px solid rgba(252, 234, 204, 0.548);
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
