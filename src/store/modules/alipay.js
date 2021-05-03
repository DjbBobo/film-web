import * as alipayApi from '@/api/alipay'

const state = {
}

const mutations = {
}

const actions = {
    async create({ commit }, orderId) {
        const alipayResp = await alipayApi.create(orderId)
        return alipayResp.data
    },
    async createWeb({ commit }, orderId) {
        const alipayResp = await alipayApi.createWeb(orderId)
        return alipayResp.data
    },
    async testPay({ commit }, orderId) {
        await alipayApi.testPay(orderId)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
