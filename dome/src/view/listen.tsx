import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom';
import {listdata} from '../api/info'
import {connect} from 'react-redux'
import '../style/listen.css'
// import request from '../utils/request'
interface Propsdata{
    listdatas:Array<any>,
    pushlist:Function,
    datalist:Array<any>,
}
class Listen extends Component<RouteComponentProps&Propsdata>{
    state={
       listdatas:[{
        symbol: "sh600015",
        code: "600015",
        name: "华夏银行",
        trade: "7.400",
        pricechange: "-0.080",
        changepercent: "-1.070",
        buy: "7.400",
        sell: "7.410",
        settlement: "7.480",
        open: "7.470",
        high: "7.470",
        low: "7.380",
        volume: 291931,
        amount: 216469255,
        ticktime: "15:00:08",
        per: 4.744,
        pb: 0.565,
        mktcap: 11386545.74742,
        nmc: 9488788.12322,
        turnoverratio: 0.22767,
       }] 
    }
    render(){
        return(
            <div>
                <div className='topdiv'>
                    <button onClick={()=>{
                        this.props.history.push('/heard')
                    }}>返回</button>
                    <span>Listen</span>
                    <button onClick={()=>{
                        this.props.pushlist(this.state.listdatas)
                    }}>请求</button>
                </div>
                <div className='content'>
                    {}
                    {
                        this.props.datalist?this.props.datalist.map((item,index)=>{
                            return <div className='dl' key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.trade}<span>{item.pricechange}%</span></p>
                            </div>
                        }):''
                    }
                </div>
            </div>
        )
    }
    componentDidMount():void{
        listdata().then(res=>{//股票列表数据
            // console.log(res.data.result.data)
            this.setState({
                listdatas:res.data.result.data
            })
        })

        // function print(n:number):void{///输出0-99
        //     setTimeout(()=>{
        //         console.log(n)
        //     },1,Math.floor(Math.random()*1000));
        // }
        // for(let i=0;i<100;i++){
        //     print(i)
        // }
    }

}
const mapStateToProps=(state:any)=>{
    console.log(state)
    return {
        datalist:state.listadd
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return {
        pushlist(data:Array<any>){///储存到redux仓库
            dispatch({type:'PUSHlist',payload:data})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Listen) )