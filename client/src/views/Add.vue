<template>
  <div class="main">
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
import { Uploader, CellGroup, Field, Button, Toast } from "vant";
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
  mounted() {},
  methods: {
    afterRead(info) {
      console.log(info);
      this.img = info.content;
    },
    async handleAdd() {
      const { title, summary, content, img } = this;
      if(!img){
        this.$toast('请上传图片');
        return false
      }
      const data = {
        title,
        summary,
        content,
        img,
      };
      const res = await this.$http.post("/article/create", data);
      if (res) {
        console.log(res);
        this.$toast.success(res.data.msg);
        this.$router.push('/')
      }
    },
  },
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
};
</script>

<style scoped>
.main{
  padding-top: 30px;
}
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