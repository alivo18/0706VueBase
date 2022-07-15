<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="keyword" placeholder="enter the name you search"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'',
    data(){
      return{
        keyword:''
      }
    },
    methods:{
      search(){
        let keyword=this.keyword
        if(keyword.trim()){
          this.$bus.$emit('searchAjax',keyword)
        }else{
          alert('必须输入合法内容')
        }
        this.keyword=''
      }
    }
}
</script>
<style scoped>

</style>