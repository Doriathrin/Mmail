<template>
  <div class="commodity">
    <h2 class='title'>用户管理</h2>
    <el-table
      :data="userList"
      height="522px"
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
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
      currentPage3: 1,
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
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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