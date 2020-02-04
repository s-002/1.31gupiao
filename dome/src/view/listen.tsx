import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux'
import ComBottom from '../component/bottomview'
import '../style/listen.css'
// import request from '../utils/request'
interface Propsdata{
    listdatas:Array<any>,
    pushlist:Function,
    datalist:Array<any>,
}
class Listen extends Component<RouteComponentProps&Propsdata>{
    state={
       id:{}
    }
    render(){
        return(
            <div style={{height:'631px'}}>
                <div className='topdiv'>
                    <button onClick={()=>{
                        this.props.history.goBack()
                    }}>返回</button>
                    <span>Listen</span>
                    <button>请求</button>
                </div>
                <div className='content'>
                    {
                        this.props.listdatas.map((item,index)=>{
                            return <div className='dl' key={index} onClick={()=>{
                                console.log(this)
                                this.setState({
                                    id:item
                                })
                            }}>
                                    <p>{item.name}</p>
                                    <p>{item.trade}<span>{item.pricechange}%</span></p>
                            </div>
                        })
                    }
                </div>
                <ComBottom idsymbol={this.state.id}/>
            </div>
        )
    }
    
}
const mapStateToProps=(state:any)=>{
    // console.log(state)
    return {
        listdatas:state.datalists
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return {
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Listen) )