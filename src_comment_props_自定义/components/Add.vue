<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addc">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "",
  // props:['AC'],
  data() {
    return {
      username: "",
      content: "",
    };
  },
  methods: {
    addc() {
      // 拿到用户输入的数据
      let { username, content } = this;
      if (username.trim() && content.trim()) {
        // 把数据给变为一个对象
        let id=Date.now()
        let obj = {
          id,
          username,
          content,
        }
        // 把数据给添加到comments数组当中
        // 数据在哪里操纵数据的方法就要定义在哪里，哪里需要操纵树，我们就把操纵数据的方法传递过来，让其调用
        // 在这里我们把App当中操纵添加评论的方法addComment传递给Add这个组件去调用添加评论
        // this.AC(obj)

        this.$emit('AC',obj)
      } else {
        alert("请输入合法的用户名和内容")
      }
      console.log(this)
      this.username=""
      this.content=""
    },
  },
};
</script>
<style scoped></style>
