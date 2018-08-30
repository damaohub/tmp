
import { setToken } from '../utils/auth'
import {loginByUsername} from '../services/user'


export const InitToken =  {
   token:  null
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
   return new Promise((resolve, reject) => {
        loginByUsername(userInfo).then(
            res => {
                dispatch(a_setToken(res.data.token))
                setToken(res.data.token)
                resolve()
            }).catch(
                e => { reject(e) }
            )
            
    })


    
}