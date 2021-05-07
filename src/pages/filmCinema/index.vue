<template>
  <div class="film-cinema-container">
    <van-nav-bar :title="cinemaName" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="star-o" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-cell center :title="cinemaName" :label="cinemaDistrictDetail">
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
        <!-- <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>-->
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
        <van-swipe-item class="hidden-swiper-item"></van-swipe-item>
      </van-swipe>
    </div>

    <van-row class="film-info">
      <van-col offset="8" span="8">
        {{currentFilm.name}}
        <span class="score">{{currentFilm.score}}</span>
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
          <van-col offset="4" span="20">{{item.hallName}}</van-col>
        </van-row>
      </van-col>
      <van-col span="4" class="third-col">
        <van-row class="price">
          <van-col span="24">{{item.price}}元</van-col>
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
  mounted() {
    // this.currentCinema = this.$route.query.currentCinema;
    this.filmId = this.$route.query.filmId;
    this.cinemaId = this.$route.query.cinemaId;
    this.cinemaName = this.$route.query.cinemaName;
    this.cinemaDistrictDetail = this.$route.query.cinemaDistrictDetail;
    this.getCinemaDetail(this.cinemaId);
  },
  data() {
    return {
      current: 0,
      filmId: "",
      cinemaId: "",
      cinemaName: "",
      cinemaDistrictDetail: "",
      cinemaDetail: {},
      currentFilm: {},
      sessionDate: [],
      sessionData: [],
      likeSessionStartTime: "",
      initialIndex: 0
    };
  },
  methods: {
    onSwiperChange(index) {
      this.current = index;
      this.currentFilm = this.cinemaDetail.filmList[this.current];
      this.getCinemaFilmSessions();
    },
    initialSwiperIndex() {
      this.cinemaDetail.filmList.filter((item, index) => {
        if (item.id == this.filmId) {
          this.onClickSwipe(index);
        }
      });
    },
    onClickSwipe(index) {
      // this.current = index;
      this.$refs.swipe.swipeTo(index);
    },
    goSeat(item) {
      this.$router.push({
        path: "/seat",
        query: {
          filmId: this.currentFilm.id,
          filmName: this.currentFilm.name,
          filmImage: this.currentFilm.image,
          cinemaName: this.cinemaName,
          cinemaId: this.cinemaId,
          sessionId: item.id,
          sessionStartTime: item.sessionStartTime,
          sessionEndTime: item.sessionEndTime,
          hallName: item.hallName,
          ticketPrice: item.price
        }
      });
    },
    getCinemaDetail(id) {
      this.$store.dispatch("cinema/get", id).then(res => {
        this.cinemaDetail = res;
        if (res.filmList) {
          this.currentFilm = res.filmList[this.current];
          this.getCinemaFilmSessions();
          this.initialSwiperIndex();
        } else {
          this.$toast("暂无场次信息");
        }
      });
    },
    getCinemaFilmSessions() {
      this.$store
        .dispatch("session/cinemaFilmSessions", {
          cinemaId: this.cinemaId,
          filmId: this.currentFilm.id,
          orderField: "sessionStartTime",
          currentTime: this.getCurrentTime()
        })
        .then(res => {
          if (res == null) {
            this.sessionData = [];
            this.sessionDate = [];
            this.$toast("暂无该电影场次信息");
            return;
          }
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
          cinemaId: this.cinemaId,
          filmId: this.currentFilm.id,
          likeSessionStartTime: this.likeSessionStartTime,
          orderField: "sessionStartTime"
        })
        .then(res => {
          this.sessionData = res;
        });
    },
    getCurrentTime() {
      let date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 9
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();
      const hour =
        date.getHours() < 9 ? "0" + date.getHours() : date.getHours();
      const minute =
        date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes();
      const second =
        date.getSeconds() < 9 ? "0" + date.getSeconds() : date.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
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
    },
    onClickLeft() {
      this.$router.go(-1);
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