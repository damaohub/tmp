import request from '../utils/request';



export function loginByUsername(userInfo) {
    return request({
        url: 'login',
        method: 'post',
        data:userInfo
    })
}

export function getUser() {
    return request({
        url: 'info',
        method: 'post'
    })
}

export function getLowerCount(id) {
    return request({
        url: 'lower-count',
        method: 'post',
        data: {
            userId: id
        }
    })
}