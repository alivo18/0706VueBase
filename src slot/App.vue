<template>
    <div>
        <Child>
            <template>
                <button>点我</button>
            </template>
            <template slot="xxx">
                <a href="https://www.baidu.com">点我去百度</a>
            </template>
        </Child>

        <Child>
            <template>
                <p>pp</p>
            </template>
            <template slot="xxx">
                <span>我是fengjue</span>
            </template>
        </Child>

        <!-- 作用域插槽 -->
        <!-- 数据是由父组件传给子组件去展示的子组件展示数据的过程中，数据的结构是由父组件说了算的 -->
        <!-- 如果是isOver为true的前面有√，并且背景颜色为hotpink-->
        <ScoChild :todos="todos">
            <!-- <template slot-scope="aa"> -->
            <template slot-scope="{todo}">
                <!-- <span v-if="aa.todo.isOver" style="color:hotpink">√{{aa.todo.content}}</span> -->
                <span v-if="todo.isOver" style="color:hotpink">√{{todo.content}}</span>
            </template>
        </ScoChild>
    </div>
</template>
<script>
import Child from '@/components/Child'
import ScoChild from '@/components/ScoChild'
export default {
  components: { Child,ScoChild },
    name:'',
    data(){
        return{
            todos:[
            {id:1,content:"学习",isOver:false},
            {id:2,content:"锻炼",isOver:true},
            {id:3,content:"家务",isOver:true}
        ]
        }
        
    }
}
</script>
<style scoped>

</style>