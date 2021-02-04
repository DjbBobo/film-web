<template>
  <div class="cinema-container">
    <header-common search="cinema" />

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <cinema-item @click.native="goFilmCinema" />
  </div>
</template>

<script>
import headerCommon from "../../components/headerCommon";
import cinemaItem from "../../components/cinemaItem";
export default {
  components: {
    headerCommon,
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
.main-container {
  margin: 0;
}
</style>