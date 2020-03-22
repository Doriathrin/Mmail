<template>
  <div class="category">
    <el-table
      :data="listData"
      height="522px"
      border
      style="width:1200px">
      <el-table-column
        prop="id"
        label="品类ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="电子名称"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {categoryList} from '@/request/http'
export default {
  name: 'Category',
  data() { 
    return {
      listData:[],
    }
  },
  methods: {
    async add(){
      const res=await categoryList({categoryId:0});
      console.log(res);
      this.listData=res.data.data.list;
    }
  },
  mounted() {
    this.add();
  },
 }
</script>

<style lang="scss" scoped>

</style>