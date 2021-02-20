<template>
  <div class="header-common-container">
    <van-nav-bar>
      <template #left>
        <van-cell :title="city" @click="goCity">
          <template #icon>
            <van-icon name="location-o" color="#ee0a24"></van-icon>
          </template>
        </van-cell>
      </template>
      <template #right>
        <van-icon name="search" size="18" color="#ee0a24" class="search" @click="goSearch()" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import BMap from "BMap";

export default {
  props: ["search"],
  data() {
    return {
      city: ""
    };
  },
  mounted() {
    if (this.$root.CITY == "正在定位") {
      this.getLocationCity();
    } else {
      this.city = this.$root.CITY;
    }
  },
  methods: {
    goSearch() {
      this.$router.push({
        name: "search",
        params: { placeHolder: this.search }
      });
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
          _this.$root.CITY = city.substring(0, city.length - 1);
          _this.city = _this.$root.CITY;
          _this.setCityIdByShortName(_this.$root.CITY);
        },
        function(e) {
          _this.$root.CITY = "定位失败";
        },
        { provider: "baidu" }
      );
    },
    setCityIdByShortName(shortName) {
      this.$store
        .dispatch("district/list", { shortName: shortName })
        .then(res => {
          this.$root.CITY_ID = res[0].id;
          this.$emit("getCinemaData", this.$root.CITY_ID);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-cell {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>