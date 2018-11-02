'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _register = require('../components/register');

var _register2 = _interopRequireDefault(_register);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  return { user: state.user };
}, { register: _actions.register })(_register2.default); /**
                                                          * Created by 10560 on 2018/11/2.
                                                          */
//# sourceMappingURL=register.js.map