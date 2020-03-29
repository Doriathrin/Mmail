<template>
  <div class="management">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="查询方式">
        <el-select v-model="searchType" placeholder="活动区域">
          <el-option label="商品ID" value="ID"></el-option>
          <el-option label="商品名称" value="Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="查询">
        <el-input v-model="searchName" placeholder="开始查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
        <router-link tag="el-button" type="primary" to="/addthegoods">
          +添加商品
        </router-link>
      </el-form-item>
    </el-form>
    <el-table
      :data="listData"
      height="522px"
      border
      @row-click='data'
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
          <template slot-scope="scope" column-key>
          <!-- status  2已下架  1在售 -->
          <span>{{scope.row.status | types}}</span>
          <el-button
            size="mini"
            type="warning"
            style="margin-left:20px"
            @click="open2(scope.$index, scope.row)"
          >{{scope.row.status | types2}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <span @click="look(scope.row)">
            查看
          </span>
          <span @click="updata(scope.row)">
            编辑
          </span>
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
import {listData} from '@/request/http'
// 搜索前的分页
import {shopListPagination} from '@/request/http'
// 商品搜索
import {shopListSearch} from '@/request/http'
// 搜索后分页
import {shopSearchPagination} from '@/request/http'
// 商品上架或下架
import {shopSale} from '@/request/http'
export default {
  name: 'Management',
  data() { 
    return {
      listData:[],
      total:0,
      pageSize:10,
      currpage:1,
      flag:false,
      searchType:'',  //查询条件
      searchName:'',   //关键字
      type:'',
      home:{}
    }
  },
  methods: {
    async OpenMethod(){
      const res=await listData({pageNum:this.currpage});
      this.listData=res.data.data.list;
      this.total=res.data.data.total
      console.log(res);
    },
    // 分页
    async change(currpage){
      // 单独拿出来
      // const res =await Goodspaging({pageNum:currpage});
      // this.listData=res.data.data.list;
      if(!this.flag){
        // 搜索前的分页
        const res =await shopListPagination({pageNum:currpage});
        this.listData=res.data.data.list;
      }else{
        // 搜索后的分页
        const res=await shopSearchPagination({listType:'search',pageNum:currpage,[this.type]:this.searchName});
        this.listData=res.data.data.list;
      }
    },
    // 模糊搜索
    async search(){
      console.log(this.searchType,this.searchName);
      // 首先第一步：判断参数名是productId还是productName
      if(this.searchType=='ID'){
        this.type='productId'
        console.log(this.type);
      }else{
        this.type='productName' 
        console.log(this.type);
      }
      // 实施搜索
      if(this.searchName==''){
        // 当关键字为空时
        this.flag=false;
        const res=await listData({pageNum:1});
        this.listData=res.data.data.list;
      }else{
        this.flag=true;
        const res=await shopListSearch({listType:'search',pageNum:1,[this.type]:this.searchName});
        this.listData=res.data.data.list;
        this.total=res.data.data.total;
      }
    },
    shop() {
      listData().then(res => {
        // console.log(res.data.data.list);
        this.listData = res.data.data.list;
        this.total = res.data.data.total;
      });
    },
    open2(index, row) {
            var open = "";
            if (row.status == 1) {
                open = "下架";
            } else {
                open = "上架";
            }
            this.$confirm("确定要" + open + "该商品吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                var status = 0;
                if (row.status == 1) {
                    status = 2;
                } else {
                    status = 1;
                }
                shopSale({ productId: row.id, status: status }).then(res => {
                    alert(res.data.data);
                    if (res.data.status == 0) {
                    this.shop();
                    }
                });
        }).catch(() => {});
    },
    data(row, event, column) {
      console.log(row)
      this.home=row

    },
    look(val){
      // alert(val.id)
      this.$router.push({path:'/look',query:{id:val.id}});
    },
    updata(val){
      // alert(val.id)
      this.$router.push({path:'/updata',query:{id:val.id}});
    }
  },
  mounted() {
    this.OpenMethod();
  },
  filters: {
    types(val) {
      return val == 2 ? "以下架" : "在售";
    },
    types2(val) {
      return val == 2 ? "上架" : "下架";
    }
  }
 }
</script>

<style lang="" scoped>

</style>