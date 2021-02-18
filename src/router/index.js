import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    const token = getToken()
    if (!token && token === undefined) {
      next('/login')
    }
    next()
  }
  next()
})

export default router