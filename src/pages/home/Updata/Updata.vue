<template>
  <div class="updata">
    <div class="h1">商品管理-修改商品</div>
  
    <!-- 添加表单 -->
    <div class="addBox">
      <el-form ref="list" :model="list" label-width="80px">
        <el-form-item label="商品名称">
          <el-input placeholder="请输入商品名称" v-model="list.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input placeholder="请输入商品描述" v-model="list.subtitle"></el-input>
        </el-form-item>
        <!-- 商品状态 -->
        <el-form-item label="商品状态">
          <el-input placeholder="请输入商品描述" v-model="list.detail"></el-input>
        </el-form-item>
        <!-- 二级菜单 -->
        <template>
          <span class="el-form-item__label span1">所属分类</span>
          <el-select v-model="list.region" placeholder="请选择一级分类">
            <el-option
              v-for="(item,index) in tab"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </template>

        <!-- 商品图片 -->
        <div class="div1">
          <el-form-item label="商品图片">
            <img
              class="image"
              v-if="list.mainImage"
              :src="list.imageHost+list.mainImage"
              alt
              srcset
            />
          </el-form-item>
        </div>

        <!-- 价格表 -->

        <div>
          <span class="el-form-item__label span1">商品价格</span>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="list.price">
              <template slot="append">元</template>
            </el-input>
          </div>
        </div>

        <div>
          <span class="el-form-item__label span1">商品库存</span>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="list.stock">
              <template slot="append">件</template>
            </el-input>
          </div>
        </div>

        <!-- 图片上传 -->

        <!-- 富文本框 -->
      </el-form>
       <el-button type="primary" plain  @click="updata">提交</el-button>
    </div>
  </div>
</template>

<script>
import { check,categoryList,updata } from "@/request/http";
export default {
  name: 'Updata',
  data() { 
    return {
      list: {
          name: "",
          subtitle: "",
          price: "",
          select: "",
          region: "",
          region2:'',
          stock:'',
          detail:'',
          content:'',
          categoryId:0,
          status: 1
        },
      id: {},
      tab:{}
    }
  },
  created () {
    this.id = this.$route.query.id;
  },
  methods: {
    //   把数据放入对象方便修改
    async checkList() {
      var res = await check(this.id);
      let a = res.data.data;
         this.list= {
          name: a.name,
          subtitle: a.subtitle,
          price: a.price,
          select: a.select,
          region: a.region,
          stock:a.stock,
          detail:a.detail,
          categoryId:a.categoryId,
          status: a.status
        }
    },
    //   修改提交
    async updata(){
       await updata(this.list).then(res=>{
           this.$message({
                message:res.data.data,
                type:"message"
              })
      })
      this.$router.push('/management');
    },

    async refeList(){
        var res = await categoryList(this.id);
      console.log(res);

      this.tab = res.data.data;

    }
  },
  mounted() {
    this.checkList();
    this.refeList();
  },
 }
</script>

<style lang="scss" scoped>

</style>