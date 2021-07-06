import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100);

    this.itemImgListener = () => {
      newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
    // console.log("woshiu");
  }
};
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: true
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    }
  }
};
