import request from '@/utils/authRequest'

export function login(params) {
    return request({
        url: '/api/login',
        method: 'post',
        data: params
    })
}

export function logout() {
    return request({
        url: '/api/logout',
        method: 'post'
    })
}

export function captcha(params) {
    return request({
        url: '/api/captcha',
        method: 'post',
        params
    })
}

export function loginUser() {
    return request({
        url: '/api/loginUser',
        method: 'get'
    })
}


