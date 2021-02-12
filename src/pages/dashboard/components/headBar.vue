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
      LocationCity: "正在定位"
    };
  },
  mounted() {
    this.getLocationCity();
    console.log(this.LocationCity);
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
        },
        function(e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-container {
  margin: 0 12px 0 12px;
}
</style>