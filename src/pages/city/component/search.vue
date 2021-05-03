<template>
  <div class="header-search">
    <van-row class="header">
      <van-col class="header-left" span="4">
        <van-icon name="arrow-left" @click="goBack"></van-icon>
      </van-col>
      <van-col class="header-search" span="20">
        <van-search
          v-model="shortName"
          shape="round"
          background="#ee0a24"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shortName: ""
    };
  },
  methods: {
    onSearch(val) {
      this.$emit("search", val);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #ee0a24;
}

.header-left {
  text-align: center;
  color: #fff;
}</style>