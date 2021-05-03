<template>
  <div class="city-container">
    <search @search="getCityList" />

    <van-cell class="current-city">
      <template #title>
        <span>当前城市：</span>
        <span>{{city}}</span>
      </template>
    </van-cell>

    <van-cell class="gps-city" @click="onClickCity(locationCity)">
      <template #title>
        <van-icon name="location-o"></van-icon>
        <span class="city-content">{{locationCity.shortName}}</span>
        <span class="gps-content">GPS定位</span>
      </template>
    </van-cell>

    <van-index-bar class="addr-list" v-for="(item,index) in cityList" :key="index">
      <van-index-anchor :index="item.alpha">{{item.alpha}}</van-index-anchor>
      <van-cell
        v-for="(district,districtIndex) in item.districtList"
        :key="districtIndex"
        :title="district.shortName"
        @click="onClickCity(district)"
      />
    </van-index-bar>
  </div>
</template>

<script>
import Search from "./component/search";
import axios from "axios";
export default {
  components: {
    Search
  },
  mounted() {
    this.getCityList();
    this.getLocationCity();
  },
  data() {
    return {
      locationCity: {
        shortName: "正在定位",
        id: ""
      },
      city: this.$root.CITY,
      cityList: []
    };
  },
  watch: {},
  methods: {
    getCityList(shortName) {
      this.$toast.loading({
        forbidClick: true
      });
      this.$store
        .dispatch("district/cityList", { shortName: shortName })
        .then(res => {
          this.cityList = res;
          this.$toast.clear();
        });
    },
    onClickCity(district) {
      this.$root.CITY = district.shortName;
      this.$root.CITY_ID = district.id;
      this.city = district.shortName;
      this.$router.push({ path: "/" });
    },
    getLocationCity() {
      axios
        .get(
          "https://restapi.amap.com/v3/ip?output=json&key=45b7fcac6c846a0fc680b00e0afb47c9"
        )
        .then(res => {
          // console.log(res)
          this.locationCity.shortName = res.data.city.slice(
            0,
            res.data.city.length - 1
          );
          this.$store
            .dispatch("district/list", { shortName: res.data.city })
            .then(res => {
              if (res) this.locationCity.id = res[0].id;
            });
        });
    },
    setCityIdByShortName(shortName) {
      this.$store
        .dispatch("district/list", { shortName: shortName })
        .then(res => {
          if (res) {
            this.locationCity.id = res[0].id;
          }
        });
    }
  }
};
</script>

<style lang="stylus">
.gps-city .van-cell__title {
  display: flex;
  align-items: center;
}

.gps-city .city-content {
  margin-left: 10px;
}

.gps-city .gps-content {
  color: #969799;
  margin-left: 10px;
  font-size: 10px;
}
</style>