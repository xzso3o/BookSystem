import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import index from "../views/index";
import BookUpdate from "../views/BookUpdate";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '图书管理系统',
    component: index,
    redirect:'/BookManage',
    children:[
      {
        path: '/BookManage',
        name: '查询图书',
        component: BookManage
      },
      {
        path: '/AddBook',
        name: '添加图书',
        component: AddBook
      },
      {
        path: '/update',
        name: '修改图书',
        component: BookUpdate,
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
