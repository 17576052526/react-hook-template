import $ from 'jquery';

var common = {
    //获取浏览器缓存
    getCache: function (name) {
        return window.localStorage.getItem(name);
    },
    //写入浏览器缓存
    setCache: function (name, value) {
        return window.localStorage.setItem(name, value);
    },
    //获取url参数
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.toString().substr(window.location.toString().indexOf('?') + 1).match(reg);
        if (r != null) return decodeURI(r[2]); return '';
    },
    //获取路由中的参数，因为 this.props.match.params.name 取不到最新的参数值，才用此方式
    routeParam: function (index) {
        var url = window.location.href;
        var arr = url.substr(url.indexOf('#') + 2).split('/');
        return index < arr.length ? arr[index] : '';
    }
}
export default common;
