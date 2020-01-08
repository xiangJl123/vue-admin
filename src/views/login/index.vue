<template>
  <div class="login">
    登录页面
    <el-input placeholder="账号" type=“text” v-model="user_name"></el-input>
    <el-input placeholder="账号" type=“text” v-model="password"></el-input>
    <el-button @click="login">登录按钮</el-button>
  </div>
</template>
<script>
import login from "../../api/login"
import service from "../../utils/request"
import {reactive,ref,isRef,toRefs, onMounted} from "@vue/composition-api"
export default {
    name:"login",
    setup(props,context){
        // 对象类型和其他引用类型需要用reactive
        // 基础类型，需要用ref,值得注意的是，取值是需要访问  user_name.value
        const user_name = ref(" ");
        const password = ref(" ");
        // isRef 判断一个值是否是ref类型
        console.log(isRef(user_name));    // true
        //转成ref类型toRefs
        // console.log(toRefs)

        /*
         *生命周期 
         */
        onMounted(()=>{
            console.log("onMounted");
        })

        /*
        *声明函数
         */
        const login=(()=>{
            console.log("登录函数");
        })

        // 最后声明的东西需要return
        return {
            user_name,
            password,
            login
        }

    }
    
};
</script>
<style lang="scss" scoped>
.login { 
    margin: 200px auto;
    width: 400px;
    
    button {
        margin-top: 20px;
    }
    .el-input {
        width: 300px;
        display: block;
        padding-top: 10px;
    }
}

</style>
