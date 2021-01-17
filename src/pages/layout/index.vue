<template>
    <div class="layout-container">
        <head-bar/>
        <main-content/>
        <foot-bar/>
    </div>
</template>

<script>
import headBar from './headBar'
import main from './main'
import footBar from './footBar'

export default {
    components: {
        headBar,
        mainContent: main,
        footBar
    }
}
</script>

<style lang="stylus" scoped>

.layout-container{
    height: 100%;
    position: relative;

    .footer{
        position: absolute;
        bottom: 0;
    }
}




</style>