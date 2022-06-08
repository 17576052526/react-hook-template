import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";
import axios from 'axios'

let Page1 = lazy(() => import('./components/test/page1'))
let Page2 = lazy(() => import('./components/test/page2'))

//App.js 里面只设置路由，其他不在此处写（为了实现页面间的完全分离）
function App() {
    //设置服务器请求地址，/api 是 src/setupProxy.js 配置的代理服务
    axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '';

    //设置token
    //axios.interceptors.request.use(config => {
    //    config.headers.Authorization = common.getUser() && common.getUser().clientID;//配置登录验证
    //    return config
    //})

    return (
        <Suspense fallback="">
            <Router>
                {/*<Route path="/" exact component={Page1}></Route>*/}{/*设置主页*/}
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
            </Router>
        </Suspense>
    );
}

export default App;
