import axios from 'axios'
import { Notify } from 'vant';
import router from '../router'
import { getToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_ROOT, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // const token = getToken()
    config.headers.userId = '1361258452256575490'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzYxMjU4NDUyMjU2NTc1NDkwIiwiaWF0IjoxNjEzOTE4MDI4LCJleHAiOjE2Mzk4MzgwMjh9.ERsXr11GiZM7Sit2Fh9rOcNFVXY1hObobI0PY4ZHUQswZ5UmaAYcr7fXx_PckPsaChJiAkUb3Ke8tTuiBbyZSQ'
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
    if (res.code == 200401) {
      Notify({ type: 'danger', message: '请登陆' });
      router.push('/login')
      return res
    }
    // if the custom code is not 100, it is judged as an error.
    if (res.code !== 200) {
      Notify({ type: 'danger', message: res.message || 'Error check your token or method' });
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
