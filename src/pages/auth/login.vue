<template>
  <div class="login-container">
    <van-nav-bar title="注册登录" left-arrow @click-left="goBack"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="sysUser.mobile"
        clearable
        name="mobile"
        label="手机号码"
        placeholder="请输入手机号码"
        :rules="[{ validator}]"
      />
      <van-field
        v-model="sysUser.captcha"
        center
        clearable
        name="captcha"
        label="短信验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true }]"
      >
        <template #button>
          <van-button
            size="small"
            type="info"
            :disabled="isDisable"
            native-type="button"
            @click="sendSms"
          >{{smsButton}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录 / 注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sysUser: {
        mobile: "",
        captcha: ""
      },
      isDisable: false,
      smsButton: "获取验证码",
      timer: null
    };
  },
  methods: {
    sendSms() {
      this.$toast.loading({
        forbidClick: true
      });
      if (!this.validator(this.sysUser.mobile)) {
        this.$toast("手机格式有误");
        return;
      }
      this.$store.dispatch("auth/captcha", { mobile: this.sysUser.mobile });
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.isDisable = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.smsButton = "重新获取(" + this.count + "s)";
            this.count--;
          } else {
            this.smsButton = "获取验证码";
            this.isDisable = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    onSubmit(values) {
      this.$toast.loading({
        forbidClick: true
      });
      this.$store.dispatch("auth/login", values).then(res => {
        this.$toast.clear();
        this.$router.go(-1);
      });
    },
    validator(val) {
      return /^1[3456789]\d{9}$/.test(val);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-form {
  margin: 20px 0 0 0;
}
</style>