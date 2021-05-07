<template>
  <div class="cinema-container">
    <header-common search="cinema" @getCinemaData="getCinemaData" />

    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>-->
    <cinema-item
      @click.native="goFilmCinema(item)"
      v-for="(item, index) in cinemaData"
      :key="index"
      :cinemaName="item.name"
      :districtDetail="item.districtDetail"
      :price="item.price"
    />
  </div>
</template>

<script>
import headerCommon from "../../components/headerCommon";
import cinemaItem from "../../components/cinemaItem";
import axios from "axios";

export default {
  components: {
    headerCommon,
    cinemaItem,
  },
  mounted() {
    if (this.$root.CITY_ID == "") {
      this.getLocationCity();
    } else {
      this.getCinemaData(this.$root.CITY_ID);
    }
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      cinemaData: [],
    };
  },
  methods: {
    goFilmCinema(cinema) {
      this.$router.push({
        path: "/filmCinema",
        query: {
          cinemaId: cinema.id,
          cinemaName: cinema.name,
          cinemaDistrictDetail: cinema.districtDetail,
        },
      });
    } /*  */,
    getCinemaData(cityId) {
      this.$toast.loading({
        forbidClick: true,
      });
      this.$store.dispatch("cinema/list", { cityId: cityId }).then((res) => {
        this.cinemaData = res;
        this.$toast.clear();
      });
    },
    getLocationCity() {
      axios
        .get(
          "https://restapi.amap.com/v3/ip?output=json&key=45b7fcac6c846a0fc680b00e0afb47c9"
        )
        .then((res) => {
          this.$root.CITY = res.data.city.slice(0, res.data.city.length - 1);
          this.$store
            .dispatch("district/list", { shortName: this.$root.CITY })
            .then((res) => {
              if (res) {
                this.$root.CITY_ID = res[0].id;
                this.getCinemaData(this.$root.CITY_ID);
              }
            });
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
.main-container {
  margin: 0;
}
</style>