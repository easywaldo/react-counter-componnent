import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm';

var productInfo = {
  id: 999,
  name: "게살볶음밥"
}

class App extends Component {
  state = {
    information: [],
  }
  
  handleCreate = (data) =>{
    console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat(data),
    })
  }



  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
        {/* <Counter product={productInfo} /> */}
      </div>
    );
  }
}

export default App;
