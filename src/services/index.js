import request from '../utils/request';



export function orders() {
    return request({
        url: 'pending-orders',
        method: 'post'
        
    })
}