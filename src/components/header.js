import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <h1>cv application</h1>
      </div>
    );
  }
}
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <h1>Click on any of the info's to edit</h1>
      </div>
    );
  }
}

export { Header, Footer };
