'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _laobanInfo = require('../components/laoban-info');

var _laobanInfo2 = _interopRequireDefault(_laobanInfo);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  return { user: state.user };
}, { updateUserInfo: _actions.updateUserInfo })(_laobanInfo2.default); /**
                                                                        * Created by 10560 on 2018/11/3.
                                                                        */
//# sourceMappingURL=laoban-info.js.map