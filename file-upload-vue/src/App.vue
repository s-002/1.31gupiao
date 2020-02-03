<template>
  <div id="app">
    <input type="file" @change="handleFileChange">
    <button @click="()=>{handleUpload()}">上传</button>
  </div>
</template>
<script>
import request from './until/request'
const SIZE=1024*1024*2;
export default {
  data(){
    return {
      container:{
        file:null//文件
      },
      data:[]
    }
  },
  methods:{
    handleFileChange(e){
      const [file]=e.target.files;
      window.console.log(file)
      if(file){
        this.container.file=file
      }
    },
    //分片
    createFileChunk(file,size=SIZE){
      const fileChunkList=[]
      let cur=0;
      while(cur<file.size){
        fileChunkList.push({file:file.slice(cur,cur+size)})
        cur+=size
      }
      return fileChunkList
    },
    ///上传
    async uploadChunks(){
      let requestList=this.data.map(({chunk,hash})=>{
        const formData=new FormData()
        formData.append('chunk',chunk)
        formData.append('hash',hash)
        formData.append('filename',this.container.file.name)
        return {formData}
      }).map(async({formData})=>request({
        url:'http://localhost:3000',
        data:formData
      }))
      //并发上传
      await Promise.all(requestList)
    }
  },

  //长传
  async handleUpload(){
    window.console.log(this.container.file)
    if(!this.container.file)return;

    let formData=new FormData();
    formData.append('filename',this.container.file)

    const fileChunkList=this.createFileChunk(this.container.file)

    this.data=fileChunkList.map(({file},index)=>({
      chunk:file,
      hash:this.container.file.name+'-'+index
    }))
    this.uploadChunks()
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
