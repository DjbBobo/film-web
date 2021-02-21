import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/admin/api/orders/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/admin/api/orders/list',
        method: 'get',
        params
    })
}

export function save(params) {
    return request({
        url: '/admin/api/orders',
        method: 'post',
        data: params
    })
}

export function update(params) {
    return request({
        url: '/admin/api/orders',
        method: 'put',
        data: params
    })
}

export function get(id) {
    return request({
        url: '/admin/api/orders/' + id,
        method: 'get'
    })
}

export function unPayOrder() {
    return request({
        url: '/admin/api/orders/unPayOrder',
        method: 'get'
    })
}