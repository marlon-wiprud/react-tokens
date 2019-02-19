import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/home";
import SingleCard from "./components/singleCard";
import AddToken from "./components/addToken";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addtoken" component={AddToken} />

          <Route exact path="/token" component={SingleCard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
