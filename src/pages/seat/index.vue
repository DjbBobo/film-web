<template>
  <div class="seat-container">
    <van-nav-bar :title="cinemaName" left-arrow @click-left="goBack">
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
      <van-row class="seat" v-for="(item,index) in sessionSeatList" :key="index">
        <van-col class="row" span="1">{{index + 1}}</van-col>
        <van-col class="seat-icon" span="23">
          <svg
            class="icon"
            aria-hidden="true"
            v-for="(seatItem,seatIndex) in item.sessionSeatList"
            :key="seatIndex"
            @click="onClickSeat(seatItem,$event)"
          >
            <use
              :xlink:href="seatItem.status === 1 ? '#icon-checkbox' : (seatItem.status === 2 || seatItem.status === 4 ? '#icon-userrect': '#icon-checkbox-full')"
            />
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
                <van-col span="8">{{filmName}}</van-col>
                <van-col span="16" style="text-align:right;">
                  <van-row>
                    切换场次
                    <van-icon :name="arrow"></van-icon>
                  </van-row>
                </van-col>
              </van-row>
              <van-row>
                <van-col>{{formatTime(sessionStartTime,sessionEndTime)}}</van-col>
              </van-row>
            </template>
            <van-row class="ticket-time">
              <van-col
                v-for="(item,index) in sessionList"
                :key="index"
                :class="[{'ticket-item-active':sessionId === item.id},'ticket-item']"
                @click="onTicketItemClick(item.id)"
              >
                <van-row class="time">{{formatHM(item.sessionStartTime)}}</van-row>
                <van-row class="type">国语2D</van-row>
                <van-row class="price">{{item.price}}元起</van-row>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
        <van-row class="ticket-info">
          <van-col class="info-item" v-for="(item,index) in chooseSeatList" :key="index">
            <van-col>
              <van-row class="info">{{item.row}}排{{item.col}}座</van-row>
              <van-row class="price">{{ticketPrice}}元</van-row>
            </van-col>
            <van-col>
              <van-icon name="cross" />
            </van-col>
          </van-col>
        </van-row>
      </van-row>
      <van-row class="buttom-row">
        <van-button type="warning" @click="goOrder">确认选座</van-button>
      </van-row>
    </van-row>
  </div>
</template>

<script>
export default {
  created() {
    this.filmId = this.$route.query.filmId;
    this.filmName = this.$route.query.filmName;
    this.filmImage = this.$route.query.filmImage;
    this.cinemaId = this.$route.query.cinemaId;
    this.cinemaName = this.$route.query.cinemaName;
    this.sessionId = this.$route.query.sessionId;
    this.sessionStartTime = this.$route.query.sessionStartTime;
    this.sessionEndTime = this.$route.query.sessionEndTime;
    this.hallName = this.$route.query.hallName;
    this.ticketPrice = this.$route.query.ticketPrice;
    this.getSessionSeatList();
  },
  data() {
    return {
      activeNames: ["2"],
      arrow: "arrow-down",
      filmId: "",
      filmName: "",
      filmImage: "",
      cinemaId: "",
      cinemaName: "",
      sessionId: "",
      sessionStartTime: "",
      sessionEndTime: "",
      hallName: "",
      ticketPrice: "",
      sessionList: [],
      sessionSeatList: [],
      chooseSeatList: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getSessionSeatList() {
      this.$store
        .dispatch("sessionSeat/list", {
          sessionId: this.sessionId
        })
        .then(res => {
          this.sessionSeatList = res;
        });
    },
    onClickSeat(seatItem, event) {
      if (seatItem.status === 1) {
        let value = event.currentTarget.firstElementChild.getAttribute(
          "xlink:href"
        );
        value =
          value == "#icon-xingzhuangjiehe"
            ? "#icon-checkbox"
            : "#icon-xingzhuangjiehe";
        event.currentTarget.firstElementChild.setAttribute("xlink:href", value);
        if (value == "#icon-xingzhuangjiehe") {
          this.chooseSeatList.push(seatItem);
        } else {
          let list = this.chooseSeatList.filter(
            item => item.id !== seatItem.id
          );
          this.chooseSeatList = [];
          for (var i = 0; i < list.length; i++) {
            this.$set(this.chooseSeatList, i, list[i]);
          }
        }
      }
    },
    onChange() {
      this.arrow = this.arrow === "arrow-down" ? "arrow-up" : "arrow-down";
      if (this.arrow === "arrow-up") {
        this.$store
          .dispatch("session/list", {
            cinemaId: this.cinemaId,
            filmId: this.filmId,
            likeSessionStartTime: this.formatYMD(this.sessionStartTime)
          })
          .then(res => {
            this.sessionList = res;
          });
      }
    },
    onTicketItemClick(sessionId) {
      this.chooseSeatList = [];
      this.sessionSeatList = [];
      this.$store
        .dispatch("sessionSeat/list", {
          sessionId: sessionId
        })
        .then(res => {
          this.sessionSeatList = res;
        });
      this.$store.dispatch("session/get", sessionId).then(res => {
        this.sessionId = res.id;
        this.sessionStartTime = res.sessionStartTime;
        this.sessionEndTime = res.sessionEndTime;
        this.hallName = res.hallName;
        this.ticketPrice = res.price;
      });
    },
    goOrder() {
      if (this.chooseSeatList) {
        this.chooseSeatList.forEach(sessionSeat => {
          sessionSeat.status = 4;
        });
        this.$toast.loading({
          message: "锁座中，请稍等...",
          forbidClick: true
        });
        this.$store
          .dispatch("sessionSeat/updateBatch", this.chooseSeatList)
          .then(res => {
            this.$toast.clear();
            this.$router.push({
              path: "/order",
              query: {
                filmId: this.filmId,
                filmName: this.filmName,
                filmImage: this.filmImage,
                cinemaName: this.cinemaName,
                cinemaId: this.cinemaId,
                sessionId: this.sessionId,
                sessionStartTime: this.sessionStartTime,
                sessionEndTime: this.sessionEndTime,
                hallName: this.hallName,
                chooseSeatList: JSON.stringify(this.chooseSeatList),
                price: this.ticketPrice
              }
            });
          });
      }
    },
    formatYMD(time) {
      return time.split(" ")[0];
    },
    formatHM(sessionStartTime) {
      let date = new Date(sessionStartTime);
      return date.getHours() + ":" + date.getMinutes();
    },
    formatTime(sessionStartTime, sessionEndTime) {
      let startDate = new Date(sessionStartTime);
      let endDate = new Date(sessionEndTime);
      const month = startDate.getMonth() + 1;
      const day = startDate.getDate();
      const startHours = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      const endHours = endDate.getHours();
      const endMinutes = endDate.getMinutes();
      return (
        month +
        "月" +
        day +
        "日 " +
        startHours +
        ":" +
        startMinutes +
        "-" +
        endHours +
        ":" +
        endMinutes
      );
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
  margin: 10px 5px 0 10px;
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