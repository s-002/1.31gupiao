import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
interface Propsdata{
    listdatas:Array<any>,
    del:Function,
}
class Setting extends Component<RouteComponentProps&Propsdata>{
    state={
       
    }
    render(){
        return (
            <div>
                <div className='btoms'>
                    <span style={{color:'blue'}} onClick={()=>{
                        this.props.history.push('/adddatas')
                    }}>+</span>
                    <span>Settings</span>
                    <span style={{color:'blue'}} onClick={()=>{
                        this.props.history.goBack()
                    }}>Done</span>
                </div>
                <div className=''>
                    {
                        this.props.listdatas.map((item,index)=>{
                            return <div className='con' key={index}>
                                    <button onClick={()=>{
                                        this.props.del(item.symbol)
                                    }}>-</button>
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
    console.log(state)
    return {
        listdatas:state.datalists
    }
}
const b=(dispatch:any)=>{
    return {
        del(symbol:string){
            dispatch({type:'REMOVE',payload:symbol})
        }
        
    }
}
export default connect(a,b)(withRouter(Setting))