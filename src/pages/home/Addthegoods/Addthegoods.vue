<template>
  <div class="addthegoods">
        <el-form  label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="所属分类">
            <el-select v-model="username" placeholder="请选择一级品类" @change="cateChange">
              <el-option v-for="(item,key) in firstList" 
                :value="item.name"
                :key='key'
                :label='item.name'
              ></el-option>
            </el-select>
            <el-select v-show='username' v-model='secondname' placeholder="请选择二级品类">
              <el-option v-for='(item,key) in secondList'
              :key='key'
              :value='item.name'
              :label='item.name'
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="description"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input-number v-model="num" :min="0"></el-input-number>
          </el-form-item>
          <el-form-item label="商品库存">
            <el-input
              v-model="inventory"
              clearable>
            </el-input>
          </el-form-item>
          <el-upload
            class="upload-demo"
            action="http://adminv2.happymmall.com/manage/product/upload.do"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :limit="3"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
import {add,categoryList,upload,establish} from '@/request/http'
export default {
  name: 'Addthegoods',
  data() { 
    return {
      categoryId:0,
      username:'',
      secondname:'',
      categoryList:[],
      firstList:[],
      secondList:[],
      fileList: [
        {name: 'food.jpeg', 
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
        {name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      name: '',
      description:'',
      inventory: '',
      num: 0,
    }
  },
  methods: {
    handleRemove(file, fileList) {
        console.log(fileList);
    },
    handlePreview(file) {
        console.log(file);
    },
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
        this.firstList=res.data.data;      
      },
      //  change(){
      //       add(this.list.categoryId).then((res)=>{
      //         this.firstList=res.data.data
      //       })
      //   },
        
      cateChange(){
        console.log(1111);
        this.firstList.map((item,index)=>{
          if(item.name===this.username){
            categoryList({categoryId:item.id}).then((res)=>{
              console.log(res);
              this.secondList=res.data.data;
            })
          }
        })
      },
      add(){
        establish(this.name).then((res)=>{
          console.log(res);
        })
      }
  },
  mounted() {
    this.change();
    this.add();
  },
 }
</script>

<style lang="" scoped>

</style>