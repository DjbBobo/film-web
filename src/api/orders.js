import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/api/orders/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/api/orders/list',
        method: 'get',
        params
    })
}

export function save(params) {
    return request({
        url: '/api/orders',
        method: 'post',
        data: params
    })
}

export function get(id) {
    return request({
        url: '/api/orders/' + id,
        method: 'get'
    })
}

export function unPayOrder() {
    return request({
        url: '/api/orders/unPayOrder',
        method: 'get'
    })
}