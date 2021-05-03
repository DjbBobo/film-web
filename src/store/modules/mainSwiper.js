import * as mainSwiperApi from '@/api/mainSwiper'

const state = {
    list: []
}

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    }
}

const actions = {
    async list({ commit }, data) {
        const mainSwiperListResp = await mainSwiperApi.list(data)
        commit('SET_LIST', mainSwiperListResp.data)
        return mainSwiperListResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
