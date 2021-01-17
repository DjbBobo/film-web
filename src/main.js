// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import {
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  Search,
  Col,
  Row,
  Cell,
  NavBar,
  Form,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sticky,
  Swipe, 
  SwipeItem,
  Grid, 
  GridItem,
  Lazyload,
  Image,
  Card,
  Divider
} from 'vant'


Vue.use(Button)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Col)
Vue.use(Row)
Vue.use(Cell)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sticky);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Lazyload);
Vue.use(Image);
Vue.use(Card);
Vue.use(Divider);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
