import * as authApi from '@/api/auth'
import { setToken } from '@/utils/auth'

const state = {
    user: {}
}

const mutations = {
    SET_USER(state, data) {
        state.user = data
    }
}

const actions = {
    async login({ commit }, params) {
        const authResp = await authApi.login(params)
        const { sysUserId, token } = authResp.data
        setToken(token)
        localStorage.setItem("userId", sysUserId);
        return authResp.data
    },
    async logout({ commit }) {
        const authResp = await authApi.logout()
        return authResp.data
    },
    async captcha({ commit }, params) {
        const authResp = await authApi.captcha(params)
        return authResp.data
    },
    async loginUser({ commit }) {
        const authResp = await authApi.loginUser()
        commit('SET_USER', authResp.data)
        return authResp.data
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
