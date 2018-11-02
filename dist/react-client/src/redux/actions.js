'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserInfo = exports.register = exports.resetUser = exports.updateUser = exports.errMsg = exports.authSuccess = undefined;

var _actionTypes = require('./action-types');

var _index = require('../api/index');

/**
 * Created by 10560 on 2018/10/31.
 */
//action creaters,用来创建action的工厂函数模块
var authSuccess = exports.authSuccess = function authSuccess(user) {
  return { type: _actionTypes.AUTH_SUCCESS, data: user };
};
var errMsg = exports.errMsg = function errMsg(msg) {
  return { type: _actionTypes.ERR_MSG, data: msg };
};
var updateUser = exports.updateUser = function updateUser(user) {
  return { type: _actionTypes.UPDATE_USER, data: user };
};
var resetUser = exports.resetUser = function resetUser(msg) {
  return { type: _actionTypes.RESET_USER, data: msg };
};
//定义异步函数
var register = exports.register = function register(data) {
  var username = data.username,
      password = data.password,
      rePassword = data.rePassword,
      type = data.type;

  if (!username) {
    return errMsg({ username: username, password: password, msg: '请输入用户名' });
  } else if (!password) {
    return errMsg({ username: username, password: password, msg: '请输入密码' });
  } else if (!type) {
    return errMsg({ username: username, password: password, msg: '请选择类型' });
  } else if (password !== rePassword) {
    return errMsg({ username: username, password: password, msg: '两次密码输入不一致' });
  }
  return function (dispatch) {
    (0, _index.reqRegister)(data).then(function (res) {
      var result = res.data;
      if (result.code === 0) {
        dispatch(authSuccess(result.data));
      } else {
        dispatch(errMsg({ msg: result.msg, username: data.username, type: data.type }));
      }
    }).catch(function (rej) {
      dispatch(errMsg({ msg: '网络出错误了，请刷新重试', username: data.username, type: data.type }));
    });
  };
};
//异步 更新用户数据
var updateUserInfo = exports.updateUserInfo = function updateUserInfo(data) {
  var header = data.header,
      post = data.post,
      company = data.company,
      salary = data.salary,
      info = data.info;

  if (!header) {
    return resetUser({ msg: '请选择头像' });
  } else if (!post) {
    return resetUser({ msg: '请输入招聘職位' });
  } else if (!company) {
    return resetUser({ msg: '请輸入公司名稱' });
  } else if (!salary) {
    return resetUser({ msg: '請輸入薪資範圍' });
  } else if (!info) {
    return resetUser({ msg: '請輸入公司簡介' });
  }
  return function (dispatch) {
    (0, _index.reqUpdateUserInfo)(data).then(function (res) {
      var result = res.data;
      if (result.code === 0) {
        dispatch(updateUser(result.data));
      } else {
        dispatch(resetUser({ msg: result.msg }));
      }
    }).catch(function (rej) {
      dispatch(resetUser({ msg: '网络出错误了，请刷新重试' }));
    });
  };
};
//# sourceMappingURL=actions.js.map