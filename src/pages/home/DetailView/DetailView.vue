<template>
  <div class="detailView">
    <p>首页</p>
    <el-row :gutter="30">
      <el-col :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
              :xl="8">
        <div class="grid-content bg-purple">
          <p>{{this.userCount}}</p>
          <p>用户总数</p>
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
              :xl="8">
        <div class="grid-content bg-purple-light">
          <p>{{this.productCount}}</p>
          <p>商品总数</p>
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :md="8"
              :lg="8"
              :xl="8">
        <div class="grid-content bg-purple-lwq">
          <p>{{this.orderCount}}</p>
          <p>订单总数</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { home } from '@/request/http'
export default {
  name: 'DetailView',
  data () {
    return {
      // List:"",
      homelist: [],
      orderCount: "",
      userCount: "",
      productCount: ""
    }
  },
  methods: {
    // getList() {
    //   home(this.List).then(res => {
    //     console.log(res.data.data);
    //     this.List = res.data.data;
    //   });
    // }
  },
  mounted () {
    home().then((res) => {
      console.log(res);
      this.homelist = res.data.data;
      console.log(this.homelist);
      // es6 对象的解构赋值
      const { userCount, orderCount, productCount } = res.data.data;
      this.userCount = userCount;
      this.productCount = productCount;
      this.orderCount = orderCount;
    })
    //  this.getList();
  },
}
</script>

<style lang="" scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  width: 300px;
  height: 300px;
  background: #d3dce6;
}
.bg-purple-light {
  width: 300px;
  height: 300px;
  background: #e5e9f2;
  margin-left: 125px;
}
.bg-purple-lwq {
  width: 300px;
  height: 300px;
  background: #d3dce6;
  margin-left: 250px;
}
.el-row {
  text-align: center;
}
</style>