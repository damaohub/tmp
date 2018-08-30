import { createStore, applyMiddleware  } from 'redux'
import todoApp from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunkMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  todoApp,
  applyMiddleware(...middleware)
)



// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action



// 停止监听 state 更新
unsubscribe();

export default store