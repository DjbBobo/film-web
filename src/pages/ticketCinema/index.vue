<template>
  <div class="ticket-cinama-container">
    <van-nav-bar title="你好，李焕英" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-tabs>
      <van-tab title="今天2月3日"></van-tab>
      <van-tab title="明天2月4日"></van-tab>
      <van-tab title="后天2月5日"></van-tab>
      <van-tab title="周六2月6日"></van-tab>
      <van-tab title="周日2月7日"></van-tab>
      <van-tab></van-tab>
    </van-tabs>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <cinema-item @click.native="goFilmCinema" />
  </div>
</template>

<script>
import cinemaItem from "../../components/cinemaItem";

export default {
  components: {
    cinemaItem
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
      ]
    };
  },
  methods: {
    goFilmCinema() {
      this.$router.push({ path: "/filmCinema" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__right .van-icon {
  margin-left: 10px;
}
</style>