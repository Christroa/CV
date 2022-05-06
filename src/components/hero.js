import React, { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="main">
        <div className="sections">
          <div className="generalInfo">
            {this.props.info.map((ff) => {
              return <p onClick={this.props.upgen}>{`${ff[0]}: ${ff[1]}`}</p>;
              console.log(ff);
            })}
          </div>
          <div className="educationInfo">
            {this.props.edu.map((ff) => {
              return <p onClick={this.props.upedu}>{`${ff[0]}: ${ff[1]}`}</p>;
              console.log(ff);
            })}
          </div>
          <div className="experienceInfo">
            {this.props.exp.map((ff) => {
              return <p onClick={this.props.upexp}>{`${ff[0]}: ${ff[1]}`}</p>;
              //   console.log(ff)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
