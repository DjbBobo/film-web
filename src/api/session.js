import request from '@/utils/request'

export function page(params) {
    return request({
        url: '/api/session/page',
        method: 'get',
        params
    })
}

export function list(params) {
    return request({
        url: '/api/session/list',
        method: 'get',
        params
    })
}

export function cinemaFilmSessions(params) {
    return request({
        url: '/api/session/cinemaFilmSessions',
        method: 'get',
        params
    })
}

export function get(id) {
    return request({
        url: '/api/session/' + id,
        method: 'get'
    })
}