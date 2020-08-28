import React, { Component } from "react";
import {Redirect, HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/Koodilaskuri/koodilaskuri.css";
import Add from "./components/Add/Add.js";
import ItemForm from "./components/ItemForm/ItemForm";
import Graafi from "./components/Graafi/Graafi.js";
import Header from "./components/Header.js";
import Koodilaskuri from "./components/Koodilaskuri/Koodilaskuri";
import Menu from "./components/Menu/Menu.js";
import testdata from "./components/testdata";
import "./components/header.css";
 
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

  render() {
    //App.js returns this thing below

    return (
      <HashRouter basename='/'>
<Redirect to="/koodilaskuri" />
          <Header />
        <div className="wrap">

          <div className="box">
            <Route
              path="/ItemForm"
              render={(props) => (
                <ItemForm
                  {...props}
                  itemformpropsii={this.state.data}
                  itemformpropsii2={"hei"}
                  hfm={this.handleFormSubmit}
                />
              )}
            ></Route>

            <Route
              path="/Koodilaskuri"
              render={(props) => (
                <Koodilaskuri
                  {...props}
                  koodipropsii={this.state.data}
                  koodipropsii2={"hei"}
                  hfm={this.handleFormSubmit}
                />
              )}
            ></Route>

            <Route
              path="/Graafi"
              render={(props) => (
                <Graafi {...props} koodipropsii={this.state.data} />
              )}
            ></Route>
          </div>
          <Menu />
        </div>
      </HashRouter>
    );
  } //And stops rendering right here. It sticks it in Index.js -> /public/index.html -> root div
}

export default App;
/*  onFormSubmit={props.handleSubmit}
 */
