<template>
  <div class="dashboard-container">
    <header-swipe />
    <van-cell title="正在热映" is-link value="全部59部" title-style="font-weight:bold;color:#222222" />
    <film-swipe type="hot" />
    <van-cell title="即将上映" is-link value="全部59部" title-style="font-weight:bold;color:#222222" />
    <film-swipe type="coming" />
  </div>
</template>

<script>
import headerSwipe from "./components/headerSwipe";
import filmSwipe from "./components/filmSwipe";

export default {
  components: {
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
</style>