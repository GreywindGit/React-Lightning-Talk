import React, { Component } from 'react';
import './App.css';
import Cookie from './Cookie/Cookie';

class App extends Component {
  state = {
      cookies : [
        {name: "Chocolate Chips Cookie", price: 1.25, amount: 2},
        {name: "Tiramisu", price: 3.25, amount: 1},
        {name: "Cheesecake", price: 2.35, amount: 5}
      ]
  }

  changeCookieAmountHandler = (addAmount) => {
    console.log('Clicked ' + addAmount);
    this.setState({
      cookies: [
        {name: "Chocolate Chips Cookie", price: 1.25, amount: (this.state.cookies[0].amount + addAmount)},
        {name: "Tiramisu", price: 3.25, amount: (this.state.cookies[1].amount + addAmount)},
        {name: "Cheesecake", price: 2.35, amount: (this.state.cookies[2].amount + addAmount)}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Cookie name={this.state.cookies[0].name} 
                amount={this.state.cookies[0].amount} 
                price={this.state.cookies[0].price}   
                click={this.changeCookieAmountHandler.bind(this, 1)} />
        <Cookie name={this.state.cookies[1].name} 
                amount={this.state.cookies[1].amount} 
                price={this.state.cookies[1].price} 
                click={this.changeCookieAmountHandler.bind(this, 2)} />
        <Cookie name={this.state.cookies[2].name} 
                amount={this.state.cookies[2].amount} 
                price={this.state.cookies[2].price} />
      </div>
    );
  }
}

export default App;
