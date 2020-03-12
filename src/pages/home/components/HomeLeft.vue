<template>
  <div class="HomeLeft">
    <div class='lwq-sho'>首页<i class="header-icon el-icon-info"></i></div>
    <el-collapse accordion>
      <el-collapse-item title="商品">
        <div>商品管理</div>
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

<style lang="scss" scoped>
@import '@/Scss/index.scss';
.HomeLeft{
  // width:322px;
  // height:827px;
  // border:1px solid red;
  // background: #16171b;
  @include SizeBack(324px,827px,0,#16171b);
}
.lwq-sho{
  @include SizeBack(324px,49px,0,#2b2e33);
  color:$fontColor;
}
.el-collapse{
  border:none;
}
</style>