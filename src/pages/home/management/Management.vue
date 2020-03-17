<template>
  <div class="management">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="查询方式">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="商品ID" value="shanghai"></el-option>
          <el-option label="商品名称" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="查询">
        <el-input v-model="formInline.user" placeholder="开始查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
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
        prop="name"
        label="信息"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
           在售
        </template>
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
           在售
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      prev-text='上一页'
      next-text='下一页'
      background
      @size-change="handleSizeChange"
      @current-change="change(currpage)"
      :current-page.sync="currpage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
  </div>
</template>

<script>
import {listData} from '@/request/http'
import {Goodspaging} from '@/request/http'
export default {
  name: 'Management',
  data() { 
    return {
      paging:[],
      listData:[],
      total:0,
      pageSize:10,
      currpage:1,
      flag:true,
      formInline: {
          user: '',
          region: ''
      }
    }
  },
  beforeMount() {
    this.getData()
  },
  wath:{
    currpage(newpage,oldpage){
      this.getData()
    }
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    },
    onSubmit() {
        console.log('submit!');
    },
    async OpenMethod(){
      const res=await listData({pageNum:this.currpage});
      this.listData=res.data.data.list;
      this.total=res.data.data.total
      console.log(res);
    },
    // 分页
    // async change(currpage){
    //   if(!this.flag){
    //     const res =await Goodspaging({pageNum:currpage});
    //     this.listData=res.data.data.list;
    //   }else{
    //     const res=await Goodspaging({listType:'search',pageNum:currpage,[this.type]:this.searchNum});
    //     this.listData=res.data.data.list;
    //   }
    // },
    getData(){
      this.getList()
    },
    getList(){
      this.paging=this.listData.slice((this.currpage-1)*this.pageSize,this.currpage*this.pageSize)
    },
    
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.OpenMethod();
  },
 }
</script>

<style lang="scss" scoped>

</style>