<template>
  <div class="mine-container">
    <van-nav-bar>
      <template #title>
        <span>我的</span>
      </template>
      <template #right>
        <van-icon name="wap-nav" color="#fff" />
      </template>
    </van-nav-bar>
    <van-row class="image-row">
      <van-col span="24">
        <van-image round width="5rem" height="5rem" :src="user.avatar" />
      </van-col>
    </van-row>

    <van-divider />

    <van-cell title="我的订单" is-link to="/myOrder" />
    <van-cell title="优惠卷" is-link />
    <van-cell title="折扣卡" is-link />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store
      .dispatch("auth/loginUser")
      .then(res => {
        if (!res) {
          this.$router.push({ path: "/login" });
          return;
        }
        this.user = res;
      })
      .catch(res => {
        this.user = {
          id: "1361258452256575490",
          username: "s3zv5a",
          avatar: "https://img01.yzcdn.cn/vant/cat.jpeg",
          mobile: "13417629376"
        };
      });
  },
  data() {
    return {
      user: {}
    };
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar {
  background-color: #e54847;
}

.van-nav-bar__content span {
  color: #fff;
  font-size: 16px;
}

.image-row {
  background-color: #f03d37;
  background-image: url('https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 150px;
  height: 150px;
  overflow: hidden;
}

.van-col {
  margin: 20px 0;
  text-align: center;
}
</style>