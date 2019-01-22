<template>
  <div>
    <Header></Header>
    <div>
      <Article></Article>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Article from "@/components/Article.vue"  
export default {
  name: 'TopicDetail',
  components: {Header, Article}
}
</script>
