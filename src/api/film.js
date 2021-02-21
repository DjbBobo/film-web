import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/admin/api/film/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/admin/api/film/list',
        method: 'get',
        params
    })
}

export function filmTypeList(params) {
    return request({
        url: '/admin/api/film/filmTypeList',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/admin/api/film/' + id,
        method: 'get'
    })
}