import * as ordersApi from '@/api/orders'
import { unPayOrder } from '../../api/orders'

const state = {
    list: [],
    item: {}
}

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    },
    SET_ITEM: (state, data) => {
        state.item = data
    }
}

const actions = {
    async list({ commit }, data) {
        const ordersListResp = await ordersApi.list(data)
        commit('SET_LIST', ordersListResp.data)
        return ordersListResp.data
    },
    async save({ commit }, data) {
        const ordersResp = await ordersApi.save(data)
        return ordersResp
    },
    async update({ commit }, data) {
        const ordersResp = await ordersApi.update(data)
        return ordersResp
    },
    async unPayOrder({ commit }) {
        const ordersResp = await ordersApi.unPayOrder()
        commit('SET_ITEM', ordersResp.data)
        return ordersResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
