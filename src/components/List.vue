<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment, in1) in coms" :key="comment.id" :lastcom="comment" :DC1="DC" :in2="in1"></Item>
    </ul>
  </div>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "",
  components: {
    Item,
  },
  props: ["coms","DC"], //声明接收属性
  
};
</script>
<style scoped>
.reply {
  margin-top: 0px;
}
</style>
