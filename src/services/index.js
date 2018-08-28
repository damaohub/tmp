import request from '../utils/request';



export function orders() {
    return request({
        url: 'orders',
        method: 'post'
        
    })
}