import Vue from 'vue'
import Vuex from 'vuex'
import headSwiper from './modules/headSwiper'
import mainSwiper from './modules/mainSwiper'
import cinema from './modules/cinema'
import session from './modules/session'
import sessionSeat from './modules/sessionSeat'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        headSwiper,
        mainSwiper,
        cinema,
        session,
        sessionSeat
    }
})

export default store