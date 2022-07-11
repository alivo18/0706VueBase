<template>
  <div>
    <Header></Header>
    <div class="container">
      <!-- <Add :AC="addComment"></Add> -->
      <!-- 自定义事件的麻烦写法 -->
      <!-- <Add ref="aa"></Add> -->
      <!-- 自定义事件的简便写法 -->
      <Add @AC="addComment"></Add>
      <List :coms="comments" :DC="deleteComment"></List>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
    name:'',
    components:{
    Header,
    Add,
    List
},
// mounted(){
//   // 对Add组件对象绑定自定义事件
//   this.$refs.aa.$on('heihei',this.addComment)
// },
mounted(){
console.log(this)
  
},
data(){
  return{
    comments:[
      {id:1,content:'vue入门',username:'王林'},
      {id:2,content:'vue熟悉',username:'韩立'},
      {id:3,content:'vue精通',username:'小山'},
    ]
  }
},
methods:{
  addComment(c1){
    this.comments.unshift(c1)
  },
  deleteComment(c2){
    this.comments.splice(c2,1)
  }
}
}
</script>
<style scoped>

</style>