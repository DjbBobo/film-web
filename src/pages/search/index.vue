<template>
  <div class="search-container">
    <van-search v-model="searchValue" placeholder="请输入搜索内容" @search="onSearch"></van-search>
    <film-item />
  </div>
</template>

<script>
import filmItem from "../../components/filmItem";
export default {
  components: {
    filmItem
  },
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style lang="stylus">
.search-container .van-card {
  margin-top: 0;
}
</style>