import Vue from 'vue'
import Router from 'vue-router'
import tab1 from '@/components/tab1'
import tab2 from '@/components/tab2'
import tab3 from '@/components/tab3'
import TeacherInformation from '@/components/TeacherInformation'
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
      path:'/teacherInfo/:id',
      name:'teacherInfo',
      component: TeacherInformation
    },
    {
      path: '/tab2',
      name: 'tab2',
      component: tab2
    },
    {
      path: '/tab3',
      name: 'tab3',
      component: tab3
    },
    {
      path: '/tab4',
      name: 'tab4',
      component: tab1
    }
  ]
})
