<template>
  <div class="city-container">
    <search />

    <van-cell class="current-city">
      <template #title>
        <span>当前城市：</span>
        <span>广州</span>
      </template>
    </van-cell>

    <van-cell class="gps-city">
      <template #title>
        <van-icon name="location-o"></van-icon>
        <span class="city-content">广州</span>
        <span class="gps-content">GPS定位</span>
      </template>
    </van-cell>

    <van-index-bar class="addr-list">
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import Search from "./component/search";
export default {
  components: {
    Search
  },
  methods: {}
};
</script>

<style lang="stylus">
.gps-city .van-cell__title {
  display: flex;
  align-items: center;
}

.gps-city .city-content {
  margin-left: 10px;
}

.gps-city .gps-content {
  color: #969799;
  margin-left: 10px;
  font-size: 10px;
}
</style>