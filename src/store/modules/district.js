import * as districtApi from '@/api/district'

const state = {
    list: [],
    cityList: [],
    item: {},
    pagination: {}
}

const mutations = {
    SET_CITY_LIST: (state, list) => {
        state.cityList = list
    },
    SET_LIST: (state, list) => {
        state.list = list
    }
}

const actions = {
    async cityList({ commit }, data) {
        const districtListResp = await districtApi.cityList(data)
        commit('SET_CITY_LIST', districtListResp.data)
        return districtListResp.data
    },
    async list({ commit }, data) {
        const districtListResp = await districtApi.list(data)
        commit('SET_LIST', districtListResp.data)
        return districtListResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
