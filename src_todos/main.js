import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip=false

new Vue({
  beforeCreate(){
    // console.log(Vue.prototype)
    // console.log(this)
    // 配置总线，给总线绑定一个事件deleteOne
    Vue.prototype.$bus = this
  },
  el:'#app',
  render:h=>h(App)
})
