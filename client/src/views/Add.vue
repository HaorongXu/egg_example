<template>
  <div>
    <van-uploader
      :max-count="1"
      v-model="fileList"
      :after-read="afterRead"
    ></van-uploader>
    <van-cell-group>
      <van-field
        label="文章标题"
        placeholder="文章标题"
        v-model="title"
      ></van-field>
      <van-field
        label="文章简介"
        placeholder="文章简介"
        v-model="summary"
      ></van-field>
      <van-field
        label="文章内容"
        placeholder="文章内容"
        v-model="content"
        type="textarea"
      ></van-field>
    </van-cell-group>
    <van-button type="primary" size="small" @click="handleAdd" class="add"
      >提交</van-button
    >
  </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button } from "vant";
export default {
  data() {
    return {
      fileList: [],
      title: "标题",
      summary: "简介",
      content: "内容",
      img: "",
    };
  },
  methods: {
    afterRead(info) {
      console.log(info);
      this.img = info.content;
    },
    handleAdd() {
      const { title, summary, content, img } = this;
      const data = {
        title,
        summary,
        content,
        img,
      };
      console.log(data);
    },
  },
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
  },
};
</script>

<style scoped>
.add {
  position: absolute;
  height: 36px;
  font-size: 14px;
  left: 15px;
  bottom: 80px;
  width: calc(100% - 30px);
  margin-top: 30px;
}
</style>