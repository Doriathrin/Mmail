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

<style lang="" scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    
    background: #d3dce6;
  }
  .bg-purple-light {
    width:1200px;
    height:75px;
    margin-left: 130px;
    border:1px solid red;
    
  }
  .lwq-biao{
    width:324px;
    height:76px;
    background: #1e1c23;
  }
  h2{
    color: #18a6c5;
  }
  h1{
    color:white;
  }
  ul{
    float: right;
    line-height: 76px;
  }
  ul>li{
    float: left;
  }
</style>