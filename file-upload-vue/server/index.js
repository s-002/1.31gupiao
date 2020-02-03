let http=require('http');
let path=require('path');
let multiparty=require('multiparty')//接受 文件的包
let fse=require('fs-extra')//处理文件目录  存储 创建文件夹

//node服务器
///1.搭建server服务器
const server=http.createServer()

//监听请求
server.on('request',async(req,res)=>{
    res.setHeader("Access-control-Allow-Origin", '*');//*:任何域名都可以访问后台
    res.setHeader("Access-control-Allow-Headers", '*');

    //接受文件 formData
    if(req.url==='/'){
        const multipart=new multiparty.Form()
        multiparty.parse(req,async(err,fields,files)=>{
            if(err){//错误
                return
            }
            const [chunk]=files.chunk;
            const [hash]=fields.hash;

            const [filename]=fields.filename
            //把当前的文件  放到一个位置 ../target中
            const chunkDir=path.resolve(path.resolve(__dirname,'..','target'),filename);
            //文件夹是否存在
            if(!fse.pathExistsSync(chunkDir)){
                await fse.mkdirs(chunkDir)//创建文件夹之后 再往后操作
            }
            //存储到这个文件夹中
            await fse.move(chunk.path,`${chunkDir}/${hash}`)
            res.end('received file success')
        })
    }
    if(req.url==='/merge'){
        //合并
    }
})
server.listen(3000,()=>{
    console.log('正在监听端口号 3000')
})