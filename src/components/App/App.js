import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  onClick = () => {
    console.log('hello');
  };

  render() {
    return (
      <button className={styles.app} type="button" onClick={this.onClick}>
        Hello
      </button>
    );
  }
}

export default App;
