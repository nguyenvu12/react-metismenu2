'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = require('../containers/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubContainer = function SubContainer(_ref, _ref2) {
  var items = _ref.items,
      visible = _ref.visible;
  var classStore = _ref2.classStore;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(classStore.classSubContainer, visible && classStore.classSubContainerVisible)
    },
    _react2.default.createElement(
      'ul',
      {
        className: (0, _classnames2.default)(classStore.classContainer, visible && classStore.classContainerVisible)
      },
      items.map(function (item, i) {
        return _react2.default.createElement(_Item2.default, _extends({ key: i }, item));
      })
    )
  );
};

SubContainer.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  visible: _react.PropTypes.bool
};

SubContainer.contextTypes = {
  classStore: _react.PropTypes.object.isRequired
};

exports.default = SubContainer;