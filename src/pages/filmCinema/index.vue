<template>
  <div class="film-cinema-container">
    <van-nav-bar :title="name" left-arrow>
      <template #right>
        <van-icon name="star-o" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-cell center :title="name" :label="districtDetail">
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
        <van-swipe-item
          v-for="(item,index) in cinemaDetail.filmList"
          :key="index"
          :class="index==current?'swipe-item-choose':''"
          @click="onClickSwipe(index)"
        >
          <van-image class="swipe-item-image" :src="item.image"></van-image>
        </van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
      </van-swipe>
    </div>

    <van-row class="film-info">
      <van-col offset="8" span="8">
        {{currentFilm.name}}
        <span class="score">9.3分</span>
      </van-col>
    </van-row>

    <van-tabs v-model="likeSessionStartTime" @click="onClickTab">
      <van-tab
        :title="formatDate(item.sessionStartTime)"
        :name="formatYMD(item.sessionStartTime)"
        v-for="(item,index) in sessionDate"
        :key="index"
      ></van-tab>
      <van-tab></van-tab>
    </van-tabs>

    <van-divider style="margin:0;" />

    <van-row class="ticket-detail" v-for="(item,index) in sessionData" :key="index">
      <van-col span="4" class="first-col">
        <van-row class="start-time">
          <van-col span="24">{{formatTime(item.sessionStartTime)}}</van-col>
        </van-row>
        <van-row class="end-time">
          <van-col span="24">{{formatTime(item.sessionEndTime)}}散场</van-col>
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
        <van-button round type="warning" size="mini" @click="goSeat(item)">购票</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.districtDetail = this.$route.params.districtDetail;
    this.getCinemaDetail(this.id);
  },
  data() {
    return {
      current: 0,
      id: 0,
      name: "",
      districtDetail: "",
      cinemaDetail: {},
      currentFilm: {},
      sessionDate: [],
      sessionData: [],
      likeSessionStartTime: ""
    };
  },
  methods: {
    onSwiperChange(index) {
      this.current = index;
      this.currentFilm = this.cinemaDetail.filmList[this.current];
      this.getCinemaFilmSessions();
    },
    onClickSwipe(index) {
      // this.current = index;
      this.$refs.swipe.swipeTo(index);
    },
    goSeat(item) {
      this.$router.push({
        name: "seat",
        params: {
          currentFilm: this.currentFilm,
          cinemaName: this.name,
          cinemaId: this.id,
          session: item
        }
      });
    },
    getCinemaDetail(id) {
      this.$store.dispatch("cinema/get", id).then(res => {
        this.cinemaDetail = res;
        this.currentFilm = res.filmList[this.current];
        this.getCinemaFilmSessions();
      });
    },
    getCinemaFilmSessions() {
      this.$store
        .dispatch("session/cinemaFilmSessions", {
          cinemaId: this.id,
          filmId: this.currentFilm.id,
          orderField: "sessionStartTime"
        })
        .then(res => {
          this.sessionDate = res;
          this.likeSessionStartTime = this.formatYMD(
            this.sessionDate[0].sessionStartTime
          );
          this.onClickTab();
        });
    },
    onClickTab() {
      this.$store
        .dispatch("session/list", {
          filmId: this.currentFilm.id,
          likeSessionStartTime: this.likeSessionStartTime,
          orderField: "sessionStartTime"
        })
        .then(res => {
          this.sessionData = res;
        });
    },
    formatDate(time) {
      let date = new Date(time);
      return date.getMonth() + 1 + "月" + date.getDate() + "日";
    },
    formatTime(time) {
      let date = new Date(time);
      return date.getHours() + ":" + date.getMinutes();
    },
    formatYMD(time) {
      return time.split(" ")[0];
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