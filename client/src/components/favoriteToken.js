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
    }
  };
};

class TokenCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

          <Button onClick={() => this.props.favoriteToken(this.props.token_id)}>
            Unfavorite
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
