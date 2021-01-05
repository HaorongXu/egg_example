<template>
  <div class="home">
    <div class="nav">首页</div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in lists"
        :key="item.id"
        @click="handleClick(item.id)"
      >
        <div class="list">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="create_tiem">{{ item.create_time }}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import moment from "moment";
import { List, Cell } from "vant";
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
  },
  data() {
    return {
      loading: false,
      finished: false,
      lists: [],
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
    async onLoad() {
      // 获取文章列表
      const res = await this.$http.get("/api/article/lists");
      if (res.status == 200) {
        this.loading = false;
        this.finished = true;
        res.data.data.map((item) => {
          if (item.create_time) {
            item.create_time = moment(item.create_time).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          }
        });
        this.lists = res.data.data;
      }
    },
  },
};
</script>

<style scoped>
.nav{
  height: 46px;
  line-height: 46px;
  color: #434343;
  background-color: #eee;
  padding: 0;
}
.list {
  display: flex;
  justify-content: space-between;
}
.left img {
  width: 150px;
  height: 100px;
  border-radius: 5px;
}
.left,
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  align-items: flex-start;
}
.right .title {
  font-size: 14px;
  color: #434343;
}
.create_tiem {
  font-size: 12px;
  color: #999;
}
</style>