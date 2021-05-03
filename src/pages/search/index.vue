<template>
  <div class="search-container">
    <van-search
      v-model="searchValue"
      :placeholder="placeHolder"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <span v-if="searchType === 'film' || searchType === 'all'">
      <film-item
        v-for="(item,index) in filmList"
        :key="index"
        :imageUrl="item.image"
        :filmName="item.name"
        :releaseTime="item.releaseTime"
        :releasePlace="item.releasePlace"
        :actor="item.actor"
        :filmId="item.id"
        :type="item.type.toString()"
      />
    </span>
    <span v-if="searchType === 'cinema' || searchType === 'all'">
      <cinema-item
        @click.native="goFilmCinema(item)"
        v-for="(item,index) in cinemaList"
        :key="index"
        :cinemaName="item.name"
        :districtDetail="item.districtDetail"
        :price="item.price"
      />
    </span>
  </div>
</template>

<script>
import filmItem from "../../components/filmItem";
import cinemaItem from "../../components/cinemaItem";
export default {
  components: {
    filmItem,
    cinemaItem
  },
  data() {
    return {
      searchValue: "",
      placeHolder: "请输入搜索内容",
      searchType: "",
      filmList: [],
      cinemaList: []
    };
  },
  created() {
    let placeHolder = this.$route.params.placeHolder;
    if (placeHolder === "film") {
      this.searchType = "film";
      this.placeHolder = "请输入要搜索的电影名称";
    } else if (placeHolder === "cinema") {
      this.searchType = "cinema";
      this.placeHolder = "请输入要搜索的影院名称";
    } else {
      this.searchType = "all";
    }
  },
  methods: {
    onSearch(val) {
      if (this.searchType == "film") {
        // this.$store.dispatch("film/list", { name: val }).then(res => {
        //   this.filmList = res;
        // });
        this.$store.dispatch("film/filmTypeList", { name: val }).then(res => {
          this.filmList = res;
        });
      } else if (this.searchType == "cinema") {
        this.$store
          .dispatch("cinema/list", { name: val, cityId: this.$root.CITY_ID })
          .then(res => {
            this.cinemaList = res;
          });
      } else if (this.searchType == "all") {
        this.$store.dispatch("film/filmTypeList", { name: val }).then(res => {
          this.filmList = res;
        });
        this.$store
          .dispatch("cinema/list", { name: val, cityId: this.$root.CITY_ID })
          .then(res => {
            this.cinemaList = res;
          });
      }
    },
    goFilmCinema(cinema) {
      this.$router.push({
        path: "/filmCinema",
        query: {
          cinemaId: cinema.id,
          cinemaName: cinema.name,
          cinemaDistrictDetail: cinema.districtDetail
        }
      });
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus">
.search-container .van-card {
  margin-top: 0;
}
</style>