import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import test from '../components/test.vue'
import imgTest from '../components/img.vue'

Vue.use(Router)

export default new Router({
	routes: [
	    {
	      path: '/',
	      name: 'HelloWorld',
	      component: HelloWorld
	    },
	    {
	      path: '/test',
	      name: 'test',
	      component: test
	    },
	    {
	    	path: '/imghaha',
	    	name: 'imghaha',
	    	component: imgTest
	    }
	]
});


