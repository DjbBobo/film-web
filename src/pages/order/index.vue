<template>
  <div class="order-container">
    <van-nav-bar left-arrow title="确认订单" @click-left="goBack"></van-nav-bar>
    <van-card :num="chooseSeatList.length" :price="price" :thumb="filmImage">
      <template #title>
        <span class="title">{{filmName}}</span>
      </template>
      <template #desc>
        <van-row>{{formatMDHM(sessionStartTime,sessionEndTime)}}</van-row>
        <van-row>{{cinemaName}}</van-row>
        <van-row>
          <van-col>{{hallName}}</van-col>&nbsp;
          <van-col
            offset="1"
            v-for="(item,index) in chooseSeatList"
            :key="index"
          >{{item.row}}排{{item.col}}座</van-col>
        </van-row>
      </template>
    </van-card>

    <van-submit-bar
      :price="price * chooseSeatList.length * 100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  created() {
    this.filmId = this.$route.query.filmId;
    this.filmName = this.$route.query.filmName;
    this.filmImage = this.$route.query.filmImage;
    this.cinemaId = this.$route.query.cinemaId;
    this.cinemaName = this.$route.query.cinemaName;
    this.sessionId = this.$route.query.sessionId;
    this.sessionStartTime = this.$route.query.sessionStartTime;
    this.sessionEndTime = this.$route.query.sessionEndTime;
    this.hallName = this.$route.query.hallName;
    this.chooseSeatList = JSON.parse(this.$route.query.chooseSeatList);
    this.orders.sessionId = this.sessionId;
    this.orders.seatIds = this.chooseSeatList
      .map(item => {
        return item.seatId;
      })
      .toString();
    this.orders.sessionSeatIds = this.chooseSeatList
      .map(item => {
        return item.id;
      })
      .toString();
    this.price = this.$route.query.price;

    // 查询订单是否已创建
    this.$store
      .dispatch("orders/list", {
        sessionId: this.orders.sessionId,
        seatIds: this.orders.seatIds
      })
      .then(res => {
        if (res != null) {
          this.$router.go(-2);
          return;
        }
      });
  },
  data() {
    return {
      filmId: "",
      filmName: "",
      filmImage: "",
      cinemaId: "",
      cinemaName: "",
      sessionId: "",
      sessionStartTime: "",
      sessionEndTime: "",
      hallName: "",
      chooseSeatList: [],
      price: "",
      orders: {
        sessionId: "",
        seatIds: ""
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$store.dispatch("orders/save", this.orders).then(res => {
        this.$router.push({ path: "/pay", query: { orderId: res } });
      });
    },
    formatMDHM(sessionStartTime, sessionEndTime) {
      let startDate = new Date(sessionStartTime);
      let endDate = new Date(sessionEndTime);
      const month = startDate.getMonth() + 1;
      const day = startDate.getDate();
      const startHours = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      const endHours = endDate.getHours();
      const endMinutes = endDate.getMinutes();
      return (
        month +
        "月" +
        day +
        "日 " +
        startHours +
        ":" +
        startMinutes +
        "-" +
        endHours +
        ":" +
        endMinutes
      );
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