<template>
  <div class="user">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <div class="userinfo" v-else>
      <section>
        <span class="home">
          <router-link :to="{name: 'home'}">主页</router-link>
        </span>
        <div class="user_container">
          <img :src="userInfo.avatar_url">
          <span>{{userInfo.loginname}}</span>
        </div>
        <p class="user_score">{{userInfo.score}}积分</p>
        <div class="github">
          <img src="../assets/github.svg">
          <span>@{{userInfo.githubUsername}}</span>
        </div>
        <p class="user_signup_time">注册时间{{userInfo.create_at | dateFormatter }}</p>
      </section>
      <div class="recent_topic">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="topic in userInfo.recent_topics" :key="topic.id">
            <!-- 头像 -->
            <router-link :to="{name:'user', params:{loginname:topic.author.loginname}}">
              <img :src="topic.author.avatar_url">
            </router-link>

            <!-- 帖子分类 -->
            <!-- 标题 -->
            <router-link :to="{name:'topic_detail', params:{id: topic.id}}">
              <span class="topic_title">{{topic.title}}</span>
            </router-link>
            <span class="topic_last_reply">{{topic.last_reply_at | dateFormatter}}</span>
          </li>
        </ul>
      </div>
      <div class="recent_reply">
        <p>最近参与的话题</p>
        <ul>
          <li v-for="reply in userInfo.recent_replies" :key="reply.id">
            <router-link :to="{name:'user', params:{loginname:reply.author.loginname}}">
              <img :src="reply.author.avatar_url">
            </router-link>

            <!-- 帖子分类 -->
            <!-- 标题 -->
            <router-link :to="{name:'topic_detail', params:{id: reply.id}}">
              <span class="topic_title">{{reply.title}}</span>
            </router-link>
            <span class="topic_last_reply">{{reply.last_reply_at | dateFormatter}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../module/api.js";

export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      userInfo: {}
    };
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$axios
        .get(url.userInfo + this.$route.params.loginname)
        .then(res => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.userInfo = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
img {
  width: 30px;
  height: 30px;
}
.home a:visited {
  text-decoration: none;
  color: #75b406;
}
.user {
  background: rgb(221, 220, 221);
  padding-bottom: 15px;
  padding-top: 15px;
  width: 70%;
  margin: 0 auto;
}
.userinfo {
  border-radius: 3px;
}
.userinfo section {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background: #fff;
}
.home {
  border-bottom: 1px solid rgb(225, 225, 225);
  height: 40px;
  line-height: 40px;
  background: #f5f4f5;
  padding-left: 5px;
}
.userinfo section img {
  width: 40px;
  height: 40px;
}
.user_container {
  padding: 10px;
  display: flex;
}
.user_container span {
  color: #778087;
  font-size: 14px;
  align-self: center;
  margin-left: 5px;
}
.user_score {
  padding-left: 10px;
}
.github {
  display: flex;
  padding: 5px 10px;
}
section .github img {
  width: 16px;
  height: 19px;
}
.github span {
  padding-left: 5px;
  font-size: 14px;
  color: #778087;
}
.user_signup_time {
  padding: 5px 10px;
  color: #778087;
}

.recent_topic,
.recent_reply {
  background: #fff;
  margin-bottom: 15px;
  border-radius: 3px;
}
.recent_reply p,
.recent_topic p {
  height: 40px;
  line-height: 40px;
  background: #f5f4f5;
  padding-left: 10px;
  color: rgb(68, 68, 68);
}

.recent_reply li,
.recent_topic li {
  padding: 10px 10px;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  height: 30px;
  vertical-align: middle;
  border-top: 1px solid #e5e5e5;
}
.recent_reply li span,
.recent_topic li span {
  padding-left: 10px;
}
.recent_reply a:visited,
.recent_topic a:visited {
  color: rgb(0, 136, 204);
}

.topic_item {
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
  background: #e5e5e5;
  color: #999;
  line-height: 28px;
  margin-right: 5px;
}
.topic_title {
  cursor: pointer;
}
.topic_last_reply {
  min-width: 50px;
  text-align: right;
  font-size: 12px;
  color: #778087;
  float: right;
  margin: 6px 0px;
}
</style>
