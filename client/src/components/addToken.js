import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { Form, Button, Nav } from "react-bootstrap";
import * as actions from "../actions/actions";

const mapStateToProps = state => {
  const store = state.mainReducer;
  return {
    new_token_name: store.new_token_name,
    new_token_price: store.new_token_price,
    new_token_symbol: store.new_token_symbol,
    new_token_volume: store.new_token_volume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveName: name => {
      dispatch(actions.saveName(name));
    },
    savePrice: price => {
      dispatch(actions.savePrice(price));
    },
    saveSymbol: symbol => {
      dispatch(actions.saveSymbol(symbol));
    },
    saveVolume: volume => {
      dispatch(actions.saveVolume(volume));
    },
    createToken: (name, price, symbol, volume) => {
      dispatch(actions.createToken(name, price, symbol, volume));
    }
  };
};

class AddToken extends Component {
  constructor(props) {
    super(props);

    this.submitToken = this.submitToken.bind(this);
  }

  submitToken(e) {
    e.preventDefault();
    const name = this.props.new_token_name;
    const price = this.props.new_token_price;
    const symbol = this.props.new_token_symbol;
    const volume = this.props.new_token_volume;

    this.props.createToken(name, price, symbol, volume);
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <NavBar />
        <div className="centered-parent">
          <div className="centered-child">
            <Form onSubmit={this.submitToken}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Token Name"
                  onChange={e => this.props.saveName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  onChange={e => this.props.savePrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Symbol</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Symbol"
                  onChange={e => this.props.saveSymbol(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Volume</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Volume"
                  onChange={e => this.props.saveVolume(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToken);
