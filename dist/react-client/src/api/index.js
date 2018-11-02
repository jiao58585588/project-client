'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqUpdateUserInfo = exports.reqRegister = exports.reqLogin = undefined;

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//请求登录的函数
var reqLogin = exports.reqLogin = function reqLogin(data) {
  return (0, _ajax2.default)('/login', data, 'POST');
};
//请求注册的函数
/**
 * Created by 10560 on 2018/11/1.
 */
/*
import ajax from './ajax';
export const reqLogin=data=>ajax('/login',data,'POST');
export const reqRegister=data=>ajax('/register',data,'POST');*/
var reqRegister = exports.reqRegister = function reqRegister(data) {
  return (0, _ajax2.default)('/register', data, 'POST');
};
//请求更新数据
var reqUpdateUserInfo = exports.reqUpdateUserInfo = function reqUpdateUserInfo(data) {
  return (0, _ajax2.default)('/update', data, 'POST');
};
//# sourceMappingURL=index.js.map