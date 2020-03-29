<template>
  <div class="subCategory">
        <div class="box-1">
            品类管理
            <el-button type="primary" icon="el-icon-edit" @click="add">添加品类</el-button>
        </div>
        <div class="box-3">
            <el-table :data="list" border style="width: 100%">
                <el-table-column prop="id" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column label="地址" width="900">
                    <template  slot-scope="scope">
                        <el-button type="text" size="small" @click="dialog(scope.row)">修改名称</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.categoryName" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialog2">确 定</el-button>
            </div>
            </el-dialog>
  </div>
</template>

<script>
import { UpdataName } from "@/request/http";
import { ViewSubcategories } from "@/request/http";
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'subCategory',
  data() { 
    return {
      list:[],
                dialogFormVisible: false,
                name:"",
                form: {
                    categoryId:"",
                    categoryName:"",
                },
                formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapState("a",["categoryId"]),
  },
  methods: {
    ViewSubcategories(){
      ViewSubcategories(this.categoryId)
          .then(data=>{
              data = data.data.data
              console.log(data)
               this.list=data
            })
      },
      add() {
        this.$router.push("categoryAdd");
      },
      dialog(scope){
          this.form.categoryId=scope.id
          this.form.categoryName=scope.name
          this.dialogFormVisible=true
      },
      dialog2(){
          this.dialogFormVisible=false
          UpdataName(this.form).then(res=>{
            console.log(res)
            this.$message({
              message:res.data.data,
              type:"message"
            })
            this.ViewSubcategories()
          })
      },
      dialog3(id){
        console.log(id)
      }      
  },
  mounted() {
    this.ViewSubcategories()
  },
 }
</script>

<style lang="scss" scoped>

</style>