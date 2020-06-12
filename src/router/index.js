import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/',            name: 'Home',       component: Home, },
  { path: '/preGet',      name: 'preGet',     component: () => import(/* webpackChunkName: "preGet" */    '../views/preGet.vue'), },
  { path: '/lineQuery',   name: 'lineQuery',  component: () => import(/* webpackChunkName: "lineQuery" */ '../views/lineQuery.vue'), },
  { path: '/preQuery',    name: 'preQuery',   component: () => import(/* webpackChunkName: "preQuery" */  '../views/preQuery.vue'), },
  { path: '/preWrite',    name: 'preWrite',   component: () => import(/* webpackChunkName: "preWrite" */  '../views/preWrite.vue'), },

  { path: '/login',       name: 'login',      component: () => import(/* webpackChunkName: "login" */     '../components/user/login.vue'), },
  { path: '/logClose',    name: 'logClose',   component: () => import(/* webpackChunkName: "logClose" */  '../components/user/logClose.vue'), },
  { path: '/logReg',      name: 'logReg',     component: () => import(/* webpackChunkName: "logReg" */    '../components/user/logReg.vue'), },
  { path: '/preFail',     name: 'preFail',    component: () => import(/* webpackChunkName: "preFail" */   '../components/pre/preFail.vue'), },
  { path: '/preResult',   name: 'preResult',  component: () => import(/* webpackChunkName: "preResult" */ '../components/pre/preResult.vue'), },
  { path: '/navHead',     name: 'navHead',    component: () => import(/* webpackChunkName: "navHead" */   '../components/comm/navHead.vue'), },
  { path: '/navLeft',     name: 'navLeft',    component: () => import(/* webpackChunkName: "navLeft" */   '../components/comm/navLeft.vue'), },
  { path: '/navFoot',     name: 'navFoot',    component: () => import(/* webpackChunkName: "navFoot" */   '../components/comm/navFoot.vue'), },

  { path: '/addr',        name: 'addr',       component: () => import(/* webpackChunkName: "addr" */      '../components/addr.vue'), },
  { path: '/self',        name: 'self',       component: () => import(/* webpackChunkName: "self" */      '../components/self.vue'), },
  { path: '/dept',        name: 'dept',       component: () => import(/* webpackChunkName: "dept" */      '../components/dept.vue'), },
  { path: '/rowTitle',    name: 'rowTitle',   component: () => import(/* webpackChunkName: "rowTitle" */  '../components/rowTitle.vue'), },
  { path: '/single',      name: 'single',     component: () => import(/* webpackChunkName: "single" */    '../components/single.vue'), },
  { path: '/double',      name: 'double',     component: () => import(/* webpackChunkName: "double" */    '../components/double.vue'), },
  { path: '/tips',        name: 'tips',       component: () => import(/* webpackChunkName: "tips" */      '../components/tips.vue'), },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to,from,next) => {
  let islog = sessionStorage.getItem("idno");
  if( islog ){
    next();
  }else{
    if( to.path == "/"){ next(); }
    else if( to.path == "/logReg"){ next(); }
    else if( to.path == "/logClose"){ next(); }
    else{ next("/"); }
  }
})

export default router
