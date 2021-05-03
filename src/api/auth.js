import request from '@/utils/request'

export function login(params) {
    return request({
        url: '/auth/api/login',
        method: 'post',
        data: params
    })
}

export function logout() {
    return request({
        url: '/auth/api/logout',
        method: 'post'
    })
}

export function captcha(params) {
    return request({
        url: '/auth/api/captcha',
        method: 'post',
        params
    })
}

export function loginUser() {
    return request({
        url: '/auth/api/loginUser',
        method: 'get'
    })
}


