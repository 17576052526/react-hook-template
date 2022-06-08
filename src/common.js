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
    }
}
export default common;
