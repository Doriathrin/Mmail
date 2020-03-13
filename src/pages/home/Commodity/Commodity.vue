<template>
  <div class="commodity">
    <h2 class='title'>用户管理</h2>
    <el-table
      :data="userList"
      height="700px"
      border
      style="width:1200px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { userList } from "@/request/http";
import { lginuserList } from "@/request/http";
export default {
  name: 'Commodity',
  data() { 
    return {
      userList:[],
    }
  },
  methods: {
    // ES7 异步函数
    async BeforeMethod(){
      const res = await userList({
        pageNum:1
      });
      console.log(res);
      this.userList=res.data.data.list;
    }
  },
  mounted() {
    this.BeforeMethod();
  },
 }
</script>

<style lang="scss" scoped>
@import '@/Scss/index.scss';
.commodity{
  @include SizeBack(1200px,827px,0px,#f3f3f3);
}
</style>