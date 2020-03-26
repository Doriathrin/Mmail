<template>
  <div class="look">
    <!-- <ul v-for='(item,key) of listData'>
      <li >{{item.name}}</li>
    </ul> -->
    <el-table
      :data="listData"
      height="522px"
      border
      @row-click="data"
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
    </el-table>
  </div>
</template>

<script>
import {check} from '@/request/http'
export default {
  name: 'Look',
  data() { 
    return {
      listData:{},
    }
  },
  computed: {
   
  },
  methods: {
    async change(){
      const res=await check({id:this.$route.query.id});
      console.log(res);
      this.listData=res.data.data;
      console.log(res.data.data);
    },
    // check(){
    //   check({id:this.$route.query.id}).then((res)=>{
    //     console.log(res);
    //     this.listData=res.data.data;
    //   })
    // }
  },
  mounted() {
    // this.check();
    this.change();
  },
  
 }
</script>

<style lang="" scoped>

</style>