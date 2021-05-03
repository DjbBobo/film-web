<template>
  <div class="film-container">
    <header-common search="film" />
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="热映">
        <film-item
          type="hot"
          v-for="(item,index) in hotFilmData"
          :key="index"
          :imageUrl="item.image"
          :filmName="item.name"
          :releaseTime="item.releaseTime"
          :releasePlace="item.releasePlace"
          :actor="item.actor"
          :filmId="item.id"
        />
      </van-tab>
      <van-tab title="待映">
        <film-item
          type="wait"
          v-for="(item,index) in comingFilmData"
          :key="index"
          :imageUrl="item.image"
          :filmName="item.name"
          :releaseTime="item.releaseTime"
          :releasePlace="item.releasePlace"
          :actor="item.actor"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import filmItem from "../../components/filmItem";
import headerCommon from "../../components/headerCommon";
import { mapState } from "vuex";

export default {
  components: {
    filmItem,
    headerCommon
  },
  mounted() {
    this.getFilmTypeList();
    this.active =
      this.$route.query.active == undefined
        ? Number.parseInt(0)
        : Number.parseInt(this.$route.query.active);
  },
  data() {
    return {
      active: 0,
      hotFilmData: [],
      comingFilmData: []
    };
  },
  methods: {
    getFilmTypeList() {
      this.$toast.loading({
        forbidClick: true
      });
      this.$store.dispatch("film/filmTypeList").then(res => {
        this.hotFilmData = res.filter(item => item.type === 1);
        this.comingFilmData = res.filter(item => item.type === 2);
        this.$toast.clear();
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar__left {
  padding: 0px;
}
</style>