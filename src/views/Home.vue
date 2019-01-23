<template>
  <div v-cloak>
    <Header></Header>
    <div>
      <Postlist></Postlist>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Postlist from "@/components/Postlist.vue";

export default {
  name: 'home',
  components: {
    Header,Postlist
  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>

