import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  // foo
  static propTypes = {
    renderTarget: PropTypes.string.isRequired, //
  }

  static defaultProps = {
  }

  render() {
    const { renderTarget } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          EEEEEEEEEEEEEEEEEEEE
          {renderTarget}
        </p>
      </div>
    );
  }
}

export default App;
