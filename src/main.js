import Vue from 'vue'
import i18n from '@i18n/index'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getModule } from '@utils/index'

Vue.config.productionTip = false

// 获取directives文件夹下的所有的指令
const directives = getModule(require.context('./directives', true, /\.js$/))
// 循环导入app中
for (const key in directives) {
  Vue.directive(key, directives[key])
}

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
