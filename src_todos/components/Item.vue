<template>
    <li @mouseenter="isShow=true" @mouseleave="isShow=false" @click="updateO" :class="{myClass:isShow}">
        <label>
        <input type="checkbox" :checked="td.isOver"   />
        <!-- 表单的绑定
          1、多个复选框一组，那么每个复选框都要写value的属性值，最终收集数据到数组
          2、单个复选框使用，此时不需要填写value值，v-model操纵的数据对应操纵的就是复选框的checked属性
         -->
        <!-- <input type="checkbox" v-model="isChecked"/> -->
        <span>{{td.content}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
    </li>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    name:'',
    props:{
      // 第二种写法，对象可以对传递过来的属性值类型进行限定
      td:Object,
      index:{
        type:Number,
        required:true
      },
      // updateOne:Function,
      // deleteOne:Function
    },
    data(){
      return{
        isShow:false
      }
    },
    // data当中不能出现this,因为一开始数据并没有加载好
    computed:{
      isChecked:{
        get(){
          return this.td.isOver
        },
        set(){
          // this.updateOne(this.index)
        }
      }
    },
    methods:{
      updateO(){
        // this.updateOne(this.index)

        PubSub.publish('heihei',this.index)
      },
      deleteO(){
        this.$bus.$emit('deleteOne',this.index)
      }
    }
}

</script>
<style scoped>
.myClass{
  background-color: skyblue;
}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>