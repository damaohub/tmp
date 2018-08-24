import request from '../utils/request';



export function loginByUsername(username, password) {
    return request({
        url: 'login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}