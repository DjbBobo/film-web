// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './font/iconfont.js'


import {
  Button,
  Icon,
  Tabbar,
  Dialog,
  TabbarItem,
  Search,
  Col,
  Row,
  Cell,
  CellGroup,
  NavBar,
  Form,
  Field,
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
  Divider,
  IndexBar,
  IndexAnchor,
  Tab,
  Tabs,
  DropdownMenu,
  DropdownItem,
  Skeleton,
  Tag,
  Toast,
  Overlay,
  Collapse,
  CollapseItem,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Notify,
  List,
  RadioGroup,
  Radio,
  CountDown,
  Popup
} from 'vant'
import axios from 'axios'


Vue.use(Button)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Col)
Vue.use(Row)
Vue.use(Cell)
Vue.use(Dialog)
Vue.use(CellGroup)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field);
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
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Skeleton);
Vue.use(Tag);
Vue.use(Toast);
Vue.use(Overlay);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Notify);
Vue.use(List);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(CountDown);
Vue.use(Popup);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      CITY: "正在定位",
      CITY_ID: ""
    }
  },
  mounted() {
    if (this.CITY_ID == '')
      axios.get('https://restapi.amap.com/v3/ip?output=json&key=45b7fcac6c846a0fc680b00e0afb47c9').then((res) => {
        console.log(res)
        this.CITY = res.data.city.slice(0, res.data.city.length - 1)
        this.$store
          .dispatch("district/list", { name: res.data.city })
          .then(res => {
            console.log("城市查询结果:" + res)
            if (res)
              this.CITY_ID = res[0].id;
          });
      })
  }
})
