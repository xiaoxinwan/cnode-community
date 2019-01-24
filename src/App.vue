<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>

      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  components: {
    Header,Postlist
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.main{
  background-color: #d8d7d8;
  display: flex;
  justify-content: space-around;
}
</style>
