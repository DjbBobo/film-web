<template>
  <div class="hot-film-item-container">
    <van-row class="film-image-row">
      <van-col class="film-image-col" :span="24">
        <van-image
          src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
        >
          <h5 class="film-score">9.4</h5>
        </van-image>
      </van-col>
    </van-row>
    <van-row class="film-name-row">
      <van-col :span="24" class="film-name-col">拆弹专家2</van-col>
    </van-row>
    <van-row class="film-btn-row">
      <van-col :span="24" class="film-btn-col">
        <van-button type="danger" round size="small" to="/ticketCinema">购票</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped></style>