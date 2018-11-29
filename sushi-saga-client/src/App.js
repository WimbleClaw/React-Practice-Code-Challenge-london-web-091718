import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSushis: [],
      eaten: [],
      customerBalance: 100
    };
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(allSushis => this.setState({ allSushis }));
  }

  onEaten = sushi => {
    if (this.state.eaten.includes(sushi.id)) return;
    if (this.state.customerBalance < sushi.price) return;

    this.setState({
      eaten: [...this.state.eaten, sushi.id],
      customerBalance: this.state.customerBalance - sushi.price
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushis={this.state.allSushis}
          eaten={this.state.eaten}
          onEaten={this.onEaten}
        />
        <Table balance={this.state.customerBalance} />
      </div>
    );
  }
}

export default App;
