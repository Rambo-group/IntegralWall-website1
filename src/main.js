import Vue from 'vue'
import i18n from '@i18n/index'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
