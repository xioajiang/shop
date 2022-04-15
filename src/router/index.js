/*
* 路由器提供者
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'


Vue.use(VueRouter)



const routes=[
    {
        path:'/msite',
        component:MSite,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/login',
        component:Login
    }
]
const router=new VueRouter({
    routes
})
export default router