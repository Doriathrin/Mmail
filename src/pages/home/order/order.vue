<template>
  <div class="order">
    <div class="box-1">订单管理</div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="查询方式">
        <el-select v-model="searchType" placeholder="按订单号查询">
          <el-option label="商品ID" value="orderNo"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="查询">
        <el-input v-model="searchName" placeholder="开始查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="listData"
      height="522px"
      border
      style="width:1200px">
      <el-table-column
        label="订单号"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="dialog(scope.row)">{{scope.row.orderNo}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="receiverName"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="statusDesc"
        label="订单状态">
      </el-table-column>
      <el-table-column
        prop="payment"
        label="订单总价">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="right" label="操作">
        <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialog(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      prev-text='上一页'
      next-text='下一页'
      background
      @current-change="change(currpage)"
      :current-page.sync="currpage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
  </div>
</template>

<script>
import {order,orderList,orderPage,orderSearch} from '@/request/http'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'Order',
  data() { 
    return {
      listData:[],
      total:0,
      pageSize:10,
      currpage:1,
      flag:false,
      searchType:'',
      searchName:'',
      type:''
    }
  },
  methods: {
    async add(){
      const res=await order({pageNum:this.currpage});
      console.log(res);
      this.listData=res.data.data.list
      this.total=res.data.data.total
    },
    // 分页
    async change(currpage){
      // const res=await orderPage({pageNum:currpage});
      // console.log(res);
      // this.listData=res.data.data.list;
      if(!this.flag){
        const res=await orderPage({pageNum:currpage});
        this.listData=res.data.data.list;
      }else{
        const res=await orderSearch({listType:'search',pageNum:currpage,[this.type]:this.searchName})
        this.listData=res.data.data.list;
      }
    },
    // 这是搜索后的东西
    async search(){
      console.log(this.searchType,this.searchName);
      if(this.searchType=='orderNo'){
        this.type='orderNo'
        console.log(this.type);
      }else{
        this.type='productName'
        console.log(this.type);
      }
      // 实施搜索
      if(this.searchName==''){
        this.flag=false;
        const res=await order({pageNum:1});
        this.listData=res.data.data.list;
      }else{
        this.flag=true;
        const res=await orderList({listType:'search',pageNum:1,[this.type]:this.searchName})
        this.listData=res.data.data.list;
        this.total=res.data.data.total;
      }
    },
    ...mapMutations("a",['scope']),
    dialog(scope){
      this.scope(scope)
      this.$router.push("/lineitem");
      console.log(this.scope)
    }
  },
  mounted() {
    this.add();
  },
 }
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.order{
    height: 92vh;overflow: scroll;
    padding: 0rem 2rem 5rem 2rem;
    // background: #F3F3F3;
}
.box-1{
    @include FontOnly(2rem);
    @include Pd(1rem 0 1rem 0);
}
</style>