
import { getToken } from '../utils/auth'

export const InitToken =  {
   token: getToken() || null
}

export const a_setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        token: token
    }
}

export const a_removeToken = () => {
    return {
        type: 'REMOVE_TOKEN',
        token: null
    }
}