import request from '@/utils/request'

export function create(orderId) {
    return request({
        url: '/admin/api/alipay/create/' + orderId,
        method: 'get'
    })
}

export function createWeb(orderId) {
    return request({
        url: '/admin/api/alipay/createWeb/' + orderId,
        method: 'get'
    })
}

export function testPay(orderId) {
    return request({
        url: '/admin/api/alipay/testPay/' + orderId,
        method: 'get'
    })
}


