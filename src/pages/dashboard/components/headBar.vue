<template>
  <div class="header-container">
    <van-row>
      <van-col span="4">
        <van-cell
          :title="this.$root.CITY"
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
export default {
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
      this.$router.push({ path: "/search" });
    },
    goCity() {
      this.$router.push({ path: "/city" });
    },
    getLocationCity() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      // geolocation.getCurrentPosition(
      //   function getinfo(position) {
      //     console.log(position);
      //     let city = position.address.city; //获取城市信息
      //     let province = position.address.province; //获取省份信息
      //     _this.$root.CITY = city.substring(0, city.length - 1);
      //     _this.city = _this.$root.CITY;
      //     _this.setCityIdByShortName(_this.$root.CITY);
      //   },
      //   function(e) {
      //     _this.$root.CITY = "定位失败";
      //   },
      //   { provider: "baidu" }
      // );
      var myGeo = new BMap.Geocoder();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var pt = r.point;
          // 根据坐标得到地址描述
          myGeo.getLocation(pt, function(result) {
            if (result) {
              var addComp = result.addressComponents;
              // alert(addComp.province + "," + addComp.city);
              _this.$root.CITY = addComp.city.substring(
                0,
                addComp.city.length - 1
              );
              _this.city = _this.$root.CITY;
              _this.setCityIdByShortName(_this.$root.CITY);
            }
          });
        }
      });
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