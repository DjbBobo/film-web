<template>
  <div class="pay-container">
    <van-nav-bar left-arrow title="支付订单" @click-left="goBack"></van-nav-bar>

    <van-cell center class="order-info">
      <template #icon>
        <van-icon name="shop-o" size="30px" />
      </template>
      <template #title>
        <van-row class="price">￥23.90</van-row>
        <van-row class="order-no">订单编号:23232323232323</van-row>
      </template>
    </van-cell>

    <van-cell center is-link>
      <template #title>
        <span class="custom-title">微信支付</span>
        <van-tag type="danger">推荐</van-tag>
      </template>
      <template #icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixinzhifu" />
        </svg>
      </template>
      <template #right-icon>
        <van-checkbox v-model="checked"></van-checkbox>
      </template>
    </van-cell>
    <van-cell center is-link>
      <template #title>
        <span class="custom-title">支付宝支付</span>
      </template>
      <template #icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao" />
        </svg>
      </template>
      <template #right-icon>
        <van-checkbox v-model="checked"></van-checkbox>
      </template>
    </van-cell>

    <van-button type="warning">
      <van-row>
        <van-col>确认支付</van-col>
        <van-col>￥23.90</van-col>
      </van-row>
    </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.van-cell .van-icon {
  margin-right: 10px;
}

.van-cell__title {
  margin-left: 10px;
}

.order-info {
  margin-bottom: 20px;
  padding: 20px;
}

.price {
  font-size: 1rem;
  font-weight: bold;
}

.order-no {
  font-size: 5px;
}

.pay-container {
  position: relative;
  height: 100%;
  background-color: #eee;
}

.van-button {
  position: absolute;
  bottom: 10px;
  width: 100%;
  border-radius: 10px;
}
</style>