let request=function({url,method='post',data,headers={}}){
    return new Promise(resolve=>{
        //1:创建一个XMLHttpRequest
        const xhr=new XMLHttpRequest();
        //xhr .open () //打开一个连接
        xhr.open(method,url)
          //处理了请求头
        Object.keys(headres).forEach(key=>xhr.setRequestHeader(key,headers[key]))
        //发送请求
        xhr.send(data)
        //接收请求结果
        xhr.onload=e=>{
            resolve({
                data:e.target.response
            })
        }
    })
}
//axios 底层 XMLHttpRequest
export default request