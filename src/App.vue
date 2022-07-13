<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :ts="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>
      <Footer :ts="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'',
    components:{
      Header,
      List,
      Footer
    },
    data(){
        return{
        // todos:[
          // {id:1,content:"学习",isOver:false},
          // {id:2,content:"锻炼",isOver:true},
          // {id:3,content:"家务",isOver:true}
        // ]
        todos: JSON.parse(localStorage.getItem('TODOS_KEY'))||[
          {id:1,content:"学习",isOver:false},
          {id:2,content:"锻炼",isOver:true},
          {id:3,content:"家务",isOver:true}
        ]
      }
    },
    watch:{
      todos:{
        // 代表深度监视
        // 一般监视和深度监视
        // 一般监视只能监视数组本森的数据，但是不能监视到数组内对象的数据
        // 深度监视可以见识到数组内对象数据的变化
        deep:true,
        handler(newVal,oldVal){
          // 只要todos的数据发生变化，就把变化后的数据存储到localStorage当中
          // localStorage是前端本地存储的方案，是一个小型的数据库，存储到localStorage当中的东西都会自动转化为字符串
          // localStorage当中有4个api
          // localStorage.setItem('键','值')
          // localStorage.getItem('键')
          // localStorage.removeItem('键')
          // localStorage.clear()

          // 对象数据类型转基本数据类型
          // 计算 比较 判等的时候
          // 判等的时候？判地址：转基本
          // function fn(){
          //   console.log(77777)
          // }
          // console.log([123,2,4]+100) //'123,2,4100'
          // console.log({name:'zxy'}+100) //'[object Object]100'
          // console.log(fn+100) //function fn(){console.log(77777)}100
          
          // 数组转基本 转换为字符串 带，号
          // 对象转基本 固定的'[object,Object]'
          // 函数转基本 固定的函数整体加字符串

          //不能直接存对象数据类型，因为会直接转基本，数据就丢失了
          // console.log(JSON.stringify(newVal))
          localStorage.setItem('TODOS_KEY',JSON.stringify(newVal))
        }
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      updateOne(index){
        this.todos[index].isOver = !this.todos[index].isOver
      },
      deleteOne(index){
        this.todos.splice(index,1)
      },
      updateAll(val){
        this.todos.forEach(test1=>test1.isOver=val)
      },
      deleteAll(){
        // 把符合条件的元素筛选出来，把原数组修改为这个数组
        this.todos=this.todos.filter(item=>!item.isOver)
      }
    }
}
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>