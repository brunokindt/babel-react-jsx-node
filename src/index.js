/* eslint-disable quote-props,comma-dangle,no-useless-escape */
// import React from 'react';
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

class TestClass extends Component {
    render () {
        return <div>Hi</div>;
    }
}

export default TestClass;
console.log(TestClass); // logging just for this example

const renderTarget = 'html';
const id = 1;
const content = {
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

// const html = ReactDOMServer.renderToStaticMarkup(
//   <div>
//     <TestClass />
//   </div>
// );

const html = ReactDOMServer.renderToStaticMarkup(
  <div>
    <TestClass />
    <App
      id={id}
      content={content}
      renderTarget={renderTarget}
    />
  </div>
);

console.log('----------------------------------------------------------------------');
console.log(html);
console.log(process.title);
console.log('----------------------------------------------------------------------');

console.log(process.argv);
console.log(process.argv0);
console.log(process.cwd());
// for (let j = 0; j < process.argv.length; j++) {
//   console.log(j + ' -> ' + (process.argv[j]));
// }

