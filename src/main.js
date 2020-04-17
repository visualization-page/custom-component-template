import Vue from 'vue'
import App from './custom/index.vue'
import 'tcon'

Vue.config.productionTip = false

new Vue({
  render: h => h('div', { class: 'p50' }, [
    h(App, { props: { border: false, borderColor: '' } }, [
      h('p', 1),
      h('p', 2),
      h('p', 3),
      h('p', 4)
    ])
  ])
}).$mount('#app')
