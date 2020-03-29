<template>
  <div class="category">
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
                        <el-button type="text" size="small" @click="dialog3(scope.row.id)">查看其子品类</el-button>
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
import { categoryList,UpdataName } from '@/request/http'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'Category',
  data () {
    return {
      list: [],
      dialogFormVisible: false,
      name: "",
      form: {
        categoryId: "",
        categoryName: "",
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    Category () {
      categoryList(this.categoryId)
        .then(data => {
          data = data.data.data
          this.list = data
        })
    },
    add () {
      this.$router.push("categoryAdd");
    },
    dialog (scope) {
      this.form.categoryId = scope.id
      this.form.categoryName = scope.name
      this.dialogFormVisible = true
    },
    dialog2 () {
      this.dialogFormVisible = false
      UpdataName(this.form).then(res => {
        console.log(res)
        this.$message({
          message: res.data.data,
          type: "message"
        })
        this.Category()
      })
    },
    ...mapMutations("a", ['categoryId']),
    dialog3 (id) {
      this.categoryId(id)
      alert(this.categoryId(id));
      this.$router.push("/subCategory")
      // console.log(id)
    }
  },
  mounted () {
    this.Category()
  },
}
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.box{
    width:900px;
    height: 92vh;overflow: scroll;
    background: #F3F3F3;
}
.box-1{
    @include FlexSpace();
    @include FontOnly(2rem);
    @include Pd(1rem 2rem 0 2rem);
}
.box-2{
    @include Pd(1rem);
    display: flex;
}
.box-2>div{
    margin-left: 1rem;
}
.box-3{
    @include Pd(0 2rem 9rem 2rem);
}
.block{
    width: 100%;
    @include Pd(1rem 0);
}
</style>