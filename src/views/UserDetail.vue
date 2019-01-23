<template>
  <div>
    <Header></Header>
    <div>
      <UserInfo></UserInfo>  
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import UserInfo from "@/components/UserInfo.vue";
export default {
  name: 'UserDetail',
  components: {
    Header,
    UserInfo
  }
};
</script>
