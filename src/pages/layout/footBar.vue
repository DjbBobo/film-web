<template>
  <div class="footer-container">
    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item replace to="/dashboard" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/film" icon="video-o">电影</van-tabbar-item>
      <van-tabbar-item replace to="/cinema" icon="shop-o">影院</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>