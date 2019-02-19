import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import TokenCard from "./tokenCard";
import * as actions from "../actions/actions";

const mapStateToProps = state => {
  const store = state.mainReducer;
  return {
    tokens: store.tokens,
    favorites: store.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTokens: () => {
      dispatch(actions.getAllTokens());
    },
    getWindowFavorites: () => {
      dispatch(actions.getWindowFavorites());
    }
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTokens();
    this.props.getWindowFavorites();
  }

  render() {
    const tokens = this.props.tokens;
    const favorites = this.props.favorites;
    const tokenArr = [];
    const favoriteArr = [];

    for (let key in tokens) {
      const token_name = tokens[key].name;
      if (favorites[key]) {
        favoriteArr.push(
          <TokenCard
            key={key}
            token_name={token_name}
            token_id={key}
            is_favorite={true}
          />
        );
      } else {
        tokenArr.push(
          <TokenCard key={key} token_name={token_name} token_id={key} />
        );
      }
    }

    return (
      <div>
        <NavBar />
        <div className="token-parent">
          <div className="favorites">
            <h2>Favorites</h2>
            <div className="token-container">{favoriteArr}</div>
          </div>
          <div className="all-tokens">
            <h2>All Tokens</h2>
            <div className="token-container">{tokenArr}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
