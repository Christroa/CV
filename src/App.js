import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/hero";
import { Header, Footer } from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "Collins Ikechukwu",
        email: "collinschristroa@gmail.com",
        phone: "09065377671",
      },
      education: {
        school: "ESUT",
        course: "Computer Science",
        year: "2022",
      },
      experience: {
        experience1: "Have Taugt",
        experience2: "Have Helped",
      },
    };
  }

  gen = () => {
    let name = prompt("Please Type your name");
    let email = prompt("Please type email");
    let phone = prompt("Please tpe your Phone number");
    this.setState({
      general: {
        name: name,
        email: email,
        phone: phone,
      },
    });
    console.log(this.state.general);
  };
  edu = () => {
    let school = prompt("Which school did you attend");
    let course = prompt("Which course did you study");
    let year = prompt("What year did you graduate");
    this.setState({
      education: {
        school: school,
        course: course,
        year: year,
      },
    });
    console.log(this.state.education);
  };
  exp = () => {
    let experience1 = prompt("Your work experience");
    let experience2 = prompt("Your work experience");
    this.setState({
      experience: {
        experience1: experience1,
        experience2: experience2,
      },
    });
    console.log(this.state.general);
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Cards
          info={Object.entries(this.state.general)}
          upgen={this.gen}
          upedu={this.edu}
          upexp={this.exp}
          edu={Object.entries(this.state.education)}
          exp={Object.entries(this.state.experience)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
