<template>
  <div class="search-container">
    <van-search
      v-model="searchValue"
      :placeholder="placeHolder"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <film-item v-if="this.searchType === 'film'" />
    <cinema-item v-if="this.searchType === 'cinema'" />
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
      searchType: ""
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
    onSearch() {},
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