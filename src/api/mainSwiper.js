import request from '@/utils/request'

export function list(params) {
    return request({
        url: '/api/mainSwiper/list',
        method: 'get',
        params
    })
}