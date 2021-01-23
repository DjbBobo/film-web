<template>
  <div class="header-search">
    <van-row class="header">
      <van-col class="header-left" span="4">
        <van-icon name="arrow-left" @click="goBack"></van-icon>
      </van-col>
      <van-col class="header-search" span="20">
        <van-search shape="round" background="#ee0a24" placeholder="请输入搜索关键词" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  methods: {
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