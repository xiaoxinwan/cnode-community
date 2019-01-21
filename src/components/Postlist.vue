<template>
  <div class="topic_list">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <!-- 帖子列表 -->
    <div class="topic_inner" v-else>
      <ul>
        <li>
          <div class="topic_bar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="list in topiclists" :key="list.id">
          <!-- 头像 -->
          <img :src="list.author.avatar_url">
          <!-- 回复/访问 -->
          <span class="topic_count">
            <span class="reply_count">{{list.reply_count}}</span>
            /{{list.visit_count}}
          </span>
          <!-- 帖子分类 -->
          <span
            :class="[{sign_good: (list.good=== true),sign_top:(list.top===true),topic_item: (!list.good && !list.top)}]"
          >
            <span>{{list | tabFormatter}}</span>
          </span>
          <!-- 标题 -->
          <span class="topic_title">{{list.title}}</span>
          <span class="topic_last_reply">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
/* 
api: https://cnodejs.org/api/v1/topics
参数分析：
  1. 头像： author.avatar_url
  2. 回复量/浏览量： reply_count / visit_count
  3. 帖子类型： tab
  4. 标题：tile
  5. 时间：last_reply_at
*/

<script>
export default {
  name: "Postlist",
  data() {
    return {
      isLoading: false,
      topiclists: []
    };
  },
  beforeMount() {
    this.isLoading = true;
    this.getLists();
  },
  methods: {
    getLists() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          this.isLoading = false;
          this.topiclists = res.data.data;
        });
    }
  }
};
</script>
<style scoped>
img {
  width: 30px;
  height: 30px;
}
.topic_list {
  background-color: rgb(221, 220, 221);
}
.topic_list img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 3px;
  cursor: pointer;
}
.topic_inner {
  padding-top: 15px;
}

.topic_bar {
  height: 20px;
  background: rgb(245, 244, 245);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
}
.topic_bar span {
  font-size: 14px;
  color: rgb(128, 189, 1);
  line-height: 20px;
  margin: 0 10px;
  cursor: pointer;
}
.topic_bar span:hover {
  color: #9e78c0;
}
.topic_bar span.active {
  background: #75b406;
  color: #fff;
  padding: 3px;
  border-radius: 3px;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1095px;
  margin: 0 auto;
}
ul li:not(:first-child) {
  padding: 9px;
  font-size: 16px;
  font-family: "Helvetica Neue", "Helvetica Neue", "Luxi Sans", "DejaVu Sans",
    Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: #fff;
  color: #333;
  border-top: 1px solid #f0f0f0;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}
ul li:not(:first-child):hover {
  background: #f5f5f5;
}
ul li:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.topic_count {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  color: rgb(180, 180, 180);
}
.topic_count .reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.sign_good,
.sign_top {
  background: #75b406;
  color: #fff;
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 12px;
  margin-right: 5px;
  text-align: center;
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
  margin: 6px 0;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
.loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
