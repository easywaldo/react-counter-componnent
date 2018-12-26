import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

var productInfo = {
  id: 999,
  name: "게살볶음밥"
}

class App extends Component {
  state = {
    information: [],
  }
  
  handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      })
    });
  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information}/>
        {/* {JSON.STRINGIFY(THIS.STATE.INFORMATION)} */}
        {/* <Counter product={productInfo} /> */}
      </div>
    );
  }
}

export default App;
