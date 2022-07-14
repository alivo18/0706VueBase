<template>
    <ul class="todo-main">
      <Item v-for="(todo,index) in ts" :key="todo.id" :td="todo"  :index="index" ></Item>
      <!-- :updateOne="updateOne" -->
      <!-- :deleteOne="deleteOne" -->
    </ul>
</template>
<script>
import Item from '@/components/Item.vue'
export default {
    name:'',
    components:{
      Item
    },
    props:['ts'],
    // ,'updateOne'
    // ,'deleteOne'
    // mounted(){
    //   console.log(this.ts)
    //   this.ts[1].content="修改测试"
    //   console.log(this.ts)
    // }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>