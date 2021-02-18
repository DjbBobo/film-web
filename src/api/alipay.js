import request from '@/utils/request'

export function create(orderId) {
    return request({
        url: '/api/alipay/create/' + orderId,
        method: 'get'
    })
}


