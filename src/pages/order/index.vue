<template>
  <div class="order-container">
    <van-nav-bar left-arrow title="确认订单" @click-left="goBack"></van-nav-bar>
    <van-card
      num="2"
      price="2.00"
      thumb="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
    >
      <template #title>
        <span class="title">拆弹专家2</span>
      </template>
      <template #desc>
        <van-row>今天 2月5日 21:20 粤语2D</van-row>
        <van-row>大地影院（揭阳金城店）</van-row>
        <van-row>
          <van-col>1号极光厅</van-col>&nbsp;
          <van-col offset="1">9排7座</van-col>
        </van-row>
      </template>
    </van-card>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$router.push({ path: "/pay" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  font-size: 15px;
  font-weight: bold;
}
</style>