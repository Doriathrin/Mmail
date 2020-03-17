import { Request } from "@/until/request";

// 登录接口
export const login = (obj,data) => Request.getData({
  url: `/api/user/login.do?username=${obj.username}&password=${obj.password}`,
  method: 'post',
  data
})

// 用户列表
export const userList = data => Request.getData({
  url: '/api/user/list.do',
  method: 'post',
  data
})

// 用户列表 分页器
export const userPagination = data => Request.getData({
  url: '/api/user/list.do',
  method: 'post',
  data
})

// 统计接口
export const home = () => Request.getData({
  url: '/api/statistic/base_count.do',
  method:'GET'
})

// 商品接口
export const listData = data => Request.getData({
  url: '/api/product/list.do',
  method: 'GET',
  data
})

// 商品管理列表分页
export const Goodspaging = data => Request.getData({
  url: '/api/product/list.do',
  method: 'GET',
  data
})