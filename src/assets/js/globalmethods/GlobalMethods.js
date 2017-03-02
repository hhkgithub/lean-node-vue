/**
 * Created by hhkmac on 2017/2/17.
 */
exports.install = function (Vue, options) {
  Vue.prototype.init = function (path,el){
    if('/index' == path || '/' == path){
      el.style.position = "relative";
      el.style.bottom = "-14px";
    }else{
      el.style.position = "fixed";
      el.style.bottom = "0px";
    }
  }
};
