<template>
  <div class="HomeHeader">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple lwq-biao">
          <h2>HAPPY</h2>
          <h1>MMALL</h1>
        </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
          <ul>
            <li><i class='iconfont'>&#xe608;</i></li>
            <li>欢迎</li>
            <li><i class='iconfont'>&#xe811;</i></li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
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
  .bg-purple-dark {
    // background: #99a9bf;
    @include SizeBack(0,0,0,#99a9bf)
  }
  .bg-purple {
    // background: #d3dce6;
    @include SizeBack(0,0,0,#d3dce6)
  }
  .bg-purple-light {
    // width:1200px;
    // height:75px;
    // margin-left: 130px;
    border:1px solid red;
    @include SizeBack(1200px,75px,0,white);
    @include Mlt(133px,0)
  }
  .lwq-biao{
    // width:324px;
    // height:76px;
    // background: #1e1c23;
    @include SizeBack(324px,76px,0,#1e1c23);
    
  }
  h2{
    // color:#18a6c5;
    @include Font(none,#18a6c5);
    @include Mlt(10px,0);
  }
  h1{
    color:$fontColor;
    @include Mlt(10px,0);
  }
  ul{
    float: right;
    line-height: 76px;
  }
  ul>li{
    float: left;
  }
</style>