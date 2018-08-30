
import { getToken } from '../utils/auth'
import {loginByUsername} from '../services/user'


export const InitToken =  {
   token: getToken() || null
}

export const a_setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        token
    }
}

export const a_removeToken = () => {
    return {
        type: 'REMOVE_TOKEN',
        token: null
    }
}

export const loginAction = userInfo => dispatch => {
    new Promise((resolve, reject) => {
        loginByUsername(userInfo).then(
            res => {
                console.log(res)
                resolve()
            }).catch(
                e => reject(e)
            )
            
    })


    
}