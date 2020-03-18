<template>
  <div class="addthegoods">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-select v-model="form.ping" placeholder="请选择一级品类">
              <el-option v-for="(item,key) of categoryList" 
                v-model="form.ping" 
                :value="item.id"
                :key='key'
                :label='item.name'
              ></el-option>
            </el-select>
            <el-select v-model='form.ping' placeholder="请选择二级品类">
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input-number v-model="form.num" :min="0"></el-input-number>
          </el-form-item>
          <el-form-item label="商品库存">
            <el-input
              v-model="form.input"
              clearable>
            </el-input>
          </el-form-item>
          <quill-editor
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          />
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
import {categoryList} from '@/request/http'
export default {
  name: 'Addthegoods',
  data() { 
    return {
      categoryList:[],
      form: {
        name: '',
        input: '',
        num: 0,
        ping:''
      }
    }
  },
  methods: {
    onSubmit() {
        console.log('submit!');
    },
    onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },
      async change(){
        const res=await categoryList({categoryId:0});
        console.log(res);
        this.categoryList=res.data.data;      
      }
      
  },
  mounted() {
    // categoryList({categoryId:0}).then((res)=>{
    //   console.log(res);
    //   this.categoryList=res.data.data
    // })
    this.change();
  },
 }
</script>

<style lang="" scoped>

</style>