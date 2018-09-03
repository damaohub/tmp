import request from '../utils/request';



export function orders(_status) {
    return request({
        url: 'orders',
        method: 'post',
        data: {
            status: _status
        }
    })
}


export function historyOrders(_status) {
    return request({
        url: 'history-orders',
        method: 'post',
        data: {
            status: _status
        }
    })
}

export function complainList() {
    return request({
        url: 'complain',
        method: 'post'   
    })
}