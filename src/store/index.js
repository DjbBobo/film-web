import Vue from 'vue'
import Vuex from 'vuex'
import headSwiper from './modules/headSwiper'
import mainSwiper from './modules/mainSwiper'
import cinema from './modules/cinema'
import session from './modules/session'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        headSwiper,
        mainSwiper,
        cinema,
        session
    }
})

export default store