import $ from 'jquery'
import axios from 'axios'

//jquery插件（非react插件）写在此处，外部只需 import plugin from './../plugin' 即可，引用后会立即执行下面的代码，多个组件引用只会执行一次

//设置服务器请求地址，/api 是 src/setupProxy.js 配置的代理服务
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '';

//设置token
//axios.interceptors.request.use(config => {
//    config.headers.Authorization = common.getUser() && common.getUser().clientID;//配置登录验证
//    return config
//})