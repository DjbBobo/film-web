<template>
  <div class="header-container">
    <van-row>
      <van-col span="4">
        <van-cell
          :title="LocationCity"
          icon="location-o"
          style="padding:15px 0px 15px 0px"
          @click="goCity"
        />
      </van-col>
      <van-col span="20">
        <van-search readonly placeholder="请输入搜索关键词" style="padding-right:0px" @click="goSearch" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import BMap from "BMap";

export default {
  data() {
    return {
      LocationCity: this.$root.CITY
    };
  },
  mounted() {
    if (this.$root.CITY_ID == "") {
      this.getLocationCity();
    } else {
      this.LOCATION_CITY = this.$root.CITY;
    }
  },
  methods: {
    goSearch() {
      this.$router.push({ path: "/search" });
    },
    goCity() {
      this.$router.push({ path: "/city" });
    },
    getLocationCity() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationCity = city.substring(0, city.length - 1);
          _this.$root.CITY = _this.LocationCity;
          _this.setCityIdByShortName(_this.LocationCity);
        },
        function(e) {
          _this.$root.LOCATION_CITY = "定位失败";
          _this.LocationCity = _this.$root.LOCATION_CITY;
        },
        { provider: "baidu" }
      );
    },
    setCityIdByShortName(shortName) {
      this.$store
        .dispatch("district/list", { shortName: shortName })
        .then(res => {
          this.$root.CITY_ID = res[0].id;
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-container {
  margin: 0 12px 0 12px;
}
</style>