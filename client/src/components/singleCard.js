import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import * as actions from "../actions/actions";

const mapStateToProps = state => {
  const store = state.mainReducer;
  return {
    token: store.single_token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favoriteToken: id => {
      dispatch(actions.favoriteToken(id));
    },
    unfavoriteToken: id => {
      dispatch(actions.unfavoriteToken(id));
    }
  };
};

class SingleCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let btnTxt = "favorite";
    let btnFunc;
    if (this.props.token.is_favorite) {
      btnTxt = "Unfavorite";
      btnFunc = this.props.unfavoriteToken;
    } else {
      btnFunc = this.props.favoriteToken;
    }

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <NavBar />
        <div className="centered-parent">
          <div className="centered-child">
            <p>Name: {this.props.token.name}</p>
            <p>Price: {this.props.token.price}</p>
            <p>symbol: {this.props.token.symbol}</p>
            <p>volume: {this.props.token.volume}</p>
            <Button onClick={() => btnFunc(this.props.token.id)}>
              {btnTxt}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);
