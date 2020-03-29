import { Request } from "@/until/request";

// 登录接口
export const login = (obj,data) => Request.getData({
  url: `/api/user/login.do?username=${obj.username}&password=${obj.password}`,
  method: 'post',
  data
})

// 用户列表
export const userList = data => Request.getData({
  url: `/api/user/list.do`,
  method: 'post',
  data
})

// 用户列表 分页器
export const userPagination = data => Request.getData({
  url: `/api/user/list.do`,
  method: 'post',
  data
})

// 统计接口
export const home = () => Request.getData({
  url: `/api/statistic/base_count.do`,
  method:'GET'
})

// 商品接口
export const listData = data => Request.getData({
  url: `/api/product/list.do`,
  method: 'GET',
  data
})

// 商品管理列表搜索前分页
export const shopListPagination = data => Request.getData({
  url: `/api/product/list.do`,
  method: 'get',
  data
})

// 商品管理搜索
export const shopListSearch = data => Request.getData({
  url: `/api/product/search.do`,
  method: 'get',
  data,
})

// 商品管理搜索后分页
export const shopSearchPagination = data => Request.getData({
  url: `/api/product/search.do`,
  method: 'get',
  data,
})

// 品类管理
export const categoryList = (obj,data) => Request.getData({
  url: `/api/category/get_category.do?categoryId=0`,
  method: 'get',
})

// 修改名称
export const UpdataName = (obj, data) => Request.getData({
  url: `/api/category/set_category_name.do?categoryId=${obj.categoryId}&categoryName=${obj.categoryName}`,
  method: "get",
  data
})

// 添加品类     提交品类
export const categoryadd = (obj, data) => Request.getData({
  url: `/api/category/add_category.do?parentId=0&categoryName=${obj}`,
  method: "get",
  data
})


//  http://adminv2.happymmall.com/manage/category/get_category.do?categoryId=100005
export const ViewSubcategories = (obj, data) => Request.getData({
  url: `/api/category/get_category.do?categoryId=${obj}`,
  method: "get",
  data
})

// // 二级联动
// export const add = (id, data) => Request.getData({
//   url: `/api/category/get_category.do?categoryId=${id}`,
//   method: 'get',
//   data,
// })

// // 商品创建
// export const establish = (list,data) => Request.getData({
//   url: `/api/product/save.do?categoryId=${list.categoryId}&name=${list.name}&username=${list.username}&secondname=${list.secondname}&description=${list.description}&num=${list.num}&inventory=${list.inventory}&detail=${list.detail}$upload_file=${list.upload_file}`,
//   method: 'get',
//   data,
// })

//商品管理     添加商品     一级分类菜单
export const additive = data => Request.getData({
    url:"/api/category/get_category.do?categoryId=0",
    method:"get",
    data,
})
//商品管理     添加商品     二级分类菜单
export const additive2 = (obj,data) => Request.getData({
// /category/get_category.do?categoryId=100056
    url:`/api/category/get_category.do?categoryId=${obj}`,
    method:"get",
    data,
})
//商品管理     添加商品     提交
export const cook = (obj,data) => Request.getData({
    url:`/api/product/save.do?categoryId=${obj.categoryId}&name=${obj.name}&subtitle=${obj.subtitle}&mainImage=${obj.mainImage}&detail=${obj.detail}&price=${obj.price}&stock=${obj.stock}&status=${obj.status}`,
    method:"get",
    data,
})

// 修改商品
export const updata = (list, data) => Request.getData({
  url: `/api/product/save.do?categoryId=${list.categoryId}&name=${list.name}&subtitle=${list.subtitle}&subImages=${list.mainImage}&detail=${list.detail}&price=${list.price}&stock=${list.stock}&status=${list.status}&region=${list.region}`,
  method: 'get',
  data,

})

//商品管理上架  下架
export const shopSale = data => Request.getData({
  url: "/api/product/set_sale_status.do",
  method: "get",
  data,
})

// 订单列表
export const order = data => Request.getData({
  url: `/api/order/list.do`,
  method: 'get',
  data,
})

// 订单搜索
export const orderList = data => Request.getData({
  url: `/api/order/search.do`,
  method: 'get',
  data,
})


// 订单列表搜索前分页
export const orderPage = data => Request.getData({
  url: `/api/order/list.do`,
  method: 'get',
  data,
})

// 订单列表搜索后分页
export const orderSearch = data => Request.getData({
  url: `/api/order/search.do`,
  method: 'get',
  data,
})

//查看
//      /api/product/detail.do?productId=26
export const check = (id, data) => Request.getData({
  url: `/api/product/detail.do?productId=${id}`,
  method: "get",
  data,
})