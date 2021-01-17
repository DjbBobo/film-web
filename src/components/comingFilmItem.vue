<template>
    <div class="coming-film-item-container">
        <van-row class="film-item">
            <van-row class="film-image">
                <van-col span="24">
                    <van-image src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"></van-image>
                    <h5 class="image-content">9.5分</h5>
                </van-col>
            </van-row>
            <van-row class="film-name">
                <van-col span="24">
                    拆弹专家2
                </van-col>
            </van-row>
            <van-row class="film-date">
                <van-col span="24">
                    2月12日
                </van-col>
            </van-row>
            <van-row class="film-btn">
                <van-col span="24">
                    <van-button type="primary   " round size="mini">想看</van-button>
                </van-col>
            </van-row>
        </van-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.coming-film-item-container .film-item .film-date .van-col{
    font-size 2px
    text-align left 
    color #999999
}
</style>