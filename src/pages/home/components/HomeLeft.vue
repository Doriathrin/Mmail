<template>
  <div class="HomeLeft">
    <el-collapse accordion style='{background:red}'>
      <el-collapse-item>
        <template slot="title">
          首页<i class="header-icon el-icon-info"></i>
        </template>
      </el-collapse-item>
      <el-collapse-item title="商品">
        <div style="{background:red}">商品管理</div>
        <div>品类管理</div>
      </el-collapse-item>
      <el-collapse-item title="订单">
        <div>订单管理</div>
      </el-collapse-item>
      <el-collapse-item title="用户">
        <div>用户列表</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'HomeLeft',
  data() { 
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange(val) {
        console.log(val);
    }
  },
  mounted() {

  },
 }
</script>

<style lang="" scoped>
.HomeLeft{
  width:322px;
  height:827px;
  border:1px solid red;
  background: #16171b;
}
</style>