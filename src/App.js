import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import Cart from './components/Cart';

var productInfo = {
  id: "999",
  name: "게살볶음밥",
  count: 20,
  size: 10
};

class App extends Component {
  state = {
    information: [],
    cartList: [],
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

  itemCounterCallBack = (item) => {
    const { cartList } = this.state;
    console.log('recevied item data');
    console.log(item);
    this.setState({
      cartList: cartList.concat({
      ...item,
      })
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information}/>
        {/* {JSON.STRINGIFY(THIS.STATE.INFORMATION)} */}
        <Counter callbackFromParent={this.itemCounterCallBack} product={productInfo} />


        <div>
          Cart
          <Cart cartItemList={this.cartList} />
        </div>
      </div>
    );
  }
}

export default App;
