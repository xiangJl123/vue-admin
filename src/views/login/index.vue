<template>
  <div>
    登录页面

    <el-button @click="login">登录按钮</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "登录页面"
    };
  },
  methods: {
    login: function() {}
  }
};
</script>
<style lang="scss" scoped>
button {
  margin-top: 300px;
}
</style>
