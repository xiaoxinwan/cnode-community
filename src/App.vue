<template>
  <div id="app">
    <Header></Header>
    <div>
      <Postlist></Postlist>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Postlist from "./components/Postlist.vue";
export default {
  components: { Header, Postlist }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
