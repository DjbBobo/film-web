<template>
  <div class="search-container">
    <van-search
      v-model="searchValue"
      :placeholder="placeHolder"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <span v-if="this.searchType === 'film'">
      <film-item
        v-for="(item,index) in filmList"
        :key="index"
        :imageUrl="item.image"
        :filmName="item.name"
        :releaseTime="item.releaseTime"
        :releasePlace="item.releasePlace"
        :actor="item.actor"
        :filmId="item.id"
      />
    </span>
    <span v-if="this.searchType === 'cinema'">
      <cinema-item
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
      }
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