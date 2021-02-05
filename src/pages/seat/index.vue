<template>
  <div class="seat-container">
    <van-nav-bar title="大地影院（揭阳金城店）" left-arrow>
      <template #right>
        <van-icon name="share-o"></van-icon>
      </template>
    </van-nav-bar>

    <van-row class="seat-type">
      <van-col span="8" class="choose">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-checkbox" />
        </svg>
        <span>可选</span>
      </van-col>

      <van-col span="8" class="choose">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-userrect" />
        </svg>
        <span>已售</span>
      </van-col>

      <van-col span="8" class="choose">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-checkbox-full" />
        </svg>
        <span>不可售</span>
      </van-col>
    </van-row>

    <van-row class="screen">
      <van-col span="10" offset="7">屏幕</van-col>
    </van-row>

    <van-row class="seats">
      <van-row class="seat">
        <van-col class="row" span="1">1</van-col>
        <van-col class="seat-icon" span="23">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
        </van-col>
      </van-row>
      <van-row class="seat">
        <van-col class="row" span="1">2</van-col>
        <van-col class="seat-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xingzhuangjiehe" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox-full" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-userrect" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-checkbox" />
          </svg>
        </van-col>
      </van-row>
    </van-row>

    <van-row class="footer">
      <van-row>
        <van-collapse v-model="activeNames" @change="onChange">
          <van-collapse-item name="1" :is-link="false">
            <template #title>
              <van-row class="head">
                <van-col span="8">送你一朵小红花</van-col>
                <van-col span="16" style="text-align:right;">
                  <van-row>
                    切换场次
                    <van-icon :name="arrow"></van-icon>
                  </van-row>
                </van-col>
              </van-row>
              <van-row>
                <van-col>今天 2月5日 16:45-18:53 国语2D</van-col>
              </van-row>
            </template>
            <van-row class="ticket-time">
              <van-col
                :class="[{'ticket-item-active':currentTicketItem === 0},'ticket-item']"
                @click="onTicketItemClick(0)"
              >
                <van-row class="time">16:45</van-row>
                <van-row class="type">国语2D</van-row>
                <van-row class="price">23.9元起</van-row>
              </van-col>
              <van-col
                :class="[{'ticket-item-active':currentTicketItem === 1},'ticket-item']"
                @click="onTicketItemClick(1)"
              >
                <van-row class="time">16:45</van-row>
                <van-row class="type">国语2D</van-row>
                <van-row class="price">23.9元起</van-row>
              </van-col>
            </van-row>
            <van-row class="ticket-info">
              <van-col class="info-item">
                <van-col>
                  <van-row class="info">10排6座</van-row>
                  <van-row class="price">23.9元</van-row>
                </van-col>
                <van-col>
                  <van-icon name="cross" />
                </van-col>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
      </van-row>
      <van-row class="buttom-row">
        <van-button type="warning" @click="goOrder">确认选座</van-button>
      </van-row>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      arrow: "arrow-up",
      currentTicketItem: 0
    };
  },
  methods: {
    onChange() {
      this.arrow = this.arrow === "arrow-down" ? "arrow-up" : "arrow-down";
    },
    onTicketItemClick(index) {
      this.currentTicketItem = index;
      console.log(this.currentTicketItem);
    },
    goOrder() {
      this.$router.push({ path: "/order" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.seat-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.seat-type {
  text-align: center;
}

.seat-type .choose {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 20px;
  height: 20px;
  margin: 5px 5px 5px 0;
}

.screen {
  text-align: center;
}

.screen .van-col {
  background-color: #eee;
}

.seats .seat {
  display: flex;
  align-items: center;
}

.seats .seat .row {
  height: 2rem;
  line-height: 2rem;
}

.seats .seat .seat-icon {
  height: 2rem;
  line-height: 2rem;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.footer .buttom-row .van-button {
  width: 100%;
  border-radius: 10px;
  margin: 5px 0 5px 0;
}

.footer .ticket-time .ticket-item {
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  background-color: #eee;
  border: 2px solid #fff;
  margin-right: 5px;
}

.footer .ticket-time .ticket-item-active {
  border: 2px solid #ee0a24;
  background-color: #FFFBFA;
}

.footer .ticket-time .ticket-item .time {
  color: #000;
}

.footer .ticket-time .ticket-item .type {
  font-size: 3px;
}

.footer .ticket-time .ticket-item .price {
  font-size: 3px;
  color: #000;
}

.footer .ticket-info .info-item {
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  background-color: #eee;
  margin: 10px 5px 0 0;
  color: #000;
  font-size: 5px;
  display: flex;
  align-items: center;
}

.footer .ticket-info .info-item .van-icon {
  color: #898989;
  padding-left: 5px;
}
</style>