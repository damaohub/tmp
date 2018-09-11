
import { getToken, setToken } from '../utils/auth'
import {loginByUsername, getUser} from '../services/user'
import { orders, historyOrders, complainList, billList, withdraw } from '../services/index'

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
                resolve(res)
            }).catch(
                e => { reject(e) }
            )
            
    }) 
}



export const setUser = (userInfo) => {
    return {
        type: 'SET_USER',
        userInfo
    }
}

export const getUserHandel = () => dispatch => {
    return new Promise((resolve, reject) => {
        getUser().then(
             res => {
                 dispatch(setUser(res.data))
                 resolve(res)
             }).catch(
                e => {
                    console.log(e)
                    reject(e)
                }
             )
             
     }) 
 }

 



export const requestOrder1= (orders) => {
    return {
        type: 'REQUEST_ORDER2',
        orders

    }
}
export const requestOrder2 = (orders) => {
    return {
        type: 'REQUEST_ORDER2',
        orders

    }
}

export const requestOrder3 = (orders) => {
    return {
        type: 'REQUEST_ORDER3',
        orders

    }
}

export const requestOrder4 = (orders) => {
    return {
        type: 'REQUEST_ORDER4',
        orders

    }
}

export const requestOrder5 = (orders) => {
    return {
        type: 'REQUEST_ORDER5',
        orders

    }
}

export const ordersHandel = (status) => dispatch => {
    return new Promise((resolve, reject) => {
        orders(status).then(
            res => {
                switch (status) {
                    case 1:
                        dispatch(requestOrder1(res.data))
                    break
                    case 2:
                        dispatch(requestOrder2(res.data))
                    break
                    case 3:
                        dispatch(requestOrder3(res.data)) 
                    break
                    case 4:
                        dispatch(requestOrder4(res.data)) 
                    break
                    case 5:
                        dispatch(requestOrder5(res.data)) 
                    break
                    default:
                    break 
                    
                }
                resolve()
            }
        ).catch(
            e => { reject(e) }
        )
    })
}




export const requestHistoryOrders = (orders) => {
    return {
        type: 'HISTORY_ORDER',
        orders

    }
}

export const historyOrdersHandel = (statusArr) => dispatch => {
    return new Promise((resolve, reject) => {
        historyOrders(statusArr).then(
            res => {
                dispatch(requestHistoryOrders(res.data))
                resolve()
            }
        ).catch(
            e => { reject(e) }
        )
    })
}


export const requestComplainList = (list) => {
    return {
        type: 'COMPLAIN_LIST',
        list

    }
}


export const complainListHandel = () => dispatch => {
    return new Promise((resolve, reject) => {
        complainList().then(
            res => {
                dispatch(requestComplainList(res.data))
                resolve()
            }
        ).catch(
            e => { reject(e) }
        )
    })
}


export const saveBillList = (list) => {
    return {
        type: 'BILL_LIST',
        list

    }
}
export const billListHandel = (page, pageSize) => dispatch => {
    return new Promise((resolve, reject) => {
        billList(page, pageSize).then(
            res => {
                dispatch(saveBillList(res.data))
                resolve(res)
            }
        ).catch(
            e => { reject(e) }
        )
    })
}


export const withdrawHandel = (value) => dispatch => {
    return new Promise((resolve, reject) => {
        withdraw(value).then(
            res => {
                dispatch(getUserHandel())
                resolve(res)
            }
        ).catch(
            e => { reject(e) }
        )
    })
}

