import Vue from 'vue';
import jquery from 'jquery';
import App from './App.vue';
import {Autocomplete} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {numberToCurrencyNo} from '@/utils/numberToCurrency';
// 配置全局过滤器，实现数字千分位格式

Vue.config.productionTip = false;
Vue.use(Autocomplete);
Vue.filter('numberToCurrency', numberToCurrencyNo);
Vue.prototype.$ = jquery;

new Vue({
  render: (h) => h(App),
  beforeCreate(){
  },
}).$mount('#app')
