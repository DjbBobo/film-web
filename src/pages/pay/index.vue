<template>
  <div class="pay-container">
    <van-nav-bar left-arrow title="支付订单" @click-left="goBack"></van-nav-bar>

    <van-cell center class="order-info">
      <template #icon>
        <van-icon name="shop-o" size="30px" />
      </template>
      <template #title>
        <van-row class="price">￥{{orders.price}}</van-row>
        <van-row class="order-no">订单编号:{{orders.orderNo}}</van-row>
        <van-row class="order-no">
          支付剩余时间:
          <van-count-down
            :time="(orders.expireTime - Math.ceil(new Date().getTime() / 1000)) * 1000"
            format="mm:ss"
          />
        </van-row>
      </template>
    </van-cell>

    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell clickable @click="radio = '1'">
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
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell clickable @click="radio = '2'">
          <template #title>
            <span class="custom-title">支付宝支付</span>
          </template>
          <template #icon>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhifubao" />
            </svg>
          </template>
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
        <van-cell title="测试支付" @click="testPay"></van-cell>
      </van-cell-group>
    </van-radio-group>

    <van-button class="pay-btn" type="warning" @click="goAliPay">
      <van-row>
        <van-col>确认支付</van-col>
        <van-col>￥{{orders.price}}</van-col>
      </van-row>
    </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      orders: {}
    };
  },
  mounted() {
    this.getOrderData(this.$route.query.orderId);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getOrderData(orderId) {
      this.$store
        .dispatch("orders/list", { id: orderId, status: "1" })
        .then(res => {
          if (!res) {
            this.$router.go(-3);
            return;
          }
          this.orders = res[0];
        });
    },
    getUnPayOrder() {
      this.$store
        .dispatch("orders/list", {
          sysUserId: localStorage.getItem("userId"),
          status: "1",
          orderField: "createTime",
          order: "desc",
          limit: "1"
        })
        .then(res => {
          if (!res) {
            this.$router.go(-3);
            return;
          }
          this.orders = res[0];
        });
    },
    goAliPay() {
      this.$toast.loading({
        forbidClick: true
      });
      this.$store.dispatch("alipay/create", this.orders.id).then(res => {
        const div = document.createElement("div");
        div.innerHTML = res;
        document.body.appendChild(div);
        document.forms[0].submit();
        this.$toast.clear();
      });
      // this.$store.dispatch("alipay/createWeb", this.orders.id).then(res => {
      //   const div = document.createElement("div");
      //   div.innerHTML = res;
      //   document.body.appendChild(div);
      //   document.forms[0].submit();
      // });
    },
    testPay() {
      this.$toast.loading({
        forbidClick: true
      });
      this.$store.dispatch("alipay/testPay", this.orders.id).then(res => {
        this.$toast.success({
          message: "支付成功",
          duration: 500
        });
        this.$toast.clear();
        this.getOrderData(this.orders.id);
      });
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

.pay-btn {
  position: absolute;
  bottom: 10px;
  width: 100%;
  border-radius: 10px;
}
</style>