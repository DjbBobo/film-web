<template>
  <div class="coming-film-item-container">
    <van-row class="film-image-row">
      <van-col class="film-image-col" :span="24">
        <van-image
          src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
        >
          <h5 class="film-score"></h5>
        </van-image>
      </van-col>
    </van-row>
    <van-row class="film-name-row">
      <van-col :span="24" class="film-name-col">拆弹专家2</van-col>
    </van-row>
    <van-row class="film-date-row">
      <van-col :span="24" class="film-date-col">2月10日</van-col>
    </van-row>
    <van-row class="film-btn-row">
      <van-col :span="24" class="film-btn-col">
        <van-button color="#F9AF02" round size="small">想看</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.coming-film-item-container .film-item .film-date .van-col {
  font-size: 2px;
  text-align: left;
  color: #999999;
}

.film-image-row {
  height: 60%;
}

.film-image-row .film-image-col {
  height: 100%;
}

.film-image-row .film-image-col .van-image {
  height: 100%;
  position: relative;
  border-radius: 4px;
  border: 0.5px solid;
}

.film-image-row .film-image-col .van-image .film-score {
  position: absolute;
  bottom: 0;
  margin: 0;
  color: #E9B107;
  box-shadow: 0 0 0.25rem rgba(95, 95, 95, 0.48);
}

.film-name-row .film-name-col {
  font-size: 13px;
  color: #222;
  font-weight: bold;
}

.film-date-row .film-date-col {
  font-size: 2px;
  color: #999999;
}
</style>