import Home from '../view/home'
import Heard from '../view/heard'
import Listen from '../view/listen'
export default {
    routes:[{
        path:'/',
        redirect:'/listen'
    },{
        path:'/home',
        component:Home
    },{
        path:'/heard',
        component:Heard
    },{
        path:'/listen',
        component:Listen
    }]
}