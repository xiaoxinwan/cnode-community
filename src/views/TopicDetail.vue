<template>
  <div v-cloak>
    <Header></Header>
    <div class="content">
      <Article></Article>
      <SlideBar></SlideBar>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Article from "@/components/Article.vue"
import SlideBar from "@/components/SlideBar.vue"

export default {
  name: 'TopicDetail',
  components: {Header, Article,SlideBar}
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
.content{
  background: #d8d7d8;
  display: flex;
  justify-content: center;
}

</style>

