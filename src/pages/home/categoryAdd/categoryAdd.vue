<template>
  <div class="categoryAdd">
    <p class="title">品类管理-添加品类</p>
    <div class="div">
      <el-form label-width="80px">
            <el-form-item label="所属分类">
                <el-select v-model="itme" placeholder="请选择">
                  <el-option
                    v-for="item in list"
                    :key="item.id"
                    :value="item.name"
                    >
                  </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="商品名称">
                <el-input style="width:30%" v-model="name" placeholder="请输入商品名称"></el-input>
            </el-form-item>

            <el-form-item label="">
                <el-button type="primary" class="btn" @click="submit">提交</el-button>
            </el-form-item>

        </el-form>
    </div>
  </div>
</template>

<script>
import { categoryList } from "@/request/http";
import { categoryadd } from "@/request/http";
export default {
  name: 'categoryAdd',
  data() { 
    return {
        list:[],
        list2:[],
        itme:{},
        name:"",
    }
  },
  methods: {
    category() {
            categoryList().then(res => {
                this.list = res.data.data;
            });
        },
        submit(){
            console.log(this.name)
            categoryadd(this.name).then(res => {
                this.$message({
                    message:res.data.data,
                    type:"message"
                })
                this.$router.push("/Category")
            });
        }
  },
  mounted() {
      this.category()
  },
 }
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.box {
  width: 100%;
  height: 100%;
  height: 92vh;
  overflow: scroll;
  background: #F3F3F3;
}
// .div{
//     @include Pd(2rem 2rem 5rem 8.5rem);
// }
// .title {
//     @include FlexSpace();
//     @include FontOnly(2rem);
//     @include Pd(1rem 2rem 0 2rem);
// }
</style>