<template>
  <div class="commodity">
    <h2 class='title'>用户管理</h2>
    <el-table
      :data="listData"
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
      <el-table-column
        prop="createTime"
        label="注册时间">
        <template slot-scope="scope">
          <p>
            {{scope.row.createTime | times}}
          </p> 
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      prev-text='上一页'
      next-text='下一页'
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currpage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="this.userList.length">
    </el-pagination>
  </div>
</template>

<script>
import { userList } from "@/request/http";
import { userPagination } from "@/request/http";
export default {
  name: 'Commodity',
  data() { 
    return {
      userList:[],
      listData:[],//数组用来存放临时数据----点击当前页的数据存放
      pageSize:5,//每一页的数据
      currpage: 1,//当前页
      total:''//所有的公共数据
    }
  },
  beforeMount() {
    this.getData()
  },
  watch: {
    currpage(newpage,oldpage){
      this.getData()
    }
  },
  methods: {
    getData(){
      // 保留使用接口或数据
      // userPagination({pageNum:this.currpage}).then((res)=>{
      //   console.log(res);
      //   this.userList=res.data.data.list
      // });
      this.getList()
    },
    getList(){
      // 实现分页功能  第一页 1-5
      this.listData=this.userList.slice((this.currpage-1)*this.pageSize,this.currpage*this.pageSize)
    },
    // ES7 异步函数
    async BeforeMethod(){
      const res = await userList({
        pageNum:1
      });
      console.log(res);
      this.userList=res.data.data.list;
      // this.total=res.data.data.total;
    },

    // async change(page){
    //   this.currpage=page
    //   await userPagination({pageNum:this.currpage}).then((res)=>{
    //     console.log(res);
    //     // this.userList=res.data.data.list
    //   })
    // },
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