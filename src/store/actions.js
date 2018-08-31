
import { getToken, setToken } from '../utils/auth'
import {loginByUsername} from '../services/user'
import { orders } from '../services/index'

export const InitToken =  {
   token: getToken() ||null
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

export const loginHandel = userInfo => dispatch => {
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



export const requestOrder = (orders) => {
    return {
        type: 'REQUEST_ORDER',
        orders
    }
}

export const ordersHandel = () => dispatch => {
    return new Promise((resolve, reject) => {
        orders().then(
            res => {
                dispatch(requestOrder(res.data))
                resolve()
            }
        ).catch(
            e => { reject(e) }
        )
    })
}