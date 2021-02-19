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
export default {
  props: ["search"],
  data() {
    return {
      city: this.$root.CITY
    };
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