<template>
  <div class="film-cinema-container">
    <van-nav-bar title="中基国际影城（揭阳榕城店）" left-arrow>
      <template #right>
        <van-icon name="star-o" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-cell center title="中基国际影城（揭阳榕城店）" label="榕城区榕东梅兜路中段东侧">
      <template #right-icon>
        <van-icon name="location-o"></van-icon>
      </template>
    </van-cell>

    <div class="swiper-container">
      <van-swipe
        class="my-swipe"
        :loop="false"
        :width="80"
        @change="onSwiperChange"
        :show-indicators="false"
        ref="swipe"
      >
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
        <van-swipe-item :class="0==current?'swipe-item-choose':''" @click="onClickSwipe(0)">
          <van-image
            class="swipe-item-image"
            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
          ></van-image>
        </van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
      </van-swipe>
    </div>

    <van-row class="film-info">
      <van-col offset="8" span="8">
        拆弹专家
        <span class="score">9.3分</span>
      </van-col>
    </van-row>

    <van-tabs>
      <van-tab title="今天2月3日"></van-tab>
      <van-tab title="明天2月4日"></van-tab>
      <van-tab title="后天2月5日"></van-tab>
      <van-tab title="周六2月6日"></van-tab>
      <van-tab title="周日2月7日"></van-tab>
      <van-tab></van-tab>
    </van-tabs>

    <van-divider style="margin:0;" />

    <van-row class="ticket-detail">
      <van-col span="4" class="first-col">
        <van-row class="start-time">
          <van-col span="24">17:30</van-col>
        </van-row>
        <van-row class="end-time">
          <van-col span="24">19:38散场</van-col>
        </van-row>
      </van-col>
      <van-col span="12" class="second-col">
        <van-row class="film-type">
          <van-col offset="4" span="20">国语2D</van-col>
        </van-row>
        <van-row class="place">
          <van-col offset="4" span="20">2号厅</van-col>
        </van-row>
      </van-col>
      <van-col span="4" class="third-col">
        <van-row class="price">
          <van-col span="24">38元</van-col>
        </van-row>
        <van-row>
          <van-col span="24"></van-col>
        </van-row>
      </van-col>
      <van-col span="4">
        <van-button round type="warning" size="mini" @click="goSeat">购票</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onSwiperChange(index) {
      this.current = index;
    },
    onClickSwipe(index) {
      // this.current = index;
      this.$refs.swipe.swipeTo(index);
    },
    goSeat() {
      this.$router.push({ path: "/seat" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__right .van-icon {
  margin-left: 10px;
}

.van-cell__title {
  flex: 2;
}

.swiper-container {
  width: 100%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px 0 15px 0;
}

.my-swipe {
  height: 100%;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin: 0 5px 0 5px;
}

.hidden-swiper-item {
  visibility: hidden;
}

.swipe-item-image {
  height: 100%;
  width: 100%;
}

.swipe-item-choose {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
}

.swipe-item-image {
  height: 100%;
  width: 100%;
}

* {
  transition: All 0.25s ease-in-out;
  -webkit-transition: All 0.25s ease-in-out;
  -moz-transition: All 0.25s ease-in-out;
  -o-transition: All 0.25s ease-in-out;
}

.film-info {
  margin-top: 5px;
  text-align: center;
  color: #333333;
  font-weight: bold;
}

.film-info .score {
  color: #D47E00;
}

.ticket-detail {
  padding: 10px 0 10px 0;
}

.first-col {
  text-align: center;
}

.first-col .end-time {
  color: #8D8D8D;
  font-size: 3px;
}

.second-col .film-type {
  font-size: 8px;
}

.second-col .place {
  color: #8D8D8D;
  font-size: 3px;
}

.third-col .price {
  color: #ee0a24;
}
</style>