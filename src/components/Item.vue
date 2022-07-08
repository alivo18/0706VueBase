<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteC">删除</a>
    </div>
    <p class="user">
      <span>{{ lastcom.username }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ lastcom.content }}</p>
  </li>
</template>
<script>
export default {
  name: "",
  props: ["lastcom","DC1","in2"],
  methods:{
    deleteC(){
      if(confirm('确定要删除吗?')){
        console.log(this.in2)
        this.DC1(this.in2)
      }
    }
  }
};
</script>
<style scoped>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
