import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //이동하는 시점에 해당 화면으로 이동
    //about모듈에 포함되는 About.vue. 해당 페이지로 이동할 때 모듈이 다운받아진다
  },
  {
    path:'/menu01/exam01view',
    name: 'menu01_exam01view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam01View')
  },
  {
    path:'/menu01/exam02view',
    name: 'menu01_exam02view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam02View')
  },
  {
    path:'/menu01/exam03view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam03View'),
    children:[
      {
        path:"subacomponent",
        component:() => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent')
      },
      {
        path:"subbcomponent",
        component:() => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent')
      }
    ]
  },
  {
    path:'/menu01/exam04view',
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam04View'),
    children: [
      {
        path:"",
        component:{
          default: ()=> import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent'),
          rv1:     ()=> import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent'),
          rv2:     ()=> import(/* webpackChunkName: "menu01" */ '../components/menu01/SubCComponent')
        }
      }
    ]
  },
  {
    path:"/menu01/exam05view",
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam05View'),
  },
  {
    path:"/menu01/exam06view/:bno",
    name:"menu01_exam06view",
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam06View')
  },
  {
    path:"/menu01/exam07view",
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam07View'),
    props: {kind:"freeboard", color:"blue"}
  },
  {
    path:"/menu01/exam08view",
    name:"menu01_exam08view",
    component:() => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam08View'),
    props: (route)=>({
      kind:route.query.kind,
      color:route.query.color
    })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
