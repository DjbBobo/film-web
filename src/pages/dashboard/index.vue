<template>
  <div class="dashboard-container">
    <header-bar />
    <header-swipe />
    <van-cell title="正在热映" is-link value="全部59部" title-style="font-weight:bold;color:#222222" />
    <film-swipe type="hot" />
    <van-cell title="即将上映" is-link value="全部59部" title-style="font-weight:bold;color:#222222" />
    <film-swipe type="coming" />
  </div>
</template>

<script>
import headerBar from "./components/headBar";
import headerSwipe from "./components/headerSwipe";
import filmSwipe from "./components/filmSwipe";

export default {
  components: {
    headerBar,
    headerSwipe,
    filmSwipe
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.van-cell {
  padding-left: 0;
  padding-right: 0;
  padding-top: 5px;
}

.dashboard-container {
  margin: 0 12px 0 12px;
}
</style>