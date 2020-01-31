import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

interface PropsTypes {
    routes:Array<any>
}

export default class RouterView extends Component<PropsTypes> {
    render(){
        let routes=this.props.routes;
        return (
            <Switch>
                {
                    routes.map((item,index)=>{
                        if(item.redirect){
                            return <Redirect key={index} exact from={item.path} to={item.redirect}></Redirect>
                        }else{
                            return <Route path={item.path} key={index} render={(props)=>{
                                if(item.children){
                                    return <item.component routes={item.children} {...props}></item.component>
                                }
                                return <item.component {...props}/>
                            }}></Route>
                        }
                    })
                }
            </Switch>
        )
    }
}