import request from '@/utils/request'

export function list(params) {
    return request({
        url: '/admin/api/headSwiper/list',
        method: 'get',
        params
    })
}