import * as filmApi from '@/api/film'
import { filmTypeList } from '../../api/film'

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
        const filmListResp = await filmApi.page(data)
        commit('SET_LIST', filmListResp.data.records)
        commit('SET_PAGINATION', filmListResp.data)
        return filmListResp.data
    },
    async list({ commit }, data) {
        const filmListResp = await filmApi.list(data)
        commit('SET_LIST', filmListResp.data)
        return filmListResp.data
    },
    async filmTypeList({ commit }, data) {
        const filmListResp = await filmApi.filmTypeList(data)
        commit('SET_LIST', filmListResp.data)
        return filmListResp.data
    },
    async get({ commit }, id) {
        const filmResp = await filmApi.get(id)
        commit('SET_ITEM', filmResp.data)
        return filmResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
