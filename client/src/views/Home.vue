<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" @click="handleClick(item.id)">
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
      list: [],
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
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        this.finished = true;
        this.list = [
          {
            id: 1,
            title: " Flutter 从入门到进阶，实战携程网APP",
            img:
              "http://img2.sycdn.imooc.com/szimg/5fc06907096beb4305400304.png",
            summary: "从入门到进阶带你快速解锁 Flutter 新版热门技术",
            content: "从入门到进阶带你快速解锁 Flutter 新版热门技术,体系化讲解",
            create_time: "2020-12-23 17:37:20",
          },
        ];
      }, 1000);
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 20px;
}
.list {
  display: flex;
  justify-content: space-between;
}
.left,
img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  justify-self: space-between;
}
.right {
  margin-left: 15px;
}
.right .title {
  font-size: 18px;
}
.create_tiem {
  font-size: 12px;
  color: #999;
}
</style>