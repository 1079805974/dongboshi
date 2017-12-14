import Vue from 'vue'
import Router from 'vue-router'
import tab1 from '@/components/tab1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab1',
      component: tab1
    },
    {
      path: '/tab1',
      name: 'tab1',
      component: tab1
    },
    {
      path: '/tab2',
      name: 'tab2',
      component: tab1
    },
    {
      path: '/tab3',
      name: 'tab3',
      component: tab1
    },
    {
      path: '/tab4',
      name: 'tab4',
      component: tab1
    }
  ]
})
