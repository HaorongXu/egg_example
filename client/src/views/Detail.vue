<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="summary">{{ detail.summary }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="img">
      <img :src="detail.img" alt="" />
    </div>
    <div class="create_time">{{ detail.create_time }}</div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      detail: {},
    };
  },
  created() {
    this.getDetailData();
  },
  methods: {
    async getDetailData() {
      this.$toast.loading({
        message: "加载中...",
      });
      const res = await this.$http.get(
        `/article/detail/${this.$route.query.id}`
      );
      this.detail = res.data.data;
      this.$toast.clear();
    },
  },
  components: {
    [Toast.name]: Toast,
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
  font-size: 24px;
  margin-bottom: 10px;
}
.detail .summary {
  padding: 20px;
  background-color: #dcdcdc;
}
.detail .content {
  text-indent: 2em;
  line-height: 200%;
}
.detail .img {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.detail .img img {
  width: 100%;
}
.detail .create_time {
  color: #999;
  font-size: 12px;
  text-align: right;
}
</style>