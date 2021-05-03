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
import axios from "axios";
export default {
  props: ["search"],
  data() {
    return {
      city: "",
      locationCity: {}
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
      axios
        .get(
          "https://restapi.amap.com/v3/ip?output=json&key=45b7fcac6c846a0fc680b00e0afb47c9"
        )
        .then(res => {
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