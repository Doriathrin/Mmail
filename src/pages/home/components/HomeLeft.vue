<template>
  <div class="HomeLeft">
    <el-container style="height: 500px; background:#2b2e33">
      <el-aside width="324px" style="background-color:#2b2e33">
        <el-menu :default-openeds="['1', '3']" >

          <el-submenu index="0" style='background:#2b2e33'>
            <router-link tag='div' slot="title" style='color:#fff'  to="/detailView">
              <i class="el-icon-message"></i>首页
            </router-link>
            <!-- <el-menu-item-group style='background:#000000'> -->
              <!-- <el-menu-item index="1-1">商品管理</el-menu-item>
              <el-menu-item index="1-2">品类管理</el-menu-item> -->
            <!-- </el-menu-item-group> -->
          </el-submenu>

          <el-submenu index="1" style='background:#2b2e33'>
            <div slot="title" style='color:#fff'><i class="el-icon-message"></i>商品</div>
            <!-- <el-menu-item-group style='background:#000000'> -->
              <router-link tag="el-menu-item" to="/management">
                商品管理
              </router-link>
              <el-menu-item index="1-2">品类管理</el-menu-item>
            <!-- </el-menu-item-group> -->
          </el-submenu>

          <el-submenu index="2" style='background:#2b2e33;color:#fff'>
            <div slot="title" style='color:#fff'><i class="el-icon-menu"></i>订单</div>
            <!-- <el-menu-item-group style='background:#000000'> -->
              <el-menu-item index="2-1">订单管理</el-menu-item>
            <!-- </el-menu-item-group> -->
          </el-submenu>

          <el-submenu index="3" style='background:#2b2e33;color:#fff'>
            <div slot="title" style='color:#fff'><i class="el-icon-setting"></i>用户</div>
            <!-- <el-menu-item-group style='background:#000000'> -->
              <router-link tag="el-menu-item" to='/commodity'>
                用户列表
              </router-link>
            <!-- </el-menu-item-group> -->
          </el-submenu>

        </el-menu>
      </el-aside> 
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeLeft',
  data() { 
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
@import '@/Scss/index.scss';
.HomeLeft{

  @include SizeBack(324px,827px,0,#2b2e33);
}
.lwq-sho{
  @include SizeBack(324px,50px,0,#2b2e33);
  color:$fontColor;
  line-height: 50px;
}
.header-icon{
  @include Mlt(25px,0px);
}
.el-collapse{
  border:none;
}
.el-menu{
  border:none;
}
.el-menu-item, .el-submenu__title{
  color:$fontColor;
}
.el-menu-item-group__title{
    padding:0 0 0 0  !important;
}
.el-menu-item.is-active {
    background-color: #2dafcb !important;
}
.el-menu-item {
    background: #17191b !important;
}

</style>