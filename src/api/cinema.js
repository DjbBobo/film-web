import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/api/cinema/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/api/cinema/list',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/api/cinema/' + id,
        method: 'get'
    })
}