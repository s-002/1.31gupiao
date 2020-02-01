// import Home from '../view/home'
// import Heard from '../view/heard'
import Listen from '../view/listen'//数据列表
import Settings from '../view/settings'//设置页
import Adddata from '../view/adddata'//搜索添加页
import Homeview from '../view/homeview'//首页
export default {
    routes:[{
        path:'/',
        redirect:'/home/listen',
    },{
        path:'/home',
        component:Homeview,
        children:[{
            path:'/home/listen',//列表页
            component:Listen
        }]
    },{
        path:'/settings',
        component:Settings
    },{
        path:'/adddatas',
        component:Adddata
    }]
}
    // {
    //     path:'/home',
    //     component:Home
    // },{
    //     path:'/heard',
    //     component:Heard
    // }