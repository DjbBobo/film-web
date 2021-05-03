import * as headSwiperApi from '@/api/headSwiper'

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
        const headSwiperListResp = await headSwiperApi.list(data)
        commit('SET_LIST', headSwiperListResp.data)
        return headSwiperListResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
