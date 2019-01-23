<template>
  <div v-cloak>
    <Header></Header>
    <div class="content">
      <UserInfo></UserInfo>  
      <SlideBar></SlideBar>  
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import UserInfo from "@/components/UserInfo.vue";
import SlideBar from "@/components/SlideBar.vue"
export default {
  name: 'UserDetail',
  components: {
    Header,
    UserInfo,
    SlideBar
  }
};
</script>
<style scoped>
.content{
  display: flex;
  justify-content: center;
  background: #d8d7d8;
}
[v-cloak] {
  display: none;
}

</style>
