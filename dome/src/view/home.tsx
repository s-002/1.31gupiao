import React,{Component} from 'react'
import request from '../utils/request'
import {connect} from 'react-redux';
import {withRouter,RouteComponentProps} from 'react-router-dom'
interface PropsType{
    name:string
    num:number
    add:Function
}
class Home extends Component<RouteComponentProps&PropsType>{
    render(){
        return (
            <div>
                <h1>Home</h1>
                <h2>{this.props.num}</h2>
                <button onClick={()=>{
                    this.props.add(10)
                }}>+</button>
                <button onClick={()=>{
                    this.props.history.push('/heard')
                }}>跳转</button>
            </div>
        )
    }
    async componentDidMount(){
        // let res=await request.get('/menulist')
        // console.log(res)
    }
}
const mapStateToProps=(state:any)=>{
    return {
        num:state.shopReducers
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return {
        add(num:number){
            dispatch({type:'ADD',payload:num}) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)) 