'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _SubContainer = require('../components/SubContainer');

var _SubContainer2 = _interopRequireDefault(_SubContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var content = _ref.content;
  return {
    items: content.filter(function (item) {
      return item.parentId === ownProps.itemId;
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_SubContainer2.default);