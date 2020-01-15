import service from "@/utils/request"
/**
 * 登录接口
 */
export function login(data){
    service.request({
        method: 'post',
        url: 'szhiqu/uorg/login/loginByPsw',
        data
    })
}
