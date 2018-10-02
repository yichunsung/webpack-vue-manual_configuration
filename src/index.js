import Vue from 'vue'
import hello from './hello.vue'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted : function(){
  	console.log('Hello World');
  	 
  },
  components: { hello },
  template: '<hello/>'
})
