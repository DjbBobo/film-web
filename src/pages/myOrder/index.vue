<template>
  <div class="my-order-container">
    <van-nav-bar @click-left="goBack">
      <template #title>
        <span>订单列表</span>
      </template>
      <template #left>
        <van-icon name="arrow-left"></van-icon>
      </template>
    </van-nav-bar>

    <van-cell-group v-for="(item,index) in orderList" :key="index" @click="goPay(item.id)">
      <van-cell :title="item.cinemaName">
        <template #default>
          <van-count-down
            v-if="item.status == '1'"
            :time="(item.expireTime - Math.ceil(new Date().getTime() / 1000)) * 1000"
            format="mm:ss"
          />
        </template>
      </van-cell>
      <van-card :num="item.seatList.length" :thumb="item.filmImage">
        <template #title>
          <span class="title">{{item.filmName}}</span>
        </template>
        <template #desc>
          <van-row>{{formatYMDHM(item.sessionStartTime)}}</van-row>
          <van-row>
            <van-col>{{item.hallName}}</van-col>&nbsp;
            <van-col
              offset="1"
              v-for="(seatItem,seatIndex) in item.seatList"
              :key="seatIndex"
            >{{seatItem.row}}排{{seatItem.col}}座</van-col>
          </van-row>
        </template>
      </van-card>
      <van-cell :title="'总价：'+item.price" :value="formatStatus(item.status)" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  mounted() {
    // localStorage.setItem("userId", "1361258452256575490");
    const userId = localStorage.getItem("userId");
    this.$store
      .dispatch("orders/list", {
        sysUserId: userId,
        orderField: "createTime",
        order: "desc"
      })
      .then(res => {
        this.orderList = res;
      });
  },
  data() {
    return {
      orderList: []
    };
  },
  methods: {
    goPay(id) {
      this.$store.dispatch("orders/get", id).then(res => {
        if (res.status == 1) {
          this.$router.push({ path: "/pay", query: { orderId: id } });
        }
      });
    },
    formatStatus(status) {
      if (status == "1") {
        return "未支付";
      } else if (status == "2") {
        return "已支付";
      }
    },
    formatYMDHM(sessionStartTime) {
      let startDate = new Date(sessionStartTime);
      const year = startDate.getFullYear();
      const month = startDate.getMonth() + 1;
      const day = startDate.getDate();
      const startHours = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      return (
        year + "-" + month + "-" + day + "  " + startHours + ":" + startMinutes
      );
    },
    goBack() {
      this.$router.push({ path: "/mine" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar {
  background-color: #e54847;
}

.van-nav-bar__title span {
  color: #ffffff;
}

.van-nav-bar .van-icon {
  color: #fff;
}
</style>