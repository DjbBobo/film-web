<template>
    <div class="search-container">
        <van-search v-model="searchValue" placeholder="请输入搜索内容" @search="onSearch"></van-search>
        <van-card
            thumb="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
            title="拆弹专家2"
            desc="导演 | 刘德华 岳云鹏"
        >
            <template #price>
                <span>2020-12-31 18:00 中国大陆上映</span>
            </template>
            <template #tags>
                <van-row>
                    <van-col offset="20" span="4">
                        <van-button type="danger" size="mini" round style="width:40px">购票</van-button>
                    </van-col>
                </van-row>
            </template>
        </van-card>
        <van-divider style="margin:0"/>
        <van-card
            thumb="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp"
            title="拆弹专家2"
            desc="导演 | 刘德华 岳云鹏"
        >
            <template #price>
                <span>2020-12-31 18:00 中国大陆上映</span>
            </template>
            <template #tags>
                <van-row>
                    <van-col offset="20" span="4">
                        <van-button type="danger" size="mini" round style="width:40px">购票</van-button>
                    </van-col>
                </van-row>
            </template>
        </van-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchValue: ''
        }
    },
    methods: {
        onSearch(){
        }
    }
}
</script>

<style lang="stylus">
.search-container .van-card{
    margin-top 0
}
</style>