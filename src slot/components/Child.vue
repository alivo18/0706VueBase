<template>
    <div>
        <h2>我是封绝</h2>
        <!-- vue内置的组件标签 -->
        <slot>
            <!-- slot内部的东西是等待着父组件使用的时候给传过来 -->
        
        </slot>
        <slot name="xxx">
            <!-- 具名插槽 -->
        
        </slot>

        <!-- 无论是具名插槽还是默认插槽，都可以写东西，也可以不写东西 -->
        <!-- 如果有传递信息，则会覆盖信息 -->
        <!-- 如果没有，则是显示默认的东西 -->
        <slot name="yyy">
            <!-- 具名插槽 -->
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </slot>
    </div>
</template>
<script>
export default {
    name:'',
}
</script>
<style scoped>

</style>