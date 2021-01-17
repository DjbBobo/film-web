import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    store.dispatch('auth/login')
    next()
  }
  next()
})

export default router