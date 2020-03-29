<template>
  <div class="box">
    <p class="title">商品管理--添加商品</p>
    <div class="div">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="商品名称">
                <el-input style="width:50%" v-model="sizeForm.name" placeholder="请输入商品名称"></el-input>
            </el-form-item>

            <el-form-item label="商品描述" prop="name">
                <el-input style="width:50%" v-model="sizeForm.subtitle" placeholder="请输入商品描述"></el-input>
            </el-form-item>

            <el-form-item label="所属分类">
                <el-select v-model="sizeForm.value1" placeholder="请选择">
                    <el-option ref="item.name" v-for="item in list" :key="item.id" :label="item.name" :value="item.name">
                        <p @click="add(item.id)">{{item.name}}</p>
                    </el-option>
                </el-select>
                <el-select v-show="show"  v-model="sizeForm.value2" collapse-tags style="margin-left: 20px;" placeholder="请选择">
                    <el-option v-for="item in list2" :key="item.id" :label="item.name" :value="item.name"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="商品价格">
                <el-input style="width:30%" placeholder="价格" v-model="sizeForm.price">
                    <template slot="append">元</template>
                </el-input>
            </el-form-item>

            <el-form-item label="商品库存">
                <el-input style="width:30%" placeholder="库存" v-model="sizeForm.stock">
                    <template slot="append">件</template>
                </el-input>
            </el-form-item>
            <el-form-item label="商品图片">
            <el-upload
                    name="upload_file"
                    class="upload-demo"
                    action="/api/product/upload.do"
                    :on-preview="handlePreview"
                    :before-remove="beforeRemove"
                    :on-success="handleSuccess"
                >
                    <el-button  size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item label="商品详情">
                <quill-editor
                    style="width:100%;margin-top:20px;"
                    ref="myQuillEditor"
                    v-model="sizeForm.detail"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)"
                />
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" class="btn" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
import { additive } from "@/request/http";
import { additive2 } from "@/request/http";
import { cook } from "@/request/http";
export default {
    name: "shopAdd",
    data() {
        return {
            list:[],
            list2:[],
            editorOption: {},
            sizeForm: {
                categoryId:0,
                detail:"",
                imageHost: "http://img.happymmall.com/",
                mainImage:"",
                subImages:"",
                name:"",
                price:"",
                status:1,
                stock:"",
                subtitle:'',
                value1:"",
                value2:"",
            },
            show:false,
            dialogVisible: false
        };
    },
    methods: {
      // 一级分类
        additive(){
            additive()
            .then(data=>{
                data = data.data.data
                this.list=data
            })
        },
        // 二级分类
        add(id){
            console.log(id)
            this.show=true
            additive2(id).then(data=>{
                data = data.data.data
                console.log(data)
                this.list2=data
            })
        },
        //上传图片
        handlePreview(file) {
        console.log(file.name);
        
        this.sizeForm.mainImage = file.name;
        },
        beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleSuccess(response, file, fileList) {
        console.log("cg", response.data.uri);  
        console.log( response.data.uri);  

        this.sizeForm.mainImage = response.data.uri;
        // this.sizeForm.subImages = response.data.uri;
        },
        //商品详情
        onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text)
            this.content = html
        },
        //提交
        submit(){
            console.log(this.sizeForm.mainImage)

            cook(this.sizeForm).then(res=>{
                this.$message({
                    message:res.data.data,
                    type:"message"
                })
                this.$router.push("management")
            })
        },
        
    },
    mounted(){
        this.additive()
        
    },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/index.scss";
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 1200px;
  height: 500px;
  height: 92vh;
  overflow: scroll;
}
.div{
    @include Pd(2rem 2rem 5rem 8.5rem);
}
.title {
    @include FlexSpace();
    @include FontOnly(2rem);
    @include Pd(1rem 2rem 0 2rem);
}

</style>