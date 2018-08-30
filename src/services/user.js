import request from '../utils/request';



export function loginByUsername(userInfo) {
    return request({
        url: 'login',
        method: 'post',
        data:userInfo
    })
}