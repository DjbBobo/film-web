import axios from 'axios'
import { Notify } from 'vant';
import router from '../router'
import { getToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: process.env.ADMIN_ROOT, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token && token !== 'undefined') {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (res == 'token无效') {
      router.push('/login')
      return
    }
    // if the custom code is not 100, it is judged as an error.
    if (res.code !== 200) {
      Notify({ type: 'danger', message: res.msg || 'Error check your token or method' });
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Notify({ type: 'danger', message: error.message });
    return Promise.reject(error)
  }
)

export default service.request
