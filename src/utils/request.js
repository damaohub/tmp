import axios from 'axios'
import { getToken } from './auth'
import store from '../store'
import { Toast, Modal } from 'antd-mobile';


// create an axios instance
const service = axios.create({
    baseURL: "http://localhost:3000/api/", // api的base_url
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
      // Do something before request is sent
      if (store.getState().token) {
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['X-Token'] = getToken()
      }
      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )

  // respone拦截器
service.interceptors.response.use(
    response => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
      const res = response.data
      if (res.code !== 20000) {
        Toast.fail(
          res.msg,
          5
          // () => {
          //   window.location.reload()
          // }
        )
  
        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
         // window.location.replace('/login')
          Modal.alert('提示！','你已被登出，请重新登录', [
            { text: '重新登录', onPress: () => {
              window.location.replace('/login')
            }}
          ])
          // .then(() => {
          //   store.dispatch('FedLogOut').then(() => {
          //     window.location.reload()// 为了重新实例化vue-router对象 避免bug
          //   })
          // })
        }
        return Promise.reject('error')
      } else {
        return response.data
      }
    },
    error => {
      console.log('err' + error)// for debug
      Toast.fail(
        error.message,
        3,
        () => {
          //可以进入错误页面
          //window.location.reload()
        }
      )
      return Promise.reject(error)
    }
  )

export default service
