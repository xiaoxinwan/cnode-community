<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>

    <div v-else class="topic_container">
      <div class="topic_header">
        <span class="topic_type">{{post | tabFormatter}}</span>
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>• 发布于{{post.create_at | dateFormatter('个') }}</li>
          <li>• 作者 {{post.author.loginname}}</li>
          <li>• {{post.visit_count}}次浏览</li>
          <li>• 来自 {{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div class="reply_content">
        <div class="reply_number">{{post.replies.length}} 回复</div>
        <div class="reply_item" v-for="(reply, index) in post.replies" :key="reply.id">
          <img :src="reply.author.avatar_url" alt>
          <div class="reply_msg_container">
            <div class="author_container">
              <span class="author_name">{{reply.author.loginname}}</span>
              <span class="author_reply_time">{{index+1}}楼•{{post.create_at | dateFormatter('个')}}</span>
              <span class="author_self" v-if="post.author.loginname === reply.author.loginname">作者</span>
            </div>
            <div class="reply_msg" v-html="reply.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false,
      post: {} // 当前页面的所有内容，所有属性
    };
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  },
  methods: {
    getArticleData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>


ul,
li {
  list-style: none;
}
a{
  text-decoration: none;
}
.loading {
  text-align: center;
  padding-top: 300px;
}
.article {
  background-color: rgb(221, 220, 221);
  word-wrap:break-word;
}
.topic_container {
  padding-top: 15px;
}
.topic_header {
  background: #fff;
  max-width: 940px;
  margin: 0 auto;
  border-radius: 3px;
}
.topic_type {
  background: #75b406;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 4px;
  line-height: 42px;
  border-radius: 3px;
}
.topic_header .topic_title {
  font-size: 22px;
  font-weight: 700;
  padding: 10px;
  display: inline-block;
  width: 75%;
  vertical-align: bottom;
}
.topic_header ul {
  margin-bottom: 10px;
}
.topic_header ul li {
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
}
.topic_header ul li:first-child {
  padding-left: 10px;
}
.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 10px 20px;

}


.markdown-text img{
  width: 98%;
}

.reply_content {
  background: #fff;
  max-width: 940px;
  margin: auto;
}
.reply_number {
  background: #f5f4f5;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  margin-top: 15px;
}
.reply_item {
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #e5e5e5;
}
.reply_item img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.reply_msg_container {
  padding-left: 10px;
}
.author_name {
  color: #666;
  font-size: 12px;
  font-weight: 700;
}
.author_reply_time {
  margin-left: 5px;
  color: #08c;
  font-size: 12px;
}
.author_self {
  background: #609a45;
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
  padding: 1px 3px;
}
.reply_msg {
  margin-bottom: 15px;
}

.markdown-text p {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    line-height: 2em;
    margin: 1em 0
}

.markdown-text>:last-child,.preview>:last-child,textarea#title {
    margin-bottom: 1em
}

.markdown-text>:first-child,.preview>:first-child {
    margin-top: 0
}

.markdown-text ul{
  list-style-type: disc;

}
.markdown-text  ul li {
    font-size: 14px;
    line-height: 2em;
    display: list-item;
    list-style-type: disc;
    margin-left: 20px;

}

.markdown-text li code,.markdown-text p code,.preview li code,.preview p code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px
}

.markdown-text img {
    cursor: pointer
}



</style>
