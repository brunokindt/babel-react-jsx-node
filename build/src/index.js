'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from './App';


/* eslint-disable quote-props,comma-dangle,no-useless-escape */
// import React from 'react';
var TestClass = function (_Component) {
  (0, _inherits3.default)(TestClass, _Component);

  function TestClass() {
    (0, _classCallCheck3.default)(this, TestClass);
    return (0, _possibleConstructorReturn3.default)(this, (TestClass.__proto__ || (0, _getPrototypeOf2.default)(TestClass)).apply(this, arguments));
  }

  (0, _createClass3.default)(TestClass, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Hi'
      );
    }
  }]);
  return TestClass;
}(_react.Component);

// export default TestClass;


TestClass.foo = 'bar';
console.log(TestClass); // logging just for this example
//

var renderTarget = 'html';
var id = 1;
var content = {
  'sections': [{
    'id': 14,
    'type': 'image',
    'classes': '',
    'deletable': true,
    'dynamic': false,
    'locked': false,
    'editable': true,
    'full_width': false,
    'options': {
      'title': '&lt;h2&gt;title&lt;\/h2&gt;',
      'subtitle': '&lt;h3&gt;top.title&lt;\/h3&gt;',
      'buttonContent': '&lt;a href=&quot;\/&quot;&gt;knop&lt;\/a&gt;',
      'columnsEnabled': true,
      'maxColumnCount': 4,
      'backgroundColor': '',
      'backgroundImage': '',
      'buttonHyperlink': '',
      'colorPickerValue': ''
    },
    'columns': [{
      'id': 26,
      'type': 'image',
      'classes': '',
      'components': [{
        'id': -4,
        'alt': '',
        'url': '',
        'type': 'image',
        'tooltip': '',
        'hyperlink': ''
      }]
    }]
  }]
};

// const html = 'html';

// const html = ReactDOMServer.renderToStaticMarkup(
//   <div>Hi</div>
// );

// const html = ReactDOMServer.renderToStaticMarkup(
//   <App
//     id={id}
//     content={content}
//     renderTarget={renderTarget}
//   />
// );

var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(TestClass, {
  id: id,
  content: content,
  renderTarget: renderTarget
}));

console.log('-------');
console.log(html);
console.log('-------');

console.log(process.argv);
console.log(process.argv0);
console.log(process.cwd());
// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }