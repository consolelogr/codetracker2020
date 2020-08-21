import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu.js";
import Header from "./components/Header.js";

import Add from "./components/Add/Add.js";
import Koodilaskuri from "./components/Koodilaskuri/Koodilaskuri";
import "./components/Koodilaskuri/koodilaskuri.css";
import Graafi from "./components/Graafi/Graafi.js";

import testdata from "./components/testdata";

//https://react-icons.netlify.com/#/icons/io  <-- tuolta löytyy ikonit

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    console.log("// App - constructor. props:", props, this.props);
  }

  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    storeddata.push(newdata);
    this.setState({
      data: storeddata,
    });
    console.log("// App - handleForm Submit", storeddata);
  }
  /*const testdata = [
    {name: 'html', hours: 1, pvm: "01/06/2019", tehot: "10%", fill: 'red'},
    {name: 'css',  hours: 4, pvm: "01/06/2019", tehot: "20%",fill: '#83a6ed'},
    {name: 'js' , hours: 1, pvm: "01/06/2019", tehot: "30%",fill: '#8dd1e1'},
    {name: 'React', hours: 8, pvm: "01/06/2014", tehot: "40%",fill: '#82ca9d'},
    {name: 'Git', hours: 8, pvm: "01/06/2019", tehot: "50%",fill: '#a4de6c'},
  ];*/
  ohShit() {}

  render() {
    //App.js returns this thing below

    return (
      <Router>
        <div className="wrap">
          <button
            onClick={this.handleFormSubmit.bind(this, {
              name: "cool!",
              hours: 7,
              pvm: "07/07/2525",
              tehot: "70%",
              fill: "white",
            })}
          >
            {" "}
            What does this button do?{" "}
          </button>
          <Header />
          <div className="box">
            <Route path="/Add" exact component={Add} />
            <Route
              path="/Koodilaskuri"
              render={(props) => (
                <Koodilaskuri {...props} koodipropsii={this.state.data} /> // pass props/(koodipropsii) to child in route
              )}
            ></Route>
            <Route path="/Graafi" exact component={Graafi}></Route>
          </div>
          <Menu />
        </div>
      </Router>
    );
  } //And stops rendering right here. It sticks it in Index.js -> /public/index.html -> root div
}

export default App;
