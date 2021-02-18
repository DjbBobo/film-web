import request from '@/utils/request'

export function cityList(params) {
    return request({
        url: '/api/district/cityList',
        method: 'get',
        params
    })
}


export function list(params) {
    return request({
        url: '/api/district/list',
        method: 'get',
        params
    })
}

