import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

var productInfo = {
  name: "게살볶음밥"
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter product={productInfo} />
      </div>
    );
  }
}

export default App;
