<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add></Add>
      <List></List>
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
}
}
</script>
<style scoped>

</style>