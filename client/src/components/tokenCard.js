import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleToken: id => {
      dispatch(actions.getSingleToken(id));
    },
    saveTokenId: id => {
      dispatch(actions.saveTokenId(id));
    },
    favoriteToken: id => {
      dispatch(actions.favoriteToken(id));
    },
    unfavoriteToken: id => {
      dispatch(actions.unfavoriteToken(id));
    }
  };
};

class TokenCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonFunc;
    let buttonTxt;

    if (this.props.is_favorite) {
      buttonTxt = "Unfavorite";
      buttonFunc = this.props.unfavoriteToken;
    } else {
      buttonTxt = "Favorite";
      buttonFunc = this.props.favoriteToken;
    }

    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <Card.Body>
          <Card.Title>{this.props.token_name}</Card.Title>

          <Link to="/token">
            <Button
              onClick={() => this.props.getSingleToken(this.props.token_id)}
              style={{ margin: "10px" }}
            >
              More info
            </Button>
          </Link>

          <Button onClick={() => buttonFunc(this.props.token_id)}>
            {buttonTxt}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenCard);
