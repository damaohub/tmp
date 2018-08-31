import { combineReducers } from 'redux'
import { InitToken } from '../actions'

const token = (state = InitToken.token, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token
        default:
            return state
    }
}

const orders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER':
            return action.orders
        default:
            return state
    }
}

const todoApp = combineReducers({
    token,
    orders
  })
  
export default todoApp