import * as sessionSeatApi from '@/api/sessionSeat'
import { updateBatch } from '../../api/sessionSeat'

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
        const sessionSeatListResp = await sessionSeatApi.page(data)
        commit('SET_LIST', sessionSeatListResp.data.records)
        commit('SET_PAGINATION', sessionSeatListResp.data)
        return sessionSeatListResp.data
    },
    async list({ commit }, data) {
        const sessionSeatListResp = await sessionSeatApi.list(data)
        commit('SET_LIST', sessionSeatListResp.data)
        return sessionSeatListResp.data
    },
    async lockSessionSeatList({ commit }) {
        const locksSessionSeatListResp = await sessionSeatApi.lockSessionSeatList()
        return locksSessionSeatListResp.data
    },
    async get({ commit }, id) {
        const sessionSeatResp = await sessionSeatApi.get(id)
        commit('SET_ITEM', sessionSeatResp.data)
        return sessionSeatResp.data
    },
    async updateBatch({ commit }, data) {
        const sessionSeatResp = await sessionSeatApi.updateBatch(data)
        return sessionSeatResp.code
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
