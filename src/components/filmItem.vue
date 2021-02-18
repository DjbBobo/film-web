<template>
  <div class="film-item-container">
    <van-card :thumb="imageUrl" :title="filmName" desc="导演 | 刘德华 岳云鹏">
      <template #price>
        <span>2020-12-31 18:00 中国大陆上映</span>
      </template>
      <template #tags>
        <van-row>
          <van-col offset="20" span="4">
            <van-button
              v-if="type == 'hot'"
              type="danger"
              size="mini"
              round
              style="width:40px"
              :to="'/ticketCinema?filmId=' + filmId"
            >购票</van-button>
            <van-button v-if="type == 'wait'" type="info" size="mini" round style="width:40px">预售</van-button>
          </van-col>
        </van-row>
      </template>
    </van-card>
    <van-divider style="margin:0" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    imageUrl: {
      type: String
    },
    filmName: {
      type: String
    },
    filmId: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style lang="stylus">
.film-item-container .van-card {
  margin-top: 0;
}
</style>