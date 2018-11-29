import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      query: ""
    };
  }

  showSushiBelt() {
    const filteredSushi = this.props.allSushis.filter(sushi =>
      sushi.name.includes(this.state.query)
    );

    return filteredSushi.slice(this.state.page * 4, this.state.page * 4 + 4);
  }

  moreSushi = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  queryChanged = event => {
    this.setState({
      query: event.target.value,
      page: 0
    });
  };

  render() {
    console.log(this.showSushiBelt());
    return (
      <Fragment>
        <input type="text" onChange={this.queryChanged} />
        <div className="belt">
          {this.showSushiBelt().map(sushi => (
            <Sushi
              sushi={sushi}
              key={sushi.id}
              eaten={this.props.eaten.includes(sushi.id)}
              onEaten={this.props.onEaten}
            />
          ))}
          <MoreButton moreSushi={this.moreSushi} />
        </div>
      </Fragment>
    );
  }
}
export default SushiContainer;
