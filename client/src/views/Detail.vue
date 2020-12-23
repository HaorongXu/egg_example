<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="summary">{{ detail.summary }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="create_time">{{ detail.create_time }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {
        id: 1,
        title: " Flutter 从入门到进阶，实战携程网APP",
        img: "http://img2.sycdn.imooc.com/szimg/5fc06907096beb4305400304.png",
        summary: "从入门到进阶带你快速解锁 Flutter 新版热门技术",
        content: "从入门到进阶带你快速解锁 Flutter 新版热门技术,体系化讲解",
        create_time: "2020-12-23 17:37:20",
      },
    };
  },
};
</script>

<style scoped>
.detail {
  font-size: 14px;
  padding: 20px;
  text-align: left;
}
.detail .title {
  font-size: 25px;
}
.detail .summary {
  padding: 20px;
  background-color: #dcdcdc;
}
.detail .content {
  text-indent: 2em;
  line-height: 200%;
}
.detail .create_time {
  color: #999;
  font-size: 12px;
  text-align: right;
}
</style>