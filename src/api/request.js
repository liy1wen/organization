import {
    Message,
    Loading
} from 'element-ui'

import axios from 'axios'
// import {
//     baseUrl
// } from '/env.js'
import {
    getLocalStorage
} from '@/utils/auth'


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
    let passport = getLocalStorage('token');
    config.headers.Authorization = 'Bearer ' + passport
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
            Message.error('用户未登录');
        } else if (error.response.status == 403) {
            Message.error('暂无访问权限');
        } else if (error.response.status == 404) {
            Message.error('网络请求不存在');
        } else {
            Message.error(error.response.data.message);
        }
    });
export default instance