<template>
  <div class="film-item-container">
    <van-card :thumb="imageUrl" :title="filmName" :desc="'演员 | ' + actor">
      <template #price>
        <span>{{formatYMD(releaseTime)}} {{releasePlace}}上映</span>
      </template>
      <template #tags>
        <van-row>
          <van-col offset="20" span="4">
            <van-button
              v-if="type == 'hot' || type == '1'"
              type="danger"
              size="mini"
              round
              style="width:40px"
              :to="'/ticketCinema?filmId=' + filmId"
            >购票</van-button>
            <van-button
              v-if="type == 'wait' || type == '2'"
              type="info"
              size="mini"
              round
              style="width:40px"
            >想看</van-button>
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
    },
    releaseTime: {
      type: String
    },
    releasePlace: {
      type: String
    },
    actor: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    onSearch() {},
    formatYMD(time) {
      const date = new Date(time);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }
};
</script>

<style lang="stylus">
.film-item-container .van-card {
  margin-top: 0;
}
</style>