<template>
    <div class="header-container">
        <van-row>
            <van-col span="4">
                <van-cell title="广州" icon="location-o" style="padding:15px 0px 15px 8px"/>
            </van-col>
            <van-col span="20">
                <van-search readonly="" placeholder="请输入搜索关键词"  style="padding-left:0px" @click="goSearch"/>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        goSearch() {
            this.$router.push({path: '/search'})
        }
    }
}
</script>

<style lang="stylus" scope>
</style>