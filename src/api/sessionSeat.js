import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/api/sessionSeat/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/api/sessionSeat/list',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/api/sessionSeat/' + id,
        method: 'get'
    })
}