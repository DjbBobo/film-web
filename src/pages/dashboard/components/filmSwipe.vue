<template>
    <div class="film-swipe-container">
        <meta name="referrer" content="no-referrer">
        <van-swipe :loop="false" :show-indicators="false" :width="90"  v-if="this.type === 'hot'">
            <van-swipe-item>
                <hot-film-item/>
            </van-swipe-item>
            <van-swipe-item></van-swipe-item>
        </van-swipe>
        <van-swipe :loop="false" :show-indicators="false" :width="90"  v-if="this.type === 'coming'">
            <van-swipe-item>
                <coming-film-item/>
            </van-swipe-item>
            <van-swipe-item></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import hotFilmItem from '../../../components/hotFilmItem'
import comingFilmItem from '../../../components/comingFilmItem'

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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
}
</script>

<style lang="stylus" scope>
.film-swipe-container .van-swipe .van-swipe-item{
    width 100%
    height 165px
    text-align center
    color red
    margin-right 5px
}
.film-image .van-col{
    height 100px
    width 100%
    position relative
}
.film-image .van-col .image-content{
    position absolute
    bottom 0
    margin 0
    text-align left 
    padding-left 4%
    width 96%
    border-radius 5px
    box-shadow: 0 0 .25rem rgba(95, 95, 95, .48);
}
.film-image .van-col .van-image img{
    height 100px
    width 100%
    border-radius 5px
}
.film-name .van-col{
    height 20px
    line-height 20px
    font-size 10px
    text-align left 
    color #222
    font-weight bold
}
.film-btn .van-col{
    text-align left 
}
.film-btn .van-col .van-button{
    width 50%
}
</style>