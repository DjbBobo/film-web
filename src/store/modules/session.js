import * as sessionApi from '@/api/session'
import { cinemaFilmSessions } from '../../api/session'

const state = {
    list: [],
    item: {},
    sessionDate: [],
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
    SET_SESSION_DATE: (state, list) => {
        state.sessionDate = list
    },
    SET_ITEM: (state, item) => {
        state.item = item
    }
}

const actions = {
    async page({ commit }, data) {
        const sessionListResp = await sessionApi.page(data)
        commit('SET_LIST', sessionListResp.data.records)
        commit('SET_PAGINATION', sessionListResp.data)
        return sessionListResp.data
    },
    async list({ commit }, data) {
        const sessionListResp = await sessionApi.list(data)
        commit('SET_LIST', sessionListResp.data)
        return sessionListResp.data
    },
    async cinemaFilmSessions({ commit }, data) {
        const sessionListResp = await sessionApi.cinemaFilmSessions(data)
        commit('SET_SESSION_DATE', sessionListResp.data)
        return sessionListResp.data
    },
    async get({ commit }, id) {
        const sessionResp = await sessionApi.get(id)
        commit('SET_ITEM', sessionResp.data)
        return sessionResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
