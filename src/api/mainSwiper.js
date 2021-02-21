import request from '@/utils/request'

export function list(params) {
    return request({
        url: '/admin/api/mainSwiper/list',
        method: 'get',
        params
    })
}