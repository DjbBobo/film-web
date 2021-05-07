import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/admin/api/sessionSeat/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/admin/api/sessionSeat/list',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/admin/api/sessionSeat/' + id,
        method: 'get'
    })
}

export function updateBatch(data) {
    return request({
        url: '/admin/api/sessionSeat/updateBatch',
        method: 'post',
        data
    })
}

export function lockSessionSeatList() {
    return request({
        url: '/admin/api/sessionSeat/lockSessionSeatList',
        method: 'get'
    })
}