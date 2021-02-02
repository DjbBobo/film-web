<template>
  <div class="film-container">
    <header-common search="film" />
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="热映">
        <film-item type="hot" />
      </van-tab>
      <van-tab title="待映">
        <film-item type="wait" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import filmItem from "../../components/filmItem";
import headerCommon from "../../components/headerCommon";

export default {
  components: {
    filmItem,
    headerCommon
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__left {
  padding: 0px;
}
</style>