<template>
  <div class="order-container">
    <van-nav-bar left-arrow title="确认订单" @click-left="goBack"></van-nav-bar>
    <van-card num="2" price="2.00" :thumb="filmImage">
      <template #title>
        <span class="title">{{filmName}}</span>
      </template>
      <template #desc>
        <van-row>{{formatMDHM(sessionStartTime,sessionEndTime)}}</van-row>
        <van-row>{{cinemaName}}</van-row>
        <van-row>
          <van-col>1号极光厅</van-col>&nbsp;
          <van-col
            offset="1"
            v-for="(item,index) in chooseSeatList"
            :key="index"
          >{{item.row}}排{{item.col}}座</van-col>
        </van-row>
      </template>
    </van-card>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  created() {
    this.filmId = this.$route.query.filmId;
    this.filmName = this.$route.query.filmName;
    this.filmImage = this.$route.query.filmImage;
    console.log(this.filmImage);
    this.cinemaId = this.$route.query.cinemaId;
    this.cinemaName = this.$route.query.cinemaName;
    this.sessionId = this.$route.query.sessionId;
    this.sessionStartTime = this.$route.query.sessionStartTime;
    this.sessionEndTime = this.$route.query.sessionEndTime;
    this.chooseSeatList = JSON.parse(this.$route.query.chooseSeatList);
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
      chooseSeatList: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$router.push({ path: "/pay" });
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