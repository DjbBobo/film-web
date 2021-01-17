<template>
    <div class="header-swipe-container">
        <van-swipe class="header-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item>
                <van-image src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"></van-image>
            </van-swipe-item>
            <van-swipe-item>
                <van-image src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"></van-image>
            </van-swipe-item>
            <van-swipe-item>
                <van-image src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"></van-image>
            </van-swipe-item>
            <van-swipe-item>
                <van-image src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"></van-image>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="stylus" scope>
  .header-swipe{
      border-radius 5px
  }
  .header-swipe .van-swipe-item {
    line-height: 170px;
    height 170px
    width 100%
    text-align: center;
    background-color: #39a9ed;
  }

  .header-swipe .van-swipe-item .van-image{
      height 170px
      width 100%
  }
</style>