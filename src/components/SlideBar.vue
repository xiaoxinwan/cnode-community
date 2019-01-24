<template>
  <div class="slidebar">
    <div class="author">
      <div class="topbar">
        <div>作者</div>
      </div>
      <div class="author_score">
        <div>
          <router-link :to="{name:'user',params:{loginname: authorInfo.loginname}}">
            <img :src="authorInfo.avatar_url" alt>
            {{authorInfo.loginname}}
          </router-link>
        </div>

        <span>积分: {{authorInfo.score}}</span>
      </div>
    </div>
    <div class="author_topic">
      <div class="topbar">
        <div>作者其他话题</div>
      </div>
      <ul>
        <li v-for="topic in topicLimitBy5" :key="topic.id">
          <router-link
            :to="{name:'topic_detail',params:{id:topic.id, loginname: topic.author.loginname}}"
          >{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="author_reply">
      <div class="topbar">
        <div>作者回复的问题</div>
      </div>
      <ul>
        <li v-for="reply in replyLimitBy5" :key="reply.id">
          <router-link
            :to="{name:'topic_detail',params: {id: reply.id,loginname: reply.author.loginname}}"
          >{{reply.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import url from "../module/api.js";
export default {
  name: "SlideBar",
  data() {
    return {
      authorInfo: {}
    };
  },
  computed: {
    topicLimitBy5() {
      if (this.authorInfo.recent_topics) {
        return this.authorInfo.recent_topics.slice(0, 5);
      }
    },
    replyLimitBy5() {
      if (this.authorInfo.recent_replies) {
        return this.authorInfo.recent_replies.slice(0, 5);
      }
    }
  },
  methods: {
    getauthorInfo() {
      this.$axios
        .get(url.userInfo + this.$route.params.loginname)
        .then(res => {
          if (res.data.success === true) {
            this.authorInfo = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getauthorInfo();
  }
};
</script>
<style scoped>
.slidebar {
  width: 328px;
  margin: 15px;
  display: block;
  float: right;
  margin-right: 280px;
}
.author,
.author_topic,
.author_reply {
  background: #fff;
  margin-bottom: 15px;
}
.author_score {
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
}
.author_score span {
  padding-top: 5px;
}
.author img {
  width: 48px;
  height: 48px;
}
.topbar {
  background: #f5f4f5;
  height: 40px;
  line-height: 40px;
  padding-left: 8px;
  border-radius: 3px;
  color: #444;
}
ul {
  padding: 10px 8px;
  color: #778087;
}
li {
  padding: 4px 0;
}
</style>
