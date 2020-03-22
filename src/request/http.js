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
export const categoryList = data => Request.getData({
  url: `/api/category/get_category.do`,
  method: 'get',
  data,
})

// 二级联动
export const add = (id, data) => Request.getData({
  url: `/api/category/get_category.do?categoryId=${id}`,
  method: 'get',
  data,
})

// 商品创建
export const establish = (list,data) => Request.getData({
  url: `/api/product/save.do?categoryId=${list.categoryId}&name=${list.name}&username=${list.username}&secondname=${list.secondname}&=description${list.description}&num=${list.num}&inventory=${list.inventory}&fileList=${list.fileList}`,
  method: 'get',
  data,
})

// 上传图片
export const upload = data => Request.getData({
  url: `/api/product/upload.do`,
  method: 'get',
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