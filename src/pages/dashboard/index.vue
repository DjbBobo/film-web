<template>
  <div class="dashboard-container">
    <header-bar />
    <header-swipe />
    <van-cell
      title="正在热映"
      is-link
      :value="'全部' + hotFilmCount +　'部'"
      title-style="font-weight:bold;color:#222222"
      @click="goFilm(0)"
    />
    <film-swipe :hotSwiperData="hotSwiperData" type="hot" />
    <van-cell
      title="即将上映"
      is-link
      :value="'全部' + comingFilmCount +'部'"
      title-style="font-weight:bold;color:#222222"
      @click="goFilm(1)"
    />
    <film-swipe :comingSwiperData="comingSwiperData" type="coming" />
  </div>
</template>

<script>
import headerBar from "./components/headBar";
import headerSwipe from "./components/headerSwipe";
import filmSwipe from "./components/filmSwipe";

export default {
  components: {
    headerBar,
    headerSwipe,
    filmSwipe
  },
  mounted() {
    this.getHeadSwiperDataList();
    this.getMainSwiperDataList();
    this.getFilmTypeList();
  },
  data() {
    return {
      hotFilmCount: 0,
      hotSwiperData: [],
      comingSwiperData: [],
      comingFilmCount: 0
    };
  },
  methods: {
    getHeadSwiperDataList() {
      this.$store.dispatch("headSwiper/list", {
        enable: 1,
        orderField: "sort"
      });
    },
    getMainSwiperDataList() {
      this.$store
        .dispatch("mainSwiper/list", {
          enable: 1,
          orderField: "sort"
        })
        .then(res => {
          this.hotSwiperData = res.filter(item => item.position === 1);
          this.comingSwiperData = res.filter(item => item.position === 2);
        });
    },
    getFilmTypeList() {
      this.$store.dispatch("film/filmTypeList").then(res => {
        this.hotFilmCount = res.filter(item => item.type === 1).length;
        this.comingFilmCount = res.filter(item => item.type === 2).length;
      });
    },
    goFilm(val) {
      this.$router.push({ path: "/film", query: { active: val } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-cell {
  padding-left: 0;
  padding-right: 0;
  padding-top: 5px;
}

.dashboard-container {
  margin: 0 12px 0 12px;
}
</style>