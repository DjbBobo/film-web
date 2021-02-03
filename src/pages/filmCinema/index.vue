<template>
  <div class="film-cinema-container">
    <van-nav-bar title="中基国际影城（揭阳榕城店）" left-arrow>
      <template #right>
        <van-icon name="star-o" size="18" />
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>

    <van-cell center title="中基国际影城（揭阳榕城店）" label="榕城区榕东梅兜路中段东侧">
      <template #right-icon>
        <van-icon name="location-o"></van-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.van-nav-bar__right .van-icon {
  margin-left: 10px;
}

.van-cell__title {
  flex: 2;
}
</style>