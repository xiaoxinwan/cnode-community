<template>
  <div class="pagination">
    <button @click="changePage">首页</button>
    <button @click="changePage">上一页</button>
    <button v-if="judge">......</button>
    <button v-for="(btnpage,index) in pages" @click="changePage(btnpage)" :class="[{currentPage: btnpage === currentPage},'pagebtn']" :key="index">{{btnpage}}</button>
    <button @click="changePage">下一页</button>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Pagination',
  data(){
    return {
      pages: [1,2,3,4,5,'......'],
      currentPage: 1,
      judge: false
    }
  },
  methods:{
    changePage(page){
      if(typeof page !== 'number'){
        switch(page.target.innerText){
          case '上一页':
            $('button.currentPage').prev().click()
            break;
          case '下一页':
            $('button.currentPage').next().click()
            break;
          case '首页':
            this.pages = [1,2,3,4,5,'......']
            this.changePage(1)
            break;
          default:
            break;
        }
        return
      }
      this.judge = page>4 ? true : false;

      this.currentPage = page
      if(page === this.pages[4]){
        this.pages.shift() // 移除第一个元素
        this.pages.splice(4,0,this.pages[3]+1) // 添加最后一个
      }else if(page === this.pages[0] && page !== 1){
        this.pages.unshift(this.pages[0]-1)
        this.pages.splice(5,1)
      }
      this.$emit('handle', this.currentPage)
    }
  }
}
</script>
<style scoped>
 .pagination {
    padding-top: 20px;
    padding-bottom: 100px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    display: flex;
    justify-content: center;
  }
  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 40px;
  }
  .pagebtn {
    position: relative;
    bottom: 1px;
  }
  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>
