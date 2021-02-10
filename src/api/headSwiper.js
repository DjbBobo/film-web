import request from '@/utils/request'

export function list(params) {
    return request({
        url: '/api/headSwiper/list',
        method: 'get',
        params
    })
}