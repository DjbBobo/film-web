<template>
  <div class="cinema-item-container">
    <van-card :desc="districtDetail">
      <template #title>
        <van-row class="title">
          <van-col span="20" class="cinema-name">{{cinemaName}}</van-col>
          <van-col span="4" class="cinema-price-text">
            <span class="cinema-price">23.9</span>
            <span class="cinema-text">元起</span>
          </van-col>
        </van-row>
      </template>
      <template #tags>
        <van-tag plain type="success">改签</van-tag>
        <van-tag plain type="warning">小吃</van-tag>
        <van-tag plain type="warning">折扣卡</van-tag>
        <van-tag plain type="success">杜比全景声厅</van-tag>
      </template>
      <template #price>
        <div>
          <van-tag color="#FF9901">惠</van-tag>
          <span class="price-text">老爷保号等11部部影片部影片特惠</span>
        </div>
        <div>
          <van-tag color="#FC7570">促</van-tag>
          <span class="price-text">影院特惠促销</span>
        </div>
        <div>
          <van-tag color="#A97ADF">卡</van-tag>
          <span class="price-text">开卡特惠，5.9元起开卡</span>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  props: {
    cinemaName: {
      type: String
    },
    districtDetail: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.title .cinema-name {
  font-size: 14px;
  font-weight: bold;
}

.title .cinema-price-text .cinema-price {
  color: #ee0a24;
  font-weight: bold;
}

.title .cinema-price-text .cinema-text {
  color: #A9A9A9;
  font-size: 4px;
}</style>