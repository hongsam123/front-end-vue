export default [
  {
    path:"/menu07/exam01asynccontrol",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/Exam01AsyncControl'),
  },
  {
    path:"/menu07/auth/jwtauth",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/auth/JwtAuth'),
  },
  {
    path:"/menu07/board/list",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/board/List'),
  },
  {
    path:"/menu07/board/writeform",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/board/WriteForm'),
  },
  {
    path:"/menu07/board/read",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/board/Read'),
  },
  {
    path:"/menu07/board/updateform",
    component:() => import(/* webpackChunkName: "menu07" */ '../views/menu07/board/UpdateForm'),
  }
];