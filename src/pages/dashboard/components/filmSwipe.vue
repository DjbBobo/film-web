<template>
  <div class="film-swipe-container">
    <meta name="referrer" content="no-referrer" />
    <van-swipe class="film-swipe" :loop="false" :width="80" :show-indicators="false">
      <van-swipe-item class="film-swipe-item">
        <hot-film-item v-if="this.type === 'hot'" />
        <coming-film-item v-if="this.type === 'coming'" />
      </van-swipe-item>
      <van-swipe-item class="film-swipe-item"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import hotFilmItem from "../../../components/hotFilmItem";
import comingFilmItem from "../../../components/comingFilmItem";

export default {
  props: {
    type: {
      type: String
    }
  },
  components: {
    hotFilmItem,
    comingFilmItem
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.film-swipe {
  width: 100%;
  height: 180px;
}

.film-swipe-item {
  margin-right: 3px;
}
</style>