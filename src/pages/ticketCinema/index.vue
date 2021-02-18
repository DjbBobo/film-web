<template>
  <div class="ticket-cinama-container">
    <van-nav-bar title="你好，李焕英" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-tabs @click="onClickTabs">
      <van-tab
        v-for="(item,index) in sessionList"
        :key="index"
        :title="formatMD(item.sessionStartTime)"
        :name="item.sessionStartTime"
      ></van-tab>
    </van-tabs>

    <cinema-item
      v-for="(item,index) in cinemaList"
      :key="index"
      :cinemaName="item.name"
      :districtDetail="item.districtDetail"
      @click.native="goFilmCinema(item)"
    />
  </div>
</template>

<script>
import cinemaItem from "../../components/cinemaItem";

export default {
  components: {
    cinemaItem
  },
  mounted() {
    this.filmId = this.$route.query.filmId;
    this.getSessionList();
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      filmId: "",
      sessionList: [],
      cinemaList: []
    };
  },
  methods: {
    goFilmCinema(cinema) {
      this.$router.push({
        path: "/filmCinema",
        query: {
          cinemaName: cinema.name,
          cinemaId: cinema.id,
          cinemaDistrictDetail: cinema.districtDetail
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickTabs(name, title) {
      this.getSesionCinemaList(this.formatHead(name));
    },
    getSessionList() {
      this.$store
        .dispatch("session/cinemaFilmSessions", {
          filmId: this.filmId,
          orderField: "sessionStartTime"
        })
        .then(res => {
          if (res) {
            this.sessionList = res;
            this.getSesionCinemaList(
              this.formatHead(this.sessionList[0].sessionStartTime)
            );
          }
        });
    },
    getSesionCinemaList(likeSessionStartTime) {
      this.$store
        .dispatch("cinema/sesionCinemaList", {
          likeSessionStartTime: likeSessionStartTime
        })
        .then(res => {
          this.cinemaList = res;
        });
    },
    formatMD(time) {
      let date = new Date(time);
      return date.getMonth() + 1 + "月" + date.getDate() + "日";
    },
    formatHead(time) {
      return time.split(" ")[0];
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__right .van-icon {
  margin-left: 10px;
}
</style>