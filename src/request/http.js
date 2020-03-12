import { Request } from "@/until/request";
// 登录接口
export const login = data => Request.getData({
  url: '/api/user/login.do',
  method: 'post',
  data
})