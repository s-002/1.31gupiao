import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
import RouterView from '../router/routerview'

import {listdata} from '../api/info'
interface Propsdata{
    routes:Array<any>,
    listdatas:Array<any>,
    pushlist:Function
}
class Homeview extends Component<RouteComponentProps&Propsdata>{
    state={
        listdatas:[]
    }
    render(){
        return (
            <div>
                {/* {console.log(this.props.routes)} */}
                <RouterView routes={this.props.routes}/>
                <div className='botn'>
                    <span style={{fontSize:'15px'}}>Yahoo!</span>
                    <span style={{color:'#ccc',fontSize:'10px'}}>Market closed</span>
                    <span onClick={()=>{
                        this.props.history.push('/settings')
                    }}>设置</span>
                </div>
            </div>
        )
    }
    componentDidMount():void{
        listdata().then(res=>{//股票列表数据
            // console.log(res.data.result.data)
            this.props.pushlist(res.data.result.data)
        })
    }
}
const a=(state:any)=>{
    console.log(state)
    return {
        datalist:state.listadd
    }
}
const b=(dispatch:any)=>{
    return {
        pushlist(data:Array<any>){///储存到redux仓库
            dispatch({type:'PUSHlist',payload:data})
        }
    }
}
export default connect(a,b)(withRouter(Homeview))