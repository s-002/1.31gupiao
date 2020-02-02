import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom'
interface propsdata{
    idsymbol:any
}
class ComBottom extends Component<RouteComponentProps&propsdata>{
    state={
        idsymbol:this
    }
    render(){
        return (
            <div>
                <h5>Apple Inc.</h5>
                {console.log(this.state.idsymbol.props.idsymbol)}
                <div>
                    <p>
                        <span style={{color:'#ccc'}}>OPEN</span>
                        <span>{this.state.idsymbol.props.idsymbol.open}</span>
                    </p>
                    <p>
                        <span style={{color:'#ccc'}}>HIGH</span>
                        <span>{this.state.idsymbol.props.idsymbol.high}</span>
                    </p>
                    <p>
                        <span  style={{color:'#ccc'}}>LOW</span>
                        <span>{this.state.idsymbol.props.idsymbol.low}</span>
                    </p>
                    <p>
                        <span  style={{color:'#ccc'}}>VOL</span>
                        <span>{this.state.idsymbol.props.idsymbol.volume}</span>
                    </p>
                </div>
            </div>
        )
    }
} 
export default withRouter(ComBottom)