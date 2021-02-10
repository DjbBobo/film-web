<template>
  <div class="header-swipe-container">
    <van-swipe class="header-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in headSwiperData" :key="index">
        <van-image :src="item.imageUrl"></van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      headSwiperData: state => state.headSwiper.list
    })
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.header-swipe {
  border-radius: 5px;
}

.header-swipe .van-swipe-item {
  line-height: 170px;
  height: 170px;
  width: 100%;
  text-align: center;
  background-color: #39a9ed;
}

.header-swipe .van-swipe-item .van-image {
  height: 170px;
  width: 100%;
}
</style>