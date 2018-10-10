import Vue from 'vue'
import hello from './hello.vue'
import router from './router/router.js'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mounted : function(){
  	console.log('Hello World');
  },
  components: { hello },
  template: '<hello/>'
})
