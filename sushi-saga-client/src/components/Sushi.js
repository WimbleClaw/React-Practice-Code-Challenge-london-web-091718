import React from "react";

class Sushi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.onEaten(this.props.sushi);
  };

  render() {
    const sushi = this.props.sushi;
    return (
      <div className="sushi">
        <div
          className="plate"
          onClick={this.props.eaten ? null : this.handleClick}
        >
          {this.props.eaten ? null : (
            <img src={sushi.img_url} alt="sushi" width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
