import {
    Message,
    Loading
} from 'element-ui'
import store from '../store/index'
import axios from 'axios'
import router from '../router/index'

var instance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL, // 公共接口url（如果有多个的公共接口的话，需要处理）
    timeout: 60000, // 请求超时 10s
});
// 头部
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
instance.interceptors.request.use(config => {
    // let loadingInstance = Loading.service({
    //     fullscreen: true
    // });
    let passport = store.getters['login/getToken'];
    if (passport) {
        config.headers.Authorization = 'Bearer ' + passport
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});
// 响应拦截
instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        // loadingInstance.close()
        console.log('_______________', error.response)
        if (error.response.status == 401) {
            Message.error('登陆超时,请重新登录');
            store.dispatch('login/loginOut').then(() => {
                router.replace('/login')
            })
        } else if (error.response.status == 403) {
            Message.error('暂无访问权限');
        } else if (error.response.status == 404) {
            Message.error('网络请求不存在');
        } else {
            Message.error('系统异常');
        }
    });
export default instance