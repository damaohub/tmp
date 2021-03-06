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

// 获取用户信息

const userInfo = (state={}, action) => {
    switch(action.type) {
        case 'SET_USER':
            return action.userInfo
        default:
            return state    
    }
}

//待付款订单
const unpayOrders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER1':
            return action.orders
        default:
            return state
    }
}

// 未接订单
const pendingOrders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER2':
            return action.orders
        default:
            return state
    }
}

//进行订单
const runningOrders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER3':
            return action.orders
        default:
            return state
    }
}

//已完成订单
const finishedOrders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER4':
            return action.orders
        default:
            return state
    }
}

//退款订单
const refundOrders = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_ORDER5':
            return action.orders
        default:
            return state
    }
}

//历史订单
const historyOrders = (state = [], action) => {
    switch (action.type) {
        case 'HISTORY_ORDER':
            return action.orders
        default:
            return state
    }
}

//申诉列表
const complainList = (state = [], action) => {
    switch (action.type) {
        case 'COMPLAIN_LIST':
            return action.list
        default:
            return state
    }
}

//订单列表
const billList = (state = [], action) => {
    switch (action.type) {
        case 'BILL_LIST':
            return state.concat(action.list)
        default:
            return state
    }
}


const todoApp = combineReducers({
    token,
    userInfo,
    unpayOrders,
    pendingOrders,
    runningOrders,
    finishedOrders,
    refundOrders,
    historyOrders,
    complainList,
    billList
})
  
export default todoApp