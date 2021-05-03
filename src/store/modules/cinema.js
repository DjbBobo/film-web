import * as cinemaApi from '@/api/cinema'

const state = {
    list: [],
    item: {},
    pagination: {}
}

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    },
    SET_PAGINATION: (state, data) => {
        state.pagination.currentPage = Number.parseInt(data.current)
        state.pagination.pageSize = Number.parseInt(data.size)
        state.pagination.total = Number.parseInt(data.total)
    },
    SET_ITEM: (state, item) => {
        state.item = item
    }
}

const actions = {
    async page({ commit }, data) {
        const cinemaListResp = await cinemaApi.page(data)
        commit('SET_LIST', cinemaListResp.data.records)
        commit('SET_PAGINATION', cinemaListResp.data)
        return cinemaListResp.data
    },
    async list({ commit }, data) {
        const cinemaListResp = await cinemaApi.list(data)
        commit('SET_LIST', cinemaListResp.data)
        return cinemaListResp.data
    },
    async sesionCinemaList({ commit }, data) {
        const cinemaListResp = await cinemaApi.sesionCinemaList(data)
        commit('SET_LIST', cinemaListResp.data)
        return cinemaListResp.data
    },
    async get({ commit }, id) {
        const cinemaResp = await cinemaApi.get(id)
        commit('SET_ITEM', cinemaResp.data)
        return cinemaResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
