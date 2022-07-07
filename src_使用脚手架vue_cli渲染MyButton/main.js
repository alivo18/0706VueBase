// /*eslint-disable no-unused-vars*/
// 局部禁用当前文件的该类型的错误
// import Vue from 'vue'
import Vue from 'dist/vue.esm.js';
import App from '@/App'

// new Vue({
//   el:'#app',
//   components:{
//     App,
//   },
//   template:'<App />'
// })

// You are using the runtime-only build of Vue where the template compiler is not available.
// Either pre-compile the templates into render functions, or use the compiler-included build.

// 我们现在默认导入的Vue是一个runtime-only版本的Vue，这个版本的Vue不带解析器

// 这个使用render函数的为什么可以使用runtime-only的版本的Vue
new Vue({
  el:'#app',
  render: h => h(App)
  //这个函数和上面写的功能差不多
  // 1.定义并注册了App
  // 2.使用了APP组件
  // 3.比上面的写法多做了一件事儿
  // 就是寻找解析器的loader->package.json->devDependencies->vue-template-compiler
})

// 以后我们要使用的是下面这种
// 下面打包的文件项目体积小