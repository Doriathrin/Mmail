<template>
  <div class="look">
    <div class="h1">商品管理-查看商品</div>

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
          <el-input placeholder="请输入商品描述" v-html="list.detail"></el-input>
        </el-form-item>
        <!-- 二级菜单 -->
        <el-form-item label="所属分类">
                <el-input style="width:50%" v-model="list.status"></el-input>
        </el-form-item>

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
    </div>
  </div>
</template>

<script>
import {check,categoryList} from '@/request/http'
export default {
  name: 'Look',
  data() { 
    return {
      id: {},
      list: {},
      tab:{}
    }
  },
  created () {
    this.id = this.$route.query.id;
  },
  computed: {
   
  },
  methods: {
    async adminList() {
      var res = await check(this.id);
      this.list = res.data.data;
    },
    async refeList(){
        var res = await categoryList(this.id);
      console.log(res);

      this.tab = res.data.data;

    }
    
  },
  mounted() {
    this.adminList();
    this.refeList();
  },
  
 }
</script>

<style lang="scss" scoped>
img{
  width:500px;
  height:300px;
}
</style>