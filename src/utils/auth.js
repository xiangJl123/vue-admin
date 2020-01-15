import Cookies from "js-cookie";

const TokenKey = "curefun_pc_token_t";

// 获取token
export function getToken() {
  if (!Cookies.get(TokenKey)) return " "
  return Cookies.get(TokenKey)
}

// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 删除token
export function removeToken() {
    return Cookies.remove(TokenKey);
}