import { combineReducers } from 'redux'
import { InitToken } from './actions'

const token = (state = InitToken.token, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token
        default:
            return state
    }
}


const todoApp = combineReducers({
    token
  })
  
  export default todoApp