<template>
  <div class="cinema-container">
    <van-nav-bar>
      <template #left>
        <van-cell title="广州" icon="location-o" @click="goCity" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="#ee0a24" class="search" @click="goSearch" />
      </template>
    </van-nav-bar>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-card desc="普宁市普宁大道商业街北侧大南山路口西侧第一栋新达强">
      <template #title>
        <van-row class="title">
          <van-col span="20" class="cinema-name">超达美影城（普宁大道店）</van-col>
          <van-col span="4" class="cinema-price">23.9元起</van-col>
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
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.main-container {
  margin: 0;
}

.title .cinema-name {
  font-size: 14px;
  font-weight: bold;
}

.title .cinema-price {
  color: #ee0a24;
  font-weight: bold;
}

.price-text {
  color: #A9A9A9;
}
</style>