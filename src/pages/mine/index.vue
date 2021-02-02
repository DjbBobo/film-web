<template>
  <div class="mine-container">
    <van-nav-bar :border="false">
      <template #left>
        <van-image round width="2rem" height="2rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <span class="name">靓仔波</span>
      </template>
      <template #right>
        <van-icon name="bell" size="20" color="#fff" />
        <van-icon name="setting" size="20" color="#fff" />
      </template>
    </van-nav-bar>
    <div class="card">
      <van-row class="mine-order-title">我的订单</van-row>
      <van-grid :border="false">
        <van-grid-item text="电影票">
          <template #icon>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianying" />
            </svg>
          </template>
        </van-grid-item>
        <van-grid-item />
        <van-grid-item />
        <van-grid-item />
      </van-grid>
    </div>

    <van-row class="discount-title">
      <van-col span="24">卡券中心</van-col>
    </van-row>

    <van-grid :gutter="10" class="discount-content">
      <van-grid-item text="优惠券" />
      <van-grid-item text="折扣卡" />
      <van-grid-item text="折扣卡" />
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.mine-container .van-nav-bar {
  background-color: #E6203B;
  height: 90px;
}

.van-nav-bar__right .van-icon {
  padding-left: 10px;
}

.van-nav-bar__left .name {
  color: #ffffff;
  font-weight: bold;
  font-size: 0.5rem;
  margin-left: 1rem;
}

.card {
  height: 100px;
  margin: 0 14px;
  position: relative;
  top: -40px;
  z-index: 1;
}

.mine-order-title {
  padding: 5px 10px 5px 10px;
  color: #383637;
  font-size: 13px;
  font-weight: bold;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.van-grid {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  display: flex;
  justify-content: center;
}

.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.discount-title .van-col {
  padding: 5px 10px 5px 10px;
  color: #383637;
  font-size: 13px;
  font-weight: bold;
}

.discount-content {
  border: 0;
}
</style>