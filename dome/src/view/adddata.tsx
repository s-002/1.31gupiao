import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
interface Propsdata{
    listdata:Array<any>,
    addlist:Function,
    sreach:Function,
    
}
class Adddata extends Component<RouteComponentProps&Propsdata>{
    state={
        ipt:'',
        newlist:[{
            symbol:'',
            name:''
        }]
    }
    sreach(){
        let {ipt}=this.state
        this.setState({
            newlist:this.props.listdata.filter((item)=>{
                return item.name.includes(ipt)
            })
        })
    }
    render(){
        return (
            <div>
                <div style={{position:'sticky',top:0,left:0,background:'#fff'}}>
                    搜索添加页 
                    <br/>
                    <input type="text" placeholder='输入关键字' value={this.state.ipt} onChange={(e)=>{this.setState({ipt:e.target.value})}}/>
                    <button onClick={()=>{
                        this.sreach()
                    }}>搜索</button>
                    <span onClick={()=>{
                        this.props.history.goBack()
                    }}>返回</span>
                </div>
                <div className=''>
                    {
                        this.state.newlist.map((item,index)=>{
                            return <div className='con' key={index} onClick={()=>{
                                this.props.addlist(item)
                                this.props.history.goBack()
                            }}>
                                    <div style={{lineHeight:'5px'}}>
                                        <p>{item.name}</p>
                                        <p>{item.symbol}</p>
                                    </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
const a=(state:any)=>{
    return {
        listdata:state.listadd
    }
}
const b=(dispatch:any)=>{
    return {
        addlist(item:any){//点击添加
            dispatch({type:'ADDLIST',payload:item})
        }
    }
}
export default connect(a,b)(withRouter(Adddata))