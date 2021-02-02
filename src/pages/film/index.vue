<template>
  <div class="film-container">
    <van-nav-bar>
      <template #left>
        <van-cell title="广州" icon="location-o" @click="goCity" />
      </template>
      <template #right>
        <van-icon name="search" size="18" color="#ee0a24" class="search" @click="goSearch" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="热映">
        <film-item type="hot" />
      </van-tab>
      <van-tab title="待映">
        <film-item type="wait" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import filmItem from "../../components/filmItem";
export default {
  components: {
    filmItem
  },
  data() {
    return {};
  },
  methods: {
    goSearch() {
      this.$router.push({ path: "/search" });
    },
    goCity() {
      this.$router.push({ path: "/city" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__left {
  padding: 0px;
}
</style>