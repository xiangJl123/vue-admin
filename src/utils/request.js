/*
 * 拦截器
 */
import axios from "axios"
import { getToken, removeToken } from '@/utils/auth'

//创建拦截器
// 创建后端地址，以及设置超时时间
// 手把手撸码前端地址  http://www.web-jshtml.cn/productapi
//const BASEURL=process.env.NODE_ENV === "production" ? " " : "/devapi";
const service = axios.create({
  baseURL:  "//" + window.location.host + "/",
  timeout: 80000,
});
console.log( window.location.origin);

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
  let tk=getToken();
  let device=2
  let {url, data, headers}=config
  

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response);
    return response;

  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default service