import {createStore,applyMiddleware,combineReducers} from 'redux'
import cartReducers from './cartReducers'
function shopReducers(state=0,action:any){
    switch(action.type){
        case 'ADD':
            state+=action.payload;
            return state;
        case 'REMOVE':
            state--;
            return state;
        default:
            return state
    }
}
function listadd(state=[],action:any){
    switch(action.type){
        case 'PUSHlist'://查询搜索数据
            state=action.payload;
            return state;
        default:
            return state;
    }
}
let listdatas=[{
    symbol:"sh600004",
    name:"白云机场",
    trade:"15.340",
    pricechange:"-1.350",
    changepercent:"-8.089",
    buy:"15.330",
    sell:"15.340",
    settlement:"16.690",
    open:"16.500",
    high:"16.500",
    low:"15.050",
    volume:439615,
    amount:690745231,
    code:"600004",
    ticktime:"15:00:08"
   },{
    symbol:"sh600000",
    name:"浦发银行",
    trade:"11.350",
    pricechange:"-0.420",
    changepercent:"-3.568",
    buy:"11.350",
    sell:"11.360",
    settlement:"11.770",
    open:"11.750",
    high:"11.750",
    low:"11.320",
    volume:765347,
    amount:879151046,
    code:"600000",
    ticktime:"15:00:00"
}] //列表初始数据
function datalists(state=listdatas,action:any){
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'REMOVE'://删除
            for(let i=0;i<newState.length;i++){//循环数据 
                if(newState[i].symbol===action.payload){
                    //根据symbol判断删除的是那一条数据
                    newState.splice(i,1)
                    return [...newState]
                }
            }
            return [...newState];
        case 'ADDLIST'://添加
            for(let i=0;i<newState.length;i++){//循环判断id是否相等(类似去重)
                if(newState[i].symbol===action.payload.symbol){
                    return [...newState]
                }
            }
            newState.push(action.payload)
            return [...newState]
        default:
            return [...newState];
    }
}
let reducres=combineReducers({
    shopReducers,cartReducers,listadd,datalists
})
let store=createStore(reducres)
//@ts-ignore
window.store=store
export default store