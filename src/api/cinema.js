import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/admin/api/cinema/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/admin/api/cinema/list',
        method: 'get',
        params
    })
}

export function sesionCinemaList(params) {
    return request({
        url: '/admin/api/cinema/sesionCinemaList',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/admin/api/cinema/' + id,
        method: 'get'
    })
}