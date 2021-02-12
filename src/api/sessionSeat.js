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

export function updateBatch(data) {
    return request({
        url: '/api/sessionSeat/updateBatch',
        method: 'post',
        data
    })
}