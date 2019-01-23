<template>
  <div class="header">
    <router-link :to="{name: 'home'}">
      <img class="header-img" src="../assets/cnodejs_light.svg" alt="logo">
    </router-link>
    <ul>
      <router-link :to="{name: 'home'}">
        <li>首页</li>
      </router-link>
      <li>
        <a href="#">新手入门</a>
      </li>
      <li>
        <a href="#">API</a>
      </li>
      <li>
        <a href="#">关于</a>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
      <li>
        <a href="#">登录</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  background-color: rgb(68, 68, 68);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-img {
  max-width: 120px;
  padding: 10px 70px;
}
ul {
  list-style: none;
  margin-right: 70px;
}
li {
  display: inline-block;
  padding: 0 15px;
}
a {
  text-decoration: none;
  color: #cccccc;
  font-size: 13px;
}
</style>
