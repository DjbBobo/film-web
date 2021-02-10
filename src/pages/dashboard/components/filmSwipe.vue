<template>
  <div class="film-swipe-container">
    <meta name="referrer" content="no-referrer" />
    <!-- 正在热映 -->
    <van-swipe
      class="film-swipe"
      v-if="type==='hot'"
      :loop="false"
      :width="80"
      :show-indicators="false"
    >
      <van-swipe-item class="film-swipe-item" v-for="(item,index) in hotSwiperData" :key="index">
        <van-row class="film-image-row">
          <van-col class="film-image-col" :span="24">
            <van-image :src="item.imageUrl">
              <h5 class="film-score">9.4</h5>
            </van-image>
          </van-col>
        </van-row>
        <van-row class="film-name-row">
          <van-col :span="24" class="film-name-col">{{item.filmName}}</van-col>
        </van-row>
        <van-row class="film-btn-row">
          <van-col :span="24" class="film-btn-col">
            <van-button type="danger" round size="small" to="/ticketCinema">购票</van-button>
          </van-col>
        </van-row>
      </van-swipe-item>
      <van-swipe-item class="film-swipe-item"></van-swipe-item>
    </van-swipe>
    <!-- 即将上映 -->
    <van-swipe
      class="film-swipe"
      v-if="type==='coming'"
      :loop="false"
      :width="80"
      :show-indicators="false"
    >
      <van-swipe-item class="film-swipe-item" v-for="(item,index) in comingSwiperData" :key="index">
        <van-row class="film-image-row">
          <van-col class="film-image-col" :span="24">
            <van-image :src="item.imageUrl">
              <h5 class="film-score"></h5>
            </van-image>
          </van-col>
        </van-row>
        <van-row class="film-name-row">
          <van-col :span="24" class="film-name-col">{{item.filmName}}</van-col>
        </van-row>
        <van-row class="film-date-row">
          <van-col :span="24" class="film-date-col">{{formatDate(item.releaseTime)}}</van-col>
        </van-row>
        <van-row class="film-btn-row">
          <van-col :span="24" class="film-btn-col">
            <van-button color="#F9AF02" round size="small">想看</van-button>
          </van-col>
        </van-row>
      </van-swipe-item>
      <van-swipe-item class="film-swipe-item"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import hotFilmItem from "../../../components/hotFilmItem";
import comingFilmItem from "../../../components/comingFilmItem";
import { mapState } from "vuex";

export default {
  props: {
    type: {
      type: String
    },
    hotSwiperData: {
      type: Array
    },
    comingSwiperData: {
      type: Array
    }
  },
  created() {},
  components: {
    hotFilmItem,
    comingFilmItem
  },
  data() {
    return {};
  },
  methods: {
    formatDate(time) {
      let date = new Date(time);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return month + "月" + day + "日";
    }
  }
};
</script>

<style lang="stylus" scoped>
.film-swipe {
  width: 100%;
  height: 200px;
}

.film-swipe-item {
  margin-right: 3px;
}

.film-image-row {
  height: 60%;
}

.film-image-row .film-image-col {
  height: 100%;
}

.film-image-row .film-image-col .van-image {
  height: 100%;
  position: relative;
  border-radius: 4px;
}

.film-image-row .film-image-col .van-image .film-score {
  position: absolute;
  bottom: 0;
  margin: 0;
  color: #E9B107;
  box-shadow: 0 0 0.25rem rgba(95, 95, 95, 0.48);
}

.film-name-row .film-name-col {
  font-size: 13px;
  color: #222;
  font-weight: bold;
}

.coming-film-item-container .film-item .film-date .van-col {
  font-size: 2px;
  text-align: left;
  color: #999999;
}

.film-image-row .film-image-col .van-image .film-score {
  position: absolute;
  bottom: 0;
  margin: 0;
  color: #E9B107;
  box-shadow: 0 0 0.25rem rgba(95, 95, 95, 0.48);
}

.film-name-row .film-name-col {
  font-size: 13px;
  color: #222;
  font-weight: bold;
}

.film-date-row .film-date-col {
  font-size: 2px;
  color: #999999;
}
</style>